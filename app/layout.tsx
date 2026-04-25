import type { Metadata } from "next";
import { Press_Start_2P, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Agent Cockpit — Run multiple coding agents from one control room",
  description: "Install Agent Cockpit and run Claude Code + Codex sessions with unified approvals, timeline, and local-first visibility.",
  icons: {
    icon: "/assets/faces/astronaut.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
