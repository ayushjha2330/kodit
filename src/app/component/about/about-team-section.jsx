"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const team = [
  { name: "Aryan Sharma",  role: "Founder & Strategy", initials: "AS" },
  { name: "Priya Mehta",   role: "Lead Designer", initials: "PM" },
  { name: "Rohan Kapoor",  role: "Dev Lead", initials: "RK" },
  { name: "Nisha Verma",   role: "SEO Specialist", initials: "NV" },
];

export default function AboutTeamSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Team */
      gsap.fromTo(".au-team-card",
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".au-team", start: "top 78%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="au-team">
      <div className="au-container">
        <p className="section-eyebrow">The Team</p>
        <h2 className="au-section-h2">Small crew. <em>Big output.</em></h2>

        <div className="au-team-grid">
          {team.map((t) => (
            <div key={t.name} className="au-team-card">
              <div className="au-team-avatar">
                <span>{t.initials}</span>
              </div>
              <h3 className="au-team-name">{t.name}</h3>
              <p className="au-team-role">{t.role}</p>
              <div className="au-team-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
