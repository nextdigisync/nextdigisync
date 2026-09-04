import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nds-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];


export function Navbar({ onContact }: { onContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo.url} alt="NextDigiSync logo" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-bold tracking-tight">
            Next<span className="text-gradient">DigiSync</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={onContact} className="hidden sm:inline-flex">
            Contact Us
          </Button>
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button className="mt-2" onClick={onContact}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
