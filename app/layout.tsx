import { ClerkProvider } from "@clerk/nextjs"
import { shadcn } from "@clerk/ui/themes"
import type React from "react"
import "@clerk/ui/themes/shadcn.css"
import "./globals.css"
import "./iv/iron.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif, Inter_Tight } from "next/font/google"
import Script from "next/script"
import { RedditTrackingProvider } from "@/components/analytics/reddit-tracking-provider"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" })
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Iron Vault | Vaulted Academy",
  description:
    "Iron Vault is an education-first digital ecosystem built around Vaulted Academy, IV-SOL, and practical participation in the digital economy.",
  generator: "Iron Vault Token",
  icons: {
    icon: [
      { url: "/IVT/favicon.ico", sizes: "any" },
      { url: "/IVT/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/IVT/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/IVT/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${interTight.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('iv-theme');if(t!=='light'&&t!=='dark')t='light';document.documentElement.dataset.ivTheme=t;document.documentElement.style.colorScheme=t;document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()",
          }}
        />
        <link rel="preload" href="/animate/ivsol_coin_LIVE.optimized.glb" as="fetch" type="model/gltf-binary" crossOrigin="anonymous" />
        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
        {/* GoHighLevel External Tracking */}
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_1af5c4023eac4b749a18eff1192fe942"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <ClerkProvider appearance={{ theme: shadcn }}>
          <RedditTrackingProvider />
          <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_80%_-10%,rgba(99,91,255,0.07),transparent_48%),linear-gradient(180deg,#fdfdfc_0%,#f6f5f3_100%)] dark:bg-[radial-gradient(circle_at_80%_-10%,rgba(139,92,246,0.16),transparent_48%),linear-gradient(180deg,#050507_0%,#0a0a0d_100%)]" />
          <div className="relative z-10">{children}</div>
        </ClerkProvider>
      </body>
    </html>
  )
}
