import { ArrowRight, Bot, Boxes, Cpu, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypeCycle } from "./TypeCycle";
import { Reveal } from "./Reveal";

const petals = [
  { icon: Cpu, label: "AI & Intelligence", pos: "left-1/2 top-0 -translate-x-1/2" },
  { icon: Workflow, label: "Automation & Workflows", pos: "right-0 top-1/2 -translate-y-1/2" },
  { icon: Boxes, label: "ERP & Data", pos: "left-1/2 bottom-0 -translate-x-1/2" },
  { icon: Bot, label: "Digital Experience", pos: "left-0 top-1/2 -translate-y-1/2" },
];

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
              Synchronise your <br className="hidden sm:block" />
              business with{" "}
              <TypeCycle
                words={["Intelligence.", "Automation.", "Real-time Data.", "Next-Gen ERP."]}
              />
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              NextDigiSync helps businesses streamline operations, delight customers and drive
              measurable growth with AI-powered solutions, ERP systems and process automation.
            </p>
          </Reveal>

          <Reveal delay={240}>
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
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-6 rounded-full border border-dashed border-border" />
            <div className="float-slow absolute inset-0">
              {petals.map(({ icon: Icon, label, pos }) => (
                <div
                  key={label}
                  className={`absolute ${pos} w-40 rounded-2xl border border-border bg-card p-4 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1`}
                >
                  <Icon className="mx-auto size-5 text-primary" />
                  <p className="mt-2 text-xs font-semibold">{label}</p>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-ink text-center shadow-lift">
              <span className="font-display text-lg font-bold text-ink-foreground">Business</span>
              <span className="font-display text-lg font-bold text-ink-foreground">Growth</span>
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
