import { Boxes, Bot, Workflow, Cloud, Code2, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Boxes,
    title: "ERP Solutions",
    text: "Integrated ERP systems that simplify operations, improve visibility and drive efficiency.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    text: "Intelligent assistants that engage customers, automate support and boost satisfaction.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    text: "Automate repetitive tasks and workflows to reduce cost and eliminate bottlenecks.",
  },
  {
    icon: Cloud,
    title: "Digital Services",
    text: "Cloud, DevOps and cybersecurity services tailored to your growth roadmap.",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    text: "Scalable web and mobile applications built with modern technologies.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            End-to-End Solutions for Modern Businesses
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand shadow-soft">
                  <Icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
