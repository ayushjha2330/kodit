"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! Ask me anything about KODIT Agency — services, pricing, process, or past work." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const el = chatBodyRef.current;
    if (!el) return;
    const handler = (e) => {
      e.stopPropagation();
    };
    el.addEventListener("wheel", handler, { passive: true });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "Sorry, I couldn't process that." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Desktop-only styles */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .chat-root { display: none !important; }
        }
      `}</style>

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
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="chat-msg chat-msg-typing">
                  <span className="chat-dot" /><span className="chat-dot" /><span className="chat-dot" />
                </div>
              )}
              <div ref={bottomRef} />
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
      `}</style>
    </>
  );
}
