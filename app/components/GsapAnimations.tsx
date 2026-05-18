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
        // Stagger feature cards in on scroll
        gsap.fromTo(
          ".feat-card",
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: { amount: 0.5 },
            ease: "power3.out",
            scrollTrigger: { trigger: ".feat-grid", start: "top 84%" },
          }
        );

        // Demo frame
        gsap.fromTo(
          ".demo-frame",
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: ".demo-frame", start: "top 84%" },
          }
        );

        // Sprite cells stagger
        gsap.fromTo(
          ".sprite-cell",
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: { trigger: ".sprite-strip", start: "top 86%" },
          }
        );

        // How steps
        gsap.fromTo(
          ".how-step",
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.55, stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: ".how-grid", start: "top 82%" },
          }
        );

        // Install box
        gsap.fromTo(
          ".install-box",
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: ".install-box", start: "top 84%" },
          }
        );

        // Section headlines
        gsap.utils.toArray<Element>(".section-eyebrow, .section-headline").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 18 },
            {
              opacity: 1, y: 0, duration: 0.5, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          );
        });
      });
    })();

    return () => { ctx?.revert() };
  }, []);

  return null;
}
