import type { Metadata } from "next";
import { Cormorant_Garamond, Cormorant_SC } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant-sc",
});

export const metadata: Metadata = {
  title: "PlainShed",
  description: "Tech as Play.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${cormorantGaramond.variable} ${cormorantSC.variable}`}>
        {children}
      </body>
    </html>
  );
}