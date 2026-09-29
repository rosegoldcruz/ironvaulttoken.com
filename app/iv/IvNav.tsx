"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "About", href: "/about" },
  { label: "Academy", href: "/#academy" },
  { label: "System", href: "/#technology" },
  { label: "Token", href: "/#tokenomics" },
  { label: "Enroll", href: "/academy" },
  { label: "Contact", href: "/#partnership-inquiry" },
];

export function IvNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="iv-nav" data-scrolled={scrolled || open} data-open={open}>
      <div className="iv-nav-inner iv-shell">
        <Link className="iv-wordmark" href="/" aria-label="Iron Vault home">
          Iron Vault <em>Vaulted Academy</em>
        </Link>

        {open ? <button className="iv-nav-backdrop" type="button" aria-label="Close navigation" onClick={() => setOpen(false)} /> : null}

        <nav
          className="iv-nav-links"
          aria-label="Primary navigation"
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            if (touchStartX === null) return;
            const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
            if (touchEndX - touchStartX > 48) setOpen(false);
            setTouchStartX(null);
          }}
        >
          <button
            className="iv-nav-drawer-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            <span />
          </button>
          {links.map(({ label, href }) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <ThemeToggle />
          <Link className="iv-nav-cta" href="/sign-in">Sign in</Link>
          <button
            className="iv-nav-toggle"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
