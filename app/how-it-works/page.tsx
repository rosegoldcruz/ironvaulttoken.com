"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Minus, Play } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { AppverseFooter } from "@/components/appverse-footer"
import { IRON_VAULT_ROUTES } from "@/lib/iron-vault-routes"
import styles from "./how-it-works.module.css"

const MUX_PLAYER_URL =
  "https://player.mux.com/tpuPrnTTZRtM8KiBx69fln2eLmtD8dvsjTlXaa0100mJM?autoplay=1"

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
  const [videoActive, setVideoActive] = useState(false)

  return (
    <>
      <main className={styles.page}>
        <SiteHeader />

        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>How It Works</p>
              <h1 className={styles.heroTitle}>The education is the presale.</h1>
              <p className={styles.heroLead}>
                Most token projects ask you to buy first and understand later. We flipped it. Learn the system. Complete the coursework. Get the tokens. In that order.
              </p>
            </div>

            <div className={styles.videoColumn}>
              <div className={styles.videoShell}>
                {videoActive ? (
                  <iframe
                    className={styles.videoIframe}
                    src={MUX_PLAYER_URL}
                    title="Iron Vault Token"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    className={styles.videoFacade}
                    type="button"
                    aria-label="Play Iron Vault Token video"
                    onClick={() => setVideoActive(true)}
                  >
                    <span className={styles.playButton} aria-hidden>
                      <Play />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentWide}>
            <div className={styles.stepsGrid}>
              {steps.map((step, i) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...spring, delay: i * 0.04 }}
                  className={styles.stepCard}
                >
                  <span className={styles.stepNumber} aria-hidden>
                    {step.number}
                  </span>
                  <p className={styles.stepLabel}>Step {step.number}</p>
                  <h2 className={styles.stepTitle}>{step.title}</h2>
                  <p className={styles.stepBody}>{step.body}</p>
                  <p className={styles.stepDetail}>{step.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentNarrow}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>Founding member tiers</p>
              <p className={styles.sectionNote}>$1 = 1,000 IV-SOL. Every tier. No exceptions.</p>
            </div>

            <div className={styles.tiers}>
              {tiers.map((tier) => (
                <motion.div
                  key={tier.amount}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={spring}
                  className={[styles.tierCard, tier.featured ? styles.featuredCard : ""].join(" ")}
                >
                  <div>
                    <p className={styles.tierLabel}>{tier.label}</p>
                    <p className={styles.tierAmount}>{tier.amount}</p>
                    <p className={styles.tierMeta}>in coursework</p>
                  </div>
                  <ArrowRight className={styles.tierArrow} aria-hidden />
                  <div>
                    <p className={styles.receiveLabel}>Receive</p>
                    <p className={styles.tokenAmount}>{tier.tokens}</p>
                    <p className={styles.tierMeta}>IV-SOL tokens</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className={styles.deliveryNote}>
              Tokens delivered automatically via smart contract upon certificate completion. No agent. No sales call. No manual process.
            </p>

            <div className={styles.centerAction}>
              <Link href={IRON_VAULT_ROUTES.module0} className={styles.primaryAction}>
                Start Learning Now
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentNarrow}>
            <p className={styles.sectionEyebrow}>Why this is different</p>
            <div className={styles.compareGrid}>
              {whyItMatters.map((item) => (
                <div
                  key={item.label}
                  className={[styles.compareCard, item.accent ? styles.compareAccent : ""].join(" ")}
                >
                  <p className={styles.compareLabel}>{item.label}</p>
                  <p className={styles.compareText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentNarrow}>
            <p className={styles.sectionEyebrow}>Before you start &mdash; the real talk</p>

            <div className={styles.realityList}>
              {realities.map((item) => (
                <div key={item} className={styles.realityRow}>
                  <Minus className={styles.realityIcon} aria-hidden />
                  <p className={styles.realityText}>{item}</p>
                </div>
              ))}
            </div>

            <div className={styles.ctaPanel}>
              <p className={styles.ctaEyebrow}>Ready to actually understand this?</p>
              <h3 className={styles.ctaTitle}>Start with a free module. No account required.</h3>
              <p className={styles.ctaCopy}>Learn first. Decide after.</p>
              <div className={styles.ctaActions}>
                <Link href={IRON_VAULT_ROUTES.module0} className={styles.primaryAction}>
                  Start Learning
                </Link>
                <Link href="tel:8883682502" className={styles.secondaryAction}>
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
