"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#academy", label: "Academy" },
  { href: "/#system", label: "System" },
  { href: "/#token", label: "Token" },
  { href: "/#enroll", label: "Enroll" },
  { href: "/#contact", label: "Contact" },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="iv-nav" data-open={open ? "true" : "false"}>
      <div className="iv-shell iv-nav-inner">
        <Link href="/" className="iv-wordmark" aria-label="Iron Vault home">
          Iron Vault
          <span>Vaulted Academy</span>
        </Link>

        <nav className="iv-nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="iv-nav-actions">
          <ThemeToggle />
          <Link className="iv-nav-cta" href="/sign-in">
            Sign in
          </Link>
          <button
            type="button"
            className="iv-nav-menu-button"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="iv-nav-mobile" hidden={!open}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
