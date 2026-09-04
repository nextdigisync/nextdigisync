import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function ContactCta({ onAsk }: { onAsk: () => void }) {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="grid-lines relative overflow-hidden rounded-3xl bg-gradient-ink px-8 py-14 text-center shadow-lift md:px-16">
            <h2 className="text-3xl font-bold text-ink-foreground md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-foreground/70">
              Let's build something intelligent together. Chat with ASK NDS and our team will get
              back to you within one business day.
            </p>
            <button
              onClick={onAsk}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Talk to an Expert
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
