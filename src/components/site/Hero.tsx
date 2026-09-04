import { ArrowRight, Bot, Boxes, Cpu, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const nodes = [
  { icon: Cpu, label: "AI & Intelligence", desc: "Smart assistants & insights" },
  { icon: Workflow, label: "Automation", desc: "Workflows without friction" },
  { icon: Boxes, label: "ERP & Data", desc: "One connected source of truth" },
  { icon: Bot, label: "Digital Experience", desc: "Web, apps & journeys" },
];

function Node({
  icon: Icon,
  label,
  desc,
}: {
  icon: typeof Cpu;
  label: string;
  desc: string;
}) {
  return (
    <div className="w-full rounded-2xl border border-border bg-background p-4 text-center shadow-soft transition-colors hover:border-primary/40">
      <span className="mx-auto flex size-10 items-center justify-center rounded-xl bg-secondary">
        <Icon className="size-5 text-primary" />
      </span>
      <p className="mt-2.5 text-sm font-semibold">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}

export function Hero({ onContact, onAsk }: { onContact: () => void; onAsk: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute -top-40 -right-32 size-[36rem] rounded-full bg-gradient-brand opacity-15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 size-[30rem] rounded-full bg-gradient-brand opacity-10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
              AI • Automation • ERP • Digital
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
              Intelligent Solutions. <br className="hidden sm:block" />
              <span className="text-gradient">Real Business Impact</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              NextDigiSync helps businesses streamline operations, delight customers and drive
              measurable growth with AI-powered solutions, ERP systems and process automation.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button size="lg" onClick={onContact} className="group">
                Explore Solutions
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={onAsk}>
                <Bot /> Ask NDS
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="mx-auto w-full max-w-lg rounded-3xl border border-border bg-card p-6 shadow-lift md:p-8">
            <p className="text-center text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
              The NextDigiSync model
            </p>

            {/* hub & spoke infographic */}
            <div className="relative mt-7">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="size-56 rounded-full border border-dashed border-primary/30 sm:size-64" />
              </div>

              <div className="relative flex flex-col items-center gap-5">
                <Node {...nodes[0]!} />

                <div className="flex w-full items-center gap-4">
                  <Node {...nodes[1]!} />
                  <div className="flex size-24 shrink-0 flex-col items-center justify-center rounded-full bg-gradient-ink text-center shadow-lift ring-8 ring-card sm:size-28">
                    <span className="font-display text-sm font-bold text-ink-foreground sm:text-base">
                      Business
                    </span>
                    <span className="font-display text-sm font-bold text-ink-foreground sm:text-base">
                      Growth
                    </span>
                  </div>
                  <Node {...nodes[2]!} />
                </div>

                <Node {...nodes[3]!} />
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
              {[
                { k: "Sync", v: "Connect" },
                { k: "Automate", v: "Simplify" },
                { k: "Grow", v: "Scale" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="text-sm font-semibold text-primary">{s.k}</p>
                  <p className="text-xs text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
          Trusted by forward-thinking businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 lg:grid-cols-6">
          {["ACME Corp", "Brighton Group", "Vertex", "Infinite", "Quantum", "Greyline"].map((n) => (
            <div
              key={n}
              className="font-display text-center text-sm font-bold tracking-tight text-muted-foreground"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
