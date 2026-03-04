import { SectionLabel } from "./SectionLabel";

const FACTS = [
  { label: "Location", value: "Japan" },
  { label: "Background", value: "公務員 → 民間企業" },
  { label: "Now Studying", value: "CS, TypeScript, Python" },
  { label: "Philosophy", value: "Minimalism" },
];

export function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionLabel>About</SectionLabel>
      <div className="about-grid">
        <div className="about-bio">
          <h2>Kengo Imai</h2>
          <p>
            1989年生まれ、大阪大学卒業。<br />
            独学でCS/プログラミングを学び、<br />
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
