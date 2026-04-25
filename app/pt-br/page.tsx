import type { Metadata } from "next";
import LandingPage from "@/app/components/LandingPage";

export const metadata: Metadata = {
  title: "Agent Cockpit — Controle múltiplos agentes de código em um só lugar",
  description:
    "Rode Claude Code + Codex com aprovações unificadas, timeline e visibilidade local-first no Agent Cockpit.",
};

export default function HomePagePtBr() {
  return <LandingPage locale="pt-BR" />;
}
