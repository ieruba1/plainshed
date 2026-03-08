import { SectionLabel } from "./SectionLabel";

const FACTS = [
  { label: "Philosophy", value: "Minimalism" },
  { label: "Skills", value: "TypeScript, Python" },
];

export function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionLabel>About</SectionLabel>
      <div className="about-grid">
        <div className="about-bio">
          <h2>Test</h2>
          <p>
            テスト
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
