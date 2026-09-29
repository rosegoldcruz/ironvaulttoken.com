import type { Metadata } from "next";
import Link from "next/link";
import { IvNav } from "@/app/iv/IvNav";
import { BusinessContact } from "@/components/business-contact";

export const metadata: Metadata = {
  title: "Contact IVT MEDIA GROUP | Iron Vault",
  description: "Business phone numbers, email addresses, mailing address, and map for IVT MEDIA GROUP.",
};

export default function ContactPage() {
  return (
    <div className="iv-root">
      <IvNav />
      <main style={{ paddingTop: 72, minHeight: "100vh" }}>
        <BusinessContact />
      </main>
      <footer className="iv-footer">
        <div className="iv-shell iv-footer-grid">
          <Link className="iv-wordmark" href="/">Iron Vault <em>Vaulted Academy</em></Link>
          <nav aria-label="Footer navigation">
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
