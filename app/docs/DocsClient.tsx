"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronRight, Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "@/app/iv/ThemeToggle";
import { docs } from "./data";
import styles from "./docs.module.css";

const PUBLIC_SITE = "https://www.ironvaulttoken.com";

const publicLinks = [
  { label: "About", href: `${PUBLIC_SITE}/about` },
  { label: "Academy", href: `${PUBLIC_SITE}/#academy` },
  { label: "System", href: `${PUBLIC_SITE}/#technology` },
  { label: "Token", href: `${PUBLIC_SITE}/#tokenomics` },
  { label: "Enroll", href: `${PUBLIC_SITE}/academy` },
  { label: "Contact", href: `${PUBLIC_SITE}/#partnership-inquiry` },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function addHeadingIds(html: string) {
  return html.replace(/<h([1-3])>(.*?)<\/h\1>/g, (_match, level, text) => (
    `<h${level} id="${slugify(text)}">${text}</h${level}>`
  ));
}

export function DocsClient() {
  const [search, setSearch] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [publicNavOpen, setPublicNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const filteredDocs = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return docs;

    return docs.filter((doc) => (
      doc.title.toLowerCase().includes(term) ||
      doc.content.toLowerCase().includes(term) ||
      doc.category.toLowerCase().includes(term)
    ));
  }, [search]);

  const currentDoc = filteredDocs.find((doc) => doc.id === activeSection) ?? filteredDocs[0];

  const articleHtml = useMemo(
    () => (currentDoc ? addHeadingIds(currentDoc.html) : ""),
    [currentDoc],
  );

  const toc = useMemo(() => {
    if (!currentDoc) return [];

    const headings = currentDoc.content.match(/^#+\s+(.+)$/gm) ?? [];
    return headings.map((heading) => {
      const level = heading.match(/^#+/)?.[0]?.length ?? 2;
      const text = heading.replace(/^#+\s+/, "");
      return { level, text, id: slugify(text) };
    });
  }, [currentDoc]);

  useEffect(() => {
    if (!mobileNavOpen && !publicNavOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeMenus = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
        setPublicNavOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeMenus);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeMenus);
    };
  }, [mobileNavOpen, publicNavOpen]);

  const selectDoc = (id: string) => {
    setActiveSection(id);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const docsNavigation = (
    <>
      <div className={styles.searchBox}>
        <Search size={17} aria-hidden="true" />
        <input
          type="search"
          placeholder="Search docs…"
          aria-label="Search documentation"
          value={search}
          onChange={(event) => {
            const nextSearch = event.target.value;
            setSearch(nextSearch);

            const term = nextSearch.trim().toLowerCase();
            const firstMatch = docs.find((doc) => (
              !term ||
              doc.title.toLowerCase().includes(term) ||
              doc.content.toLowerCase().includes(term) ||
              doc.category.toLowerCase().includes(term)
            ));
            if (firstMatch) setActiveSection(firstMatch.id);
          }}
        />
      </div>

      <nav className={styles.sidebarNav} aria-label="Documentation sections">
        {filteredDocs.map((doc) => (
          <button
            type="button"
            key={doc.id}
            onClick={() => selectDoc(doc.id)}
            className={`${styles.navItem} ${currentDoc?.id === doc.id ? styles.active : ""}`}
            aria-current={currentDoc?.id === doc.id ? "page" : undefined}
          >
            <span className={styles.navCategory}>{doc.category}</span>
            <span className={styles.navTitle}>{doc.title}</span>
          </button>
        ))}
      </nav>

      {filteredDocs.length === 0 ? (
        <p className={styles.navEmpty}>No sections match “{search}”.</p>
      ) : null}
    </>
  );

  return (
    <div className={styles.docsRoot}>
      <header className={styles.publicHeader}>
        <div className={styles.publicHeaderInner}>
          <a className={styles.wordmark} href={`${PUBLIC_SITE}/`} aria-label="Iron Vault home">
            <span>Iron Vault</span>
            <em>Vaulted Academy</em>
          </a>

          <nav className={styles.publicLinks} aria-label="Iron Vault navigation">
            {publicLinks.map((link) => (
              <a href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>

          <div className={styles.publicActions}>
            <ThemeToggle />
            <a className={styles.signIn} href={`${PUBLIC_SITE}/sign-in`}>Sign in</a>
            <button
              type="button"
              className={styles.publicMenuButton}
              aria-label={publicNavOpen ? "Close site navigation" : "Open site navigation"}
              aria-expanded={publicNavOpen}
              onClick={() => setPublicNavOpen((open) => !open)}
            >
              {publicNavOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {publicNavOpen ? (
          <nav className={styles.publicMobileNav} aria-label="Mobile Iron Vault navigation">
            {publicLinks.map((link) => (
              <a href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>
        ) : null}
      </header>

      <section className={styles.productHeader} aria-labelledby="documentation-title">
        <div className={styles.productHeaderInner}>
          <Image src="/favicon.svg" width={64} height={64} alt="" priority />
          <div>
            <p>Iron Vault</p>
            <h1 id="documentation-title">Documentation</h1>
            <span>Technical reference for IV-SOL and the Iron Vault ecosystem.</span>
          </div>
        </div>
      </section>

      <div className={styles.docsShell}>
        <aside className={styles.sidebar}>
          <p className={styles.sidebarLabel}>Documentation</p>
          {docsNavigation}
        </aside>

        <main className={styles.main}>
          <div className={styles.mobileToolbar}>
            <button
              type="button"
              className={styles.openNav}
              onClick={() => setMobileNavOpen(true)}
              aria-label="Browse documentation"
              aria-expanded={mobileNavOpen}
            >
              <Menu size={18} />
              <span>Browse docs</span>
              <ChevronRight size={17} />
            </button>
            <a href="/swap" className={styles.mobileSwap}>Swap IV-SOL</a>
          </div>

          {currentDoc ? (
            <article className={styles.article}>
              <header className={styles.docHeader}>
                <p className={styles.category}>{currentDoc.category}</p>
                <h2>{currentDoc.title}</h2>
                <p className={styles.description}>{currentDoc.description}</p>
              </header>

              <div className={styles.docBody} dangerouslySetInnerHTML={{ __html: articleHtml }} />

              <footer className={styles.docFooter}>
                <div>
                  <p>Token interface</p>
                  <span>Use the verified IV-SOL route on Jupiter.</span>
                </div>
                <a href="/swap">
                  Swap IV-SOL <ArrowUpRight size={16} />
                </a>
              </footer>
            </article>
          ) : (
            <div className={styles.noResults}>
              <p>No documentation found for “{search}”.</p>
              <button type="button" onClick={() => setSearch("")}>Clear search</button>
            </div>
          )}
        </main>

        {currentDoc && toc.length > 0 ? (
          <aside className={styles.toc}>
            <nav aria-label="On this page">
              <p>On this page</p>
              <ul>
                {toc.map((heading) => (
                  <li key={heading.id} data-level={heading.level}>
                    <a href={`#${heading.id}`}>{heading.text}</a>
                  </li>
                ))}
              </ul>
              <a className={styles.swapLink} href="/swap">
                Swap IV-SOL <ArrowUpRight size={15} />
              </a>
            </nav>
          </aside>
        ) : null}
      </div>

      {mobileNavOpen ? (
        <div className={styles.drawerLayer}>
          <button
            type="button"
            className={styles.drawerBackdrop}
            aria-label="Close documentation navigation"
            onClick={() => setMobileNavOpen(false)}
          />
          <aside className={styles.mobileDrawer} aria-label="Documentation navigation drawer">
            <div className={styles.drawerHeader}>
              <div>
                <p>Iron Vault</p>
                <h2>Documentation</h2>
              </div>
              <button type="button" onClick={() => setMobileNavOpen(false)} aria-label="Close documentation navigation">
                <X size={20} />
              </button>
            </div>
            {docsNavigation}
          </aside>
        </div>
      ) : null}
    </div>
  );
}
