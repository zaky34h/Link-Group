import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "./top-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
