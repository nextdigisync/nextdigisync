import { Check, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Study = {
  tag: string;
  title: string;
  summary: string;
  outcomes: string[];
  quote: string;
  author: string;
  cards: { k: string; v: string; d: string }[];
  chartLabel: string;
  bars: number[];
};

const studies: Study[] = [
  {
    tag: "Retail & E-commerce",
    title: "Omnichannel Retail Automation Platform",
    summary:
      "A fast-growing retail chain unified its online store, mobile app and 140 physical outlets on one automated platform — with AI-assisted demand forecasting.",
    outcomes: [
      "62% faster order-to-delivery cycle across 140 stores",
      "3x growth in online revenue within two quarters",
      "Single view of stock across web, app and stores",
    ],
    quote:
      "NextDigiSync connected channels we had spent years trying to join. Stock, orders and customer support finally speak the same language.",
    author: "— Head of Digital, National Retail Chain",
    cards: [
      { k: "Monthly Orders", v: "82,400", d: "+64%" },
      { k: "Support Auto-resolved", v: "71%", d: "+41%" },
    ],
    chartLabel: "Online Revenue Growth",
    bars: [32, 44, 51, 63, 79, 92],
  },
  {
    tag: "AI Chatbot",
    title: "AI Support & Lead Capture Assistant",
    summary:
      "A B2B services firm replaced its static contact form with an AI assistant that answers product questions, qualifies visitors and books meetings around the clock.",
    outcomes: [
      "4.2x more qualified leads captured from the same traffic",
      "First response time down from 9 hours to instant",
      "68% of routine queries resolved without a human",
    ],
    quote:
      "The assistant now handles the first conversation better than our old form ever did — and our sales team only sees people who are ready to talk.",
    author: "— Sales Director, B2B Services Group",
    cards: [
      { k: "Qualified Leads / mo", v: "1,180", d: "+320%" },
      { k: "Queries Deflected", v: "68%", d: "+68%" },
    ],
    chartLabel: "Monthly Qualified Leads",
    bars: [24, 38, 47, 66, 81, 96],
  },
  {
    tag: "Digital Services",
    title: "Digital Experience Rebuild for a Healthcare Group",
    summary:
      "A multi-clinic healthcare group moved from three disconnected sites to one accessible platform with online booking, patient records and a mobile companion app.",
    outcomes: [
      "Online appointment bookings up 5x in six months",
      "Page load time reduced from 6.1s to 1.3s",
      "Accessibility and compliance standards met across all journeys",
    ],
    quote:
      "Patients finally have one place to go. Booking, records and reminders all work together, and our front desk has hours back every day.",
    author: "— Operations Lead, Regional Healthcare Group",
    cards: [
      { k: "Online Bookings", v: "24,900", d: "+400%" },
      { k: "Load Time", v: "1.3s", d: "-79%" },
    ],
    chartLabel: "Digital Engagement Growth",
    bars: [28, 40, 58, 70, 84, 95],
  },
];

function StudySlide({ s, onContact }: { s: Study; onContact: () => void }) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">{s.tag}</p>
        <h3 className="mt-3 text-2xl font-bold md:text-3xl">{s.title}</h3>
        <p className="mt-4 text-muted-foreground">{s.summary}</p>
        <ul className="mt-7 space-y-3">
          {s.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
        <blockquote className="mt-8 rounded-2xl border border-border bg-card p-5 text-sm italic text-muted-foreground">
          “{s.quote}”
          <footer className="mt-3 text-xs font-semibold not-italic text-foreground">
            {s.author}
          </footer>
        </blockquote>
      </div>

      <div className="rounded-3xl bg-gradient-ink p-7 shadow-lift">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-foreground">Overview</span>
          <TrendingUp className="size-4 text-ink-foreground/70" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          {s.cards.map((c) => (
            <div key={c.k} className="rounded-2xl bg-ink-foreground/8 p-4">
              <p className="text-xs text-ink-foreground/60">{c.k}</p>
              <p className="font-display text-2xl font-bold text-ink-foreground">{c.v}</p>
              <p className="text-xs text-primary">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-ink-foreground/8 p-4">
          <p className="text-xs text-ink-foreground/60">{s.chartLabel}</p>
          <div className="mt-4 flex h-32 items-end gap-2">
            {s.bars.map((h, i) => (
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
    </div>
  );
}

export function CaseStudy({ onContact }: { onContact: () => void }) {
  return (
    <section id="portfolio" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Selected client stories</h2>
          <p className="mt-4 text-muted-foreground">
            Browse a few of the platforms, assistants and digital services we have delivered.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {studies.map((s) => (
                <CarouselItem key={s.title}>
                  <StudySlide s={s} onContact={onContact} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
