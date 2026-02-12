"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/labourlink", label: "LabourLink" },
  { href: "/tradielink", label: "TradieLink" },
  { href: "/toollink", label: "ToolLink" },
  { href: "/materiallink", label: "MaterialLink" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="top-nav" aria-label="Primary">
      {navItems.map((item) => {
        const isHome = item.href === "/";
        const isActive = isHome ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-tab${isActive ? " active-tab" : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
      <Link
        href="/contact"
        className={`contact-btn${pathname.startsWith("/contact") ? " active-contact" : ""}`}
        aria-current={pathname.startsWith("/contact") ? "page" : undefined}
      >
        Contact Us
      </Link>
    </nav>
  );
}
