const crypto = require("crypto");
const path = require("path");
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = Number(process.env.PORT || 3000);
const mongoUri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB || "landscape-map";
const collectionName = process.env.SIGN_IN_COLLECTION || "sign in";
const tokenSecret = process.env.TOKEN_SECRET || "dev-secret";

if (!mongoUri) {
  throw new Error("Missing MONGODB_URI in .env");
}

const client = new MongoClient(mongoUri, { serverSelectionTimeoutMS: 15000 });
let usersCollection;
let interactionsCollection;
let commentsCollection;
let userImagesCollection;
let favoritesCollection;
let routeLikesCollection;
let chatMessagesCollection;
let adminsCollection;
let ratingsCollection;
let locationRecordsCollection;
let databaseReady = false;
const chatSSEClients = [];
const ADMIN_SECRET_KEY = "888888";

const RECOMMENDED_ROUTES = [
  {
    id: "east-suburbs",
    name: "东郊历史线",
    description: "明孝陵 → 中山陵 → 灵谷寺 → 美龄宫，感受紫金山千年文脉",
    spotIds: ["ming-xiaoling", "sun-yat-sen-mausoleum", "linggu-temple", "meiling-palace"]
  },
  {
    id: "city-south",
    name: "城南文化线",
    description: "夫子庙 → 瞻园 → 老门东 → 中华门 → 大报恩寺，品味老城南韵味",
    spotIds: ["fuzimiao", "zhanyuan", "laomendong", "zhonghua-gate", "porcelain-tower"]
  },
  {
    id: "city-north",
    name: "城北古迹线",
    description: "鸡鸣寺 → 台城 → 玄武门 → 玄武湖，登高望远湖光山色",
    spotIds: ["jimingsi", "taicheng", "xuanwu-gate", "xuanwu-lake-park"]
  },
  {
    id: "modern-history",
    name: "近代史迹线",
    description: "总统府 → 梅园新村 → 拉贝故居 → 颐和路，追寻民国记忆",
    spotIds: ["presidential-palace", "meiyuan-xincun", "rabe-house", "yihe-road"]
  },
  {
    id: "riverside",
    name: "滨江城墙线",
    description: "阅江楼 → 挹江门 → 龙江宝船厂 → 石头城，一览长江与城墙",
    spotIds: ["yuejiang-tower", "yijiang-gate", "longjiang-shipyard", "stone-city"]
  }
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(express.json({ limit: "10mb" }));
app.use(express.static(__dirname));

app.use("/api", (req, res, next) => {
  if (!databaseReady) {
    return res.status(503).json({ message: "Database is unavailable. Please try again later." });
  }
  next();
});

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function normalizeUsername(username) {
  return String(username || "").trim();
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const passwordHash = crypto
    .pbkdf2Sync(String(password), salt, 120000, 64, "sha512")
    .toString("hex");
  return { salt, passwordHash };
}

function verifyPassword(password, user) {
  const { passwordHash } = hashPassword(password, user.salt);
  return crypto.timingSafeEqual(Buffer.from(passwordHash, "hex"), Buffer.from(user.passwordHash, "hex"));
}

function createToken(user) {
  const payload = Buffer.from(JSON.stringify({
    sub: String(user._id),
    username: user.username,
    email: user.email,
    avatar: user.avatar || "",
    exp: Date.now() + 1000 * 60 * 60 * 24
  })).toString("base64url");
  const signature = crypto
    .createHmac("sha256", tokenSecret)
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

function publicUser(user) {
  return {
    id: String(user._id),
    username: user.username,
    email: user.email,
    avatar: user.avatar || "",
    createdAt: user.createdAt
  };
}

function parseTokenPayload(token) {
  const [payloadB64, signature] = String(token || "").split(".");
  if (!payloadB64 || !signature) return null;

  const expectedSignature = crypto
    .createHmac("sha256", tokenSecret)
    .update(payloadB64)
    .digest("base64url");

  if (signature !== expectedSignature) return null;

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
    if (!payload?.sub || Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

async function getOptionalRequestUser(req) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

    const payload = parseTokenPayload(authHeader.slice(7));
    if (!payload?.sub || payload.isAdmin) return null;

    const user = await usersCollection.findOne({ _id: new ObjectId(payload.sub) });
    return user ? publicUser(user) : null;
  } catch {
    return null;
  }
}

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "请先登录。" });
    }

    const payload = parseTokenPayload(authHeader.slice(7));
    if (!payload) {
      return res.status(401).json({ message: "无效的令牌。" });
    }

    let userId;
    try {
      userId = new ObjectId(payload.sub);
    } catch {
      return res.status(401).json({ message: "无效的用户ID。" });
    }

    if (payload.isAdmin) {
      const admin = await adminsCollection.findOne({ _id: userId });
      if (!admin) {
        return res.status(401).json({ message: "管理员不存在。" });
      }
      req.user = { id: String(admin._id), username: admin.username, email: admin.email };
      return next();
    }

    const user = await usersCollection.findOne({ _id: userId });
    if (!user) {
      return res.status(401).json({ message: "用户不存在。" });
    }

    req.user = publicUser(user);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "验证失败。" });
  }
}

function validateRegister(body) {
  const username = normalizeUsername(body.username);
  const email = normalizeEmail(body.email);
  const password = String(body.password || "");

  if (username.length < 2 || username.length > 24) {
    return { error: "用户名长度需要在 2-24 个字符之间。" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "请输入正确的邮箱地址。" };
  }

  if (password.length < 6) {
    return { error: "密码至少需要 6 位。" };
  }

  return { username, email, password };
}

app.post("/api/auth/register", async (req, res) => {
  try {
    const data = validateRegister(req.body);
    if (data.error) return res.status(400).json({ message: data.error });

    const exists = await usersCollection.findOne({
      $or: [{ email: data.email }, { username: data.username }]
    });

    if (exists) {
      return res.status(409).json({ message: "用户名或邮箱已经注册。" });
    }

    const { salt, passwordHash } = hashPassword(data.password);
    const now = new Date();
    const user = {
      username: data.username,
      email: data.email,
      salt,
      passwordHash,
      avatar: req.body.avatar || "",
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now
    };

    const result = await usersCollection.insertOne(user);
    user._id = result.insertedId;

    res.status(201).json({
      message: "注册成功。",
      token: createToken(user),
      user: publicUser(user)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "注册失败，请稍后重试。" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const account = String(req.body.account || "").trim();
    const password = String(req.body.password || "");

    if (!account || !password) {
      return res.status(400).json({ message: "请输入账号和密码。" });
    }

    const user = await usersCollection.findOne({
      $or: [{ email: normalizeEmail(account) }, { username: account }]
    });

    if (!user || !verifyPassword(password, user)) {
      return res.status(401).json({ message: "用户名、邮箱或密码错误。" });
    }

    await usersCollection.updateOne(
      { _id: user._id },
      { $set: { lastLoginAt: new Date(), updatedAt: new Date() } }
    );

    res.json({
      message: "登录成功。",
      token: createToken(user),
      user: publicUser(user)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "登录失败，请稍后重试。" });
  }
});

// === 管理员接口 ===
function createAdminToken(admin) {
  const payload = Buffer.from(JSON.stringify({
    sub: String(admin._id),
    username: admin.username,
    email: admin.email,
    isAdmin: true,
    exp: Date.now() + 1000 * 60 * 60 * 24
  })).toString("base64url");
  const signature = crypto
    .createHmac("sha256", tokenSecret)
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

async function requireAdmin(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "请先登录。" });
    }
    const token = authHeader.slice(7);
    const [payloadB64] = token.split(".");
    let payload;
    try {
      payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
    } catch {
      return res.status(401).json({ message: "无效的令牌。" });
    }
    if (!payload.isAdmin || Date.now() > payload.exp) {
      return res.status(403).json({ message: "需要管理员权限。" });
    }
    let adminId;
    try {
      adminId = new ObjectId(payload.sub);
    } catch {
      return res.status(401).json({ message: "无效的管理员ID。" });
    }
    const admin = await adminsCollection.findOne({ _id: adminId });
    if (!admin) {
      return res.status(401).json({ message: "管理员不存在。" });
    }
    req.admin = { id: String(admin._id), username: admin.username, email: admin.email };
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "验证失败。" });
  }
}

app.post("/api/admin/register", async (req, res) => {
  try {
    const { username, email, password, secretKey } = req.body;
    if (secretKey !== ADMIN_SECRET_KEY) {
      return res.status(403).json({ message: "管理员密钥错误。" });
    }
    const data = validateRegister({ username, email, password });
    if (data.error) return res.status(400).json({ message: data.error });

    const exists = await adminsCollection.findOne({
      $or: [{ email: data.email }, { username: data.username }]
    });
    if (exists) {
      return res.status(409).json({ message: "用户名或邮箱已注册。" });
    }

    const { salt, passwordHash } = hashPassword(data.password);
    const now = new Date();
    const admin = {
      username: data.username,
      email: data.email,
      salt,
      passwordHash,
      createdAt: now,
      updatedAt: now
    };
    const result = await adminsCollection.insertOne(admin);
    admin._id = result.insertedId;

    res.status(201).json({
      message: "管理员注册成功。",
      token: createAdminToken(admin),
      admin: { id: String(admin._id), username: admin.username, email: admin.email }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "注册失败，请稍后重试。" });
  }
});

app.post("/api/admin/login", async (req, res) => {
  try {
    const account = String(req.body.account || "").trim();
    const password = String(req.body.password || "");
    if (!account || !password) {
      return res.status(400).json({ message: "请输入账号和密码。" });
    }
    const admin = await adminsCollection.findOne({
      $or: [{ email: normalizeEmail(account) }, { username: account }]
    });
    if (!admin || !verifyPassword(password, admin)) {
      return res.status(401).json({ message: "用户名、邮箱或密码错误。" });
    }
    res.json({
      message: "管理员登录成功。",
      token: createAdminToken(admin),
      admin: { id: String(admin._id), username: admin.username, email: admin.email }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "登录失败，请稍后重试。" });
  }
});

// 管理员：获取所有用户
app.get("/api/admin/users", requireAdmin, async (req, res) => {
  try {
    const users = await usersCollection.find({}, { projection: { salt: 0, passwordHash: 0 } }).sort({ createdAt: -1 }).toArray();
    res.json({ users: users.map(u => ({ id: String(u._id), username: u.username, email: u.email, createdAt: u.createdAt })) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取用户列表失败" });
  }
});

// 管理员：删除用户
app.delete("/api/admin/users/:userId", requireAdmin, async (req, res) => {
  try {
    const userId = req.params.userId;
    let objectId;
    try { objectId = new ObjectId(userId); } catch { return res.status(400).json({ message: "无效的用户ID" }); }
    const user = await usersCollection.findOne({ _id: objectId });
    if (!user) return res.status(404).json({ message: "用户不存在" });

    await usersCollection.deleteOne({ _id: objectId });
    await commentsCollection.deleteMany({ userId });
    await favoritesCollection.deleteMany({ userId });
    await interactionsCollection.updateMany({ likes: userId }, { $pull: { likes: userId } });
    await userImagesCollection.deleteMany({ userId });
    await chatMessagesCollection.deleteMany({ userId });
    await ratingsCollection.deleteMany({ userId });
    res.json({ message: "用户已删除" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "删除用户失败" });
  }
});

// 管理员：删除任意评论
app.delete("/api/admin/comments/:commentId", requireAdmin, async (req, res) => {
  try {
    const commentId = req.params.commentId;
    let objectId;
    try { objectId = new ObjectId(commentId); } catch { return res.status(400).json({ message: "无效的评论ID" }); }
    const result = await commentsCollection.deleteOne({ _id: objectId });
    if (result.deletedCount === 0) return res.status(404).json({ message: "评论不存在" });
    res.json({ message: "评论已删除" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "删除评论失败" });
  }
});

// 管理员：删除任意图片
app.delete("/api/admin/images/:imageId", requireAdmin, async (req, res) => {
  try {
    const imageId = req.params.imageId;
    let objectId;
    try { objectId = new ObjectId(imageId); } catch { return res.status(400).json({ message: "无效的图片ID" }); }
    const result = await userImagesCollection.deleteOne({ _id: objectId });
    if (result.deletedCount === 0) return res.status(404).json({ message: "图片不存在" });
    res.json({ message: "图片已删除" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "删除图片失败" });
  }
});

// 管理员：删除任意聊天消息
app.delete("/api/admin/chat/:messageId", requireAdmin, async (req, res) => {
  try {
    const messageId = req.params.messageId;
    let objectId;
    try { objectId = new ObjectId(messageId); } catch { return res.status(400).json({ message: "无效的消息ID" }); }
    const result = await chatMessagesCollection.deleteOne({ _id: objectId });
    if (result.deletedCount === 0) return res.status(404).json({ message: "消息不存在" });
    res.json({ message: "消息已删除" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "删除消息失败" });
  }
});

// 管理员：获取所有评论
app.get("/api/admin/comments", requireAdmin, async (req, res) => {
  try {
    const comments = await commentsCollection.find({}).sort({ createdAtTimestamp: -1 }).limit(100).toArray();
    res.json({ comments: comments.map(c => ({ id: String(c._id), spotId: c.spotId, userId: c.userId, username: c.username, content: c.content, image: c.image || "", createdAt: c.createdAt })) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取评论列表失败" });
  }
});

// 管理员：获取所有图片
app.get("/api/admin/images", requireAdmin, async (req, res) => {
  try {
    const images = await userImagesCollection.find({}).sort({ createdAt: -1 }).limit(100).toArray();
    res.json({ images: images.map(img => ({ id: String(img._id), spotId: img.spotId, userId: img.userId, username: img.username, url: img.url, createdAt: img.createdAt })) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取图片列表失败" });
  }
});

// 管理员：获取所有聊天消息
app.get("/api/admin/chat", requireAdmin, async (req, res) => {
  try {
    const messages = await chatMessagesCollection.find({}).sort({ createdAt: -1 }).limit(100).toArray();
    res.json({ messages: messages.map(m => ({ id: String(m._id), userId: m.userId, username: m.username, content: m.content, image: m.image, createdAt: m.createdAt })) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取聊天记录失败" });
  }
});

// 管理员：获取所有评分
app.get("/api/admin/ratings", requireAdmin, async (req, res) => {
  try {
    const ratings = await ratingsCollection.find({}).sort({ createdAt: -1 }).limit(100).toArray();
    res.json({ ratings: ratings.map(r => ({ id: String(r._id), spotId: r.spotId, userId: r.userId, username: r.username, rating: r.rating, createdAt: r.createdAt })) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取评分列表失败" });
  }
});

// 管理员：删除任意评分
app.get("/api/admin/dashboard", requireAdmin, async (_req, res) => {
  try {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [userCount, commentCount, imageCount, todayVisitTotal, topVisits] = await Promise.all([
      usersCollection.countDocuments({}),
      commentsCollection.countDocuments({}),
      userImagesCollection.countDocuments({}),
      visitsCollection ? visitsCollection.countDocuments({ timestamp: { $gte: startOfDay } }) : 0,
      visitsCollection ? visitsCollection.aggregate([
        { $match: { timestamp: { $gte: startOfDay } } },
        { $group: { _id: "$spotId", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ]).toArray() : []
    ]);

    res.json({
      totals: {
        users: userCount,
        comments: commentCount,
        images: imageCount,
        todayVisits: todayVisitTotal
      },
      topSpots: topVisits.map((item) => ({
        spotId: item._id,
        count: item.count
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取仪表盘数据失败" });
  }
});

app.delete("/api/admin/ratings/:ratingId", requireAdmin, async (req, res) => {
  try {
    const ratingId = req.params.ratingId;
    let objectId;
    try { objectId = new ObjectId(ratingId); } catch { return res.status(400).json({ message: "无效的评分ID" }); }
    const result = await ratingsCollection.deleteOne({ _id: objectId });
    if (result.deletedCount === 0) return res.status(404).json({ message: "评分不存在" });
    res.json({ message: "评分已删除" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "删除评分失败" });
  }
});

app.get("/api/health", async (_req, res) => {
  res.json({
    ok: true,
    database: databaseName,
    collection: collectionName
  });
});

app.get("/api/interactions/:spotId", async (req, res) => {
  try {
    const spotId = req.params.spotId;

    const interaction = await interactionsCollection.findOne({ spotId });
    const comments = await commentsCollection
      .find({ spotId })
      .sort({ createdAtTimestamp: -1 })
      .toArray();

    // Look up user avatars for comments
    const commentUserIds = [...new Set(comments.map(c => c.userId).filter(Boolean))];
    let avatarMap = {};
    if (commentUserIds.length > 0) {
      try {
        const { ObjectId } = require("mongodb");
        const users = await usersCollection.find({ _id: { $in: commentUserIds.map(id => { try { return new ObjectId(id); } catch(e) { return null; } }).filter(Boolean) } }).toArray();
        users.forEach(u => { avatarMap[String(u._id)] = u.avatar || ""; });
      } catch(e) {}
    }

    res.json({
      spotId,
      likes: interaction?.likes || [],
      comments: comments.map(c => ({
        id: String(c._id),
        userId: c.userId,
        username: c.username,
        avatar: avatarMap[c.userId] || "",
        content: c.content,
        image: c.image || "",
        createdAt: c.createdAt
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取互动数据失败" });
  }
});

app.post("/api/interactions/:spotId/like", requireAuth, async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ message: "用户 ID 不能为空" });
    }

    const interaction = await interactionsCollection.findOne({ spotId });

    if (!interaction) {
      await interactionsCollection.insertOne({
        spotId,
        likes: [userId],
        comments: [],
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return res.json({ message: "点赞成功", liked: true });
    }

    if (interaction.likes.includes(userId)) {
      return res.status(409).json({ message: "已经点过赞了" });
    }

    await interactionsCollection.updateOne(
      { spotId },
      {
        $push: { likes: userId },
        $set: { updatedAt: new Date() }
      }
    );

    res.json({ message: "点赞成功", liked: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "点赞失败" });
  }
});

app.delete("/api/interactions/:spotId/like", requireAuth, async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ message: "用户 ID 不能为空" });
    }

    const interaction = await interactionsCollection.findOne({ spotId });

    if (!interaction || !interaction.likes.includes(userId)) {
      return res.status(404).json({ message: "未找到点赞记录" });
    }

    await interactionsCollection.updateOne(
      { spotId },
      {
        $pull: { likes: userId },
        $set: { updatedAt: new Date() }
      }
    );

    res.json({ message: "取消点赞成功", liked: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "取消点赞失败" });
  }
});

app.post("/api/comments", requireAuth, async (req, res) => {
  try {
    const { spotId, content, image } = req.body;
    const user = req.user;
    const trimmedContent = String(content || "").trim();
    const imageData = typeof image === "string" && image.startsWith("data:image/") ? image : "";

    if (!spotId || (!trimmedContent && !imageData)) {
      return res.status(400).json({ message: "景点 ID 和评论内容不能为空" });
    }

    const comment = {
      spotId,
      userId: user.id,
      username: user.username,
      content: trimmedContent,
      image: imageData,
      createdAt: new Date().toLocaleString("zh-CN"),
      createdAtTimestamp: new Date()
    };

    const result = await commentsCollection.insertOne(comment);

    res.status(201).json({
      message: "评论成功",
      comment: {
        id: String(result.insertedId),
        ...comment
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "评论失败" });
  }
});

app.delete("/api/comments/:commentId", requireAuth, async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const user = req.user;

    let objectId;
    try {
      objectId = new ObjectId(commentId);
    } catch {
      return res.status(400).json({ message: "无效的评论ID" });
    }

    const comment = await commentsCollection.findOne({ _id: objectId });

    if (!comment) {
      return res.status(404).json({ message: "评论不存在" });
    }

    if (comment.userId !== user.id) {
      return res.status(403).json({ message: "无权删除他人评论" });
    }

    await commentsCollection.deleteOne({ _id: objectId });

    res.json({ message: "评论已删除" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "删除评论失败" });
  }
});

// 用户上传图片相关接口
app.get("/api/images/:spotId", async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const images = await userImagesCollection
      .find({ spotId })
      .sort({ createdAt: -1 })
      .toArray();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取图片失败" });
  }
});

app.put("/api/user/avatar", requireAuth, async (req, res) => {
  try {
    const { avatar } = req.body;
    if (!avatar || typeof avatar !== "string") {
      return res.status(400).json({ message: "请提供头像" });
    }
    // Validate: must be a system avatar key or a valid data URL (max 500KB)
    const systemAvatars = ["av1","av2","av3","av4","av5","av6","av7","av8"];
    if (!systemAvatars.includes(avatar) && (!avatar.startsWith("data:image/") || avatar.length > 500000)) {
      return res.status(400).json({ message: "头像格式无效" });
    }
    await usersCollection.updateOne({ _id: new (require("mongodb").ObjectId)(req.user.id) }, { $set: { avatar } });
    res.json({ message: "头像已更新", avatar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "更新头像失败" });
  }
});

app.post("/api/images/upload", requireAuth, async (req, res) => {
  try {
    const { spotId, imageData } = req.body;
    const user = req.user;

    if (!spotId || !imageData) {
      return res.status(400).json({ message: "景点 ID 和图片数据不能为空" });
    }

    const newImage = {
      spotId,
      userId: user.id,
      username: user.username,
      url: imageData, // 存储 Base64 数据
      createdAt: new Date(),
    };

    const result = await userImagesCollection.insertOne(newImage);
    res.status(201).json({
      message: "上传成功",
      image: {
        id: result.insertedId,
        ...newImage
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "上传图片失败" });
  }
});

// 用户评论列表
app.get("/api/user/comments", requireAuth, async (req, res) => {
  try {
    const user = req.user;
    const comments = await commentsCollection
      .find({ userId: user.id })
      .sort({ createdAtTimestamp: -1 })
      .toArray();
    res.json({
      comments: comments.map(c => ({
        id: String(c._id),
        spotId: c.spotId,
        content: c.content,
        image: c.image || "",
        createdAt: c.createdAt
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取评论列表失败" });
  }
});

// 用户上传图片列表
app.get("/api/user/images", requireAuth, async (req, res) => {
  try {
    const user = req.user;
    const images = await userImagesCollection
      .find({ userId: user.id })
      .sort({ createdAt: -1 })
      .toArray();
    res.json({
      images: images.map(img => ({
        id: String(img._id),
        spotId: img.spotId,
        url: img.url,
        createdAt: img.createdAt
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取图片列表失败" });
  }
});

// 收藏相关接口
app.get("/api/user/history", requireAuth, async (req, res) => {
  try {
    if (!visitsCollection) return res.json({ history: [] });
    const user = req.user;
    const visits = await visitsCollection
      .find({ userId: user.id })
      .sort({ timestamp: -1 })
      .limit(100)
      .toArray();
    const seen = new Set();
    const history = [];
    for (const visit of visits) {
      if (!visit.spotId || seen.has(visit.spotId)) continue;
      seen.add(visit.spotId);
      history.push({
        spotId: visit.spotId,
        visitedAt: visit.timestamp
      });
      if (history.length >= 20) break;
    }
    res.json({ history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取最近浏览失败" });
  }
});

app.get("/api/profile", requireAuth, async (req, res) => {
  try {
    const user = req.user;
    const [favoritesCount, commentsCount, likesCount, imagesCount] = await Promise.all([
      favoritesCollection.countDocuments({ userId: user.id }),
      commentsCollection.countDocuments({ userId: user.id }),
      interactionsCollection.countDocuments({ likes: user.id }),
      userImagesCollection.countDocuments({ userId: user.id })
    ]);

    res.json({
      user,
      stats: {
        favoritesCount,
        commentsCount,
        likesCount,
        imagesCount
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取个人中心数据失败" });
  }
});

app.get("/api/favorites", requireAuth, async (req, res) => {
  try {
    const user = req.user;
    const favorites = await favoritesCollection
      .find({ userId: user.id })
      .sort({ createdAt: -1 })
      .toArray();

    res.json({
      favorites: favorites.map(fav => ({
        id: String(fav._id),
        spotId: fav.spotId,
        spotName: fav.spotName,
        createdAt: fav.createdAt
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取收藏列表失败" });
  }
});

app.post("/api/favorites", requireAuth, async (req, res) => {
  try {
    const { spotId, spotName } = req.body;
    const user = req.user;

    if (!spotId || !spotName) {
      return res.status(400).json({ message: "景点 ID 和名称不能为空" });
    }

    const exists = await favoritesCollection.findOne({
      userId: user.id,
      spotId
    });

    if (exists) {
      return res.status(409).json({ message: "已经收藏过该景点" });
    }

    const favorite = {
      userId: user.id,
      username: user.username,
      spotId,
      spotName,
      createdAt: new Date()
    };

    const result = await favoritesCollection.insertOne(favorite);
    res.status(201).json({
      message: "收藏成功",
      favorite: {
        id: String(result.insertedId),
        ...favorite
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "收藏失败" });
  }
});

app.delete("/api/favorites/:spotId", requireAuth, async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const user = req.user;

    const result = await favoritesCollection.deleteOne({
      userId: user.id,
      spotId
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "收藏记录不存在" });
    }

    res.json({ message: "取消收藏成功" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "取消收藏失败" });
  }
});

// 推荐路线接口
app.get("/api/recommended-routes", async (req, res) => {
  try {
    const userId = req.user?.id || null;
    const allLikes = await routeLikesCollection.find({}).toArray();
    const likesMap = {};
    allLikes.forEach(doc => {
      likesMap[doc.routeId] = doc.userIds || [];
    });

    const routes = RECOMMENDED_ROUTES.map(route => {
      const likedBy = likesMap[route.id] || [];
      return {
        id: route.id,
        name: route.name,
        description: route.description,
        spotIds: route.spotIds,
        likeCount: likedBy.length,
        liked: userId ? likedBy.includes(userId) : false
      };
    }).sort((a, b) => b.likeCount - a.likeCount);

    res.json({ routes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取推荐路线失败" });
  }
});

app.post("/api/recommended-routes/:routeId/like", requireAuth, async (req, res) => {
  try {
    const routeId = req.params.routeId;
    const userId = req.user.id;
    const route = RECOMMENDED_ROUTES.find(r => r.id === routeId);
    if (!route) return res.status(404).json({ message: "路线不存在" });

    const doc = await routeLikesCollection.findOne({ routeId });
    if (!doc) {
      await routeLikesCollection.insertOne({ routeId, userIds: [userId], createdAt: new Date() });
    } else if (!doc.userIds.includes(userId)) {
      await routeLikesCollection.updateOne({ routeId }, { $push: { userIds: userId } });
    } else {
      return res.status(409).json({ message: "已经点过赞了" });
    }

    const updated = await routeLikesCollection.findOne({ routeId });
    res.json({ message: "点赞成功", liked: true, likeCount: updated.userIds.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "点赞失败" });
  }
});

app.delete("/api/recommended-routes/:routeId/like", requireAuth, async (req, res) => {
  try {
    const routeId = req.params.routeId;
    const userId = req.user.id;

    const doc = await routeLikesCollection.findOne({ routeId });
    if (!doc || !doc.userIds.includes(userId)) {
      return res.status(404).json({ message: "未找到点赞记录" });
    }

    await routeLikesCollection.updateOne({ routeId }, { $pull: { userIds: userId } });
    const updated = await routeLikesCollection.findOne({ routeId });
    res.json({ message: "取消点赞成功", liked: false, likeCount: updated ? updated.userIds.length : 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "取消点赞失败" });
  }
});

// 景点评分接口
app.get("/api/ratings/:spotId", async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const ratings = await ratingsCollection.find({ spotId }).toArray();
    const total = ratings.length;
    const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
    const average = total > 0 ? Math.round((sum / total) * 10) / 10 : 0;
    const userId = req.user?.id || null;
    const userRating = userId ? ratings.find(r => r.userId === userId) : null;
    res.json({
      spotId,
      average,
      total,
      myRating: userRating ? userRating.rating : 0
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取评分失败" });
  }
});

app.post("/api/ratings", requireAuth, async (req, res) => {
  try {
    const { spotId, rating } = req.body;
    const userId = req.user.id;
    if (!spotId) return res.status(400).json({ message: "景点 ID 不能为空" });
    if (typeof rating !== "number" || rating < 0.5 || rating > 5 || rating % 0.5 !== 0) {
      return res.status(400).json({ message: "评分必须是 0.5-5 之间的 0.5 的倍数" });
    }
    const existing = await ratingsCollection.findOne({ spotId, userId });
    if (existing) {
      await ratingsCollection.updateOne({ _id: existing._id }, { $set: { rating, updatedAt: new Date() } });
    } else {
      await ratingsCollection.insertOne({ spotId, userId, username: req.user.username, rating, createdAt: new Date(), updatedAt: new Date() });
    }
    const allRatings = await ratingsCollection.find({ spotId }).toArray();
    const total = allRatings.length;
    const average = Math.round((allRatings.reduce((a, r) => a + r.rating, 0) / total) * 10) / 10;
    res.json({ message: "评分成功", average, total, myRating: rating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "评分失败" });
  }
});

app.delete("/api/ratings/:spotId", requireAuth, async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const userId = req.user.id;
    await ratingsCollection.deleteOne({ spotId, userId });
    const allRatings = await ratingsCollection.find({ spotId }).toArray();
    const total = allRatings.length;
    const average = total > 0 ? Math.round((allRatings.reduce((a, r) => a + r.rating, 0) / total) * 10) / 10 : 0;
    res.json({ message: "取消评分成功", average, total, myRating: 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "取消评分失败" });
  }
});

// 聊天室接口
app.get("/api/chat/messages", async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 50, 200);
    const messages = await chatMessagesCollection
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();
    // Look up user avatars
    const userIds = [...new Set(messages.map(m => m.userId).filter(Boolean))];
    let avatarMap = {};
    if (userIds.length > 0) {
      try {
        const { ObjectId } = require("mongodb");
        const users = await usersCollection.find({ _id: { $in: userIds.map(id => { try { return new ObjectId(id); } catch(e) { return null; } }).filter(Boolean) } }).toArray();
        users.forEach(u => { avatarMap[String(u._id)] = u.avatar || ""; });
      } catch(e) {}
    }
    res.json({
      messages: messages.reverse().map(m => ({
        id: String(m._id),
        userId: m.userId,
        username: m.username,
        avatar: avatarMap[m.userId] || "",
        content: m.content,
        image: m.image || null,
        createdAt: m.createdAt
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取聊天记录失败" });
  }
});

app.post("/api/chat/messages", requireAuth, async (req, res) => {
  try {
    const { content, image } = req.body;
    const user = req.user;

    const hasContent = content && content.trim();
    const hasImage = image && image.startsWith("data:image");

    if (!hasContent && !hasImage) {
      return res.status(400).json({ message: "消息内容不能为空" });
    }

    const message = {
      userId: user.id,
      username: user.username,
      content: hasContent ? content.trim().slice(0, 500) : "",
      image: hasImage ? image : null,
      createdAt: new Date()
    };

    const result = await chatMessagesCollection.insertOne(message);

    // Look up user avatar
    let userAvatar = "";
    try {
      const { ObjectId } = require("mongodb");
      const userDoc = await usersCollection.findOne({ _id: new ObjectId(user.id) });
      if (userDoc) userAvatar = userDoc.avatar || "";
    } catch(e) {}

    const saved = {
      id: String(result.insertedId),
      ...message,
      avatar: userAvatar,
      createdAt: message.createdAt
    };

    const payload = `data: ${JSON.stringify(saved)}\n\n`;
    for (const client of chatSSEClients) {
      try { client.write(payload); } catch {}
    }

    res.status(201).json({ message: "发送成功", msg: saved });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "发送失败" });
  }
});

app.get("/api/chat/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");
  res.flushHeaders();
  res.write(": connected\n\n");

  chatSSEClients.push(res);
  req.on("close", () => {
    const idx = chatSSEClients.indexOf(res);
    if (idx !== -1) chatSSEClients.splice(idx, 1);
  });
});

// ===== Visit Tracking & Stats =====
let visitsCollection;

app.post("/api/visits/:spotId", async (req, res) => {
  try {
    if (!visitsCollection) return res.json({ ok: true });
    const user = await getOptionalRequestUser(req);
    await visitsCollection.insertOne({
      spotId: req.params.spotId,
      userId: user?.id || null,
      timestamp: new Date()
    });
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: true });
  }
});

app.get("/api/stats/visits", async (req, res) => {
  try {
    if (!visitsCollection) return res.json({ visits: [] });
    const mode = req.query.mode || "day";
    const now = new Date();
    let startDate;
    if (mode === "day") {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (mode === "month") {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    } else {
      startDate = new Date(now.getFullYear(), 0, 1);
    }
    const results = await visitsCollection.aggregate([
      { $match: { timestamp: { $gte: startDate } } },
      { $group: { _id: "$spotId", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]).toArray();
    res.json({ visits: results });
  } catch (e) {
    res.json({ visits: [] });
  }
});

app.get("/api/stats/ranking", async (req, res) => {
  try {
    if (!visitsCollection) return res.json({ visits: [] });
    const mode = req.query.mode || "day";
    const now = new Date();
    let startDate;
    if (mode === "day") {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (mode === "month") {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    } else {
      startDate = new Date(now.getFullYear(), 0, 1);
    }
    const results = await visitsCollection.aggregate([
      { $match: { timestamp: { $gte: startDate } } },
      { $group: { _id: "$spotId", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 20 }
    ]).toArray();
    res.json({ visits: results });
  } catch (e) {
    res.json({ visits: [] });
  }
});

function formatChinaDayKey(date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(date));
}

function parseDayKey(dayKey) {
  const [year, month, day] = String(dayKey).split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function diffDaysInclusive(startDayKey, endDayKey) {
  const start = parseDayKey(startDayKey);
  const end = parseDayKey(endDayKey);
  return Math.floor((end - start) / 86400000) + 1;
}

function buildAchievement(id, icon, title, description, unlocked, progress, target, hint) {
  const current = Math.max(0, Number(progress || 0));
  const goal = Math.max(1, Number(target || 1));
  return {
    id,
    icon,
    title,
    description,
    unlocked: Boolean(unlocked),
    progress: Math.min(current, goal),
    target: goal,
    percent: Math.min(100, Math.round((current / goal) * 100)),
    hint
  };
}

const ACHIEVEMENT_COPY_ZH = {
  "first-cultivation": {
    icon: "\ud83c\udf31",
    title: "\u9996\u6b21\u5f00\u57a6",
    description: "\u5b8c\u6210\u7b2c\u4e00\u6b21\u666f\u70b9\u8bbf\u95ee\u8bb0\u5f55\u3002",
    hint: "\u8bbf\u95ee\u4efb\u610f\u666f\u70b9\u5373\u53ef\u89e3\u9501"
  },
  "seven-day-streak": {
    icon: "\ud83d\udd25",
    title: "\u8fde\u7eed 7 \u5929",
    description: "\u8fde\u7eed 7 \u5929\u90fd\u6709\u8bbf\u95ee\u8bb0\u5f55\u3002",
    hint: "\u4fdd\u6301\u6bcf\u65e5\u8bbf\u95ee\uff0c\u519c\u573a\u4f1a\u66f4\u70ed\u95f9"
  },
  "night-walker": {
    icon: "\ud83c\udf19",
    title: "\u591c\u6e38\u8fbe\u4eba",
    description: "18:00 \u540e\u6216\u6e05\u6668 5:00 \u524d\u8bbf\u95ee 3 \u6b21\u3002",
    hint: "\u591c\u95f4\u6253\u5f00\u666f\u70b9\u8be6\u60c5\u4f1a\u7d2f\u8ba1"
  },
  "heritage-collector": {
    icon: "\ud83c\udfdb\ufe0f",
    title: "\u53e4\u8ff9\u6536\u85cf\u5bb6",
    description: "\u6536\u85cf 5 \u4e2a\u53e4\u8ff9\u3001\u9057\u5740\u6216\u7eaa\u5ff5\u7c7b\u666f\u70b9\u3002",
    hint: "\u6536\u85cf\u5e26\u6709\u53e4\u8ff9\u6c14\u8d28\u7684\u666f\u70b9"
  },
  "route-planner": {
    icon: "\ud83e\udded",
    title: "\u8def\u7ebf\u89c4\u5212\u5e08",
    description: "\u70b9\u8d5e\u6216\u53c2\u4e0e 1 \u6761\u7cfb\u7edf\u63a8\u8350\u8def\u7ebf\u3002",
    hint: "\u5728\u63a8\u8350\u8def\u7ebf\u91cc\u70b9\u8d5e\u4e00\u6761\u8def\u7ebf"
  },
  "popular-farmer": {
    icon: "\ud83c\udfc6",
    title: "\u4eba\u6c14\u519c\u592b",
    description: "\u7d2f\u8ba1\u8bbf\u95ee 30 \u6b21\uff0c\u6210\u4e3a\u519c\u573a\u5e38\u9a7b\u73a9\u5bb6\u3002",
    hint: "\u591a\u63a2\u7d22\u666f\u70b9\u53ef\u4ee5\u66f4\u5feb\u89e3\u9501"
  }
};

function normalizeAchievementCopy(badges) {
  return badges.map((badge) => ({
    ...badge,
    ...(ACHIEVEMENT_COPY_ZH[badge.id] || {})
  }));
}

async function getUserVisitAchievementStats(userId) {
  if (!visitsCollection) {
    return {
      totalVisits: 0,
      uniqueSpots: 0,
      nightVisits: 0,
      activeDays: 0,
      longestStreak: 0
    };
  }

  const [summary] = await visitsCollection.aggregate([
    { $match: { userId } },
    {
      $group: {
        _id: null,
        totalVisits: { $sum: 1 },
        uniqueSpots: { $addToSet: "$spotId" },
        days: {
          $addToSet: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$timestamp",
              timezone: "Asia/Shanghai"
            }
          }
        },
        nightVisits: {
          $sum: {
            $cond: [
              {
                $or: [
                  { $gte: [{ $hour: { date: "$timestamp", timezone: "Asia/Shanghai" } }, 18] },
                  { $lte: [{ $hour: { date: "$timestamp", timezone: "Asia/Shanghai" } }, 5] }
                ]
              },
              1,
              0
            ]
          }
        }
      }
    }
  ]).toArray();

  const days = (summary?.days || []).sort();
  let longestStreak = 0;
  let streak = 0;
  let prev = null;
  for (const day of days) {
    if (prev && Math.floor((parseDayKey(day) - parseDayKey(prev)) / 86400000) === 1) {
      streak += 1;
    } else {
      streak = 1;
    }
    if (streak > longestStreak) longestStreak = streak;
    prev = day;
  }

  return {
    totalVisits: Number(summary?.totalVisits || 0),
    uniqueSpots: Array.isArray(summary?.uniqueSpots) ? summary.uniqueSpots.filter(Boolean).length : 0,
    nightVisits: Number(summary?.nightVisits || 0),
    activeDays: days.length,
    longestStreak
  };
}

app.get("/api/stats/achievements", requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;
    const [visitStats, favorites, likedRoutes] = await Promise.all([
      getUserVisitAchievementStats(userId),
      favoritesCollection.find({ userId }).toArray(),
      routeLikesCollection.find({ userIds: userId }).toArray()
    ]);

    const heritagePattern = /(陵|寺|宫|城|门|塔|遗址|故居|纪念馆|古|庙|祠|楼)/;
    const heritageKeywords = ["ling", "temple", "gate", "palace", "tower", "mausoleum", "memorial", "ruins", "city", "old", "house", "tomb", "historic", "heritage", "museum"];
    const heritageFavorites = favorites.filter((item) => {
      const text = String(`${item.spotId || ""} ${item.spotName || ""}`).toLowerCase();
      return heritageKeywords.some((keyword) => text.includes(keyword));
    }).length;
    const likedRouteCount = likedRoutes.length;

    const badges = [
      buildAchievement(
        "first-cultivation",
        "🌱",
        "首次开垦",
        "完成第一次景点访问记录。",
        visitStats.totalVisits >= 1,
        visitStats.totalVisits,
        1,
        "访问任意景点即可解锁"
      ),
      buildAchievement(
        "seven-day-streak",
        "🔥",
        "连续 7 天",
        "连续 7 天都有访问记录。",
        visitStats.longestStreak >= 7,
        visitStats.longestStreak,
        7,
        "保持每日访问，农场会更热闹"
      ),
      buildAchievement(
        "night-walker",
        "🌙",
        "夜游达人",
        "18:00 后或清晨 5:00 前访问 3 次。",
        visitStats.nightVisits >= 3,
        visitStats.nightVisits,
        3,
        "夜间打开景点详情会累计"
      ),
      buildAchievement(
        "heritage-collector",
        "🏛️",
        "古迹收藏家",
        "收藏 5 个古迹/遗址/纪念类景点。",
        heritageFavorites >= 5,
        heritageFavorites,
        5,
        "收藏带有古迹气质的景点"
      ),
      buildAchievement(
        "route-planner",
        "🧭",
        "路线规划师",
        "点赞或参与 1 条系统推荐路线。",
        likedRouteCount >= 1,
        likedRouteCount,
        1,
        "在推荐路线里点赞一条路线"
      ),
      buildAchievement(
        "popular-farmer",
        "🏆",
        "人气农夫",
        "累计访问 30 次，成为农场常驻玩家。",
        visitStats.totalVisits >= 30,
        visitStats.totalVisits,
        30,
        "多探索景点可以更快解锁"
      )
    ];

    const normalizedBadges = normalizeAchievementCopy(badges);

    res.json({
      summary: {
        unlocked: normalizedBadges.filter((item) => item.unlocked).length,
        total: normalizedBadges.length,
        totalVisits: visitStats.totalVisits,
        uniqueSpots: visitStats.uniqueSpots,
        activeDays: visitStats.activeDays,
        longestStreak: visitStats.longestStreak
      },
      badges: normalizedBadges
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ summary: { unlocked: 0, total: 0 }, badges: [] });
  }
});

app.get("/api/stats/farm-almanac", requireAuth, async (req, res) => {
  try {
    if (!visitsCollection) {
      return res.json({
        summary: {
          cultivationDays: 0,
          activeDays: 0,
          bestDay: null,
          currentStreak: 0,
          longestStreak: 0
        },
        days: []
      });
    }

    const userDoc = await usersCollection.findOne({ _id: new ObjectId(req.user.id) });
    if (!userDoc) {
      return res.status(404).json({ message: "用户不存在" });
    }

    const createdAt = userDoc.createdAt ? new Date(userDoc.createdAt) : new Date();
    const createdDayKey = formatChinaDayKey(createdAt);
    const todayKey = formatChinaDayKey(new Date());

    const results = await visitsCollection.aggregate([
      {
        $match: {
          userId: req.user.id,
          timestamp: { $gte: createdAt }
        }
      },
      {
        $group: {
          _id: {
            day: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$timestamp",
                timezone: "Asia/Shanghai"
              }
            },
            spotId: "$spotId"
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id.day": 1, count: -1, "_id.spotId": 1 } }
    ]).toArray();

    const dayChampionMap = new Map();
    for (const item of results) {
      const dayKey = item?._id?.day;
      if (!dayKey || dayChampionMap.has(dayKey)) continue;
      dayChampionMap.set(dayKey, {
        date: dayKey,
        spotId: item._id.spotId,
        count: Number(item.count || 0)
      });
    }

    const days = [];
    let cursor = parseDayKey(createdDayKey);
    const end = parseDayKey(todayKey);
    while (cursor <= end) {
      const dayKey = cursor.toISOString().slice(0, 10);
      const champion = dayChampionMap.get(dayKey);
      days.push({
        date: dayKey,
        spotId: champion?.spotId || "",
        count: champion?.count || 0
      });
      cursor = new Date(cursor.getTime() + 86400000);
    }

    const activeDays = days.filter((item) => item.count > 0).length;
    let bestDay = null;
    for (const item of days) {
      if (!item.count) continue;
      if (!bestDay || item.count > bestDay.count) bestDay = item;
    }

    let currentStreak = 0;
    for (let i = days.length - 1; i >= 0; i -= 1) {
      if (days[i].count > 0) currentStreak += 1;
      else break;
    }

    let longestStreak = 0;
    let streak = 0;
    for (const item of days) {
      if (item.count > 0) {
        streak += 1;
        if (streak > longestStreak) longestStreak = streak;
      } else {
        streak = 0;
      }
    }

    res.json({
      summary: {
        cultivationDays: diffDaysInclusive(createdDayKey, todayKey),
        activeDays,
        bestDay,
        currentStreak,
        longestStreak,
        createdAt: userDoc.createdAt
      },
      days
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      summary: {
        cultivationDays: 0,
        activeDays: 0,
        bestDay: null,
        currentStreak: 0,
        longestStreak: 0
      },
      days: []
    });
  }
});

app.get("/api/stats/monthly-report", requireAuth, async (req, res) => {
  try {
    if (!visitsCollection) {
      return res.json({
        month: "",
        monthDays: 0,
        topSpotId: null,
        topSpotCount: 0,
        monthLongestStreak: 0,
        totalVisits: 0
      });
    }

    const now = new Date();
    let year, month;
    if (req.query.month) {
      const parts = String(req.query.month).split("-").map(Number);
      year = parts[0];
      month = parts[1];
    } else {
      year = now.getFullYear();
      month = now.getMonth() + 1;
    }
    if (!year || !month || month < 1 || month > 12) {
      return res.status(400).json({ message: "月份格式错误，应为 YYYY-MM。" });
    }

    const monthStart = new Date(Date.UTC(year, month - 1, 1));
    const monthEnd = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));

    const results = await visitsCollection.aggregate([
      { $match: { userId: req.user.id, timestamp: { $gte: monthStart, $lte: monthEnd } } },
      {
        $group: {
          _id: {
            day: { $dateToString: { format: "%Y-%m-%d", date: "$timestamp", timezone: "Asia/Shanghai" } },
            spotId: "$spotId"
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id.day": 1, count: -1 } }
    ]).toArray();

    const dayChampionMap = new Map();
    const spotCounts = new Map();
    for (const item of results) {
      const dayKey = item?._id?.day;
      const spotId = item?._id?.spotId;
      if (!dayKey || !spotId) continue;
      if (!dayChampionMap.has(dayKey)) {
        dayChampionMap.set(dayKey, { date: dayKey, spotId, count: Number(item.count || 0) });
      }
      spotCounts.set(spotId, (spotCounts.get(spotId) || 0) + Number(item.count || 0));
    }

    let topSpotId = null;
    let topSpotCount = 0;
    for (const [spotId, count] of spotCounts.entries()) {
      if (count > topSpotCount) {
        topSpotCount = count;
        topSpotId = spotId;
      }
    }

    const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
    let longest = 0;
    let streak = 0;
    for (let d = 1; d <= daysInMonth; d += 1) {
      const dayKey = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      if (dayChampionMap.has(dayKey)) {
        streak += 1;
        if (streak > longest) longest = streak;
      } else {
        streak = 0;
      }
    }

    res.json({
      month: `${year}-${String(month).padStart(2, "0")}`,
      monthDays: dayChampionMap.size,
      topSpotId,
      topSpotCount,
      monthLongestStreak: longest,
      totalVisits: results.reduce((sum, item) => sum + Number(item.count || 0), 0)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "获取月报失败" });
  }
});

app.post("/api/location-records", async (req, res) => {
  try {
    if (!locationRecordsCollection) {
      return res.status(503).json({ message: "定位存储暂不可用。" });
    }

    const {
      feature,
      action,
      latitude,
      longitude,
      accuracy,
      altitude,
      heading,
      speed,
      city,
      adcode,
      weather,
      destination,
      meta
    } = req.body || {};

    const allowedFeatures = new Set(["weather", "navigation"]);
    const allowedActions = new Set(["current-location", "origin-locate", "map-pick"]);
    const latNum = Number(latitude);
    const lngNum = Number(longitude);

    if (!allowedFeatures.has(feature)) {
      return res.status(400).json({ message: "feature 必须是 weather 或 navigation。" });
    }

    if (!allowedActions.has(action)) {
      return res.status(400).json({ message: "action 不合法。" });
    }

    if (!Number.isFinite(latNum) || latNum < -90 || latNum > 90) {
      return res.status(400).json({ message: "latitude 不合法。" });
    }

    if (!Number.isFinite(lngNum) || lngNum < -180 || lngNum > 180) {
      return res.status(400).json({ message: "longitude 不合法。" });
    }

    const requestUser = await getOptionalRequestUser(req);
    const now = new Date();
    const record = {
      feature,
      action,
      latitude: latNum,
      longitude: lngNum,
      accuracy: Number.isFinite(Number(accuracy)) ? Number(accuracy) : null,
      altitude: Number.isFinite(Number(altitude)) ? Number(altitude) : null,
      heading: Number.isFinite(Number(heading)) ? Number(heading) : null,
      speed: Number.isFinite(Number(speed)) ? Number(speed) : null,
      city: typeof city === "string" ? city.trim() : "",
      adcode: typeof adcode === "string" ? adcode.trim() : "",
      weather: weather && typeof weather === "object" ? weather : null,
      destination: destination && typeof destination === "object" ? {
        name: typeof destination.name === "string" ? destination.name.trim() : "",
        latitude: Number.isFinite(Number(destination.latitude)) ? Number(destination.latitude) : null,
        longitude: Number.isFinite(Number(destination.longitude)) ? Number(destination.longitude) : null
      } : null,
      meta: meta && typeof meta === "object" ? meta : null,
      createdAt: now
    };

    if (requestUser) {
      record.userId = requestUser.id;
      record.username = requestUser.username;
    }

    const result = await locationRecordsCollection.insertOne(record);

    res.status(201).json({
      ok: true,
      record: {
        id: String(result.insertedId),
        feature: record.feature,
        action: record.action,
        latitude: record.latitude,
        longitude: record.longitude,
        accuracy: record.accuracy,
        city: record.city,
        adcode: record.adcode,
        destination: record.destination,
        createdAt: record.createdAt
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "定位存储失败。" });
  }
});

async function start() {
  try {
    await client.connect();
    const db = client.db(databaseName);
    usersCollection = db.collection(collectionName);
    interactionsCollection = db.collection("interactions");
    commentsCollection = db.collection("comment");
    userImagesCollection = db.collection("uploaded image by users");
    favoritesCollection = db.collection("favorites");
    routeLikesCollection = db.collection("route_likes");
    chatMessagesCollection = db.collection("chat_messages");
    adminsCollection = db.collection("admins");
    ratingsCollection = db.collection("ratings");
    locationRecordsCollection = db.collection("location_records");
    visitsCollection = db.collection("visits");
    await usersCollection.createIndex({ email: 1 }, { unique: true });
    await usersCollection.createIndex({ username: 1 }, { unique: true });
    await interactionsCollection.createIndex({ spotId: 1 }, { unique: true });
    await commentsCollection.createIndex({ spotId: 1 });
    await commentsCollection.createIndex({ userId: 1 });
    await favoritesCollection.createIndex({ userId: 1 });
    await favoritesCollection.createIndex({ userId: 1, spotId: 1 }, { unique: true });
    await routeLikesCollection.createIndex({ routeId: 1 }, { unique: true });
    await chatMessagesCollection.createIndex({ createdAt: 1 });
    await adminsCollection.createIndex({ email: 1 }, { unique: true });
    await adminsCollection.createIndex({ username: 1 }, { unique: true });
    await ratingsCollection.createIndex({ spotId: 1 });
    await ratingsCollection.createIndex({ spotId: 1, userId: 1 }, { unique: true });
    await locationRecordsCollection.createIndex({ createdAt: -1 });
    await locationRecordsCollection.createIndex({ feature: 1, createdAt: -1 });
    await locationRecordsCollection.createIndex({ userId: 1, createdAt: -1 });
    databaseReady = true;
  } catch (error) {
    console.warn("MongoDB unavailable; starting static site only:", error.message);
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    if (databaseReady) {
      console.log(`MongoDB collection: ${databaseName}.${collectionName}`);
    }
  });
}

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
