import { Check, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const outcomes = [
  "62% faster order-to-delivery cycle across 140 stores",
  "3x growth in online revenue within two quarters",
  "Single view of stock across web, app and stores",
];

export function CaseStudy({ onContact }: { onContact: () => void }) {
  return (
    <section id="portfolio" className="bg-surface py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Portfolio</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Omnichannel Retail Automation Platform
          </h2>
          <p className="mt-4 text-muted-foreground">
            A fast-growing retail chain unified its online store, mobile app and 140 physical outlets
            on one automated platform — with AI-assisted demand forecasting and a support chatbot
            handling first-line customer queries.
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
            “NextDigiSync connected channels we had spent years trying to join. Stock, orders and
            customer support finally speak the same language.”
            <footer className="mt-3 text-xs font-semibold not-italic text-foreground">
              — Head of Digital, National Retail Chain
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
                { k: "Monthly Orders", v: "82,400", d: "+64%" },
                { k: "Support Auto-resolved", v: "71%", d: "+41%" },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl bg-ink-foreground/8 p-4">
                  <p className="text-xs text-ink-foreground/60">{c.k}</p>
                  <p className="font-display text-2xl font-bold text-ink-foreground">{c.v}</p>
                  <p className="text-xs text-primary">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-ink-foreground/8 p-4">
              <p className="text-xs text-ink-foreground/60">Online Revenue Growth</p>
              <div className="mt-4 flex h-32 items-end gap-2">
                {[32, 44, 51, 63, 79, 92].map((h, i) => (
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
