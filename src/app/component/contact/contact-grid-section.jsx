"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const services = ["Web Development", "SEO Optimisation", "GMB / Maps Ranking", "Graphic Design & Branding"];

export default function ContactGridSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ct-grid",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.65, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    gsap.to(".ct-form", {
      opacity: 0, y: -16, duration: 0.35,
      onComplete: () => {
        setSent(true);
        setTimeout(() => {
          gsap.fromTo(".ct-success",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
          );
        }, 60);
      }
    });
  }

  return (
    <section ref={sectionRef} className="ct-grid-section ct-container">
      <div className="ct-grid">
        {/* ── Left info ── */}
        <div className="ct-info">
          <div className="ct-info-block">
            <span className="ct-info-label">Email</span>
            <a href="mailto:hello@kodit.agency" className="ct-info-big">
              hello@kodit.agency
            </a>
          </div>
          <div className="ct-info-block">
            <span className="ct-info-label">Phone</span>
            <a href="tel:+919999999999" className="ct-info-big">
              +91 99999 99999
            </a>
            <span className="ct-info-sub">Mon – Sat · 9am – 7pm</span>
          </div>
          <div className="ct-info-block">
            <span className="ct-info-label">Location</span>
            <span className="ct-info-text">South Extension II,<br />New Delhi – 110049</span>
          </div>
          <div className="ct-info-block">
            <span className="ct-info-label">Availability</span>
            <div className="ct-avail">
              <span className="ct-dot" />
              <span className="ct-avail-text">Available for new projects</span>
            </div>
          </div>
        </div>

        {/* ── Right form ── */}
        <div className="ct-form-wrap">
          {!sent ? (
            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-field-row">
                <div className="ct-field">
                  <label className="ct-label">Full Name</label>
                  <input
                    name="name" required
                    placeholder="Rahul Sharma"
                    value={form.name} onChange={handleChange}
                    className="ct-input"
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Email</label>
                  <input
                    name="email" type="email" required
                    placeholder="rahul@company.com"
                    value={form.email} onChange={handleChange}
                    className="ct-input"
                  />
                </div>
              </div>

              <div className="ct-field-row">
                <div className="ct-field">
                  <label className="ct-label">Phone</label>
                  <input
                    name="phone" type="tel" required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={handleChange}
                    className="ct-input"
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Service Needed</label>
                  <select
                    name="service" required
                    value={form.service} onChange={handleChange}
                    className="ct-input ct-select"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-label">Tell us about your project</label>
                <textarea
                  name="message" required rows="5"
                  placeholder="Briefly describe what you want to achieve..."
                  value={form.message} onChange={handleChange}
                  className="ct-input ct-textarea"
                />
              </div>

              <button type="submit" className="btn-primary ct-submit">
                Send Message
              </button>
            </form>
          ) : (
            <div className="ct-success">
              <div className="ct-success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="ct-success-title">Message received!</h3>
              <p className="ct-success-body">
                Thanks, <strong>{form.name}</strong>. We&apos;ll review your{" "}
                <strong>{form.service}</strong> enquiry and get back to you within
                4 hours.
              </p>
              <button
                className="btn-secondary"
                onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
