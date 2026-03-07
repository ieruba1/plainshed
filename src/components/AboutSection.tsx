import { SectionLabel } from "./SectionLabel";

const FACTS = [
  { label: "Background", value: "行政 → 民間" },
  { label: "Philosophy", value: "Minimalism" },
  { label: "Skills", value: "TypeScript, Python" },
];

export function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionLabel>About</SectionLabel>
      <div className="about-grid">
        <div className="about-bio">
          <h2>
            Kengo Imai
            <a href="mailto:ki@plainshed.com" className="mail-icon" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </h2>
          <p>
            1989年生まれ、大阪大学卒業。<br />
            独学でWeb開発を学び、<br />
            2026年3月1日、PlainShedを始動。
          </p>
        </div>
        <div className="facts-panel">
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
