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
   * 作品封面图路径（可选）。放到 public/ 目录下，例如 "/works/lianti.jpg"。
   * 留空则使用下方 gradient 生成的渐变占位封面。
   */
  image?: string
  /** 渐变占位封面（无图片时使用），写 Tailwind 渐变类名 */
  gradient: string
  links: WorkLink[]
}

export interface Social {
  label: string
  url: string
}

export const site = {
  // —— 基本信息 ——
  name: "向北", // TODO: 换成你的名字 / 昵称
  initials: "XB", // TODO: 名字首字母，用于头像占位
  role: "工商管理专业 · 独立产品开发者",
  tagline: "把想法做成能用的产品。这里是我的作品集。",
  location: "中国",

  // —— 关于我（支持多段，用数组） ——
  bio: [
    "我是一名工商管理专业的学生，也是一名独立开发者。比起只写文档，我更喜欢亲手把想法变成能跑起来的产品。",
    "目前主推的作品是健身 App「炼体」——从需求、设计到开发、上架备案，全部独立完成。这个站点用来集中展示我做过、正在做的各种作品。",
  ],

  // —— 关键事实（关于我区块右侧展示） ——
  facts: [
    { label: "专业", value: "工商管理" },
    { label: "方向", value: "移动 App / Web 工具" },
    { label: "认证", value: "软件著作权（个人）" },
    { label: "备案", value: "陕ICP备2026026603号-1A" },
  ],

  // —— 联系方式 ——
  email: "2971875757@qq.com", // TODO: 换成你的邮箱
  /** 网站备案号（如已备案），显示在页脚；没有可留空字符串 */
  icp: "陕ICP备2026026603号-1A",
  socials: [
    { label: "GitHub", url: "https://github.com/wangnan-xiangbei" },
    { label: "微博", url: "#" }, // TODO
    { label: "知乎", url: "#" }, // TODO
  ] as Social[],

  // —— 导航 ——
  nav: [
    { id: "works", label: "作品" },
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
    links: [
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
    links: [
      { label: "下载 APK", url: "/downloads/cet46.apk", type: "app" }, // 把真实 APK 放到 public/downloads/cet46.apk
    ],
  },
]
