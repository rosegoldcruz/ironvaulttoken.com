"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Minus } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { AppverseFooter } from "@/components/appverse-footer"
import { IRON_VAULT_ROUTES } from "@/lib/iron-vault-routes"

const tiers = [
  { amount: "$100", tokens: "100,000", label: "Starter", featured: false },
  { amount: "$500", tokens: "500,000", label: "Builder", featured: true },
  { amount: "$1,000", tokens: "1,000,000", label: "Founder", featured: false },
]

const spring = { type: "spring", stiffness: 220, damping: 26, mass: 0.9 } as const

const steps = [
  {
    number: "01",
    title: "Start with the education.",
    body: "Pick a course. Start learning. Real estate basics, how crypto actually works, compound interest, passive income systems — all of it explained like you're a smart person who just wasn't taught this stuff yet. Because that's exactly what you are.",
    detail: "No jargon. No prerequisites. No pressure to buy anything yet.",
  },
  {
    number: "02",
    title: "Complete your chosen track.",
    body: "Work through the curriculum at your own pace. Every module you complete counts toward your total. Choose the $100, $500, or $1,000 track — your token allocation scales with your commitment.",
    detail: "You don't have to talk to anyone. You don't have to apply. You just learn.",
  },
  {
    number: "03",
    title: "Receive your IV-SOL tokens automatically.",
    body: "When you complete your track, tokens are delivered to your wallet automatically via smart contract. No manual process. No waiting on someone to send them. The certificate triggers the delivery.",
    detail: "This is the Iron Vault presale. The education is the entry point.",
  },
  {
    number: "04",
    title: "Participate in what you built.",
    body: "You're now a founding member of the Iron Vault ecosystem. You understand the system. You hold the token. You have a voice in what comes next — the asset acquisitions, the governance, the stablecoin roadmap.",
    detail: "Informed. Positioned. Early.",
  },
]

const whyItMatters = [
  {
    label: "Every other presale",
    text: "Asks you to buy a token you don't understand from a website you just found, on a timeline designed to make you panic.",
    accent: false,
  },
  {
    label: "Iron Vault",
    text: "Asks you to learn first. If you complete the education, the tokens follow. No panic. No pressure. No confusion about what you own.",
    accent: true,
  },
]

const realities = [
  "The token launches November 2026. You have time to learn before anything goes live.",
  "IV-SOL is a utility token, not a stock. It does not guarantee financial returns.",
  "Crypto markets are volatile. The value of any token — including this one — can go down.",
  "The real estate acquisition roadmap is a plan, not a promise. Execution takes time.",
  "We will publish full tokenomics and a smart contract audit before launch. Not after.",
]

export default function HowItWorksPage() {
  return (
    <>
      <main className="min-h-[100dvh] pb-[calc(env(safe-area-inset-bottom)+88px)] text-neutral-900 dark:text-white lg:pb-0">
        <SiteHeader />

        {/* Hero */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-12">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
              How It Works
            </p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
              The education is the presale.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-white/60 sm:text-xl">
              Most token projects ask you to buy first and understand later. We flipped it. Learn the system. Complete the coursework. Get the tokens. In that order.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto grid max-w-3xl gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...spring, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-[rgba(17,17,17,0.03)] p-6 transition-colors hover:border-lime-500/40 hover:bg-[rgba(17,17,17,0.05)] dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)] dark:hover:border-lime-400/30 dark:hover:bg-[rgba(255,255,255,0.08)] sm:p-8"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-1 -top-3 select-none text-[72px] font-extrabold leading-none tracking-tight text-lime-600/10 dark:text-lime-300/10 sm:text-[96px]"
                >
                  {step.number}
                </span>
                <div className="relative">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Step {step.number}
                  </p>
                  <h2 className="mb-3 text-xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mb-3 text-base leading-relaxed text-neutral-600 dark:text-white/60 sm:text-lg">
                    {step.body}
                  </p>
                  <p className="text-sm font-medium text-lime-600 dark:text-lime-300">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founding member tiers */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-2 flex items-center gap-3">
              <span aria-hidden className="h-px w-7 bg-lime-600/60 dark:bg-lime-300/50" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
                Founding member tiers
              </p>
            </div>
            <p className="mb-6 text-sm text-neutral-500 dark:text-white/45">
              $1 = 1,000 IV-SOL. Every tier. No exceptions.
            </p>

            <div className="flex flex-col gap-3">
              {tiers.map((tier) => (
                <motion.div
                  key={tier.amount}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={spring}
                  className={`flex flex-wrap items-center gap-5 rounded-2xl border p-5 transition-colors sm:gap-7 sm:p-6 ${
                    tier.featured
                      ? "border-lime-400/30 bg-lime-400/[0.04]"
                      : "border-black/10 bg-black/[0.02] hover:border-lime-500/30 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-lime-400/20"
                  }`}
                >
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-white/40">
                      {tier.label}
                    </p>
                    <p className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                      {tier.amount}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">in coursework</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-lime-600/70 dark:text-lime-300/50" aria-hidden />
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-white/40">
                      Receive
                    </p>
                    <p className="text-3xl font-extrabold tracking-tight text-lime-600 dark:text-lime-300 sm:text-4xl">
                      {tier.tokens}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">IV-SOL tokens</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-neutral-500 dark:text-white/45">
              Tokens delivered automatically via smart contract upon certificate completion. No agent. No sales call. No manual process.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href={IRON_VAULT_ROUTES.module0}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-lime-400 px-6 text-sm font-semibold text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] transition-all hover:scale-[1.02] hover:bg-lime-300"
              >
                Start Learning Now
              </Link>
            </div>
          </div>
        </section>

        {/* Why this is different */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden className="h-px w-7 bg-lime-600/60 dark:bg-lime-300/50" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
                Why this is different
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {whyItMatters.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl border p-6 sm:p-7 ${
                    item.accent
                      ? "border-lime-400/30 bg-lime-400/[0.04]"
                      : "border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.03]"
                  }`}
                >
                  <p
                    className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                      item.accent ? "text-lime-600 dark:text-lime-300" : "text-neutral-500"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-white/60 sm:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real talk */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden className="h-px w-7 bg-lime-600/60 dark:bg-lime-300/50" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
                Before you start &mdash; the real talk
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[rgba(17,17,17,0.03)] dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)]">
              {realities.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-3 px-5 py-4 sm:px-6 sm:py-5 ${
                    i === realities.length - 1 ? "" : "border-b border-black/10 dark:border-white/10"
                  }`}
                >
                  <Minus className="mt-1 h-4 w-4 shrink-0 text-lime-600 dark:text-lime-300" aria-hidden />
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-white/60 sm:text-lg">{item}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA — matches FAQ pattern */}
            <div className="mt-10 rounded-2xl border border-lime-400/30 bg-[rgba(17,17,17,0.03)] p-6 text-center dark:bg-[rgba(255,255,255,0.04)] sm:p-10">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-600 dark:text-lime-300">
                Ready to actually understand this?
              </p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                Start with a free module. No account required.
              </h3>
              <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/55 sm:text-lg">
                Learn first. Decide after.
              </p>
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  href={IRON_VAULT_ROUTES.module0}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-lime-400 px-6 text-sm font-semibold text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] transition-all hover:scale-[1.02] hover:bg-lime-300"
                >
                  Start Learning
                </Link>
                <Link
                  href="tel:8883682502"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 px-6 text-sm font-medium text-neutral-600 transition-colors hover:border-black/30 hover:text-neutral-900 dark:border-white/15 dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white"
                >
                  Call (888) 368-2502
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>
      <BottomNav />
    </>
  )
}
