"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"
import { Home, Compass, GraduationCap, HelpCircle, Info } from "lucide-react"
import { IRON_VAULT_ROUTES } from "@/lib/iron-vault-routes"

const tabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/how-it-works", label: "How", icon: Compass },
  { href: IRON_VAULT_ROUTES.academyHome, label: "Learn", icon: GraduationCap },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
  { href: "/about", label: "About", icon: Info },
] as const

const spring = { type: "spring", stiffness: 320, damping: 30, mass: 0.8 } as const

export function BottomNav() {
  const pathname = usePathname()

  return (
    <motion.nav
      aria-label="Primary"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...spring, delay: 0.15 }}
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+8px)] pt-2 lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-stretch justify-between rounded-2xl border border-black/10 bg-white/90 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[rgba(10,12,20,0.9)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== "/" && pathname?.startsWith(href))
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className="relative flex min-h-[52px] min-w-[52px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 text-[10px] font-medium tracking-wide"
            >
              {active && (
                <motion.span
                  layoutId="bottom-nav-pill"
                  transition={spring}
                  className="absolute inset-0 rounded-xl bg-lime-400/15 ring-1 ring-lime-300/40"
                />
              )}
              <Icon
                className={`relative z-10 h-5 w-5 ${active ? "text-lime-600 dark:text-lime-300" : "text-neutral-500 dark:text-white/70"}`}
                aria-hidden
              />
              <span className={`relative z-10 ${active ? "text-lime-700 dark:text-lime-200" : "text-neutral-500 dark:text-white/60"}`}>
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
