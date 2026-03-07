import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

const PROJECTS = [
  {
    name: "Notch",
    desc: "静かに回り続ける、自分だけのライフダッシュボード。",
    href: "#",
  },
  {
    name: "Lifemint College",
    desc: "「習慣で単位を取得する」大学をテーマにした習慣管理サービス。",
    href: "#",
  },
  {
    name: "Lullot",
    desc: "「共在感」が集中力を生み出すバーチャルスペース。",
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionLabel>Products</SectionLabel>
      {PROJECTS.map((p) => (
        <Link key={p.name} href={p.href} className="project-item">
          <div className="project-name">{p.name}</div>
          <div className="project-desc">{p.desc}</div>
        </Link>
      ))}
    </section>
  );
}
