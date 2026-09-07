"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { Plus } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { AppverseFooter } from "@/components/appverse-footer"

type FAQItem = { q: string; a: string }
type FAQSection = { category: string; items: FAQItem[] }

const faqs: FAQSection[] = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What is Iron Vault?",
        a: "Iron Vault is a financial education platform built by IVT MEDIA GROUP. We teach everyday people how real estate, digital assets, and passive income systems actually work — in plain English, before asking them to do anything. The Iron Vault Token (IV-SOL) is the ecosystem's utility layer, built on Solana.",
      },
      {
        q: "Who is this for?",
        a: "Anyone who was never taught how wealth actually works. If school didn't cover compound interest, real estate investing, or how digital assets fit into the modern economy — this is where you start. We built this for people who are tired of feeling locked out of financial systems, or who simply don't know enough yet to move confidently.",
      },
      {
        q: "Do I have to buy a token to participate?",
        a: "No. Start with the education. The courses, the community, and the learning materials exist independently of any token purchase. Understand the system first. Participate when it makes sense for you.",
      },
      {
        q: "Who runs this?",
        a: "IVT MEDIA GROUP — a legally registered Wyoming domestic LLC (Entity ID: 2026-001990799), formed May 28, 2026, and active in good standing with the Wyoming Secretary of State. Christopher Maxon serves as CEO. Daniel Cruz leads growth and platform development. Chris Storms leads community.",
      },
    ],
  },
  {
    category: "The Education Platform",
    items: [
      {
        q: "What will I actually learn?",
        a: "The fundamentals that most people were never taught: how compound interest works, how real estate generates income, what tokenization means and why it matters, how decentralized infrastructure differs from traditional banking, and how to evaluate any financial opportunity — crypto or otherwise — without getting burned.",
      },
      {
        q: "What does the education cost?",
        a: "We offer three tracks: $100, $500, and $1,000 — each scaling with the depth of the curriculum. Entry-level modules are designed to be accessible. The goal is a large, informed community — not a small, wealthy one.",
      },
      {
        q: "Is the education connected to the token?",
        a: "The education stands on its own as a product. You get real value from the courses whether you ever interact with the token or not. That's intentional — we believe education should come before any financial decision, including ours.",
      },
    ],
  },
  {
    category: "The Iron Vault Token (IV-SOL)",
    items: [
      {
        q: "What is IV-SOL?",
        a: "IV-SOL is a utility token built on Solana using the Token 2022 program. It's the access and participation layer of the Iron Vault ecosystem — used for community governance, ecosystem participation, and future platform features as the infrastructure builds out.",
      },
      {
        q: "When is the token launching?",
        a: "The full token launch is planned for November 2026. We are currently in the community-building and education phase. Early access positions are available for founding members who want to be part of the ecosystem from the ground up.",
      },
      {
        q: "How do I get IV-SOL tokens?",
        a: "Complete your chosen education track and tokens are delivered automatically to your wallet upon certificate completion. No sales call. No manual process. No waiting.\n\n$100 in coursework = 100,000 IV-SOL\n$500 in coursework = 500,000 IV-SOL\n$1,000 in coursework = 1,000,000 IV-SOL\n\nThe education is the presale.",
      },
      {
        q: "What is the 6% transaction fee and where does it go?",
        a: "IV-SOL uses the Token 2022 transfer fee extension — a Solana-native feature that applies a 6% fee on token transfers. That fee is split: 3% funds IVT MEDIA GROUP operations (development, acquisitions, infrastructure) and 3% flows back into the ecosystem for community participants. The exact on-chain distribution mechanism will be published in the whitepaper.",
      },
      {
        q: "Is IV-SOL an investment?",
        a: "IV-SOL is a utility token. It is not a stock, bond, or security. It does not represent equity in IVT MEDIA GROUP. Participation in the ecosystem does not guarantee any financial return. Crypto markets are volatile. Only engage with what you fully understand and can afford to lose.",
      },
      {
        q: "How is the token supply distributed?",
        a: "Total supply is 250,000,000,000 IV-SOL. Full tokenomics — including allocation, vesting schedules, and liquidity plans — will be published in the Iron Vault Whitepaper ahead of the November launch. We do not release partial tokenomics. When it's published, it will be complete.",
      },
    ],
  },
  {
    category: "Real Estate & the Roadmap",
    items: [
      {
        q: "What does real estate have to do with a crypto token?",
        a: "Real estate is the world's most proven wealth-building asset class. Iron Vault's long-term vision is to bring real-world commercial assets — properties that generate actual income — on-chain, so that access to that kind of asset is no longer reserved for the wealthy. We're building the infrastructure for that. The education platform is Phase 1. Asset acquisition is Phase 2.",
      },
      {
        q: "What kinds of assets are you looking to acquire?",
        a: "Commercial properties — shopping centers, franchise locations, gas stations, and similar income-producing assets. No acquisitions have been announced yet. When they happen, they will be reported transparently.",
      },
      {
        q: "What is the stablecoin you mention?",
        a: "Phase 3 of the Iron Vault roadmap involves a stablecoin backed by the real-world assets acquired in Phase 2. This is a long-term objective, not an immediate offering. It will only exist after the underlying asset base is in place.",
      },
      {
        q: "What phase are you in right now?",
        a: "Phase 1 — community building and education. We are enrolling founding members, building the education platform, and establishing the infrastructure (CRM, funnels, governance systems) that everything else runs on. This is the foundation. We are building it correctly before moving to the next phase.",
      },
    ],
  },
  {
    category: "Trust & Transparency",
    items: [
      {
        q: "How do I know this is legitimate?",
        a: "IVT MEDIA GROUP is verifiable in 30 seconds on the Wyoming Secretary of State's public business search at wyobiz.wyo.gov — Entity ID 2026-001990799, active, in good standing. The IV-SOL token contract is publicly visible on Solscan at address DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV. We are not anonymous. We are not hiding.",
      },
      {
        q: "Has the token been audited?",
        a: "A full smart contract audit is part of the pre-launch checklist before November. We will publish the results when complete. We will not launch without it.",
      },
      {
        q: "What are the real risks here?",
        a: "The honest risks: crypto markets are highly volatile and IV-SOL may lose value. The real estate acquisition roadmap depends on execution that hasn't happened yet. The stablecoin is a future concept, not a current product. The education platform is early stage. We are building in public, and not everything is finished. Anyone who tells you crypto is risk-free is lying to you.",
      },
      {
        q: "What should I do before participating in anything?",
        a: "Learn first. Use our education platform. Understand how tokens work, how real estate generates income, and how to evaluate any opportunity critically — including this one. We built the education layer precisely so that nobody has to make uninformed decisions. Start there.",
      },
    ],
  },
]

const spring = { type: "spring", stiffness: 260, damping: 28, mass: 0.9 } as const

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const toggle = (key: string) => setOpenKey((k) => (k === key ? null : key))

  return (
    <>
      <main className="min-h-[100dvh] pb-[calc(env(safe-area-inset-bottom)+88px)] text-neutral-900 dark:text-white lg:pb-0">
        <SiteHeader />

        {/* Hero */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-12">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
              Iron Vault &mdash; Frequently Asked Questions
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
              Questions we&apos;d want answered if we were you.
            </h1>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto max-w-3xl space-y-10 sm:space-y-14">
            {faqs.map((section, si) => (
              <div key={section.category}>
                <div className="mb-4 flex items-center gap-3">
                  <span aria-hidden className="h-px w-7 bg-lime-600/60 dark:bg-lime-300/50" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
                    {section.category}
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-[rgba(17,17,17,0.03)] dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)] sm:p-2">
                  {section.items.map((item, ii) => {
                    const key = `${si}-${ii}`
                    const isOpen = openKey === key
                    const isLast = ii === section.items.length - 1
                    return (
                      <div
                        key={key}
                        className={`${isLast ? "" : "border-b border-black/10 dark:border-white/10"} px-4 sm:px-6`}
                      >
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${key}`}
                          className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-neutral-900 transition-colors hover:text-lime-600 dark:text-white dark:hover:text-lime-300 sm:text-lg"
                        >
                          <span>{item.q}</span>
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={spring}
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lime-400/40 bg-lime-400/10 text-lime-600 dark:text-lime-300"
                          >
                            <Plus className="h-4 w-4" aria-hidden />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`faq-panel-${key}`}
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={spring}
                              className="overflow-hidden"
                            >
                              <p className="whitespace-pre-line pb-5 text-base leading-relaxed text-neutral-600 dark:text-white/60 sm:text-lg">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Bottom CTA — matches IronVaultDifference card language */}
            <div className="rounded-2xl border border-lime-400/30 bg-[rgba(17,17,17,0.03)] p-6 text-center dark:bg-[rgba(255,255,255,0.04)] sm:p-10">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-600 dark:text-lime-300">
                Still have questions?
              </p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                We have a real phone number and real people who answer it.
              </h3>
              <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/55 sm:text-lg">
                Talk to a human. Get the answer. Then decide.
              </p>
              <Link
                href="tel:8883682502"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-lime-400 px-6 text-sm font-semibold text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] transition-all hover:scale-[1.02] hover:bg-lime-300"
              >
                Call (888) 368-2502
              </Link>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>
      <BottomNav />
    </>
  )
}
