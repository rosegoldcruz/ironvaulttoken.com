import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import Script from "next/script"

export const dynamic = "force-static"

export default function ThankYouPage() {
  return (
    <>
      <main className="min-h-[100dvh] text-neutral-900 dark:text-white">
        <SiteHeader />
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 inline-flex rounded-full bg-lime-400/10 p-4">
              <svg
                className="h-12 w-12 text-lime-600 dark:text-lime-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              You&apos;re In.
            </h1>
            <p className="mb-3 text-xl font-medium text-lime-600 dark:text-lime-300">
              Welcome to the Iron Vault Network.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-neutral-600 dark:text-white/60">
              We&apos;ve received your information. You&apos;ll be among the first to receive
              education, updates, and early access to IV&ndash;SOL. Keep an eye on your inbox.
            </p>
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-lime-400 px-8 py-3 text-base font-semibold text-neutral-950 transition-colors hover:bg-lime-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      {/* GoHighLevel tracking for thank-you conversion */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  )
}
