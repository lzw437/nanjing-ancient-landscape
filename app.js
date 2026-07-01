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
  "标准": L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
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

let currentLayerName = "标准";
baseLayers["标准"].addTo(map);

const LayerSwitcher = L.Control.extend({
  options: { position: "topleft" },
  onAdd: function () {
    const container = L.DomUtil.create("div", "layer-switcher");
    const names = ["标准", "卫星", "地形"];
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
const myCommentsList = document.querySelector("#myCommentsList");
const myImagesList = document.querySelector("#myImagesList");
const favCount = document.querySelector("#favCount");
const commentCount = document.querySelector("#commentCount");
const imageCount = document.querySelector("#imageCount");
const authStatus = document.querySelector("#authStatus");
const authUser = document.querySelector("#authUser");
const authOpenBtn = document.querySelector("#authOpenBtn");
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
    address: `南京市，${spot.name} 周边（坐标 ${spot.lat.toFixed(4)}, ${spot.lng.toFixed(4)}）`,
    hours: fallback.hours,
    ticket: fallback.ticket,
    transit: `建议优先使用地铁、公交或骑行到达；可在地图中定位 ${spot.name} 后规划路线。`,
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
    return `
      <div class="comment-item">
        <div class="comment-header">
          <strong>${escapeHtml(comment.username)}</strong>
          <span>${escapeHtml(comment.createdAt)}</span>
          ${canDelete ? `<button type="button" class="comment-delete" data-comment="${escapeHtml(comment.id)}" data-spot="${escapeHtml(spotId)}">删除</button>` : ""}
        </div>
        <p>${escapeHtml(comment.content)}</p>
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
    html: `<div class="custom-marker ${spot.markerType}" style="background:${colorMap[spot.markerType]}"><span>${spot.name.slice(0, 1)}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30]
  });
}

function popupHtml(spot) {
  return `
    <div class="popup-card">
      <img src="${spot.image}" alt="${spot.name}" onerror="imageFallback(this)">
      <h3>${spot.name}</h3>
      <p>${spot.intro}</p>
      <button type="button" data-detail="${spot.id}">查看详细介绍</button>
    </div>
  `;
}

function switchModule(moduleName) {
  activeModule = moduleName;
  const showInfo = moduleName === "info";
  const showProfile = moduleName === "profile";
  const showRoute = moduleName === "route";
  const showChat = moduleName === "chat";
  const showAdmin = moduleName === "admin";
  const showMap = !showInfo && !showProfile;
  mapModule.classList.toggle("active", showMap);
  infoModule.classList.toggle("active", showInfo);
  profileModule.classList.toggle("active", showProfile);
  mapModuleBtn.classList.toggle("active", !showInfo && !showProfile && !showRoute && !showChat && !showAdmin);
  infoModuleBtn.classList.toggle("active", showInfo);
  profileModuleBtn.classList.toggle("active", showProfile);
  routeModuleBtn.classList.toggle("active", showRoute);
  chatModuleBtn.classList.toggle("active", showChat);
  if (adminModuleBtn) adminModuleBtn.classList.toggle("active", showAdmin);

  if (sidebarRouteContent) sidebarRouteContent.style.display = showRoute ? "" : "none";
  if (sidebarChatContent) sidebarChatContent.style.display = showChat ? "" : "none";
  if (sidebarAdminContent) sidebarAdminContent.style.display = showAdmin ? "" : "none";
  if (sidebarControls) sidebarControls.style.display = (showRoute || showChat || showAdmin) ? "none" : "";
  if (sidebarStats) sidebarStats.style.display = (showRoute || showChat || showAdmin) ? "none" : "";
  if (sidebarSummary) sidebarSummary.style.display = (showRoute || showChat || showAdmin) ? "none" : "";

  if (showMap) {
    setTimeout(() => {
      map.invalidateSize();
      const spot = spots.find((item) => item.id === selectedId);
      if (spot) map.setView([spot.lat, spot.lng], Math.max(map.getZoom(), 12));
    }, 50);
  } else if (showProfile) {
    if (!profileLoaded) loadUserProfile();
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
}

function getFilteredSpots() {
  const text = searchText.trim().toLowerCase();
  return spots.filter((spot) => {
    const typeMatch = currentType === "全部" || spot.type === currentType;
    const nameMatch = !text || spot.name.toLowerCase().includes(text);
    return typeMatch && nameMatch;
  });
}

function renderFilters() {
  typeFilters.innerHTML = typeLabels.map((label) => `
    <button type="button" class="${label === currentType ? "active" : ""}" data-type="${label}">${label}</button>
  `).join("");
}

function renderList(filteredSpots) {
  if (!filteredSpots.length) {
    spotList.innerHTML = `<p class="empty-message">没有找到匹配景点。</p>`;
    return;
  }

  spotList.innerHTML = filteredSpots.map((spot) => `
    <article class="spot-card ${spot.id === selectedId ? "active" : ""}" data-id="${spot.id}">
      <img src="${spot.image}" alt="${spot.name}" onerror="imageFallback(this)">
      <div>
        <h3>${spot.name}</h3>
        <div class="tag-row">
          <span class="tag">${spot.type}</span>
          <span class="tag">${spot.dynasty}</span>
        </div>
        <p>${spot.intro}</p>
      </div>
      <div class="card-actions">
        <button type="button" data-map="${spot.id}">地图定位</button>
        <button type="button" data-info="${spot.id}">详细介绍</button>
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
  const liked = isLiked(spot.id);
  const likesCount = getSpotLikes(spot.id).length;
  const favorited = isFavorited(spot.id);
  const profile = getDetailProfile(spot);
  const historyParagraphs = (spot.detail || []).slice(0, 3);

  detailPanel.innerHTML = `
    <img class="detail-image" src="${spot.image}" alt="${spot.name}" onerror="imageFallback(this)">
    <div class="detail-body">
      <div class="tag-row">
        <span class="tag">${spot.type}</span>
        <span class="tag">${spot.dynasty}</span>
      </div>
      <h2>${spot.name}</h2>
      <p class="detail-lead">${spot.intro}</p>
      <div class="panel-actions">
        <button type="button" class="like-btn ${liked ? "liked" : ""}" data-spot="${spot.id}">
          <span class="like-icon">${liked ? "♥" : "♡"}</span>
          <span class="like-count">${likesCount}</span>
        </button>
        <button type="button" class="favorite-btn ${favorited ? "favorited" : ""}" data-spot="${spot.id}" data-spot-name="${spot.name}">
          <span class="favorite-icon">${favorited ? "★" : "☆"}</span>
          <span>${favorited ? "已收藏" : "收藏"}</span>
        </button>
        <button type="button" data-open-info="${spot.id}">进入详细资料库</button>
      </div>
      <div class="detail-meta expanded-detail-meta">
        <div>
          <span>地址</span>
          <strong>${profile.address}</strong>
        </div>
        <div>
          <span>开放时间</span>
          <strong>${profile.hours}</strong>
        </div>
        <div>
          <span>门票</span>
          <strong>${profile.ticket}</strong>
        </div>
        <div>
          <span>交通</span>
          <strong>${profile.transit}</strong>
        </div>
        <div>
          <span>坐标</span>
          <strong>${spot.lat.toFixed(4)}, ${spot.lng.toFixed(4)}</strong>
        </div>
        <div>
          <span>参观亮点</span>
          <strong>${spot.highlight}</strong>
        </div>
        <div>
          <span>推荐路线</span>
          <strong>${spot.route}</strong>
        </div>
        <div>
          <span>GIS 图层</span>
          <strong>点位 + 线状路线</strong>
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
        <h3>历史背景</h3>
        ${historyParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>

      <section class="detail-section">
        <h3>图片</h3>
        <div class="detail-gallery">
          <img src="${spot.image}" alt="${spot.name}" onerror="imageFallback(this)">
        </div>
      </section>

      <section class="detail-section detail-comments">
        <div class="detail-section-heading">
          <h3>用户评论</h3>
          <span>${getSpotComments(spot.id).length} 条评论</span>
        </div>
        <div class="comment-input compact-comment-input">
          <textarea placeholder="写下你对这个景点的看法..." rows="3" data-spot="${spot.id}"></textarea>
          <button type="button" class="submit-comment" data-spot="${spot.id}">发表评论</button>
        </div>
        <div class="comments-list panel-comments-list">
          ${renderCommentItems(spot.id)}
        </div>
      </section>
    </div>
  `;
}
function renderInfoArticle(spot) {
  if (!spot) return;
  infoTitle.textContent = spot.name;
  const liked = isLiked(spot.id);
  const likesCount = getSpotLikes(spot.id).length;
  const favorited = isFavorited(spot.id);
  const comments = getSpotComments(spot.id);
  const user = getCurrentUser();

  infoArticle.innerHTML = `
    <img class="info-hero" src="${spot.image}" alt="${spot.name}" onerror="imageFallback(this)">
    <div class="info-body">
      <div class="tag-row">
        <span class="tag">${spot.type}</span>
        <span class="tag">${spot.dynasty}</span>
        <span class="tag">${spot.route}</span>
      </div>
      <h3>${spot.name}</h3>
      <p class="lead">${spot.intro}</p>
      ${spot.detail.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <div class="detail-meta info-meta">
        <div>
          <span>经纬度</span>
          <strong>${spot.lat.toFixed(4)}, ${spot.lng.toFixed(4)}</strong>
        </div>
        <div>
          <span>景点类型</span>
          <strong>${spot.type}</strong>
        </div>
        <div>
          <span>历史阶段</span>
          <strong>${spot.dynasty}</strong>
        </div>
        <div>
          <span>适合展示的 GIS 要素</span>
          <strong>${spot.highlight}</strong>
        </div>
      </div>

      <div class="user-gallery-section" id="gallery-${spot.id}">
        <h4>用户分享图片</h4>
        <div class="gallery-grid" id="gallery-grid-${spot.id}">
          <p class="loading-gallery">加载中...</p>
        </div>
      </div>

      <div class="interaction-section">
        <div class="interaction-header">
          <button type="button" class="like-btn ${liked ? "liked" : ""}" data-spot="${spot.id}">
            <span class="like-icon">${liked ? "♥" : "♡"}</span>
            <span class="like-count">${likesCount}</span>
          </button>
          <button type="button" class="favorite-btn ${favorited ? "favorited" : ""}" data-spot="${spot.id}" data-spot-name="${spot.name}">
            <span class="favorite-icon">${favorited ? "★" : "☆"}</span>
            <span>${favorited ? "已收藏" : "收藏"}</span>
          </button>
          <span class="comment-count">${comments.length} 条评论</span>
        </div>

        <div class="comment-section">
          <div class="comment-input">
            <textarea placeholder="写下你的评论..." rows="3" data-spot="${spot.id}"></textarea>
            <div class="comment-actions">
              <label class="submit-comment" for="image-upload-${spot.id}">
                📷 上传图片
                <input type="file" id="image-upload-${spot.id}" class="image-upload-input" accept="image/*" data-spot="${spot.id}">
              </label>
              <button type="button" class="submit-comment" data-spot="${spot.id}">发表评论</button>
            </div>
          </div>

          <div class="comments-list" id="comments-${spot.id}">
            ${comments.length === 0 ? `
              <div class="comments-empty">
                <p>暂无评论，快来发表第一条评论吧！</p>
              </div>
            ` : comments.map(comment => {
              const canDelete = user && (user.id || user.username) === comment.userId;
              return `
                <div class="comment-item">
                  <div class="comment-header">
                    <strong>${comment.username}</strong>
                    <span>${comment.createdAt}</span>
                    ${canDelete ? `<button type="button" class="comment-delete" data-comment="${comment.id}" data-spot="${spot.id}">删除</button>` : ""}
                  </div>
                  <p>${comment.content}</p>
                </div>
              `;
            }).join("")}
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
      <strong>${spot.name}</strong>
      <span>${spot.type} · ${spot.dynasty}</span>
    </button>
  `).join("");
}

function updateStats(filteredSpots) {
  spotCount.textContent = filteredSpots.length;
  dynastyCount.textContent = new Set(filteredSpots.map((spot) => spot.dynasty)).size;
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
    authStatus.textContent = "管理员";
    authUser.textContent = admin.username || admin.email;
    authOpenBtn.textContent = "切换账号";
  } else if (user) {
    authStatus.textContent = "已登录";
    authUser.textContent = user.username || user.email;
    authOpenBtn.textContent = "切换账号";
  } else {
    authStatus.textContent = "未登录";
    authUser.textContent = "游客访问";
    authOpenBtn.textContent = "登录/注册";
  }
}

function saveAuth(data) {
  localStorage.removeItem("landscapeAdmin");
  localStorage.removeItem("landscapeAdminToken");
  localStorage.setItem("landscapeUser", JSON.stringify(data.user));
  localStorage.setItem("landscapeToken", data.token);
  if (adminModuleBtn) adminModuleBtn.style.display = "none";
  updateAuthView(data.user);
  loadFavorites();
}

function saveAdminAuth(data) {
  localStorage.removeItem("landscapeUser");
  localStorage.removeItem("landscapeToken");
  localStorage.setItem("landscapeAdmin", JSON.stringify(data.admin));
  localStorage.setItem("landscapeAdminToken", data.token);
  profileLoaded = false;
  updateAuthView(null);
  loadUserProfile();
  if (adminModuleBtn) adminModuleBtn.style.display = "";
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

  const card = event.target.closest(".spot-card[data-id]");
  if (!card) return;
  selectSpot(card.dataset.id, { module: "map" });
});

detailPanel.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-open-info]");
  if (!button) return;
  selectSpot(button.dataset.openInfo, { module: "info" });
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

infoModuleBtn.addEventListener("click", () => {
  switchModule("info");
});

profileModuleBtn.addEventListener("click", () => {
  switchModule("profile");
});

routeModuleBtn.addEventListener("click", () => {
  switchModule("route");
});

chatModuleBtn.addEventListener("click", () => {
  switchModule("chat");
});

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

authOpenBtn.addEventListener("click", () => openAuthModal("login"));
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
    if (textarea && textarea.value.trim()) {
      if (await addComment(spotId, textarea.value)) {
        textarea.value = "";
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
});

document.addEventListener("change", (event) => {
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

async function addComment(spotId, content) {
  const user = getCurrentUser();
  const token = getAuthToken();
  
  if (!user || !token) {
    openAuthModal("login");
    return false;
  }
  
  try {
    await apiRequest("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        spotId,
        content: content.trim()
      })
    });
    await loadCommentsFromServer(spotId);
    return true;

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        spotId,
        content: content.trim()
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "评论失败");
    }
    
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
    return;

    const response = await fetch(`/api/images/${spotId}`);
    if (!response.ok) throw new Error("加载图片失败");
    const images = await response.json();
    renderUserImages(spotId, images);
  } catch (error) {
    console.error("Failed to load user images:", error);
    container.innerHTML = '<p class="gallery-error">无法加载图片库</p>';
  }
}

function renderUserImages(spotId, images) {
  const container = document.getElementById(`gallery-grid-${spotId}`);
  if (!container) return;

  if (images.length === 0) {
    container.innerHTML = '<p class="gallery-empty">暂无用户分享图片</p>';
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
    alert("请先登录后再上传图片。");
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
    alert("图片上传成功");
    loadUserImages(spotId);
    if (activeModule === "profile") loadUserProfile();
    return;

    const response = await fetch("/api/images/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ spotId, imageData })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "上传失败");
    }

    alert("图片上传成功！");
    loadUserImages(spotId);
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
    return;

    const response = await fetch(`/api/interactions/${spotId}`);
    const data = await response.json();
    
    if (!spotInteractions[spotId]) {
      spotInteractions[spotId] = { likes: [], comments: [] };
    }
    
    spotInteractions[spotId].comments = data.comments || [];
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

function renderLikeButton(spotId, container) {
  const liked = isLiked(spotId);
  const likesCount = getSpotLikes(spotId).length;
  
  container.innerHTML = `
    <button type="button" class="like-btn ${liked ? "liked" : ""}" data-spot="${spotId}">
      <span class="like-icon">${liked ? "♥" : "♡"}</span>
      <span class="like-count">${likesCount}</span>
    </button>
  `;
}

function renderComments(spotId, container) {
  const comments = getSpotComments(spotId);
  const user = getCurrentUser();
  
  if (comments.length === 0) {
    container.innerHTML = `
      <div class="comments-empty">
        <p>暂无评论，快来发表第一条评论吧！</p>
      </div>
    `;
  } else {
    container.innerHTML = comments.map(comment => {
      const canDelete = user && (user.id || user.username) === comment.userId;
      return `
        <div class="comment-item">
          <div class="comment-header">
            <strong>${comment.username}</strong>
            <span>${comment.createdAt}</span>
            ${canDelete ? `<button type="button" class="comment-delete" data-comment="${comment.id}" data-spot="${spotId}">删除</button>` : ""}
          </div>
          <p>${comment.content}</p>
        </div>
      `;
    }).join("");
  }
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
    return;

    const response = await fetch("/api/favorites", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) throw new Error("加载收藏失败");

    const data = await response.json();
    userFavorites = data.favorites || [];
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
    myCommentsList.innerHTML = `<div class="profile-empty"><p>请先登录</p></div>`;
    return;
  }
  try {
    const data = await apiRequest("/user/comments", {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const comments = data.comments || [];
    if (comments.length === 0) {
      myCommentsList.innerHTML = `<div class="profile-empty"><p>您还没有发表过评论</p></div>`;
      return;
    }
    myCommentsList.innerHTML = comments.map(comment => {
      const spot = spots.find(s => s.id === comment.spotId);
      const spotName = spot ? spot.name : "未知景点";
      return `
        <div class="comment-item">
          <div class="comment-spot">
            <span class="comment-spot-label">景点：</span>
            <span class="comment-spot-name" data-spot="${comment.spotId}">${escapeHtml(spotName)}</span>
          </div>
          <p class="comment-content">${escapeHtml(comment.content)}</p>
          <span class="comment-time">${comment.createdAt || ""}</span>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Failed to load comments:", error);
    myCommentsList.innerHTML = `<div class="profile-empty"><p>加载评论失败</p></div>`;
  }
}

async function loadAndRenderUserImages() {
  const token = getAuthToken();
  if (!token) {
    myImagesList.innerHTML = `<div class="profile-empty"><p>请先登录</p></div>`;
    return;
  }
  try {
    const data = await apiRequest("/user/images", {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const images = data.images || [];
    if (images.length === 0) {
      myImagesList.innerHTML = `<div class="profile-empty"><p>您还没有上传过图片</p></div>`;
      return;
    }
    myImagesList.innerHTML = images.map(img => {
      const spot = spots.find(s => s.id === img.spotId);
      const spotName = spot ? spot.name : "未知景点";
      return `
        <div class="image-item">
          <img src="${img.url}" alt="${spotName}" class="image-thumb" data-full="${img.url}" loading="lazy" onerror="imageFallback(this)">
          <div class="image-item-info">
            <span class="image-spot-name" data-spot="${img.spotId}">${escapeHtml(spotName)}</span>
            <span class="image-time">${img.createdAt ? new Date(img.createdAt).toLocaleString("zh-CN") : ""}</span>
          </div>
        </div>
      `;
    }).join("");
  } catch (error) {
    console.error("Failed to load images:", error);
    myImagesList.innerHTML = `<div class="profile-empty"><p>加载图片失败</p></div>`;
  }
}

async function loadUserProfile() {
  const user = getCurrentUser();
  const token = getAuthToken();

  if (!user || !token) {
    favoritesList.innerHTML = `
      <div class="favorites-empty">
        <p>请先登录查看您的收藏</p>
        <button class="go-to-login" type="button">立即登录</button>
      </div>
    `;

    document.querySelector(".go-to-login")?.addEventListener("click", () => {
      openAuthModal("login");
    });

    favCount.textContent = "0";
    commentCount.textContent = "0";
    imageCount.textContent = "0";
    myCommentsList.innerHTML = `<div class="profile-empty"><p>请先登录查看您的评论</p></div>`;
    myImagesList.innerHTML = `<div class="profile-empty"><p>请先登录查看您的图片</p></div>`;
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
  loadAndRenderUserComments();
  loadAndRenderUserImages();
  profileLoaded = true;
}

function renderProfileFavorites() {
  if (userFavorites.length === 0) {
    favoritesList.innerHTML = `
      <div class="favorites-empty">
        <p>您还没有收藏任何景点</p>
        <button class="go-to-map" type="button">去地图浏览景点</button>
      </div>
    `;
    return;
  }

  favoritesList.innerHTML = userFavorites.map(fav => {
    const spot = spots.find(s => s.id === fav.spotId);
    if (!spot) return "";

    return `
      <div class="favorite-item">
        <img src="${spot.image}" alt="${spot.name}" onerror="imageFallback(this)">
        <div class="favorite-item-info">
          <h4>${spot.name}</h4>
          <div class="fav-meta">
            <span class="tag">${spot.type}</span>
            <span class="tag">${spot.dynasty}</span>
          </div>
          <p>${spot.intro}</p>
        </div>
        <div class="favorite-actions">
          <button type="button" class="view-spot" data-spot="${spot.id}">查看详情</button>
          <button type="button" class="remove-favorite" data-spot="${spot.id}">取消收藏</button>
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
    const admin = JSON.parse(localStorage.getItem("landscapeAdmin"));
    if (user) loadUserProfile();
    loadChatMessages();
    if (admin) loadAdminData();
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
        return s ? s.name : id;
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
        <img src="${spot.image}" alt="${spot.name}" onerror="imageFallback(this)">
        <div class="route-spot-info">
          <h4>${escapeHtml(spot.name)}</h4>
          <div class="tag-row">
            <span class="tag">${spot.type}</span>
            <span class="tag">${spot.dynasty}</span>
          </div>
        </div>
        <button type="button" class="route-add-btn ${inRoute ? "selected" : ""}" data-route-add="${spot.id}" title="${inRoute ? "从路线中移除" : "添加到路线规划"}">${inRoute ? "−" : "+"}</button>
      </div>
    `;
  }).join("");
}

function renderRouteSelectedList() {
  if (routeSelectedIds.size === 0) {
    routeSelectedList.innerHTML = `<p class="route-empty">暂无选中景点</p>`;
    return;
  }
  routeSelectedList.innerHTML = [...routeSelectedIds].map(id => {
    const spot = spots.find(s => s.id === id);
    if (!spot) return "";
    return `
      <div class="route-selected-item">
        <span class="route-selected-name">${escapeHtml(spot.name)}</span>
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

function groupSpotsIntoRoutes(selectedSpots) {
  if (selectedSpots.length === 0) return [];

  const threshold = 5;
  const visited = new Set();
  const groups = [];

  for (const spot of selectedSpots) {
    if (visited.has(spot.id)) continue;
    const group = [spot];
    visited.add(spot.id);
    let changed = true;
    while (changed) {
      changed = false;
      for (const candidate of selectedSpots) {
        if (visited.has(candidate.id)) continue;
        for (const member of group) {
          if (haversineDistance(member, candidate) < threshold) {
            group.push(candidate);
            visited.add(candidate.id);
            changed = true;
            break;
          }
        }
      }
    }
    groups.push(group);
  }

  return groups;
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
    html: `<div style="background:${color};color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">起</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  const endIcon = L.divIcon({
    className: "route-marker-icon",
    html: `<div style="background:${color};color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">终</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  L.marker(points[0], { icon: startIcon }).addTo(map);
  L.marker(points[points.length - 1], { icon: endIcon }).addTo(map);

  const totalDist = sorted.reduce((sum, s, i) => i === 0 ? 0 : sum + haversineDistance(sorted[i - 1], s), 0);

  routeResults.innerHTML = `
    <div class="route-result-card" style="border-left: 4px solid ${color};">
      <div class="route-result-header">
        <span class="route-result-name" style="color:${color};">推荐路线</span>
        <span class="route-result-dist">约 ${totalDist.toFixed(1)} km</span>
      </div>
      <div class="route-result-steps">
        ${sorted.map((s, i) => `
          <span class="route-step" data-spot="${s.id}">
            <span class="route-step-num" style="background:${color};">${i + 1}</span>
            ${escapeHtml(s.name)}
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
    chatMessages.innerHTML = '<div class="profile-empty"><p>加载聊天记录失败</p></div>';
  }
}

function appendChatMessage(msg) {
  if (!chatMessages) return;
  const currentUser = getCurrentUser();
  const myId = currentUser ? currentUser.id : null;
  const isSelf = myId && msg.userId === myId;
  const time = new Date(msg.createdAt).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });

  const div = document.createElement("div");
  div.className = `chat-msg${isSelf ? " self" : ""}`;
  const imageHtml = msg.image ? `<div class="chat-msg-image"><img src="${msg.image}" alt="图片" loading="lazy" onclick="openChatImageModal('${msg.image.replace(/'/g, "\\'")}')"></div>` : "";
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
      alert("图片大小不能超过 3MB");
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
  });
});

async function loadAdminData() {
  const admin = JSON.parse(localStorage.getItem("landscapeAdmin"));
  if (!admin) return;
  try {
    const [usersData, commentsData, imagesData, chatData, ratingsData] = await Promise.all([
      adminRequest("/admin/users"),
      adminRequest("/admin/comments"),
      adminRequest("/admin/images"),
      adminRequest("/admin/chat"),
      adminRequest("/admin/ratings")
    ]);
    renderAdminUsers(usersData.users);
    renderAdminComments(commentsData.comments);
    renderAdminImages(imagesData.images);
    renderAdminChat(chatData.messages);
    renderAdminRatings(ratingsData.ratings);
    adminDataLoaded = true;
  } catch (err) {
    console.error("Failed to load admin data:", err);
  }
}

function renderAdminUsers(users) {
  const el = document.querySelector("#adminUserList");
  if (!el) return;
  if (!users.length) { el.innerHTML = '<div class="profile-empty"><p>暂无注册用户</p></div>'; return; }
  el.innerHTML = users.map(u => `
    <div class="admin-item">
      <div class="admin-item-info">
        <div class="admin-item-name">${escapeHtml(u.username)}</div>
        <div class="admin-item-meta">${escapeHtml(u.email)} · ${u.createdAt ? new Date(u.createdAt).toLocaleDateString("zh-CN") : ""}</div>
      </div>
      <button type="button" class="admin-delete-btn" data-admin-delete-user="${u.id}">删除</button>
    </div>
  `).join("");
}

function renderAdminComments(comments) {
  const el = document.querySelector("#adminCommentList");
  if (!el) return;
  if (!comments.length) { el.innerHTML = '<div class="profile-empty"><p>暂无评论</p></div>'; return; }
  el.innerHTML = comments.map(c => `
    <div class="admin-item">
      <div class="admin-item-info">
        <div class="admin-item-name">${escapeHtml(c.username || "未知用户")} · ${escapeHtml(c.spotId)}</div>
        <div class="admin-item-meta">${escapeHtml(c.content)}</div>
      </div>
      <button type="button" class="admin-delete-btn" data-admin-delete-comment="${c.id}">删除</button>
    </div>
  `).join("");
}

function renderAdminImages(images) {
  const el = document.querySelector("#adminImageList");
  if (!el) return;
  if (!images.length) { el.innerHTML = '<div class="profile-empty"><p>暂无图片</p></div>'; return; }
  el.innerHTML = images.map(img => `
    <div class="admin-item">
      <div class="admin-item-info">
        <div class="admin-item-name">${escapeHtml(img.username || "未知用户")} · ${escapeHtml(img.spotId)}</div>
        <div class="admin-item-meta">${img.createdAt ? new Date(img.createdAt).toLocaleDateString("zh-CN") : ""}</div>
      </div>
      <button type="button" class="admin-delete-btn" data-admin-delete-image="${img.id}">删除</button>
    </div>
  `).join("");
}

function renderAdminChat(messages) {
  const el = document.querySelector("#adminChatList");
  if (!el) return;
  if (!messages.length) { el.innerHTML = '<div class="profile-empty"><p>暂无聊天记录</p></div>'; return; }
  el.innerHTML = messages.map(m => {
    const time = m.createdAt ? new Date(m.createdAt).toLocaleTimeString("zh-CN", {hour:"2-digit", minute:"2-digit"}) : "";
    const imageHtml = m.image ? `<img src="${m.image}" class="admin-chat-img" alt="图片" onclick="openChatImageModal('${m.image.replace(/'/g, "\\'")}')" style="cursor:pointer;" />` : "";
    return `
      <div class="admin-item">
        <div class="admin-item-info">
          <div class="admin-item-name">${escapeHtml(m.username || "未知用户")}</div>
          <div class="admin-item-meta">${escapeHtml(m.content || "")} ${imageHtml} · ${time}</div>
        </div>
        <button type="button" class="admin-delete-btn" data-admin-delete-chat="${m.id}">删除</button>
      </div>
    `;
  }).join("");
}

function renderAdminRatings(ratings) {
  const el = document.querySelector("#adminRatingList");
  if (!el) return;
  if (!ratings.length) { el.innerHTML = '<div class="profile-empty"><p>暂无评分记录</p></div>'; return; }
  el.innerHTML = ratings.map(r => {
    const time = r.createdAt ? new Date(r.createdAt).toLocaleTimeString("zh-CN", {hour:"2-digit", minute:"2-digit"}) : "";
    const stars = "★".repeat(Math.floor(r.rating)) + (r.rating % 1 !== 0 ? "☆" : "");
    return `
      <div class="admin-item">
        <div class="admin-item-info">
          <div class="admin-item-name">${escapeHtml(r.username || "未知用户")} · <span style="color:#f5a623">${r.rating}分</span></div>
          <div class="admin-item-meta">景点: ${escapeHtml(r.spotId)} · ${time}</div>
        </div>
        <button type="button" class="admin-delete-btn" data-admin-delete-rating="${r.id}">删除</button>
      </div>
    `;
  }).join("");
}

document.addEventListener("click", async (e) => {
  const admin = JSON.parse(localStorage.getItem("landscapeAdmin"));
  if (!admin) return;

  const userId = e.target.closest("[data-admin-delete-user]")?.dataset.adminDeleteUser;
  if (userId && confirm("确定要删除该用户？此操作不可撤销。")) {
    const el = e.target.closest("[data-admin-delete-user]").parentElement;
    try {
      await adminRequest(`/admin/users/${userId}`, { method: "DELETE" });
      el.remove();
    } catch (err) { alert(err.message); }
  }

  const commentId = e.target.closest("[data-admin-delete-comment]")?.dataset.adminDeleteComment;
  if (commentId && confirm("确定要删除该评论？")) {
    const el = e.target.closest("[data-admin-delete-comment]").parentElement;
    try {
      await adminRequest(`/admin/comments/${commentId}`, { method: "DELETE" });
      el.remove();
    } catch (err) { alert(err.message); }
  }

  const imageId = e.target.closest("[data-admin-delete-image]")?.dataset.adminDeleteImage;
  if (imageId && confirm("确定要删除该图片？")) {
    const el = e.target.closest("[data-admin-delete-image]").parentElement;
    try {
      await adminRequest(`/admin/images/${imageId}`, { method: "DELETE" });
      el.remove();
    } catch (err) { alert(err.message); }
  }

  const chatId = e.target.closest("[data-admin-delete-chat]")?.dataset.adminDeleteChat;
  if (chatId && confirm("确定要删除该聊天记录？")) {
    const el = e.target.closest("[data-admin-delete-chat]").parentElement;
    try {
      await adminRequest(`/admin/chat/${chatId}`, { method: "DELETE" });
      el.remove();
    } catch (err) { alert(err.message); }
  }

  const ratingId = e.target.closest("[data-admin-delete-rating]")?.dataset.adminDeleteRating;
  if (ratingId && confirm("确定要删除该评分？")) {
    const el = e.target.closest("[data-admin-delete-rating]").parentElement;
    try {
      await adminRequest(`/admin/ratings/${ratingId}`, { method: "DELETE" });
      el.remove();
    } catch (err) { alert(err.message); }
  }
});

init();
