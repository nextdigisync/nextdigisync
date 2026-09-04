import { useEffect, useState } from "react";

export function TypeCycle({ words, className = "" }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const delay = done ? 1600 : cleared ? 200 : deleting ? 40 : 75;

    const timer = window.setTimeout(() => {
      if (done) {
        setDeleting(true);
        return;
      }
      if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      <span className="text-gradient">{text}</span>
      <span className="caret-blink ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[2px] bg-primary" />
    </span>
  );
}
