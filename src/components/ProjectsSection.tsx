import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

const PROJECTS = [
  {
    name: "Lifemint College",
    desc: "「習慣で単位を取得する」大学をテーマにした習慣管理サービス。",
    stack: "Next.js · Prisma · Supabase · Clerk",
    href: "https://lifemintcollege.com",
  },
  {
    name: "Notch",
    desc: "まったく新しいライフダッシュボード。",
    stack: "Python · Streamlit",
    href: "#",
  },
  {
    name: "Urebia",
    desc: "構想中の新規ブロダクト。",
    stack: "Next.js · TypeScript · Tailwind",
    href: "/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionLabel>Projects</SectionLabel>
      {PROJECTS.map((p) => (
        <Link key={p.name} href={p.href} className="project-item reveal">
          <div>
            <div className="project-name">{p.name}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-stack">{p.stack}</div>
          </div>
        </Link>
      ))}
    </section>
  );
}
