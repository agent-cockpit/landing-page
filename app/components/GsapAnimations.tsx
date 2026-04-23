"use client";
import { useEffect } from "react";

export default function GsapAnimations() {
  useEffect(() => {
    let ctx: ReturnType<typeof import("gsap").gsap.context>;

    (async () => {
      const gsap = (await import("gsap")).gsap;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // ── HERO VISUAL entrance ──────────────────────────────────────
        gsap.fromTo(
          ".hero-visual",
          { opacity: 0, x: 52, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1.1, delay: 0.4, ease: "power3.out" }
        );

        // hw2 entrance → hand off to GSAP float (so no CSS animation conflict)
        gsap.fromTo(
          ".hw2",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 1.2,
            ease: "power3.out",
            onComplete() {
              gsap.to(".hw2", {
                y: -9,
                duration: 2.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          }
        );

        // ── HERO parallax on scroll (desktop only) ────────────────────
        const mm = gsap.matchMedia();
        mm.add("(min-width: 860px)", () => {
          gsap.to(".hero-visual", {
            y: 70,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
          gsap.to(".hero-bg", {
            y: 48,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 1.8,
            },
          });
        });

        // ── SECTION LABELS ────────────────────────────────────────────
        gsap.utils.toArray<Element>(".section-label").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -22 },
            {
              opacity: 1,
              x: 0,
              duration: 0.55,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          );
        });

        // ── SECTION HEADINGS + LEAD PARAGRAPHS ───────────────────────
        gsap.utils.toArray<Element>(".s .inner > h2, .s .inner > p").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          );
        });

        // ── FEATURE CARDS stagger ─────────────────────────────────────
        gsap.fromTo(
          ".feat",
          { opacity: 0, y: 38 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: { amount: 0.5 },
            ease: "power3.out",
            scrollTrigger: { trigger: ".feat-grid", start: "top 82%" },
          }
        );

        // ── HOW IT WORKS: nums bounce in, then text ───────────────────
        gsap.fromTo(
          ".how-num",
          { scale: 0.35, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.18,
            ease: "back.out(2)",
            scrollTrigger: { trigger: ".how-grid", start: "top 82%" },
          }
        );
        gsap.fromTo(
          ".how-title, .how-body",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.07,
            ease: "power3.out",
            delay: 0.28,
            scrollTrigger: { trigger: ".how-grid", start: "top 82%" },
          }
        );

        // ── INSTALL BOX ───────────────────────────────────────────────
        gsap.fromTo(
          ".install-box",
          { opacity: 0, y: 36, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: ".install-box", start: "top 84%" },
          }
        );
        gsap.fromTo(
          ".install-group",
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.22,
            scrollTrigger: { trigger: ".install-box", start: "top 84%" },
          }
        );

        // ── PROVIDER CARDS ────────────────────────────────────────────
        gsap.fromTo(
          ".prov-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: { trigger: ".prov-grid", start: "top 84%" },
          }
        );

        // ── ROADMAP ROWS ──────────────────────────────────────────────
        gsap.fromTo(
          ".rm-row",
          { opacity: 0, x: -22 },
          {
            opacity: 1,
            x: 0,
            duration: 0.48,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: ".roadmap", start: "top 82%" },
          }
        );

        // ── FOOTER ────────────────────────────────────────────────────
        gsap.fromTo(
          "footer.site-footer",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: "footer.site-footer", start: "top 95%" },
          }
        );
      });
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
