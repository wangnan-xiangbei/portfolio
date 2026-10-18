import { site, works } from "@/data/site"
import { cn } from "@/lib/utils"
import { AppIcon } from "@/components/AppIcon"
import { StarRating } from "@/components/StarRating"

export function Hero() {
  const featured = works.find((w) => w.featured) ?? works[0]
  const primary = featured.links[0]
  const btnLabel = primary?.type === "app" ? "下载" : "获取"

  return (
    <section id="home" className="container mx-auto max-w-5xl px-4 pb-12 pt-28">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            今日精选
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
            来自向北的应用
          </h1>
        </div>
        <p className="hidden text-sm text-muted-foreground sm:block">{site.role}</p>
      </div>

      {/* 编辑精选大卡 */}
      <div className="overflow-hidden rounded-[2rem] border bg-card shadow-xl">
        <div
          className={cn(
            "relative flex h-44 items-center justify-center bg-gradient-to-br",
            featured.gradient,
          )}
        >
          <span className="absolute left-5 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            编辑精选
          </span>
          <AppIcon
            icon={featured.icon}
            iconImage={featured.iconImage}
            gradient={featured.gradient}
            size={104}
            className="ring-1 ring-white/30"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold tracking-tight">{featured.title}</h2>
              <p className="mt-1 text-muted-foreground">{featured.tagline}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{featured.category}</p>
              {featured.rating != null && (
                <div className="mt-3 flex items-center gap-2">
                  <StarRating value={featured.rating} size={16} />
                  <span className="text-sm font-semibold">{featured.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
            {primary && (
              <a
                href={primary.url}
                target={primary.type === "web" ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                {btnLabel}
              </a>
            )}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {featured.description}
          </p>

          {featured.badges && featured.badges.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {featured.badges.map((b) => (
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
      </div>
    </section>
  )
}
