import { BottomNav } from "@/components/bottom-nav"
import { AppverseFooter } from "@/components/appverse-footer"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    id: "acceptance-of-terms",
    eyebrow: "Acceptance of Terms",
    title: "By using Iron Vault, you agree to these terms.",
    body: [
      "These Terms of Service govern your access to and use of the Iron Vault website, educational platform, related content, token allocation mechanics, communications, and services made available by IVT MEDIA GROUP. By visiting the site, enrolling in coursework, accessing gated materials, creating an account, connecting a wallet, or otherwise interacting with the platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms and any policies referenced within them.",
      "If you do not agree with these Terms, do not use the platform. Your continued use of Iron Vault after any update to these Terms constitutes your acceptance of the revised version. You are responsible for reviewing these Terms periodically to understand your current rights, obligations, and restrictions.",
      "You represent that you are legally capable of entering into a binding agreement under the laws applicable to you. If you are using Iron Vault on behalf of a company, organization, or other entity, you represent that you have authority to bind that entity to these Terms, and references to \"you\" include that entity as well.",
    ],
  },
  {
    id: "description-of-service",
    eyebrow: "Description of Service",
    title: "Iron Vault is a financial education platform first, not an investment platform.",
    body: [
      "Iron Vault is operated by IVT MEDIA GROUP and is designed to provide financial education regarding subjects such as wealth systems, real estate, tokenization, decentralized infrastructure, passive income concepts, and related market mechanics. The service may include written coursework, videos, assessments, gated modules, community features, educational communications, progress tracking, and related user support.",
      "From time to time, completion of coursework may result in the allocation of IV-SOL tokens to eligible users. Any such allocation is part of the platform's educational and utility-based ecosystem design. IV-SOL is intended to function as a utility token within the Iron Vault ecosystem and is not offered as a stock, note, equity interest, debt instrument, profit-sharing arrangement, revenue participation right, or any other type of ownership or investment product in IVT MEDIA GROUP or any affiliate.",
      "Iron Vault does not promise that coursework completion will occur within any particular timeframe, that token allocation features will remain available indefinitely, or that every user will qualify for every platform feature. Access, token mechanics, eligibility rules, utility features, and platform functionality may evolve as the ecosystem develops, provided that such changes do not override rights that cannot legally be waived.",
    ],
  },
  {
    id: "account-access-and-user-responsibility",
    eyebrow: "Account Access and User Responsibility",
    title: "You are responsible for your credentials, wallet information, and platform conduct.",
    body: [
      "Certain features may require you to create or maintain an account through a third-party authentication provider, verify your email address or phone number, or connect a compatible wallet. You are responsible for the accuracy of the information you provide, for maintaining the security of your authentication methods, and for any activity that occurs through your account or wallet unless caused solely by our gross negligence or willful misconduct.",
      "You agree not to misuse the platform, attempt unauthorized access, interfere with platform operation, impersonate another person, submit false information, automate interactions in a way that harms the service, or use Iron Vault in violation of applicable law. We reserve the right to suspend or terminate access where we reasonably believe a user has violated these Terms, compromised platform integrity, abused token allocation mechanics, or engaged in fraudulent, unlawful, or harmful conduct.",
      "You are solely responsible for maintaining access to your wallet and understanding how digital asset wallets function. If you lose access to your wallet, send tokens to the wrong address, fail to complete required verification steps, or otherwise mishandle your digital asset credentials, we may be unable to recover access or reverse transactions.",
    ],
  },
  {
    id: "no-financial-advice",
    eyebrow: "No Financial Advice",
    title: "Everything on Iron Vault is educational only.",
    body: [
      "All content made available through Iron Vault is provided strictly for educational and informational purposes. Nothing on the platform, in any course, in any community discussion, in any written or verbal communication, or in any token-related explanation constitutes investment advice, financial advice, tax advice, legal advice, accounting advice, fiduciary advice, or a recommendation to buy, sell, hold, stake, transfer, or otherwise engage in any asset, token, security, or strategy.",
      "You should not treat any examples, models, case studies, simulations, references to market conditions, commentary on tokenization, or discussions of real estate or digital assets as personalized advice. We do not evaluate your individual financial circumstances, suitability, risk tolerance, tax status, or legal obligations. Before making any financial, legal, tax, or investment decision, you should consult appropriately qualified professional advisers licensed in your jurisdiction.",
      "Any decisions you make after consuming content on Iron Vault are made independently and at your own risk. You assume full responsibility for any outcomes, gains, losses, liabilities, tax consequences, compliance obligations, or other results arising from your decisions.",
    ],
  },
  {
    id: "token-disclaimer",
    eyebrow: "Token Disclaimer",
    title: "IV-SOL is a utility token, and participation carries substantial risk.",
    body: [
      "IV-SOL is described and intended as a utility token within the Iron Vault ecosystem. It is not guaranteed to have any particular value, liquidity profile, market acceptance, exchange support, utility adoption, resale opportunity, or future functionality. No statement on the platform should be interpreted as a guarantee regarding present or future price, demand, utility expansion, or token appreciation.",
      "Digital asset markets are highly volatile and inherently risky. Token prices may rise, fall, or collapse entirely. Liquidity may be unavailable. Regulatory treatment may change. Smart contract ecosystems, wallets, blockchains, bridges, interfaces, and third-party infrastructure may fail or be exploited. Network congestion, market stress, protocol bugs, adverse publicity, macroeconomic events, technical failures, regulatory action, or counterparty issues may affect token utility or value.",
      "Participation in any token-related aspect of the Iron Vault ecosystem involves risk of partial or total loss. You should never participate with funds you cannot afford to lose. IVT MEDIA GROUP does not guarantee token value, token performance, token listing, secondary market availability, or any economic outcome whatsoever.",
    ],
  },
  {
    id: "course-access-and-refunds",
    eyebrow: "Refund Policy",
    title: "All sales are final once course access is granted.",
    body: [
      "When you purchase access to Iron Vault coursework or related educational materials, you are purchasing digital access to proprietary educational content. Because access to that digital content may be granted immediately or shortly after purchase, all sales are final once course access has been provided.",
      "No refunds, credits, chargeback approvals, or partial reimbursements will be issued after course access is granted, except where required by non-waivable law. This policy applies regardless of whether you complete the coursework, fail to complete the coursework, do not claim any associated token allocation, experience changes in token value, change your mind, misunderstand the platform, or decide not to continue participating.",
      "If you experience a technical issue that prevents access, your remedy is support and reasonable access restoration, not a refund once access has been granted. You are responsible for ensuring that your device, browser, connectivity, and wallet environment are reasonably compatible with the platform before purchase and use.",
    ],
  },
  {
    id: "intellectual-property",
    eyebrow: "Intellectual Property",
    title: "The platform content belongs to IVT MEDIA GROUP or its licensors.",
    body: [
      "All course materials, videos, text, graphics, branding, logos, trademarks, site design, token-related educational content, downloadable materials, and platform organization are owned by IVT MEDIA GROUP or its licensors and are protected by applicable intellectual property laws. Your access to the platform gives you a limited, non-exclusive, non-transferable, revocable license to use the materials for your own personal, non-commercial educational purposes.",
      "You may not reproduce, republish, scrape, mirror, distribute, sell, license, modify, create derivative works from, publicly display, or exploit platform content except as expressly permitted in writing. You may not remove proprietary notices or represent platform materials as your own. We reserve all rights not expressly granted in these Terms.",
      "If you submit feedback, suggestions, ideas, or improvement proposals regarding the platform, you agree that we may use them without restriction or obligation to compensate you, unless prohibited by law.",
    ],
  },
  {
    id: "disclaimers-and-limitation-of-liability",
    eyebrow: "Disclaimers and Limitation of Liability",
    title: "The platform is provided as-is and as-available, to the maximum extent permitted by law.",
    body: [
      "Iron Vault is provided on an \"as is,\" \"as available\" basis without warranties of any kind, whether express, implied, statutory, or otherwise, including any implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, quiet enjoyment, accuracy, availability, or results. We do not warrant that the platform will be uninterrupted, error-free, secure, timely, or free of harmful components, or that educational materials will meet your expectations or produce any particular personal or financial outcome.",
      "To the fullest extent permitted by applicable law, IVT MEDIA GROUP and its officers, managers, employees, contractors, affiliates, licensors, and service providers will not be liable for any indirect, incidental, special, consequential, exemplary, punitive, or speculative damages, or for any loss of profits, value, revenue, data, goodwill, digital assets, business opportunities, or reputation arising out of or related to your use of Iron Vault, your inability to use the platform, reliance on educational content, wallet errors, token volatility, market losses, service interruptions, third-party failures, or unauthorized access.",
      "To the maximum extent permitted by law, if we are found liable for any claim arising out of or relating to the service, our aggregate liability will not exceed the amount you paid directly to IVT MEDIA GROUP for the specific course access giving rise to the claim during the twelve months preceding the event at issue. Some jurisdictions do not allow certain limitations, so portions of this section may not apply to you to the extent prohibited by law.",
    ],
  },
  {
    id: "indemnification",
    eyebrow: "Indemnification",
    title: "You agree to bear responsibility for misuse of the platform.",
    body: [
      "You agree to defend, indemnify, and hold harmless IVT MEDIA GROUP, its affiliates, officers, managers, employees, contractors, licensors, and service providers from and against any claims, damages, losses, liabilities, judgments, costs, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the platform, your violation of these Terms, your violation of applicable law, your infringement of another party's rights, your misuse of token or wallet features, or any content or information you submit through the service.",
      "We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and you agree to cooperate with that defense. This provision survives termination of your use of the platform.",
    ],
  },
  {
    id: "changes-and-termination",
    eyebrow: "Changes to Service and Terms",
    title: "We may update the platform and these Terms as the ecosystem evolves.",
    body: [
      "We may modify, suspend, discontinue, or update any aspect of Iron Vault, including educational modules, token allocation rules, eligibility requirements, pricing, platform integrations, site design, or community features. We may also revise these Terms from time to time to reflect changes in our services, legal obligations, business practices, or risk controls.",
      "When material changes are made, we may update the effective date or post notice through the platform, but you are responsible for reviewing the current Terms before continued use. We may suspend or terminate access to the platform, with or without notice, if required for legal, technical, operational, or security reasons, or if we reasonably believe your conduct violates these Terms.",
      "Sections of these Terms that by their nature should survive termination, including ownership, disclaimers, limitations of liability, indemnification, governing law, and dispute-related provisions, will survive any termination or suspension of access.",
    ],
  },
  {
    id: "governing-law-and-contact",
    eyebrow: "Governing Law and Contact",
    title: "Arizona law governs these Terms, and the operator is IVT MEDIA GROUP.",
    body: [
      "These Terms and any dispute, claim, or controversy arising out of or relating to Iron Vault or your use of the platform will be governed by and construed in accordance with the laws of the State of Arizona, USA, without regard to conflict-of-law principles. You agree that Arizona is the governing jurisdiction for these Terms unless mandatory law requires otherwise.",
      "If you need to contact us regarding these Terms, platform access, support issues, legal notices, or compliance concerns, you may contact IVT MEDIA GROUP at (888) 368-2502. References to Iron Vault throughout these Terms refer to the financial education platform operated by IVT MEDIA GROUP.",
      "By continuing to use Iron Vault, you acknowledge that you understand the educational purpose of the platform, the risks associated with digital assets, the absence of guaranteed outcomes, and your responsibility to make independent decisions based on your own judgment and professional advice where appropriate.",
    ],
  },
] as const

export default function TermsPage() {
  return (
    <>
      <main className="min-h-[100dvh] pb-[calc(env(safe-area-inset-bottom)+88px)] text-neutral-900 dark:text-white lg:pb-0">
        <SiteHeader />

        <section className="mx-auto w-full max-w-[1400px] px-4 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-lime-600 dark:text-lime-300">
              Terms of Service
            </p>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
              Terms of Service for Iron Vault / IVT MEDIA GROUP
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-white/60 sm:text-xl">
              These terms explain the rules that govern access to the Iron Vault financial education platform,
              including coursework access, token allocation mechanics, platform usage, disclaimers, and user responsibilities.
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
                Iron Vault is a financial education platform. Completion of coursework may result in IV-SOL token allocation,
                but IV-SOL is a utility token, not a security, equity interest, or guaranteed investment product. All content is educational only,
                all sales are final once course access is granted, and Arizona law governs these Terms.
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