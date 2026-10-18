import { ArrowDown, ArrowUpRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { site, works } from "@/data/site"

const featured = works.find((w) => w.featured) ?? works[0]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:pt-36"
    >
      {/* 背景装饰 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/30 to-fuchsia-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/25 to-teal-400/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* 左：文字 */}
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {site.role}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            你好，我是 <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">{site.name}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#works">
                查看作品
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                联系我
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* 右：重点作品预览卡 */}
        {featured && (
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-3 shadow-xl">
              <div
                className={`relative flex aspect-[4/3] items-end overflow-hidden rounded-xl bg-gradient-to-br ${featured.gradient} p-5`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                <div className="relative">
                  <p className="text-sm font-medium text-white/80">{featured.category}</p>
                  <p className="text-3xl font-bold text-white">{featured.title}</p>
                </div>
                {featured.status && (
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-900">
                    {featured.status}
                  </span>
                )}
              </div>

              <div className="p-4">
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {featured.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featured.badges?.map((b) => (
                    <Badge key={b} variant="secondary" className="font-normal">
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-xl"
            />
          </div>
        )}
      </div>

      <a
        href="#works"
        className="mx-auto mt-16 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        向下滚动浏览作品
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
