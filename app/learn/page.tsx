import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle2, Lock, Minus, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { BottomNav } from "@/components/bottom-nav"
import { AppverseFooter } from "@/components/appverse-footer"
import { IRON_VAULT_ROUTES } from "@/lib/iron-vault-routes"

const promiseCards = [
  {
    title: "Education Before Participation",
    body: "Start with the basics before choosing a paid track or entering the member experience.",
    icon: BookOpen,
  },
  {
    title: "Real Assets, Plain English",
    body: "Learn how real estate, digital ownership, custody, access, and utility are explained inside the Iron Vault ecosystem.",
    icon: ShieldCheck,
  },
  {
    title: "No Hype, No Guarantees",
    body: "The Academy is built to educate, not promise profit, token value, returns, or financial outcomes.",
    icon: Minus,
  },
  {
    title: "Verify Before You Continue",
    body: "Completion, checkpoints, and platform rules help determine access to deeper Academy areas and member features.",
    icon: CheckCircle2,
  },
] satisfies Array<{ title: string; body: string; icon: LucideIcon }>

const pathSteps = [
  { number: "01", title: "Learn", body: "Start with the free introduction and understand the foundation." },
  { number: "02", title: "Review", body: "See what the full Academy covers before choosing a paid track." },
  { number: "03", title: "Choose", body: "Select a track only if the education path and access level make sense." },
  { number: "04", title: "Understand", body: "Build context around real assets, digital ownership, utility, custody, and risk." },
  { number: "05", title: "Participate", body: "Continue through the Academy with clearer expectations and verified progress." },
  { number: "06", title: "Continue", body: "Use the member portal for course progress, account access, referrals, and status." },
]

const lockedModules = [
  "Vault Thesis",
  "Digital Ownership Basics",
  "Token Utility",
  "Real-World Asset Foundations",
  "Risk And Volatility",
  "Verification Path",
  "Continuing Lessons",
]

const tiers = [
  {
    name: "Starter",
    price: "$100",
    allocation: "100,000 IV-SOL",
    body: "Foundation access for people who want the full Academy path without jumping straight to the highest tier.",
    event: "Learn_Pricing_Starter_Click",
  },
  {
    name: "Builder",
    price: "$500",
    allocation: "500,000 IV-SOL",
    body: "A deeper commitment track for members who want broader education access and stronger platform positioning.",
    event: "Learn_Pricing_Builder_Click",
    featured: true,
  },
  {
    name: "Founder",
    price: "$1,000",
    allocation: "1,000,000 IV-SOL",
    body: "Founder-level coursework access for early participants who want the highest listed founding allocation tier.",
    event: "Learn_Pricing_Founder_Click",
  },
]

const transparency = [
  "Digital assets involve risk, volatility, and changing market conditions.",
  "Education does not guarantee profit, returns, token value, or financial outcomes.",
  "Token allocations, access, and rewards depend on verified completion and platform rules.",
]

export default function LearnPage() {
  return (
    <>
      <main className="min-h-[100dvh] overflow-hidden pb-[calc(env(safe-area-inset-bottom)+88px)] text-neutral-900 dark:text-white lg:pb-0">
        <SiteHeader />

        {/* Hero */}
        <section className="relative mx-auto w-full max-w-[1400px] px-4 pt-12 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[520px] max-w-5xl rounded-full bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.11),rgba(126,34,206,0.11)_38%,transparent_70%)] blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
                The Iron Vault Academy
              </p>
              <h1 className="mb-5 max-w-3xl text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
                Learn first. Participate after.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-white/65 sm:text-xl">
                Iron Vault begins with education. Start with the free introduction, understand the foundation, then choose whether a paid Academy track is right for you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={IRON_VAULT_ROUTES.module0}
                  aria-label="Start learning now in the free Iron Vault Academy entry"
                  data-reddit-event="Learn_Hero_StartLearning_Click"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-lime-400 px-6 text-sm font-semibold text-black shadow-[0_0_24px_rgba(163,230,53,0.35)] transition-all hover:scale-[1.02] hover:bg-lime-300"
                >
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="#modules"
                  aria-label="View the Iron Vault Academy module path"
                  data-reddit-event="Learn_Hero_ViewModules_Click"
                  className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/15 bg-black/[0.03] px-6 text-sm font-semibold text-neutral-900 transition-all hover:border-lime-500/40 hover:bg-black/[0.06] hover:text-lime-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-lime-400/40 dark:hover:bg-white/[0.08] dark:hover:text-lime-200"
                >
                  View Modules
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[rgba(17,17,17,0.035)] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(255,255,255,0.05)] dark:shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:p-5">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-black/35 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">Academy Flow</p>
                  <span className="rounded-full border border-lime-500/30 bg-lime-500/10 px-3 py-1 text-xs font-semibold text-lime-700 dark:border-lime-400/25 dark:bg-lime-400/10 dark:text-lime-200">
                    Public Entry
                  </span>
                </div>
                <div className="space-y-3">
                  <FlowRow label="Free Introduction" value="Start with the foundation" active />
                  <FlowRow label="Academy Modules" value="Learn the core concepts" active />
                  <FlowRow label="Track Selection" value="Choose only when ready" />
                  <FlowRow label="Member Portal" value="Continue after access is unlocked" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academy promise */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              label="ACADEMY PROMISE"
              title="A clearer path into the Vault."
              body="Before anyone participates, they should understand what Iron Vault is, how the Academy works, what digital assets involve, and what risks come with the space."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {promiseCards.map(({ title, body, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-black/10 bg-[rgba(17,17,17,0.03)] p-6 transition-colors hover:border-lime-500/40 hover:bg-[rgba(17,17,17,0.05)] dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)] dark:hover:border-lime-400/30 dark:hover:bg-[rgba(255,255,255,0.08)]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-600 dark:border-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h2 className="mb-3 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">{title}</h2>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-white/58 sm:text-base">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Module path */}
        <section id="modules" className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              label="MODULE PATH"
              title="Start with the foundation. Keep building from there."
              body="Begin with the free introduction, then continue through an expanding Academy path as new lessons, tracks, and resources are added."
            />

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl border border-lime-400/30 bg-lime-400/[0.05] p-6 sm:p-8">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">MODULE 0 — FREE</p>
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                  Start with the lesson, not the checkout.
                </h2>
                <p className="mb-6 text-base leading-relaxed text-neutral-600 dark:text-white/60 sm:text-lg">
                  The free entry explains why Iron Vault puts education first, what the Academy covers, and what to understand before moving into paid access.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link
                    href={IRON_VAULT_ROUTES.module0}
                    aria-label="Open Module 0 free academy entry"
                    data-reddit-event="Learn_Body_Module0_Click"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-lime-400 px-6 text-sm font-semibold text-black shadow-[0_0_20px_rgba(163,230,53,0.28)] transition-all hover:scale-[1.02] hover:bg-lime-300"
                  >
                    Open Module 0
                  </Link>
                  <Link
                    href={IRON_VAULT_ROUTES.academyAccess}
                    aria-label="View Iron Vault Academy pricing tiers"
                    data-reddit-event="Learn_Body_ViewPricing_Click"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 bg-black/[0.03] px-6 text-sm font-semibold text-neutral-900 transition hover:border-lime-500/40 hover:text-lime-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-lime-400/40 dark:hover:text-lime-200"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="grid gap-3 sm:grid-cols-2">
                  {lockedModules.map((module, index) => (
                    <article key={module} className="rounded-2xl border border-black/10 bg-[rgba(17,17,17,0.03)] p-5 dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)]">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-white/42">
                          Module {String(index + 1).padStart(2, "0")}
                        </p>
                        <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:border-white/10 dark:bg-black/30 dark:text-white/45">
                          <Lock className="h-3 w-3" aria-hidden />
                          Preview
                        </span>
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">{module}</h3>
                    </article>
                  ))}
                </div>
                <p className="mt-6 text-sm text-center text-neutral-500 dark:text-white/40">
                  Additional lessons and resources may be added as the Academy expands.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pathSteps.map((step) => (
                <article key={step.number} className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.035]">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-lime-600 dark:text-lime-300">Step {step.number}</p>
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-white/55">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              label="PRICING AND UNLOCK"
              title="Choose a track after the foundation is clear."
              body="The $100, $500, and $1,000 tracks unlock deeper Academy access. Start with education first, then choose the track that fits your level of participation."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {tiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`relative overflow-hidden rounded-2xl border p-6 transition-colors sm:p-7 ${
                    tier.featured
                      ? "border-lime-400/35 bg-lime-400/[0.055]"
                      : "border-black/10 bg-[rgba(17,17,17,0.03)] hover:border-lime-500/35 dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)] dark:hover:border-lime-400/25"
                  }`}
                >
                  {tier.featured && (
                    <div className="mb-4 inline-flex rounded-full border border-lime-500/30 bg-lime-500/10 px-3 py-1 text-xs font-semibold text-lime-700 dark:border-lime-400/30 dark:bg-lime-400/10 dark:text-lime-200">
                      Popular Track
                    </div>
                  )}
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">{tier.name}</p>
                  <div className="mb-4 flex items-end gap-3">
                    <p className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">{tier.price}</p>
                    <p className="pb-2 text-sm text-neutral-500 dark:text-white/45">in coursework</p>
                  </div>
                  <p className="mb-4 text-2xl font-extrabold tracking-tight text-lime-600 dark:text-lime-300">{tier.allocation}</p>
                  <p className="mb-7 text-sm leading-relaxed text-neutral-600 dark:text-white/58 sm:text-base">{tier.body}</p>
                  <Link
                    href={IRON_VAULT_ROUTES.academyAccess}
                    aria-label={`Unlock the ${tier.name} Academy track`}
                    data-reddit-event={tier.event}
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-lime-400 px-5 text-sm font-semibold text-black shadow-[0_0_20px_rgba(163,230,53,0.28)] transition-all hover:scale-[1.02] hover:bg-lime-300"
                  >
                    Unlock {tier.name}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden className="h-px w-7 bg-lime-600/60 dark:bg-lime-300/50" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">RISK AND TRANSPARENCY</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[rgba(17,17,17,0.03)] dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)]">
              {transparency.map((item, index) => (
                <div
                  key={item}
                  className={`flex gap-3 px-5 py-4 sm:px-6 sm:py-5 ${index === transparency.length - 1 ? "" : "border-b border-black/10 dark:border-white/10"}`}
                >
                  <Minus className="mt-1 h-4 w-4 shrink-0 text-lime-600 dark:text-lime-300" aria-hidden />
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-white/62 sm:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-lime-400/30 bg-[rgba(17,17,17,0.035)] p-6 text-center shadow-[0_24px_90px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:bg-[rgba(255,255,255,0.05)] dark:shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:p-10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">ACADEMY ENTRY</p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
              Start with the lesson, not the hype.
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/58 sm:text-lg">
              Learn what Iron Vault is building, review the foundation, and move into paid access only when the Academy path makes sense.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={IRON_VAULT_ROUTES.module0}
                aria-label="Start learning now with the free Academy entry"
                data-reddit-event="Learn_FinalCTA_StartLearning_Click"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-lime-400 px-6 text-sm font-semibold text-black shadow-[0_0_24px_rgba(163,230,53,0.35)] transition-all hover:scale-[1.02] hover:bg-lime-300"
              >
                Start Learning Now
              </Link>
              <Link
                href={IRON_VAULT_ROUTES.academyAccess}
                aria-label="Get early access through Iron Vault Academy pricing"
                data-reddit-event="Learn_FinalCTA_GetEarlyAccess_Click"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-black/15 bg-black/[0.03] px-6 text-sm font-semibold text-neutral-900 transition-all hover:border-lime-500/40 hover:bg-black/[0.06] hover:text-lime-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-lime-400/40 dark:hover:bg-white/[0.08] dark:hover:text-lime-200"
              >
                View Tracks
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

function SectionIntro({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <span aria-hidden className="h-px w-7 bg-lime-600/60 dark:bg-lime-300/50" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">{label}</p>
      </div>
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-white/58 sm:text-lg">{body}</p>
    </div>
  )
}

function FlowRow({ label, value, active = false }: { label: string; value: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3 dark:border-white/10 dark:bg-white/[0.035]">
      <span className="text-sm font-medium text-neutral-600 dark:text-white/55">{label}</span>
      <span className={`text-right text-sm font-semibold ${active ? "text-lime-600 dark:text-lime-300" : "text-neutral-600 dark:text-white/75"}`}>{value}</span>
    </div>
  )
}
