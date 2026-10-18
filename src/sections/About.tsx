import { site } from "@/data/site"

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-border bg-muted/30 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
            关于 / About
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            关于我
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {site.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {site.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-2 text-lg font-semibold leading-snug">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
