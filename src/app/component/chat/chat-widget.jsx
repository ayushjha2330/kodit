"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I am the KODIT Assistant. Ask me anything about KODIT Agency — our services, pricing, process, or contact details. You can also select a suggestion below to get started!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const chatBodyRef = useRef(null);

  const suggestions = [
    { label: "🌐 Web Dev", text: "Tell me about your Web Development service." },
    { label: "📈 SEO & GEO", text: "What SEO and GEO services do you offer?" },
    { label: "📍 Google Maps", text: "How do you optimize Google Business Profiles?" },
    { label: "🤖 AI Automation", text: "What AI automation workflows do you build?" },
    { label: "🎨 Graphic Design", text: "Tell me about Graphic Design and branding." },
    { label: "📱 Social Media", text: "How do you handle Social Media Marketing?" },
    { label: "💰 Pricing", text: "What is your pricing model and plans?" },
    { label: "📞 Contact & Address", text: "How can I contact KODIT and where are you located?" },
    { label: "👥 Team & Founders", text: "Who is in the KODIT team?" }
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const el = chatBodyRef.current;
    if (!el) return;
    const handler = (e) => {
      e.stopPropagation();
    };
    el.addEventListener("wheel", handler, { passive: true });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  const getChatResponse = (query) => {
    const q = query.toLowerCase().trim();
    
    // Check contact & location first
    if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("number") || q.includes("call") || q.includes("whatsapp") || q.includes("reach") || q.includes("address") || q.includes("location") || q.includes("delhi") || q.includes("where") || q.includes("place") || q.includes("office") || q.includes("address") || q.includes("jahangirpuri")) {
      return `📞 **KODIT Agency Contact & Location:**\n\n• **Location:** Jahangirpuri, New Delhi, India\n• **Email:** koditagency@gmail.com\n• **Phone / WhatsApp:** +91 7428276525\n\nFeel free to drop us an email or a WhatsApp message to get a free consultation call arranged!`;
    }

    // Web development
    if (q.includes("web") || q.includes("website") || q.includes("develop") || q.includes("mern") || q.includes("react") || q.includes("next")) {
      return `🌐 **Web Development at KODIT:**\n\nWe build high-performance custom websites using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js.\n\n• **14-Day Delivery:** We launch within two weeks.\n• **Speed:** Sub-2.6 second page load times.\n• **Best Practices:** SEO-friendly structure, fully responsive design, and optimized codebase.\n• **Ideal For:** Clinics, coaching centers, restaurants, e-commerce, and startups.`;
    }

    // SEO / GEO / AEO
    if (q.includes("seo") || q.includes("geo") || q.includes("aeo") || q.includes("rank") || q.includes("search") || q.includes("google") || q.includes("perplex") || q.includes("chatgpt")) {
      return `📈 **SEO, GEO & AEO Dominance:**\n\n• **Local SEO:** Dominate the Google Local Pack (3-pack) in your neighborhood.\n• **Generative Engine Optimization (GEO):** Optimize your website so AI systems (like ChatGPT Search, Google AI Overviews, Perplexity, Gemini) cite and recommend your brand.\n• **Process:** Keyword intent mapping, technical audits, content hubs, schema markup, and transparent monthly reporting. Results usually start reflecting in 60-90 days.`;
    }

    // GMB / GBP
    if (q.includes("gmb") || q.includes("gbp") || q.includes("map") || q.includes("business profile") || q.includes("local") || q.includes("citation")) {
      return `📍 **Google Business Profile (GBP / GMB) Optimization:**\n\nWe help you get found by local customers on Google Maps:\n\n• Complete profile optimization and audit.\n• Hyper-local citation building.\n• Review generation strategies.\n• Weekly posts and updates to keep your profile active.`;
    }

    // AI Automation
    if (q.includes("ai") || q.includes("automation") || q.includes("n8n") || q.includes("workflow") || q.includes("bot")) {
      return `🤖 **AI & Workflow Automation:**\n\nWe automate repetitive business processes using n8n and AI integrations to save you 10+ hours per week:\n\n• Automated lead capture from web forms directly into your CRM.\n• Automated WhatsApp/SMS appointment confirmations and reminders.\n• Automated invoice generation and payment tracking.\n• AI chatbots trained on your custom business data.`;
    }

    // Graphic Design
    if (q.includes("design") || q.includes("graphic") || q.includes("logo") || q.includes("brand") || q.includes("creative")) {
      return `🎨 **Graphic Design & Brand Identity:**\n\nCreate a memorable visual identity for your business:\n\n• **Logo Design:** Custom, modern logos.\n• **Brand Guidelines:** Typography, color palettes, and visual voice.\n• **Marketing Assets:** Pitch decks, brochures, and ready-to-use social media templates.`;
    }

    // Social Media
    if (q.includes("social") || q.includes("instagram") || q.includes("facebook") || q.includes("linkedin") || q.includes("post") || q.includes("marketing")) {
      return `📱 **Social Media Marketing:**\n\nWe build and manage active communities for your brand across Instagram, Facebook, LinkedIn, and YouTube:\n\n• Custom content calendars and post planning.\n• Eye-catching graphics and reels.\n• Tracking real conversions like DMs, WhatsApp chats, and client calls instead of just vanity metrics.`;
    }

    // Pricing
    if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("rate") || q.includes("fee") || q.includes("cheap") || q.includes("retainer") || q.includes("charge")) {
      return `💰 **KODIT Pricing & Contract Models:**\n\n• **Web Dev & Graphic Design:** Project-based custom pricing tailored to your requirements.\n• **SEO, GBP, & Social Media:** Rolling monthly retainer contracts. No lock-in contracts — cancel anytime with a 30-day notice.\n• **Get a Quote:** Contact us at +91 7428276525 or koditagency@gmail.com for a free custom quotation.`;
    }

    // Team
    if (q.includes("team") || q.includes("who") || q.includes("ayush") || q.includes("meshid") || q.includes("nitin") || q.includes("founder") || q.includes("owner") || q.includes("people") || q.includes("work")) {
      return `👥 **Our Team:**\n\n• **Ayush Jha:** Founder & Lead Developer\n• **Meshid Ahmed:** Marketing & Project Management\n• **Nitin:** Social Media Manager\n\nWe collaborate closely to deliver exceptional tech, SEO, and marketing results.`;
    }

    // Founded
    if (q.includes("founded") || q.includes("launch") || q.includes("start") || q.includes("year") || q.includes("age") || q.includes("old") || q.includes("2026")) {
      return `🏢 **Launch & Foundation:**\n\nKODIT Agency was founded in **2026** in New Delhi, India. We are a fast-growing digital agency helping small and medium businesses scale rapidly with modern web applications, organic search domination, and custom automations.`;
    }

    // Projects / stats
    if (q.includes("project") || q.includes("stats") || q.includes("growth") || q.includes("portfolio") || q.includes("client") || q.includes("deliver") || q.includes("track")) {
      return `📈 **Our Track Record:**\n\n• **30+ Projects** successfully delivered.\n• **80% Client Retention Rate**.\n• **1.6x Average Client Business Growth** within the first few months of working together.`;
    }

    // Fallback
    return `I apologize, but I only answer questions related to KODIT Agency (our services, pricing, team, contact, etc.). 

For other queries, feel free to contact our founders directly at **koditagency@gmail.com** or WhatsApp **+91 7428276525**.

Please choose one of the suggested topics below:`;
  };

  const handleSendText = async (text) => {
    if (!text.trim() || loading) return;
    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulate thinking delay (600ms)
    setTimeout(() => {
      const response = getChatResponse(text);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setLoading(false);
    }, 600);
  };

  const send = () => {
    handleSendText(input);
  };

  return (
    <>
      <div className="chat-root">
        {/* Bubble button */}
        {!open && (
          <button className="chat-btn" onClick={() => setOpen(true)} aria-label="Open chat">
            <img src="/icon.png" alt="KODIT" width={44} height={44} style={{ borderRadius: "50%", objectFit: "cover" }} />
          </button>
        )}

        {/* Chat window */}
        {open && (
          <div className="chat-window">
            {/* Header */}
            <div className="chat-head">
              <div className="chat-head-left">
                <div className="chat-avatar">
                  <img src="/icon.png" alt="KODIT" width={28} height={28} style={{ borderRadius: "50%", objectFit: "cover" }} />
                </div>
                <div>
                  <span className="chat-head-name">KODIT Assistant</span>
                  <span className="chat-head-status">Online</span>
                </div>
              </div>
              <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="chat-body" ref={chatBodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={`chat-msg ${m.role === "user" ? "chat-msg-user" : ""}`}>
                  {m.content.split("\n").map((line, idx) => {
                    // Render simple bold/bullet styling client-side
                    let cleanLine = line;
                    let isBullet = false;
                    if (cleanLine.startsWith("• ")) {
                      isBullet = true;
                      cleanLine = cleanLine.substring(2);
                    }
                    
                    const boldRegex = /\*\*(.*?)\*\*/g;
                    const parts = [];
                    let lastIdx = 0;
                    let match;
                    while ((match = boldRegex.exec(cleanLine)) !== null) {
                      if (match.index > lastIdx) {
                        parts.push(cleanLine.substring(lastIdx, match.index));
                      }
                      parts.push(<strong key={match.index}>{match[1]}</strong>);
                      lastIdx = boldRegex.lastIndex;
                    }
                    if (lastIdx < cleanLine.length) {
                      parts.push(cleanLine.substring(lastIdx));
                    }

                    return (
                      <p key={idx} style={{ margin: "4px 0", display: isBullet ? "list-item" : "block", marginLeft: isBullet ? "12px" : "0", listStyleType: isBullet ? "disc" : "none" }}>
                        {parts.length > 0 ? parts : cleanLine}
                      </p>
                    );
                  })}
                </div>
              ))}
              {loading && (
                <div className="chat-msg chat-msg-typing">
                  <span className="chat-dot" /><span className="chat-dot" /><span className="chat-dot" />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className="chat-suggestions-container">
              <div className="chat-suggestions">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    className="chat-chip"
                    onClick={() => handleSendText(s.text)}
                    disabled={loading}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="chat-input-row">
              <input
                className="chat-input"
                placeholder="Ask about KODIT..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                disabled={loading}
              />
              <button className="chat-send" onClick={send} disabled={loading || !input.trim()} aria-label="Send">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .chat-root {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: 'Inter', sans-serif;
        }

        /* Bubble button */
        .chat-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #111;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: chatPulse 2.5s ease-in-out infinite;
        }
        .chat-btn:hover {
          transform: scale(1.1);
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232,77,14,0.2); }
          50% { box-shadow: 0 0 0 10px rgba(232,77,14,0); }
        }

        /* Window */
        .chat-window {
          width: 360px;
          height: 520px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.5);
          animation: chatFadeIn 0.25s ease;
        }
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Header */
        .chat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: #0C0C0C;
        }
        .chat-head-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .chat-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .chat-head-name {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #F0EDE8;
          line-height: 1.2;
        }
        .chat-head-status {
          font-size: 11px;
          color: #22c55e;
        }
        .chat-close {
          background: none;
          border: none;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .chat-close:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }

        /* Body */
        .chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.08) transparent;
          overscroll-behavior: contain;
        }
        .chat-body::-webkit-scrollbar { width: 4px; }
        .chat-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

        .chat-msg {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255,255,255,0.85);
          background: #1A1A1A;
          align-self: flex-start;
        }
        .chat-msg-user {
          background: rgba(232,77,14,0.15);
          color: #F0EDE8;
          align-self: flex-end;
          border: 1px solid rgba(232,77,14,0.2);
        }

        /* Typing dots */
        .chat-msg-typing {
          display: flex;
          gap: 4px;
          padding: 12px 16px;
          background: #1A1A1A;
        }
        .chat-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          animation: chatBounce 1.2s infinite;
        }
        .chat-dot:nth-child(2) { animation-delay: 0.2s; }
        .chat-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes chatBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }

        /* Suggestions */
        .chat-suggestions-container {
          padding: 8px 12px;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: #0C0C0C;
          overflow-x: auto;
          white-space: nowrap;
          scrollbar-width: none;
        }
        .chat-suggestions-container::-webkit-scrollbar {
          display: none;
        }
        .chat-suggestions {
          display: flex;
          gap: 8px;
        }
        .chat-chip {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 20px;
          background: #1A1A1A;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .chat-chip:hover:not(:disabled) {
          background: rgba(232,77,14,0.15);
          border-color: rgba(232,77,14,0.4);
          color: #F0EDE8;
          transform: translateY(-1px);
        }
        .chat-chip:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Input */
        .chat-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: #0C0C0C;
        }
        .chat-input {
          flex: 1;
          background: #1A1A1A;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 9px 12px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #F0EDE8;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .chat-input:focus {
          border-color: rgba(232,77,14,0.4);
        }
        .chat-input::placeholder { color: rgba(255,255,255,0.2); }
        .chat-send {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #E84D0E;
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
        }
        .chat-send:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .chat-send:not(:disabled):hover {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .chat-root {
            bottom: 16px;
            right: 16px;
          }
          .chat-btn {
            width: 56px;
            height: 56px;
          }
          .chat-btn img {
            width: 36px !important;
            height: 36px !important;
          }
          .chat-window {
            width: calc(100vw - 32px);
            max-width: 380px;
            height: 460px;
            right: 0;
            bottom: 0;
          }
        }
        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 24px);
            height: 420px;
          }
        }
      `}</style>
    </>
  );
}
