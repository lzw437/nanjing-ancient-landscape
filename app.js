// ===== 多语言系统 =====
let currentLang = localStorage.getItem("landscapeLang") || "zh";

const i18n = {
  zh: {
    // 导航
    appName: "南京古景点地图",
    mapTab: "地图总览",
    infoTab: "详细资料库",
    routeTab: "推荐路线",
    chatTab: "聊天室",
    profileTab: "个人中心",
    adminTab: "管理后台",
    // 搜索与统计
    searchPlaceholder: "输入名称、朝代或关键词",
    spotsCount: "处景点",
    dynastyCount: "历史阶段",
    // 景点汇总
    spotSummary: "景点汇总",
    showAll: "全图",
    allTypes: "全部",
    noMatch: "没有找到匹配景点。",
    // 弹窗与详情
    viewDetail: "查看详细介绍",
    enterInfo: "进入详细资料库",
    favorite: "收藏",
    favorited: "已收藏",
    navigate: "导航",
    mapLocate: "地图定位",
    address: "地址",
    hours: "开放时间",
    ticket: "门票",
    transit: "交通",
    coordinates: "坐标",
    highlight: "参观亮点",
    route: "推荐路线",
    gisLayer: "GIS 图层",
    gisValue: "点位 + 线状路线",
    userRating: "用户评分",
    ratingCount: "条评分",
    cancelRating: "取消评分",
    history: "历史背景",
    images: "图片",
    userComments: "用户评论",
    commentPlaceholder: "写下你对这个景点的看法...",
    postComment: "发表评论",
    uploadImage: "📷 上传图片",
    delete: "删除",
    noComments: "暂无评论，快来发表第一条评论吧！",
    // 详细资料库
    infoTitle: "景点详细资料库",
    backToMap: "返回地图",
    allSpots: "全部景点",
    latLng: "经纬度",
    spotType: "景点类型",
    dynastyLabel: "历史阶段",
    gis要素: "适合展示的 GIS 要素",
    shareImages: "用户分享图片",
    loading: "加载中...",
    // 个人中心
    profile: "个人中心",
    myFavorites: "我的收藏",
    myComments: "我的评论",
    myImages: "我的图片",
    favSpot: "收藏景点",
    postComm: "发表评论",
    uploadImg: "上传图片",
    loginFirst: "请先登录",
    noFavorites: "您还没有收藏任何景点",
    noCommentsYet: "您还没有发表过评论",
    noImagesYet: "您还没有上传过图片",
    goToMap: "去地图浏览景点",
    viewDetail2: "查看详情",
    unfavorite: "取消收藏",
    spotLabel: "景点：",
    // 推荐路线
    customRoute: "自定义路线",
    customHint: "点击景点右侧 + 添加到路线规划",
    sysRoutes: "系统推荐路线",
    sysHint: "为你精选经典路线，点击路线可直接生成，点赞支持你喜欢的路线",
    routeResult: "路线结果",
    selectedSpots: "已选景点",
    clear: "清空",
    generateRoute: "生成推荐路线",
    noSelected: "暂无选中景点",
    start: "起",
    end: "终",
    recommendedRoute: "推荐路线",
    km: "km",
    addToRoute: "添加到路线规划",
    removeFromRoute: "从路线中移除",
    likeRoute: "点赞",
    unlikeRoute: "取消点赞",
    routeLoadFailed: "加载推荐路线失败",
    // 聊天室
    chatTitle: "聊天室",
    chatHint: "实时交流，分享你的旅行体验",
    chatPlaceholder: "输入消息...",
    send: "发送",
    preview: "预览",
    // 管理后台
    adminTitle: "管理后台",
    userMgmt: "用户管理",
    commentMgmt: "评论管理",
    imageMgmt: "图片管理",
    ratingMgmt: "评分管理",
    chatMgmt: "聊天管理",
    noUsers: "暂无注册用户",
    noCommentsAdmin: "暂无评论",
    noImagesAdmin: "暂无图片",
    noChat: "暂无聊天记录",
    noRatings: "暂无评分记录",
    unknownUser: "未知用户",
    unknownSpot: "未知景点",
    spotLabelShort: "景点:",
    confirmDeleteUser: "确定要删除该用户？此操作不可撤销。",
    confirmDeleteComment: "确定要删除该评论？",
    confirmDeleteImage: "确定要删除该图片？",
    confirmDeleteChat: "确定要删除该聊天记录？",
    confirmDeleteRating: "确定要删除该评分？",
    // 认证
    loginTab: "登录",
    registerTab: "注册",
    adminAuthTab: "管理员",
    userLogin: "用户登录",
    emailOrUser: "邮箱或用户名",
    password: "密码",
    loginBtn: "登录",
    userRegister: "用户注册",
    username: "用户名",
    email: "邮箱",
    registerBtn: "注册并登录",
    adminLogin: "管理员登录",
    adminRegister: "管理员注册",
    adminKey: "管理员密钥",
    adminKeyPlaceholder: "请输入管理员密钥",
    adminKeyHint: "密钥：888888",
    registerAdmin: "注册管理员",
    goAdminLogin: "管理员登录",
    goAdminRegister: "注册管理员账号",
    // 按钮
    switchAccount: "切换账号",
    logout: "退出登录",
    collapseDetail: "收起简介",
    expandDetail: "展开简介",
    loggedIn: "已登录",
    notLogged: "未登录",
    guest: "游客访问",
    loginRegister: "登录/注册",
    administrator: "管理员",
    // 地图图层
    gaode: "高德",
    osm: "OSM",
    standard: "标准",
    satellite: "卫星",
    terrain: "地形",
    // 图例
    legendTemple: "寺庙",
    legendGarden: "园林",
    legendWall: "城墙遗址",
    legendCulture: "文化古建",
    legendTomb: "陵寝遗址",
    legendModern: "近代史迹",
    // 空状态
    noUserGallery: "暂无用户分享图片",
    noFavLogin: "请先登录查看您的收藏",
    noCommentLogin: "请先登录查看您的评论",
    noImageLogin: "请先登录查看您的图片",
    // 提示
    loginFirstAlert: "请先登录后再上传图片。",
    imgSizeLimit: "图片大小不能超过 3MB",
    imgUploadSuccess: "图片上传成功",
    favSuccess: "收藏成功",
    unfavSuccess: "已取消收藏",
    commentPosted: "评论发表成功",
    commentDeleted: "评论已删除",
    ratingSubmitted: "评分已提交",
    ratingCleared: "评分已取消",
    routeEmpty: "请先选择景点",
    chatEmpty: "请输入消息内容",
    chatImgSizeLimit: "图片大小不能超过 3MB",
    // 页脚
    sourceNote: "地图底图来自 OpenStreetMap，部分景点图片来自 Wikimedia Commons，图片无法访问时会显示占位图。",
    // 主题
    themeDefault: "默认",
    themeSakura: "樱花粉",
    themeLavender: "薰衣草",
    themeOcean: "海洋蓝",
    themeMeadow: "草地绿",
    themeSunset: "暖阳橙",
    themeHoney: "蜜糖黄",
    themeCherry: "樱桃红",
    bgDefault: "默认",
    bgSakura: "樱花粉",
    bgStar: "星空夜",
    bgOcean: "海底世界",
    bgGarden: "花园小径",
    bgHeart: "可爱甜心",
    bgRainbow: "彩虹糖",
    bgSky: "蓝天白云",
    bgKitty: "Hello Kitty",
    bgMinion: "小黄人",
    bgTotoro: "龙猫",
    bgPanda: "熊猫",
    bgFrog: "青蛙",
    bgBunny: "兔子",
    // 表情
    emojiSmile: "笑脸",
    emojiGesture: "手势",
    emojiAnimal: "动物",
    emojiFood: "食物",
    emojiActivity: "活动",
    emojiTravel: "旅行",
    emojiObject: "物品",
    emojiHeart: "爱心",
    emojiFlag: "旗帜",
    // 时间
    justNow: "刚刚",
    minAgo: "分钟前",
    hourAgo: "小时前",
    dayAgo: "天前",
    // 统计
    statsTab: "数据统计",
    statsTitle: "数据统计",
    statsHint: "查看景点访问数据与排行",
    statsDay: "今日",
    statsMonth: "本月",
    statsYear: "本年",
    statsPieTitle: "访问分布",
    statsRankTitle: "访问排行",
    statsRank: "排名",
    statsVisits: "次访问",
    statsNoData: "暂无访问数据",
    statsTotal: "总访问",
    // 天气
    weatherTab: "天气",
    weatherTitle: "天气查询",
    weatherPlaceholder: "输入城市名称",
    weatherSearch: "查询",
    weatherLocating: "正在定位...",
    weatherLoading: "加载中...",
    weatherFail: "获取天气失败",
    weatherCityEmpty: "请输入城市名称",
    weatherCityNotFound: "未找到该城市",
    weatherTemp: "温度",
    weatherWeather: "天气",
    weatherWind: "风向",
    weatherWindPower: "风力",
    weatherHumidity: "湿度",
    weatherNow: "当前天气",
    weatherForecast: "未来预报",
    weatherReportTime: "更新时间",
  },
  en: {
    appName: "Nanjing Historic Sites Map",
    mapTab: "Map",
    infoTab: "Details",
    routeTab: "Routes",
    chatTab: "Chat",
    profileTab: "Profile",
    adminTab: "Admin",
    searchPlaceholder: "Search by name, dynasty, or keyword",
    spotsCount: "sites",
    dynastyCount: "dynasties",
    spotSummary: "All Sites",
    showAll: "Full Map",
    allTypes: "All",
    noMatch: "No matching sites found.",
    viewDetail: "View Details",
    enterInfo: "Open in Details",
    favorite: "Favorite",
    favorited: "Favorited",
    navigate: "Navigate",
    mapLocate: "Locate on Map",
    address: "Address",
    hours: "Hours",
    ticket: "Ticket",
    transit: "Transit",
    coordinates: "Coordinates",
    highlight: "Highlights",
    route: "Route",
    gisLayer: "GIS Layer",
    gisValue: "Point + Linear Route",
    userRating: "Rating",
    ratingCount: "ratings",
    cancelRating: "Cancel Rating",
    history: "History",
    images: "Images",
    userComments: "Comments",
    commentPlaceholder: "Share your thoughts about this site...",
    postComment: "Post",
    uploadImage: "📷 Upload",
    delete: "Delete",
    noComments: "No comments yet. Be the first!",
    infoTitle: "Site Details",
    backToMap: "Back to Map",
    allSpots: "All Sites",
    latLng: "Lat/Lng",
    spotType: "Type",
    dynastyLabel: "Dynasty",
    gis要素: "GIS Features",
    shareImages: "User Photos",
    loading: "Loading...",
    profile: "Profile",
    myFavorites: "Favorites",
    myComments: "Comments",
    myImages: "Images",
    favSpot: "Favorites",
    postComm: "Comments",
    uploadImg: "Images",
    loginFirst: "Please log in",
    noFavorites: "No favorites yet",
    noCommentsYet: "No comments yet",
    noImagesYet: "No images yet",
    goToMap: "Browse Map",
    viewDetail2: "View Details",
    unfavorite: "Unfavorite",
    spotLabel: "Site: ",
    customRoute: "Custom Route",
    customHint: "Tap + on a site to add it to your route",
    sysRoutes: "Recommended Routes",
    sysHint: "Curated routes — tap to generate, like to support",
    routeResult: "Route Result",
    selectedSpots: "Selected",
    clear: "Clear",
    generateRoute: "Generate Route",
    noSelected: "No sites selected",
    start: "Start",
    end: "End",
    recommendedRoute: "Recommended",
    km: "km",
    addToRoute: "Add to route",
    removeFromRoute: "Remove from route",
    likeRoute: "Like",
    unlikeRoute: "Unlike",
    routeLoadFailed: "Failed to load routes",
    chatTitle: "Chat Room",
    chatHint: "Real-time chat, share your travel experience",
    chatPlaceholder: "Type a message...",
    send: "Send",
    preview: "Preview",
    adminTitle: "Admin Panel",
    userMgmt: "Users",
    commentMgmt: "Comments",
    imageMgmt: "Images",
    ratingMgmt: "Ratings",
    chatMgmt: "Messages",
    noUsers: "No users yet",
    noCommentsAdmin: "No comments yet",
    noImagesAdmin: "No images yet",
    noChat: "No messages yet",
    noRatings: "No ratings yet",
    unknownUser: "Unknown",
    unknownSpot: "Unknown site",
    spotLabelShort: "Site:",
    confirmDeleteUser: "Delete this user? This cannot be undone.",
    confirmDeleteComment: "Delete this comment?",
    confirmDeleteImage: "Delete this image?",
    confirmDeleteChat: "Delete this message?",
    confirmDeleteRating: "Delete this rating?",
    loginTab: "Login",
    registerTab: "Register",
    adminAuthTab: "Admin",
    userLogin: "User Login",
    emailOrUser: "Email or Username",
    password: "Password",
    loginBtn: "Login",
    userRegister: "User Register",
    username: "Username",
    email: "Email",
    registerBtn: "Register & Login",
    adminLogin: "Admin Login",
    adminRegister: "Admin Register",
    adminKey: "Admin Key",
    adminKeyPlaceholder: "Enter admin key",
    adminKeyHint: "Key: 888888",
    registerAdmin: "Register Admin",
    goAdminLogin: "Admin Login",
    goAdminRegister: "Register Admin",
    switchAccount: "Switch",
    logout: "Log out",
    collapseDetail: "Hide summary",
    expandDetail: "Show summary",
    loggedIn: "Logged in",
    notLogged: "Not logged in",
    guest: "Guest",
    loginRegister: "Login",
    administrator: "Admin",
    standard: "Standard",
    satellite: "Satellite",
    terrain: "Terrain",
    legendTemple: "Temple",
    legendGarden: "Garden",
    legendWall: "City Wall",
    legendCulture: "Heritage",
    legendTomb: "Tomb",
    legendModern: "Modern",
    noUserGallery: "No user photos yet",
    noFavLogin: "Please log in to view favorites",
    noCommentLogin: "Please log in to view comments",
    noImageLogin: "Please log in to view images",
    loginFirstAlert: "Please log in before uploading.",
    imgSizeLimit: "Image must be under 3MB",
    imgUploadSuccess: "Image uploaded successfully",
    favSuccess: "Favorited",
    unfavSuccess: "Unfavorited",
    commentPosted: "Comment posted",
    commentDeleted: "Comment deleted",
    ratingSubmitted: "Rating submitted",
    ratingCleared: "Rating cleared",
    routeEmpty: "Please select spots first",
    chatEmpty: "Please enter a message",
    chatImgSizeLimit: "Image must be under 3MB",
    sourceNote: "Map tiles from OpenStreetMap, some images from Wikimedia Commons. Placeholder shown when images fail to load.",
    themeDefault: "Default",
    themeSakura: "Sakura",
    themeLavender: "Lavender",
    themeOcean: "Ocean",
    themeMeadow: "Meadow",
    themeSunset: "Sunset",
    themeHoney: "Honey",
    themeCherry: "Cherry",
    bgDefault: "Default",
    bgSakura: "Sakura",
    bgStar: "Starry Night",
    bgOcean: "Ocean",
    bgGarden: "Garden",
    bgHeart: "Sweet Heart",
    bgRainbow: "Rainbow",
    bgSky: "Blue Sky",
    bgKitty: "Hello Kitty",
    bgMinion: "Minion",
    bgTotoro: "Totoro",
    bgPanda: "Panda",
    bgFrog: "Frog",
    bgBunny: "Bunny",
    emojiSmile: "Smile",
    emojiGesture: "Gesture",
    emojiAnimal: "Animal",
    emojiFood: "Food",
    emojiActivity: "Activity",
    emojiTravel: "Travel",
    emojiObject: "Object",
    emojiHeart: "Heart",
    emojiFlag: "Flag",
    justNow: "just now",
    minAgo: "min ago",
    hourAgo: "h ago",
    dayAgo: "d ago",
    // Stats
    statsTab: "Statistics",
    statsTitle: "Statistics",
    statsHint: "View site visit data and rankings",
    statsDay: "Today",
    statsMonth: "This Month",
    statsYear: "This Year",
    statsPieTitle: "Visit Distribution",
    statsRankTitle: "Visit Ranking",
    statsRank: "Rank",
    statsVisits: "visits",
    statsNoData: "No visit data yet",
    statsTotal: "Total visits",
    // Weather
    weatherTab: "Weather",
    weatherTitle: "Weather",
    weatherPlaceholder: "Enter city name",
    weatherSearch: "Search",
    weatherLocating: "Locating...",
    weatherLoading: "Loading...",
    weatherFail: "Failed to get weather",
    weatherCityEmpty: "Please enter a city name",
    weatherCityNotFound: "City not found",
    weatherTemp: "Temp",
    weatherWeather: "Weather",
    weatherWind: "Wind",
    weatherPower: "Power",
    weatherHumidity: "Humidity",
    weatherNow: "Current",
    weatherForecast: "Forecast",
    weatherReportTime: "Updated",
  }
};

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || i18n.zh[key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("landscapeLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  updateUI();
  render();
  const langBtn = document.getElementById("langToggle");
  if (langBtn) langBtn.textContent = lang === "zh" ? "EN" : "中";
}

function updateUI() {
  const el = (id) => document.getElementById(id);
  if (el("appTitle")) el("appTitle").textContent = t("appName");
  if (el("mapModuleBtn")) el("mapModuleBtn").textContent = t("mapTab");
  if (el("infoModuleBtn")) el("infoModuleBtn").textContent = t("infoTab");
  if (el("routeModuleBtn")) el("routeModuleBtn").textContent = t("routeTab");
  if (el("chatModuleBtn")) el("chatModuleBtn").textContent = t("chatTab");
  if (el("profileModuleBtn")) el("profileModuleBtn").textContent = t("profileTab");
  if (el("statsModuleBtn")) el("statsModuleBtn").textContent = t("statsTab");
  if (el("weatherPanelBtn")) el("weatherPanelBtn").textContent = t("weatherTab");
  if (el("adminModuleBtn")) el("adminModuleBtn").textContent = t("adminTab");
  const searchInput = el("searchInput");
  if (searchInput) searchInput.placeholder = t("searchPlaceholder");
  // 更新模块标题
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (key) node.textContent = t(key);
  });
  // 更新 placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if (key) node.placeholder = t(key);
  });
  // 更新 auth 状态
  const user = getCurrentUser();
  updateAuthView(user);
  // 更新文档标题
  document.title = t("appName") + " GIS";
}

function spotT(spot, field) {
  if (currentLang === "zh") return spot[field];
  const tr = spotTranslations[spot.id];
  if (!tr) return spot[field];
  const enField = field + "En";
  return tr[enField] || tr[field] || spot[field];
}

const spotTranslations = {
  "ming-xiaoling": {
    nameEn: "Ming Xiaoling Mausoleum",
    typeEn: "Mausoleum Site",
    dynastyEn: "Ming Dynasty",
    introEn: "The mausoleum of Emperor Zhu Yuanzhang and Empress Ma, located at the southern foot of Purple Mountain, a key witness to Nanjing's Ming Dynasty capital layout.",
    detailEn: [
      "Built during the Hongwu period, it is the joint tomb of Ming Dynasty founder Zhu Yuanzhang and Empress Ma. The mausoleum combines natural terrain, waterways, spirit ways, and sacrificial architecture into a pattern of 'building the tomb according to the mountain.'",
      "The most distinctive feature is the Spirit Way lined with stone animals and officials, displaying early Ming stone carving art. The square city, meridian tower, and treasure top represent core sacrificial and symbolic spaces.",
      "From a GIS perspective, it serves as an excellent case of 'point-based site + area heritage,' forming the Purple Mountain historical-cultural landscape belt with Sun Yat-sen Mausoleum, Linggu Temple, and Meiling Palace."
    ],
    highlightEn: "Spirit Way stone statues, Square City & Meridian Tower, Purple Mountain",
    routeEn: "Eastern Suburbs Historical Line"
  },
  "fuzimiao": {
    nameEn: "Confucius Temple & Qinhuai River",
    typeEn: "Cultural District",
    dynastyEn: "Eastern Jin to Ming-Qing",
    introEn: "The most representative historical-cultural area in southern old Nanjing, centered on the Confucius Temple with surrounding historical nodes.",
    detailEn: [
      "The Qinhuai River was both a transportation waterway and urban life interface. During Ming-Qing, the area was densely packed with shops and lantern markets.",
      "The Jiangnan Examination Hall made Confucius Temple not just a tourist street but a carrier of cultural attributes.",
      "Suitable for expressing the 'point-line-surface' GIS approach: temple and examination hall as points, Qinhuai River as line, and the scenic belt as surface."
    ],
    highlightEn: "Confucius Temple, Jiangnan Examination Hall, Qinhuai River, Wuyi Lane",
    routeEn: "City South Cultural Line"
  },
  "zhonghua-gate": {
    nameEn: "Zhonghua Gate Fortress",
    typeEn: "City Wall Site",
    dynastyEn: "Ming Dynasty",
    introEn: "One of the largest and most structurally complex gates among Nanjing's Ming city walls, originally named Jubao Gate.",
    detailEn: [
      "Its most prominent feature is the multi-layered barbican structure. Enemies breaching the first gate would enter enclosed spaces, attacked from both walls and hidden soldier caves.",
      "This design shows Ming walls pursued not just height and solidity but also emphasized defense routes and troop deployment.",
      "In GIS work, it can serve as a key node on linear city wall heritage, connecting with Taicheng, Xuanwu Gate, and Yijiang Gate."
    ],
    highlightEn: "Multi-layered barbican, Hidden soldier caves, Ming fortification system",
    routeEn: "City Wall Heritage Line"
  },
  "jimingsi": {
    nameEn: "Jiming Temple",
    typeEn: "Temple",
    dynastyEn: "Six Dynasties to Ming-Qing",
    introEn: "Located in northern old Nanjing, adjacent to Xuanwu Lake and Taicheng, continuing the connection between Southern Dynasties temples and palace city spaces.",
    detailEn: [
      "Known for its mountain gate, halls, Medicine Buddha Pagoda, and panoramic views. Spring cherry blossoms and Xuanwu Lake enhance its urban public space attributes.",
      "Can form a 'Northern Ancient Sites Line' with Taicheng, Xuanwu Lake, and Beiji Peak, reflecting the relationship between religious architecture, city defenses, and natural lakes."
    ],
    highlightEn: "Medicine Buddha Pagoda, Cherry blossoms, Xuanwu Lake views",
    routeEn: "Northern Ancient Sites Line"
  },
  "taicheng": {
    nameEn: "Taicheng (Palace City Wall)",
    typeEn: "City Wall Site",
    dynastyEn: "Six Dynasties to Ming Dynasty",
    introEn: "A very important historical place name, often associated with Six Dynasties Jiankang Palace City memory.",
    detailEn: [
      "The current wall mainly belongs to the Ming Dynasty system, but its location evokes Nanjing's historical overlay from Six Dynasties to Ming.",
      "Very close to Xuanwu Lake and Jiming Temple, forming one of the most concentrated historical landscapes in northern old Nanjing.",
      "Can serve as both a point on the Ming city wall and a marker of Six Dynasties historical memory."
    ],
    highlightEn: "Ancient palace city wall, Xuanwu Lake panoramic views",
    routeEn: "Northern Ancient Sites Line"
  },
  "zhanyuan": {
    nameEn: "Zhanyuan Garden",
    typeEn: "Garden",
    dynastyEn: "Ming-Qing",
    introEn: "One of the representative classical Jiangnan gardens preserved in southern Nanjing.",
    detailEn: [
      "Organizes touring paths through water features, rockeries, pavilions, and courtyards, emphasizing step-by-step scenery changes.",
      "Combined with modern historical exhibition, simultaneously functional in garden art, local history, and tourism.",
      "Suitable for explaining how classical gardens are embedded in high-density old city blocks."
    ],
    highlightEn: "Classical Jiangnan garden, Rockeries & water features, Taiping exhibits",
    routeEn: "City South Cultural Line"
  },
  "chaotian-palace": {
    nameEn: "Chaotian Palace",
    typeEn: "Cultural Heritage Building",
    dynastyEn: "Ming-Qing",
    introEn: "One of the most complete and largest Ming-Qing official architectural complexes in old Nanjing.",
    detailEn: [
      "Clear axis with courtyards progressing layer by layer, reflecting traditional ritual architecture spatial order.",
      "Now serves as Nanjing Municipal Museum, displaying architectural heritage and urban history.",
      "Represents a cultural public service node within the old city from a GIS perspective."
    ],
    highlightEn: "Ming-Qing official architecture, Axial layout, Nanjing Municipal Museum",
    routeEn: "City South Cultural Line"
  },
  "qixia-temple": {
    nameEn: "Qixia Temple",
    typeEn: "Temple",
    dynastyEn: "Six Dynasties to Ming-Qing",
    introEn: "An important representative of Nanjing's Buddhist culture, located on Qixia Mountain in northeastern Nanjing.",
    detailEn: [
      "History dates to the Six Dynasties, closely connected with Qixia Mountain's natural landscape and stone carvings.",
      "Thousand Buddha Rock and Relic Pagoda make it a cultural heritage site with religious artistic value.",
      "Located outside the main city, showing Nanjing's historical sites extend along mountains and waterways."
    ],
    highlightEn: "Thousand Buddha Rock, Relic Pagoda, Autumn red leaves",
    routeEn: "Eastern Mountain Temple Line"
  },
  "linggu-temple": {
    nameEn: "Linggu Temple",
    typeEn: "Temple",
    dynastyEn: "Ming Dynasty to Modern",
    introEn: "An important part of Nanjing's eastern suburban historical-cultural landscape, at the eastern foot of Purple Mountain.",
    detailEn: [
      "Relocated during early Ming due to Ming Xiaoling construction, showing its close relationship with imperial mausoleum building.",
      "Most distinctive is the Beamless Hall, whose masonry arch uses no wooden beams, demonstrating special architectural techniques.",
      "Can form continuous tour nodes with Ming Xiaoling, Sun Yat-sen Mausoleum, and Meiling Palace in the Purple Mountain area."
    ],
    highlightEn: "Beamless Hall (Wuliang Dian), Linggu Pagoda, Purple Mountain",
    routeEn: "Eastern Suburbs Historical Line"
  },
  "presidential-palace": {
    nameEn: "Presidential Palace",
    typeEn: "Modern Historical Site",
    dynastyEn: "Qing Dynasty to Republic",
    introEn: "One of the most important modern historical architectural complexes in Nanjing, associated with multiple historical periods.",
    detailEn: [
      "Contains both Chinese-style courtyards and modern buildings, showing the transition from traditional to modern administrative architecture.",
      "Not just a single building but a place continuously renovated, overlaid, and reused across eras.",
      "Suitable for the 'Modern Nanjing Political Center' GIS layer, forming a modern historical route with Meiyuan New Village."
    ],
    highlightEn: "Chinese & Western architecture, Republic history, Garden spaces",
    routeEn: "Modern History Line"
  },
  "yuejiang-tower": {
    nameEn: "Yuejiang Tower",
    typeEn: "Cultural Heritage Building",
    dynastyEn: "Ming Dynasty concept, Modern construction",
    introEn: "Faces the Yangtze from Lion Mountain. Emperor Zhu Yuanzhang once planned its construction and wrote the 'Yuejiang Tower Record.'",
    detailEn: [
      "The current tower is a modern reconstruction, but together with Lion Mountain and the Yangtze waterfront, it constitutes Nanjing's riverside historical landscape.",
      "From the tower, one can observe the Yangtze River, Nanjing Yangtze River Bridge, and Xiaguan port area.",
      "Demonstrates 'historical cultural imagery sites' - value from historical texts and geographical location rather than building age."
    ],
    highlightEn: "Panoramic Yangtze views, Ming historical concept, Lion Mountain",
    routeEn: "Riverside Historical Line"
  },
  "yijiang-gate": {
    nameEn: "Yijiang Gate",
    typeEn: "City Wall Site",
    dynastyEn: "Ming Dynasty to Modern",
    introEn: "Located in northwestern old Nanjing, near Xiaguan and the Yangtze waterfront, an important node in the Ming city wall system.",
    detailEn: [
      "Nanjing's city walls are not regular geometric shapes but built combining mountains, waterways, and city boundaries.",
      "One can observe how the wall extends toward the Yangtze and connects with Lion Mountain and Yuejiang Tower.",
      "Connecting with Zhonghua Gate and Taicheng demonstrates Ming city walls as linear cultural heritage."
    ],
    highlightEn: "Ming city wall node, Yangtze River proximity, Historical gate",
    routeEn: "City Wall Heritage Line"
  },
  "meiling-palace": {
    nameEn: "Meiling Palace",
    typeEn: "Modern Historical Site",
    dynastyEn: "Republic of China",
    introEn: "At the southern foot of Purple Mountain, a representative of Republican-era architectural heritage.",
    detailEn: [
      "Combines Chinese-style roofing with modern functions and mountain forest environment, reflecting Republican architectural fusion.",
      "Surrounded by dense trees, close to Ming Xiaoling and Sun Yat-sen Mausoleum.",
      "Suitable for the modern historical sites layer, connecting with the eastern suburban historical line."
    ],
    highlightEn: "Republican architecture, Purple Mountain forest, Panoramic views",
    routeEn: "Eastern Suburbs Historical Line"
  },
  "sun-yat-sen-mausoleum": {
    nameEn: "Sun Yat-sen Mausoleum",
    typeEn: "Modern Historical Site",
    dynastyEn: "Republic of China",
    introEn: "The tomb of Dr. Sun Yat-sen at the southern foot of Purple Mountain, a representative of Republican memorial architecture.",
    detailEn: [
      "Spatial organization emphasizes touring from low to high, from open to solemn, with architecture closely integrated with terrain.",
      "Visitors ascend step by step with constantly changing city views and mountain environments.",
      "Shares the Purple Mountain area with Ming Xiaoling, demonstrating Nanjing's multi-era historical landscape continuity."
    ],
    highlightEn: "Memorial architecture, Purple Mountain, Blue sky & white marble",
    routeEn: "Eastern Suburbs Historical Line"
  },
  "ganxi-residence": {
    nameEn: "Ganxi Former Residence",
    typeEn: "Cultural Heritage Building",
    dynastyEn: "Qing Dynasty",
    introEn: "A large Qing Dynasty residential complex in old southern Nanjing.",
    detailEn: [
      "Buildings organize living spaces through multiple courtyards, reflecting Jiangnan urban mansion residential order and family structure.",
      "Represents ordinary urban life and family residential heritage, unlike palaces, temples, or city walls.",
      "Can serve as a 'traditional residential' category, demonstrating the old southern city's historical-cultural richness."
    ],
    highlightEn: "Qing residential architecture, Multiple courtyards, Folk culture",
    routeEn: "City South Cultural Line"
  },
  "porcelain-tower": {
    nameEn: "Grand Bao'en Temple Heritage Park",
    typeEn: "Heritage Site",
    dynastyEn: "Ming Dynasty",
    introEn: "Famous for its glazed pagoda in the Ming Dynasty, one of Nanjing's most internationally renowned Buddhist buildings.",
    detailEn: [
      "Combines archaeological remains, historical documents, and modern exhibition, converting underground remains into readable public cultural space.",
      "Can serve as a heritage-type site, forming a southern historical-cultural cluster with Zhonghua Gate, Confucius Temple, and Zhanyuan."
    ],
    highlightEn: "Ming glazed pagoda concept, Archaeological heritage display",
    routeEn: "City South Cultural Line"
  },
  "ming-palace": {
    nameEn: "Ming Palace Ruins",
    typeEn: "Palace Ruins",
    dynastyEn: "Ming Dynasty",
    introEn: "Where the early Ming imperial palace was located after Zhu Yuanzhang established Nanjing as capital.",
    detailEn: [
      "Ground-level remains are limited, but Wuchao Gate, the heritage park, and place names preserve palace city spatial memory.",
      "Value lies at the urban pattern level: roads, place names, and ruins all point to the Ming Dynasty capital core.",
      "Suitable as a 'ruins-memory type site' for GIS display."
    ],
    highlightEn: "Ming palace ruins, Wuchao Gate, Urban archaeological park",
    routeEn: "Eastern Historical Line"
  },
  "drum-tower": {
    nameEn: "Nanjing Drum Tower",
    typeEn: "Cultural Heritage Building",
    dynastyEn: "Ming Dynasty",
    introEn: "Built in the Ming Dynasty, a public building related to ancient city timekeeping, rituals, and management.",
    detailEn: [
      "The surrounding area is now a transportation and public activity core, with the ancient building highly integrated with modern urban functions.",
      "Can serve as an old city center landmark, connecting Xuanwu Lake, Taicheng, Chaotian Palace, and Presidential Palace."
    ],
    highlightEn: "Ming drum tower, City center landmark, Panoramic views",
    routeEn: "Northern Ancient Sites Line"
  },
  "xuanwu-gate": {
    nameEn: "Xuanwu Gate",
    typeEn: "City Wall Site",
    dynastyEn: "Ming Dynasty",
    introEn: "On the west side of Xuanwu Lake in northern old Nanjing, an important gate node in the Ming city wall system.",
    detailEn: [
      "Xuanwu Lake had both urban defense and landscape value. Xuanwu Gate adjacent to the lake makes the wall part of the city's landscape pattern.",
      "Displaying with Taicheng, Jiming Temple, and Drum Tower forms a spatial chain of northern historical landscape."
    ],
    highlightEn: "Ming city wall gate, Xuanwu Lake views, North city entrance",
    routeEn: "Northern Ancient Sites Line"
  },
  "yuhuatai": {
    nameEn: "Yuhuatai Memorial",
    typeEn: "Modern Historical Site",
    dynastyEn: "Modern Era",
    introEn: "A scenic area combining natural hills, historical legends, and modern memorial attributes in southern Nanjing.",
    detailEn: [
      "Memorial buildings and exhibitions make it an important site for modern historical education.",
      "Can serve as a southern memorial site, showing resources from ancient ruins to modern memorial sites."
    ],
    highlightEn: "Modern memorial, Natural hillside, Historical legends",
    routeEn: "Southern Memorial Line"
  },
  "niushou-hongjue": {
    nameEn: "Niushou Mountain - Hongjue Temple Pagoda",
    typeEn: "Temple",
    dynastyEn: "Tang-Song to Ming-Qing",
    introEn: "An important southern mountain landscape with Hongjue Temple Pagoda as its key historical remnant.",
    detailEn: [
      "Value lies in the combination of mountain terrain, temples, pagodas, roads, and viewing spaces.",
      "Hongjue Temple Pagoda is suitable as a southern mountain Buddhist point, forming a historical tour axis."
    ],
    highlightEn: "Hongjue Temple Pagoda, Mountain Buddhist architecture, Valley views",
    routeEn: "Southern Mountain Line"
  },
  "yangshan-quarry": {
    nameEn: "Yangshan Quarry Stele Materials",
    typeEn: "Heritage Site",
    dynastyEn: "Ming Dynasty",
    introEn: "A Ming Dynasty large-scale stone quarrying site in the Tangshan area of eastern Nanjing.",
    detailEn: [
      "Displays engineering production remains with massive stele base, body, and cap in the mountain quarry.",
      "Can supplement 'heritage' and 'engineering' type sites, showing resources beyond urban buildings."
    ],
    highlightEn: "Massive stele stones, Ancient quarrying, Mountain carving site",
    routeEn: "Eastern Mountain Heritage Line"
  },
  "nantang-mausoleums": {
    nameEn: "Southern Tang Mausoleums",
    typeEn: "Mausoleum Site",
    dynastyEn: "Five Dynasties",
    introEn: "Imperial tombs of the Southern Tang Dynasty in southern suburban Nanjing.",
    detailEn: [
      "Preserve underground chambers, stone carvings, and mausoleum spatial information, supplementing the Southern Tang period.",
      "Makes the timeline more complete: Six Dynasties, Southern Tang, Ming-Qing, and Republic of China."
    ],
    highlightEn: "Five Dynasties tombs, Underground chambers, Southern Tang history",
    routeEn: "Southern Heritage Line"
  },
  "gao-chun-old-street": {
    nameEn: "Gaochun Old Street",
    typeEn: "Cultural District",
    dynastyEn: "Ming-Qing",
    introEn: "An important county-level historical-cultural area in Nanjing's resources.",
    detailEn: [
      "Emphasizes county-level commercial streets, market life, and waterway transportation.",
      "Avoids all sites being concentrated in the main city, giving more whole-area GIS character."
    ],
    highlightEn: "Ming-Qing street layout, Traditional shops, Water town atmosphere",
    routeEn: "Southern Suburban Line"
  },
  "pukou-station": {
    nameEn: "Pukou Railway Station",
    typeEn: "Modern Historical Site",
    dynastyEn: "Modern Era",
    introEn: "An important node in Nanjing's modern transportation history, on the north bank of the Yangtze.",
    detailEn: [
      "The old station has typical modern architectural style and carries literary, cinematic, and urban memories.",
      "Can serve as a northern Jiangbei modern historical site, supplementing transportation heritage."
    ],
    highlightEn: "Republican railway architecture, Yangtze ferry connection",
    routeEn: "Jiangbei Modern Line"
  },
  "meiyuan-xincun": {
    nameEn: "Meiyuan New Village Memorial",
    typeEn: "Modern Historical Site",
    dynastyEn: "Modern Era",
    introEn: "In Nanjing's Yangtze Road area, closely related to modern political and cultural space.",
    detailEn: [
      "Relatively intimate building scale with streets preserving modern urban life atmosphere.",
      "Can form a Yangtze Road modern historical route with Presidential Palace, Rabe House, and Pulu Temple."
    ],
    highlightEn: "Modern memorial, Republican streetscape, Historical exhibits",
    routeEn: "Modern History Line"
  },
  "rabe-house": {
    nameEn: "Rabe Former Residence",
    typeEn: "Modern Historical Site",
    dynastyEn: "Modern Era",
    introEn: "Near Nanjing University Gulou Campus, an important site for modern historical memory.",
    detailEn: [
      "Small in scale but very concentrated in historical narrative.",
      "Suitable for forming a composite route with Gulou, Presidential Palace, and Meiyuan New Village."
    ],
    highlightEn: "John Rabe history, Nanjing Safety Zone, International heritage",
    routeEn: "Modern History Line"
  },
  "tianshengqiao": {
    nameEn: "Tiansheng Bridge &胭脂 River",
    typeEn: "Heritage Site",
    dynastyEn: "Ming Dynasty",
    introEn: "Important historical water conservancy and transportation landscape in southern suburban Nanjing.",
    detailEn: [
      "Supplements water conservancy engineering in Nanjing's historical heritage.",
      "Located far from the main city, showing spatial expansion of historical sites within Nanjing's range."
    ],
    highlightEn: "Ming water engineering, Natural stone bridge, River valley",
    routeEn: "Southern Suburban Line"
  },
  "mochou-lake": {
    nameEn: "Mochou Lake",
    typeEn: "Garden",
    dynastyEn: "Ming-Qing",
    introEn: "One of Nanjing's famous classical gardens in southwestern old Nanjing.",
    detailEn: [
      "History traces to the Six Dynasties, associated with legendary beauty Mochou. Became a literati gathering place during Ming-Qing.",
      "Can serve as a typical urban garden-water system case, forming a southwestern historical-cultural area."
    ],
    highlightEn: "Classical lakeside garden, Shengqi Tower, Summer lotus",
    routeEn: "Southwestern Cultural Line"
  },
  "stone-city": {
    nameEn: "Stone City (Ghost Face Wall)",
    typeEn: "City Wall Site",
    dynastyEn: "Six Dynasties to Ming Dynasty",
    introEn: "An important Six Dynasties Jiankang defensive fortification in western old Nanjing.",
    detailEn: [
      "Existing ruins connect with Ming city walls, forming the unique 'Ghost Face Wall' landscape.",
      "Can form a western historical-cultural axis with Qingliang Mountain, Mochou Lake, and Yijiang Gate."
    ],
    highlightEn: "Ghost Face Wall, Six Dynasties fortress, Mountain defense",
    routeEn: "Southwestern Cultural Line"
  },
  "bai-luzhou": {
    nameEn: "Bailuzhou Park",
    typeEn: "Garden",
    dynastyEn: "Ming-Qing",
    introEn: "Originally a private garden of Ming Dynasty Prince Zhongshan Xu Da, near Confucius Temple and Qinhuai River.",
    detailEn: [
      "Features water scenery with pavilions and corridors along the water, embodying Jiangnan garden art.",
      "Can form a southern cultural area with Confucius Temple, Zhanyuan, and Zhonghua Gate."
    ],
    highlightEn: "Water-focused Jiangnan garden, Spring peach blossoms",
    routeEn: "City South Cultural Line"
  },
  "qingliang-shan": {
    nameEn: "Qingliang Mountain",
    typeEn: "Cultural Heritage Building",
    dynastyEn: "Six Dynasties to Ming-Qing",
    introEn: "An important mountain in western old Nanjing, a significant geographic landmark since the Six Dynasties.",
    detailEn: [
      "Religious buildings like Qingliang Temple once stood here, becoming a literati gathering place during Ming-Qing.",
      "Can form a western historical-cultural area with Stone City, Mochou Lake, and Wulong Pool."
    ],
    highlightEn: "Historic mountain park, City mountain-water landscape",
    routeEn: "Southwestern Cultural Line"
  },
  "wulongtan": {
    nameEn: "Wulong Pool Park",
    typeEn: "Garden",
    dynastyEn: "Ming-Qing",
    introEn: "One of the city's best-preserved classical gardens in western old Nanjing.",
    detailEn: [
      "Historically a literati gathering place with abundant poetry. Yan Lu Gong Shrine reflects garden-culture combination.",
      "Can form a western historical-cultural area with Qingliang Mountain, Stone City, and Mochou Lake."
    ],
    highlightEn: "Classical garden, Clear pool, Cultural literary heritage",
    routeEn: "Southwestern Cultural Line"
  },
  "jingjue-temple": {
    nameEn: "Jingjue Mosque",
    typeEn: "Temple",
    dynastyEn: "Ming-Qing",
    introEn: "One of Nanjing's most important mosques in southern old Nanjing.",
    detailEn: [
      "Blends traditional Chinese building styles with Islamic cultural characteristics.",
      "Reflects Nanjing's multicultural features as a historical capital.",
      "Can represent religious cultural diversity in GIS display."
    ],
    highlightEn: "Islamic architecture, Multicultural heritage, Chinese mosque design",
    routeEn: "City South Cultural Line"
  },
  "huiji-temple": {
    nameEn: "Huiji Temple",
    typeEn: "Temple",
    dynastyEn: "Southern Tang to Ming-Qing",
    introEn: "An important northern Nanjing Buddhist temple in Pukou District, dating to the Southern Tang period.",
    detailEn: [
      "Contains three millennium-old ginkgo trees, famous ancient trees witnessing historical changes.",
      "Can represent northern Jiangbei Buddhist culture in GIS display."
    ],
    highlightEn: "Millennium ginkgo trees, Southern Tang history, Northern Buddhism",
    routeEn: "Jiangbei Cultural Line"
  },
  "longjiang-shipyard": {
    nameEn: "Longjiang Treasure Shipyard Ruins",
    typeEn: "Heritage Site",
    dynastyEn: "Ming Dynasty",
    introEn: "An important construction site for Zheng He's voyages fleet in the Ming Dynasty.",
    detailEn: [
      "Preserves ancient dock and workshop remains, demonstrating Ming shipbuilding technology and maritime trade.",
      "Can form a riverside historical area with Yuejiang Tower and Yijiang Gate."
    ],
    highlightEn: "Zheng He treasure ships, Ancient shipyard docks, Maritime heritage",
    routeEn: "Riverside Historical Line"
  },
  "yongshou-pagoda": {
    nameEn: "Yongshou Temple Pagoda",
    typeEn: "Temple",
    dynastyEn: "Ming Dynasty",
    introEn: "An important Ming Dynasty Buddhist pagoda in Lishui District, southern Nanjing.",
    detailEn: [
      "Octagonal seven-story pagoda about 40 meters tall, one of the most complete Ming Dynasty pagodas in Nanjing.",
      "Shows Buddhist culture extended beyond the main city to surrounding districts."
    ],
    highlightEn: "Ming octagonal pagoda, Southern suburban Buddhism",
    routeEn: "Southern Suburban Line"
  },
  "qiwengweng": {
    nameEn: "Qiweng Water Storage",
    typeEn: "Heritage Site",
    dynastyEn: "Ming Dynasty",
    introEn: "An important remnant of Ming Dynasty water conservancy engineering in Xiaguan District.",
    detailEn: [
      "Unique structure of seven connected urn-shaped pools achieving water supply through natural pressure.",
      "Can represent ancient water conservancy technology in GIS display."
    ],
    highlightEn: "Ming water engineering, Seven connected pools",
    routeEn: "Riverside Historical Line"
  },
  "xianlin-temple": {
    nameEn: "Xianlin Temple",
    typeEn: "Temple",
    dynastyEn: "Six Dynasties to Ming-Qing",
    introEn: "An important eastern Nanjing Buddhist temple dating to the Six Dynasties.",
    detailEn: [
      "Reflects Buddhist culture extension to eastern Nanjing, forming part of the eastern Buddhist network.",
      "Can represent eastern Buddhist culture in GIS display."
    ],
    highlightEn: "Six Dynasties Buddhist heritage, Eastern Nanjing",
    routeEn: "Eastern Mountain Temple Line"
  },
  "jiangning-imperial": {
    nameEn: "Jiangning Weaving Bureau",
    typeEn: "Cultural Heritage Building",
    dynastyEn: "Qing Dynasty",
    introEn: "The imperial weaving institution in eastern old Nanjing during the Qing Dynasty.",
    detailEn: [
      "Closely related to 'Dream of the Red Chamber' - the Cao family served as Weaving Commissioners for generations.",
      "Can represent handicraft culture, forming an eastern historical-cultural area with Ming Palace and Presidential Palace."
    ],
    highlightEn: "Imperial silk weaving, Dream of the Red Chamber link",
    routeEn: "Eastern Historical Line"
  },
  "xuanwu-lake-park": {
    nameEn: "Xuanwu Lake Park",
    typeEn: "Garden",
    dynastyEn: "Six Dynasties to Modern",
    introEn: "The city's largest inland lake, historically an imperial garden related to the Six Dynasties palace city.",
    detailEn: [
      "Today an important urban public space with five islands and pavilions around the lake.",
      "Can form a northern historical-cultural area with Taicheng, Jiming Temple, and Xuanwu Gate."
    ],
    highlightEn: "City's largest lake, Five-island landscape, Imperial garden",
    routeEn: "Northern Ancient Sites Line"
  },
  "nanjing-museum": {
    nameEn: "Nanjing Museum",
    typeEn: "Cultural Heritage Building",
    dynastyEn: "Republic of China",
    introEn: "Founded in 1933, one of China's earliest large comprehensive museums, with Liao Dynasty revival architecture.",
    detailEn: [
      "Houses collections from Paleolithic to modern times, especially Han artifacts, Six Dynasties celadon, and Ming-Qing art.",
      "Forms a Purple Mountain southern cultural belt with Ming Palace, Sun Yat-sen Mausoleum, and Meiling Palace."
    ],
    highlightEn: "Liao-style architecture, Vast collections, Chinese art heritage",
    routeEn: "Eastern Historical Line"
  },
  "yangtze-bridge": {
    nameEn: "Nanjing Yangtze River Bridge",
    typeEn: "Modern Historical Site",
    dynastyEn: "Modern Era",
    introEn: "Built 1960-1968, the first fully self-designed double-deck road-rail bridge on the Yangtze.",
    detailEn: [
      "Marked an important breakthrough in Chinese bridge engineering, with distinctive era characteristics.",
      "Connects Pukou with the main city, an important geographic node for studying cross-river transportation."
    ],
    highlightEn: "First self-designed Yangtze bridge, Road-rail double-deck, Iconic towers",
    routeEn: "Jiangbei Modern Line"
  },
  "yihe-road": {
    nameEn: "Yihe Road Heritage District",
    typeEn: "Cultural District",
    dynastyEn: "Republic of China",
    introEn: "The embassy district and upscale residential area during the Republican period.",
    detailEn: [
      "Diverse architectural styles including Western villas, Spanish houses, and modernism, witnessing Republican-era planning.",
      "Suitable as a historical district case showing Republican urban functional zoning."
    ],
    highlightEn: "Republican embassies, Western mansions, Tree-lined avenues",
    routeEn: "Republican Architecture Line"
  },
  "laomendong": {
    nameEn: "Laomendong Historic District",
    typeEn: "Cultural District",
    dynastyEn: "Ming-Qing",
    introEn: "East of Zhonghua Gate, historically a prosperous commercial and residential area.",
    detailEn: [
      "Preserves Ming-Qing street patterns with gray brick walls and stone-paved roads.",
      "With Confucius Temple, Zhanyuan, and Zhonghua Gate, forms the core southern historical-cultural area."
    ],
    highlightEn: "Ming-Qing streets, Traditional craftsmanship, Heritage reuse",
    routeEn: "City South Cultural Line"
  },
  "yanzi-ji": {
    nameEn: "Yanzi Rock (Swallow Rock)",
    typeEn: "Heritage Site",
    dynastyEn: "Ming-Qing",
    introEn: "A famous geological landscape and historical scenic spot along the Yangtze, shaped like a flying swallow.",
    detailEn: [
      "An important river defense point with Ming-Qing cannon platforms. Emperor Qianlong visited and left inscriptions.",
      "Located on the northern riverside, connecting with Yuejiang Tower and Mufu Mountain."
    ],
    highlightEn: "Yangtze cliff, River defense, Qianlong inscriptions",
    routeEn: "Riverside Historical Line"
  },
  "purple-mountain-observatory": {
    nameEn: "Purple Mountain Observatory",
    typeEn: "Modern Historical Site",
    dynastyEn: "Republic of China",
    introEn: "Founded in 1934, a landmark of modern Chinese astronomy on Purple Mountain's third peak.",
    detailEn: [
      "Blends Chinese and Western architecture with the natural landscape, now housing an astronomy museum.",
      "Forms a three-dimensional cultural landscape with Sun Yat-sen Mausoleum, Linggu Temple, and Meiling Palace."
    ],
    highlightEn: "Modern astronomy, Panoramic views, Historical telescopes",
    routeEn: "Eastern Suburbs Historical Line"
  },
  "jiuhua-mountain": {
    nameEn: "Jiuhua Mountain & Xuanzang Temple",
    typeEn: "Temple",
    dynastyEn: "Six Dynasties to Modern",
    introEn: "Historically related to Six Dynasties Buddhist culture, with Xuanzang Temple housing the Holy Relics of Xuanzang.",
    detailEn: [
      "Strategically located, echoing Taicheng, Jiming Temple, and Xuanwu Lake with panoramic views.",
      "Forms a northern Buddhist cultural triangle with Jiming Temple and Taicheng."
    ],
    highlightEn: "Xuanzang's relics, City-center Buddhist site, Lake views",
    routeEn: "Northern Ancient Sites Line"
  },
  "fangshan-pagoda": {
    nameEn: "Fangshan Dinglin Temple Pagoda",
    typeEn: "Cultural Heritage Building",
    dynastyEn: "Song Dynasty",
    introEn: "A Southern Song seven-story octagonal brick pagoda leaning more than the Leaning Tower of Pisa.",
    detailEn: [
      "Historically a Buddhist site connected to Liu Xie's 'The Literary Mind and the Carving of Dragons.'",
      "With Niushou Mountain and Southern Tang Mausoleums, forms the southern historical sites belt."
    ],
    highlightEn: "China's leaning pagoda, Song architecture, Volcanic mountain",
    routeEn: "Southern Mountain Line"
  },
  "wuchaomen": {
    nameEn: "Wuchao Gate (Meridian Gate)",
    typeEn: "Palace Ruins",
    dynastyEn: "Ming Dynasty",
    introEn: "The main southern entrance of Ming Palace, equivalent to Beijing's Meridian Gate.",
    detailEn: [
      "Heritage Park preserves gate piers, stone bases, and five stone bridges on Yudai River.",
      "On the Ming Palace axis with Ming Palace Ruins and Xi'an Gate Ruins, reveals imperial city regulations."
    ],
    highlightEn: "Ming Palace southern gate, Heritage park, Archaeological remains",
    routeEn: "Eastern Historical Line"
  },
  "zhenghe-tomb": {
    nameEn: "Zheng He's Tomb",
    typeEn: "Mausoleum Site",
    dynastyEn: "Ming Dynasty",
    introEn: "At the southern foot of Niushou Mountain, built in Islamic style reflecting Zheng He's special identity.",
    detailEn: [
      "Includes a memorial hall and stele corridor, with Niushou Mountain scenery and Hongjue Temple nearby.",
      "Demonstrates Nanjing's status as the starting point of great Ming maritime voyages."
    ],
    highlightEn: "Islamic-style tomb, Maritime explorer memorial, Niushou Mountain",
    routeEn: "Southern Mountain Line"
  }
};

const spots = [
  {
    id: "ming-xiaoling",
    name: "明孝陵",
    type: "陵寝遗址",
    markerType: "tomb",
    dynasty: "明代",
    lat: 32.0617,
    lng: 118.8614,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Nanjing_Ming_Xiaoling_2017.11.11_08-10-27.jpg/3840px-Nanjing_Ming_Xiaoling_2017.11.11_08-10-27.jpg",
    intro: "明孝陵是明太祖朱元璋与马皇后的陵寝，位于紫金山南麓，是南京明代都城格局和皇家礼制的重要实物见证。",
    detail: [
      "明孝陵始建于明洪武年间，是明代开国皇帝朱元璋与马皇后的合葬陵寝。它依托钟山南麓的山体地形展开，陵区并不是简单的直线轴线，而是将自然山势、河道、神道和祭祀建筑组合在一起，形成“因山为陵”的空间格局。",
      "景区中最具有辨识度的是神道石像生。石兽、文臣武将等石刻沿道路排列，既有皇家陵寝的仪制意味，也展示出明代早期石刻艺术的厚重风格。方城、明楼、宝顶等遗存则对应陵寝祭祀、防护和象征性的核心空间。",
      "从 GIS 表达角度看，明孝陵适合作为“点状景点 + 片区遗产”的案例。它不仅是单个景点，还与中山陵、灵谷寺、美龄宫等共同构成紫金山历史文化景观带，能体现历史遗产与城市山体生态空间的叠合关系。"
    ],
    highlight: "神道石像生、方城明楼、宝顶、钟山山麓格局",
    route: "东郊历史线"
  },
  {
    id: "fuzimiao",
    name: "夫子庙秦淮风光带",
    type: "文化街区",
    markerType: "culture",
    dynasty: "东晋至明清",
    lat: 32.0209,
    lng: 118.7888,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/LingXingMen_of_Nanjing_Confucian_Temple.jpg",
    intro: "夫子庙以祭祀孔子的文庙为核心，秦淮河两岸聚集贡院、牌坊、街市和水上游览空间，是南京古代文教与市井生活的缩影。",
    detail: [
      "夫子庙秦淮风光带是南京老城南部最具代表性的历史文化区域。这里以文庙为核心，周围分布江南贡院、秦淮河、乌衣巷、白鹭洲等历史节点，形成了文教、商业、民俗和水岸游览高度融合的城市空间。",
      "秦淮河在古代既是交通水道，也是城市生活的重要界面。明清时期，夫子庙周边商铺密集、灯市繁华，科举考试带来的文人活动又强化了这里的文化属性。江南贡院曾是江南地区重要科举考场，使夫子庙不仅是旅游街区，也承载着中国传统教育制度的空间记忆。",
      "在地图展示中，夫子庙适合表达“点线面结合”的 GIS 思路：文庙和贡院是点，秦淮河是线，风光带和历史街区则是面。点击展示时可以把它作为城市历史街区类景点的典型。"
    ],
    highlight: "文庙、江南贡院、秦淮河、乌衣巷、夜游空间",
    route: "城南文化线"
  },
  {
    id: "zhonghua-gate",
    name: "中华门城堡",
    type: "城墙遗址",
    markerType: "wall",
    dynasty: "明代",
    lat: 32.0038,
    lng: 118.7818,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Nanjing-City-Wall-looking-west-from-Zhonghua-Gate-3141.jpg",
    intro: "中华门原名聚宝门，是南京明城墙南门，瓮城结构规模宏大，体现了明代都城防御工程的严密性。",
    detail: [
      "中华门城堡原名聚宝门，是南京明城墙中规模最大、结构最复杂的城门之一。它位于南京老城南部，是明代都城防御体系的重要节点，城门、瓮城、闸门、藏兵洞等设施层层组织，体现出强烈的军事防御功能。",
      "中华门最突出的价值在于多重瓮城结构。敌人即使突破第一道城门，也会进入封闭空间，受到来自城墙和藏兵洞的夹击。这种设计说明明代南京城墙不仅追求高大坚固，也非常重视防守路径和兵力调度。",
      "在 GIS 作业中，中华门可以作为城墙线性遗产上的关键节点来展示。把它与台城、玄武门、挹江门等点位连接，可以直观表现南京明城墙围合老城的空间轮廓。"
    ],
    highlight: "多重瓮城、藏兵洞、明城墙南门、城防工程",
    route: "明城墙防御线"
  },
  {
    id: "jimingsi",
    name: "鸡鸣寺",
    type: "寺庙",
    markerType: "temple",
    dynasty: "南朝至明清",
    lat: 32.0607,
    lng: 118.7964,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Jiming_Temple_Nanjing%2C_2019_%28cropped%29.jpg",
    intro: "鸡鸣寺位于玄武湖南侧，历史可追溯至南朝佛教兴盛时期，寺院与台城、玄武湖共同构成南京老城北部的历史景观。",
    detail: [
      "鸡鸣寺位于南京老城北部，紧邻玄武湖和台城。南京在六朝时期是佛教文化极为兴盛的都城，鸡鸣寺所在区域延续了南朝佛寺与城市宫城空间之间的历史联系。",
      "今天的鸡鸣寺以山门、殿宇、药师佛塔和登高远眺视角著称。春季樱花和玄武湖景观强化了它的城市公共空间属性，但其核心价值仍然在于古寺、城墙、湖泊共同形成的历史环境。",
      "作为地图点位，鸡鸣寺可以和台城、玄武湖、北极阁等共同构成“城北古迹线”。它体现了南京古都中宗教建筑、城防遗存和自然湖泊之间的紧密关系。"
    ],
    highlight: "药师佛塔、古寺轴线、玄武湖远眺、台城相邻",
    route: "城北古迹线"
  },
  {
    id: "taicheng",
    name: "台城与南京城墙",
    type: "城墙遗址",
    markerType: "wall",
    dynasty: "六朝至明代",
    lat: 32.0618,
    lng: 118.7976,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Nanjing_in_Ming_Dynasty.jpg",
    intro: "台城一带与六朝宫城记忆相关，现存城墙段属于明城墙体系，可观察南京从六朝都城到明代都城的空间延续。",
    detail: [
      "台城是南京历史地名中非常重要的一处，常与六朝建康宫城记忆联系在一起。现今可见的台城段城墙主要属于明代南京城墙体系，但它所在的空间位置让人能够联想到南京从六朝古都到明代都城的历史叠加。",
      "台城段与玄武湖、鸡鸣寺距离很近，是南京老城北部历史景观最集中的区域之一。站在城墙上可以观察湖泊、寺庙、现代城市道路和老城肌理的关系，非常适合用来说明城市历史空间的延续与更新。",
      "在 GIS 展示中，台城既可以作为明城墙上的点位，也可以作为六朝历史记忆的标注点。它提醒我们，很多城市遗产并不是单一年代的遗存，而是多时期空间叠合后的结果。"
    ],
    highlight: "台城段城墙、玄武湖界面、六朝记忆、明城墙体系",
    route: "城北古迹线"
  },
  {
    id: "zhanyuan",
    name: "瞻园",
    type: "园林",
    markerType: "garden",
    dynasty: "明清",
    lat: 32.0161,
    lng: 118.7835,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Nanjing_ZhanYuan1.jpg",
    intro: "瞻园是南京代表性古典园林，布局以山石、水面、亭榭和曲折游线见长，也与太平天国历史展示相结合。",
    detail: [
      "瞻园位于南京城南，是南京保存较有代表性的江南古典园林之一。园林空间以水体、假山、亭榭、曲廊和院落组织游览路径，讲究步移景异和小尺度空间变化。",
      "瞻园不仅是一处园林景观，也与南京近代历史展示相结合。园内相关展陈涉及太平天国历史，使其同时具备园林艺术、地方历史和旅游展示功能。",
      "在 GIS 作业中，瞻园适合用来说明古典园林在高密度老城街区中的嵌入关系。它距离夫子庙、中华门较近，可与城南文化线路联动展示。"
    ],
    highlight: "江南园林、假山水院、曲廊游线、太平天国历史展示",
    route: "城南文化线"
  },
  {
    id: "chaotian-palace",
    name: "朝天宫",
    type: "文化古建",
    markerType: "culture",
    dynasty: "明清",
    lat: 32.0361,
    lng: 118.7772,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/%E6%9C%9D%E5%A4%A9%E5%AE%AB%C2%B7%E5%8D%97%E4%BA%AC%C2%B7%E8%88%AA%E6%8B%8D.jpg",
    intro: "朝天宫是南京保存较完整的明清官式建筑群之一，现为南京市博物馆所在地，适合展示古建筑与城市文化记忆。",
    detail: [
      "朝天宫位于南京老城西南部，是南京保存较完整、规模较大的明清官式建筑群之一。建筑群轴线清晰，院落层层递进，体现出传统礼制建筑的空间秩序。",
      "今天的朝天宫作为南京市博物馆所在地，既展示建筑遗产本身，也承担城市历史展陈功能。游客可以在同一空间中理解南京建城、都城变迁、民俗生活和文物收藏。",
      "从 GIS 角度看，朝天宫代表了老城内部的文化公共服务节点。它可以和夫子庙、瞻园、总统府等共同构成南京历史文化游览网络。"
    ],
    highlight: "棂星门、大成殿建筑群、南京市博物馆、礼制轴线",
    route: "老城文化线"
  },
  {
    id: "qixia-temple",
    name: "栖霞寺",
    type: "寺庙",
    markerType: "temple",
    dynasty: "南朝",
    lat: 32.1506,
    lng: 118.9568,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Qixiasi05.jpg",
    intro: "栖霞寺位于栖霞山，是南京重要佛教古寺，周边保存千佛岩、舍利塔等历史遗存，体现南朝佛教文化影响。",
    detail: [
      "栖霞寺位于南京东北部栖霞山，是南京佛教文化的重要代表。寺院历史可追溯至南朝时期，长期以来与栖霞山自然景观、石窟造像和佛教活动联系紧密。",
      "栖霞寺周边的千佛岩、舍利塔等遗存，使这里不仅是寺庙景点，也是一处具有宗教艺术价值的文化遗产片区。秋季栖霞山红叶又使它具有很强的季节性旅游吸引力。",
      "在地图展示中，栖霞寺位于南京主城之外，能够体现南京历史景点并不只集中在老城，还沿山体、水系和交通走廊向郊区展开。"
    ],
    highlight: "山门、舍利塔、千佛岩、栖霞山历史景观",
    route: "东郊山寺线"
  },
  {
    id: "linggu-temple",
    name: "灵谷寺",
    type: "寺庙",
    markerType: "temple",
    dynasty: "明代至近代",
    lat: 32.0602,
    lng: 118.8824,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%E7%81%B5%E8%B0%B7%E5%AF%BA%E8%88%AA%E6%8B%8D20220528_02.jpg/3840px-%E7%81%B5%E8%B0%B7%E5%AF%BA%E8%88%AA%E6%8B%8D20220528_02.jpg",
    intro: "灵谷寺位于钟山东部，明代迁建后成为重要佛寺，近代又形成无梁殿、灵谷塔等纪念性景观。",
    detail: [
      "灵谷寺位于紫金山东麓，是南京东郊历史文化景观的重要组成部分。明代初年，寺院因建设明孝陵而迁至现址，说明它与明代皇家陵寝营建关系密切。",
      "灵谷寺最具特色的建筑之一是无梁殿，其砖石拱券结构不用木梁，体现出特殊的建筑技术。近代以来，灵谷寺一带又形成纪念性空间，灵谷塔成为东郊景观中的显著地标。",
      "在 GIS 展示中，灵谷寺可与明孝陵、中山陵、美龄宫组成钟山片区的连续游览节点，体现同一山体中不同时期历史遗产的叠加。"
    ],
    highlight: "无梁殿、灵谷塔、钟山东麓、明代迁建寺院",
    route: "东郊历史线"
  },
  {
    id: "presidential-palace",
    name: "总统府",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "清代至民国",
    lat: 32.0453,
    lng: 118.7977,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/%E4%B8%AD%E5%8D%8E%E6%B0%91%E5%9B%BD%E6%80%BB%E7%BB%9F%E5%BA%9C%C2%B7%E5%8D%97%E4%BA%AC%C2%B7%E8%88%AA%E6%8B%8D.jpg/3840px-%E4%B8%AD%E5%8D%8E%E6%B0%91%E5%9B%BD%E6%80%BB%E7%BB%9F%E5%BA%9C%C2%B7%E5%8D%97%E4%BA%AC%C2%B7%E8%88%AA%E6%8B%8D.jpg",
    intro: "总统府所在区域经历清代两江总督署、太平天国天王府和民国政府办公地等多重历史阶段，是南京近代史核心地标。",
    detail: [
      "南京总统府位于长江路，是南京近代历史最重要的建筑群之一。这里曾与清代两江总督署、太平天国天王府、中华民国临时政府和国民政府等历史阶段相关联，空间记忆极为丰富。",
      "建筑群中既有中式院落，也有近代办公建筑和园林空间，能看到中国传统政治建筑向近代行政建筑转变的痕迹。它不只是单体建筑，而是一组不断被改造、叠加和再利用的历史场所。",
      "作为 GIS 点位，总统府适合归入“近代南京政治中心”图层。它与梅园新村、毗卢寺、长江路文化街区距离较近，可以构成近代史迹专题路线。"
    ],
    highlight: "两江总督署、天王府、民国政府办公地、近代建筑群",
    route: "近代史迹线"
  },
  {
    id: "yuejiang-tower",
    name: "阅江楼",
    type: "文化古建",
    markerType: "culture",
    dynasty: "明代构想，现代建成",
    lat: 32.0907,
    lng: 118.7426,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nanjing_Yuejiang_Lou.jpg",
    intro: "阅江楼位于狮子山，朱元璋曾撰《阅江楼记》，现建筑虽为现代建成，但承载明代南京滨江意象。",
    detail: [
      "阅江楼位于南京下关狮子山上，面向长江。明太祖朱元璋曾有建楼构想并撰写《阅江楼记》，虽然历史上长期未真正建成，但这一地点一直承载着明代都城面江而立的空间想象。",
      "今天的阅江楼为现代建成的仿古建筑，严格来说不是古建筑原物，但它与狮子山、明城墙、长江岸线共同构成南京滨江历史景观。登楼可观察长江、南京长江大桥、下关港区等城市地理要素。",
      "在作业中加入阅江楼，可以体现“历史文化意象型景点”的表达：有些景点价值并不完全来自建筑年代，而来自历史文本、地理位置和城市记忆。"
    ],
    highlight: "狮子山、长江视野、明代都城意象、滨江景观",
    route: "滨江城墙线"
  },
  {
    id: "yijiang-gate",
    name: "挹江门",
    type: "城墙遗址",
    markerType: "wall",
    dynasty: "明代至近代",
    lat: 32.0789,
    lng: 118.7522,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/YiJiangGate.jpg",
    intro: "挹江门是南京城墙西北部重要城门，连接老城与长江岸线，体现南京城防体系和滨江交通关系。",
    detail: [
      "挹江门位于南京老城西北部，靠近下关和长江岸线。它是明城墙体系中的重要节点之一，也体现了南京老城与滨江地区之间的通道关系。",
      "南京城墙并非规则几何形状，而是结合山体、水系和城市边界修筑。挹江门所在区域可以观察城墙如何向长江方向延伸，并与狮子山、阅江楼等景点产生空间联系。",
      "在地图上将挹江门、中华门、台城等点位连线，可以更直观地展示明城墙作为线状文化遗产的结构。"
    ],
    highlight: "西北城门、下关通道、明城墙节点、滨江联系",
    route: "滨江城墙线"
  },
  {
    id: "meiling-palace",
    name: "美龄宫",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "民国",
    lat: 32.0611,
    lng: 118.8487,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Chairman%27s_Residence_Gate_of_Nationalist_Government%2C_Nanking.jpg",
    intro: "美龄宫位于钟山风景区，是民国时期建筑与山林景观结合的代表性建筑，展现南京近代建筑风貌。",
    detail: [
      "美龄宫位于钟山南麓，是南京民国时期建筑遗存中的代表。建筑将中式屋顶形象、现代建筑功能和山林环境结合起来，体现出民国建筑在传统符号与现代生活之间的融合。",
      "美龄宫周边林木环绕，道路曲折，与明孝陵、中山陵等景区距离较近。它所在的钟山片区不仅有明代陵寝，也有民国纪念建筑，是南京跨时代历史景观最集中的地区之一。",
      "作为 GIS 点位，美龄宫适合放入近代史迹图层，同时也能与东郊历史线连通，帮助理解同一地理空间在不同历史时期被持续使用。"
    ],
    highlight: "民国建筑、钟山山林环境、中西合璧、东郊片区",
    route: "东郊历史线"
  },
  {
    id: "sun-yat-sen-mausoleum",
    name: "中山陵",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "民国",
    lat: 32.0644,
    lng: 118.8482,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Hall_of_Sun_Yat-sen_Mausoleum.jpg",
    intro: "中山陵是孙中山先生陵寝，位于钟山南麓，是南京民国建筑、纪念空间和山体景观结合的标志性景点。",
    detail: [
      "中山陵位于紫金山南麓，是孙中山先生的陵寝，也是南京民国时期纪念性建筑的代表。陵园以中轴台阶向山体展开，祭堂、碑亭、广场和山林共同形成庄重的纪念空间。",
      "中山陵的空间组织强调由低到高、由开阔到肃穆的游览体验。游客沿台阶逐步上行，城市视野和山林环境不断变化，建筑与地形结合紧密。",
      "在 GIS 展示中，中山陵虽然属于近代史迹，但与明孝陵、美龄宫、灵谷寺同处钟山片区，能体现南京东郊历史景观的连续性和多年代叠合特征。"
    ],
    highlight: "祭堂、长阶、中轴纪念空间、钟山景观",
    route: "东郊历史线"
  },
  {
    id: "ganxi-residence",
    name: "甘熙故居",
    type: "文化古建",
    markerType: "culture",
    dynasty: "清代",
    lat: 32.0263,
    lng: 118.7804,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/GanJiaDaYuan02.JPG",
    intro: "甘熙故居又称南京民俗博物馆，是南京保存较好的清代大型民居建筑群，展示老城南民居和家族生活空间。",
    detail: [
      "甘熙故居位于南京老城南，是清代大型民居建筑群。建筑以多进院落组织生活空间，体现了江南城市宅院的居住秩序、家族结构和传统礼俗。",
      "与宫殿、寺庙、城墙相比，甘熙故居代表的是普通城市生活和家族宅院遗产。它帮助我们理解南京历史城市不只有宏大的政治与军事建筑，也有细密的民居肌理。",
      "在 GIS 作业中，甘熙故居可作为“传统民居”类别加入，与夫子庙、瞻园、中华门一起展示老城南历史文化片区的丰富性。"
    ],
    highlight: "清代民居、多进院落、南京民俗博物馆、老城南肌理",
    route: "城南文化线"
  },
  {
    id: "porcelain-tower",
    name: "大报恩寺遗址公园",
    type: "文化古建",
    markerType: "culture",
    dynasty: "明代遗址",
    lat: 32.0006,
    lng: 118.7755,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/The_Stele_of_Bao%27en_Temple_2011-03.JPG/3840px-The_Stele_of_Bao%27en_Temple_2011-03.JPG",
    intro: "大报恩寺遗址公园展示明代皇家寺院遗址和琉璃塔记忆，是南京佛教建筑、考古遗址与现代展示结合的景点。",
    detail: [
      "大报恩寺位于南京城南，明代曾建有著名的琉璃塔，是南京历史上极具国际知名度的佛教建筑。原塔已毁，现址通过遗址保护、考古展示和现代建筑再现大报恩寺的历史记忆。",
      "遗址公园的价值在于把考古遗存、历史文献和现代展示结合起来。游客看到的不只是复建形象，也能理解遗址保护如何把地下遗存转化为可阅读的公共文化空间。",
      "在 GIS 系统中，大报恩寺可以作为遗址型景点，与中华门、夫子庙、瞻园等形成城南历史文化集聚区。"
    ],
    highlight: "明代皇家寺院遗址、琉璃塔记忆、考古展示、城南片区",
    route: "城南文化线"
  },
  {
    id: "ming-palace",
    name: "明故宫遗址",
    type: "宫城遗址",
    markerType: "culture",
    dynasty: "明代",
    lat: 32.0408,
    lng: 118.8177,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/%E6%98%8E%E6%95%85%E5%AE%AB%C2%B7%E5%8D%97%E4%BA%AC%C2%B7%E8%88%AA%E6%8B%8D.jpg",
    intro: "明故宫遗址是明初南京皇宫所在地，虽地面建筑保存有限，但对理解南京明代都城轴线和宫城布局非常重要。",
    detail: [
      "明故宫遗址位于南京老城东部，是明初皇宫所在地。朱元璋定都南京后营建宫城，形成完整的都城礼制空间，对后来北京宫城建设也产生影响。",
      "今天明故宫地面建筑遗存有限，但午朝门、遗址公园和地名仍保留着宫城空间记忆。它的价值更多体现在城市格局层面：道路、地名、遗址和周边片区共同指向明代都城核心区。",
      "在 GIS 展示中，明故宫适合作为“遗址记忆型景点”。通过点位和说明文字，可以引导用户理解看似普通的城市空间背后隐藏的古都结构。"
    ],
    highlight: "明初皇宫、午朝门遗址、都城轴线、宫城格局",
    route: "明代都城线"
  },
  {
    id: "drum-tower",
    name: "鼓楼",
    type: "文化古建",
    markerType: "culture",
    dynasty: "明代",
    lat: 32.0593,
    lng: 118.7828,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Nanjing_Drum_Tower.jpg/3840px-Nanjing_Drum_Tower.jpg",
    intro: "南京鼓楼始建于明代，是古代城市报时和礼仪活动相关建筑，所在区域也是南京老城重要地标。",
    detail: [
      "南京鼓楼位于老城中北部，始建于明代，是古代城市报时、礼仪和管理活动相关的公共建筑。鼓楼地势相对突出，长期作为南京城市识别度很高的地标。",
      "鼓楼周边如今是城市交通和公共活动核心区域之一，古建筑与现代城市功能高度叠合。它说明历史地标在现代城市中并不只是被保护起来，也常常继续参与城市空间组织。",
      "在 GIS 作业中，鼓楼可以作为老城中心地标，连接玄武湖、台城、朝天宫、总统府等点位，展示南京老城内部的历史节点分布。"
    ],
    highlight: "明代报时建筑、城市地标、老城中北部节点",
    route: "老城文化线"
  },
  {
    id: "xuanwu-gate",
    name: "玄武门",
    type: "城墙遗址",
    markerType: "wall",
    dynasty: "明代",
    lat: 32.0719,
    lng: 118.7863,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Inside_the_Xuanwu_Gate%2C_Nanjing.jpg",
    intro: "玄武门位于玄武湖西侧，是南京城墙北部重要城门之一，连接老城与玄武湖景观。",
    detail: [
      "玄武门位于南京老城北部、玄武湖西侧，是明城墙体系中的重要城门节点。它把城内道路、城墙防御和玄武湖景观联系在一起，是理解南京北部城市边界的重要位置。",
      "玄武湖在古代既是自然水面，也具有城市防御和景观价值。玄武门与湖泊相邻，使城墙不只是军事设施，也成为城市山水格局的一部分。",
      "将玄武门与台城、鸡鸣寺、鼓楼等点位一起展示，可以形成老城北部历史景观的空间链条。"
    ],
    highlight: "北部城门、玄武湖、明城墙、城市边界",
    route: "城北古迹线"
  },
  {
    id: "yuhuatai",
    name: "雨花台",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "古迹与近代纪念地",
    lat: 31.9971,
    lng: 118.7794,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Yuhuatai.JPG",
    intro: "雨花台兼具历史传说、自然丘陵和近代革命纪念地属性，是南京南部重要的纪念性景区。",
    detail: [
      "雨花台位于南京城南，是一处兼具自然丘陵、历史传说和近代纪念属性的景区。雨花石、古代地名传说和近代革命纪念空间共同构成其文化内涵。",
      "景区内的纪念建筑和展陈使雨花台成为南京近代史教育的重要地点。它与中华门、大报恩寺等城南景点距离较近，但主题从古代城防和佛教遗址延伸到近现代历史记忆。",
      "在 GIS 表达中，雨花台可以作为南部纪念性景点加入路线，体现南京历史旅游资源从古代遗迹到近代纪念地的连续覆盖。"
    ],
    highlight: "雨花石文化、丘陵景观、近代纪念空间、城南节点",
    route: "城南文化线"
  },
  {
    id: "niushou-hongjue",
    name: "牛首山弘觉寺塔",
    type: "寺庙",
    markerType: "temple",
    dynasty: "唐宋至明清",
    lat: 31.9177,
    lng: 118.7429,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Niusgoushan_Cultural_Park%2C_Nanjing%2C_China_-_09.jpg/3840px-Niusgoushan_Cultural_Park%2C_Nanjing%2C_China_-_09.jpg",
    intro: "弘觉寺塔位于牛首山，是南京南郊佛教文化和山地景观的重要遗存，体现寺塔与山体环境的结合。",
    detail: [
      "牛首山位于南京南部，自古就是南京南郊重要山地景观。弘觉寺塔作为山中重要历史遗存，体现了佛教建筑在山地环境中的布局特点。",
      "牛首山一带的价值不只在单体建筑，还在山体、寺院、塔、道路和观景空间的组合。它可以帮助理解南京历史景点从老城向南郊山地延伸的格局。",
      "在 GIS 展示中，弘觉寺塔适合作为南部山地佛教文化点位，与雨花台、大报恩寺、中华门形成从城南到南郊的历史游览轴。"
    ],
    highlight: "弘觉寺塔、牛首山山体、南郊佛教文化",
    route: "南郊山寺线"
  },
  {
    id: "yangshan-quarry",
    name: "阳山碑材",
    type: "遗址",
    markerType: "culture",
    dynasty: "明代",
    lat: 32.0581,
    lng: 119.0049,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Yangshan03.jpg",
    intro: "阳山碑材是明代大型采石遗址，与明孝陵神功圣德碑营建相关，展示明代皇家工程的规模。",
    detail: [
      "阳山碑材位于南京东部汤山一带，是明代大型采石工程遗址。相传这里开采巨型碑材，准备服务于明代皇家陵寝工程，遗址规模非常震撼。",
      "与城内古建筑不同，阳山碑材展示的是工程生产遗址。巨大的碑座、碑身和碑额留存在山体采石场中，能够直观看到古代大型石作工程的技术和组织能力。",
      "在 GIS 作业中，阳山碑材可以补充“遗址类”和“工程类”景点，说明南京历史遗产既包括城市建筑，也包括分布在郊区的资源采集和营建遗存。"
    ],
    highlight: "明代采石遗址、巨型碑材、皇家工程、汤山片区",
    route: "东部遗址线"
  },
  {
    id: "nantang-mausoleums",
    name: "南唐二陵",
    type: "陵寝遗址",
    markerType: "tomb",
    dynasty: "五代十国",
    lat: 31.9027,
    lng: 118.7995,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Nantang06.jpg",
    intro: "南唐二陵是五代十国时期南唐帝王陵墓遗址，对理解南京在明代以前的都城历史具有重要意义。",
    detail: [
      "南唐二陵位于南京南郊，是南唐帝王陵墓遗址。南京不只是明代和民国都城，在五代十国时期也曾作为南唐都城金陵，南唐二陵正是这一历史阶段的重要遗存。",
      "陵墓遗址保存了地下墓室、石刻和陵寝空间信息，能够补充南京都城史中容易被忽略的南唐阶段。它与明孝陵、中山陵相比规模和知名度不同，但历史断代价值非常突出。",
      "在地图系统中加入南唐二陵，可以让时间轴更加完整：六朝、南唐、明清、民国等不同阶段都能在南京空间中找到对应点位。"
    ],
    highlight: "南唐帝陵、五代十国、地下墓室、南京都城史",
    route: "南郊历史线"
  },
  {
    id: "gao-chun-old-street",
    name: "高淳老街",
    type: "文化街区",
    markerType: "culture",
    dynasty: "明清",
    lat: 31.3285,
    lng: 118.8751,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zhengyi_Street_in_Gaochun_2012-04.JPG/3840px-Zhengyi_Street_in_Gaochun_2012-04.JPG",
    intro: "高淳老街保留明清以来水乡商业街区格局，是南京南部区县传统街市和民居风貌的代表。",
    detail: [
      "高淳老街位于南京高淳区，是南京全域历史文化资源中非常重要的区县型街区。街道格局、传统店铺、民居和水乡环境共同展示了明清以来江南市镇生活。",
      "它与南京主城内的夫子庙不同，更强调县域商业街、市井生活和水乡交通环境。把高淳老街加入地图，可以避免景点全部集中在主城，让作品更有全域 GIS 的意味。",
      "作为文化街区类点位，高淳老街适合展示传统商业街道、民居立面、地方饮食和非遗民俗等综合信息。"
    ],
    highlight: "明清街市、水乡商业、传统民居、南京南部区县",
    route: "全域古镇线"
  },
  {
    id: "pukou-station",
    name: "浦口火车站旧址",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "近代",
    lat: 32.0884,
    lng: 118.6276,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E5%8D%97%E4%BA%AC%E5%8C%97%E7%AB%9920210605_05.jpg/3840px-%E5%8D%97%E4%BA%AC%E5%8C%97%E7%AB%9920210605_05.jpg",
    intro: "浦口火车站旧址是南京近代交通史重要遗存，见证津浦铁路、长江轮渡和近代城市交通格局。",
    detail: [
      "浦口火车站位于长江北岸，是南京近代交通史中的重要节点。它与津浦铁路、长江轮渡、南京下关地区共同构成近代跨江交通体系。",
      "火车站旧址具有典型近代建筑风貌，也承载文学、影像和城市记忆。它说明南京近代城市发展不只发生在老城内部，也与铁路、港口和跨江交通密切相关。",
      "在 GIS 展示中，浦口火车站可以作为江北近代史迹点位，补充南京全域范围内的近代交通遗产。"
    ],
    highlight: "津浦铁路、近代车站、跨江交通、江北历史节点",
    route: "近代交通线"
  },
  {
    id: "meiyuan-xincun",
    name: "梅园新村纪念馆",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "近代",
    lat: 32.0469,
    lng: 118.8035,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/No30_MeiyuanXincun_Nanjing_1.jpg",
    intro: "梅园新村纪念馆位于长江路附近，是南京近现代政治史和革命史展示的重要场所。",
    detail: [
      "梅园新村位于南京长江路片区，周边近代史迹密集，与总统府等点位共同构成南京近代政治文化空间。这里以纪念馆形式展示近现代历史事件和人物活动。",
      "建筑尺度相对亲近，街巷环境保留了近代城市生活气息。它与大型纪念建筑不同，更适合表现历史事件发生地与城市街区之间的关系。",
      "在 GIS 系统中，梅园新村可与总统府、拉贝故居、毗卢寺等组成长江路近代史迹专题线路。"
    ],
    highlight: "长江路片区、近现代政治史、街巷纪念馆",
    route: "近代史迹线"
  },
  {
    id: "rabe-house",
    name: "拉贝故居",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "近代",
    lat: 32.0562,
    lng: 118.7824,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/John_Rabe_House.JPG",
    intro: "拉贝故居是南京近代历史记忆的重要场所，与南京安全区历史和城市战争记忆相关。",
    detail: [
      "拉贝故居位于南京大学鼓楼校区附近，是南京近代历史记忆的重要地点。它与南京安全区历史、人道救援和城市战争记忆密切相关。",
      "故居类遗产通常尺度不大，但其历史叙事非常集中。通过地图点位展示，可以让用户意识到近代历史并不只存在于大型纪念馆，也存在于普通街区和校园周边的具体建筑中。",
      "在 GIS 作业中，拉贝故居适合与鼓楼、总统府、梅园新村等点位关联，构成主城近代史迹和教育文化空间的复合线路。"
    ],
    highlight: "故居建筑、南京安全区记忆、近代城市史",
    route: "近代史迹线"
  },
  {
    id: "tianshengqiao",
    name: "天生桥与胭脂河",
    type: "遗址",
    markerType: "culture",
    dynasty: "明代",
    lat: 31.6545,
    lng: 119.0162,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/%E5%A4%A9%E7%94%9F%E6%A1%A5_-_panoramio.jpg",
    intro: "天生桥与胭脂河位于溧水，是明代水运工程相关景观，体现南京全域水系交通和人工开凿工程。",
    detail: [
      "天生桥与胭脂河位于南京溧水区，是南京南部重要的历史水利和交通景观。胭脂河开凿与明代水运工程相关，天生桥则形成独特的地貌和工程景观。",
      "这一点位的意义在于补充南京历史遗产中的水利工程类型。南京古迹不只有城墙、寺庙和陵墓，也包括服务交通、漕运和区域联系的工程遗产。",
      "在 GIS 展示中，天生桥距离主城较远，能够体现南京行政范围内历史景点的空间扩展，也适合与高淳老街组成南部全域文化线路。"
    ],
    highlight: "胭脂河、明代水运工程、溧水全域景点",
    route: "全域古镇线"
  },
  {
    id: "mochou-lake",
    name: "莫愁湖",
    type: "园林",
    markerType: "garden",
    dynasty: "明清",
    lat: 32.0375,
    lng: 118.7468,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/%E8%8E%AB%E6%84%81%E6%B9%9620220529_01.jpg/3840px-%E8%8E%AB%E6%84%81%E6%B9%9620220529_01.jpg",
    intro: "莫愁湖是南京著名古典园林，以湖光山色和胜棋楼等建筑著称，体现江南园林与城市水系的融合。",
    detail: [
      "莫愁湖位于南京老城西南部，是南京著名的古典园林之一。湖面开阔，环湖布置亭台楼阁，胜棋楼、郁金堂等建筑与湖水相映成趣。",
      "莫愁湖的历史可追溯至六朝时期，传说与南朝美女莫愁女有关。明清时期，这里成为文人雅集之地，留下大量诗词书画。",
      "在 GIS 展示中，莫愁湖可作为城市园林与水系结合的典型案例，与清凉山、石头城等构成西南部历史文化片区。"
    ],
    highlight: "湖光山色、胜棋楼、江南园林、城市水系",
    route: "老城文化线"
  },
  {
    id: "stone-city",
    name: "石头城",
    type: "城墙遗址",
    markerType: "wall",
    dynasty: "六朝至明代",
    lat: 32.0502,
    lng: 118.7495,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/The_Sui_Dynasty_Dynasty_map_of_Nanjing%2Cby_Chen_Yi.jpg",
    intro: "石头城是六朝建康城的重要防御工事，现存城墙段与明代城墙相连，体现南京城防历史的延续。",
    detail: [
      "石头城位于南京老城西部，是六朝时期建康城的重要防御工事。它依山而建，地势险要，在六朝都城防御体系中占据重要地位。",
      "现存石头城遗址与明代城墙相连，形成了独特的'鬼脸城'景观。这里可以看到南京城防从六朝到明代的历史延续和空间叠加。",
      "在 GIS 展示中，石头城可与清凉山、莫愁湖、挹江门等构成西部历史文化轴线，展示南京城防体系的空间演变。"
    ],
    highlight: "六朝城防、鬼脸城、城防历史延续、西部轴线",
    route: "滨江城墙线"
  },
  {
    id: "bai-luzhou",
    name: "白鹭洲公园",
    type: "园林",
    markerType: "garden",
    dynasty: "明清",
    lat: 32.0182,
    lng: 118.7958,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/%E5%8D%97%E4%BA%AC%E7%99%BD%E9%B9%AD%E6%B4%B2%E5%85%AC%E5%9B%AD_-_panoramio.jpg",
    intro: "白鹭洲公园位于夫子庙附近，是明清时期江南园林的代表，体现水乡园林与城市街区的融合。",
    detail: [
      "白鹭洲公园位于南京城南，紧邻夫子庙和秦淮河。这里原是明代中山王徐达的私家花园，后逐渐演变为公共园林。",
      "园林以水景为主，亭台楼阁临水而建，曲桥回廊环绕其间，体现了江南园林'小中见大'的造园艺术。春季桃花盛开，景色尤为迷人。",
      "在 GIS 展示中，白鹭洲可与夫子庙、瞻园、中华门等构成城南文化片区，展示南京老城南部丰富的园林和街巷文化。"
    ],
    highlight: "水乡园林、明代私家花园、江南造园艺术、城南片区",
    route: "城南文化线"
  },
  {
    id: "qingliang-shan",
    name: "清凉山",
    type: "文化古建",
    markerType: "culture",
    dynasty: "六朝至明清",
    lat: 32.0523,
    lng: 118.7462,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/%E6%B8%85%E5%87%89%E5%B1%B1.jpg",
    intro: "清凉山是南京西部重要山体，历史上建有清凉寺等建筑，是南京城市山水格局的重要组成部分。",
    detail: [
      "清凉山位于南京老城西部，是南京城市山水格局中的重要山体。六朝时期，这里就是建康城的重要地理标志。",
      "山上曾建有清凉寺等宗教建筑，明清时期成为文人雅集之地。今天这里已成为城市公园，但仍保留着历史文化的痕迹。",
      "在 GIS 展示中，清凉山可与石头城、莫愁湖、乌龙潭等构成西部历史文化片区，展示南京山、水、城的空间关系。"
    ],
    highlight: "城市山体、清凉寺、文人雅集、山水格局",
    route: "老城文化线"
  },
  {
    id: "wulongtan",
    name: "乌龙潭公园",
    type: "园林",
    markerType: "garden",
    dynasty: "明清",
    lat: 32.0538,
    lng: 118.7485,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/%E4%B9%8C%E9%BE%99%E6%BD%AD%E5%85%AC%E5%9B%AD_%E4%B9%8C%E9%BE%99%E6%A1%A5.jpg",
    intro: "乌龙潭公园是南京西部古典园林，以潭水、亭榭和文人文化著称，体现江南园林的雅致风格。",
    detail: [
      "乌龙潭公园位于南京老城西部，是南京保存较好的古典园林之一。潭水清澈，环湖布置亭榭、曲桥，环境幽雅。",
      "历史上，这里曾是文人墨客雅集之地，留下了大量诗词书画。园内的颜鲁公祠等建筑，体现了园林与文化的紧密结合。",
      "在 GIS 展示中，乌龙潭可与清凉山、石头城、莫愁湖等构成西部历史文化片区，展示南京老城西部的园林文化。"
    ],
    highlight: "潭水景观、文人雅集、江南园林、西部片区",
    route: "老城文化线"
  },
  {
    id: "jingjue-temple",
    name: "净觉寺",
    type: "寺庙",
    markerType: "temple",
    dynasty: "明清",
    lat: 32.0368,
    lng: 118.7889,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/%E5%87%80%E8%A7%89%E5%AF%BA_%E4%BA%8C%E6%AE%BF.jpg/3840px-%E5%87%80%E8%A7%89%E5%AF%BA_%E4%BA%8C%E6%AE%BF.jpg",
    intro: "净觉寺是南京重要清真寺，体现南京多元宗教文化和城市包容性。",
    detail: [
      "净觉寺位于南京老城南部，是南京最重要的清真寺之一。寺院建筑融合了中国传统建筑风格和伊斯兰文化特色。",
      "净觉寺的存在体现了南京作为历史都城的多元文化特征。在这里，佛教、道教、伊斯兰教等不同宗教文化和谐共存。",
      "在 GIS 展示中，净觉寺可作为宗教文化多样性的代表，与夫子庙、大报恩寺等构成城南宗教文化片区。"
    ],
    highlight: "清真寺、多元宗教文化、城市包容性、城南片区",
    route: "城南文化线"
  },
  {
    id: "huiji-temple",
    name: "惠济寺",
    type: "寺庙",
    markerType: "temple",
    dynasty: "南唐至明清",
    lat: 32.0654,
    lng: 118.5889,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/%E6%83%A0%E6%B5%8E%E5%AF%BA%E9%93%B6%E6%9D%8F.jpeg",
    intro: "惠济寺位于浦口，是南京北部重要佛教寺院，以古银杏树和南唐遗存著称。",
    detail: [
      "惠济寺位于南京浦口区，是南京北部重要的佛教寺院。寺院历史可追溯至南唐时期，现存建筑多为明清风格。",
      "寺内有三株千年古银杏树，树龄超过千年，是南京著名的古树名木。这些古树见证了寺院的历史变迁。",
      "在 GIS 展示中，惠济寺可作为江北佛教文化的重要代表，与浦口火车站等构成江北历史文化片区。"
    ],
    highlight: "千年古银杏、南唐遗存、江北佛教文化、浦口片区",
    route: "江北文化线"
  },
  {
    id: "longjiang-shipyard",
    name: "龙江宝船厂遗址",
    type: "遗址",
    markerType: "culture",
    dynasty: "明代",
    lat: 32.0856,
    lng: 118.7345,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/%E5%8D%97%E4%BA%AC%E9%83%91%E5%92%8C%E5%8D%97%E8%B7%AF%E5%AE%9D%E8%88%B9%E5%8E%82%E9%81%97%E5%9D%80%E5%85%AC%E5%9B%AD_-_panoramio.jpg",
    intro: "龙江宝船厂遗址是明代郑和下西洋船队建造地，体现南京在明代海上丝绸之路中的重要地位。",
    detail: [
      "龙江宝船厂遗址位于南京下关区，是明代郑和下西洋船队的重要建造地。这里见证了南京在明代海上丝绸之路中的重要地位。",
      "遗址中保存了古代船坞、作坊等遗迹，展示了明代造船技术和海上贸易的繁荣。它是南京作为明代都城和重要港口城市的实物见证。",
      "在 GIS 展示中，龙江宝船厂遗址可与阅江楼、挹江门等构成滨江历史片区，展示南京的海洋文化和港口历史。"
    ],
    highlight: "郑和下西洋、明代造船技术、海上丝绸之路、滨江片区",
    route: "滨江城墙线"
  },
  {
    id: "yongshou-pagoda",
    name: "永寿寺塔",
    type: "寺庙",
    markerType: "temple",
    dynasty: "明代",
    lat: 31.8756,
    lng: 118.7987,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Yongshou_Temple_Pagoda_Nanjing.jpg",
    intro: "永寿寺塔位于溧水，是南京南部重要的明代佛塔，体现南京佛教文化的地域分布。",
    detail: [
      "永寿寺塔位于南京溧水区，是南京南部重要的明代佛塔。塔身八角七层，高约40米，是南京现存较为完整的明代古塔之一。",
      "永寿寺塔的存在体现了南京佛教文化不仅在主城集中，也向周边区县扩散。它与牛首山弘觉寺塔、栖霞寺等共同构成南京佛教文化的空间网络。",
      "在 GIS 展示中，永寿寺塔可作为南部佛教文化的重要代表，与天生桥、高淳老街等构成南部全域文化线路。"
    ],
    highlight: "明代佛塔、八角七层、南部佛教文化、溧水片区",
    route: "南郊山寺线"
  },
  {
    id: "qiwengweng",
    name: "七瓮瓮",
    type: "遗址",
    markerType: "culture",
    dynasty: "明代",
    lat: 32.0789,
    lng: 118.7234,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/%E4%B8%83%E6%A1%A5%E7%93%AE%E5%85%AC%E5%9B%AD_-_panoramio.jpg",
    intro: "七瓮瓮是明代水利工程遗存，体现南京古代水利技术和城市供水系统。",
    detail: [
      "七瓮瓮位于南京下关区，是明代水利工程的重要遗存。这里曾是城市供水系统的重要组成部分，体现了古代水利技术的智慧。",
      "七瓮瓮的结构独特，由七个相连的瓮形水池组成，通过水流的自然压力实现供水功能。这种设计在当时是非常先进的技术。",
      "在 GIS 展示中，七瓮瓮可作为古代水利技术的代表，与龙江宝船厂、阅江楼等构成滨江历史片区，展示南京的工程技术历史。"
    ],
    highlight: "明代水利工程、城市供水系统、古代水利技术、滨江片区",
    route: "滨江城墙线"
  },
  {
    id: "xianlin-temple",
    name: "仙林寺",
    type: "寺庙",
    markerType: "temple",
    dynasty: "南朝至明清",
    lat: 32.1156,
    lng: 118.9123,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Xianlin_Temple_Nanjing.jpg",
    intro: "仙林寺位于仙林，是南京东部重要的佛教寺院，体现南京佛教文化的东向扩展。",
    detail: [
      "仙林寺位于南京仙林地区，是南京东部重要的佛教寺院。寺院历史可追溯至南朝时期，现存建筑多为明清风格。",
      "仙林寺的存在体现了南京佛教文化向东部地区的扩展。它与栖霞寺、灵谷寺等共同构成南京东部的佛教文化网络。",
      "在 GIS 展示中，仙林寺可作为东部佛教文化的重要代表，与栖霞寺、灵谷寺等构成东郊山寺线路。"
    ],
    highlight: "东部佛教文化、南朝遗存、仙林片区、东郊山寺",
    route: "东郊山寺线"
  },
  {
    id: "jiangning-imperial",
    name: "江宁织造府",
    type: "文化古建",
    markerType: "culture",
    dynasty: "清代",
    lat: 32.0389,
    lng: 118.8123,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Model_of_Jiangning_Weaving_Government_02_2013-05.JPG",
    intro: "江宁织造府是清代皇家织造机构所在地，与《红楼梦》文化密切相关，体现南京手工业文化。",
    detail: [
      "江宁织造府位于南京老城东部，是清代皇家织造机构的所在地。这里专门为皇室生产丝绸织物，是南京手工业文化的重要代表。",
      "江宁织造府与《红楼梦》文化密切相关，曹雪芹的家族曾长期担任江宁织造，这里被认为是《红楼梦》创作的重要背景地。",
      "在 GIS 展示中，江宁织造府可作为手工业文化的重要代表，与明故宫、总统府等构成东部历史文化片区。"
    ],
    highlight: "清代皇家织造、红楼梦文化、手工业文化、东部片区",
    route: "老城文化线"
  },
  {
    id: "xuanwu-lake-park",
    name: "玄武湖公园",
    type: "园林",
    markerType: "garden",
    dynasty: "六朝至现代",
    lat: 32.0789,
    lng: 118.7934,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Xuanwuhu.jpg",
    intro: "玄武湖是南京最大的城内湖泊，历史上是皇家园林，现在是城市重要公共空间。",
    detail: [
      "玄武湖位于南京老城北部，是南京最大的城内湖泊。历史上，这里曾是皇家园林，与六朝宫城关系密切。",
      "今天的玄武湖是城市重要的公共空间，湖中有五洲，环湖布置亭台楼阁，是市民休闲游憩的重要场所。",
      "在 GIS 展示中，玄武湖可与台城、鸡鸣寺、玄武门等构成北部历史文化片区，展示南京城北的山水格局。"
    ],
    highlight: "城内湖泊、皇家园林、五洲景观、北部片区",
    route: "城北古迹线"
  },
  {
    id: "nanjing-museum",
    name: "南京博物院",
    type: "文化古建",
    markerType: "culture",
    dynasty: "民国",
    lat: 32.0435,
    lng: 118.8203,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Banner_of_Nanjing_Museum%2C_2015-06-20.jpg/3840px-Banner_of_Nanjing_Museum%2C_2015-06-20.jpg",
    intro: "南京博物院是中国三大博物馆之一，坐落于紫金山南麓，是展示南京历史文化的重要窗口。",
    detail: [
      "南京博物院始建于1933年，由蔡元培等人倡议建立，是中国最早的大型综合博物馆之一。建筑采用仿辽代风格，气势恢宏，与紫金山风貌相融合。",
      "博物院藏品丰富，涵盖从旧石器时代到近代的各类珍贵文物，尤以江苏地区出土的汉代文物、六朝青瓷、明清书画为特色。",
      "在GIS展示中，南京博物院与明故宫遗址、中山陵、美龄宫等共同构成紫金山南麓文化景观带，体现南京作为历史文化名城的深厚底蕴。"
    ],
    highlight: "仿辽代建筑、汉代文物、六朝青瓷、明清书画",
    route: "紫金山文化带"
  },
  {
    id: "yangtze-bridge",
    name: "南京长江大桥",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "现代",
    lat: 32.1145,
    lng: 118.7398,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%E5%8D%97%E4%BA%AC%E9%95%BF%E6%B1%9F%E5%A4%A7%E6%A1%A5%C2%B7%E4%B8%9C%E5%8C%97.jpg",
    intro: "南京长江大桥是长江上第一座由中国自行设计和建造的双层式铁路、公路两用桥梁，是中国桥梁建设史上的里程碑。",
    detail: [
      "南京长江大桥始建于1960年，1968年建成通车，是长江上第一座完全由中国自主设计建造的双层公铁两用桥。大桥上层为公路桥，下层为铁路桥。",
      "大桥的建成标志着中国桥梁工程技术的重要突破，其桥头堡和雕塑体现了鲜明的时代特征。作为南京的标志性建筑之一，它承载着几代人的城市记忆。",
      "从GIS角度看，南京长江大桥连接浦口与主城，是研究南京跨江交通发展、城市空间扩展的重要地理节点。"
    ],
    highlight: "公铁两用桥、桥头堡雕塑、跨江通道、城市地标",
    route: "滨江景观线"
  },
  {
    id: "yihe-road",
    name: "颐和路民国公馆区",
    type: "文化街区",
    markerType: "culture",
    dynasty: "民国",
    lat: 32.0624,
    lng: 118.7645,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/No.15_in_Yihe_Road_2012-11.JPG",
    intro: "颐和路民国公馆区是南京保存最为完好的民国时期使馆与公馆建筑群，被誉为'民国建筑博物馆'。",
    detail: [
      "颐和路一带在民国时期是使馆区和高级住宅区，集中了大量西式风格的公馆、使馆和官邸建筑。区域内绿树成荫，街道静谧，保存了浓郁的民国历史氛围。",
      "这里的建筑风格多样，包括西式洋楼、西班牙式别墅、现代主义风格等，见证了南京作为民国首都时期的城市规划与建筑艺术水平。",
      "在GIS展示中，颐和路街区适合作为历史街区的案例，展示民国时期南京城市空间的功能分区和居住文化。"
    ],
    highlight: "民国使馆区、西式公馆建筑群、林荫街道、历史街区",
    route: "近代史迹线"
  },
  {
    id: "laomendong",
    name: "老门东历史街区",
    type: "文化街区",
    markerType: "culture",
    dynasty: "明清",
    lat: 32.0167,
    lng: 118.7864,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/%E8%80%81%E9%97%A8%E4%B8%9C20200125_02.jpg",
    intro: "老门东是南京夫子庙南侧的历史街区，保留了大量明清时期的传统街巷和建筑格局，是南京老城生活的缩影。",
    detail: [
      "老门东位于中华门以东，历史上是南京城南繁华的商业和居住区。街区内保留了明清时期的街巷肌理，青砖黛瓦、石板路面展现了江南传统民居风貌。",
      "老门东的修复注重保护历史风貌与引入文化业态相结合，街区内分布着传统手工艺作坊、特色小吃、文化展馆和精品民宿。",
      "从GIS角度看，老门东与夫子庙、瞻园、中华门共同构成城南海量历史文化的核心片区，是老城更新与遗产保护的典型案例。"
    ],
    highlight: "明清街巷、青砖黛瓦、传统民居、文化街区更新",
    route: "城南京历史文化线"
  },
  {
    id: "yanzi-ji",
    name: "燕子矶",
    type: "遗址",
    markerType: "culture",
    dynasty: "明清",
    lat: 32.1462,
    lng: 118.8108,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/%E7%87%95%E5%AD%90%E7%9F%B6_-_panoramio.jpg",
    intro: "燕子矶是长江三大名矶之一，位于南京城北郊的江边，自古以来即为名胜之地，以峭壁临江、形似燕子得名。",
    detail: [
      "燕子矶是长江沿岸著名的地质景观和历史名胜，矶石陡峭入江，形似展翅欲飞的燕子。历代文人墨客多来此游览题咏，乾隆皇帝曾多次登临并御笔题字。",
      "燕子矶一带曾是南京重要的江防要地，明清时期设有炮台。近代史上，这里也承载着特殊的历史记忆。",
      "在GIS展示中，燕子矶位于主城以北的江岸线上，与阅江楼、幕府山等沿江景观节点相连，是研究南京滨江景观和江防体系的重要点位。"
    ],
    highlight: "长江三矶、乾隆御碑、江防炮台、滨江景观",
    route: "滨江景观线"
  },
  {
    id: "purple-mountain-observatory",
    name: "紫金山天文台",
    type: "近代史迹",
    markerType: "modern",
    dynasty: "民国",
    lat: 32.0561,
    lng: 118.8378,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Purple_Mountain_Observatory_2016.7.16-1.jpg/3840px-Purple_Mountain_Observatory_2016.7.16-1.jpg",
    intro: "紫金山天文台是中国近代天文学的摇篮，建于紫金山第三峰，是中国现代天文学的重要发源地。",
    detail: [
      "紫金山天文台始建于1934年，是中国近代天文学的标志性机构。它配备了当时东亚最大的天文望远镜，开创了中国现代天文观测的先河。",
      "天文台建筑融合了中西风格，与紫金山自然景观和谐相融。现设有天文历史博物馆，展示古代天文仪器如浑仪、简仪和现代天文观测设备。",
      "作为GIS点位，紫金山天文台位于紫金山第三峰，与中山陵、灵谷寺、美龄宫等共同构成紫金山的立体文化景观空间。"
    ],
    highlight: "民国天文台、浑仪简仪、现代天文学摇篮、紫金山制高点",
    route: "紫金山文化带"
  },
  {
    id: "jiuhua-mountain",
    name: "九华山公园",
    type: "寺庙",
    markerType: "temple",
    dynasty: "六朝至现代",
    lat: 32.0569,
    lng: 118.8047,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Jiuhuashan11.jpg",
    intro: "九华山公园位于南京城东，园内有玄奘寺和三藏塔，是南京城内的佛教文化名山和城市公园。",
    detail: [
      "九华山历史上与六朝佛教文化密切相关，山上的玄奘寺供奉玄奘法师的顶骨舍利，是南京重要的佛教文化圣地。三藏塔建于民国时期，为纪念玄奘法师而建。",
      "九华山公园地处城东要冲，与台城、鸡鸣寺、玄武湖遥相呼应，山虽不高但视野开阔，可俯瞰玄武湖和紫金山。",
      "在GIS展示中，九华山与鸡鸣寺、台城构成城北佛教文化三角区，与玄武湖共同形成城市中心的山水文化空间。"
    ],
    highlight: "玄奘寺、三藏塔、顶骨舍利、城东佛教名山",
    route: "城北古迹线"
  },
  {
    id: "fangshan-pagoda",
    name: "方山定林寺塔",
    type: "文化古建",
    markerType: "culture",
    dynasty: "宋代",
    lat: 31.8892,
    lng: 118.8615,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/%E6%96%B9%E5%B1%B1%E5%AE%9A%E6%9E%97%E5%AF%BA%E5%A1%94.jpeg",
    intro: "方山定林寺塔位于南京江宁方山，是南宋时期的楼阁式砖塔，以倾斜闻名，被誉为'中国的比萨斜塔'。",
    detail: [
      "方山定林寺塔建于南宋时期，是一座七级八面的楼阁式砖塔。由于地基沉降，塔身向东北方向倾斜，斜度超过比萨斜塔，是中国著名的斜塔之一。",
      "定林寺历史上曾是佛教文化胜地，与刘勰《文心雕龙》的写作有一定渊源。塔与方山的火山地质地貌相结合，形成独特的自然与人文景观。",
      "从GIS角度看，方山位于南京主城南部，与牛首山、南唐二陵等共同构成南京南部古迹分布带，展示了南京历史遗址的多层次分布格局。"
    ],
    highlight: "南宋砖塔、中国斜塔、火山地质、文心雕龙文化",
    route: "南部古迹线"
  },
  {
    id: "wuchaomen",
    name: "午朝门遗址公园",
    type: "宫城遗址",
    markerType: "culture",
    dynasty: "明代",
    lat: 32.0395,
    lng: 118.8210,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Nanjing_WuchaoGate3.jpg",
    intro: "午朝门是明故宫的南门遗址，现为遗址公园，是研究明代南京皇城格局和都城礼仪空间的关键节点。",
    detail: [
      "午朝门是明故宫的正南门，相当于北京故宫的午门。明代时这里是皇帝出入和举行重大典礼的重要场所，是皇城礼仪空间的核心组成部分。",
      "今天的午朝门遗址公园保存了门墩、石础和部分城基，玉带河上的五座石桥仍清晰可辨。公园内古木参天，是市民休闲的重要场所。",
      "在GIS展示中，午朝门位于明故宫的中轴线上，与明故宫遗址、西安门遗址共同揭示明代南京皇城的空间范围和建筑规制。"
    ],
    highlight: "明故宫南门、五石桥、皇城中轴线、都城礼仪",
    route: "明代都城线"
  },
  {
    id: "zhenghe-tomb",
    name: "郑和墓",
    type: "陵寝遗址",
    markerType: "tomb",
    dynasty: "明代",
    lat: 31.9177,
    lng: 118.7182,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Zheng_He%27s_tomb%2C_Nanjing.jpg",
    intro: "郑和墓位于南京牛首山南麓，是明代伟大航海家郑和的归葬之地，是南京海上丝绸之路文化的重要见证。",
    detail: [
      "郑和墓位于牛首山南麓周昉村，墓冢呈回字形，按照伊斯兰风格修建，反映了郑和的特殊身份背景。郑和七下西洋的伟大航海壮举使这里成为重要的历史文化纪念地。",
      "墓园内设有郑和纪念馆和碑廊，展示郑和生平事迹和航海成就。周边牛首山自然风光秀美，与弘觉寺塔等景点相邻。",
      "在GIS展示中，郑和墓与牛首山弘觉寺塔、南唐二陵等南部古迹共同展现了南京作为明代大航海时代起点的历史地位。"
    ],
    highlight: "明代航海家、伊斯兰风格墓冢、海上丝绸之路、牛首山南麓",
    route: "南部古迹线"
  }
];

const typeLabels = ["全部", ...new Set(spots.map((spot) => spot.type))];
const colorMap = {
  temple: "#b4842c",
  garden: "#2d6a4f",
  wall: "#a33b2f",
  culture: "#157a8c",
  tomb: "#6d5b98",
  modern: "#5b6770"
};

const wikiImageTitles = {
  "明孝陵": "明孝陵",
  "夫子庙秦淮风光带": "南京夫子庙",
  "中华门城堡": "中华门",
  "鸡鸣寺": "鸡鸣寺",
  "台城与南京城墙": "南京城墙",
  "瞻园": "瞻园",
  "朝天宫": "南京朝天宫",
  "栖霞寺": "栖霞寺",
  "灵谷寺": "灵谷寺",
  "总统府": "南京总统府",
  "阅江楼": "阅江楼",
  "挹江门": "挹江门",
  "美龄宫": "美龄宫",
  "中山陵": "中山陵",
  "甘熙故居": "甘熙故居",
  "大报恩寺遗址公园": "大报恩寺",
  "明故宫遗址": "明故宫",
  "鼓楼": "南京鼓楼",
  "玄武门": "玄武门 (南京)",
  "雨花台": "雨花台",
  "牛首山弘觉寺塔": "牛首山",
  "阳山碑材": "阳山碑材",
  "南唐二陵": "南唐二陵",
  "高淳老街": "高淳老街",
  "浦口火车站旧址": "浦口火车站",
  "梅园新村纪念馆": "梅园新村",
  "拉贝故居": "拉贝故居",
  "天生桥与胭脂河": "天生桥",
  "莫愁湖": "莫愁湖",
  "石头城": "石头城",
  "白鹭洲公园": "白鹭洲公园",
  "清凉山": "清凉山",
  "乌龙潭公园": "乌龙潭",
  "净觉寺": "净觉寺",
  "惠济寺": "惠济寺",
  "龙江宝船厂遗址": "龙江宝船厂",
  "永寿寺塔": "永寿寺塔",
  "七瓮瓮": "七瓮瓮",
  "仙林寺": "仙林寺",
  "江宁织造府": "江宁织造府",
  "玄武湖公园": "玄武湖",
  "永寿寺塔": "溧水永寿寺塔",
  "仙林寺": "栖霞寺"
};

let currentType = "全部";
let searchText = "";
let selectedId = spots[0].id;
let activeModule = "map";
let userFavorites = [];

const spotInteractions = JSON.parse(localStorage.getItem("spotInteractions") || "{}");

const map = L.map("map", {
  zoomControl: false,
  preferCanvas: true
}).setView([32.055, 118.82], 11);

L.control.zoom({ position: "bottomright" }).addTo(map);

const baseLayers = {
  "高德": L.tileLayer("https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
    maxZoom: 18,
    attribution: '&copy; 高德地图'
  }),
  "OSM": L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }),
  "卫星": L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 18,
    attribution: '&copy; Esri'
  }),
  "地形": L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution: '&copy; OpenTopoMap'
  })
};

let currentLayerName = "高德";
baseLayers["高德"].addTo(map);

const LayerSwitcher = L.Control.extend({
  options: { position: "topleft" },
  onAdd: function () {
    const container = L.DomUtil.create("div", "layer-switcher");
    const names = ["高德", "OSM", "卫星", "地形"];
    names.forEach(name => {
      const btn = L.DomUtil.create("button", "", container);
      btn.textContent = name;
      btn.dataset.layer = name;
      if (name === currentLayerName) btn.classList.add("active");
      L.DomEvent.disableClickPropagation(btn);
      btn.addEventListener("click", () => {
        if (name === currentLayerName) return;
        map.removeLayer(baseLayers[currentLayerName]);
        baseLayers[name].addTo(map);
        currentLayerName = name;
        container.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
    return container;
  }
});
new LayerSwitcher().addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const markerById = new Map();

const searchInput = document.querySelector("#searchInput");
const typeFilters = document.querySelector("#typeFilters");
const spotList = document.querySelector("#spotList");
const detailPanel = document.querySelector("#detailPanel");
const spotCount = document.querySelector("#spotCount");
const dynastyCount = document.querySelector("#dynastyCount");
const resetView = document.querySelector("#resetView");
const mapModule = document.querySelector("#mapModule");
const infoModule = document.querySelector("#infoModule");
const mapModuleBtn = document.querySelector("#mapModuleBtn");
const infoModuleBtn = document.querySelector("#infoModuleBtn");
const profileModuleBtn = document.querySelector("#profileModuleBtn");
const routeModuleBtn = document.querySelector("#routeModuleBtn");
const chatModuleBtn = document.querySelector("#chatModuleBtn");
const sidebarRouteContent = document.querySelector("#sidebarRouteContent");
const sidebarChatContent = document.querySelector("#sidebarChatContent");
const chatMessages = document.querySelector("#chatMessages");
const chatInput = document.querySelector("#chatInput");
const chatSendBtn = document.querySelector("#chatSendBtn");
const chatImageInput = document.querySelector("#chatImageInput");
const chatImagePreview = document.querySelector("#chatImagePreview");
const chatPreviewImg = document.querySelector("#chatPreviewImg");
const chatImageRemove = document.querySelector("#chatImageRemove");
const sidebarSummary = document.querySelector("#sidebarSummary");
let chatPendingImage = null;
let mobileDetailCollapsed = false;
let latestVisitRequest = Promise.resolve();
const sidebarControls = document.querySelector(".controls");
const sidebarStats = document.querySelector(".stats");
const routeSpotList = document.querySelector("#routeSpotList");
const backToMap = document.querySelector("#backToMap");
const backToMapFromProfile = document.querySelector("#backToMapFromProfile");
const infoTitle = document.querySelector("#infoTitle");
const infoArticle = document.querySelector("#infoArticle");
const infoIndexList = document.querySelector("#infoIndexList");
const profileModule = document.querySelector("#profileModule");
const favoritesList = document.querySelector("#favoritesList");
const recentHistoryList = document.querySelector("#recentHistoryList");
const myCommentsList = document.querySelector("#myCommentsList");
const myImagesList = document.querySelector("#myImagesList");
const favCount = document.querySelector("#favCount");
const commentCount = document.querySelector("#commentCount");
const imageCount = document.querySelector("#imageCount");
const authStatus = document.querySelector("#authStatus");
const authUser = document.querySelector("#authUser");
const authOpenBtn = document.querySelector("#authOpenBtn");
const authLogoutBtn = document.querySelector("#authLogoutBtn");
const authModal = document.querySelector("#authModal");
const authCloseBtn = document.querySelector("#authCloseBtn");
const loginTab = document.querySelector("#loginTab");
const registerTab = document.querySelector("#registerTab");
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const adminTab = document.querySelector("#adminTab");
const adminLoginForm = document.querySelector("#adminLoginForm");
const adminRegisterForm = document.querySelector("#adminRegisterForm");
const adminSwitch = document.querySelector("#adminSwitch");
const goAdminLogin = document.querySelector("#goAdminLogin");
const goAdminRegister = document.querySelector("#goAdminRegister");
const adminModuleBtn = document.querySelector("#adminModuleBtn");
const sidebarAdminContent = document.querySelector("#sidebarAdminContent");
const statsModuleBtn = document.querySelector("#statsModuleBtn");
const sidebarStatsContent = document.querySelector("#sidebarStatsContent");
const statsModule = document.querySelector("#statsModule");
const weatherPanelBtn = document.querySelector("#weatherPanelBtn");
const weatherPopover = document.querySelector("#weatherPopover");
const weatherCloseBtn = document.querySelector("#weatherCloseBtn");
const mobileBottomNav = document.querySelector("#mobileBottomNav");
const authMessage = document.querySelector("#authMessage");
const apiBase = location.protocol === "file:" ? "http://localhost:3000/api" : "/api";

function apiUrl(path) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${apiBase}${path.startsWith("/") ? path : `/${path}`}`;
}

function getAuthToken() {
  return localStorage.getItem("landscapeToken") || localStorage.getItem("landscapeAdminToken") || "";
}

function getCurrentUser() {
  const user = JSON.parse(localStorage.getItem("landscapeUser") || "null");
  const admin = JSON.parse(localStorage.getItem("landscapeAdmin") || "null");
  return user || admin;
}

function isLoggedIn() {
  return !!(localStorage.getItem("landscapeToken") || localStorage.getItem("landscapeAdminToken"));
}

async function apiRequest(path, options = {}) {
  const response = await fetch(apiUrl(path), options);
  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json().catch(() => ({})) : null;

  if (!isJson) {
    const text = await response.text().catch(() => "");
    const isHtml = text.trim().startsWith("<!DOCTYPE") || text.trim().startsWith("<html");
    throw new Error(isHtml
      ? "接口返回了网页，请确认已运行 node server.js，并从 http://localhost:3000 打开页面。"
      : "接口没有返回 JSON 数据。");
  }

  if (!response.ok) {
    throw new Error(data.message || "请求失败，请稍后重试。");
  }

  return data;
}

async function storeLocationRecord(payload) {
  try {
    const token = getAuthToken();
    const headers = { "Content-Type": "application/json" };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(apiUrl("/location-records"), {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    });
    return await response.json().catch(() => null);
  } catch (error) {
    console.error("Failed to store location record:", error);
    return null;
  }
}

const detailProfiles = {
  "ming-xiaoling": {
    address: "南京市玄武区钟山风景名胜区内，明孝陵景区",
    hours: "通常为白天开放，建议出行前以钟山风景区公告为准",
    ticket: "多为钟山风景区联票或景点票制，学生/老人政策以现场公告为准",
    transit: "可乘地铁 2 号线到苜蓿园站，再步行或换乘景区交通"
  },
  fuzimiao: {
    address: "南京市秦淮区夫子庙秦淮风光带",
    hours: "街区全天可达，文庙、贡院、游船等项目以各自开放时间为准",
    ticket: "街区免费，内部展馆和游船等项目可能单独收费",
    transit: "可乘地铁 3 号线到夫子庙站，步行进入核心街区"
  },
  "zhonghua-gate": {
    address: "南京市秦淮区中华门城堡",
    hours: "通常为日间开放，夜游和节假日安排以景区公告为准",
    ticket: "城堡参观通常需购票，优惠政策以现场公告为准",
    transit: "可乘地铁 1 号线到中华门站，步行或骑行前往"
  },
  jimingsi: {
    address: "南京市玄武区鸡鸣寺路，近玄武湖与台城",
    hours: "通常为日间开放，法会和节假日可能调整",
    ticket: "寺院参观通常需购买香花券或门票",
    transit: "可乘地铁 3/4 号线到鸡鸣寺站，步行可达"
  },
  "presidential-palace": {
    address: "南京市玄武区长江路 292 号",
    hours: "通常为日间开放，周一及特殊日期可能闭馆",
    ticket: "通常需购票参观，优惠政策以馆方公告为准",
    transit: "可乘地铁 2/3 号线到大行宫站，步行可达"
  },
  "sun-yat-sen-mausoleum": {
    address: "南京市玄武区钟山风景名胜区中山陵景区",
    hours: "通常为日间开放，陵寝区域可能实行预约或限流",
    ticket: "主体陵寝多为预约参观，景区其他项目以公告为准",
    transit: "可乘地铁 2 号线到下马坊或苜蓿园站，再换乘景区交通"
  },
  "nanjing-museum": {
    address: "南京市玄武区中山东路 321 号",
    hours: "通常为日间开放，周一及特殊日期可能闭馆",
    ticket: "常设展多为预约免费参观，特展可能另行说明",
    transit: "可乘地铁 2 号线到明故宫站，步行可达"
  },
  laomendong: {
    address: "南京市秦淮区老门东历史文化街区",
    hours: "街区全天可达，店铺和展馆按各自营业时间开放",
    ticket: "街区免费，店铺消费和部分展馆另计",
    transit: "可乘地铁 3 号线到武定门站，步行进入街区"
  }
};

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeJsString(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function getDetailProfile(spot) {
  const fallbackByType = {
    "寺": { hours: "通常为日间开放，宗教活动或节假日可能调整", ticket: "可能收取门票或香花券，以现场公告为准" },
    "园": { hours: "通常为白天开放，夜间活动以公告为准", ticket: "公园或园林可能免费或单独售票，以现场公告为准" },
    "城": { hours: "通常为日间开放，城墙夜游以公告为准", ticket: "遗址或城墙段可能需购票，以现场公告为准" },
    "馆": { hours: "通常为日间开放，周一和特殊日期可能闭馆", ticket: "多实行预约或购票参观，以馆方公告为准" }
  };
  const matchedType = Object.keys(fallbackByType).find((key) => spot.type.includes(key));
  const fallback = fallbackByType[matchedType] || {
    hours: "通常为白天开放，建议出行前查询景区当天公告",
    ticket: "可能免费或收费，具体以景区现场和官方公告为准"
  };

  return {
    address: currentLang === "zh" ? `南京市，${spotT(spot, 'name')} 周边（坐标 ${spot.lat.toFixed(4)}, ${spot.lng.toFixed(4)}）` : `Nanjing, near ${spotT(spot, 'name')} (${spot.lat.toFixed(4)}, ${spot.lng.toFixed(4)})`,
    hours: fallback.hours,
    ticket: fallback.ticket,
    transit: currentLang === "zh" ? `建议优先使用地铁、公交或骑行到达；可在地图中定位 ${spotT(spot, 'name')} 后规划路线。` : `Recommend metro, bus, or cycling. Locate ${spotT(spot, 'name')} on the map to plan your route.`,
    ...(detailProfiles[spot.id] || {})
  };
}

function renderCommentItems(spotId) {
  const comments = getSpotComments(spotId);
  const user = getCurrentUser();
  if (!comments.length) {
    return `
      <div class="comments-empty">
        <p>暂无评论，快来发表第一条评论吧。</p>
      </div>
    `;
  }

  return comments.map((comment) => {
    const canDelete = user && (user.id || user.username) === comment.userId;
    const imageHtml = comment.image ? `
      <button type="button" class="comment-image" onclick="openChatImageModal('${escapeJsString(comment.image)}')">
        <img src="${escapeHtml(comment.image)}" alt="评论配图" loading="lazy">
      </button>
    ` : "";
    return `
      <div class="comment-item">
        <div class="comment-header">
          <strong>${escapeHtml(comment.username)}</strong>
          <span>${escapeHtml(comment.createdAt)}</span>
          ${canDelete ? `<button type="button" class="comment-delete" data-comment="${escapeHtml(comment.id)}" data-spot="${escapeHtml(spotId)}">删除</button>` : ""}
        </div>
        ${comment.content ? `<p>${escapeHtml(comment.content)}</p>` : ""}
        ${imageHtml}
      </div>
    `;
  }).join("");
}

function localPlaceholderUrl() {
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
      <rect width="640" height="360" fill="#e8dec9"/>
      <path d="M0 285 C120 230 195 310 315 250 S510 215 640 270 L640 360 L0 360 Z" fill="#b9c7ad"/>
      <rect x="255" y="125" width="130" height="95" fill="#a33b2f"/>
      <path d="M240 125 L320 75 L400 125 Z" fill="#2d6a4f"/>
      <text x="320" y="300" text-anchor="middle" font-size="32" fill="#5d625c" font-family="Arial">南京历史景点</text>
    </svg>
  `);
}

async function imageFallback(img) {
  img.onerror = null;
  const title = wikiImageTitles[img.alt] || img.alt;

  if (title && !img.dataset.wikiTried) {
    img.dataset.wikiTried = "true";
    try {
      const response = await fetch(`https://zh.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
      if (response.ok) {
        const data = await response.json();
        const source = data.originalimage?.source || data.thumbnail?.source;
        if (source) {
          img.onerror = () => {
            img.onerror = null;
            img.src = localPlaceholderUrl();
          };
          img.src = source;
          return;
        }
      }
    } catch (_error) {
      // Network fallback below.
    }
  }

  img.src = localPlaceholderUrl();
}

function markerIcon(spot) {
  return L.divIcon({
    className: "",
    html: `<div class="custom-marker ${spot.markerType}" style="background:${colorMap[spot.markerType]}"><span>${spotT(spot, 'name').slice(0, 1)}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30]
  });
}

function popupHtml(spot) {
  return `
    <div class="popup-card">
      <img src="${spot.image}" alt="${spotT(spot, 'name')}" onerror="imageFallback(this)">
      <h3>${spotT(spot, 'name')}</h3>
      <p>${spotT(spot, 'intro')}</p>
      <div class="popup-actions">
        <button type="button" data-detail="${spot.id}">${t("viewDetail")}</button>
        <button type="button" class="nav-btn-sm" data-navigate="${spot.id}" data-lat="${spot.lat}" data-lng="${spot.lng}" data-name="${spotT(spot, 'name')}">${t("navigate")}</button>
      </div>
    </div>
  `;
}

function setMobileBottomActive(navName) {
  if (!mobileBottomNav) return;
  mobileBottomNav.querySelectorAll(".mobile-bottom-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.mobileNav === navName);
  });
}

function switchModule(moduleName) {
  activeModule = moduleName;
  const showInfo = moduleName === "info";
  const showProfile = moduleName === "profile";
  const showRoute = moduleName === "route";
  const showChat = moduleName === "chat";
  const showAdmin = moduleName === "admin";
  const showStats = moduleName === "stats";
  const showMap = !showInfo && !showProfile && !showStats;
  mapModule.classList.toggle("active", showMap);
  infoModule.classList.toggle("active", showInfo);
  profileModule.classList.toggle("active", showProfile);
  if (statsModule) statsModule.classList.toggle("active", showStats);
  mapModuleBtn.classList.toggle("active", !showInfo && !showProfile && !showRoute && !showChat && !showAdmin && !showStats);
  infoModuleBtn.classList.toggle("active", showInfo);
  profileModuleBtn.classList.toggle("active", showProfile);
  routeModuleBtn.classList.toggle("active", showRoute);
  chatModuleBtn.classList.toggle("active", showChat);
  if (statsModuleBtn) statsModuleBtn.classList.toggle("active", showStats);
  if (adminModuleBtn) adminModuleBtn.classList.toggle("active", showAdmin);
  setMobileBottomActive(showRoute ? "route" : showChat ? "chat" : showProfile ? "profile" : "map");

  if (sidebarRouteContent) sidebarRouteContent.style.display = showRoute ? "" : "none";
  if (sidebarChatContent) sidebarChatContent.style.display = showChat ? "" : "none";
  if (sidebarStatsContent) sidebarStatsContent.style.display = showStats ? "" : "none";
  if (sidebarAdminContent) sidebarAdminContent.style.display = showAdmin ? "" : "none";
  if (sidebarControls) sidebarControls.style.display = (showRoute || showChat || showAdmin || showStats) ? "none" : "";
  if (sidebarStats) sidebarStats.style.display = (showRoute || showChat || showAdmin || showStats) ? "none" : "";
  if (sidebarSummary) sidebarSummary.style.display = (showRoute || showChat || showAdmin || showStats) ? "none" : "";

  if (showMap) {
    setTimeout(() => {
      map.invalidateSize();
      const spot = spots.find((item) => item.id === selectedId);
      if (spot) map.setView([spot.lat, spot.lng], Math.max(map.getZoom(), 12));
    }, 50);
  } else if (showProfile) {
    if (!profileLoaded) {
      loadUserProfile();
    } else {
      loadRecentHistoryAfterPendingVisit();
    }
  }

  if (showRoute) {
    renderRouteSpotList();
    renderRouteSelectedList();
    loadRecommendedRoutes();
  }

  if (showChat) {
    if (!chatMessagesLoaded) loadChatMessages();
  }

  if (showAdmin) {
    if (!adminDataLoaded) loadAdminData();
  }

  if (showStats) {
    loadStatsData();
  }
}

function getFilteredSpots() {
  const text = searchText.trim().toLowerCase();
  return spots.filter((spot) => {
    const typeMatch = currentType === "全部" || spot.type === currentType;
    const nameMatch = !text || spotT(spot, 'name').toLowerCase().includes(text) || spot.name.toLowerCase().includes(text);
    return typeMatch && nameMatch;
  });
}

const typeTranslations = {
  "全部": { en: "All" },
  "陵寝遗址": { en: "Mausoleum Site" },
  "文化街区": { en: "Cultural District" },
  "城墙遗址": { en: "City Wall Site" },
  "寺庙": { en: "Temple" },
  "园林": { en: "Garden" },
  "文化古建": { en: "Cultural Heritage" },
  "近代史迹": { en: "Modern Historical Site" },
  "遗址": { en: "Heritage Site" },
  "宫城遗址": { en: "Palace Ruins" }
};

function renderFilters() {
  typeFilters.innerHTML = typeLabels.map((label) => {
    const displayLabel = currentLang === "zh" ? label : (typeTranslations[label]?.en || label);
    return `<button type="button" class="${label === currentType ? "active" : ""}" data-type="${label}">${displayLabel}</button>`;
  }).join("");
}

function renderList(filteredSpots) {
  if (!filteredSpots.length) {
    spotList.innerHTML = `<p class="empty-message">${t("noMatch")}</p>`;
    return;
  }

  spotList.innerHTML = filteredSpots.map((spot) => `
    <article class="spot-card ${spot.id === selectedId ? "active" : ""}" data-id="${spot.id}">
      <img src="${spot.image}" alt="${spotT(spot, 'name')}" onerror="imageFallback(this)">
      <div class="spot-card-body">
        <h3>${spotT(spot, 'name')}</h3>
        <div class="tag-row">
          <span class="tag">${spotT(spot, 'type')}</span>
          <span class="tag">${spotT(spot, 'dynasty')}</span>
        </div>
        <p>${spotT(spot, 'intro')}</p>
      </div>
      <div class="card-actions">
        <button type="button" data-map="${spot.id}">${t("mapLocate")}</button>
        <button type="button" data-info="${spot.id}">${t("viewDetail")}</button>
      </div>
    </article>
  `).join("");
}

function renderMarkers(filteredSpots) {
  markerLayer.clearLayers();
  markerById.clear();

  filteredSpots.forEach((spot) => {
    const marker = L.marker([spot.lat, spot.lng], { icon: markerIcon(spot) })
      .bindPopup(popupHtml(spot));

    marker.on("click", () => selectSpot(spot.id, { openPopup: false, pan: false, module: "map" }));
    markerLayer.addLayer(marker);
    markerById.set(spot.id, marker);
  });
}

function renderDetailPanel(spot) {
  if (!spot) {
    detailPanel.classList.add("empty");
    detailPanel.innerHTML = "";
    return;
  }

  detailPanel.classList.remove("empty");
  detailPanel.classList.toggle("collapsed", mobileDetailCollapsed && window.innerWidth <= 980);
  const liked = isLiked(spot.id);
  const likesCount = getSpotLikes(spot.id).length;
  const favorited = isFavorited(spot.id);
  const profile = getDetailProfile(spot);
  const historyParagraphs = (spotT(spot, 'detail') || []).slice(0, 3);

  detailPanel.innerHTML = `
    <img class="detail-image" src="${spot.image}" alt="${spotT(spot, 'name')}" onerror="imageFallback(this)">
    <div class="detail-body">
      <div class="tag-row">
        <span class="tag">${spotT(spot, 'type')}</span>
        <span class="tag">${spotT(spot, 'dynasty')}</span>
      </div>
      <h2>${spotT(spot, 'name')}</h2>
      <p class="detail-lead">${spotT(spot, 'intro')}</p>
      <div class="panel-actions">
        <button type="button" class="like-btn ${liked ? "liked" : ""}" data-spot="${spot.id}">
          <span class="like-icon">${liked ? "♥" : "♡"}</span>
          <span class="like-count">${likesCount}</span>
        </button>
        <button type="button" class="favorite-btn ${favorited ? "favorited" : ""}" data-spot="${spot.id}" data-spot-name="${spotT(spot, 'name')}">
          <span class="favorite-icon">${favorited ? "★" : "☆"}</span>
          <span>${favorited ? t("favorited") : t("favorite")}</span>
        </button>
        <button type="button" class="nav-btn" data-navigate="${spot.id}" data-lat="${spot.lat}" data-lng="${spot.lng}" data-name="${spotT(spot, 'name')}">${t("navigate")}</button>
        <button type="button" data-open-info="${spot.id}">${t("enterInfo")}</button>
      </div>
      <button type="button" class="detail-toggle-btn" data-detail-toggle aria-expanded="${mobileDetailCollapsed ? "false" : "true"}">
        ${mobileDetailCollapsed ? t("expandDetail") : t("collapseDetail")}
      </button>
      <div class="detail-extra">
      <div class="detail-meta expanded-detail-meta">
        <div>
          <span>${t("address")}</span>
          <strong>${profile.address}</strong>
        </div>
        <div>
          <span>${t("hours")}</span>
          <strong>${profile.hours}</strong>
        </div>
        <div>
          <span>${t("ticket")}</span>
          <strong>${profile.ticket}</strong>
        </div>
        <div>
          <span>${t("transit")}</span>
          <strong>${profile.transit}</strong>
        </div>
        <div>
          <span>${t("coordinates")}</span>
          <strong>${spot.lat.toFixed(4)}, ${spot.lng.toFixed(4)}</strong>
        </div>
        <div>
          <span>${t("highlight")}</span>
          <strong>${spotT(spot, 'highlight')}</strong>
        </div>
        <div>
          <span>${t("route")}</span>
          <strong>${spotT(spot, 'route')}</strong>
        </div>
        <div>
          <span>${t("gisLayer")}</span>
          <strong>${t("gisValue")}</strong>
        </div>
      </div>

      <section class="detail-section">
        <h3>用户评分</h3>
        <div class="rating-section" data-spot="${spot.id}">
          <div class="rating-display">
            <span class="rating-average">--</span>
            <span class="rating-total">0 条评分</span>
          </div>
          <div class="star-rating" data-spot="${spot.id}">
            ${[1,2,3,4,5].map(v => `<span class="star" data-value="${v}">★</span>`).join("")}
          </div>
          <button type="button" class="rating-clear-btn" data-spot="${spot.id}" style="display:none">取消评分</button>
        </div>
      </section>

      <section class="detail-section">
        <h3>${t("history")}</h3>
        ${historyParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>

      <section class="detail-section">
        <h3>${t("images")}</h3>
        <div class="detail-gallery">
          <img src="${spot.image}" alt="${spot.name}" onerror="imageFallback(this)">
        </div>
      </section>

      <section class="detail-section detail-comments">
        <div class="detail-section-heading">
          <h3>${t("userComments")}</h3>
          <span>${getSpotComments(spot.id).length} ${t("ratingCount")}</span>
        </div>
        <div class="comment-input compact-comment-input">
          <textarea placeholder="${t("commentPlaceholder")}" rows="3" data-spot="${spot.id}"></textarea>
          <div class="comment-actions">
            <label class="comment-image-btn">
              📷 配图
              <input type="file" class="comment-image-input" accept="image/*" data-spot="${spot.id}">
            </label>
            <button type="button" class="submit-comment" data-spot="${spot.id}">${t("postComment")}</button>
          </div>
        </div>
        <div class="comments-list panel-comments-list">
          ${renderCommentItems(spot.id)}
        </div>
      </section>
      </div>
    </div>
  `;
}
function renderInfoArticle(spot) {
  if (!spot) return;
  infoTitle.textContent = spotT(spot, 'name');
  const liked = isLiked(spot.id);
  const likesCount = getSpotLikes(spot.id).length;
  const favorited = isFavorited(spot.id);
  const comments = getSpotComments(spot.id);
  const user = getCurrentUser();

  infoArticle.innerHTML = `
    <img class="info-hero" src="${spot.image}" alt="${spotT(spot, 'name')}" onerror="imageFallback(this)">
    <div class="info-body">
      <div class="tag-row">
        <span class="tag">${spotT(spot, 'type')}</span>
        <span class="tag">${spotT(spot, 'dynasty')}</span>
        <span class="tag">${spotT(spot, 'route')}</span>
      </div>
      <h3>${spotT(spot, 'name')}</h3>
      <p class="lead">${spotT(spot, 'intro')}</p>
      ${spotT(spot, 'detail').map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <div class="detail-meta info-meta">
        <div>
          <span>${t("latLng")}</span>
          <strong>${spot.lat.toFixed(4)}, ${spot.lng.toFixed(4)}</strong>
        </div>
        <div>
          <span>${t("spotType")}</span>
          <strong>${spotT(spot, 'type')}</strong>
        </div>
        <div>
          <span>${t("dynastyLabel")}</span>
          <strong>${spotT(spot, 'dynasty')}</strong>
        </div>
        <div>
          <span>${t("gis要素")}</span>
          <strong>${spotT(spot, 'highlight')}</strong>
        </div>
      </div>

      <div class="user-gallery-section" id="gallery-${spot.id}">
        <h4>${t("shareImages")}</h4>
        <div class="gallery-grid" id="gallery-grid-${spot.id}">
          <p class="loading-gallery">${t("loading")}</p>
        </div>
      </div>

      <div class="interaction-section">
        <div class="interaction-header">
          <button type="button" class="like-btn ${liked ? "liked" : ""}" data-spot="${spot.id}">
            <span class="like-icon">${liked ? "♥" : "♡"}</span>
            <span class="like-count">${likesCount}</span>
          </button>
          <button type="button" class="favorite-btn ${favorited ? "favorited" : ""}" data-spot="${spot.id}" data-spot-name="${spotT(spot, 'name')}">
            <span class="favorite-icon">${favorited ? "★" : "☆"}</span>
            <span>${favorited ? t("favorited") : t("favorite")}</span>
          </button>
          <span class="comment-count">${comments.length} ${t("ratingCount")}</span>
        </div>

        <div class="comment-section">
          <div class="comment-input">
            <textarea placeholder="${t("commentPlaceholder")}" rows="3" data-spot="${spot.id}"></textarea>
            <div class="comment-actions">
              <label class="comment-image-btn">
                📷 配图
                <input type="file" class="comment-image-input" accept="image/*" data-spot="${spot.id}">
              </label>
              <label class="submit-comment" for="image-upload-${spot.id}">
                ${t("uploadImage")}
                <input type="file" id="image-upload-${spot.id}" class="image-upload-input" accept="image/*" data-spot="${spot.id}">
              </label>
              <button type="button" class="submit-comment" data-spot="${spot.id}">${t("postComment")}</button>
            </div>
          </div>

          <div class="comments-list" id="comments-${spot.id}">
            ${renderCommentItems(spot.id)}
          </div>
        </div>
      </div>

      <section class="detail-section">
        <h3>用户评分</h3>
        <div class="rating-section" data-spot="${spot.id}">
          <div class="rating-display">
            <span class="rating-average">--</span>
            <span class="rating-total">0 条评分</span>
          </div>
          <div class="star-rating" data-spot="${spot.id}">
            ${[1,2,3,4,5].map(v => `<span class="star" data-value="${v}">★</span>`).join("")}
          </div>
          <button type="button" class="rating-clear-btn" data-spot="${spot.id}" style="display:none">取消评分</button>
        </div>
      </section>
    </div>
  `;
}

function renderInfoIndex(filteredSpots) {
  const visibleSpots = filteredSpots.length ? filteredSpots : spots;
  infoIndexList.innerHTML = visibleSpots.map((spot) => `
    <button type="button" class="${spot.id === selectedId ? "active" : ""}" data-info-index="${spot.id}">
      <strong>${spotT(spot, 'name')}</strong>
      <span>${spotT(spot, 'type')} · ${spotT(spot, 'dynasty')}</span>
    </button>
  `).join("");
}

function updateStats(filteredSpots) {
  spotCount.textContent = filteredSpots.length;
  dynastyCount.textContent = new Set(filteredSpots.map((spot) => spotT(spot, 'dynasty'))).size;
}

function fitToSpots(filteredSpots) {
  if (!filteredSpots.length) return;
  const bounds = L.latLngBounds(filteredSpots.map((spot) => [spot.lat, spot.lng]));
  map.fitBounds(bounds.pad(0.18), { animate: true });
}

function setAuthMessage(message, type = "") {
  authMessage.textContent = message;
  authMessage.className = `auth-message ${type}`.trim();
}

function setAuthMode(mode) {
  const isLogin = mode === "login";
  const isRegister = mode === "register";
  const isAdmin = mode === "admin";
  const isAdminRegister = mode === "adminRegister";
  loginTab.classList.toggle("active", isLogin);
  registerTab.classList.toggle("active", isRegister);
  adminTab.classList.toggle("active", isAdmin || isAdminRegister);
  loginForm.classList.toggle("active", isLogin);
  registerForm.classList.toggle("active", isRegister);
  adminLoginForm.classList.toggle("active", isAdmin);
  adminRegisterForm.classList.toggle("active", isAdminRegister);
  if (adminSwitch) adminSwitch.style.display = (isAdmin || isAdminRegister) ? "" : "none";
  setAuthMessage("");
}

function openAuthModal(mode = "login") {
  setAuthMode(mode);
  authModal.classList.add("active");
  authModal.setAttribute("aria-hidden", "false");
}

function closeAuthModal() {
  authModal.classList.remove("active");
  authModal.setAttribute("aria-hidden", "true");
}

function updateAuthView(user) {
  const admin = JSON.parse(localStorage.getItem("landscapeAdmin") || "null");
  if (admin) {
    authStatus.textContent = t("administrator");
    authUser.textContent = admin.username || admin.email;
    authOpenBtn.textContent = t("switchAccount");
    if (authLogoutBtn) {
      authLogoutBtn.textContent = t("logout");
      authLogoutBtn.style.display = "";
    }
  } else if (user) {
    authStatus.textContent = t("loggedIn");
    authUser.textContent = user.username || user.email;
    authOpenBtn.textContent = t("switchAccount");
    if (authLogoutBtn) {
      authLogoutBtn.textContent = t("logout");
      authLogoutBtn.style.display = "";
    }
  } else {
    authStatus.textContent = t("notLogged");
    authUser.textContent = t("guest");
    authOpenBtn.textContent = t("loginRegister");
    if (authLogoutBtn) authLogoutBtn.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("landscapeUser");
  localStorage.removeItem("landscapeToken");
  localStorage.removeItem("landscapeAdmin");
  localStorage.removeItem("landscapeAdminToken");
  if (adminModuleBtn) adminModuleBtn.style.display = "none";
  profileLoaded = false;
  adminDataLoaded = false;
  adminDataLoadingPromise = null;
  closeAuthModal();
  updateAuthView(null);
  switchModule("map");
}

function saveAuth(data) {
  localStorage.removeItem("landscapeAdmin");
  localStorage.removeItem("landscapeAdminToken");
  localStorage.setItem("landscapeUser", JSON.stringify(data.user));
  localStorage.setItem("landscapeToken", data.token);
  if (adminModuleBtn) adminModuleBtn.style.display = "none";
  adminDataLoaded = false;
  adminDataLoadingPromise = null;
  updateAuthView(data.user);
  loadFavorites();
}

function saveAdminAuth(data) {
  localStorage.removeItem("landscapeUser");
  localStorage.removeItem("landscapeToken");
  localStorage.setItem("landscapeAdmin", JSON.stringify(data.admin));
  localStorage.setItem("landscapeAdminToken", data.token);
  profileLoaded = false;
  adminDataLoaded = false;
  adminDataLoadingPromise = null;
  updateAuthView(null);
  loadUserProfile();
  if (adminModuleBtn) adminModuleBtn.style.display = "";
  preloadAdminData();
}

async function submitAuth(path, body) {
  return apiRequest(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const response = await fetch(`${apiBase}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "请求失败，请检查后端服务。");
  }
  return data;
}

function render() {
  const filteredSpots = getFilteredSpots();
  if (!filteredSpots.some((spot) => spot.id === selectedId)) {
    selectedId = filteredSpots[0]?.id || spots[0].id;
  }

  const selectedSpot = spots.find((spot) => spot.id === selectedId);
  renderFilters();
  renderList(filteredSpots);
  renderMarkers(filteredSpots);
  renderDetailPanel(selectedSpot);
  renderInfoArticle(selectedSpot);
  if (selectedSpot) {
    loadUserImages(selectedSpot.id);
    loadRating(selectedSpot.id);
  }
  renderInfoIndex(filteredSpots);
  updateStats(filteredSpots);
}

function selectSpot(id, options = {}) {
  const spot = spots.find((item) => item.id === id);
  if (!spot) return;
  selectedId = id;
  render();

  if (options.module === "info") {
    recordVisit(id);
    switchModule("info");
    infoModule.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  switchModule("map");

  if (options.pan !== false) {
    map.flyTo([spot.lat, spot.lng], 14, { duration: 0.8 });
  }

  if (options.openPopup !== false) {
    setTimeout(() => markerById.get(id)?.openPopup(), 250);
  }
}

function recordVisit(spotId) {
  if (!spotId) return;
  try {
    const token = getAuthToken();
    const headers = token ? { "Authorization": `Bearer ${token}` } : {};
    latestVisitRequest = fetch(apiUrl(`/visits/${spotId}`), { method: "POST", headers })
      .then((response) => response.ok)
      .catch(() => false);
    if (token) profileLoaded = false;
    latestVisitRequest.finally(() => {
      if (activeModule === "profile") loadAndRenderRecentHistory();
    });
    return latestVisitRequest;
  } catch {
    latestVisitRequest = Promise.resolve(false);
    return latestVisitRequest;
  }
}

typeFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-type]");
  if (!button) return;
  currentType = button.dataset.type;
  render();
  if (activeModule === "map") fitToSpots(getFilteredSpots());
});

spotList.addEventListener("click", (event) => {
  const infoButton = event.target.closest("button[data-info]");
  if (infoButton) {
    selectSpot(infoButton.dataset.info, { module: "info" });
    return;
  }

  const mapButton = event.target.closest("button[data-map]");
  if (mapButton) {
    selectSpot(mapButton.dataset.map, { module: "map" });
    return;
  }

  const navButton = event.target.closest("button[data-navigate]");
  if (navButton) {
    const { lat, lng, name } = navButton.dataset;
    openNavigation(lat, lng, name);
    return;
  }

  const card = event.target.closest(".spot-card[data-id]");
  if (!card) return;
  selectSpot(card.dataset.id, { module: "map" });
});

detailPanel.addEventListener("click", (event) => {
  const toggleBtn = event.target.closest("button[data-detail-toggle]");
  if (toggleBtn) {
    mobileDetailCollapsed = !mobileDetailCollapsed;
    detailPanel.classList.toggle("collapsed", mobileDetailCollapsed && window.innerWidth <= 980);
    toggleBtn.textContent = mobileDetailCollapsed ? t("expandDetail") : t("collapseDetail");
    toggleBtn.setAttribute("aria-expanded", mobileDetailCollapsed ? "false" : "true");
    return;
  }
  const navBtn = event.target.closest("button[data-navigate]");
  if (navBtn) {
    const { lat, lng, name } = navBtn.dataset;
    openNavigation(lat, lng, name);
    return;
  }
  const button = event.target.closest("button[data-open-info]");
  if (!button) return;
  selectSpot(button.dataset.openInfo, { module: "info" });
});

// ===== Embedded Navigation =====
let navMap = null;
let navGeolocation = null;
let navDestMarker = null;
let navOriginMarker = null;
let navRouteService = null;
let navMapClickHandler = null;
let currentNavDest = null;
let currentNavOrigin = null;
let currentNavMode = "driving";
let navRouteReady = false;

const navModeLabels = {
  driving: "驾车",
  riding: "骑行",
  walking: "步行"
};

function navEl(id) {
  return document.getElementById(id);
}

function setNavInfo(message, type = "") {
  const routeInfo = navEl("navRouteInfo");
  if (!routeInfo) return;
  routeInfo.className = `nav-route-info${type ? ` ${type}` : ""}`;
  routeInfo.innerHTML = message;
}

function setNavStartEnabled(enabled) {
  const btn = navEl("navStartBtn");
  if (btn) btn.disabled = !enabled;
}

function ensureAmapReady() {
  return Boolean(window.AMap && AMap.Map && AMap.LngLat);
}

function openNavigation(lat, lng, name) {
  if (!ensureAmapReady()) {
    alert("高德地图加载失败，请检查网络后刷新页面。");
    return;
  }

  const destLat = Number(lat);
  const destLng = Number(lng);
  if (!Number.isFinite(destLat) || !Number.isFinite(destLng)) {
    alert("景点坐标无效，无法导航。");
    return;
  }

  currentNavDest = { lat: destLat, lng: destLng, name };
  currentNavOrigin = null;
  navRouteReady = false;
  setNavStartEnabled(false);
  stopImmersiveNav();

  const overlay = navEl("navOverlay");
  const title = navEl("navTitle");
  overlay.style.display = "flex";
  title.textContent = `${t("navigate")} - ${name}`;
  navEl("navOriginInput").value = "";
  setNavInfo("正在初始化导航地图...");

  setTimeout(() => {
    initNavMap();
    useCurrentLocationAsOrigin();
  }, 200);
}

function initNavMap() {
  if (navMap) {
    clearNavMapClickMode();
    clearNavRoute();
    navMap.destroy();
    navMap = null;
  }

  navMap = new AMap.Map("navMapContainer", {
    zoom: 13,
    center: [currentNavDest.lng, currentNavDest.lat],
    resizeEnable: true,
    mapStyle: "amap://styles/normal"
  });

  if (AMap.ToolBar) navMap.addControl(new AMap.ToolBar({ position: "RB" }));
  if (AMap.Scale) navMap.addControl(new AMap.Scale());

  navDestMarker = new AMap.Marker({
    position: [currentNavDest.lng, currentNavDest.lat],
    title: currentNavDest.name,
    map: navMap,
    icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png"
  });

  navGeolocation = new AMap.Geolocation({
    enableHighAccuracy: true,
    timeout: 10000,
    zoomToAccuracy: false,
    showButton: false,
    showMarker: false,
    showCircle: false
  });
  navMap.addControl(navGeolocation);
  navMap.setFitView([navDestMarker], false, [80, 80, 80, 80], 14);
}

function haversineDistanceKm(a, b) {
  const R = 6371;
  const dLat = (b[1] - a[1]) * Math.PI / 180;
  const dLng = (b[0] - a[0]) * Math.PI / 180;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a[1] * Math.PI / 180) * Math.cos(b[1] * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function setOriginMarker(origin, label = "起点") {
  currentNavOrigin = [Number(origin[0]), Number(origin[1])];
  if (navOriginMarker) {
    navOriginMarker.setPosition(currentNavOrigin);
  } else {
    navOriginMarker = new AMap.Marker({
      position: currentNavOrigin,
      title: label,
      map: navMap,
      icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png"
    });
  }
  if (navEl("navOriginInput") && label !== "起点") {
    navEl("navOriginInput").value = label;
  }
}

function clearNavRoute() {
  navRouteReady = false;
  setNavStartEnabled(false);
  if (navRouteService && typeof navRouteService.clear === "function") {
    navRouteService.clear();
  }
  navRouteService = null;
}

function fitNavView() {
  const overlays = [navDestMarker, navOriginMarker].filter(Boolean);
  if (overlays.length) {
    navMap.setFitView(overlays, false, [80, 80, 80, 80]);
  }
}

function planRoute(origin) {
  if (!navMap || !currentNavDest) return;
  clearNavMapClickMode();
  clearNavRoute();
  setOriginMarker(origin);

  const dest = [currentNavDest.lng, currentNavDest.lat];
  const distKm = haversineDistanceKm(origin, dest);
  const modeName = navModeLabels[currentNavMode] || "导航";
  setNavInfo(`正在规划${modeName}路线...`);

  if (distKm < 0.03) {
    setNavInfo("起点已经非常接近目的地，无需规划路线。");
    fitNavView();
    return;
  }
  if (currentNavMode === "riding" && distKm > 100) {
    setNavInfo(`骑行距离过远（约 ${distKm.toFixed(0)} 公里），骑行导航仅支持 100 公里以内。`);
    fitNavView();
    return;
  }
  if (currentNavMode === "walking" && distKm > 30) {
    setNavInfo(`步行距离过远（约 ${distKm.toFixed(0)} 公里），步行导航仅支持 30 公里以内。`);
    fitNavView();
    return;
  }

  if (currentNavMode === "driving") {
    if (typeof AMap.Driving === "undefined") {
      setNavInfo("驾车插件未加载，请刷新页面重试。");
      return;
    }
    navRouteService = new AMap.Driving({ map: navMap, policy: AMap.DrivingPolicy.LEAST_TIME });
  } else if (currentNavMode === "riding") {
    if (typeof AMap.Riding === "undefined") {
      setNavInfo("骑行插件未加载，请刷新页面重试。");
      return;
    }
    navRouteService = new AMap.Riding({ map: navMap });
  } else {
    if (typeof AMap.Walking === "undefined") {
      setNavInfo("步行插件未加载，请刷新页面重试。");
      return;
    }
    navRouteService = new AMap.Walking({ map: navMap });
  }

  navRouteService.search(
    new AMap.LngLat(origin[0], origin[1]),
    new AMap.LngLat(dest[0], dest[1]),
    (status, result) => handleRouteResult(status, result, distKm)
  );
}

function handleRouteResult(status, result, fallbackDistanceKm) {
  const route = result?.routes?.[0];
  if (status !== "complete" || !route) {
    setNavInfo(`未找到${navModeLabels[currentNavMode]}路线。可换一种出行方式，或点击地图重新设置起点。`);
    enableMapPickMode();
    fitNavView();
    return;
  }

  const distance = Number(route.distance || fallbackDistanceKm * 1000);
  const time = Number(route.time || 0);
  const km = (distance / 1000).toFixed(distance >= 10000 ? 0 : 1);
  const min = time ? Math.max(1, Math.round(time / 60)) : "--";
  const modeIcon = currentNavMode === "driving" ? "🚗" : currentNavMode === "riding" ? "🚴" : "🚶";
  navRouteReady = true;
  setNavStartEnabled(true);
  setNavInfo(`<strong>${modeIcon} ${navModeLabels[currentNavMode]}</strong>：约 ${km} 公里，${min} 分钟。可切换方式或开始导航。`);
}

function useCurrentLocationAsOrigin() {
  if (!isLoggedIn()) {
    setNavInfo("请先登录后再使用当前位置导航。");
    openAuthModal("login");
    return;
  }
  if (!navGeolocation) return;
  clearNavMapClickMode();
  setNavInfo("正在获取当前位置...");
  navGeolocation.getCurrentPosition((status, result) => {
    if (status === "complete" && result?.position) {
      const origin = [result.position.getLng(), result.position.getLat()];
      storeLocationRecord({
        feature: "navigation",
        action: "origin-locate",
        latitude: origin[1],
        longitude: origin[0],
        destination: currentNavDest ? {
          name: currentNavDest.name,
          latitude: currentNavDest.lat,
          longitude: currentNavDest.lng
        } : null,
        meta: {
          source: "amap-geolocation"
        }
      });
      navEl("navOriginInput").value = "当前位置";
      planRoute(origin);
      return;
    }
    setNavInfo("定位失败。可以输入起点搜索，或点击“地图选点”后在地图上选择起点。");
    enableMapPickMode();
  });
}

function searchOriginByInput() {
  const input = navEl("navOriginInput");
  const keyword = input?.value.trim();
  if (!keyword) {
    setNavInfo("请输入起点名称，或使用当前位置。");
    return;
  }
  if (!AMap.Geocoder) {
    setNavInfo("地理编码插件未加载，请刷新页面重试。");
    return;
  }
  clearNavMapClickMode();
  setNavInfo("正在搜索起点...");
  const geocoder = new AMap.Geocoder({ city: "全国" });
  geocoder.getLocation(keyword, (status, result) => {
    const location = result?.geocodes?.[0]?.location;
    if (status === "complete" && location) {
      const origin = [location.getLng(), location.getLat()];
      setOriginMarker(origin, result.geocodes[0].formattedAddress || keyword);
      planRoute(origin);
      return;
    }
    setNavInfo("没有找到这个起点。可以换个更完整的地址，或改用地图选点。");
  });
}

function enableMapPickMode() {
  if (!navMap) return;
  clearNavMapClickMode();
  navEl("navPickMapBtn")?.classList.add("active");
  setNavInfo("请在地图上点击你的出发位置。");
  navMapClickHandler = (e) => {
    const origin = [e.lnglat.getLng(), e.lnglat.getLat()];
    navEl("navOriginInput").value = "地图选点";
    clearNavMapClickMode();
    planRoute(origin);
  };
  navMap.on("click", navMapClickHandler);
}

function clearNavMapClickMode() {
  if (navMap && navMapClickHandler) {
    navMap.off("click", navMapClickHandler);
  }
  navMapClickHandler = null;
  navEl("navPickMapBtn")?.classList.remove("active");
}

function closeNavigation() {
  stopImmersiveNav();
  clearNavMapClickMode();
  clearNavRoute();
  navEl("navOverlay").style.display = "none";
}

// ===== Immersive Navigation =====
let immersiveNavActive = false;
let immersiveWatchId = null;
let immersiveUserMarker = null;
let mapLocked = false;
let latestImmersivePosition = null;
let immersivePositionSeq = 0;

function convertGpsToAmapPosition(lng, lat) {
  if (!window.AMap || typeof AMap.convertFrom !== "function") {
    return Promise.resolve([lng, lat]);
  }

  return new Promise((resolve) => {
    AMap.convertFrom([lng, lat], "gps", (status, result) => {
      const converted = result?.locations?.[0];
      if (status === "complete" && converted) {
        resolve([converted.getLng(), converted.getLat()]);
        return;
      }
      resolve([lng, lat]);
    });
  });
}

function updateImmersiveUserPosition(lng, lat, heading) {
  latestImmersivePosition = [lng, lat];
  const arrowHtml = `<div class="nav-user-marker" style="transform:rotate(${heading || 0}deg)"><span></span></div>`;

  if (!immersiveUserMarker) {
    immersiveUserMarker = new AMap.Marker({
      position: latestImmersivePosition,
      map: navMap,
      zIndex: 200,
      offset: new AMap.Pixel(-15, -15),
      content: arrowHtml
    });
  } else {
    immersiveUserMarker.setPosition(latestImmersivePosition);
    immersiveUserMarker.setContent(arrowHtml);
  }

  navMap.setCenter(latestImmersivePosition, false, 200);
  updateImmersiveInfo(lng, lat);
}

function focusNavOnOrigin(origin, heading = 0) {
  if (!navMap || !origin || origin.length < 2) return;
  const lng = Number(origin[0]);
  const lat = Number(origin[1]);
  if (!Number.isFinite(lng) || !Number.isFinite(lat)) return;
  updateImmersiveUserPosition(lng, lat, heading);
  navMap.setZoom(17, false);
  navMap.setCenter([lng, lat], false, 200);
}

function startImmersiveNav() {
  if (!currentNavDest || !currentNavOrigin || !navRouteReady) {
    setNavInfo("请先设置起点并成功规划路线。");
    return;
  }
  if (!("geolocation" in navigator)) {
    setNavInfo("当前浏览器不支持实时定位，无法开始实时导航。");
    return;
  }
  immersiveNavActive = true;
  mapLocked = true;
  latestImmersivePosition = currentNavOrigin ? [...currentNavOrigin] : null;
  const btn = navEl("navStartBtn");
  btn.textContent = "结束导航";
  btn.classList.add("navigating");

  navEl("navLockOverlay").style.display = "block";

  // Start by forcing the map onto the planned origin so every spot behaves the same.
  focusNavOnOrigin(currentNavOrigin, 0);

  immersiveWatchId = navigator.geolocation.watchPosition(
    (pos) => {
      const lng = pos.coords.longitude;
      const lat = pos.coords.latitude;
      const heading = pos.coords.heading || 0;
      const seq = ++immersivePositionSeq;

      convertGpsToAmapPosition(lng, lat).then(([amapLng, amapLat]) => {
        if (!immersiveNavActive || seq !== immersivePositionSeq) return;
        updateImmersiveUserPosition(amapLng, amapLat, heading);
      });
    },
    () => {
      stopImmersiveNav();
      setNavInfo("实时定位失败，已停止导航。你仍可以查看已规划路线。");
    },
    { enableHighAccuracy: true, maximumAge: 1000, timeout: 8000 }
  );
}

function recenterNav() {
  if (!navMap) return;
  let center = latestImmersivePosition;
  if (!center && immersiveUserMarker) {
    const pos = immersiveUserMarker.getPosition();
    center = [pos.getLng(), pos.getLat()];
  }
  if (!center && currentNavOrigin) {
    center = currentNavOrigin;
  }
  if (!center) return;
  navMap.setCenter(center, true, 300);
  navMap.setZoom(17, true, 300);
}

function updateImmersiveInfo(lng, lat) {
  if (!currentNavDest) return;
  const R = 6371;
  const dLat = (currentNavDest.lat - lat) * Math.PI / 180;
  const dLng = (currentNavDest.lng - lng) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat * Math.PI / 180) * Math.cos(currentNavDest.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  const dist = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const bearing = Math.atan2(
    Math.sin((currentNavDest.lng - lng) * Math.PI / 180),
    Math.cos(lat * Math.PI / 180) * Math.tan(currentNavDest.lat * Math.PI / 180) - Math.sin(lat * Math.PI / 180) * Math.cos((currentNavDest.lng - lng) * Math.PI / 180)
  ) * 180 / Math.PI;

  const dirEmoji = getDirectionEmoji(bearing);

  if (dist < 0.05) {
    setNavInfo(`<strong style="color:var(--green);">🎉 已到达目的地：${currentNavDest.name}</strong>`);
    stopImmersiveNav();
    return;
  }

  const km = dist.toFixed(2);
  setNavInfo(`<strong>${dirEmoji} 前往 ${currentNavDest.name}</strong>　剩余直线距离约 ${km} 公里`);
}

function getDirectionEmoji(bearing) {
  const dirs = ["⬆️", "↗️", "➡️", "↘️", "⬇️", "↙️", "⬅️", "↖️"];
  const idx = Math.round(((bearing % 360) + 360) % 360 / 45) % 8;
  return dirs[idx];
}

function stopImmersiveNav() {
  immersiveNavActive = false;
  mapLocked = false;
  const btn = navEl("navStartBtn");
  if (btn) {
    btn.textContent = "开始导航";
    btn.classList.remove("navigating");
  }
  if (immersiveWatchId !== null) {
    navigator.geolocation.clearWatch(immersiveWatchId);
    immersiveWatchId = null;
  }
  if (immersiveUserMarker) {
    if (navMap) navMap.remove(immersiveUserMarker);
    immersiveUserMarker = null;
  }
  latestImmersivePosition = null;
  immersivePositionSeq += 1;
  if (navEl("navLockOverlay")) navEl("navLockOverlay").style.display = "none";
}

navEl("navStartBtn").addEventListener("click", () => {
  if (immersiveNavActive) {
    stopImmersiveNav();
  } else {
    startImmersiveNav();
  }
});

navEl("navRecenterBtn").addEventListener("click", recenterNav);
navEl("navUseCurrentBtn").addEventListener("click", useCurrentLocationAsOrigin);
navEl("navSearchOriginBtn").addEventListener("click", searchOriginByInput);
navEl("navOriginInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") searchOriginByInput();
});
navEl("navPickMapBtn").addEventListener("click", enableMapPickMode);

navEl("navCloseBtn").addEventListener("click", closeNavigation);
navEl("navOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeNavigation();
});
document.querySelectorAll(".nav-mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.navMode === currentNavMode) return;
    currentNavMode = btn.dataset.navMode;
    document.querySelectorAll(".nav-mode-btn").forEach(b => b.classList.toggle("active", b.dataset.navMode === currentNavMode));
    stopImmersiveNav();
    if (currentNavOrigin) planRoute(currentNavOrigin);
    else setNavInfo("请选择或输入起点后规划路线。");
  });
});

// Map popup navigation click handler
document.getElementById("map").addEventListener("click", (event) => {
  const navBtn = event.target.closest("button[data-navigate]");
  if (!navBtn) return;
  const { lat, lng, name } = navBtn.dataset;
  openNavigation(lat, lng, name);
});

// 景点评分功能
async function loadRating(spotId) {
  const section = document.querySelector(`.rating-section[data-spot="${spotId}"]`);
  if (!section) return;
  try {
    const token = getAuthToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const res = await fetch(`/api/ratings/${spotId}`, { headers });
    const data = await res.json();
    section.querySelector(".rating-average").textContent = data.average > 0 ? data.average : "--";
    section.querySelector(".rating-total").textContent = `${data.total} 条评分`;
    const myRating = data.myRating || 0;
    updateStarDisplay(spotId, myRating);
    const clearBtn = section.querySelector(".rating-clear-btn");
    if (clearBtn) clearBtn.style.display = myRating > 0 ? "inline-block" : "none";
  } catch (e) {
    console.error("加载评分失败:", e);
  }
}

function updateStarDisplay(spotId, rating) {
  const container = document.querySelector(`.star-rating[data-spot="${spotId}"]`);
  if (!container) return;
  container.querySelectorAll(".star").forEach(star => {
    const val = parseFloat(star.dataset.value);
    star.classList.remove("active", "half-active");
    if (val <= Math.floor(rating)) {
      star.classList.add("active");
    } else if (val === Math.ceil(rating) && rating % 1 !== 0) {
      star.classList.add("half-active");
    }
  });
}

document.addEventListener("click", async (event) => {
  const star = event.target.closest(".star-rating .star");
  if (!star) return;
  const container = star.closest(".star-rating");
  const spotId = container.dataset.spot;
  const rect = star.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const value = x < rect.width / 2 ? parseFloat(star.dataset.value) - 0.5 : parseFloat(star.dataset.value);
  if (value < 0.5 || value > 5) return;
  if (!isLoggedIn()) { openAuthModal("login"); return; }
  try {
    const token = getAuthToken();
    const res = await fetch("/api/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ spotId, rating: value })
    });
    const data = await res.json();
    if (res.ok) {
      updateStarDisplay(spotId, value);
      const section = document.querySelector(`.rating-section[data-spot="${spotId}"]`);
      section.querySelector(".rating-average").textContent = data.average;
      section.querySelector(".rating-total").textContent = `${data.total} 条评分`;
      section.querySelector(".rating-clear-btn").style.display = "inline-block";
    }
  } catch (e) {
    console.error("评分失败:", e);
  }
});

document.addEventListener("click", async (event) => {
  const btn = event.target.closest(".rating-clear-btn");
  if (!btn) return;
  const spotId = btn.dataset.spot;
  if (!isLoggedIn()) return;
  try {
    const token = getAuthToken();
    const res = await fetch(`/api/ratings/${spotId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (res.ok) {
      updateStarDisplay(spotId, 0);
      const section = document.querySelector(`.rating-section[data-spot="${spotId}"]`);
      section.querySelector(".rating-average").textContent = data.average > 0 ? data.average : "--";
      section.querySelector(".rating-total").textContent = `${data.total} 条评分`;
      btn.style.display = "none";
    }
  } catch (e) {
    console.error("取消评分失败:", e);
  }
});

infoIndexList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-info-index]");
  if (!button) return;
  selectSpot(button.dataset.infoIndex, { module: "info" });
});

map.on("popupopen", (event) => {
  const button = event.popup.getElement().querySelector("[data-detail]");
  if (button) {
    button.addEventListener("click", () => selectSpot(button.dataset.detail, { module: "info" }));
  }
});

searchInput.addEventListener("input", (event) => {
  searchText = event.target.value;
  render();
  if (activeModule === "map") fitToSpots(getFilteredSpots());
});

resetView.addEventListener("click", () => {
  currentType = "全部";
  searchText = "";
  searchInput.value = "";
  selectedId = spots[0].id;
  render();
  switchModule("map");
  fitToSpots(spots);
});

mapModuleBtn.addEventListener("click", () => {
  switchModule("map");
});

function closeSidebarOnMobile() {
  if (window.innerWidth <= 980) {
    setTimeout(closeSidebar, 100);
  }
}

infoModuleBtn.addEventListener("click", () => {
  recordVisit(selectedId);
  switchModule("info");
  closeSidebarOnMobile();
});

profileModuleBtn.addEventListener("click", () => {
  switchModule("profile");
  closeSidebarOnMobile();
});

routeModuleBtn.addEventListener("click", () => {
  switchModule("route");
});

chatModuleBtn.addEventListener("click", () => {
  switchModule("chat");
});

mobileBottomNav?.addEventListener("click", (event) => {
  const button = event.target.closest(".mobile-bottom-btn[data-mobile-nav]");
  if (!button) return;
  const navName = button.dataset.mobileNav;

  closeSidebarOnMobile();
  if (navName === "weather") {
    switchModule("map");
    openWeatherPopover();
    return;
  }
  closeWeatherPopover();
  switchModule(navName);
});

if (statsModuleBtn) {
  statsModuleBtn.addEventListener("click", () => {
    switchModule("stats");
    closeSidebarOnMobile();
  });
}

// ===== Weather =====
const WEATHER_ICONS = {
  "晴": "☀️", "多云": "⛅", "阴": "☁️", "小雨": "🌦️", "中雨": "🌧️", "大雨": "🌧️",
  "暴雨": "⛈️", "雷阵雨": "⛈️", "小雪": "🌨️", "中雪": "❄️", "大雪": "❄️",
  "雾": "🌫️", "霾": "🌫️", "阵雨": "🌦️", "雨夹雪": "🌨️", "浮尘": "🌫️",
  "Sunny": "☀️", "Cloudy": "⛅", "Overcast": "☁️", "Light Rain": "🌦️",
  "Moderate Rain": "🌧️", "Heavy Rain": "🌧️", "Thunderstorm": "⛈️",
  "Light Snow": "🌨️", "Moderate Snow": "❄️", "Heavy Snow": "❄️",
  "Fog": "🌫️", "Haze": "🌫️"
};

function getWeatherIcon(weather) {
  for (const [key, icon] of Object.entries(WEATHER_ICONS)) {
    if (weather.includes(key)) return icon;
  }
  return "🌤️";
}

function getAmapWeatherForecast(city) {
  return new Promise((resolve, reject) => {
    if (!window.AMap || !AMap.Weather) {
      reject(new Error("AMap Weather plugin is unavailable."));
      return;
    }
    const weather = new AMap.Weather();
    weather.getForecast(city, (error, result) => {
      if (!error && result) {
        resolve(result);
      } else {
        reject(error || new Error("AMap Weather request failed."));
      }
    });
  });
}

function getAmapWeatherLive(city) {
  return new Promise((resolve, reject) => {
    if (!window.AMap || !AMap.Weather) {
      reject(new Error("AMap Weather plugin is unavailable."));
      return;
    }
    const weather = new AMap.Weather();
    weather.getLive(city, (error, result) => {
      if (!error && result) {
        resolve(result);
      } else {
        reject(error || new Error("AMap live weather request failed."));
      }
    });
  });
}

function getAmapAddress(lng, lat) {
  return new Promise((resolve, reject) => {
    if (!window.AMap || !AMap.Geocoder) {
      reject(new Error("AMap Geocoder plugin is unavailable."));
      return;
    }
    const geocoder = new AMap.Geocoder();
    geocoder.getAddress([lng, lat], (status, result) => {
      const component = result?.regeocode?.addressComponent;
      if (status === "complete" && component) {
        resolve(component);
      } else {
        reject(result || new Error("AMap reverse geocode failed."));
      }
    });
  });
}

function normalizeAmapWeatherForecast(raw) {
  const forecasts = raw.forecasts || raw.casts || [];
  return {
    city: raw.city || raw.province || "",
    reporttime: raw.reportTime || raw.reporttime || "",
    casts: forecasts.map((item) => ({
      date: item.date || "",
      weekday: item.week || item.weekday || "",
      dayweather: item.dayWeather || item.dayweather || item.weather || "",
      nighttemp: item.nightTemp || item.nighttemp || item.temperature || "",
      daytemp: item.dayTemp || item.daytemp || item.temperature || "",
      winddirection: item.dayWindDir || item.winddirection || item.windDirection || "",
      windpower: item.dayWindPower || item.windpower || item.windPower || ""
    }))
  };
}

function normalizeAmapWeatherLive(raw) {
  return {
    city: raw.city || raw.province || "",
    reporttime: raw.reportTime || raw.reporttime || "",
    weather: raw.weather || raw.liveWeather || "",
    temperature: raw.temperature || raw.temp || "",
    winddirection: raw.windDirection || raw.winddirection || "",
    windpower: raw.windPower || raw.windpower || "",
    humidity: raw.humidity || ""
  };
}

async function loadWeather(city) {
  const [forecastState, liveState] = await Promise.allSettled([
    getAmapWeatherForecast(city),
    getAmapWeatherLive(city)
  ]);

  return {
    forecast: forecastState.status === "fulfilled" ? normalizeAmapWeatherForecast(forecastState.value) : null,
    live: liveState.status === "fulfilled" ? normalizeAmapWeatherLive(liveState.value) : null
  };
}

async function queryWeatherByCity(city) {
  const result = document.getElementById("weatherResult");
  if (!result) return;
  if (!city.trim()) { result.innerHTML = `<p class="weather-empty">${t("weatherCityEmpty")}</p>`; return; }
  result.innerHTML = `<p class="weather-loading">${t("weatherLoading")}</p>`;
  try {
    const weather = await loadWeather(city.trim());
    if (!weather.live && !weather.forecast?.casts?.length) {
      result.innerHTML = `<p class="weather-empty">${t("weatherCityNotFound")}</p>`;
      return;
    }
    renderWeather(weather, result);
  } catch (e) {
    console.error(e);
    result.innerHTML = `<p class="weather-empty">${t("weatherFail")}</p>`;
  }
}

async function queryWeatherByLocation() {
  const result = document.getElementById("weatherResult");
  if (!result) return;
  if (!isLoggedIn()) {
    result.innerHTML = `<p class="weather-empty">请先登录后再使用定位天气。</p>`;
    openAuthModal("login");
    return;
  }
  result.innerHTML = `<p class="weather-loading">${t("weatherLocating")}</p>`;
  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 8000 });
    });
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;
    const address = await getAmapAddress(lng, lat);
    const city = address.adcode || address.city || address.province;
    const liveCity = Array.isArray(address.city) ? address.city.join("") : address.city;
    const liveProvince = Array.isArray(address.province) ? address.province.join("") : address.province;
    const weather = await loadWeather(city).catch((error) => {
      console.error("Failed to load weather after location:", error);
      return { live: null, forecast: null };
    });
    const storedRecord = await storeLocationRecord({
      feature: "weather",
      action: "current-location",
      latitude: lat,
      longitude: lng,
      accuracy: pos.coords.accuracy,
      altitude: pos.coords.altitude,
      heading: pos.coords.heading,
      speed: pos.coords.speed,
      city: liveCity || liveProvince || "",
      adcode: address.adcode || "",
      weather: {
        live: weather.live,
        forecast: weather.forecast
      },
      meta: {
        source: "browser-geolocation"
      }
    });
    if (!weather.live && !weather.forecast?.casts?.length) {
      result.innerHTML = `<p class="weather-empty">${t("weatherFail")}</p>`;
      return;
    }
    if (storedRecord?.record) {
      weather.lastLocationRecord = storedRecord.record;
    }
    renderWeather(weather, result);
  } catch (e) {
    console.error(e);
    result.innerHTML = `<p class="weather-empty">${t("weatherFail")}</p>`;
  }
}

function getWeatherTravelAdvice(weatherText) {
  const text = String(weatherText || "");
  const isRainy = /雨|雷|阵雨|暴雨|rain|shower|storm/i.test(text);
  const isSunny = /晴|sunny|clear/i.test(text);

  if (currentLang === "zh") {
    if (isRainy) return "出行建议：下雨推荐博物馆、纪念馆、江宁织造府等室内景点，减少长时间户外步行。";
    if (isSunny) return "出行建议：晴天推荐城墙、紫金山、玄武湖和湖区路线，适合拍照与慢行。";
    return "出行建议：可结合实时天气选择路线；雨天优先室内景点，晴天优先城墙、紫金山和湖区路线。";
  }

  if (isRainy) return "Travel tip: rainy weather is better for museums, memorial halls, and other indoor sites.";
  if (isSunny) return "Travel tip: sunny weather suits the city wall, Purple Mountain, Xuanwu Lake, and lakeside routes.";
  return "Travel tip: choose indoor sites on rainy days, and city wall, mountain, or lakeside routes on sunny days.";
}

function formatForecastLabel(day, index) {
  if (index === 0) return currentLang === "zh" ? "今天" : "Today";
  if (index === 1) return currentLang === "zh" ? "明天" : "Tomorrow";
  if (index === 2) return currentLang === "zh" ? "后天" : "Day After";

  const weekdayMap = currentLang === "zh"
    ? ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weekdayNumber = Number(day.weekday);
  if (weekdayNumber >= 1 && weekdayNumber <= 7) return weekdayMap[weekdayNumber - 1];
  return day.weekday || day.date || "";
}

function renderWeather(weatherData, container) {
  const forecast = weatherData.forecast || {};
  const live = weatherData.live || {};
  const city = live.city || forecast.city || "";
  const casts = forecast.casts || [];
  const today = casts[0] || {};
  const currentWeather = live.weather || today.dayweather || "";
  const travelAdvice = getWeatherTravelAdvice(currentWeather || today.dayweather || today.nightweather);
  const icon = getWeatherIcon(currentWeather);
  const windText = [live.winddirection || today.winddirection, live.windpower || today.windpower].filter(Boolean).join(" ");
  const reportTime = live.reporttime || forecast.reporttime || "";

  let forecastHTML = "";
  casts.forEach((c, i) => {
    const label = formatForecastLabel(c, i);
    const fIcon = getWeatherIcon(c.dayweather || "");
    forecastHTML += `
      <div class="weather-forecast-day">
        <span class="weather-forecast-label">${label}</span>
        <span class="weather-forecast-icon">${fIcon}</span>
        <span class="weather-forecast-temp">${c.nighttemp}° ~ ${c.daytemp}°</span>
        <span class="weather-forecast-desc">${currentLang === "zh" ? c.dayweather : (c.dayweather || "")}</span>
      </div>`;
  });

  container.innerHTML = `
    <div class="weather-current">
      <div class="weather-section-label">${t("weatherNow")}</div>
      <div class="weather-city-name">${icon} ${city}</div>
      <div class="weather-current-temp">${live.temperature ? `${live.temperature}°` : `${today.nighttemp || ""}° ~ ${today.daytemp || ""}°`}</div>
      <div class="weather-current-desc">${currentWeather}</div>
      <div class="weather-details">
        ${windText ? `<span>${t("weatherWind")}：${windText}${currentLang === "zh" && !String(windText).includes("级") ? "级" : ""}</span>` : ""}
        ${live.humidity ? `<span>${t("weatherHumidity")}：${live.humidity}%</span>` : ""}
      </div>
    </div>
    <div class="weather-travel-advice">${travelAdvice}</div>
    ${forecastHTML ? `<div class="weather-section-label weather-forecast-title">${t("weatherForecast")}</div><div class="weather-forecast">${forecastHTML}</div>` : ""}
    ${reportTime ? `<div class="weather-report-time">${t("weatherReportTime")}：${reportTime}</div>` : ""}
  `;
}

function openWeatherPopover() {
  if (!weatherPopover) return;
  weatherPopover.style.display = "block";
  weatherPopover.dataset.open = "true";
  weatherPanelBtn?.classList.add("active");
  setMobileBottomActive("weather");
  setTimeout(() => document.getElementById("weatherSearchInput")?.focus(), 0);
}

function closeWeatherPopover() {
  if (!weatherPopover) return;
  weatherPopover.style.display = "none";
  weatherPopover.dataset.open = "false";
  weatherPanelBtn?.classList.remove("active");
  setMobileBottomActive(activeModule === "route" ? "route" : activeModule === "chat" ? "chat" : activeModule === "profile" ? "profile" : "map");
}

function toggleWeatherPopover() {
  if (!weatherPopover) return;
  const isOpen = weatherPopover.dataset.open === "true";
  if (!isOpen) {
    openWeatherPopover();
  } else {
    closeWeatherPopover();
  }
}

document.getElementById("weatherSearchBtn")?.addEventListener("click", () => {
  const city = document.getElementById("weatherSearchInput").value;
  queryWeatherByCity(city);
});

document.getElementById("weatherSearchInput")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = e.target.value;
    queryWeatherByCity(city);
  }
});

document.getElementById("weatherLocBtn")?.addEventListener("click", () => {
  queryWeatherByLocation();
});

weatherPanelBtn?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleWeatherPopover();
});

weatherCloseBtn?.addEventListener("click", closeWeatherPopover);

weatherPopover?.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!weatherPopover || weatherPopover.dataset.open !== "true") return;
  if (event.target.closest("#weatherPopover") || event.target.closest("#weatherPanelBtn") || event.target.closest("#mobileBottomNav")) return;
  closeWeatherPopover();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeWeatherPopover();
});

// 语言切换
const langToggleBtn = document.getElementById("langToggle");
if (langToggleBtn) {
  langToggleBtn.textContent = currentLang === "zh" ? "EN" : "中";
  langToggleBtn.addEventListener("click", () => {
    setLang(currentLang === "zh" ? "en" : "zh");
  });
}

if (adminModuleBtn) {
  adminModuleBtn.addEventListener("click", () => {
    const admin = JSON.parse(localStorage.getItem("landscapeAdmin"));
    if (!admin) { openAuthModal("login"); return; }
    switchModule("admin");
  });
}

backToMap.addEventListener("click", () => {
  selectSpot(selectedId, { module: "map", openPopup: true });
});

backToMapFromProfile.addEventListener("click", () => {
  selectSpot(selectedId, { module: "map", openPopup: true });
});

const backToMapFromStats = document.querySelector("#backToMapFromStats");
if (backToMapFromStats) {
  backToMapFromStats.addEventListener("click", () => {
    selectSpot(selectedId, { module: "map", openPopup: true });
  });
}

authOpenBtn.addEventListener("click", () => openAuthModal("login"));
authLogoutBtn?.addEventListener("click", logout);
authCloseBtn.addEventListener("click", closeAuthModal);
loginTab.addEventListener("click", () => setAuthMode("login"));
registerTab.addEventListener("click", () => setAuthMode("register"));
if (adminTab) adminTab.addEventListener("click", () => setAuthMode("admin"));
if (goAdminLogin) goAdminLogin.addEventListener("click", () => setAuthMode("admin"));
if (goAdminRegister) goAdminRegister.addEventListener("click", () => setAuthMode("adminRegister"));

authModal.addEventListener("click", (event) => {
  if (event.target === authModal) closeAuthModal();
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  setAuthMessage("正在登录...");
  try {
    const data = await submitAuth("/auth/login", {
      account: formData.get("account"),
      password: formData.get("password")
    });
    saveAuth(data);
    setAuthMessage(data.message || "登录成功。", "success");
    setTimeout(closeAuthModal, 500);
  } catch (error) {
    setAuthMessage(error.message, "error");
  }
});

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  setAuthMessage("正在注册...");
  try {
    const data = await submitAuth("/auth/register", {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
    });
    saveAuth(data);
    setAuthMessage(data.message || "注册成功。", "success");
    registerForm.reset();
    setTimeout(closeAuthModal, 500);
  } catch (error) {
    setAuthMessage(error.message, "error");
  }
});

if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(adminLoginForm);
    setAuthMessage("正在登录...");
    try {
      const data = await submitAuth("/admin/login", {
        account: formData.get("account"),
        password: formData.get("password")
      });
      saveAdminAuth(data);
      setAuthMessage(data.message || "管理员登录成功。", "success");
      setTimeout(closeAuthModal, 500);
    } catch (error) {
      setAuthMessage(error.message, "error");
    }
  });
}

if (adminRegisterForm) {
  adminRegisterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(adminRegisterForm);
    setAuthMessage("正在注册...");
    try {
      const data = await submitAuth("/admin/register", {
        secretKey: formData.get("secretKey"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password")
      });
      saveAdminAuth(data);
      setAuthMessage(data.message || "管理员注册成功。", "success");
      adminRegisterForm.reset();
      setTimeout(closeAuthModal, 500);
    } catch (error) {
      setAuthMessage(error.message, "error");
    }
  });
}

document.addEventListener("click", async (event) => {
  const likeButton = event.target.closest(".like-btn[data-spot]");
  if (likeButton) {
    const spotId = likeButton.dataset.spot;
    const currentLiked = likeButton.classList.contains("liked");

    if (currentLiked) {
      if (await removeLike(spotId)) {
        likeButton.classList.remove("liked");
        const icon = likeButton.querySelector(".like-icon");
        const count = likeButton.querySelector(".like-count");
        if (icon) icon.textContent = "♡";
        if (count) count.textContent = getSpotLikes(spotId).length;
      }
    } else {
      if (await addLike(spotId)) {
        likeButton.classList.add("liked");
        const icon = likeButton.querySelector(".like-icon");
        const count = likeButton.querySelector(".like-count");
        if (icon) icon.textContent = "♥";
        if (count) count.textContent = getSpotLikes(spotId).length;
      }
    }
    return;
  }

  const favoriteButton = event.target.closest(".favorite-btn[data-spot]");
  if (favoriteButton) {
    const spotId = favoriteButton.dataset.spot;
    const spotName = favoriteButton.dataset.spotName;
    const currentFavorited = favoriteButton.classList.contains("favorited");

    if (currentFavorited) {
      if (await removeFavorite(spotId)) {
        favoriteButton.classList.remove("favorited");
        const icon = favoriteButton.querySelector(".favorite-icon");
        const text = favoriteButton.querySelector("span:last-child");
        if (icon) icon.textContent = "☆";
        if (text) text.textContent = "收藏";
      }
    } else {
      if (await addFavorite(spotId, spotName)) {
        favoriteButton.classList.add("favorited");
        const icon = favoriteButton.querySelector(".favorite-icon");
        const text = favoriteButton.querySelector("span:last-child");
        if (icon) icon.textContent = "★";
        if (text) text.textContent = "已收藏";
      }
    }
    return;
  }

  const submitComment = event.target.closest(".submit-comment[data-spot]");
  if (submitComment) {
    const spotId = submitComment.dataset.spot;
    const commentInput = submitComment.closest(".comment-input");
    const textarea = commentInput?.querySelector(`textarea[data-spot="${spotId}"]`);
    const imageInput = commentInput?.querySelector(`.comment-image-input[data-spot="${spotId}"]`);
    const imageFile = imageInput?.files?.[0] || null;
    if ((textarea && textarea.value.trim()) || imageFile) {
      if (await addComment(spotId, textarea.value, imageFile)) {
        textarea.value = "";
        if (imageInput) {
          imageInput.value = "";
          imageInput.closest(".comment-image-btn")?.removeAttribute("data-selected");
        }
        const spot = spots.find(s => s.id === spotId);
        renderInfoArticle(spot);
        renderDetailPanel(spot);
      }
    }
    return;
  }

  const deleteCommentBtn = event.target.closest(".comment-delete[data-comment][data-spot]");
  if (deleteCommentBtn) {
    const spotId = deleteCommentBtn.dataset.spot;
    const commentId = deleteCommentBtn.dataset.comment;
    if (await deleteComment(spotId, commentId)) {
      const spot = spots.find(s => s.id === spotId);
      renderInfoArticle(spot);
      renderDetailPanel(spot);
      loadUserImages(spotId);
    }
    return;
  }

  const removeFavoriteBtn = event.target.closest(".remove-favorite[data-spot]");
  if (removeFavoriteBtn) {
    const spotId = removeFavoriteBtn.dataset.spot;
    if (await removeFavorite(spotId)) {
      loadUserProfile();
    }
    return;
  }

  const viewSpotBtn = event.target.closest(".view-spot[data-spot]");
  if (viewSpotBtn) {
    const spotId = viewSpotBtn.dataset.spot;
    selectSpot(spotId, { module: "info" });
    return;
  }

  const goToMapBtn = event.target.closest(".go-to-map");
  if (goToMapBtn) {
    switchModule("map");
    return;
  }

  const commentSpotLink = event.target.closest(".comment-spot-name[data-spot]");
  if (commentSpotLink) {
    selectSpot(commentSpotLink.dataset.spot, { module: "info" });
    return;
  }

  const imageSpotLink = event.target.closest(".image-spot-name[data-spot]");
  if (imageSpotLink) {
    selectSpot(imageSpotLink.dataset.spot, { module: "info" });
    return;
  }

  const imageThumb = event.target.closest(".image-thumb[data-full]");
  if (imageThumb) {
    expandImage(imageThumb.dataset.full);
    return;
  }

  const recentHistorySpot = event.target.closest(".recent-history-name[data-spot], .recent-history-item[data-spot]");
  if (recentHistorySpot) {
    selectSpot(recentHistorySpot.dataset.spot, { module: "info" });
    return;
  }
});

document.addEventListener("change", (event) => {
  const commentImageInput = event.target.closest(".comment-image-input[data-spot]");
  if (commentImageInput) {
    const label = commentImageInput.closest(".comment-image-btn");
    if (label) {
      if (commentImageInput.files.length > 0) {
        label.dataset.selected = commentImageInput.files[0].name;
      } else {
        label.removeAttribute("data-selected");
      }
    }
    return;
  }

  const imageUploadInput = event.target.closest(".image-upload-input[data-spot]");
  if (imageUploadInput && imageUploadInput.files.length > 0) {
    const spotId = imageUploadInput.dataset.spot;
    const file = imageUploadInput.files[0];
    uploadImage(spotId, file);
    // 重置 input 以便下次可以上传同一张图片
    imageUploadInput.value = "";
  }
});

function saveSpotInteractions() {
  localStorage.setItem("spotInteractions", JSON.stringify(spotInteractions));
}

function getSpotLikes(spotId) {
  return spotInteractions[spotId]?.likes || [];
}

function getSpotComments(spotId) {
  return spotInteractions[spotId]?.comments || [];
}

async function addLike(spotId) {
  const user = getCurrentUser();
  const token = getAuthToken();
  if (!user || !token) {
    openAuthModal("login");
    return false;
  }

  try {
    await apiRequest(`/interactions/${spotId}/like`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` }
    });
    await loadCommentsFromServer(spotId);
    return true;
  } catch (error) {
    console.error("Failed to add like:", error);
    alert(error.message || "点赞失败");
    return false;
  }

  if (!user) {
    openAuthModal("login");
    return false;
  }
  
  if (!spotInteractions[spotId]) {
    spotInteractions[spotId] = { likes: [], comments: [] };
  }
  
  const likes = spotInteractions[spotId].likes;
  const userId = user.id || user.username;
  
  if (!likes.includes(userId)) {
    likes.push(userId);
    saveSpotInteractions();
    return true;
  }
  return false;
}

async function removeLike(spotId) {
  const user = getCurrentUser();
  const token = getAuthToken();
  if (!user || !token) return false;

  try {
    await apiRequest(`/interactions/${spotId}/like`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` }
    });
    await loadCommentsFromServer(spotId);
    return true;
  } catch (error) {
    console.error("Failed to remove like:", error);
    alert(error.message || "取消点赞失败");
    return false;
  }

  if (!user) return false;
  
  if (!spotInteractions[spotId]) return false;
  
  const likes = spotInteractions[spotId].likes;
  const userId = user.id || user.username;
  const index = likes.indexOf(userId);
  
  if (index > -1) {
    likes.splice(index, 1);
    saveSpotInteractions();
    return true;
  }
  return false;
}

async function addComment(spotId, content, imageFile = null) {
  const user = getCurrentUser();
  const token = getAuthToken();
  
  if (!user || !token) {
    openAuthModal("login");
    return false;
  }
  
  try {
    const image = imageFile ? await resizeAndConvertToBase64(imageFile, 900, 900) : "";
    await apiRequest("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        spotId,
        content: String(content || "").trim(),
        image
      })
    });
    await loadCommentsFromServer(spotId);
    return true;
  } catch (error) {
    console.error("Failed to add comment:", error);
    alert(error.message || "评论失败");
    return false;
  }
}

async function loadUserImages(spotId) {
  const container = document.getElementById(`gallery-grid-${spotId}`);
  if (!container) return;

  try {
    const serverImages = await apiRequest(`/images/${spotId}`);
    renderUserImages(spotId, serverImages);
  } catch (error) {
    console.error("Failed to load user images:", error);
    container.innerHTML = '<p class="gallery-error">无法加载图片库</p>';
  }
}

function renderUserImages(spotId, images) {
  const container = document.getElementById(`gallery-grid-${spotId}`);
  if (!container) return;

  if (images.length === 0) {
    container.innerHTML = `<p class="gallery-empty">${t("noUserGallery")}</p>`;
    return;
  }

  container.innerHTML = images.map(img => `
    <div class="gallery-item">
      <img src="${img.url}" alt="用户分享" loading="lazy" onclick="expandImage(this.src)">
      <div class="gallery-info">
        <span>${img.username}</span>
      </div>
    </div>
  `).join("");
}

function expandImage(src) {
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  overlay.innerHTML = `
    <div class="overlay-content">
      <img src="${src}" alt="放大查看">
      <button class="overlay-close">&times;</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.onclick = (e) => {
    if (e.target.className === 'image-overlay' || e.target.className === 'overlay-close') {
      document.body.removeChild(overlay);
    }
  };
}

async function uploadImage(spotId, file) {
  const user = getCurrentUser();
  const token = getAuthToken();

  if (!user || !token) {
    alert(t("loginFirstAlert"));
    openAuthModal("login");
    return;
  }

  try {
    const imageData = await resizeAndConvertToBase64(file, 800, 800);
    await apiRequest("/images/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ spotId, imageData })
    });
    alert(t("imgUploadSuccess"));
    loadUserImages(spotId);
    if (activeModule === "profile") loadUserProfile();
  } catch (error) {
    console.error("Upload error:", error);
    alert(error.message || "上传图片时发生错误");
  }
}

function resizeAndConvertToBase64(file, maxWidth, maxHeight) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
    };
    reader.onerror = (error) => reject(error);
  });
}

async function loadCommentsFromServer(spotId) {
  try {
    const serverInteraction = await apiRequest(`/interactions/${spotId}`);
    
    if (!spotInteractions[spotId]) {
      spotInteractions[spotId] = { likes: [], comments: [] };
    }
    
    spotInteractions[spotId].likes = serverInteraction.likes || [];
    spotInteractions[spotId].comments = serverInteraction.comments || [];
    saveSpotInteractions();
  } catch (error) {
    console.error("Failed to load comments:", error);
  }
}

async function deleteComment(spotId, commentId) {
  const user = getCurrentUser();
  const token = getAuthToken();
  
  if (!user || !token) {
    openAuthModal("login");
    return false;
  }
  
  try {
    await apiRequest(`/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    await loadCommentsFromServer(spotId);
    return true;

    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "删除评论失败");
    }
    
    await loadCommentsFromServer(spotId);
    return true;
  } catch (error) {
    console.error("Failed to delete comment:", error);
    alert(error.message || "删除评论失败");
    return false;
  }
}

function isLiked(spotId) {
  const user = getCurrentUser();
  if (!user) return false;
  
  const likes = getSpotLikes(spotId);
  const userId = user.id || user.username;
  return likes.includes(userId);
}

// 收藏功能
async function loadFavorites() {
  const token = getAuthToken();
  if (!token) {
    userFavorites = [];
    return;
  }

  try {
    const favoritesPayload = await apiRequest("/favorites", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    userFavorites = favoritesPayload.favorites || [];
  } catch (error) {
    console.error("Failed to load favorites:", error);
    userFavorites = [];
  }
}

function isFavorited(spotId) {
  return userFavorites.some(fav => fav.spotId === spotId);
}

async function addFavorite(spotId, spotName) {
  const user = getCurrentUser();
  const token = getAuthToken();

  if (!user || !token) {
    openAuthModal("login");
    return false;
  }

  try {
    await apiRequest("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ spotId, spotName })
    });
    await loadFavorites();
    if (activeModule === "profile") loadUserProfile();
    return true;

    const response = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ spotId, spotName })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "收藏失败");
    }

    await loadFavorites();
    return true;
  } catch (error) {
    console.error("Failed to add favorite:", error);
    alert(error.message || "收藏失败");
    return false;
  }
}

async function removeFavorite(spotId) {
  const user = getCurrentUser();
  const token = getAuthToken();

  if (!user || !token) {
    return false;
  }

  try {
    await apiRequest(`/favorites/${spotId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    await loadFavorites();
    if (activeModule === "profile") loadUserProfile();
    return true;

    const response = await fetch(`/api/favorites/${spotId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "取消收藏失败");
    }

    await loadFavorites();
    return true;
  } catch (error) {
    console.error("Failed to remove favorite:", error);
    alert(error.message || "取消收藏失败");
    return false;
  }
}

async function loadAndRenderUserComments() {
  const token = getAuthToken();
  if (!token) {
    myCommentsList.innerHTML = `<div class="profile-empty"><p>${t("loginFirst")}</p></div>`;
    return;
  }
  try {
    const data = await apiRequest("/user/comments", {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const comments = data.comments || [];
    if (comments.length === 0) {
      myCommentsList.innerHTML = `<div class="profile-empty"><p>${t("noCommentsYet")}</p></div>`;
      return;
    }
    myCommentsList.innerHTML = comments.map(comment => {
      const spot = spots.find(s => s.id === comment.spotId);
      const spotName = spot ? spotT(spot, 'name') : t("unknownSpot");
      const imageHtml = comment.image ? `
        <button type="button" class="comment-image profile-comment-image" onclick="openChatImageModal('${escapeJsString(comment.image)}')">
          <img src="${escapeHtml(comment.image)}" alt="评论配图" loading="lazy">
        </button>
      ` : "";
      return `
        <div class="comment-item">
          <div class="comment-spot">
            <span class="comment-spot-label">${t("spotLabel")}</span>
            <span class="comment-spot-name" data-spot="${comment.spotId}">${escapeHtml(spotName)}</span>
          </div>
          ${comment.content ? `<p class="comment-content">${escapeHtml(comment.content)}</p>` : ""}
          ${imageHtml}
          <span class="comment-time">${comment.createdAt || ""}</span>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Failed to load comments:", error);
    myCommentsList.innerHTML = `<div class="profile-empty"><p>${t("loading")}</p></div>`;
  }
}

async function loadAndRenderUserImages() {
  const token = getAuthToken();
  if (!token) {
    myImagesList.innerHTML = `<div class="profile-empty"><p>${t("loginFirst")}</p></div>`;
    return;
  }
  try {
    const data = await apiRequest("/user/images", {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const images = data.images || [];
    if (images.length === 0) {
      myImagesList.innerHTML = `<div class="profile-empty"><p>${t("noImagesYet")}</p></div>`;
      return;
    }
    myImagesList.innerHTML = images.map(img => {
      const spot = spots.find(s => s.id === img.spotId);
      const spotName = spot ? spotT(spot, 'name') : t("unknownSpot");
      return `
        <div class="image-item">
          <img src="${img.url}" alt="${spotName}" class="image-thumb" data-full="${img.url}" loading="lazy" onerror="imageFallback(this)">
          <div class="image-item-info">
            <span class="image-spot-name" data-spot="${img.spotId}">${escapeHtml(spotName)}</span>
            <span class="image-time">${img.createdAt ? new Date(img.createdAt).toLocaleString(currentLang === "zh" ? "zh-CN" : "en-US") : ""}</span>
          </div>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Failed to load images:", error);
    myImagesList.innerHTML = `<div class="profile-empty"><p>加载图片失败</p></div>`;
  }
}

async function loadAndRenderRecentHistory() {
  if (!recentHistoryList) return;
  const token = getAuthToken();
  if (!token) {
    recentHistoryList.innerHTML = `<div class="profile-empty"><p>请先登录后查看最近浏览。</p></div>`;
    return;
  }

  try {
    const data = await apiRequest("/user/history", {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const history = data.history || [];
    if (!history.length) {
      recentHistoryList.innerHTML = `<div class="profile-empty"><p>暂无最近浏览记录。</p></div>`;
      return;
    }

    recentHistoryList.innerHTML = history.map((item) => {
      const spot = spots.find((s) => s.id === item.spotId);
      if (!spot) return "";
      const time = item.visitedAt ? new Date(item.visitedAt).toLocaleString(currentLang === "zh" ? "zh-CN" : "en-US") : "";
      return `
        <div class="recent-history-item" data-spot="${spot.id}">
          <img src="${spot.image}" alt="${escapeHtml(spotT(spot, "name"))}" loading="lazy" onerror="imageFallback(this)">
          <div class="recent-history-info">
            <button type="button" class="recent-history-name" data-spot="${spot.id}">${escapeHtml(spotT(spot, "name"))}</button>
            <span>${escapeHtml(time)}</span>
          </div>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Failed to load recent history:", error);
    recentHistoryList.innerHTML = `<div class="profile-empty"><p>加载最近浏览失败</p></div>`;
  }
}

async function loadRecentHistoryAfterPendingVisit() {
  try {
    await latestVisitRequest;
  } catch {}
  return loadAndRenderRecentHistory();
}

async function loadUserProfile() {
  const user = getCurrentUser();
  const token = getAuthToken();

  if (!user || !token) {
    favoritesList.innerHTML = `
      <div class="favorites-empty">
        <p>${t("noFavLogin")}</p>
        <button class="go-to-login" type="button">${t("loginRegister")}</button>
      </div>
    `;

    document.querySelector(".go-to-login")?.addEventListener("click", () => {
      openAuthModal("login");
    });

    favCount.textContent = "0";
    commentCount.textContent = "0";
    imageCount.textContent = "0";
    myCommentsList.innerHTML = `<div class="profile-empty"><p>${t("noCommentLogin")}</p></div>`;
    myImagesList.innerHTML = `<div class="profile-empty"><p>${t("noImageLogin")}</p></div>`;
    if (recentHistoryList) recentHistoryList.innerHTML = `<div class="profile-empty"><p>请先登录后查看最近浏览。</p></div>`;
    return;
  }

  await loadFavorites();

  // 统计数据
  let profileStats = {
    favoritesCount: userFavorites.length,
    commentsCount: 0,
    likesCount: 0,
    imagesCount: 0
  };

  if (token) {
    try {
      const profile = await apiRequest("/profile", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      profileStats = {
        ...profileStats,
        ...(profile.stats || {})
      };
    } catch (error) {
      console.error("Failed to load profile stats:", error);
    }
  }

  favCount.textContent = profileStats.favoritesCount;
  commentCount.textContent = profileStats.commentsCount;
  imageCount.textContent = profileStats.imagesCount;
  renderProfileFavorites();
  await loadRecentHistoryAfterPendingVisit();
  loadAndRenderUserComments();
  loadAndRenderUserImages();
  profileLoaded = true;
}

function renderProfileFavorites() {
  if (userFavorites.length === 0) {
    favoritesList.innerHTML = `
      <div class="favorites-empty">
        <p>${t("noFavorites")}</p>
        <button class="go-to-map" type="button">${t("goToMap")}</button>
      </div>
    `;
    return;
  }

  favoritesList.innerHTML = userFavorites.map(fav => {
    const spot = spots.find(s => s.id === fav.spotId);
    if (!spot) return "";

    return `
      <div class="favorite-item">
        <img src="${spot.image}" alt="${spotT(spot, 'name')}" onerror="imageFallback(this)">
        <div class="favorite-item-info">
          <h4>${spotT(spot, 'name')}</h4>
          <div class="fav-meta">
            <span class="tag">${spotT(spot, 'type')}</span>
            <span class="tag">${spotT(spot, 'dynasty')}</span>
          </div>
          <p>${spotT(spot, 'intro')}</p>
        </div>
        <div class="favorite-actions">
          <button type="button" class="view-spot" data-spot="${spot.id}">${t("viewDetail2")}</button>
          <button type="button" class="remove-favorite" data-spot="${spot.id}">${t("unfavorite")}</button>
        </div>
      </div>
    `;
  }).join("");
}

async function init() {
  try {
    const admin = JSON.parse(localStorage.getItem("landscapeAdmin"));
    if (admin && adminModuleBtn) {
      adminModuleBtn.style.display = "";
      updateAuthView(null);
      preloadAdminData();
    } else {
      updateAuthView(JSON.parse(localStorage.getItem("landscapeUser")));
    }
  } catch (_error) {
    updateAuthView(null);
  }

  await loadFavorites();

  render();
  renderRouteSelectedList();
  fitToSpots(spots);
  selectSpot(spots[0].id, { openPopup: true, pan: false, module: "map" });

  if (selectedId) {
    await loadCommentsFromServer(selectedId);
  }

  // 后台预加载个人中心、聊天室和管理后台数据
  setTimeout(() => {
    const user = JSON.parse(localStorage.getItem("landscapeUser"));
    if (user) loadUserProfile();
    loadChatMessages();
  }, 2000);
}

// ==================== 路线规划 ====================
const routeSelectedIds = new Set();
const routePolylines = [];
const routeColors = ["#1a73e8", "#e8710a", "#0d9488", "#7c3aed", "#d92121", "#059669", "#c2410c", "#6366f1"];

const routeSelectedList = document.querySelector("#routeSelectedList");
const routeResults = document.querySelector("#routeResults");
const generateRoutesBtn = document.querySelector("#generateRoutes");
const clearRoutePlanBtn = document.querySelector("#clearRoutePlan");

function toggleRouteSpot(spotId) {
  if (routeSelectedIds.has(spotId)) {
    routeSelectedIds.delete(spotId);
  } else {
    routeSelectedIds.add(spotId);
  }
  renderRouteSelectedList();
  renderRouteSpotList();
  generateRoutesBtn.disabled = routeSelectedIds.size < 2;
}

async function loadRecommendedRoutes() {
  const container = document.querySelector("#recommendedRoutes");
  if (!container) return;

  try {
    const lToken = getAuthToken();
    const headers = {};
    if (lToken) headers["Authorization"] = `Bearer ${lToken}`;

    const res = await fetch("/api/recommended-routes", { headers });
    const data = await res.json();
    if (!data.routes) return;

    container.innerHTML = data.routes.map((route, idx) => {
      const rankLabel = idx < 3 ? ["🥇", "🥈", "🥉"][idx] : `#${idx + 1}`;
      const spotNames = route.spotIds.map(id => {
        const s = spots.find(sp => sp.id === id);
        return s ? spotT(s, 'name') : id;
      });
      return `
        <div class="rec-route-card" data-route-id="${route.id}">
          <div class="rec-route-top">
            <span class="rec-route-name">${escapeHtml(route.name)}</span>
            <span class="rec-route-rank">${rankLabel}</span>
          </div>
          <p class="rec-route-desc">${escapeHtml(route.description)}</p>
          <div class="rec-route-bottom">
            <span class="rec-route-spots">${spotNames.join(" → ")}</span>
            <button type="button" class="rec-route-like-btn ${route.liked ? "liked" : ""}" data-route-like="${route.id}">
              ${route.liked ? "❤" : "♡"} ${route.likeCount}
            </button>
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".rec-route-like-btn").forEach(btn => {
      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        const routeId = btn.dataset.routeLike;
        const lToken = getAuthToken();
        if (!lToken) { openAuthModal("login"); return; }

        const isLiked = btn.classList.contains("liked");
        const method = isLiked ? "DELETE" : "POST";
        try {
          const res = await fetch(`/api/recommended-routes/${routeId}/like`, {
            method,
            headers: { "Authorization": `Bearer ${lToken}` }
          });
          if (res.ok) {
            const result = await res.json();
            btn.classList.toggle("liked", result.liked);
            btn.innerHTML = `${result.liked ? "❤" : "♡"} ${result.likeCount}`;
          }
        } catch {}
      });
    });

    container.querySelectorAll(".rec-route-card").forEach(card => {
      card.addEventListener("click", () => {
        const routeId = card.dataset.routeId;
        const route = data.routes.find(r => r.id === routeId);
        if (!route) return;
        routeSelectedIds.clear();
        route.spotIds.forEach(id => routeSelectedIds.add(id));
        renderRouteSelectedList();
        renderRouteSpotList();
        generateRoutesBtn.disabled = routeSelectedIds.size < 2;
        generateRoutes();
      });
    });
  } catch (err) {
    container.innerHTML = '<p style="color:var(--muted);font-size:12px;">加载推荐路线失败</p>';
  }
}

function renderRouteSpotList() {
  if (!routeSpotList) return;
  routeSpotList.innerHTML = spots.map(spot => {
    const inRoute = routeSelectedIds.has(spot.id);
    return `
      <div class="route-spot-card">
        <img src="${spot.image}" alt="${spotT(spot, 'name')}" onerror="imageFallback(this)">
        <div class="route-spot-info">
          <h4>${escapeHtml(spotT(spot, 'name'))}</h4>
          <div class="tag-row">
            <span class="tag">${spotT(spot, 'type')}</span>
            <span class="tag">${spotT(spot, 'dynasty')}</span>
          </div>
        </div>
        <button type="button" class="route-add-btn ${inRoute ? "selected" : ""}" data-route-add="${spot.id}" title="${inRoute ? t("removeFromRoute") : t("addToRoute")}">${inRoute ? "−" : "+"}</button>
      </div>
    `;
  }).join("");
}

function renderRouteSelectedList() {
  if (routeSelectedIds.size === 0) {
    routeSelectedList.innerHTML = `<p class="route-empty">${t("noSelected")}</p>`;
    return;
  }
  routeSelectedList.innerHTML = [...routeSelectedIds].map(id => {
    const spot = spots.find(s => s.id === id);
    if (!spot) return "";
    return `
      <div class="route-selected-item">
        <span class="route-selected-name">${escapeHtml(spotT(spot, 'name'))}</span>
        <button type="button" class="route-remove-btn" data-route-spot="${spot.id}">×</button>
      </div>
    `;
  }).join("");
}

function haversineDistance(a, b) {
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function sortSpotsInRoute(group) {
  if (group.length <= 2) return group;
  const sorted = [group[0]];
  const remaining = group.slice(1);
  while (remaining.length > 0) {
    const last = sorted[sorted.length - 1];
    let nearestIdx = 0;
    let nearestDist = Infinity;
    for (let i = 0; i < remaining.length; i++) {
      const d = haversineDistance(last, remaining[i]);
      if (d < nearestDist) {
        nearestDist = d;
        nearestIdx = i;
      }
    }
    sorted.push(remaining.splice(nearestIdx, 1)[0]);
  }
  return sorted;
}

function clearRoutePolylines() {
  routePolylines.forEach(p => map.removeLayer(p));
  routePolylines.length = 0;
}

function generateRoutes() {
  clearRoutePolylines();
  routeResults.innerHTML = "";

  const selectedSpots = [...routeSelectedIds].map(id => spots.find(s => s.id === id)).filter(Boolean);
  if (selectedSpots.length < 2) return;

  const sorted = sortSpotsInRoute(selectedSpots);
  const color = "#2563eb";
  const points = sorted.map(s => [s.lat, s.lng]);

  const polyline = L.polyline(points, {
    color,
    weight: 4,
    opacity: 0.85,
    dashArray: "10 6"
  }).addTo(map);
  routePolylines.push(polyline);

  const startIcon = L.divIcon({
    className: "route-marker-icon",
    html: `<div style="background:${color};color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">${t("start")}</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  const endIcon = L.divIcon({
    className: "route-marker-icon",
    html: `<div style="background:${color};color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">${t("end")}</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  L.marker(points[0], { icon: startIcon }).addTo(map);
  L.marker(points[points.length - 1], { icon: endIcon }).addTo(map);

  const totalDist = sorted.reduce((sum, s, i) => i === 0 ? 0 : sum + haversineDistance(sorted[i - 1], s), 0);

  routeResults.innerHTML = `
    <div class="route-result-card" style="border-left: 4px solid ${color};">
      <div class="route-result-header">
        <span class="route-result-name" style="color:${color};">${t("recommendedRoute")}</span>
        <span class="route-result-dist">~ ${totalDist.toFixed(1)} ${t("km")}</span>
      </div>
      <div class="route-result-steps">
        ${sorted.map((s, i) => `
          <span class="route-step" data-spot="${s.id}">
            <span class="route-step-num" style="background:${color};">${i + 1}</span>
            ${escapeHtml(spotT(s, 'name'))}
          </span>
        `).join('<span class="route-step-arrow">→</span>')}
      </div>
    </div>
  `;

  map.fitBounds(L.latLngBounds(points).pad(0.15), { animate: true });
}

generateRoutesBtn.addEventListener("click", generateRoutes);

clearRoutePlanBtn.addEventListener("click", () => {
  routeSelectedIds.clear();
  clearRoutePolylines();
  routeResults.innerHTML = "";
  renderRouteSelectedList();
  renderRouteSpotList();
  generateRoutesBtn.disabled = true;
});

routeSelectedList.addEventListener("click", (event) => {
  const removeBtn = event.target.closest(".route-remove-btn");
  if (removeBtn) {
    toggleRouteSpot(removeBtn.dataset.routeSpot);
  }
});

routeResults.addEventListener("click", (event) => {
  const step = event.target.closest(".route-step[data-spot]");
  if (step) {
    selectSpot(step.dataset.spot, { module: "map", openPopup: true });
  }
});

if (routeSpotList) {
  routeSpotList.addEventListener("click", (event) => {
    const addBtn = event.target.closest("button[data-route-add]");
    if (addBtn) {
      toggleRouteSpot(addBtn.dataset.routeAdd);
      return;
    }
    const card = event.target.closest(".route-spot-card");
    if (card) {
      const spotId = card.querySelector("[data-route-add]")?.dataset.routeAdd;
      if (spotId) selectSpot(spotId, { module: "map", openPopup: true });
    }
  });
}

// 聊天室
let profileLoaded = false;
let chatLoaded = false;
let chatMessagesLoaded = false;
let adminDataLoaded = false;
let adminDataLoadingPromise = null;
const adminDataCache = {
  dashboard: null,
  users: [],
  comments: [],
  images: [],
  chat: [],
  ratings: []
};

async function loadChatMessages() {
  if (!chatMessages) return;
  try {
    const res = await fetch("/api/chat/messages?limit=100");
    const data = await res.json();
    if (!data.messages) return;
    chatMessages.innerHTML = "";
    data.messages.forEach(msg => appendChatMessage(msg));
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatMessagesLoaded = true;
    if (!chatLoaded) {
      connectChatSSE();
      chatLoaded = true;
    }
  } catch {
    chatMessages.innerHTML = '<div class="profile-empty"><p>' + t("loading") + '</p></div>';
  }
}

function appendChatMessage(msg) {
  if (!chatMessages) return;
  const currentUser = getCurrentUser();
  const myId = currentUser ? currentUser.id : null;
  const isSelf = myId && msg.userId === myId;
  const time = new Date(msg.createdAt).toLocaleTimeString(currentLang === "zh" ? "zh-CN" : "en-US", { hour: "2-digit", minute: "2-digit" });

  const div = document.createElement("div");
  div.className = `chat-msg${isSelf ? " self" : ""}`;
  const imageHtml = msg.image ? `<div class="chat-msg-image"><img src="${msg.image}" alt="image" loading="lazy" onclick="openChatImageModal('${msg.image.replace(/'/g, "\\'")}')"></div>` : "";
  div.innerHTML = `
    <div class="chat-msg-header">
      <span class="chat-msg-user">${escapeHtml(msg.username)}</span>
      <span class="chat-msg-time">${time}</span>
    </div>
    ${msg.content ? `<div class="chat-msg-content">${escapeHtml(msg.content)}</div>` : ""}
    ${imageHtml}
  `;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function connectChatSSE() {
  const es = new EventSource("/api/chat/stream");
  es.onmessage = (e) => {
    try {
      const msg = JSON.parse(e.data);
      appendChatMessage(msg);
    } catch {}
  };
  es.onerror = () => {
    es.close();
    setTimeout(connectChatSSE, 3000);
  };
}

async function sendChatMessage() {
  const user = getCurrentUser();
  const token = getAuthToken();
  if (!user || !token) { openAuthModal("login"); return; }
  const displayName = user.username;

  const content = chatInput.value.trim();
  if (!content && !chatPendingImage) return;

  chatInput.value = "";
  const imageData = chatPendingImage;
  clearChatImagePreview();

  try {
    await fetch("/api/chat/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ content, image: imageData })
    });
  } catch {
    chatInput.value = content;
  }
}

function clearChatImagePreview() {
  chatPendingImage = null;
  if (chatImagePreview) chatImagePreview.style.display = "none";
  if (chatPreviewImg) chatPreviewImg.src = "";
  if (chatImageInput) chatImageInput.value = "";
}

if (chatImageInput) {
  chatImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      alert(t("chatImgSizeLimit"));
      chatImageInput.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      chatPendingImage = reader.result;
      chatPreviewImg.src = reader.result;
      chatImagePreview.style.display = "";
    };
    reader.readAsDataURL(file);
  });
}

if (chatImageRemove) chatImageRemove.addEventListener("click", clearChatImagePreview);

// 聊天图片放大
const chatImageModal = document.querySelector("#chatImageModal");
const chatImageModalImg = document.querySelector("#chatImageModalImg");
const chatImageModalClose = document.querySelector("#chatImageModalClose");

function openChatImageModal(src) {
  if (!chatImageModal || !chatImageModalImg) return;
  chatImageModalImg.src = src;
  chatImageModal.classList.add("active");
}

function closeChatImageModal() {
  if (chatImageModal) chatImageModal.classList.remove("active");
}

if (chatImageModalClose) chatImageModalClose.addEventListener("click", closeChatImageModal);
if (chatImageModal) chatImageModal.addEventListener("click", (e) => {
  if (e.target === chatImageModal) closeChatImageModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeChatImageModal(); });

// 聊天气泡主题
const chatThemes = [
  { id: "default", name: "默认", color: "#a8a29e" },
  { id: "sakura", name: "樱花粉", color: "#f472b6" },
  { id: "lavender", name: "薰衣草", color: "#8b5cf6" },
  { id: "ocean", name: "海洋蓝", color: "#38bdf8" },
  { id: "meadow", name: "草地绿", color: "#4ade80" },
  { id: "sunset", name: "暖阳橙", color: "#fb923c" },
  { id: "honey", name: "蜜糖黄", color: "#facc15" },
  { id: "cherry", name: "樱桃红", color: "#f87171" }
];

const chatThemeToggle = document.querySelector("#chatThemeToggle");
const chatThemePanel = document.querySelector("#chatThemePanel");
const chatThemeGrid = document.querySelector("#chatThemeGrid");
let currentChatTheme = localStorage.getItem("chatTheme") || "default";

function applyChatTheme(themeId) {
  currentChatTheme = themeId;
  localStorage.setItem("chatTheme", themeId);
  if (chatMessages) {
    if (themeId === "default") {
      chatMessages.removeAttribute("data-theme");
    } else {
      chatMessages.setAttribute("data-theme", themeId);
    }
  }
  document.querySelectorAll(".chat-theme-opt").forEach(opt => {
    opt.classList.toggle("active", opt.dataset.theme === themeId);
  });
}

function renderChatThemes() {
  if (!chatThemeGrid) return;
  chatThemeGrid.innerHTML = chatThemes.map(t =>
    `<button type="button" class="chat-theme-opt ${t.id === currentChatTheme ? "active" : ""}" data-theme="${t.id}" style="background:${t.color};">${t.name}</button>`
  ).join("");
  chatThemeGrid.querySelectorAll(".chat-theme-opt").forEach(opt => {
    opt.addEventListener("click", () => applyChatTheme(opt.dataset.theme));
  });
}

if (chatThemeToggle) {
  chatThemeToggle.addEventListener("click", () => {
    if (!chatThemePanel) return;
    const show = chatThemePanel.style.display === "none";
    chatThemePanel.style.display = show ? "" : "none";
    if (show && !chatThemeGrid.children.length) renderChatThemes();
  });
}

applyChatTheme(currentChatTheme);

// 聊天背景底图
const chatBgs = [
  { id: "default", name: "默认", color: "#f5f3ed", emoji: "💬" },
  { id: "sakura", name: "樱花粉", color: "#fff0f5", emoji: "🌸" },
  { id: "star", name: "星空夜", color: "#1a1a3e", emoji: "🌙" },
  { id: "ocean", name: "海底世界", color: "#e0f4ff", emoji: "🐚" },
  { id: "garden", name: "花园小径", color: "#f0fdf4", emoji: "🌿" },
  { id: "heart", name: "可爱甜心", color: "#fff0f6", emoji: "💖" },
  { id: "rainbow", name: "彩虹糖", color: "#fef2f2", emoji: "🌈" },
  { id: "cloud", name: "蓝天白云", color: "#e0f2fe", emoji: "☁️" },
  { id: "kitty", name: "Hello Kitty", color: "#fff0f5", emoji: "🐱" },
  { id: "minion", name: "小黄人", color: "#fffde0", emoji: "🍌" },
  { id: "totoro", name: "龙猫", color: "#f0ede8", emoji: "🌲" },
  { id: "panda", name: "熊猫", color: "#f5f5f5", emoji: "🐼" },
  { id: "frog", name: "青蛙", color: "#f0faf0", emoji: "🐸" },
  { id: "bunny", name: "兔子", color: "#fff5f7", emoji: "🐰" }
];

const chatBgToggle = document.querySelector("#chatBgToggle");
const chatBgPanel = document.querySelector("#chatBgPanel");
const chatBgGrid = document.querySelector("#chatBgGrid");
let currentChatBg = localStorage.getItem("chatBg") || "default";

function applyChatBg(bgId) {
  currentChatBg = bgId;
  localStorage.setItem("chatBg", bgId);
  if (chatMessages) {
    if (bgId === "default") {
      chatMessages.removeAttribute("data-bg");
    } else {
      chatMessages.setAttribute("data-bg", bgId);
    }
  }
  document.querySelectorAll(".chat-bg-opt").forEach(opt => {
    opt.classList.toggle("active", opt.dataset.bg === bgId);
  });
  document.querySelectorAll(".chat-char").forEach(c => {
    c.style.display = c.dataset.char === bgId ? "" : "none";
  });
}

function renderChatBgs() {
  if (!chatBgGrid) return;
  chatBgGrid.innerHTML = chatBgs.map(b =>
    `<button type="button" class="chat-theme-opt chat-bg-opt ${b.id === currentChatBg ? "active" : ""}" data-bg="${b.id}" style="background:${b.color};${b.id === 'star' ? 'color:#fff;' : ''}">${b.emoji} ${b.name}</button>`
  ).join("");
  chatBgGrid.querySelectorAll(".chat-bg-opt").forEach(opt => {
    opt.addEventListener("click", () => applyChatBg(opt.dataset.bg));
  });
}

if (chatBgToggle) {
  chatBgToggle.addEventListener("click", () => {
    if (!chatBgPanel) return;
    const show = chatBgPanel.style.display === "none";
    chatBgPanel.style.display = show ? "" : "none";
    if (show && !chatBgGrid.children.length) renderChatBgs();
  });
}

applyChatBg(currentChatBg);

// 表情包
const emojiData = [
  { name: "笑脸", tab: "😊", emojis: "😀😃😄😁😆🥹😅🤣😂🙂😊😇🥰😍🤩😘😗😚😋😛🤔🤫🤭🫡🤐😐😶😏😒🙄😬🤥😌😔😪🤤😴😷🤒🤕🥴😵🤯🤠🥳🥸😎🤓🧐😤😡🤬😈👿💀☠️💩🤡👹👺👻👽🤖😺😸😻🙈🙉🙊" },
  { name: "手势", tab: "👋", emojis: "👋🤚🖐️✋🖖👌🤌🤏✌️🤞🫰🤟🤘🤙🫵👈👉👆🖕👇☝️🫵👍👎✊👊🤛🤜👏🫶🙌👐🤲🤝🙏💪🦾" },
  { name: "动物", tab: "🐱", emojis: "🐶🐱🐭🐹🐰🦊🐻🐼🐻‍❄️🐨🐯🦁🐮🐷🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🪱🐛🦋🐌🐞🐜🪳🦟🦗🕷️🐢🐍🦎🦂🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦣🦛🦏🐪🐫🦒🦘🦬🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🐩🦮🐈" },
  { name: "食物", tab: "🍔", emojis: "🍎🍐🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑🥭🍍🥥🥝🍅🍆🥑🥦🥬🥒🌶️🫑🌽🥕🫒🧄🧅🥔🍠🥐🥯🍞🥖🥨🧀🥚🍳🧈🥞🧇🥓🥩🍗🍖🦴🌭🍔🍟🍕🫓🥪🥙🧆🌮🌯🫔🥗🥘🫕🥫🍝🍜🍲🍛🍣🍱🥟🦪🦐🍙🍚🍘🍥🥠🥮🍢🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍿🧂🥤🧋🧃🍶🍺🍻🥂🍷🥃🍸🍹🧊🥄🍴🍽️🥣🥡🥢" },
  { name: "活动", tab: "⚽", emojis: "⚽⚾🥎🏀🏐🏉🎾🥏🎳🏏🪃🏑🏒🥍🏓🏸🥊🥋🥅⛳⛸️🎣🤿🎿🛷🥌🎯🪀🪁🎱🔮🪄🧿🎮🎰🎲🧩🧸🪅🪆♠️♥️♦️♣️♟️🃏🀄🎴🎭🖼️🎨🧵🪡🧶🪢" },
  { name: "旅行", tab: "✈️", emojis: "🚗🚕🚌🏎️🚓🚑🚒🚐🛻🚚🚛🚜🦯🦽🦼🛴🚲🛵🏍️🛺🚨🚔🚍🚘🚖🚡🚠🚟🚃🚋🚞🚝🚄🚅🚈🚂🚆🚇🚊🚉✈️🛩️🛫🛬🪂💺🛰️🚀🛸🚢⛵🛶🚤🛥️🛳️⛴️🗼🏟️🎡🎢🏰🏯🏟️🗻🏔️🏕️🏖️🏜️🏝️🏞️🌋⛰️" },
  { name: "物品", tab: "💡", emojis: "⌚📱📲💻⌨️🖥️🖨️🖱️🖲️🕹️🗜️💽💾💿📀📼📷📸📹🎥📽️🔍🔎🔬🔭📡💊💉🩹🩺🚪🛏️🛋️🪑🚽🪠🚿🛁🪒🧴🧷🧹🧺🧻🪣🧼🪥🧽🪦🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩱🩲🩳👙👚🎀🎗️🪢" },
  { name: "爱心", tab: "❤️", emojis: "❤️🧡💛💚💙💜🖤🤍🤎💔❣️💕💞💓💗💖💘💝💟☮️✝️☪️🕉️☸️✡️🔯🕎☯️☦️🛐⛎♈♉♊♋♌♍♎♏♐♑♒♓🆔⚛️🉑☢️☣️📴📳🈶🈚🈸🈺🈷️✴️🆚💮🉐㊙️㊗️🈴🈵🈹🈲🅰️🅱️🆎🆑🅾️🆘❌⭕🛑⛔📛🚫💯💢♨️🚷🚯🚳🚱🔞📵🚭" },
  { name: "旗帜", tab: "🏁", emojis: "🏁🚩🎌🏴🏳️🏳️‍🌈🏳️‍⚧️🏴‍☠️🇨🇳🇺🇸🇯🇵🇰🇷🇬🇧🇫🇷🇩🇪🇮🇹🇷🇺🇧🇷🇮🇳🇦🇺🇨🇦🇪🇸🇲🇽🇳🇱🇸🇪🇨🇭" }
];

const chatEmojiBtn = document.querySelector("#chatEmojiBtn");
const chatEmojiPanel = document.querySelector("#chatEmojiPanel");
const emojiTabs = document.querySelector("#emojiTabs");
const emojiGrid = document.querySelector("#emojiGrid");
let currentEmojiCat = 0;

function renderEmojiTabs() {
  if (!emojiTabs) return;
  emojiTabs.innerHTML = emojiData.map((cat, i) =>
    `<button type="button" class="emoji-tab ${i === currentEmojiCat ? 'active' : ''}" data-cat="${i}">${cat.tab}</button>`
  ).join("");
  emojiTabs.querySelectorAll(".emoji-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      currentEmojiCat = Number(tab.dataset.cat);
      renderEmojiTabs();
      renderEmojiGrid();
    });
  });
}

function renderEmojiGrid() {
  if (!emojiGrid) return;
  const emojis = emojiData[currentEmojiCat].emojis;
  emojiGrid.innerHTML = [...emojis].map(e =>
    `<button type="button" class="emoji-item">${e}</button>`
  ).join("");
  emojiGrid.querySelectorAll(".emoji-item").forEach(btn => {
    btn.addEventListener("click", () => {
      if (chatInput) {
        chatInput.value += btn.textContent;
        chatInput.focus();
      }
    });
  });
}

if (chatEmojiBtn) {
  chatEmojiBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!chatEmojiPanel) return;
    const show = chatEmojiPanel.style.display === "none";
    chatEmojiPanel.style.display = show ? "" : "none";
    if (show && !emojiTabs.children.length) {
      renderEmojiTabs();
      renderEmojiGrid();
    }
  });
}

if (chatEmojiPanel) {
  chatEmojiPanel.addEventListener("click", (e) => e.stopPropagation());
}

document.addEventListener("click", (e) => {
  if (chatEmojiPanel && chatEmojiPanel.style.display !== "none" &&
      !chatEmojiPanel.contains(e.target) && e.target !== chatEmojiBtn && !chatEmojiBtn.contains(e.target)) {
    chatEmojiPanel.style.display = "none";
  }
});

if (chatSendBtn) chatSendBtn.addEventListener("click", sendChatMessage);
if (chatInput) chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendChatMessage();
});

// 管理后台
function getAdminToken() {
  return localStorage.getItem("landscapeAdminToken") || "";
}

async function adminRequest(path, options = {}) {
  const headers = { ...options.headers, "Authorization": `Bearer ${getAdminToken()}` };
  const res = await fetch(`/api${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "请求失败");
  return data;
}

const adminTabBtns = document.querySelectorAll(".admin-tab-btn");
adminTabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    adminTabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".admin-panel").forEach(p => p.style.display = "none");
    const panel = document.getElementById(btn.dataset.panel);
    if (panel) panel.style.display = "";
    applyAdminFilters();
  });
});

function getSpotDisplayName(spotId) {
  const spot = spots.find((item) => item.id === spotId);
  return spot ? spotT(spot, "name") : spotId;
}

function populateAdminSpotFilters() {
  const options = spots
    .map((spot) => `<option value="${escapeHtml(spot.id)}">${escapeHtml(spotT(spot, "name"))}</option>`)
    .join("");
  const commentFilter = document.querySelector("#adminCommentSpotFilter");
  const imageFilter = document.querySelector("#adminImageSpotFilter");
  if (commentFilter && commentFilter.options.length <= 1) commentFilter.insertAdjacentHTML("beforeend", options);
  if (imageFilter && imageFilter.options.length <= 1) imageFilter.insertAdjacentHTML("beforeend", options);
}

function filterAdminUsers(users) {
  const keyword = document.querySelector("#adminUserSearch")?.value.trim().toLowerCase() || "";
  if (!keyword) return users;
  return users.filter((user) => {
    const haystack = `${user.username || ""} ${user.email || ""}`.toLowerCase();
    return haystack.includes(keyword);
  });
}

function filterAdminBySpot(items, selector) {
  const spotId = document.querySelector(selector)?.value || "";
  if (!spotId) return items;
  return items.filter((item) => item.spotId === spotId);
}

function filterAdminRatings(ratings) {
  const value = document.querySelector("#adminRatingFilter")?.value || "";
  if (!value) return ratings;
  const threshold = Number(value);
  if (threshold === 5) return ratings.filter((rating) => Number(rating.rating) === 5);
  if (threshold === 2) return ratings.filter((rating) => Number(rating.rating) <= 2);
  return ratings.filter((rating) => Number(rating.rating) >= threshold);
}

function applyAdminFilters() {
  renderAdminDashboard(adminDataCache.dashboard);
  renderAdminUsers(filterAdminUsers(adminDataCache.users));
  renderAdminComments(filterAdminBySpot(adminDataCache.comments, "#adminCommentSpotFilter"));
  renderAdminImages(filterAdminBySpot(adminDataCache.images, "#adminImageSpotFilter"));
  renderAdminChat(adminDataCache.chat);
  renderAdminRatings(filterAdminRatings(adminDataCache.ratings));
}

function setAdminRefreshLoading(isLoading) {
  const button = document.querySelector("#adminRefreshBtn");
  if (!button) return;
  button.disabled = isLoading;
  button.textContent = isLoading ? "刷新中..." : "刷新";
}

document.querySelector("#adminUserSearch")?.addEventListener("input", applyAdminFilters);
document.querySelector("#adminCommentSpotFilter")?.addEventListener("change", applyAdminFilters);
document.querySelector("#adminImageSpotFilter")?.addEventListener("change", applyAdminFilters);
document.querySelector("#adminRatingFilter")?.addEventListener("change", applyAdminFilters);
document.querySelector("#adminRefreshBtn")?.addEventListener("click", () => {
  loadAdminData({ force: true, showLoading: true });
});

async function loadAdminData(options = {}) {
  const { force = false, showLoading = false } = options;
  const admin = JSON.parse(localStorage.getItem("landscapeAdmin"));
  if (!admin) return;
  if (adminDataLoaded && !force) return;
  if (adminDataLoadingPromise) return adminDataLoadingPromise;

  adminDataLoadingPromise = (async () => {
    try {
      if (showLoading) setAdminRefreshLoading(true);
      const [dashboardData, usersData, commentsData, imagesData, chatData, ratingsData] = await Promise.all([
        adminRequest("/admin/dashboard"),
        adminRequest("/admin/users"),
        adminRequest("/admin/comments"),
        adminRequest("/admin/images"),
        adminRequest("/admin/chat"),
        adminRequest("/admin/ratings")
      ]);
      adminDataCache.dashboard = dashboardData;
      adminDataCache.users = usersData.users || [];
      adminDataCache.comments = commentsData.comments || [];
      adminDataCache.images = imagesData.images || [];
      adminDataCache.chat = chatData.messages || [];
      adminDataCache.ratings = ratingsData.ratings || [];
      populateAdminSpotFilters();
      applyAdminFilters();
      adminDataLoaded = true;
    } catch (err) {
      console.error("Failed to load admin data:", err);
      if (showLoading) alert(err.message || "刷新失败");
    } finally {
      if (showLoading) setAdminRefreshLoading(false);
      adminDataLoadingPromise = null;
    }
  })();

  return adminDataLoadingPromise;
}

function preloadAdminData() {
  if (!getAdminToken()) return;
  loadAdminData();
}

function renderAdminDashboard(data) {
  const el = document.querySelector("#adminDashboardContent");
  if (!el) return;
  if (!data) {
    el.innerHTML = `<div class="profile-loading">${t("loading")}</div>`;
    return;
  }

  const totals = data.totals || {};
  const topSpots = data.topSpots || [];
  const topHtml = topSpots.length ? topSpots.map((item, index) => `
    <div class="admin-top-spot">
      <span class="admin-top-rank">#${index + 1}</span>
      <span class="admin-top-name">${escapeHtml(getSpotDisplayName(item.spotId))}</span>
      <strong>${Number(item.count || 0)}</strong>
    </div>
  `).join("") : `<div class="profile-empty"><p>暂无今日访问数据</p></div>`;

  el.innerHTML = `
    <div class="admin-metric-grid">
      <div class="admin-metric-card">
        <span>用户数</span>
        <strong>${Number(totals.users || 0)}</strong>
      </div>
      <div class="admin-metric-card">
        <span>评论数</span>
        <strong>${Number(totals.comments || 0)}</strong>
      </div>
      <div class="admin-metric-card">
        <span>图片数</span>
        <strong>${Number(totals.images || 0)}</strong>
      </div>
      <div class="admin-metric-card">
        <span>今日访问</span>
        <strong>${Number(totals.todayVisits || 0)}</strong>
      </div>
    </div>
    <div class="admin-dashboard-section">
      <h4>热门景点 Top 5</h4>
      <div class="admin-top-list">${topHtml}</div>
    </div>
  `;
}

function renderAdminUsers(users) {
  const el = document.querySelector("#adminUserList");
  if (!el) return;
  if (!users.length) { el.innerHTML = `<div class="profile-empty"><p>${t("noUsers")}</p></div>`; return; }
  el.innerHTML = users.map(u => `
    <div class="admin-item">
      <div class="admin-item-info">
        <div class="admin-item-name">${escapeHtml(u.username)}</div>
        <div class="admin-item-meta">${escapeHtml(u.email)} · ${u.createdAt ? new Date(u.createdAt).toLocaleDateString(currentLang === "zh" ? "zh-CN" : "en-US") : ""}</div>
      </div>
      <button type="button" class="admin-delete-btn" data-admin-delete-user="${u.id}">${t("delete")}</button>
    </div>
  `).join("");
}

function renderAdminComments(comments) {
  const el = document.querySelector("#adminCommentList");
  if (!el) return;
  if (!comments.length) { el.innerHTML = `<div class="profile-empty"><p>${t("noCommentsAdmin")}</p></div>`; return; }
  el.innerHTML = comments.map(c => {
    const imageHtml = c.image ? `
      <button type="button" class="comment-image admin-comment-image" onclick="openChatImageModal('${escapeJsString(c.image)}')">
        <img src="${escapeHtml(c.image)}" alt="评论配图" loading="lazy">
      </button>
    ` : "";
    return `
    <div class="admin-item">
      <div class="admin-item-info">
        <div class="admin-item-name">${escapeHtml(c.username || t("unknownUser"))} · ${escapeHtml(getSpotDisplayName(c.spotId))}</div>
        ${c.content ? `<div class="admin-item-meta">${escapeHtml(c.content)}</div>` : ""}
        ${imageHtml}
      </div>
      <button type="button" class="admin-delete-btn" data-admin-delete-comment="${c.id}">${t("delete")}</button>
    </div>
  `;
  }).join("");
}

function renderAdminImages(images) {
  const el = document.querySelector("#adminImageList");
  if (!el) return;
  if (!images.length) { el.innerHTML = `<div class="profile-empty"><p>${t("noImagesAdmin")}</p></div>`; return; }
  el.innerHTML = images.map(img => {
    const imageUrl = img.url || "";
    const safeImageUrl = escapeHtml(imageUrl);
    const openImage = imageUrl.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    return `
    <div class="admin-item admin-image-item">
      <button type="button" class="admin-image-thumb" ${imageUrl ? `onclick="openChatImageModal('${openImage}')"` : "disabled"}>
        ${imageUrl ? `<img src="${safeImageUrl}" alt="${escapeHtml(getSpotDisplayName(img.spotId))}" loading="lazy" onerror="imageFallback(this)">` : `<span>${t("noImagesAdmin")}</span>`}
      </button>
      <div class="admin-item-info">
        <div class="admin-item-name">${escapeHtml(img.username || t("unknownUser"))} · ${escapeHtml(getSpotDisplayName(img.spotId))}</div>
        <div class="admin-item-meta">${img.createdAt ? new Date(img.createdAt).toLocaleDateString(currentLang === "zh" ? "zh-CN" : "en-US") : ""}</div>
      </div>
      <button type="button" class="admin-delete-btn" data-admin-delete-image="${img.id}">${t("delete")}</button>
    </div>
  `;
  }).join("");
}

function renderAdminChat(messages) {
  const el = document.querySelector("#adminChatList");
  if (!el) return;
  if (!messages.length) { el.innerHTML = `<div class="profile-empty"><p>${t("noChat")}</p></div>`; return; }
  el.innerHTML = messages.map(m => {
    const time = m.createdAt ? new Date(m.createdAt).toLocaleTimeString(currentLang === "zh" ? "zh-CN" : "en-US", {hour:"2-digit", minute:"2-digit"}) : "";
    const imageHtml = m.image ? `<img src="${m.image}" class="admin-chat-img" alt="image" onclick="openChatImageModal('${m.image.replace(/'/g, "\\'")}')" style="cursor:pointer;" />` : "";
    return `
      <div class="admin-item">
        <div class="admin-item-info">
          <div class="admin-item-name">${escapeHtml(m.username || t("unknownUser"))}</div>
          <div class="admin-item-meta">${escapeHtml(m.content || "")} ${imageHtml} · ${time}</div>
        </div>
        <button type="button" class="admin-delete-btn" data-admin-delete-chat="${m.id}">${t("delete")}</button>
      </div>
    `;
  }).join("");
}

function renderAdminRatings(ratings) {
  const el = document.querySelector("#adminRatingList");
  if (!el) return;
  if (!ratings.length) { el.innerHTML = `<div class="profile-empty"><p>${t("noRatings")}</p></div>`; return; }
  el.innerHTML = ratings.map(r => {
    const time = r.createdAt ? new Date(r.createdAt).toLocaleTimeString(currentLang === "zh" ? "zh-CN" : "en-US", {hour:"2-digit", minute:"2-digit"}) : "";
    const stars = "★".repeat(Math.floor(r.rating)) + (r.rating % 1 !== 0 ? "☆" : "");
    return `
      <div class="admin-item">
        <div class="admin-item-info">
          <div class="admin-item-name">${escapeHtml(r.username || t("unknownUser"))} · <span style="color:#f5a623">${r.rating}${currentLang === "zh" ? "分" : ""}</span></div>
          <div class="admin-item-meta">${t("spotLabelShort")} ${escapeHtml(getSpotDisplayName(r.spotId))} · ${time}</div>
        </div>
        <button type="button" class="admin-delete-btn" data-admin-delete-rating="${r.id}">${t("delete")}</button>
      </div>
    `;
  }).join("");
}

document.addEventListener("click", async (e) => {
  const admin = JSON.parse(localStorage.getItem("landscapeAdmin"));
  if (!admin) return;

  const userId = e.target.closest("[data-admin-delete-user]")?.dataset.adminDeleteUser;
  if (userId && confirm(t("confirmDeleteUser"))) {
    try {
      await adminRequest(`/admin/users/${userId}`, { method: "DELETE" });
      adminDataCache.users = adminDataCache.users.filter((user) => user.id !== userId);
      applyAdminFilters();
    } catch (err) { alert(err.message); }
  }

  const commentId = e.target.closest("[data-admin-delete-comment]")?.dataset.adminDeleteComment;
  if (commentId && confirm(t("confirmDeleteComment"))) {
    try {
      await adminRequest(`/admin/comments/${commentId}`, { method: "DELETE" });
      adminDataCache.comments = adminDataCache.comments.filter((comment) => comment.id !== commentId);
      applyAdminFilters();
    } catch (err) { alert(err.message); }
  }

  const imageId = e.target.closest("[data-admin-delete-image]")?.dataset.adminDeleteImage;
  if (imageId && confirm(t("confirmDeleteImage"))) {
    try {
      await adminRequest(`/admin/images/${imageId}`, { method: "DELETE" });
      adminDataCache.images = adminDataCache.images.filter((image) => image.id !== imageId);
      applyAdminFilters();
    } catch (err) { alert(err.message); }
  }

  const chatId = e.target.closest("[data-admin-delete-chat]")?.dataset.adminDeleteChat;
  if (chatId && confirm(t("confirmDeleteChat"))) {
    try {
      await adminRequest(`/admin/chat/${chatId}`, { method: "DELETE" });
      adminDataCache.chat = adminDataCache.chat.filter((message) => message.id !== chatId);
      applyAdminFilters();
    } catch (err) { alert(err.message); }
  }

  const ratingId = e.target.closest("[data-admin-delete-rating]")?.dataset.adminDeleteRating;
  if (ratingId && confirm(t("confirmDeleteRating"))) {
    try {
      await adminRequest(`/admin/ratings/${ratingId}`, { method: "DELETE" });
      adminDataCache.ratings = adminDataCache.ratings.filter((rating) => rating.id !== ratingId);
      applyAdminFilters();
    } catch (err) { alert(err.message); }
  }
});

// ===== Statistics Charts =====
const PIE_COLORS = ["#e74c3c","#e67e22","#f1c40f","#2ecc71","#1abc9c","#3498db","#9b59b6","#34495e","#e91e63","#00bcd4","#8bc34a","#ff9800"];
let currentStatsMode = "day";

function loadStatsData() {
  fetchStatsPie(currentStatsMode);
  fetchStatsRanking();
}

function fetchStatsPie(mode) {
  currentStatsMode = mode;
  document.querySelectorAll(".stats-mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  fetch(apiUrl(`/stats/visits?mode=${mode}`))
    .then(r => r.json())
    .then(data => renderPieChart(data.visits || []))
    .catch(() => renderPieChart([]));
}

function fetchStatsRanking() {
  fetch(apiUrl("/stats/ranking"))
    .then(r => r.json())
    .then(data => renderRanking(data.visits || []))
    .catch(() => renderRanking([]));
}

function renderPieChart(visits) {
  const canvas = document.getElementById("statsPieCanvas");
  const legend = document.getElementById("statsPieLegend");
  if (!canvas || !legend) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2, r = Math.min(cx, cy) - 30;
  ctx.clearRect(0, 0, w, h);

  if (!visits.length) {
    ctx.fillStyle = "#999";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(t("statsNoData"), cx, cy);
    legend.innerHTML = "";
    return;
  }

  const total = visits.reduce((s, v) => s + v.count, 0);
  let startAngle = -Math.PI / 2;

  const usedSpots = spots.filter(s => visits.find(v => v._id === s.id));
  const allEntries = visits.map(v => {
    const spot = spots.find(s => s.id === v._id);
    return { name: spot ? spotT(spot, "name") : v._id, count: v.count };
  });

  let legendHTML = `<div class="stats-pie-total"><strong>${total}</strong> ${t("statsVisits")}</div>`;
  allEntries.forEach((entry, i) => {
    const sliceAngle = (entry.count / total) * 2 * Math.PI;
    const color = PIE_COLORS[i % PIE_COLORS.length];

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (sliceAngle > 0.15) {
      const midAngle = startAngle + sliceAngle / 2;
      const tx = cx + Math.cos(midAngle) * (r * 0.65);
      const ty = cy + Math.sin(midAngle) * (r * 0.65);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 13px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(entry.count, tx, ty);
    }

    startAngle += sliceAngle;
    legendHTML += `<div class="stats-pie-legend-item"><span class="stats-pie-dot" style="background:${color}"></span><span class="stats-pie-label">${entry.name}</span><span class="stats-pie-val">${entry.count}</span></div>`;
  });

  legend.innerHTML = legendHTML;
}

function renderRanking(visits) {
  const list = document.getElementById("statsRankList");
  if (!list) return;

  if (!visits.length) {
    list.innerHTML = `<p class="empty-message">${t("statsNoData")}</p>`;
    return;
  }

  const maxCount = visits[0]?.count || 1;
  list.innerHTML = visits.map((v, i) => {
    const spot = spots.find(s => s.id === v._id);
    const name = spot ? spotT(spot, "name") : v._id;
    const pct = Math.round((v.count / maxCount) * 100);
    const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}`;
    return `<div class="stats-rank-item">
      <span class="stats-rank-pos">${medal}</span>
      <div class="stats-rank-info">
        <div class="stats-rank-name">${name}</div>
        <div class="stats-rank-bar-wrap"><div class="stats-rank-bar" style="width:${pct}%"></div></div>
      </div>
      <span class="stats-rank-count">${v.count} ${t("statsVisits")}</span>
    </div>`;
  }).join("");
}

// Stats mode button listeners
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".stats-mode-btn");
  if (btn && btn.dataset.mode) {
    fetchStatsPie(btn.dataset.mode);
  }
});

// ===== Mobile Sidebar Toggle =====
const sidebarToggleBtn = document.getElementById("sidebarToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarEl = document.querySelector(".sidebar");

function openSidebar() {
  sidebarEl.classList.add("open");
  sidebarToggleBtn.classList.add("active");
  sidebarOverlay.classList.add("visible");
}

function closeSidebar() {
  sidebarEl.classList.remove("open");
  sidebarToggleBtn.classList.remove("active");
  sidebarOverlay.classList.remove("visible");
}

if (sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener("click", () => {
    if (sidebarEl.classList.contains("open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}

// Recalculate map size when sidebar closes
if (typeof map !== "undefined") {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      mobileDetailCollapsed = false;
      detailPanel.classList.remove("collapsed");
    }
    setTimeout(() => map.invalidateSize(), 350);
  });
}

init();
