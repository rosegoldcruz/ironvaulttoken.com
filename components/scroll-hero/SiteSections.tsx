"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  ClipboardCheck,
  Settings,
  ShieldCheck,
  TrendingUp,
  UserRound,
  UsersRound,
} from "lucide-react";
import { FormEvent, useState } from "react";
import styles from "./scrollHero.module.css";

const ecosystemRows = [
  {
    number: "01",
    title: "Vaulted Academy",
    body: "Structured education in digital finance, risk, and wealth systems—designed to build knowledge, not hype.",
    href: "/academy",
  },
  {
    number: "02",
    title: "IV-SOL",
    body: "The native digital token operating within the Iron Vault ecosystem.",
    href: "#tokenomics",
    gold: true,
  },
  {
    number: "03",
    title: "Swap IV-SOL",
    body: "Swap supported Solana assets into the verified IV-SOL token through Jupiter.",
    href: "/swap",
  },
] as const;

const learningSteps = [
  { label: "Learn", detail: "Build practical knowledge", Icon: BookOpen },
  { label: "Verify", detail: "Demonstrate understanding", Icon: ShieldCheck },
  { label: "Progress", detail: "Advance your expertise", Icon: TrendingUp },
  { label: "Contribute", detail: "Make an impact", Icon: UsersRound },
] as const;

const technologyLayers = [
  "Identity",
  "Entitlements",
  "Curriculum",
  "Progress",
  "Assessments",
  "Administration",
] as const;

const safeguards = [
  "Role-based access",
  "Idempotent progress events",
  "Controlled administrative access",
  "Fraud monitoring",
  "Backup and recovery",
  "Operational review",
] as const;

const partnerTracks = [
  "Educational collaboration",
  "Technology integration",
  "Curriculum and content",
  "Community programs",
] as const;

export function SiteSections() {
  const [sent, setSent] = useState(false);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section id="ecosystem" className={`${styles.specSection} ${styles.ecosystemSection}`} aria-labelledby="ecosystem-heading">
        <div className={styles.specShell}>
          <div className={styles.ecosystemLead}>
            <div className={styles.specCopy}>
              <h2 id="ecosystem-heading">Education<br />before speculation.</h2>
              <p>
                Iron Vault connects Vaulted Academy, IV-SOL, and a community built for capable
                participation in the digital economy.
              </p>
              <Link className={styles.inlineLink} href="/academy">
                Explore the Academy <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.ecosystemVisual}>
              <Image
                src="/animate/spec/ecosystem-stack.png"
                alt="Exploded view of the Iron Vault ecosystem: education, IV-SOL, and community"
                width={1122}
                height={1402}
                sizes="(max-width: 767px) 92vw, 48vw"
              />
              <div className={styles.ecosystemCallouts} aria-hidden="true">
                <span><i />Vaulted Academy<small>Education that builds financial capability.</small></span>
                <span data-gold="true"><i />IV-SOL<small>Utility that powers access and alignment.</small></span>
                <span><i />Community<small>A network of capable participants and builders.</small></span>
              </div>
            </div>
          </div>

          <div className={styles.ecosystemRows}>
            {ecosystemRows.map((row) => (
              <Link href={row.href} className={styles.ecosystemRow} data-gold={("gold" in row && row.gold) || undefined} key={row.number}>
                <span>{row.number}</span>
                <strong>{row.title}</strong>
                <p>{row.body}</p>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className={styles.builtDifferent}>
            <p>Built for long-term participation, not short-term noise.</p>
            <h3>Built Different.</h3>
            <a href="#technology">See how it works <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="academy" className={`${styles.specSection} ${styles.academySection}`} aria-labelledby="academy-heading">
        <div className={styles.specShell}>
          <div className={styles.splitLead}>
            <div className={styles.specCopy}>
              <h2 id="academy-heading">Build capability<br />for the digital economy.</h2>
              <p>
                Vaulted Academy provides structured learning across blockchain, artificial
                intelligence, digital finance, software development, cybersecurity, compliance,
                and emerging technologies.
              </p>
              <div className={styles.specActions}>
                <Link className={styles.primaryAction} href="/academy">Begin the free orientation <ArrowUpRight aria-hidden="true" /></Link>
                <Link className={styles.inlineLink} href="/academy">View the curriculum <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
            <div className={`${styles.specArt} ${styles.academyArt}`}>
              <Image
                src="/animate/spec/academy-modules.png"
                alt="Ten academy learning modules arranged above a circular learning platform"
                width={1536}
                height={1024}
                sizes="(max-width: 767px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className={styles.learningRail}>
            {learningSteps.map(({ label, detail, Icon }, index) => (
              <div key={label} className={index === 0 ? styles.isActive : undefined}>
                <span><Icon aria-hidden="true" /></span>
                <p><strong>{label}</strong><small>{detail}</small></p>
              </div>
            ))}
          </div>

          <div className={styles.academyPreview}>
            <div className={styles.previewCopy}>
              <h3>A living education platform.</h3>
              <p>Structured paths, hands-on labs, real-world projects, and thoughtful assessment—designed to help you grow and contribute.</p>
            </div>
            <div className={styles.dashboardMock} aria-label="Vaulted Academy learning dashboard preview">
              <div className={styles.dashboardTop}><span><ShieldCheck aria-hidden="true" /> Vaulted Academy</span><i>IV</i></div>
              <div className={styles.dashboardBody}>
                <nav aria-label="Dashboard preview">
                  <b>Home</b><span>My Learning</span><span>Paths</span><span>Projects</span><span>Assessments</span>
                </nav>
                <div>
                  <small>MY LEARNING</small>
                  <h4>Continue where you left off</h4>
                  <article>
                    <BadgeCheck aria-hidden="true" />
                    <p><strong>Smart Contract Security</strong><span>Module 8 · 6 lessons</span><i><em /></i></p>
                    <button type="button">Continue</button>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className={`${styles.specSection} ${styles.technologySection}`} aria-labelledby="technology-heading">
        <div className={styles.specShell}>
          <div className={styles.techLead}>
            <div className={styles.specCopy}>
              <h2 id="technology-heading">Infrastructure<br />for measurable<br />participation.</h2>
              <p>
                Vaulted Academy uses server-controlled identity, role-based entitlements,
                structured curriculum, database-backed progress, and administrative controls.
              </p>
            </div>
            <div className={styles.techVisual}>
              <Image
                src="/animate/spec/technology-stack.png"
                alt="Exploded technology stack with a protected identity and progress core"
                width={1199}
                height={1312}
                sizes="(max-width: 767px) 90vw, 45vw"
              />
              <ul>
                {technologyLayers.map((layer, index) => <li key={layer}><i data-lime={index % 2 === 1 ? "true" : undefined} />{layer}</li>)}
              </ul>
            </div>
          </div>

          <div className={styles.architecturePanel}>
            <div>
              <h3>Server-authoritative<br />by design</h3>
              <ul>
                {safeguards.map((item) => <li key={item}><ShieldCheck aria-hidden="true" />{item}<ArrowRight aria-hidden="true" /></li>)}
              </ul>
              <Link className={styles.inlineLink} href="#technology">Read the security model <ArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className={styles.serviceMap} aria-label="Iron Vault service architecture">
              <span className={styles.actorStack}><UserRound /><small>Learner</small><ClipboardCheck /><small>Partner</small><Settings /><small>Admin</small></span>
              <i />
              <section><small>API GATEWAY</small><b>Authentication</b><b>Rate limiting</b><b>Request validation</b></section>
              <i />
              <section><small>CORE SERVICES</small><b>Identity</b><b>Curriculum</b><b>Progress</b><b>Assessment</b></section>
              <i />
              <section><small>DATA LAYER</small><b>Identity data</b><b>Learning data</b><b>Progress data</b></section>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className={`${styles.specSection} ${styles.partnersSection}`} aria-labelledby="partners-heading">
        <div className={styles.specShell}>
          <div className={styles.splitLead}>
            <div className={styles.specCopy}>
              <h2 id="partners-heading">Build the next<br />economy with<br />capable people.</h2>
              <p>
                Iron Vault is developing education, technology, and community infrastructure for
                long-term participation in the digital economy.
              </p>
            </div>
            <div className={`${styles.specArt} ${styles.partnerArt}`}>
              <Image
                src="/animate/spec/partner-stack.png"
                alt="Modular partner infrastructure shown as an exploded hardware stack"
                width={1024}
                height={1536}
                sizes="(max-width: 767px) 82vw, 42vw"
              />
            </div>
          </div>

          <div className={styles.partnerTracks}>
            {partnerTracks.map((track, index) => <a href="#partnership-inquiry" key={track}><span>0{index + 1}</span><strong>{track}</strong><ArrowRight aria-hidden="true" /></a>)}
          </div>

          <div id="partnership-inquiry" className={styles.partnerInquiry}>
            <div>
              <h3>Start with the mission.</h3>
              <p>Tell us what you want to build and where your work connects with education, infrastructure, or community.</p>
              <Link className={styles.primaryAction} href="/sales">Discuss a partnership</Link>
            </div>
            {sent ? (
              <div className={styles.formSuccess} role="status">
                <BadgeCheck aria-hidden="true" />
                <h4>Inquiry ready.</h4>
                <p>Thanks. Continue on the contact page to route it to the right team.</p>
                <Link className={styles.primaryAction} href="/sales">Continue to contact</Link>
              </div>
            ) : (
              <form onSubmit={submitInquiry}>
                <label>Name<input name="name" autoComplete="name" required /></label>
                <label>Work email<input type="email" name="email" autoComplete="email" required /></label>
                <label>Organization<input name="organization" autoComplete="organization" /></label>
                <label>Partnership focus<select name="focus" defaultValue=""><option value="" disabled>Select a focus</option>{partnerTracks.map((track) => <option key={track}>{track}</option>)}</select></label>
                <label>Message<textarea name="message" rows={4} required /></label>
                <button type="submit">Submit inquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
