import type { Metadata } from "next";
import "./globals.css";
import { ScrollLine } from "@/components/ScrollLine";

export const metadata: Metadata = {
  title: "PlainShed — Tech as Play",
  description: "A quiet solo development studio.",
  openGraph: {
    title: "PlainShed — Tech as Play",
    description: "A quiet solo development studio.",
    url: "https://plainshed.com",
    siteName: "PlainShed",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PlainShed — Tech as Play",
    description: "A quiet solo development studio.",
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
      <body>
        <ScrollLine />
        {children}
      </body>
    </html>
  );
}
