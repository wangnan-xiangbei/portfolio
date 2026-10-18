import { type Work } from "@/data/site"
import { AppIcon } from "@/components/AppIcon"
import { StarRating } from "@/components/StarRating"

/** 单个应用的详情页（苹果 App Store 风格）。 */
export function AppDetail({ work, onBack }: { work: Work; onBack: () => void }) {
  const primary = work.links[0]
  const secondary = work.links[1]
  const btnLabel = primary?.type === "app" ? "下载" : "获取"

  return (
    <section className="container mx-auto max-w-4xl px-4 pb-16 pt-28">
      {/* 返回 */}
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
      >
        <span aria-hidden>‹</span> 全部应用
      </button>

      {/* 头部：图标 + 名称 + 操作 */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <AppIcon
          icon={work.icon}
          iconImage={work.iconImage}
          gradient={work.gradient}
          size={112}
        />
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold tracking-tight">{work.title}</h1>
          <p className="mt-1 text-muted-foreground">{work.tagline}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{work.category}</p>
          {work.rating != null && (
            <div className="mt-2 flex items-center gap-2">
              <StarRating value={work.rating} size={16} />
              <span className="text-sm font-semibold">{work.rating.toFixed(1)}</span>
            </div>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {primary && (
              <a
                href={primary.url}
                target={primary.type === "web" ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-2.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                {btnLabel}
              </a>
            )}
            {secondary && (
              <a
                href={secondary.url}
                target={secondary.type === "web" ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
              >
                {secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 截图横滑 */}
      {work.screenshots && work.screenshots.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 text-lg font-semibold">预览</h2>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3">
            {work.screenshots.map((src, i) => (
              <div
                key={src}
                className="w-56 shrink-0 snap-start overflow-hidden rounded-2xl border bg-muted shadow-sm"
              >
                <img
                  src={src}
                  alt={`${work.title} 截图 ${i + 1}`}
                  className="h-[26rem] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 介绍 */}
      <div className="mt-10">
        <h2 className="mb-3 text-lg font-semibold">介绍</h2>
        <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
          {work.description}
        </p>
        {work.badges && work.badges.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {work.badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 更新日志 */}
      {work.changelog && work.changelog.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 text-lg font-semibold">
            更新日志{work.version ? ` · 版本 ${work.version}` : ""}
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {work.changelog.map((c) => (
              <li key={c} className="rounded-xl bg-muted/50 px-4 py-3">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 信息 */}
      <div className="mt-10">
        <h2 className="mb-3 text-lg font-semibold">信息</h2>
        <dl className="grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-muted-foreground">分类</dt>
            <dd className="mt-0.5 font-medium">{work.category.split(" · ")[0]}</dd>
          </div>
          {work.version && (
            <div>
              <dt className="text-muted-foreground">版本</dt>
              <dd className="mt-0.5 font-medium">{work.version}</dd>
            </div>
          )}
          {work.size && (
            <div>
              <dt className="text-muted-foreground">大小</dt>
              <dd className="mt-0.5 font-medium">{work.size}</dd>
            </div>
          )}
          <div>
            <dt className="text-muted-foreground">发布年份</dt>
            <dd className="mt-0.5 font-medium">{work.year}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
