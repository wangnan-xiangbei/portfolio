import { ArrowUpRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-transparent p-10 text-center sm:p-14">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          一起做点东西？
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          无论是合作、反馈，还是只想聊聊产品想法，都欢迎联系我。
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </Button>
          {site.socials.map((s) => (
            <Button key={s.label} asChild variant="outline" size="lg">
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      <footer className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} {site.name}. 保留所有权利。
        </p>
        {site.icp && (
          <p>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              {site.icp}
            </a>
          </p>
        )}
      </footer>
    </section>
  )
}
