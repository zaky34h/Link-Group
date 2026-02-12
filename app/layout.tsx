import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import TopNav from "./top-nav";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Group",
  description: "Link Group digital platform overview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <div className="site-shell">
          <header className="site-header">
            <div className="header-inner">
              <div>
                <p className="brand-eyebrow">Link Group</p>
                <h1 className="brand-name">Connected Trade Platforms</h1>
              </div>
              <TopNav />
            </div>
          </header>
          <main className="page-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
