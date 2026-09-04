import { Bot, Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const details = [
  { icon: Mail, label: "Email", value: "hello@nextdigisync.com" },
  { icon: Phone, label: "Phone", value: "+00 000 000 0000" },
  { icon: MapPin, label: "Office", value: "Add your office address" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9:00 – 18:00" },
];

const steps = [
  "Tell us about your business and the challenge you want solved.",
  "We reply within one business day with a discovery slot.",
  "You receive a clear scope, timeline and investment estimate.",
];

export function Contact({ onAsk }: { onAsk: () => void }) {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Contact us
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let's start the conversation</h2>
          <p className="mt-4 text-muted-foreground">
            Whether you are replacing a legacy ERP, automating a manual process or exploring AI for
            the first time, we are happy to talk it through — no obligation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="size-4 text-primary" />
                  </span>
                  <p className="mt-3 text-xs tracking-widest text-muted-foreground uppercase">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <MessageSquare className="size-4 text-primary" /> What happens next
              </h3>
              <ol className="mt-4 space-y-3">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-ink p-7 shadow-lift">
              <div>
                <Bot className="size-6 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-ink-foreground">Chat with ASK NDS</h3>
                <p className="mt-3 text-sm text-ink-foreground/70">
                  Our assistant takes a few quick details — what you need, who you are and how to
                  reach you — and passes them straight to our team.
                </p>
              </div>
              <button
                onClick={onAsk}
                className="mt-8 w-full rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start the chat
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
