"use client";
import { useState, useRef, useEffect, useCallback } from "react";

// ─── Knowledge Base ───────────────────────────────────────────────────────────
const KB = [
  {
    keys: ["service", "offer", "kya karte", "kya karta", "help", "provide", "all service", "sab", "sabhi", "list"],
    answer: `✨ **KODIT Agency — 6 Core Services:**\n\n• 🌐 **Web Development** — Custom MERN stack & Next.js websites, 14-day delivery\n• 📈 **SEO + GEO + AEO** — Google rankings + AI search engine citations\n• 📍 **Google Business Profile** — Local Maps optimization & citation building\n• 🎨 **Graphic Design** — Logos, brand kits, social templates & pitch decks\n• 📱 **Social Media Marketing** — Instagram, Facebook, LinkedIn, YouTube management\n• 🤖 **AI Workflow Automation** — n8n automations saving 10+ hours/week\n\nKisi bhi service ke bare mein detail mein puchein!`,
  },
  {
    keys: ["web", "website", "develop", "mern", "react", "next", "next.js", "node", "mongo", "design site", "site banao", "website bana"],
    answer: `🌐 **Web Development at KODIT:**\n\nHum high-performance custom websites banate hain MERN stack (MongoDB, Express.js, React, Node.js) aur Next.js se.\n\n• ⚡ **14-Day Delivery** — Website 2 weeks mein live\n• 🚀 **Speed** — Sub 2.6 second page load times\n• 📱 **Fully Responsive** — Mobile, tablet & desktop optimized\n• 🔍 **SEO-Ready Structure** — Built-in technical SEO\n• 🔒 **Secure & Scalable** — Modern best practices\n\n**Ideal For:** Clinics, coaching institutes, salons, restaurants, real estate, e-commerce, startups\n\nEk free consultation ke liye contact karein! 👇\n📧 koditagency@gmail.com | 📞 +91 7428276525`,
  },
  {
    keys: ["seo", "geo", "aeo", "rank", "google rank", "search engine", "organic", "keyword", "traffic", "ranking", "search", "perplex", "chatgpt search", "ai overview", "gemini search", "generative"],
    answer: `📈 **SEO + GEO + AEO — Full Search Dominance:**\n\n• 🏆 **Local SEO** — Google Local Pack (3-pack) mein aana\n• 🤖 **GEO (Generative Engine Optimization)** — ChatGPT, Google AI Overviews, Perplexity, Gemini aapka brand cite kare\n• 💬 **AEO (Answer Engine Optimization)** — Featured snippets & direct answers\n• 🗺️ **Process:** Keyword intent mapping → Technical audit → Content hubs → Schema markup → Monthly reporting\n• ⏱️ **Timeline:** Results 60–90 days mein start hone lagte hain\n• 📊 **Reporting:** Transparent monthly dashboard\n\nKODIT India mein GEO + AEO implement karne wali pioneering agencies mein se ek hai!`,
  },
  {
    keys: ["gmb", "gbp", "google business", "google map", "map", "local", "citation", "review", "google profile", "maps listing", "maps mein"],
    answer: `📍 **Google Business Profile (GBP / GMB) Optimization:**\n\nLocal customers ko Google Maps par apna business dikhao:\n\n• ✅ Complete GBP profile audit & optimization\n• 🗂️ Hyper-local citation building (directories, listings)\n• ⭐ Review generation strategy\n• 📅 Weekly posts & updates for active presence\n• 🔍 Local keyword targeting\n• 📊 Monthly performance reporting\n\n**Result:** More calls, more walk-ins, more inquiries from nearby customers.`,
  },
  {
    keys: ["ai automation", "automation", "n8n", "workflow", "automate", "crm", "lead capture", "invoice", "reminder", "whatsapp bot", "chatbot banega"],
    answer: `🤖 **AI & Workflow Automation (n8n):**\n\nRepetitive kaam ko automate karke 10+ hours/week bachao:\n\n• 📋 **Lead Capture** — Website forms → CRM automatic entry\n• 📲 **WhatsApp Reminders** — Appointment confirmations & follow-ups\n• 🧾 **Invoice Automation** — Auto-generate & send invoices\n• 📊 **Daily Sales Reports** — Email/WhatsApp pe automatic\n• 📅 **Social Scheduling** — Auto-post on platforms\n• 💬 **AI Chatbots** — Custom trained on your business data\n• 🔔 **Inventory Alerts** — Low stock notifications auto-send\n\n**Tool Used:** n8n (open-source, self-hosted, powerful)`,
  },
  {
    keys: ["graphic", "design", "logo", "brand", "branding", "creative", "poster", "banner", "social template", "pitch deck", "identity"],
    answer: `🎨 **Graphic Design & Brand Identity:**\n\nApne brand ki unforgettable visual identity banao:\n\n• 🎯 **Logo Design** — Custom, modern, memorable logos\n• 📐 **Brand Guidelines** — Typography, color palettes, visual voice\n• 📊 **Pitch Decks** — Investor-ready presentations\n• 🖼️ **Social Templates** — Ready-to-use Instagram/Facebook posts\n• 📰 **Brochures & Flyers** — Print & digital marketing material\n• 🎴 **Business Cards** — Professional identity cards\n\n**Style:** Modern, clean, premium — jo aapke target audience se connect kare.`,
  },
  {
    keys: ["social media", "instagram", "facebook", "linkedin", "youtube", "post", "reel", "content", "follower", "engagement", "social marketing", "smm"],
    answer: `📱 **Social Media Marketing:**\n\nApne brand ki strong social presence banao:\n\n• 📅 **Content Calendar** — Monthly plan with posts, reels, stories\n• 🎬 **Reels & Videos** — Engaging short-form content\n• 🖼️ **Custom Graphics** — On-brand visual posts\n• 📊 **Analytics & Reporting** — Real metrics, not just followers\n• 💬 **Community Management** — Respond to DMs & comments\n• 📣 **Platforms:** Instagram, Facebook, LinkedIn, YouTube\n\n**We track:** DMs, WhatsApp chats, phone calls — real conversions, not vanity metrics!`,
  },
  {
    keys: ["price", "pricing", "cost", "kitna", "rate", "fee", "charge", "budget", "afford", "payment", "retainer", "monthly", "quote", "estimate", "package"],
    answer: `💰 **KODIT Pricing & Contract Models:**\n\n• 🌐 **Web Development** — Project-based (custom quote per project scope)\n• 🎨 **Graphic Design** — Project-based (per deliverable)\n• 📈 **SEO / GMB / Social** — Monthly retainer (rolling, no lock-in)\n\n✅ **No long-term contracts!**\n• Rolling monthly agreements\n• Cancel anytime with 30-day notice\n• Transparent invoicing every month\n\n📞 Free consultation call available!\nContact: +91 7428276525 | koditagency@gmail.com\n\nHumse directly baat karein — aapke budget ke hisaab se custom plan banayenge!`,
  },
  {
    keys: ["contact", "phone", "email", "whatsapp", "reach", "address", "location", "office", "where", "call", "number", "jahangirpuri", "delhi", "new delhi", "kahan"],
    answer: `📞 **KODIT Agency — Contact & Location:**\n\n📍 **Address:** Jahangirpuri, New Delhi — 110033\n📧 **Email:** koditagency@gmail.com\n📞 **Phone / WhatsApp:** +91 7428276525\n\n🕐 **Support Response Time:** Average 4 hours\n🌐 **Website:** kodit.agency\n\nDrop karein ek WhatsApp message ya email — free consultation call schedule karenge! 🙌`,
  },
  {
    keys: ["team", "who", "founder", "ayush", "meshid", "nitin", "people", "staff", "employee", "owner", "member"],
    answer: `👥 **Meet the KODIT Team:**\n\n• 👨‍💻 **Ayush Jha** — Founder & Lead Developer\n  Full-stack developer specializing in MERN stack, Next.js & system architecture\n\n• 📣 **Meshid Ahmed** — Marketing & Project Management\n  Strategy, client relations & campaign management\n\n• 📱 **Nitin** — Social Media Manager\n  Content creation, social strategy & community growth\n\nTeen logon ki focused team jo aapke business ke liye best deliver karte hain! 💪`,
  },
  {
    keys: ["founded", "launch", "start", "year", "history", "since", "kitne saal", "2026", "age", "old", "background"],
    answer: `🏢 **KODIT Agency — Story & Foundation:**\n\n📅 **Founded:** 2026, New Delhi, India\n📍 **Headquarters:** Jahangirpuri, New Delhi\n🎯 **Mission:** Help Indian SMBs grow fast with modern web tech, SEO & automation\n\n• Fast-growing agency serving pan-India clients\n• Expertise in MERN stack, Next.js, SEO, GEO & n8n automations\n• Built by young, passionate tech & marketing professionals\n• Focused on real ROI — not just deliverables`,
  },
  {
    keys: ["project", "portfolio", "stats", "result", "track record", "achievement", "success", "delivered", "client result"],
    answer: `📊 **KODIT Track Record:**\n\n• ✅ **30+ Projects** successfully delivered\n• 💼 **80% Client Retention Rate**\n• 📈 **1.6x Average Client Business Growth**\n• ⚡ **14-day** average website delivery time\n• 🌍 **Pan-India** client base\n\n**Industries served:** Clinics, coaching institutes, salons, restaurants, real estate, e-commerce, startups, law firms`,
  },
  {
    keys: ["process", "kaise karte", "how", "step", "timeline", "workflow", "kab milega", "delivery", "onboarding"],
    answer: `⚙️ **KODIT Work Process:**\n\n**Step 1: Discovery Call (Free)**\nAapki requirements samjhenge, goals discuss karenge\n\n**Step 2: Strategy & Proposal**\nCustom plan + timeline + pricing send karenge\n\n**Step 3: Execution**\n• Web: Design → Development → Testing → Launch (14 days)\n• SEO: Audit → Keywords → On-page → Off-page → Report\n• Social: Calendar → Design → Schedule → Monitor\n\n**Step 4: Reporting & Scaling**\nMonthly reports + ongoing optimization\n\n📞 Start karo: +91 7428276525`,
  },
  {
    keys: ["target", "client", "industry", "niched", "clinic", "restaurant", "salon", "coaching", "startup", "ecommerce", "real estate", "law"],
    answer: `🏢 **KODIT Serves These Industries:**\n\n• 🏥 Medical Clinics & Healthcare\n• 🎓 Coaching Institutes & EdTech\n• 💇 Salons & Beauty Parlours\n• 🍽️ Restaurants & Food Businesses\n• 🏠 Real Estate Firms\n• 🛒 E-commerce & D2C Brands\n• ⚖️ Law Firms\n• 💡 Startups & New Businesses\n• 🏭 SMBs across all sectors\n\nBusiness ka size matter nahi — hum har budget ke liye solution nikaalte hain!`,
  },
  {
    keys: ["hello", "hi", "hii", "hey", "namaste", "namaskar", "hlo", "good morning", "good afternoon", "good evening", "kya ho", "sup"],
    answer: `👋 **Namaste! Welcome to KODIT Agency!**\n\nMain aapka KODIT Assistant hoon. Main aapki madad kar sakta hoon:\n\n• 🌐 Web Development details\n• 📈 SEO, GEO & AEO services\n• 📍 Google Maps optimization\n• 🤖 AI Automation\n• 💰 Pricing & Packages\n• 📞 Contact & Location\n\nNeechey suggestions mein se choose karein ya seedha apna sawaal puchein! 😊`,
  },
  {
    keys: ["language", "hindi", "english", "hinglish", "kya bolte"],
    answer: `🌐 **KODIT is bilingual!**\n\nHum Hindi aur English dono mein communicate karte hain — jaise aapko comfortable lage!\n\nOur website, proposals, and reporting can be delivered in both languages. 😊`,
  },
  {
    keys: ["free", "consultation", "demo", "trial", "sample", "free call", "free audit"],
    answer: `🆓 **Free Consultation Available!**\n\nKODIT ek FREE discovery call offer karta hai:\n\n• ✅ Aapka business samjhein\n• ✅ Customized digital strategy suggest karein\n• ✅ Budget ke andar best plan batayein\n• ✅ Koi commitment nahi!\n\nAbhi schedule karein:\n📞 +91 7428276525\n📧 koditagency@gmail.com\n🌐 kodit.agency/contact`,
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
        score += key.split(" ").length; // longer phrase = higher priority
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch) return bestMatch.answer;

  return `🤔 Sorry, I didn't quite understand that.\n\nMain sirf KODIT Agency ke baare mein sawaalon ka jawab de sakta hoon.\n\nInke baare mein puchein:\n• 🌐 Web Development\n• 📈 SEO & GEO\n• 📍 Google Business Profile\n• 🤖 AI Automation\n• 🎨 Graphic Design\n• 📱 Social Media Marketing\n• 💰 Pricing\n• 📞 Contact & Location\n\nYa seedha contact karein: 📞 +91 7428276525`;
}

// ─── Render rich text (bold + bullets + clickable links) ─────────────────────
function RichMessage({ content }) {
  return (
    <div className="rich-msg">
      {content.split("\n").map((line, li) => {
        const isBullet = line.startsWith("• ");
        const text = isBullet ? line.slice(2) : line;
        if (!text.trim()) return <br key={li} />;

        const segments = text.split(/(\*\*.*?\*\*|koditagency@gmail\.com|\+91\s?7428276525)/g);
        const rendered = segments.map((seg, si) => {
          if (seg.startsWith("**") && seg.endsWith("**")) {
            return <strong key={si}>{seg.slice(2, -2)}</strong>;
          }
          if (seg.includes("@")) {
            return <a key={si} href={`mailto:${seg.trim()}`} className="chat-link">{seg.trim()}</a>;
          }
          if (seg.startsWith("+91")) {
            return <a key={si} href={`tel:${seg.replace(/\s/g,"")}`} className="chat-link">{seg}</a>;
          }
          return seg;
        });

        return isBullet ? (
          <div key={li} className="chat-bullet"><span className="chat-bullet-dot">•</span><span>{rendered}</span></div>
        ) : (
          <div key={li} className="chat-line">{rendered}</div>
        );
      })}
    </div>
  );
}

// ─── Suggestion Chips ─────────────────────────────────────────────────────────
const SUGGESTIONS = [
  { label: "🛠️ All Services", text: "What services do you offer?" },
  { label: "🌐 Web Dev", text: "Tell me about Web Development." },
  { label: "📈 SEO & GEO", text: "What SEO and GEO services do you offer?" },
  { label: "📍 GMB", text: "How do you optimize Google Business Profiles?" },
  { label: "🤖 AI Automation", text: "What AI automation workflows do you build?" },
  { label: "🎨 Design", text: "Tell me about Graphic Design and branding." },
  { label: "📱 Social Media", text: "How do you handle Social Media Marketing?" },
  { label: "💰 Pricing", text: "What is your pricing model?" },
  { label: "📞 Contact", text: "How can I contact KODIT and where are you located?" },
  { label: "👥 Team", text: "Who is in the KODIT team?" },
  { label: "⚙️ Process", text: "What is your work process?" },
  { label: "🆓 Free Call", text: "Do you offer a free consultation?" },
];

// ─── Main Widget ──────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const INITIAL_MSG = { role: "assistant", content: "👋 **Namaste! I am KODIT Assistant.**\n\nMain aapko KODIT Agency ke baare mein complete jankari de sakta hoon — services, pricing, team, contact, aur bahut kuch!\n\nNeechey suggestions mein se choose karein ya apna sawaal likhein 👇" };

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // ── Auto-scroll fix: always scroll to bottom on new messages ───────────────
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  // ── Focus input when chat opens ────────────────────────────────────────────
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  // ── Stop wheel propagation ─────────────────────────────────────────────────
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const stop = (e) => e.stopPropagation();
    el.addEventListener("wheel", stop, { passive: true });
    return () => el.removeEventListener("wheel", stop);
  }, []);

  const handleSend = useCallback((text) => {
    const trimmed = (text || input).trim();
    if (!trimmed || loading) return;
    setMessages((p) => [...p, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages((p) => [...p, { role: "assistant", content: getBotReply(trimmed) }]);
      setLoading(false);
    }, 500);
  }, [input, loading]);

  const resetChat = () => setMessages([INITIAL_MSG]);

  return (
    <>
      <div className="cw-root">
        {/* ── Bubble ── */}
        {!open && (
          <button className="cw-bubble" onClick={() => setOpen(true)} aria-label="Open KODIT chat">
            <img src="/icon.png" alt="KODIT" width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} />
            <span className="cw-bubble-badge">?</span>
          </button>
        )}

        {/* ── Window ── */}
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
                  <span className="cw-status">🟢 Online — Instant Reply</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "4px" }}>
                <button className="cw-head-btn" onClick={resetChat} title="Reset chat" aria-label="Reset">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </button>
                <button className="cw-head-btn cw-close" onClick={() => setOpen(false)} aria-label="Close">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
              </div>
            </div>

            {/* Messages */}
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
                placeholder="KODIT ke baare mein kuch bhi puchein..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                disabled={loading}
              />
              <button className="cw-send" onClick={() => handleSend()} disabled={loading || !input.trim()} aria-label="Send">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        /* ── Root ── */
        .cw-root {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: 'Inter', sans-serif;
        }

        /* ── Bubble ── */
        .cw-bubble {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a1a 0%, #0c0c0c 100%);
          border: 2px solid rgba(232,77,14,0.4);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: cwPulse 2.5s ease-in-out infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        .cw-bubble:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 28px rgba(232,77,14,0.3);
        }
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

        /* ── Window ── */
        .cw-window {
          width: 370px;
          height: 560px;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 12px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,77,14,0.08);
          animation: cwSlide 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes cwSlide {
          from { opacity: 0; transform: translateY(16px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Header ── */
        .cw-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: linear-gradient(135deg, #0c0c0c 0%, #161616 100%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .cw-head-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cw-avatar-wrap {
          position: relative;
          width: 38px;
          height: 38px;
        }
        .cw-online-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #22c55e;
          border: 2px solid #0c0c0c;
        }
        .cw-name {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #F0EDE8;
          line-height: 1.2;
          letter-spacing: 0.01em;
        }
        .cw-status {
          display: block;
          font-size: 10.5px;
          color: rgba(255,255,255,0.45);
          margin-top: 1px;
        }
        .cw-head-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.35);
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.18s ease;
        }
        .cw-head-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.07);
        }
        .cw-close:hover {
          color: #E84D0E;
          background: rgba(232,77,14,0.1);
        }

        /* ── Body (FIX: explicit flex + overflow) ── */
        .cw-body {
          flex: 1;
          min-height: 0;           /* CRITICAL for flex scroll fix */
          overflow-y: auto;
          overflow-x: hidden;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.07) transparent;
          overscroll-behavior: contain;
        }
        .cw-body::-webkit-scrollbar { width: 3px; }
        .cw-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }

        /* ── Message Bubbles ── */
        .cw-msg-wrap {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          animation: cwMsgIn 0.2s ease;
        }
        .cw-msg-wrap--user {
          flex-direction: row-reverse;
        }
        @keyframes cwMsgIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cw-msg-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a1a;
        }
        .cw-msg {
          max-width: 82%;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 12.5px;
          line-height: 1.65;
        }
        .cw-msg--bot {
          background: #1c1c1c;
          color: rgba(255,255,255,0.88);
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .cw-msg--user {
          background: linear-gradient(135deg, rgba(232,77,14,0.25), rgba(232,77,14,0.12));
          color: #F0EDE8;
          border-bottom-right-radius: 4px;
          border: 1px solid rgba(232,77,14,0.25);
        }

        /* ── Rich Message Internals ── */
        .rich-msg {}
        .chat-line {
          margin: 2px 0;
        }
        .chat-bullet {
          display: flex;
          gap: 6px;
          margin: 3px 0;
          align-items: flex-start;
        }
        .chat-bullet-dot {
          color: #E84D0E;
          flex-shrink: 0;
          font-weight: bold;
          margin-top: 1px;
        }
        .chat-link {
          color: #E84D0E;
          text-decoration: underline;
          text-decoration-color: rgba(232,77,14,0.4);
          cursor: pointer;
        }
        .chat-link:hover {
          color: #ff6b35;
        }

        /* ── Typing ── */
        .cw-typing {
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 12px 16px !important;
          min-width: 56px;
        }
        .cw-typing span {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          animation: cwBounce 1.2s infinite;
        }
        .cw-typing span:nth-child(2) { animation-delay: 0.2s; }
        .cw-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes cwBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }

        /* ── Chips ── */
        .cw-chips-bar {
          flex-shrink: 0;
          display: flex;
          gap: 7px;
          padding: 8px 12px;
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
          color: rgba(255,255,255,0.75);
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.18s ease;
          font-family: 'Inter', sans-serif;
        }
        .cw-chip:hover:not(:disabled) {
          background: rgba(232,77,14,0.14);
          border-color: rgba(232,77,14,0.45);
          color: #F0EDE8;
          transform: translateY(-1px);
        }
        .cw-chip:disabled { opacity: 0.45; cursor: not-allowed; }

        /* ── Input Bar ── */
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
          border-radius: 12px;
          padding: 9px 13px;
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #F0EDE8;
          outline: none;
          transition: border-color 0.2s ease;
          min-width: 0;
        }
        .cw-input:focus { border-color: rgba(232,77,14,0.45); }
        .cw-input::placeholder { color: rgba(255,255,255,0.22); }
        .cw-send {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #E84D0E;
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.18s ease;
        }
        .cw-send:not(:disabled):hover { background: #d44410; transform: scale(1.05); }
        .cw-send:disabled { opacity: 0.35; cursor: not-allowed; }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .cw-root { bottom: 16px; right: 12px; }
          .cw-window {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 85vh;
            border-radius: 20px 20px 0 0;
          }
          .cw-bubble { width: 54px; height: 54px; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .cw-window { width: calc(100vw - 48px); max-width: 370px; height: 520px; }
        }
      `}</style>
    </>
  );
}
