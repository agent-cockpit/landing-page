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
        gsap.fromTo(
          ".hero-visual",
          { opacity: 0, x: 52, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1.1, delay: 0.4, ease: "power3.out" }
        );

        gsap.fromTo(
          ".hw2",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 1.1,
            ease: "power3.out",
            onComplete() {
              gsap.to(".hw2", {
                y: -8,
                duration: 2.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            },
          }
        );

        const mm = gsap.matchMedia();
        mm.add("(min-width: 860px)", () => {
          gsap.to(".hero-visual", {
            y: 64,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
            },
          });
          gsap.to(".hero-bg", {
            y: 42,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: 1.6,
            },
          });
        });

        gsap.utils.toArray<Element>(".section-label, .lp-h2, .lp-lead").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          );
        });

        gsap.fromTo(
          ".trust-chip",
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: ".trust-row", start: "top 90%" },
          }
        );

        gsap.fromTo(
          ".pain-card",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".pain-grid", start: "top 84%" },
          }
        );

        gsap.fromTo(
          ".feat",
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: { amount: 0.4 },
            ease: "power3.out",
            scrollTrigger: { trigger: ".feat-grid", start: "top 84%" },
          }
        );

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
          ".install-box",
          { opacity: 0, y: 34, scale: 0.98 },
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
          ".final-cta-box",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: ".final-cta-box", start: "top 86%" },
          }
        );

        gsap.fromTo(
          "footer.site-footer",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.55,
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
