"use client";
import { useState, useRef, useEffect, useCallback } from "react";

// ─── Knowledge Base (no emojis, clean & short) ───────────────────────────────
const KB = [
  {
    keys: ["service", "offer", "kya karte", "kya karta", "help", "provide", "all service", "sab", "sabhi", "list"],
    answer: `**KODIT Agency — 6 Services:**\n\n• **Web Development** — MERN stack & Next.js, 14-day delivery\n• **SEO + GEO + AEO** — Google rankings + AI search citations\n• **Google Business Profile** — Local Maps optimization\n• **Graphic Design** — Logos, brand kits, social templates\n• **Social Media Marketing** — Instagram, Facebook, LinkedIn, YouTube\n• **AI Automation** — n8n workflows, saves 10+ hrs/week\n\nKisi bhi service ke detail ke liye puchein.`,
  },
  {
    keys: ["web", "website", "develop", "mern", "react", "next", "next.js", "node", "mongo", "site banao", "website bana"],
    answer: `**Web Development at KODIT:**\n\n• 14-day delivery — live in 2 weeks\n• MERN stack + Next.js\n• Sub-2.6s page load speed\n• Fully responsive (mobile/tablet/desktop)\n• SEO-ready structure built-in\n• Ideal for: clinics, restaurants, coaching, e-commerce, startups\n\nContact for free quote:\nkoditagency@gmail.com | +91 7428276525`,
  },
  {
    keys: ["seo and geo", "seo & geo", "geo services", "seo services", "seo", "geo", "aeo", "rank", "google rank", "search engine", "organic", "keyword", "traffic", "ranking", "perplexity", "chatgpt search", "ai overview", "generative engine"],
    answer: `**SEO + GEO + AEO:**\n\n• **Local SEO** — Google Local Pack (3-pack) domination\n• **GEO** — Your brand cited by ChatGPT, Perplexity, Gemini, AI Overviews\n• **AEO** — Featured snippets & direct answer boxes\n• Process: Keyword mapping → Technical audit → Content → Schema → Reports\n• Timeline: Results start in 60–90 days\n• Monthly transparent reporting included`,
  },
  {
    keys: ["gmb", "gbp", "google business", "google map", "map", "citation", "review", "google profile", "maps listing"],
    answer: `**Google Business Profile Optimization:**\n\n• Full GBP audit & optimization\n• Local citation building\n• Review generation strategy\n• Weekly posts & updates\n• Local keyword targeting\n• Monthly performance reports\n\nResult: More calls, walk-ins & inquiries from nearby customers.`,
  },
  {
    keys: ["ai automation", "automation", "n8n", "workflow", "automate", "crm", "lead capture", "invoice", "reminder", "whatsapp bot"],
    answer: `**AI & Workflow Automation (n8n):**\n\n• Lead capture → CRM auto-entry\n• WhatsApp appointment reminders\n• Auto invoice generation & tracking\n• Daily sales report emails\n• Social media auto-scheduling\n• Custom AI chatbots on your data\n• Inventory & stock alerts\n\nTool: n8n (open-source, self-hosted)`,
  },
  {
    keys: ["graphic", "design", "logo", "brand", "branding", "creative", "poster", "banner", "social template", "pitch deck", "identity"],
    answer: `**Graphic Design & Brand Identity:**\n\n• Custom logo design\n• Brand guidelines (colors, fonts, voice)\n• Pitch decks & presentations\n• Social media post templates\n• Brochures & flyers\n• Business cards\n\nStyle: Modern, clean, premium.`,
  },
  {
    keys: ["social media", "instagram", "facebook", "linkedin", "youtube", "post", "reel", "content", "follower", "engagement", "smm"],
    answer: `**Social Media Marketing:**\n\n• Monthly content calendar\n• Reels & video content\n• Custom graphics\n• Analytics & reporting\n• DM & comment management\n• Platforms: Instagram, Facebook, LinkedIn, YouTube\n\nWe track real conversions — calls, DMs, WhatsApp chats.`,
  },
  {
    keys: ["price", "pricing", "cost", "kitna", "rate", "fee", "charge", "budget", "payment", "retainer", "monthly", "quote", "package"],
    answer: `**KODIT Pricing:**\n\n• Web Development — project-based (custom quote)\n• Graphic Design — project-based (per deliverable)\n• SEO / GMB / Social — monthly retainer\n\nNo long-term contracts. Cancel anytime with 30-day notice.\n\nFor a custom quote:\n+91 7428276525 | koditagency@gmail.com`,
  },
  {
    keys: ["contact", "phone", "email", "whatsapp", "reach", "address", "location", "office", "where", "call", "number", "jahangirpuri", "delhi", "new delhi", "kahan"],
    answer: `**KODIT Agency — Contact:**\n\n• Address: Jahangirpuri, New Delhi — 110033\n• Email: koditagency@gmail.com\n• Phone / WhatsApp: +91 7428276525\n• Response time: ~4 hours avg\n• Website: kodit.agency`,
  },
  {
    keys: ["team", "who", "founder", "ayush", "meshid", "nitin", "people", "staff", "employee", "owner", "member"],
    answer: `**KODIT Team:**\n\n• **Ayush Jha** — Founder & Lead Developer\n  MERN stack, Next.js, system architecture\n\n• **Meshid Ahmed** — Marketing & Project Management\n  Strategy, client relations, campaigns\n\n• **Nitin** — Social Media Manager\n  Content, social strategy, community`,
  },
  {
    keys: ["founded", "launch", "start", "year", "history", "since", "kitne saal", "2026", "background"],
    answer: `**About KODIT:**\n\n• Founded: 2026, New Delhi, India\n• HQ: Jahangirpuri, New Delhi\n• Serving clients pan-India\n• Specialties: MERN stack, Next.js, SEO, GEO, n8n automations\n• Focus: Real ROI for Indian SMBs`,
  },
  {
    keys: ["project", "portfolio", "stats", "result", "track record", "achievement", "success", "delivered"],
    answer: `**KODIT Track Record:**\n\n• 30+ projects delivered\n• 80% client retention rate\n• 1.6x average client business growth\n• 14-day avg website delivery\n• Pan-India client base\n\nIndustries: Clinics, coaching, salons, restaurants, real estate, e-commerce, startups`,
  },
  {
    keys: ["process", "kaise karte", "how", "step", "timeline", "kab milega", "delivery", "onboarding"],
    answer: `**How We Work:**\n\n1. **Discovery Call** — Free, understand your goals\n2. **Proposal** — Custom plan + timeline + pricing\n3. **Execution:**\n   - Web: Design → Dev → Test → Launch (14 days)\n   - SEO: Audit → Keywords → On-page → Reports\n   - Social: Calendar → Design → Schedule\n4. **Monthly Reports** — Progress & optimization\n\nStart: +91 7428276525`,
  },
  {
    keys: ["target", "industry", "clinic", "restaurant", "salon", "coaching", "startup", "ecommerce", "real estate", "law"],
    answer: `**Industries KODIT Serves:**\n\n• Medical clinics & healthcare\n• Coaching institutes & EdTech\n• Salons & beauty parlours\n• Restaurants & food businesses\n• Real estate firms\n• E-commerce & D2C brands\n• Law firms\n• Startups & new businesses\n\nHar budget ke liye solution available hai.`,
  },
  {
    keys: ["hello", "hi", "hii", "hey", "namaste", "namaskar", "hlo", "good morning", "good afternoon", "good evening", "kya ho"],
    answer: `Hello! I am KODIT Assistant.\n\nI can help you with:\n• Web Development\n• SEO, GEO & AEO\n• Google Business Profile\n• AI Automation\n• Graphic Design\n• Social Media Marketing\n• Pricing & Packages\n• Contact & Location\n\nSelect a topic below or type your question.`,
  },
  {
    keys: ["free", "consultation", "demo", "trial", "free call", "free audit"],
    answer: `**Free Consultation Available:**\n\nKODIT offers a free discovery call:\n• Understand your business goals\n• Suggest a custom digital strategy\n• No commitment required\n\nBook now:\n+91 7428276525\nkoditagency@gmail.com`,
  },
];

// ─── Smart Matcher ────────────────────────────────────────────────────────────
function getBotReply(query) {
  const q = query.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of KB) {
    let score = 0;
    for (const key of entry.keys) {
      if (q.includes(key)) {
        score += key.split(" ").length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch) return bestMatch.answer;

  return `Sorry, I only answer questions about KODIT Agency.\n\nYou can ask about:\n• Services (Web Dev, SEO, GMB, Design, Social, AI)\n• Pricing & packages\n• Contact & location\n• Team & founders\n• Work process\n\nOr call directly: +91 7428276525`;
}

// ─── Render rich text (bold + bullets + clickable links) ─────────────────────
function RichMessage({ content }) {
  return (
    <div className="rich-msg">
      {content.split("\n").map((line, li) => {
        const isBullet = line.startsWith("• ");
        const isIndent = line.startsWith("   -");
        const text = isBullet ? line.slice(2) : isIndent ? line.slice(4) : line;
        if (!text.trim()) return <br key={li} />;

        const segments = text.split(/(\*\*.*?\*\*|koditagency@gmail\.com|\+91\s?7428276525)/g);
        const rendered = segments.map((seg, si) => {
          if (seg.startsWith("**") && seg.endsWith("**")) {
            return <strong key={si}>{seg.slice(2, -2)}</strong>;
          }
          if (seg.includes("@") && seg.includes(".")) {
            return <a key={si} href={`mailto:${seg.trim()}`} className="chat-link">{seg.trim()}</a>;
          }
          if (seg.startsWith("+91")) {
            return <a key={si} href={`tel:${seg.replace(/\s/g, "")}`} className="chat-link">{seg}</a>;
          }
          return seg;
        });

        if (isBullet) return (
          <div key={li} className="chat-bullet"><span className="chat-bullet-dot">—</span><span>{rendered}</span></div>
        );
        if (isIndent) return (
          <div key={li} className="chat-indent">{rendered}</div>
        );
        return <div key={li} className="chat-line">{rendered}</div>;
      })}
    </div>
  );
}

// ─── Suggestion Chips ─────────────────────────────────────────────────────────
const SUGGESTIONS = [
  { label: "All Services", text: "What services do you offer?" },
  { label: "Web Dev", text: "Tell me about Web Development." },
  { label: "SEO & GEO", text: "Tell me about SEO and GEO." },
  { label: "Google Maps", text: "How do you optimize Google Business Profiles?" },
  { label: "AI Automation", text: "What AI automation do you build?" },
  { label: "Graphic Design", text: "Tell me about Graphic Design." },
  { label: "Social Media", text: "How do you handle Social Media Marketing?" },
  { label: "Pricing", text: "What is your pricing model?" },
  { label: "Contact", text: "How can I contact KODIT?" },
  { label: "Team", text: "Who is in the KODIT team?" },
  { label: "Work Process", text: "What is your work process?" },
  { label: "Free Call", text: "Do you offer a free consultation?" },
];

// ─── Main Widget ──────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const INITIAL_MSG = {
    role: "assistant",
    content: "Hello! I am KODIT Assistant.\n\nAsk me anything about KODIT Agency — services, pricing, team, or contact details.\n\nSelect a topic below or type your question."
  };

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  // Track whether user is manually scrolling up
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const isAtBottomRef = useRef(true);
  const prevMsgCountRef = useRef(1);

  // ── Smart scroll: only scroll to bottom when NEW message added & user was at bottom
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const newMsgAdded = messages.length > prevMsgCountRef.current;
    prevMsgCountRef.current = messages.length;
    // Always scroll on new message (user sent or bot replied)
    if (newMsgAdded) {
      el.scrollTop = el.scrollHeight;
      isAtBottomRef.current = true;
    }
  }, [messages]);

  // ── Track user scroll position
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const onScroll = () => {
      const threshold = 40;
      isAtBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // ── Prevent page scroll when mouse is over chat body
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const onWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const atTop = scrollTop === 0 && e.deltaY < 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;
      // Only preventDefault if there is room to scroll inside the chat
      if (!atTop && !atBottom) {
        e.preventDefault();
      } else if (atTop && e.deltaY < 0) {
        e.preventDefault();
      } else if (atBottom && e.deltaY > 0) {
        e.preventDefault();
      }
      e.stopPropagation();
    };
    // passive: false required to call preventDefault
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ── Focus input when chat opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const handleSend = useCallback((textArg) => {
    const trimmed = (textArg !== undefined ? textArg : input).trim();
    if (!trimmed || loading) return;
    setMessages((p) => [...p, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages((p) => [...p, { role: "assistant", content: getBotReply(trimmed) }]);
      setLoading(false);
    }, 450);
  }, [input, loading]);

  const resetChat = () => {
    setMessages([INITIAL_MSG]);
    prevMsgCountRef.current = 1;
  };

  return (
    <>
      <div className="cw-root">
        {/* Bubble */}
        {!open && (
          <button className="cw-bubble" onClick={() => setOpen(true)} aria-label="Open KODIT chat">
            <img src="/icon.png" alt="KODIT" width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} />
            <span className="cw-bubble-badge">?</span>
          </button>
        )}

        {/* Window */}
        {open && (
          <div className="cw-window">
            {/* Header */}
            <div className="cw-head">
              <div className="cw-head-left">
                <div className="cw-avatar-wrap">
                  <img src="/icon.png" alt="KODIT" width={32} height={32} style={{ borderRadius: "50%", objectFit: "cover", display: "block" }} />
                  <span className="cw-online-dot" />
                </div>
                <div>
                  <span className="cw-name">KODIT Assistant</span>
                  <span className="cw-status">Online — Instant Reply</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "4px" }}>
                <button className="cw-head-btn" onClick={resetChat} title="Reset chat" aria-label="Reset">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
                  </svg>
                </button>
                <button className="cw-head-btn cw-close" onClick={() => setOpen(false)} aria-label="Close">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages — scroll container */}
            <div className="cw-body" ref={bodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={`cw-msg-wrap ${m.role === "user" ? "cw-msg-wrap--user" : ""}`}>
                  {m.role === "assistant" && (
                    <div className="cw-msg-icon">
                      <img src="/icon.png" alt="K" width={20} height={20} style={{ borderRadius: "50%", objectFit: "cover", display: "block" }} />
                    </div>
                  )}
                  <div className={`cw-msg ${m.role === "user" ? "cw-msg--user" : "cw-msg--bot"}`}>
                    <RichMessage content={m.content} />
                  </div>
                </div>
              ))}
              {loading && (
                <div className="cw-msg-wrap">
                  <div className="cw-msg-icon">
                    <img src="/icon.png" alt="K" width={20} height={20} style={{ borderRadius: "50%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div className="cw-msg cw-msg--bot cw-typing">
                    <span /><span /><span />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestion Chips */}
            <div className="cw-chips-bar">
              {SUGGESTIONS.map((s, i) => (
                <button key={i} className="cw-chip" onClick={() => handleSend(s.text)} disabled={loading}>
                  {s.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="cw-input-bar">
              <input
                ref={inputRef}
                className="cw-input"
                placeholder="Ask about KODIT..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                disabled={loading}
              />
              <button className="cw-send" onClick={() => handleSend()} disabled={loading || !input.trim()} aria-label="Send">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .cw-root {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: 'Inter', sans-serif;
        }

        /* Bubble */
        .cw-bubble {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a1a, #0c0c0c);
          border: 2px solid rgba(232,77,14,0.4);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: cwPulse 2.5s ease-in-out infinite;
          transition: transform 0.2s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        .cw-bubble:hover { transform: scale(1.08); }
        .cw-bubble-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #E84D0E;
          color: white;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #0c0c0c;
        }
        @keyframes cwPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(0,0,0,0.4), 0 0 0 0 rgba(232,77,14,0.25); }
          50% { box-shadow: 0 4px 20px rgba(0,0,0,0.4), 0 0 0 10px rgba(232,77,14,0); }
        }

        /* Window */
        .cw-window {
          width: 360px;
          height: 540px;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 16px 60px rgba(0,0,0,0.6);
          animation: cwSlide 0.22s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes cwSlide {
          from { opacity: 0; transform: translateY(16px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Header */
        .cw-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 15px;
          background: #0c0c0c;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .cw-head-left { display: flex; align-items: center; gap: 10px; }
        .cw-avatar-wrap { position: relative; width: 36px; height: 36px; }
        .cw-online-dot {
          position: absolute;
          bottom: 1px; right: 1px;
          width: 9px; height: 9px;
          border-radius: 50%;
          background: #22c55e;
          border: 2px solid #0c0c0c;
        }
        .cw-name {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #F0EDE8;
          line-height: 1.2;
        }
        .cw-status {
          display: block;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          margin-top: 1px;
        }
        .cw-head-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          padding: 6px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        .cw-head-btn:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .cw-close:hover { color: #E84D0E; }

        /* Body — THE SCROLL FIX */
        .cw-body {
          flex: 1;
          min-height: 0;          /* critical: allows flex child to shrink & scroll */
          overflow-y: scroll;     /* always show scrollbar track */
          overflow-x: hidden;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
          overscroll-behavior: contain;
        }
        .cw-body::-webkit-scrollbar { width: 4px; }
        .cw-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

        /* Message bubbles */
        .cw-msg-wrap {
          display: flex;
          align-items: flex-end;
          gap: 7px;
          animation: cwMsgIn 0.18s ease;
        }
        .cw-msg-wrap--user { flex-direction: row-reverse; }
        @keyframes cwMsgIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cw-msg-icon {
          width: 22px; height: 22px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a1a;
        }
        .cw-msg {
          max-width: 84%;
          padding: 9px 13px;
          border-radius: 14px;
          font-size: 12.5px;
          line-height: 1.6;
        }
        .cw-msg--bot {
          background: #1c1c1c;
          color: rgba(255,255,255,0.87);
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .cw-msg--user {
          background: rgba(232,77,14,0.18);
          color: #F0EDE8;
          border-bottom-right-radius: 4px;
          border: 1px solid rgba(232,77,14,0.25);
        }

        /* Rich message internals */
        .rich-msg { display: flex; flex-direction: column; gap: 2px; }
        .chat-line { margin: 1px 0; }
        .chat-bullet {
          display: flex;
          gap: 8px;
          margin: 2px 0;
          align-items: flex-start;
        }
        .chat-bullet-dot {
          color: rgba(232,77,14,0.8);
          flex-shrink: 0;
          font-size: 11px;
          margin-top: 2px;
        }
        .chat-indent {
          margin: 2px 0 2px 16px;
          color: rgba(255,255,255,0.7);
        }
        .chat-link {
          color: #E84D0E;
          text-decoration: underline;
          text-decoration-color: rgba(232,77,14,0.35);
        }
        .chat-link:hover { color: #ff6b35; }

        /* Typing dots */
        .cw-typing {
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 11px 14px !important;
          min-width: 50px;
        }
        .cw-typing span {
          display: block;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          animation: cwBounce 1.2s infinite;
        }
        .cw-typing span:nth-child(2) { animation-delay: 0.2s; }
        .cw-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes cwBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }

        /* Chips */
        .cw-chips-bar {
          flex-shrink: 0;
          display: flex;
          gap: 6px;
          padding: 7px 10px;
          overflow-x: auto;
          border-top: 1px solid rgba(255,255,255,0.05);
          background: #0c0c0c;
          scrollbar-width: none;
        }
        .cw-chips-bar::-webkit-scrollbar { display: none; }
        .cw-chip {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          padding: 5px 11px;
          border-radius: 20px;
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
          font-family: 'Inter', sans-serif;
        }
        .cw-chip:hover:not(:disabled) {
          background: rgba(232,77,14,0.12);
          border-color: rgba(232,77,14,0.4);
          color: #F0EDE8;
        }
        .cw-chip:disabled { opacity: 0.4; cursor: not-allowed; }

        /* Input bar */
        .cw-input-bar {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: #0c0c0c;
        }
        .cw-input {
          flex: 1;
          background: #1c1c1c;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 8px 12px;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #F0EDE8;
          outline: none;
          transition: border-color 0.15s ease;
          min-width: 0;
        }
        .cw-input:focus { border-color: rgba(232,77,14,0.4); }
        .cw-input::placeholder { color: rgba(255,255,255,0.2); }
        .cw-send {
          width: 34px; height: 34px;
          flex-shrink: 0;
          border-radius: 9px;
          background: #E84D0E;
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        .cw-send:not(:disabled):hover { background: #d44410; transform: scale(1.04); }
        .cw-send:disabled { opacity: 0.35; cursor: not-allowed; }

        /* Mobile */
        @media (max-width: 480px) {
          .cw-root { bottom: 16px; right: 12px; }
          .cw-window {
            position: fixed;
            bottom: 0; right: 0; left: 0;
            width: 100%;
            height: 88vh;
            border-radius: 16px 16px 0 0;
          }
          .cw-bubble { width: 54px; height: 54px; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .cw-window { width: calc(100vw - 48px); max-width: 360px; height: 500px; }
        }
      `}</style>
    </>
  );
}
