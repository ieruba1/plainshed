import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">© 2026 Kengo Imai / PlainShed</p>
      <nav>
        <Link href="https://x.com/plainshed" className="footer-link" target="_blank" rel="noopener noreferrer">
          X
        </Link>
      </nav>
    </footer>
  );
}
