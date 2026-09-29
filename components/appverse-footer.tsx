"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import LazyVideo from "./lazy-video"
import Image from "next/image"
import { IRON_VAULT_ROUTES } from "@/lib/iron-vault-routes"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Real estate. Tokenized. Understood. The entry point into decentralized real-world asset finance.",
  copyright: "© 2025 — IVT MEDIA GROUP",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("ironvault-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-neutral-900 dark:text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="tel:8883682502">
              Call Us Today
            </a>
          </Button>
        </div>
      </div>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-600 dark:text-lime-300">POSITION BEFORE THE NARRATIVE SPREADS</p>
              <h3 className="text-2xl font-bold leading-tight text-neutral-900 dark:text-white sm:text-3xl">
                THIS IS THE EDUCATION THEY NEVER GAVE YOU.
              </h3>
              <p className="mt-3 max-w-prose text-sm text-neutral-600 dark:text-white/85 sm:text-base">
                Real estate fundamentals. Digital assets explained simply. Tax structures used by business owners. How modern money moves. Elasticity of demand. Animal spirits. How blockchain is reshaping ownership, payments, and access.
              </p>
              <p className="mt-3 max-w-prose text-sm text-neutral-600 dark:text-white/85 sm:text-base">
                No jargon. No confusion. No gatekeeping. Let&apos;s learn together.
              </p>
              <p className="mt-3 max-w-prose text-sm text-neutral-600 dark:text-white/85 sm:text-base">
                Everything is taught in clear language for everyday people who want to understand the next shift before it becomes mainstream.
              </p>
              <p className="mt-4 max-w-prose text-sm font-bold text-neutral-900 dark:text-white sm:text-base">
                $100 gets you in. $1,000 places you at the founder level. Complete the coursework and receive your founding IV-SOL allocation automatically.
              </p>
              <p className="mt-3 max-w-prose text-sm text-neutral-600 dark:text-white/85 sm:text-base">
                Learn first. Position early. Participate intelligently.
              </p>
              <Button
                asChild
                className="mt-5 rounded-full bg-[#AAFF00] px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
              >
                <Link href={IRON_VAULT_ROUTES.module0}>Start Learning Now →</Link>
              </Button>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[380px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Lazy-loaded video fills the screen */}
                  <LazyVideo
                    src="/videos/footer.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="Iron Vault preview"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-lime-300">Real Estate Meets DeFi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-black/10 pb-20 dark:border-white/10 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/logos/the%20coin.png" alt="Iron Vault coin" width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="text-xl font-semibold text-lime-600 dark:text-lime-300">Iron Vault</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">{content.tagline}</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-neutral-500 dark:border-white/10 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400">
              <Link href="/privacy" className="transition-colors hover:text-lime-600 dark:hover:text-lime-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-lime-600 dark:hover:text-lime-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
