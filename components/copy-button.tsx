"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export function CopyButton({
  text,
  label = "Copy",
}: {
  text: string
  label?: string
}) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      aria-label={copied ? "Copied" : label}
      className={`inline-flex min-h-[32px] items-center gap-1.5 whitespace-nowrap rounded-full border px-3 text-[11px] font-medium transition-colors ${
        copied
          ? "border-lime-500/60 text-lime-600 dark:border-lime-400/60 dark:text-lime-300"
          : "border-black/15 text-neutral-500 hover:border-lime-500/40 hover:text-lime-600 dark:border-white/15 dark:text-white/50 dark:hover:border-lime-400/40 dark:hover:text-lime-300"
      }`}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : label}
    </button>
  )
}
