"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SceneGate } from "./SceneGate";
import { SiteSections } from "./SiteSections";
import { TokenomicsScroll } from "./TokenomicsScroll";
import { OVERVIEW_COPY } from "./data";
import styles from "./scrollHero.module.css";
import type { HeroHopAnchors, HeroImpactDriver } from "./HeroScene";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const SCROLL_KEYS = new Set([
  "ArrowDown",
  "ArrowUp",
  "PageDown",
  "PageUp",
  "End",
  "Home",
  " ",
]);

const HOME_SCROLL_RESTORE_KEY = "iron-vault:home-scroll-y";

export function IronVaultScroll({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroFrameRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const hopAnchorsRef = useRef<HeroHopAnchors>([]);
  const heroImpactRef = useRef<HeroImpactDriver | null>(null);
  const heroInvalidateRef = useRef<(() => void) | null>(null);

  const launchAssetsEnabledRef = useRef(false);
  const overviewRef = useRef<HTMLElement>(null);
  const heroProgress = useRef(0);
  const launchProgress = useRef(-1);

  const [heroSceneEnabled, setHeroSceneEnabled] = useState(true);
  const [launchAssetsEnabled, setLaunchAssetsEnabled] = useState(false);

  const words = OVERVIEW_COPY.split(" ");

  useEffect(() => {
    const enableScene = () => setHeroSceneEnabled(true);

    const enableSceneFromKeyboard = (event: KeyboardEvent) => {
      if (SCROLL_KEYS.has(event.key)) {
        enableScene();
      }
    };

    window.addEventListener("wheel", enableScene, {
      passive: true,
      once: true,
    });

    window.addEventListener("touchmove", enableScene, {
      passive: true,
      once: true,
    });

    window.addEventListener("scroll", enableScene, {
      passive: true,
      once: true,
    });

    window.addEventListener("keydown", enableSceneFromKeyboard);

    return () => {
      window.removeEventListener("wheel", enableScene);
      window.removeEventListener("touchmove", enableScene);
      window.removeEventListener("scroll", enableScene);
      window.removeEventListener("keydown", enableSceneFromKeyboard);
    };
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const navigation = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const storedScroll = Number(sessionStorage.getItem(HOME_SCROLL_RESTORE_KEY));
    let restoredScroll = navigation?.type === "reload" && Number.isFinite(storedScroll)
      ? storedScroll
      : null;

    const rememberScroll = () => {
      sessionStorage.setItem(HOME_SCROLL_RESTORE_KEY, String(window.scrollY));
    };

    window.addEventListener("pagehide", rememberScroll);

    void import("@/app/motion/gsap").then(({ gsap, ScrollTrigger }) => {
      let syncHeroFromScroll: (() => void) | undefined;
      let syncLaunchFromScroll: (() => void) | undefined;
      const root = rootRef.current;
      const hero = heroRef.current;
      const heroFrame = heroFrameRef.current;
      const headline = headlineRef.current;
      const overview = overviewRef.current;
      const ecosystem = root?.querySelector<HTMLElement>("#ecosystem");

      if (!root || !hero || !heroFrame || !headline || !overview || !ecosystem) {
        return;
      }

      const context = gsap.context(() => {
        const media = gsap.matchMedia();

        const setupHeroTimeline = (
          end: string,
          headlineShift: number,
          squashAnchorIndexes: number[],
        ) => {
          const heroTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end,
              pin: heroFrame,
              scrub: 1,
              invalidateOnRefresh: true,
              onEnter: () => gsap.set(heroFrame, { autoAlpha: 1 }),
              onEnterBack: () => gsap.set(heroFrame, { autoAlpha: 1 }),
            },
          });

          heroTimeline.eventCallback("onUpdate", () => {
            heroProgress.current = heroTimeline.progress();

            if (
              heroProgress.current >= 0.55 &&
              !launchAssetsEnabledRef.current
            ) {
              launchAssetsEnabledRef.current = true;
              setLaunchAssetsEnabled(true);
            }

            heroInvalidateRef.current?.();
          });

          heroTimeline.to(
            headline,
            {
              xPercent: headlineShift,
              ease: "none",
            },
            0,
          );

          /*
           * Letter impacts are NOT scheduled from absolute timeline
           * positions.
           *
           * HeroScene determines real rendered coin contact and scrubs
           * these impact timelines.
           */
          const landingNodes = hopAnchorsRef.current;

          const impactProxies = squashAnchorIndexes.map(() => ({
            c: 0,
          }));

          const impactTimelines = squashAnchorIndexes.map(
            (anchorIndex, landingIndex) => {
              const letter = landingNodes[anchorIndex];

              if (!letter) {
                return null;
              }

              // V < I < M impact strength.
              const strength = 1 + landingIndex * 0.35;

              const impact = gsap.timeline({
                paused: true,
              });

              impact.to(
                letter,
                {
                  keyframes: [
                    {
                      y: 14 * strength,
                      scaleX: 1 + 0.08 * strength,
                      scaleY: 1 - 0.24 * strength,
                      duration: 0.026,
                      ease: "power3.in",
                    },
                    {
                      y: -9 * strength,
                      scaleX: 1 - 0.04 * strength,
                      scaleY: 1 + 0.09 * strength,
                      duration: 0.035,
                      ease: "power3.out",
                    },
                    {
                      y: 3 * strength,
                      scaleX: 1 + 0.02 * strength,
                      scaleY: 1 - 0.03 * strength,
                      duration: 0.026,
                      ease: "power2.inOut",
                    },
                    {
                      y: 0,
                      scaleX: 1,
                      scaleY: 1,
                      duration: 0.03,
                      ease: "back.out(2.4)",
                    },
                  ],
                  transformOrigin: "50% 100%",
                },
                0,
              );

              impact.to(
                impactProxies[landingIndex],
                {
                  keyframes: [
                    {
                      c: 1,
                      duration: 0.026,
                      ease: "power3.in",
                    },
                    {
                      c: -0.45,
                      duration: 0.035,
                      ease: "power3.out",
                    },
                    {
                      c: 0.12,
                      duration: 0.026,
                      ease: "power2.inOut",
                    },
                    {
                      c: 0,
                      duration: 0.03,
                      ease: "back.out(2.4)",
                    },
                  ],
                },
                0,
              );

              return impact;
            },
          );

          heroImpactRef.current = {
            set: (landingIndex, level) => {
              const impact = impactTimelines[landingIndex];

              if (!impact) {
                return 0;
              }

              impact.progress(level);

              return impactProxies[landingIndex].c;
            },
          };

          const sync = () => {
            const trigger = heroTimeline.scrollTrigger;
            if (!trigger) return;

            heroProgress.current = gsap.utils.clamp(
              0,
              1,
              (trigger.scroll() - trigger.start) / (trigger.end - trigger.start),
            );
          };

          syncHeroFromScroll = sync;

          return () => {
            if (syncHeroFromScroll === sync) syncHeroFromScroll = undefined;
            heroImpactRef.current = null;

            impactTimelines.forEach((impact) => {
              impact?.kill();
            });

            heroTimeline.kill();
          };
        };

        const setupLaunchTimeline = (start: string, end: string) => {
          const setLaunchProgress = (value: number) => {
            launchProgress.current = value;

            if (value >= 0 && value <= 1 && !launchAssetsEnabledRef.current) {
              launchAssetsEnabledRef.current = true;
              setLaunchAssetsEnabled(true);
            }

            heroInvalidateRef.current?.();
          };

          const timeline = ScrollTrigger.create({
            trigger: overview,
            start,
            endTrigger: ecosystem,
            end,
            invalidateOnRefresh: true,
            onEnter: () => setLaunchProgress(0),
            onEnterBack: () => setLaunchProgress(1),
            onUpdate: (self) => setLaunchProgress(self.progress),
            onLeave: () => setLaunchProgress(1),
            onLeaveBack: () => setLaunchProgress(-1),
            onRefresh: (self) => {
              const scroll = self.scroll();
              setLaunchProgress(scroll < self.start ? -1 : scroll > self.end ? 1 : self.progress);
            },
          });

          const exit = ScrollTrigger.create({
            trigger: ecosystem,
            start: "top top",
            onEnter: () => setLaunchProgress(2),
            onLeaveBack: () => setLaunchProgress(1),
          });

          const sync = () => {
            const scroll = timeline.scroll();
            const progress = gsap.utils.clamp(
              0,
              1,
              (scroll - timeline.start) / (timeline.end - timeline.start),
            );
            setLaunchProgress(scroll < timeline.start ? -1 : scroll > timeline.end ? 1 : progress);
          };

          syncLaunchFromScroll = sync;

          return () => {
            if (syncLaunchFromScroll === sync) syncLaunchFromScroll = undefined;
            timeline.kill();
            exit.kill();
          };
        };

        media.add(
          "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          () => {
            const killHero = setupHeroTimeline(
              "+=380%",
              -15,
              [1, 2, 3],
            );
            const killLaunch = setupLaunchTimeline("top 30%", "top 22%");

            const wordNodes =
              gsap.utils.toArray<HTMLElement>(
                `.${styles.overviewWord}`,
              );

            const wordTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: overview,
                start: "top 72%",
                end: "bottom 34%",
                scrub: true,
              },
            });

            wordTimeline.to(wordNodes, {
              color: "var(--iv-ink)",
              stagger: 0.065,
              ease: "none",
            });

            return () => {
              killHero();
              killLaunch();
              wordTimeline.kill();
            };
          },
        );

        media.add(
          "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
          () => {
            const killHero = setupHeroTimeline(
              "+=95%",
              -5,
              [4, 3],
            );
            const killLaunch = setupLaunchTimeline("top 10%", "top 30%");

            return () => {
              killHero();
              killLaunch();
            };
          },
        );

        media.add("(prefers-reduced-motion: reduce)", () => {
          gsap.set(`.${styles.overviewWord}`, {
            color: "var(--iv-ink)",
          });
        });

        cleanup = () => media.revert();
      }, root);

      const syncRestoredScroll = () => {
        if (restoredScroll !== null) {
          ScrollTrigger.refresh();
          window.scrollTo(0, restoredScroll);
          restoredScroll = null;
        } else {
          ScrollTrigger.refresh();
        }

        ScrollTrigger.update();
        syncHeroFromScroll?.();
        syncLaunchFromScroll?.();
        heroInvalidateRef.current?.();
      };

      window.addEventListener("load", syncRestoredScroll);
      window.addEventListener("pageshow", syncRestoredScroll);

      if (document.readyState === "complete") {
        queueMicrotask(syncRestoredScroll);
      }

      const previousCleanup = cleanup;

      cleanup = () => {
        window.removeEventListener("load", syncRestoredScroll);
        window.removeEventListener("pageshow", syncRestoredScroll);
        previousCleanup?.();
        context.revert();
      };
    });

    return () => {
      window.removeEventListener("pagehide", rememberScroll);
      cleanup?.();
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.root}>
      {showHeader ? (
        <header className={styles.header}>
          <Link
            className={styles.brand}
            href="/"
            aria-label="Iron Vault home"
          >
            <Image
              src="/favicon.svg"
              alt=""
              width={28}
              height={28}
            />
            <span>IRON VAULT</span>
          </Link>

          <nav
            className={styles.nav}
            aria-label="Animate page"
          >
            <a href="#ecosystem">Ecosystem</a>
            <a href="#academy">Academy</a>
            <a href="#technology">Technology</a>
            <a href="#partners">Partners</a>
            <a href="#tokenomics">Tokenomics</a>
          </nav>

          <Link
            className={styles.enterButton}
            href="/sign-in"
          >
            Enter Vault
          </Link>
        </header>
      ) : null}

      <main>
        {heroSceneEnabled ? (
          <SceneGate className={styles.heroCanvas}>
            {(active) => (
              <HeroScene
                active={active}
                progress={heroProgress}
                launchProgress={launchProgress}
                anchors={hopAnchorsRef}
                impact={heroImpactRef}
                invalidateRef={heroInvalidateRef}
                launchAssetsEnabled={launchAssetsEnabled}
                onCoinReady={() => undefined}
              />
            )}
          </SceneGate>
        ) : null}

        <section
          ref={heroRef}
          className={styles.hero}
          aria-labelledby="meet-iron-vault"
        >
          <div
            ref={heroFrameRef}
            className={styles.heroFrame}
          >
            <h1
              ref={headlineRef}
              id="meet-iron-vault"
              className={styles.heroHeadline}
              aria-label="Meet Iron Vault"
            >
              <span
                className={styles.heroWord}
                aria-hidden="true"
              >
                <span
                  ref={(node) => {
                    hopAnchorsRef.current[3] = node;
                  }}
                  className={styles.heroLandingLetter}
                  data-hop-target="M"
                >
                  M
                </span>

                <span>e</span>
                <span>e</span>
                <span>t</span>
              </span>{" "}

              <span
                className={styles.heroWord}
                aria-hidden="true"
              >
                <span
                  ref={(node) => {
                    hopAnchorsRef.current[2] = node;
                  }}
                  className={styles.heroLandingLetter}
                  data-hop-target="I"
                >
                  I
                </span>

                <span>r</span>
                <span>o</span>

                <span
                  ref={(node) => {
                    hopAnchorsRef.current[4] = node;
                  }}
                  className={styles.heroLandingLetter}
                  data-hop-target="mobile-n"
                >
                  n
                </span>
              </span>{" "}

              <span
                className={styles.heroWord}
                aria-hidden="true"
              >
                <span
                  ref={(node) => {
                    hopAnchorsRef.current[1] = node;
                  }}
                  className={styles.heroLandingLetter}
                  data-hop-target="V"
                >
                  V
                </span>

                <span>a</span>
                <span>u</span>
                <span>l</span>

                <span
                  ref={(node) => {
                    hopAnchorsRef.current[0] = node;
                  }}
                  className={styles.heroLandingLetter}
                  data-hop-target="T"
                >
                  t
                </span>
              </span>
            </h1>

            <div
              className={styles.heroRule}
              aria-hidden="true"
            />
          </div>
        </section>

        <section
          ref={overviewRef}
          id="overview"
          className={styles.overview}
          aria-labelledby="overview-title"
        >
          <h2
            id="overview-title"
            className={styles.srOnly}
          >
            Iron Vault overview
          </h2>

          <p className={styles.overviewCopy}>
            {words.map((word, index) => (
              <span
                className={styles.overviewWord}
                key={`${word}-${index}`}
              >
                {word}
                {index < words.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </section>

        <SiteSections />

        <TokenomicsScroll />
      </main>
    </div>
  );
}
