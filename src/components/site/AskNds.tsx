import { useEffect, useRef, useState } from "react";
import { MessageSquareText, Send, X, CheckCircle2 } from "lucide-react";
import logo from "@/assets/nds-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Msg = { id: number; from: "bot" | "user"; text: string };

type Step = "interest" | "name" | "email" | "phone" | "details" | "done";

const interests = [
  "ERP Solutions",
  "AI Chatbots",
  "Process Automation",
  "Digital Services",
  "Web & App Development",
];

const prompts: Record<Step, string> = {
  interest: "Hi, I'm ASK NDS 👋 What can we help you with today?",
  name: "Great choice! What's your name?",
  email: "Thanks! What's the best email to reach you on?",
  phone: "And a phone number? (type 'skip' if you prefer email only)",
  details: "Tell me briefly about your requirement or timeline.",
  done: "",
};

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function AskNds({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [step, setStep] = useState<Step>("interest");
  const [messages, setMessages] = useState<Msg[]>([
    { id: 0, from: "bot", text: prompts.interest },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [lead, setLead] = useState<Record<string, string>>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open, step]);

  const push = (from: Msg["from"], text: string) =>
    setMessages((m) => [...m, { id: m.length + Date.now(), from, text }]);

  const botSay = (text: string) => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      push("bot", text);
    }, 650);
  };

  const submit = (raw: string) => {
    const value = raw.trim();
    if (!value || step === "done") return;
    push("user", value);
    setInput("");

    if (step === "email" && !emailOk(value)) {
      botSay("That email looks off — could you double-check it?");
      return;
    }

    const next: Record<Step, Step> = {
      interest: "name",
      name: "email",
      email: "phone",
      phone: "details",
      details: "done",
      done: "done",
    };

    const updated = { ...lead, [step]: value };
    setLead(updated);
    const nextStep = next[step];
    setStep(nextStep);

    if (nextStep === "done") {
      try {
        const all = JSON.parse(localStorage.getItem("nds-leads") ?? "[]");
        all.push({ ...updated, at: new Date().toISOString() });
        localStorage.setItem("nds-leads", JSON.stringify(all));
      } catch {
        /* storage unavailable */
      }
      botSay(
        `Thanks ${updated['name'] ?? ""}! Our team will reach out on ${updated['email']} within one business day about ${updated['interest']}.`,
      );
      return;
    }

    botSay(prompts[nextStep]);
  };

  const restart = () => {
    setStep("interest");
    setLead({});
    setMessages([{ id: Date.now(), from: "bot", text: prompts.interest }]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open ASK NDS chat"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
      >
        {open ? <X className="size-4" /> : <MessageSquareText className="size-4" />}
        {open ? "Close" : "Ask NDS"}
      </button>

      {open && (
        <div
          className="fixed right-5 bottom-24 z-50 flex h-[32rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lift"
          style={{ animation: "reveal-up .35s cubic-bezier(.16,1,.3,1) both" }}
        >
          <div className="flex items-center gap-3 bg-gradient-ink px-4 py-3.5">
            <img src={logo.url} alt="" className="size-9 rounded-full bg-ink-foreground/10 p-1" />
            <div className="flex-1">
              <p className="font-display text-sm font-bold text-ink-foreground">ASK NDS</p>
              <p className="text-xs text-ink-foreground/60">Typically replies instantly</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X className="size-4 text-ink-foreground/70" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-surface px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={m.from === "user" ? "flex justify-end" : "flex justify-start"}
                style={{ animation: "reveal-up .3s both" }}
              >
                <div
                  className={
                    m.from === "user"
                      ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground"
                      : "max-w-[85%] rounded-2xl rounded-bl-sm border border-border bg-card px-3.5 py-2.5 text-sm text-card-foreground"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-1 rounded-2xl border border-border bg-card px-3 py-3 w-fit">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="size-1.5 rounded-full bg-muted-foreground"
                    style={{ animation: `caret-blink 1s ${i * 150}ms infinite` }}
                  />
                ))}
              </div>
            )}

            {step === "interest" && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {interests.map((i) => (
                  <button
                    key={i}
                    onClick={() => submit(i)}
                    className="rounded-full border border-primary/30 bg-card px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-accent"
                  >
                    {i}
                  </button>
                ))}
              </div>
            )}

            {step === "done" && !typing && (
              <div className="flex items-center gap-2 rounded-2xl border border-primary/25 bg-accent px-3.5 py-3 text-sm text-accent-foreground">
                <CheckCircle2 className="size-4" /> Lead captured — talk soon!
              </div>
            )}
          </div>

          <div className="border-t border-border bg-card p-3">
            {step === "done" ? (
              <Button className="w-full" variant="outline" onClick={restart}>
                Start a new enquiry
              </Button>
            ) : (
              <form
                className="flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  submit(input);
                }}
              >
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    step === "interest" ? "Or type your question…" : "Type your answer…"
                  }
                />
                <Button type="submit" size="icon" aria-label="Send">
                  <Send className="size-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
