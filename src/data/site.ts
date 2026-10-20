// =============================================================================
//  站点内容数据中心 —— 你只需要修改这个文件即可自定义整个官网
//  修改后保存，页面会自动热更新（npm run dev）。
//  部署前请把所有「占位 / 示例 / 待替换」内容换成你自己的真实信息。
// =============================================================================

export interface WorkLink {
  label: string
  url: string
  type: "app" | "web" | "github" | "demo" | "article"
}

export interface Work {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  year: string
  /** 状态标签，例如「已上线 / 开发中 / 开源」 */
  status?: string
  /** 资质/认证小标，例如软著号、备案号 */
  badges?: string[]
  /** 是否作为重点作品（卡片更大、置顶） */
  featured?: boolean
  /**
   * 作品封面图路径（可选）。放到 public/ 目录下，例如 "./works/lianti.jpg"。
   * 留空则使用下方 gradient 生成的渐变占位封面。
   */
  image?: string
  /** 渐变占位封面（无图片时使用），写 Tailwind 渐变类名 */
  gradient: string
  /** 应用图标字形（无真实图标图片时使用，建议一个汉字或 emoji），渲染在彩色圆角方里 */
  icon?: string
  /** 真实应用图标图片路径（可选），放到 public/ 下，例如 "./works/lianti-icon.png"，优先于 icon 字形 */
  iconImage?: string
  /** 商店卡片副标题（简短一句） */
  tagline?: string
  /** 评分（0-5，可选），商店卡片显示星级 */
  rating?: number
  /** 详情页截图（可选），放到 public/ 下，例如 ["./works/lianti-1.png"] */
  screenshots?: string[]
  /** 版本号，详情页显示 */
  version?: string
  /** 更新日志（多条），详情页显示 */
  changelog?: string[]
  /** 安装包体积说明，详情页「信息」区显示 */
  size?: string
  links: WorkLink[]
}

export interface Social {
  label: string
  url: string
}

export const site = {
  // —— 基本信息 ——
  name: "向北",
  initials: "XB",
  role: "工商管理专业 · 独立产品开发者",
  tagline: "把想法做成能用的产品。这里是我的应用商店。",
  location: "中国",

  // —— 关于我（支持多段，用数组） ——
  bio: [
    "我是一名工商管理专业的学生，也是一名独立开发者。比起只写文档，我更喜欢亲手把想法变成能跑起来的产品。",
    "目前主推的作品是健身 App「炼体」——从需求、设计到开发、上架备案，全部独立完成。最近在做的是「小楠记账」：把微信账单直接导进来，付款那一刻自动记一笔。这个站点用来集中展示我做过、正在做的各种应用。",
  ],

  // —— 关键事实（关于我区块右侧展示） ——
  facts: [
    { label: "专业", value: "工商管理" },
    { label: "方向", value: "移动 App / Web 工具" },
    { label: "认证", value: "软件著作权（个人）" },
    { label: "备案", value: "陕ICP备2026026603号-1A" },
  ],

  // —— 联系方式 ——
  email: "2971875757@qq.com",
  /** 网站备案号（如已备案），显示在页脚；没有可留空字符串 */
  icp: "陕ICP备2026026603号-1A",
  socials: [
    { label: "GitHub", url: "https://github.com/wangnan-xiangbei" },
    { label: "微博", url: "#" }, // TODO
    { label: "知乎", url: "#" }, // TODO
  ] as Social[],

  // —— 导航 ——
  nav: [
    { id: "works", label: "应用" },
    { id: "about", label: "关于" },
    { id: "contact", label: "联系" },
  ],
}

export const works: Work[] = [
  {
    id: "lianti",
    title: "炼体",
    category: "移动端 App · 健康管理",
    description:
      "一款面向健身人群的 App，提供训练计划、进度追踪与身体数据管理。已获得计算机软件著作权（个人），并通过个人 App 备案，可合规上线分发。",
    tags: ["移动 App", "健康管理", "独立开发"],
    year: "2026",
    status: "已上线",
    badges: ["软著", "陕ICP备2026026603号-1A"],
    featured: true,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: "炼",
    iconImage: "./works/lianti.png",
    tagline: "修仙武侠风 · 健身打卡",
    rating: 4.9,
    screenshots: [
      "./works/lianti-1.png",
      "./works/lianti-2.png",
      "./works/lianti-3.png",
      "./works/lianti-4.png",
    ],
    version: "1.3.0",
    size: "约 99 MB",
    changelog: [
      "1.3.0 新增 AI 道长：问道长对话、拍照识食、一周食谱、功课排课、周报评语",
      "1.3.0 新增「今日战报」与「周报」，可生成分享图",
      "1.3.0 新增灵石经济：三品灵石、灵石坊、兑换所、宗门馈赠",
      "1.3.0 新增境界突破演出与境界图鉴（11 境配图）",
      "1.3.0 新增锁屏训练面板：息屏也能逐项记组",
      "1.3.0 新增新手导览 7 步引导；新增力量·进步与破纪录金榜",
      "1.3.0 修复：百宝囊红点消不掉、跨天通知显示昨日步数、反复切主页重复领气等",
      "1.3.0 优化：饮食修为按完成度发放、增肌碳水目标下调、弹窗统一宣纸风格",
      "首个公开版本：训练计划、每日打卡、进度追踪与身体数据管理。",
    ],
    links: [
      {
        label: "下载 APK（1.3.0）",
        url: "https://github.com/wangnan-xiangbei/portfolio/releases/download/v1.3.0/lianti-1.3.0.apk",
        type: "app",
      },
      { label: "官方网站", url: "https://liantiapp.com", type: "web" },
    ],
  },
  {
    id: "xiaonan",
    title: "小楠记账",
    category: "移动端 App · 财务工具",
    description:
      "一款本地优先的极简记账 App。微信账单可以直接导入（加密压缩包也能读），读屏与通知两条通道会在付款成功的那一刻自动记下一笔；桌面小组件一眼看清本月花销与预算进度，点「+」直接开记。可以给一笔账打标签、拍小票存凭证、标记几个人 AA 分摊。账目与凭证只存在本机，不注册账号、不上传云端。余额按「期初 + 流水」实时算出，退款会自动抵回原分类。",
    tags: ["移动 App", "记账", "本地优先"],
    year: "2026",
    status: "新作",
    gradient: "from-blue-600 via-indigo-500 to-violet-600",
    icon: "账",
    iconImage: "./works/xiaonan.png",
    tagline: "微信账单导入 · 标签凭证 · 桌面小组件一眼看清",
    screenshots: [
      "./works/xiaonan-1.png",
      "./works/xiaonan-2.png",
      "./works/xiaonan-3.png",
      "./works/xiaonan-4.png",
      "./works/xiaonan-5.png",
    ],
    version: "1.3.2",
    size: "约 25 MB",
    changelog: [
      "1.3.2 流水每一笔都标出具体时间（几点几分），中午那顿和晚上那顿一眼分清；编辑记录长按日期可单独改时间",
      "1.3.1 重复记账提醒：同一笔再记一次会先提示「这笔已经记过了」，确认后才记第二笔",
      "1.3.1 读屏与通知自动记账改用支付时间判重，晚触发十几分钟也不会记重",
      "1.3.0 新增标签：一笔账可以打多个标签（聚餐、报销、出差），列表里带角标，搜索直接按标签找",
      "1.3.0 新增凭证：拍一张小票或从相册选一张，存在本机私有目录，点开可放大看",
      "1.3.0 新增 AA 分摊：标记几个人分摊，自动算出「我承担」和「待收」，金额仍按全额记账",
      "1.2.2 新增桌面小组件：本月支出、今日花销、预算进度与支出 TOP2，点「+」直达记一笔",
      "1.2.2 新增预算提醒：用到 80% 与超支时各通知一次，同类每月不重复打扰",
      "1.2.2 分类选择条、草稿关闭按钮、头像色点的点击区统一撑到 44dp",
      "1.2.1 应用更名为「小楠记账」",
      "1.2.0 支持导入微信账单：.zip（含解压密码）/ .csv / .xlsx 三种入口；同一份账单导两次不会重复记账",
      "1.2.0 每日记账提醒：可设固定时间，重启手机后自动重排",
      "1.2.0 周期账单：房租、订阅到点自动补记，隔月没打开也不会漏",
      "1.2.0 退款冲销：退款自动抵回原分类，统计不会虚高",
      "1.2.0 新增回收站、日历热力图、分类额度与高级筛选",
      "1.2.0 余额改为「期初 + 流水」实时派生，每笔之后的余额都看得见",
      "1.0 首个版本：极简记账、分类统计、预算与月度对比",
    ],
    links: [
      { label: "下载 APK（1.3.2）", url: "./downloads/xiaonan.apk", type: "app" },
    ],
  },
  {
    id: "cet46",
    title: "四六级",
    category: "移动端 App · 英语学习",
    description:
      "面向大学英语四六级（CET-4/6）考试的备考 App：4355 / 5095 个考纲词、124 套历年真题、10 套原创全真模拟卷，专项练习按官方题型整篇呈现，听力用官方原音并支持倍速与逐句精听。Android / iOS 双端。",
    tags: ["移动 App", "英语学习", "备考工具"],
    year: "2026",
    status: "新作",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    icon: "四",
    iconImage: "./works/cet46.png",
    tagline: "四六级备考 · 刷词提分",
    rating: 4.7,
    screenshots: [
      "./works/cet46-1.png",
      "./works/cet46-2.png",
      "./works/cet46-3.png",
      "./works/cet46-4.png",
    ],
    version: "1.1",
    size: "约 23 MB",
    changelog: [
      "专项练习改为「一篇一页」：听力、选词填空、长篇匹配、阅读都按整篇呈现，不再拆成孤立小题",
      "题型对齐官方：选词填空 15 选 10（A–O，一词只用一次）、长篇匹配按 A–O 段落选（可重复），四级听力新闻 7＋长对话 8＋篇章 10，六级长对话 8＋篇章 7＋讲座 10",
      "选词填空支持拖拽填空，点词自动填入当前空、点已填空格可清除；点选项不再整屏重绘",
      "新增原创全真模拟卷：四级 4 套、六级 6 套，客观题解析带原文定位",
      "新增写作检查：词数、段落、句长、连接词、词库外词，交卷后可对照范文",
      "新增听力倍速（0.75× / 1× / 1.25×）与逐句精听对照",
      "新增音频自检面板：播放异常时直接定位桥注入、时长、系统音量与输出设备",
      "新增 iOS 版，与 Android 同源；修复原音重播无声、切级别后播错录音等问题",
      "1.0 首个版本：单词背诵、听力练习、真题模考与成绩解析。",
    ],
    links: [
      { label: "下载 APK（1.1）", url: "./downloads/cet46.apk", type: "app" },
    ],
  },
]
