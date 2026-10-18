import {
  ArrowUpRight,
  FileText,
  Github,
  Globe,
  Play,
  Smartphone,
  type LucideIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { works, type Work, type WorkLink } from "@/data/site"

const linkIcon: Record<WorkLink["type"], LucideIcon> = {
  app: Smartphone,
  web: Globe,
  github: Github,
  demo: Play,
  article: FileText,
}

function WorkCard({ work }: { work: Work }) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative overflow-hidden">
        {work.image ? (
          <img
            src={work.image}
            alt={work.title}
            className="aspect-[16/10] w-full object-cover"
          />
        ) : (
          <div
            className={`flex aspect-[16/10] w-full items-end bg-gradient-to-br ${work.gradient} p-5`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)]" />
            <span className="relative text-2xl font-bold text-white/90">{work.title}</span>
          </div>
        )}
        {work.status && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-900 shadow-sm">
            {work.status}
          </span>
        )}
      </div>

      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-muted-foreground">{work.category}</p>
          <span className="text-xs text-muted-foreground">{work.year}</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{work.title}</h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {work.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {work.tags.map((t) => (
            <Badge key={t} variant="secondary" className="font-normal">
              {t}
            </Badge>
          ))}
          {work.badges?.map((b) => (
            <Badge
              key={b}
              className="border-emerald-500/30 bg-emerald-500/10 font-normal text-emerald-700 dark:text-emerald-400"
            >
              {b}
            </Badge>
          ))}
        </div>
      </CardContent>

      {work.links.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2">
          {work.links.map((link) => {
            const Icon = linkIcon[link.type]
            return (
              <Button key={link.label} asChild variant="outline" size="sm">
                <a href={link.url} target="_blank" rel="noreferrer">
                  <Icon className="h-4 w-4" />
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            )
          })}
        </CardFooter>
      )}
    </Card>
  )
}

export function Works() {
  const featured = works.find((w) => w.featured)
  const rest = works.filter((w) => !w.featured)

  return (
    <section id="works" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
            作品 / Works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            我做的东西
          </h2>
          <p className="mt-3 text-muted-foreground">
            从想法到上线，这里集中展示我开发过的 App 与各类作品。每条都可点击跳转查看。
          </p>
        </div>

        <div className="space-y-8">
          {featured && <WorkCard work={featured} />}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
