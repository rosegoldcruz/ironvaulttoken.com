import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { IRON_VAULT_ROUTES } from "@/lib/iron-vault-routes"

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');`

const CSS = `
  ${FONTS}
  .academy-root{font-family:'DM Sans',system-ui,sans-serif;}
  .academy-mono{font-family:'Space Mono',ui-monospace,monospace;}
  .academy-display{font-family:'Bebas Neue',sans-serif;letter-spacing:2px;}
  .academy-grid-bg{
    background-image:
      linear-gradient(rgba(170,255,0,0.045) 1px,transparent 1px),
      linear-gradient(90deg,rgba(123,47,190,0.045) 1px,transparent 1px);
    background-size:76px 76px;
  }
  html.dark .academy-scan{
    background:repeating-linear-gradient(0deg,transparent 0,transparent 3px,rgba(255,255,255,0.012) 3px,rgba(255,255,255,0.012) 4px);
  }
  html:not(.dark) .academy-scan{
    background:repeating-linear-gradient(0deg,transparent 0,transparent 3px,rgba(17,17,17,0.012) 3px,rgba(17,17,17,0.012) 4px);
  }
  .academy-vignette{
    background: radial-gradient(ellipse at center, transparent 28%, rgba(0,0,0,0.86) 100%);
  }
  html:not(.dark) .academy-vignette{
    background: radial-gradient(ellipse at center, transparent 45%, rgba(17,17,17,0.05) 100%);
  }
  .academy-card{animation:academyFade 0.55s ease both;}
  @keyframes academyFade{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
`

const LOCKED_MODULES = [
  { id: 1, title: "The Vault Thesis", preview: "Why education comes before allocation, hype, or deeper member access." },
  { id: 2, title: "Digital Ownership Basics", preview: "Wallets, keys, custody, and what control actually means." },
  { id: 3, title: "Token Utility", preview: "How utility tokens differ from equity, promises, and speculation." },
  { id: 4, title: "RWA Foundations", preview: "The role of real-world assets in tokenized systems." },
  { id: 5, title: "Risk And Volatility", preview: "How to think clearly before markets, narratives, or urgency take over." },
  { id: 6, title: "Verification Path", preview: "How completion, checkpoints, and eligibility fit together." },
  { id: 7, title: "Vault Operations", preview: "The member dashboard, vault area, and course access model." },
  { id: 8, title: "Community Referrals", preview: "How referral mechanics should support education instead of replacing it." },
  { id: 9, title: "VIP Layer", preview: "What higher-access experiences are meant to add after foundation work." },
  { id: 10, title: "Security Habits", preview: "Basic practices for avoiding common wallet and account mistakes." },
  { id: 11, title: "Completion Standards", preview: "What it means to finish the academy path with understanding." },
  { id: 12, title: "Next Steps", preview: "How prepared users move from learning into paid access." },
]

export default function AcademyPage() {
  return (
    <main className="academy-root min-h-screen bg-white text-neutral-900 selection:bg-[#AAFF00] selection:text-black dark:bg-[#050505] dark:text-white">
      <style>{CSS}</style>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 academy-grid-bg opacity-70" />
        <div className="absolute inset-0 academy-scan" />
        <div className="absolute -top-72 right-[-240px] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(123,47,190,0.16),transparent_70%)]" />
        <div className="absolute -bottom-80 left-[-260px] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(170,255,0,0.08),transparent_72%)]" />
        <div className="absolute inset-0 academy-vignette" />
      </div>

      <div className="relative z-10">
        <SiteHeader />

        <section className="mx-auto grid min-h-[72vh] max-w-6xl items-center gap-12 px-4 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="academy-mono mb-6 text-[10px] tracking-[0.35em] text-lime-700 dark:text-[#AAFF00]">ACADEMY ENTRY // PUBLIC</p>
            <h1 className="academy-display text-balance text-[18vw] leading-[0.86] text-neutral-900 sm:text-[112px] lg:text-[132px] dark:text-white">
              LEARN
              <br />
              BEFORE
              <br />
              <span className="text-neutral-400 dark:text-white/30">YOU PAY</span>
            </h1>
            <p className="academy-mono mt-10 max-w-xl text-[11px] leading-relaxed tracking-[0.16em] text-neutral-500 dark:text-white/50">
              Module 0 is open to everyone. Modules 1-12 are visible as locked previews so the full academy path is clear before checkout or member login.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href={IRON_VAULT_ROUTES.module0}
                className="academy-display inline-flex items-center justify-center border border-[#AAFF00] bg-[#AAFF00] px-9 py-4 text-base text-black transition hover:bg-[#BFFF33]"
              >
                START MODULE 0
              </a>
              <Link
                href={IRON_VAULT_ROUTES.academyAccess}
                className="academy-mono inline-flex items-center justify-center border border-black/15 px-8 py-4 text-[10px] tracking-[0.28em] text-neutral-600 transition hover:border-black/40 hover:text-neutral-900 dark:border-white/15 dark:text-white/60 dark:hover:border-white/40 dark:hover:text-white"
              >
                UNLOCK FULL ACADEMY
              </Link>
            </div>
          </div>

          <div className="border border-black/10 bg-black/[0.03] backdrop-blur-sm dark:border-white/10 dark:bg-black/60">
            <div className="border-b border-black/[0.06] px-5 py-4 dark:border-white/[0.06]">
              <div className="academy-mono text-[10px] tracking-[0.28em] text-neutral-500 dark:text-white/35">ACCESS MAP</div>
            </div>
            <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
              <AccessRow label="/learn" value="PUBLIC LANDING" />
              <AccessRow label="/academy" value="MODULE 0 FREE" accent />
              <AccessRow label="MODULES 1-12" value="LOCKED PREVIEWS" />
              <AccessRow label="/learn/pay" value="PAYMENT" />
              <AccessRow label="MEMBER PORTAL" value="PAID ACCESS" />
            </div>
          </div>
        </section>

        <section id="module-0" className="border-y border-black/[0.06] bg-black/[0.02] dark:border-white/[0.06] dark:bg-black/45">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="academy-mono mb-4 text-[10px] tracking-[0.35em] text-lime-700 dark:text-[#AAFF00]">MODULE 0 // FREE</p>
              <h2 className="academy-display text-5xl text-neutral-900 sm:text-7xl dark:text-white">ORIENTATION BEFORE ACCESS</h2>
              <p className="academy-mono mt-6 text-[11px] leading-relaxed tracking-[0.16em] text-neutral-500 dark:text-white/45">
                This free entry explains what the Academy is, why the education path exists, and what unlocks only after a user chooses a paid track.
              </p>
            </div>

            <div className="grid gap-px bg-black/[0.06] dark:bg-white/[0.06] md:grid-cols-3">
              {[
                { title: "Why Learning Comes First", body: "The Academy is designed to slow the funnel down enough for users to understand the system before entering the paid member layer." },
                { title: "What Is Free", body: "Module 0 stays open. It gives users the context they need without forcing account creation, payment, or dashboard redirects." },
                { title: "What Unlocks Later", body: "Modules 1-12, progress tracking, vault access, referrals, VIP, status, and account tools live behind paid/member access." },
              ].map((item) => (
                <article key={item.title} className="bg-white p-7 dark:bg-[#050505] sm:p-9">
                  <h3 className="academy-display text-3xl text-neutral-900 dark:text-white">{item.title}</h3>
                  <p className="academy-mono mt-4 text-[10px] leading-relaxed tracking-[0.14em] text-neutral-500 dark:text-white/45">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="academy-mono mb-4 text-[10px] tracking-[0.35em] text-neutral-500 dark:text-white/35">MODULES 1-12 // PREVIEW ONLY</p>
              <h2 className="academy-display text-5xl text-neutral-900 sm:text-7xl dark:text-white">SEE THE PATH</h2>
            </div>
            <p className="academy-mono max-w-sm text-[10px] leading-relaxed tracking-[0.16em] text-neutral-500 dark:text-white/42">
              Locked previews show the value before asking users to pay or enter the member portal.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {LOCKED_MODULES.map((module, index) => (
              <article
                key={module.id}
                className="academy-card border border-black/10 bg-black/[0.03] p-6 backdrop-blur-sm dark:border-white/10 dark:bg-black/55"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="academy-mono mb-5 flex items-center justify-between text-[10px] tracking-[0.25em]">
                  <span className="text-[#7B2FBE]">MODULE {String(module.id).padStart(2, "0")}</span>
                  <span className="border border-black/10 px-2 py-1 text-neutral-400 dark:border-white/10 dark:text-white/30">LOCKED</span>
                </div>
                <h3 className="academy-display text-3xl text-neutral-900 dark:text-white">{module.title}</h3>
                <p className="academy-mono mt-4 text-[10px] leading-relaxed tracking-[0.14em] text-neutral-500 dark:text-white/45">{module.preview}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-black/[0.06] dark:border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-8">
            <p className="academy-mono mb-6 text-[10px] tracking-[0.35em] text-neutral-500 dark:text-white/35">NEXT STEP</p>
            <h2 className="academy-display text-balance text-5xl leading-[0.95] text-neutral-900 sm:text-7xl dark:text-white">
              READY FOR THE
              <br />
              <span className="text-lime-700 dark:text-[#AAFF00]">FULL ACADEMY?</span>
            </h2>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={IRON_VAULT_ROUTES.academyAccess}
                className="academy-display inline-flex items-center justify-center border border-[#AAFF00] bg-[#AAFF00] px-10 py-4 text-base text-black transition hover:bg-[#BFFF33]"
              >
                VIEW PRICING
              </Link>
              <Link
                href={IRON_VAULT_ROUTES.memberPortal}
                className="academy-mono inline-flex items-center justify-center border border-black/15 px-8 py-4 text-[10px] tracking-[0.28em] text-neutral-600 transition hover:border-black/40 hover:text-neutral-900 dark:border-white/15 dark:text-white/60 dark:hover:border-white/40 dark:hover:text-white"
              >
                MEMBER LOGIN
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function AccessRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <span className="academy-mono text-[10px] tracking-[0.2em] text-neutral-500 dark:text-white/35">{label}</span>
      <span className={`academy-mono text-right text-[10px] tracking-[0.2em] ${accent ? "text-lime-700 dark:text-[#AAFF00]" : "text-neutral-600 dark:text-white/75"}`}>
        {value}
      </span>
    </div>
  )
}
