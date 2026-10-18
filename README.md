# 个人作品集官网

基于 **React + TypeScript + Vite + Tailwind CSS + shadcn/ui** 构建的个人官网 / 作品集，
用于集中展示你开发过的 App 与各类作品。已配置相对路径（`base: './'`），可一键部署到
Vercel 或 GitHub Pages 等免费托管，获得免费子域名，**零成本上线**。

## 本地运行

```bash
npm install        # 安装依赖（首次）
npm run dev        # 本地开发，热更新，默认 http://localhost:5173
npm run build      # 生产构建，产物输出到 dist/
npm run preview    # 本地预览构建产物，默认 http://localhost:4173
```

> 依赖已安装，直接 `npm run dev` 即可开始预览与修改。

## 自定义内容（最重要）

**你只需要编辑一个文件：`src/data/site.ts`**

- `site.name` / `site.initials` / `site.role` / `site.tagline`：首屏基本信息
- `site.bio`：关于我的段落（数组，可多段）
- `site.facts`：关于我区块右侧的「关键事实」卡片（专业 / 方向 / 认证 / 备案 等）
- `site.email` / `site.socials`：联系方式与社交链接
- `site.icp`：页脚备案号（已填你的 `陕ICP备2026026603号-1A`，没有可留空）
- `works`：作品列表（数组）。每条作品含标题、分类、描述、标签、年份、状态、
  资质标 `badges`、渐变封面 `gradient`、外链 `links`。

### 替换占位内容

- 文件中所有标注 `TODO` 的地方（名字、邮箱、社交链接、炼体的下载/详情链接）请换成你的真实信息。
- `works` 数组里的两条「示例作品」是占位演示，**可直接删除**，或替换成你的真实作品。
- 「炼体」已按已知事实填好（软著、备案号），请把 `links` 里的占位 `#` 换成真实上架/下载链接。

### 使用真实封面图

1. 把图片放到 `public/works/` 目录，例如 `public/works/lianti.jpg`；
2. 在对应作品的 `image` 字段填写 `"/works/lianti.jpg"` 即可（留空则使用渐变占位封面）。

## 免费部署（获得免费子域名）

### 方式一：Vercel（最省事，推荐）

1. 把本项目推送到 GitHub 仓库；
2. 打开 https://vercel.com ，「Add New → Project」导入该仓库；
3. Framework 会自动识别为 Vite，无需配置，直接 Deploy；
4. 部署完成后 Vercel 会分配 `xxx.vercel.app` 免费子域名，后续每次 `git push` 自动重新部署。

也可本地一键部署（需先 `npm i -g vercel`）：

```bash
npm run build
npx vercel        # 按提示登录并部署
```

### 方式二：GitHub Pages（完全免费）

1. 仓库 → Settings → Pages → Build and deployment → Source 选「GitHub Actions」；
2. 在项目根目录新建 `.github/workflows/deploy.yml`（内容见下方），推送即自动部署；
3. 访问 `https://<你的用户名>.github.io/<仓库名>/`。

> 项目 `vite.config.ts` 已设 `base: './'`，相对路径下 GitHub Pages 可直接正常加载。
> 若你更习惯绝对路径，可将 `base` 改为 `/<仓库名>/`。

`deploy.yml` 示例：

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

### 关于自定义域名（可选，需花钱）

等有了收入或想更专业时，可注册一个个人域名（约 ¥50–100/年），在 Vercel / GitHub Pages
后台绑定即可，本项目代码无需改动。

## 目录结构

```
src/
  data/site.ts        ← 所有可编辑内容都在这
  sections/           ← 页面区块（导航 / 首屏 / 作品 / 关于 / 联系）
  components/         ← 主题切换等小组件 + shadcn/ui 组件库
  App.tsx             ← 页面组装
  index.css           ← 全局样式
```
