import { works } from "@/data/site"
import { AppIcon } from "@/components/AppIcon"
import { StarRating } from "@/components/StarRating"

export function Works() {
  return (
    <section id="works" className="container mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">全部应用</h2>
        <p className="mt-1 text-muted-foreground">
          我独立开发、正在维护的移动应用。点击「获取」前往下载或官网。
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {works.map((w) => {
          const primary = w.links[0]
          const btnLabel = primary?.type === "app" ? "下载" : "获取"
          return (
            <div
              key={w.id}
              className="flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm transition hover:shadow-md"
            >
              <AppIcon
                icon={w.icon}
                iconImage={w.iconImage}
                gradient={w.gradient}
                size={64}
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="truncate font-semibold">{w.title}</h3>
                  {w.featured && (
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                      精选
                    </span>
                  )}
                  {w.status && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {w.status}
                    </span>
                  )}
                </div>
                <p className="truncate text-sm text-muted-foreground">{w.tagline}</p>
                <p className="truncate text-xs text-muted-foreground">{w.category}</p>
                {w.rating != null && (
                  <div className="mt-1 flex items-center gap-1.5">
                    <StarRating value={w.rating} size={12} />
                    <span className="text-xs text-muted-foreground">
                      {w.rating.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>
              {primary && (
                <a
                  href={primary.url}
                  target={primary.type === "web" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  {btnLabel}
                </a>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
