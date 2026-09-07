import { PhoneCall } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { BottomNav } from '@/components/bottom-nav'
import { AppverseFooter } from '@/components/appverse-footer'

const SALES_PHONE_HREF = 'tel:8883682502'

const ENROLLMENT_PACKAGES = [
  {
    key: 'ENTRY_LEVEL',
    name: 'Entry-Level',
    price: 'FREE',
    includes: ['Free Iron Vault Orientation', 'Portal Access', 'Academy Preview'],
    action: 'Start Free',
    href: 'https://member.ironvaulttoken.com/sign-up',
  },
  {
    key: 'INTERMEDIATE',
    name: 'Intermediate',
    price: '$250',
    includes: ['FULL Vaulted Academy', 'Member Portal', 'Intermediate IV-SOL Presale Allocation'],
    action: 'Call To Enroll',
    href: SALES_PHONE_HREF,
  },
  {
    key: 'ADVANCED',
    name: 'Advanced',
    price: '$500',
    includes: ['FULL Vaulted Academy', 'Member Portal', 'Advanced IV-SOL Presale Allocation', 'Verified Advanced premium benefits, where supported'],
    action: 'Call To Enroll',
    href: SALES_PHONE_HREF,
  },
  {
    key: 'ELITE',
    name: 'Elite',
    price: '$1,000',
    includes: ['FULL Vaulted Academy', 'Member Portal', 'Elite IV-SOL Presale Allocation', 'ELITE DEVELOPER LAB', 'Verified Elite premium experiences, where supported'],
    action: 'Call To Enroll',
    href: SALES_PHONE_HREF,
  },
] as const

export default function PayPage() {
  return (
    <>
      <main className="min-h-[100dvh] overflow-hidden pb-[calc(env(safe-area-inset-bottom)+88px)] text-neutral-900 dark:text-white lg:pb-0">
        <SiteHeader />
        <section className="mx-auto w-full max-w-[1400px] px-4 pt-12 pb-10 sm:px-6 sm:pt-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">IRON VAULT ENROLLMENT</p>
            <h1 className="mb-4 max-w-4xl text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">Start free. Unlock the full Academy when you are ready.</h1>
            <p className="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-white/65 sm:text-lg">Entry-Level gives you the free Iron Vault orientation. Intermediate and Advanced unlock the complete core Vaulted Academy. Elite unlocks the complete core Academy plus the Elite Developer Lab.</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-lime-600 dark:text-lime-200/80">Your enrollment package also determines your IV-SOL presale allocation.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#enrollment-options" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-lime-400 px-6 text-sm font-semibold text-black hover:bg-lime-300">View Enrollment Options</a>
              <a href="https://member.ironvaulttoken.com/redeem-invite" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-black/15 px-6 text-sm font-semibold text-neutral-900 hover:border-lime-500/50 hover:text-lime-600 dark:border-white/15 dark:text-white dark:hover:border-lime-400/40 dark:hover:text-lime-200">Already purchased? Enter Access Code</a>
            </div>
          </div>
        </section>

        <section id="enrollment-options" className="mx-auto w-full max-w-[1400px] px-4 pb-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-4">
            {ENROLLMENT_PACKAGES.map((item) => (
              <article key={item.key} className={`flex flex-col border p-6 ${item.key === 'ELITE' ? 'border-lime-400/45 bg-lime-400/[0.06]' : 'border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.035]'}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-600 dark:text-lime-300">{item.name}</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight">{item.price}</h2>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-neutral-600 dark:text-white/70">
                  {item.includes.map((include) => <li key={include} className="border-t border-black/10 pt-3 dark:border-white/10">{include}</li>)}
                </ul>
                <a href={item.href} className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-lime-400 px-5 text-sm font-semibold text-black hover:bg-lime-300">
                  {item.key === 'ENTRY_LEVEL' ? null : <PhoneCall className="mr-2 h-4 w-4" aria-hidden />}
                  {item.action}
                </a>
              </article>
            ))}
          </div>
        </section>
        <AppverseFooter />
      </main>
      <BottomNav />
    </>
  )
}
