"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "./SectionLabel";

const FACTS = [
  { label: "Location", value: "Japan" },
  { label: "Background", value: "公務員 → 民間企業" },
  { label: "Now Studying", value: "CS, TypeScript, Python" },
  { label: "Philosophy", value: "Minimalism" },
];

export function AboutSection() {
  const factsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = factsRef.current?.querySelectorAll<HTMLElement>(".fact-item");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            items.forEach((item, i) => setTimeout(() => item.classList.add("visible"), i * 100));
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    if (items[0]) obs.observe(items[0]);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <SectionLabel>About</SectionLabel>
      <div className="about-grid">
        <div className="about-bio reveal">
          <h2>Kengo Imai</h2>
          <p>
            1989年生まれ。<br />
            大阪大学卒業後、公務員を経て民間企業に入社。<br />
            完全未経験から独学でCS/プログラミングを学び、<br />
            2026年3月1日、個人開発プロジェクトを始動。
          </p>
        </div>
        <div ref={factsRef} className="facts-panel">
          {FACTS.map(({ label, value }) => (
            <div key={label} className="fact-item">
              <div className="fact-label">{label}</div>
              <div className="fact-value">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
