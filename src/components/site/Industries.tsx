import { Factory, HeartPulse, Landmark, ShoppingBag, Truck, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: ShoppingBag, name: "Retail & E-commerce" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Landmark, name: "BFSI" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
];

export function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Industries
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Domain depth where it matters most
          </h2>
          <p className="mt-4 text-muted-foreground">
            We bring pre-built accelerators and proven playbooks so your transformation starts ahead
            of the curve.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, name }, i) => (
            <Reveal key={name} delay={i * 60}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                <Icon className="size-5 text-primary" />
                <span className="font-medium">{name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
