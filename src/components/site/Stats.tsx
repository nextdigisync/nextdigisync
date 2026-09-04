import { useEffect, useRef, useState } from "react";
import { Award, Building2, Layers, Users } from "lucide-react";

const stats = [
  { icon: Layers, value: 120, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 50, suffix: "+", label: "Happy Clients" },
  { icon: Building2, value: 12, suffix: "+", label: "Industries Served" },
  { icon: Award, value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1400, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="impact" className="grid-lines relative overflow-hidden bg-gradient-ink py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-ink-foreground/60 uppercase">
          Our impact in numbers
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-ink-foreground/10">
                <Icon className="size-5 text-ink-foreground" />
              </span>
              <div>
                <p className="font-display text-3xl font-bold text-ink-foreground">
                  <Counter to={value} suffix={suffix} />
                </p>
                <p className="text-sm text-ink-foreground/65">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
