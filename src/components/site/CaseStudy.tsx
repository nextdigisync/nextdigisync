import { Check, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const outcomes = [
  "45% increase in operational efficiency",
  "30% reduction in inventory holding costs",
  "Real-time dashboards for better decisions",
];

export function CaseStudy({ onContact }: { onContact: () => void }) {
  return (
    <section id="work" className="bg-surface py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Case study
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Manufacturing ERP Implementation
          </h2>
          <p className="mt-4 text-muted-foreground">
            A leading manufacturing company streamlined its operations and improved visibility with
            a modular ERP integrated across production, inventory, finance and sales.
          </p>
          <ul className="mt-7 space-y-3">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 rounded-2xl border border-border bg-card p-5 text-sm italic text-muted-foreground">
            “NextDigiSync transformed the way we operate. We now make faster decisions with accurate
            data and improved efficiency.”
            <footer className="mt-3 text-xs font-semibold not-italic text-foreground">
              — COO, Leading Manufacturing Company
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-gradient-ink p-7 shadow-lift">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink-foreground">Overview</span>
              <TrendingUp className="size-4 text-ink-foreground/70" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                { k: "Total Orders", v: "5,320", d: "+18.5%" },
                { k: "On-time Delivery", v: "96%", d: "+8.2%" },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl bg-ink-foreground/8 p-4">
                  <p className="text-xs text-ink-foreground/60">{c.k}</p>
                  <p className="font-display text-2xl font-bold text-ink-foreground">{c.v}</p>
                  <p className="text-xs text-primary">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-ink-foreground/8 p-4">
              <p className="text-xs text-ink-foreground/60">Production Output</p>
              <div className="mt-4 flex h-32 items-end gap-2">
                {[38, 52, 45, 66, 74, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-brand"
                    style={{ height: `${h}%`, animation: `reveal-up .8s ${i * 90}ms both` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-ink-foreground/50">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            <button
              onClick={onContact}
              className="mt-6 w-full rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Want similar results? Get in touch
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
