import logo from "@/assets/nds-logo.png.asset.json";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="NextDigiSync logo" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-bold">
              Next<span className="text-gradient">DigiSync</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Next generation business synchronies — AI, automation and ERP built to keep every part
            of your business in sync.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Solutions</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>ERP Solutions</li>
            <li>AI Chatbots</li>
            <li>Process Automation</li>
            <li>Digital Services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" /> hello@nextdigisync.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" /> +00 000 000 0000
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> Add your office address
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-5 pt-6 text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} NextDigiSync. All rights reserved.
      </div>
    </footer>
  );
}
