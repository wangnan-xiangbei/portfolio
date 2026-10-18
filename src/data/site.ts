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
    "目前主推的作品是健身 App「炼体」——从需求、设计到开发、上架备案，全部独立完成。这个站点用来集中展示我做过、正在做的各种应用。",
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
    version: "1.1",
    size: "约 20 MB",
    changelog: [
      "1.1 首个公开版本：训练计划、每日打卡、进度追踪与身体数据管理。",
    ],
    links: [
      { label: "下载 APK", url: "./downloads/lianti.apk", type: "app" },
      { label: "官方网站", url: "https://liantiapp.com", type: "web" },
    ],
  },
  {
    id: "cet46",
    title: "四六级",
    category: "移动端 App · 英语学习",
    description:
      "面向大学英语四六级（CET-4/6）考试的备考 App，提供单词背诵、真题练习与学习进度管理，帮助考生高效刷词、针对性提分。",
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
    version: "1.0",
    size: "约 23 MB",
    changelog: [
      "1.0 首个版本：单词背诵、听力练习、真题模考与成绩解析。",
    ],
    links: [
      { label: "下载 APK", url: "./downloads/cet46.apk", type: "app" },
    ],
  },
]
