import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlainShed",
  description: "simple is core, fun is more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <nav className="flex items-center justify-between px-10 h-16 border-b border-navy/10">
          <span className="font-serif text-2xl font-bold text-navy tracking-wide">
            PlainShed
          </span>
          <div className="flex gap-6 items-center">
            <a href="https://x.com/plainshed" className="text-sm text-blue no-underline">X</a>
            <a href="mailto:ki@plainshed.com" className="text-sm text-blue no-underline">メール</a>
          </div>
        </nav>
        {children}
        <footer className="bg-navy px-10 py-6 flex items-center justify-between">
          <span className="text-xs text-muted">© 2026 PlainShed</span>
        </footer>
      </body>
    </html>
  );
}