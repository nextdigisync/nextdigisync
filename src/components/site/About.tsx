import { Compass, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const values = [
  {
    icon: Compass,
    title: "Our Mission",
    text: "Make next-generation technology practical for growing businesses — no jargon, no bloated programmes, just systems that work from day one.",
  },
  {
    icon: Rocket,
    title: "Our Approach",
    text: "Start with the outcome, map the process, then build. We deliver in short cycles so you see value in weeks rather than quarters.",
  },
  {
    icon: ShieldCheck,
    title: "Our Promise",
    text: "Secure, well-documented and owned by you. Every solution is handed over with training and support so your team stays in control.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              About us
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Next generation business synchronies
            </h2>
            <p className="mt-4 text-muted-foreground">
              NextDigiSync was founded on a simple belief: most businesses do not need more
              software, they need their software to work together. We bring ERP, artificial
              intelligence, automation and digital experience under one roof so information flows
              freely between teams, customers and systems.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our team blends process consultants, data engineers and product designers. That mix
              lets us look past the technology and design around how your people actually work —
              from the shop floor to the boardroom.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "8+", l: "Years of combined delivery" },
                { v: "120+", l: "Projects shipped" },
                { v: "12+", l: "Industries served" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-display text-2xl font-bold text-gradient">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={280}>
              <div className="flex items-center gap-3 rounded-2xl bg-gradient-ink p-5">
                <Sparkles className="size-5 shrink-0 text-primary" />
                <p className="text-sm text-ink-foreground/80">
                  Every engagement starts with a free discovery session — we map your current
                  process before recommending anything.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
