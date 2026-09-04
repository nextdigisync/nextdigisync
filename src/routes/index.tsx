import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Solutions } from "@/components/site/Solutions";
import { Stats } from "@/components/site/Stats";
import { Industries } from "@/components/site/Industries";
import { CaseStudy } from "@/components/site/CaseStudy";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { ContactCta } from "@/components/site/ContactCta";
import { Footer } from "@/components/site/Footer";
import { AskNds } from "@/components/site/AskNds";


const title = "NextDigiSync | AI, Automation & ERP for Modern Business";
const description =
  "NextDigiSync builds AI chatbots, ERP systems, process automation and digital services that keep every part of your business in sync.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = () => setChatOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onContact={openChat} />
      <main>
        <Hero onContact={openChat} onAsk={openChat} />
        <Solutions />
        <Stats />
        <Industries />
        <CaseStudy onContact={openChat} />
        <About />
        <Contact onAsk={openChat} />
        <ContactCta onAsk={openChat} />
      </main>

      <Footer />
      <AskNds open={chatOpen} setOpen={setChatOpen} />
    </div>
  );
}
