import { BottomNav } from "@/components/bottom-nav"
import { AppverseFooter } from "@/components/appverse-footer"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    id: "information-we-collect",
    eyebrow: "What We Collect",
    title: "We collect the information needed to deliver course access, authentication, and token-related functionality.",
    body: [
      "IVT MEDIA GROUP, operator of Iron Vault, may collect personal information that you provide directly when you sign up, request access, purchase coursework, contact us, authenticate through our platform, or otherwise interact with the service. The primary categories of information we collect include your name, email address, phone number, and wallet address.",
      "We may also collect related account and usage information tied to those identifiers, such as authentication status, course enrollment details, coursework progress, token allocation eligibility status, transaction-related metadata, communications with support, and technical information associated with your use of the website and platform.",
      "If you connect a wallet or use token-related functionality, we may collect and store your wallet address and related ecosystem data necessary to verify eligibility, display information, or facilitate token distribution mechanics. Public blockchain information is inherently transparent, and transactions associated with a wallet address may be visible on public networks and block explorers independent of our systems.",
    ],
  },
  {
    id: "how-we-use-information",
    eyebrow: "How We Use It",
    title: "We use your data to operate the platform, grant course access, distribute tokens, and communicate with you.",
    body: [
      "We use the information we collect to create and manage your account, authenticate you, provide access to coursework, track course completion, determine eligibility for IV-SOL token allocation where applicable, facilitate token distribution workflows, respond to questions, deliver customer support, and maintain the overall performance, integrity, and security of the platform.",
      "We may also use your name, email address, and phone number to send platform-related communications, onboarding messages, course updates, account notices, transaction or access confirmations, support responses, and marketing or informational communications relating to Iron Vault and IVT MEDIA GROUP, subject to applicable law and any opt-out rights you may have.",
      "We use technical and operational data to monitor platform stability, detect fraud or abuse, troubleshoot issues, improve user experience, analyze feature performance, maintain records, and comply with legal, accounting, regulatory, and risk-management obligations.",
    ],
  },
  {
    id: "no-sale-of-data",
    eyebrow: "We Do Not Sell Your Data",
    title: "Your personal information is not sold for money to third parties.",
    body: [
      "IVT MEDIA GROUP does not sell your personal information to third parties. We do not exchange your personal data for direct monetary compensation in the ordinary course of operating Iron Vault.",
      "We may share limited data with service providers and infrastructure partners that help us operate the platform, authenticate users, process payments, support token-related workflows, communicate with users, or maintain site functionality, but those operational disclosures are different from selling data. Where we use service providers, we do so for business purposes connected to running Iron Vault.",
      "If our practices materially change in the future, we would update this Privacy Policy to reflect those changes. Until then, the operating position is simple: we do not sell your data.",
    ],
  },
  {
    id: "third-party-services",
    eyebrow: "Third-Party Services",
    title: "Some functions rely on outside providers such as Clerk and MoonPay.",
    body: [
      "Iron Vault may use third-party service providers to deliver certain features. At present, this includes Clerk for authentication and MoonPay for payment-related functionality where applicable. These providers may process information necessary to perform their services, such as authentication identifiers, device or session data, payment details, wallet information, or related transaction metadata.",
      "When you interact with these third-party services, their own terms, policies, and operational practices may apply in addition to ours. We are not responsible for the privacy, security, or data-handling practices of third-party providers beyond our own role in selecting and integrating them. You should review the privacy policies and terms of those providers if you use their services through the platform.",
      "We may also use additional vendors for hosting, analytics, communications, customer support, media delivery, infrastructure, or compliance operations. Those providers may process data on our behalf only as needed to support legitimate platform operations.",
    ],
  },
  {
    id: "retention-security-and-rights",
    eyebrow: "Retention, Security, and Your Choices",
    title: "We keep data for operational, legal, and security reasons, and we take reasonable steps to protect it.",
    body: [
      "We retain personal information for as long as reasonably necessary to provide the service, maintain course access records, support token allocation mechanics, comply with legal obligations, resolve disputes, enforce our agreements, and protect platform integrity. Retention periods may vary depending on the type of information and the purpose for which it was collected.",
      "We use reasonable administrative, technical, and organizational measures intended to protect personal information against unauthorized access, disclosure, alteration, or destruction. However, no internet-based service, authentication system, database, wallet integration, or digital storage method can be guaranteed perfectly secure. You should also protect your own credentials, devices, email account, phone access, and wallet environment.",
      "Depending on where you live, you may have rights to request access to, correction of, or deletion of certain personal information we hold, subject to applicable legal exceptions. To make a request, contact us using the contact information below. We may need to verify your identity before acting on a request.",
    ],
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "IVT MEDIA GROUP is the business responsible for this policy.",
    body: [
      "If you have questions about this Privacy Policy, your information, our data practices, or a request relating to your personal information, you may contact IVT MEDIA GROUP at (888) 368-2502.",
      "This Privacy Policy applies to Iron Vault, the financial education platform operated by IVT MEDIA GROUP. By using the platform, you acknowledge that you have reviewed this policy and understand how your information may be collected, used, and shared as described here.",
    ],
  },
] as const

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-[100dvh] pb-[calc(env(safe-area-inset-bottom)+88px)] text-neutral-900 dark:text-white lg:pb-0">
        <SiteHeader />

        <section className="mx-auto w-full max-w-[1400px] px-4 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
              Privacy Policy
            </p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
              Privacy Policy for Iron Vault / IVT MEDIA GROUP
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-white/60 sm:text-xl">
              This policy explains what personal information Iron Vault collects, how it is used, what third-party services support the platform, and the commitments IVT MEDIA GROUP makes regarding your data.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
            <div className="rounded-3xl border border-lime-400/30 bg-[rgba(163,230,53,0.06)] p-6 sm:p-8">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
                Important Summary
              </p>
              <p className="text-base leading-relaxed text-neutral-600 dark:text-white/70 sm:text-lg">
                We collect information such as your name, email, phone number, and wallet address to provide course access,
                token distribution workflows, and communications. We do not sell your data. Iron Vault may use providers including Clerk for authentication and MoonPay for payments.
              </p>
            </div>

            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-3xl border border-black/10 bg-[rgba(17,17,17,0.03)] p-6 dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)] sm:p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span aria-hidden className="h-px w-7 bg-lime-600/60 dark:bg-lime-300/50" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
                    {section.eyebrow}
                  </p>
                </div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-neutral-600 dark:text-white/60 sm:text-lg">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <AppverseFooter />
      </main>
      <BottomNav />
    </>
  )
}
