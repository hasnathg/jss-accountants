"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // home: transparent until scrolled
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // close on ESC + lock body scroll when open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const wrapperClasses =
    isHome && !scrolled
      ? "absolute top-0 left-0 w-full z-50 bg-transparent text-white"
      : "sticky top-0 left-0 w-full z-50 bg-white/90 supports-[backdrop-filter]:bg-white/60 backdrop-blur border-b border-black/10";

  const panelBg = isHome && !scrolled ? "bg-black/70 text-white" : "bg-white text-gray-900";

  return (
    <header className={wrapperClasses}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: logo + name */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/logo.png" alt="JSS & Co Accountants logo" width={28} height={28} priority={isHome} className="rounded" />
          <span>JSS &amp; Co Accountants</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium hover:opacity-80 transition ${active ? "underline underline-offset-8" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 hover:bg-black/5"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {/* hamburger / close */}
          <span className="sr-only">Toggle menu</span>
          {!mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay (click to close) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${mobileOpen ? "block" : "hidden"} fixed top-16 right-0 z-50 m-4 rounded-xl shadow-lg ${panelBg}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3 min-w-[200px]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
