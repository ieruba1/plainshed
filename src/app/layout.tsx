import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlainShed — Tech as Play",
  description: "A quiet solo development studio.",
  openGraph: {
    url: "https://plainshed.com",
    siteName: "PlainShed",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    creator: "@plainshed",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
