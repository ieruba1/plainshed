import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

const PROJECTS = [
  {
    name: "Lifemint College",
    desc: "「習慣で単位を取得する」大学をテーマにした習慣管理サービス。",
    href: "https://lifemintcollege.com",
  },
  {
    name: "Notch",
    desc: "まったく新しいライフダッシュボード。",
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionLabel>Projects</SectionLabel>
      {PROJECTS.map((p) => (
        <Link key={p.name} href={p.href} className="project-item">
          <div className="project-name">{p.name}</div>
          <div className="project-desc">{p.desc}</div>
        </Link>
      ))}
    </section>
  );
}
