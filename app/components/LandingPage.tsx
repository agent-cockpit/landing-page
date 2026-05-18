import Image from "next/image";
import Link from "next/link";
import CopyButton from "@/app/components/CopyButton";
import GithubIcon from "@/app/components/GithubIcon";

// ─── Static scene data ────────────────────────────────────────────────────

const STARS: { x: number; y: number; s: number; dur: number; del: number }[] = [
  {x:3,  y:5,  s:1.5,dur:3.2,del:0   },{x:8,  y:12, s:1,  dur:4.1,del:0.8 },
  {x:14, y:7,  s:1.5,dur:3.8,del:1.5 },{x:19, y:18, s:1,  dur:4.5,del:0.3 },
  {x:24, y:4,  s:2,  dur:3.0,del:2.1 },{x:29, y:14, s:1,  dur:4.8,del:1.1 },
  {x:33, y:9,  s:1.5,dur:3.6,del:0.6 },{x:38, y:22, s:1,  dur:4.2,del:1.9 },
  {x:43, y:6,  s:1,  dur:5.0,del:0.4 },{x:47, y:16, s:2,  dur:3.4,del:1.3 },
  {x:52, y:10, s:1,  dur:4.7,del:0.9 },{x:57, y:3,  s:1.5,dur:3.9,del:2.4 },
  {x:62, y:19, s:1,  dur:4.3,del:0.2 },{x:67, y:8,  s:2,  dur:3.5,del:1.7 },
  {x:71, y:14, s:1,  dur:4.6,del:0.7 },{x:76, y:5,  s:1,  dur:3.7,del:1.4 },
  {x:80, y:20, s:1.5,dur:4.9,del:0.5 },{x:85, y:11, s:1,  dur:3.3,del:2.0 },
  {x:90, y:7,  s:2,  dur:4.4,del:0.1 },{x:94, y:17, s:1,  dur:3.8,del:1.6 },
  {x:6,  y:25, s:1,  dur:4.0,del:2.3 },{x:11, y:30, s:1.5,dur:3.5,del:0.8 },
  {x:17, y:26, s:1,  dur:4.7,del:1.2 },{x:22, y:33, s:1,  dur:3.2,del:0.4 },
  {x:27, y:28, s:1.5,dur:5.1,del:1.8 },{x:36, y:31, s:1,  dur:4.1,del:0.6 },
  {x:41, y:27, s:2,  dur:3.6,del:2.2 },{x:50, y:35, s:1,  dur:4.4,del:0.9 },
  {x:55, y:29, s:1,  dur:3.9,del:1.5 },{x:60, y:32, s:1.5,dur:4.8,del:0.3 },
  {x:65, y:26, s:1,  dur:3.3,del:1.9 },{x:70, y:34, s:1,  dur:4.2,del:0.7 },
  {x:75, y:28, s:2,  dur:3.7,del:2.5 },{x:83, y:31, s:1,  dur:4.5,del:1.0 },
  {x:88, y:23, s:1,  dur:3.1,del:0.5 },{x:96, y:29, s:1.5,dur:4.6,del:1.4 },
  {x:2,  y:38, s:1,  dur:4.3,del:0.2 },{x:16, y:40, s:1,  dur:3.8,del:1.7 },
  {x:31, y:42, s:1.5,dur:4.9,del:0.8 },{x:45, y:38, s:1,  dur:3.4,del:2.0 },
  {x:59, y:41, s:1,  dur:4.0,del:1.1 },{x:73, y:39, s:1.5,dur:3.6,del:0.4 },
  {x:87, y:43, s:1,  dur:4.7,del:1.6 },{x:98, y:36, s:1,  dur:3.2,del:0.9 },
];

const CLOUDS = [
  { top: "8%",  left: "-20%",  dur: 88,  del: 0,   scale: 1.2 },
  { top: "15%", left: "-35%",  dur: 112, del: -30,  scale: 0.85 },
  { top: "6%",  left: "-55%",  dur: 140, del: -60,  scale: 1.5 },
  { top: "20%", left: "-75%",  dur: 100, del: -20,  scale: 1.0 },
];

const FEATURES = [
  {
    label: "SESSION MANAGER",
    title: "MULTI-AGENT\nCONTROL",
    body: "Launch and monitor multiple Claude Code and Codex sessions simultaneously. Every agent has its own terminal, timeline, and approval queue — unified in one control room.",
    stat: "12 AGENTS ACTIVE",
  },
  {
    label: "APPROVAL QUEUE",
    title: "HUMAN IN\nTHE LOOP",
    body: "Every destructive command surfaces for review before execution. Risk-rated in real time — critical, high, medium, low — so you stay in control without reading every log.",
    stat: "04 PENDING",
  },
  {
    label: "MEMORY PANEL",
    title: "PERSISTENT\nCONTEXT",
    body: "Agents remember what they've built. Memory files persist across sessions and surface in the UI so you know exactly what each agent carries into the next task.",
    stat: "08 MEMORY FILES",
  },
  {
    label: "TIMELINE VIEW",
    title: "FULL AUDIT\nTRAIL",
    body: "Every tool call, file write, and approval decision is logged with timestamps. Replay any session step-by-step to understand exactly what your agents did and why.",
    stat: "247 EVENTS LOGGED",
  },
  {
    label: "LIVE TERMINAL",
    title: "DIRECT\nCHANNEL",
    body: "A real terminal window for each agent, streaming output live. Send messages, interrupt tasks, or inject context mid-run without leaving the cockpit.",
    stat: "3ms LATENCY",
  },
  {
    label: "DIFF VIEWER",
    title: "CHANGE\nREVIEW",
    body: "Before any file is written, see the full diff inline — additions, deletions, context lines. Approve, reject, or edit before the agent commits the change.",
    stat: "14 FILES CHANGED",
  },
];

const SPRITES = [
  { name: "ASTRONAUT",  src: "/assets/faces/astronaut.png",    glow: "#58A6FF", state: "CODING",      del: "0s"   },
  { name: "NINJA",      src: "/assets/faces/ninja.png",        glow: "#A371F7", state: "PLANNING",    del: "0.3s" },
  { name: "ROBOT",      src: "/assets/faces/robot.png",        glow: "#E3B341", state: "TESTING",     del: "0.6s" },
  { name: "ALIEN",      src: "/assets/faces/alien.png",        glow: "#39D353", state: "READING",     del: "0.9s" },
  { name: "PIRATE",     src: "/assets/faces/pirate.png",       glow: "#6E7681", state: "IDLE",        del: "1.2s" },
  { name: "GHOST",      src: "/assets/faces/ghost.png",        glow: "#FF4444", state: "BLOCKED",     del: "1.5s" },
  { name: "HOLOGRAM",   src: "/assets/faces/hologram.png",     glow: "#2EA043", state: "DONE",        del: "1.8s" },
  { name: "CAVEMAN",    src: "/assets/faces/caveman.png",      glow: "#A371F7", state: "PLANNING",    del: "0.15s"},
  { name: "MED-WOMAN",  src: "/assets/faces/medicine-woman.png",glow:"#58A6FF", state: "CODING",      del: "0.45s"},
  { name: "MONKEY",     src: "/assets/faces/monkey.png",       glow: "#E3B341", state: "TESTING",     del: "0.75s"},
];

const HOW_STEPS = [
  {
    num: "01",
    title: "LAUNCH SESSION",
    body: "Run npx @agentcockpit/agent-cockpit in your project directory. The cockpit opens at localhost:54321, ready to spawn agents.",
  },
  {
    num: "02",
    title: "MONITOR & CHAT",
    body: "Watch every agent's terminal in real time. Send instructions, inspect the timeline, and review diffs from a single unified interface.",
  },
  {
    num: "03",
    title: "REVIEW & APPROVE",
    body: "Risky commands pause for your review. Approve, deny, or edit before execution. Full audit trail kept for every session.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────

function CockpitCorners() {
  return (
    <>
      <span className="cockpit-corner cockpit-corner-tl" aria-hidden="true" />
      <span className="cockpit-corner cockpit-corner-tr" aria-hidden="true" />
      <span className="cockpit-corner cockpit-corner-bl" aria-hidden="true" />
      <span className="cockpit-corner cockpit-corner-br" aria-hidden="true" />
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="site-nav">
        <a className="nav-logo cockpit-frame-full" href="#home" aria-label="Agent Cockpit home">
          <CockpitCorners />
          <span className="nav-logo-sub">MISSION CONTROL</span>
          <span className="nav-logo-name">AGENT COCKPIT</span>
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#roster">Agents</a>
          <a href="#how">How It Works</a>
          <a href="#install">Install</a>
          <Link href="/docs">Docs</Link>
        </div>

        <div className="nav-spacer" />

        <a
          className="nav-gh"
          href="https://github.com/agent-cockpit/agent-cockpit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={14} />
          GitHub
        </a>
        <a className="nav-cta" href="#install">LAUNCH ▶</a>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="hero-section" id="home" aria-label="Hero">
        {/* Pixel-art diorama scene */}
        <div className="start-scene" aria-hidden="true">
          <div className="scene-sky" />

          {/* Stars */}
          {STARS.map((s, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.s}px`,
                height: `${s.s}px`,
                ["--tw-dur" as string]: `${s.dur}s`,
                ["--tw-del" as string]: `${s.del}s`,
              }}
            />
          ))}

          {/* Pixel clouds */}
          {CLOUDS.map((c, i) => (
            <div
              key={i}
              className="cloud"
              style={{
                top: c.top,
                left: c.left,
                ["--cd-dur" as string]: `${c.dur}s`,
                ["--cd-del" as string]: `${c.del}s`,
                transform: `scale(${c.scale})`,
                transformOrigin: "left center",
              }}
            >
              <div className={`cloud-px${i >= 2 ? " cloud-px-lg" : ""}`} />
            </div>
          ))}

          {/* Hills */}
          <div className="scene-hills">
            <div className="hill hill-back" />
            <div className="hill hill-mid" />
            <div className="hill hill-front" />
          </div>

          {/* Perspective grid floor */}
          <div className="scene-floor" />

          {/* Mascot sprite */}
          <div className="scene-mascot">
            <Image
              src="/assets/faces/astronaut.png"
              alt="Agent Cockpit mascot"
              width={96}
              height={96}
              priority
            />
          </div>
        </div>

        {/* Scanlines & vignette */}
        <div className="hero-scanlines" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />

        {/* Content stage */}
        <div className="start-stage">
          <p className="hero-eyebrow">◈ MISSION CONTROL · GROUND CONTROL FOR AI AGENTS ◈</p>

          <h1 className="hero-title">
            AGENT<br />COCKPIT
          </h1>

          <p className="hero-subtitle">REAL-TIME COMMAND CENTER FOR AI AGENTS</p>

          <div className="hero-ctas">
            <a className="cta-launch" href="#install">
              ▶ LAUNCH MISSION
            </a>
            <a
              className="cockpit-btn"
              href="https://github.com/agent-cockpit/agent-cockpit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={12} />
              VIEW ON GITHUB
            </a>
            <Link className="cockpit-btn" href="/docs">
              VIEW DOCS →
            </Link>
          </div>

          <div className="hero-status">
            <span className="status-ping status-ping-active" />
            SYSTEMS NOMINAL · v0.1 · LOCAL-FIRST
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ────────────────────────────────────────────────── */}
      <section className="feat-section" id="features">
        <div className="inner">
          <p className="section-eyebrow">◈ FEATURE STATUS</p>
          <h2 className="section-headline">FULL-SPECTRUM AGENT OVERSIGHT</h2>

          <div className="feat-grid">
            {FEATURES.map((f) => (
              <div key={f.label} className="feat-card cockpit-frame-full">
                <CockpitCorners />
                <span className="feat-card-label">{f.label}</span>
                <h3 className="feat-card-title" style={{ whiteSpace: "pre-line" }}>{f.title}</h3>
                <p className="feat-card-body">{f.body}</p>
                <div className="data-chip">▸ {f.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROVAL DEMO ────────────────────────────────────────────────── */}
      <section className="approval-section" id="demo">
        <div className="inner">
          <p className="section-eyebrow">◈ APPROVAL QUEUE</p>
          <h2 className="section-headline">RISK-RATED COMMAND REVIEW</h2>

          <div className="demo-frame cockpit-frame-full">
            <CockpitCorners />

            {/* Topbar */}
            <div className="demo-topbar">
              <span className="demo-topbar-dot" />
              AGENT SESSION · wizardly-mclaren · /projects/monorepo
            </div>

            {/* Tabs */}
            <div className="demo-tabs">
              <button className="demo-tab active">
                APPROVALS <span className="demo-tab-badge">3</span>
              </button>
              <button className="demo-tab">TIMELINE</button>
              <button className="demo-tab">DIFF</button>
              <button className="demo-tab">TERMINAL</button>
            </div>

            {/* Cards */}
            <div className="demo-body">
              {/* Critical */}
              <div className="approval-card">
                <span className="risk-rail risk-rail-crit" />
                <div className="approval-card-body">
                  <span className="risk-badge risk-badge-crit">⬢ CRITICAL</span>
                  <div className="approval-cmd">
                    <span style={{ color: "var(--cyan)" }}>BASH</span>
                    {"  "}
                    <code>rm -rf .next node_modules && npm run build</code>
                  </div>
                  <p className="approval-desc">Deletes build artifacts and reinstalls all dependencies. Destructive, irreversible without re-install.</p>
                </div>
                <div className="approval-actions">
                  <button className="action-btn action-allow">ALLOW</button>
                  <button className="action-btn action-deny">DENY</button>
                  <button className="action-btn action-edit">EDIT</button>
                </div>
              </div>

              {/* Medium */}
              <div className="approval-card">
                <span className="risk-rail risk-rail-med" />
                <div className="approval-card-body">
                  <span className="risk-badge risk-badge-med">▲ MEDIUM</span>
                  <div className="approval-cmd">
                    <span style={{ color: "var(--cyan)" }}>WRITE</span>
                    {"  "}
                    <code>src/api/auth.ts</code>
                  </div>
                  <p className="approval-desc">Rewrites authentication handler. Updates token validation logic and session expiry behaviour.</p>
                </div>
                <div className="approval-actions">
                  <button className="action-btn action-allow">ALLOW</button>
                  <button className="action-btn action-deny">DENY</button>
                  <button className="action-btn action-edit">EDIT</button>
                </div>
              </div>

              {/* Low */}
              <div className="approval-card">
                <span className="risk-rail risk-rail-low" />
                <div className="approval-card-body">
                  <span className="risk-badge risk-badge-low">▼ LOW</span>
                  <div className="approval-cmd">
                    <span style={{ color: "var(--cyan)" }}>READ</span>
                    {"   "}
                    <code>package.json</code>
                  </div>
                  <p className="approval-desc">Reading project manifest to inspect current dependency versions before suggesting upgrades.</p>
                </div>
                <div className="approval-actions">
                  <button className="action-btn action-allow">ALLOW</button>
                  <button className="action-btn action-deny">DENY</button>
                  <button className="action-btn action-edit">EDIT</button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="demo-footer">
              <span className="ok">● LIVE</span>
              <span className="df-sep" />
              <span>WAITING FOR APPROVAL · 3 PENDING</span>
              <span className="df-sep" />
              <span>14ms</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPRITE GALLERY ───────────────────────────────────────────────── */}
      <section className="roster-section" id="roster">
        <div className="inner">
          <p className="section-eyebrow">◈ AGENT ROSTER</p>
          <h2 className="section-headline">MEET YOUR CREW</h2>

          <div className="sprite-strip">
            {SPRITES.map((sp) => (
              <div key={sp.name} className="sprite-cell">
                <div
                  className="sprite-frame cockpit-frame-full"
                  style={{ ["--sprite-glow" as string]: sp.glow }}
                >
                  <CockpitCorners />
                  <Image
                    src={sp.src}
                    alt={sp.name}
                    width={52}
                    height={52}
                    style={{
                      imageRendering: "pixelated",
                      filter: `drop-shadow(0 0 4px ${sp.glow})`,
                      animationDelay: sp.del,
                    }}
                  />
                </div>
                <span className="sprite-name">{sp.name}</span>
                <span
                  className="sprite-state-badge"
                  style={{ ["--sprite-glow" as string]: sp.glow }}
                >
                  {sp.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="how-section" id="how">
        <div className="inner">
          <p className="section-eyebrow">◈ MISSION BRIEFING</p>
          <h2 className="section-headline">THREE STEPS TO GROUND CONTROL</h2>

          <div className="how-grid">
            <div className="how-connector" aria-hidden="true" />
            {HOW_STEPS.map((step) => (
              <div key={step.num} className="how-step cockpit-frame-full">
                <CockpitCorners />
                <div className="how-step-num">STEP {step.num}</div>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTALL ──────────────────────────────────────────────────────── */}
      <section className="install-section" id="install">
        <div className="inner">
          <p className="section-eyebrow">◈ LAUNCH SEQUENCE</p>
          <h2 className="section-headline">GET AIRBORNE IN 60 SECONDS</h2>

          <div className="install-box cockpit-frame-full">
            <CockpitCorners />
            <div className="install-topbar">
              <span className="dot" />
              TERMINAL · BASH
            </div>
            <div className="install-body">
              <div className="install-group">
                <span className="install-lbl">PREREQUISITES</span>

                <div className="install-provider-row">Claude Code</div>
                <div className="install-os-row">
                  <span className="install-os-label">macOS / Linux</span>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <code>curl -fsSL https://claude.ai/install.sh | bash</code>
                    <CopyButton text="curl -fsSL https://claude.ai/install.sh | bash" />
                  </div>
                </div>
                <div className="install-os-row">
                  <span className="install-os-label">Windows</span>
                  <div className="code-line">
                    <span className="prompt">&gt;</span>
                    <code>irm https://claude.ai/install.ps1 | iex</code>
                    <CopyButton text="irm https://claude.ai/install.ps1 | iex" />
                  </div>
                </div>

                <div className="install-provider-row" style={{ marginTop: 8 }}>Codex (optional)</div>
                <div className="install-os-row">
                  <span className="install-os-label">All platforms</span>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <code>npm install -g @openai/codex</code>
                    <CopyButton text="npm install -g @openai/codex" />
                  </div>
                </div>
              </div>

              <div className="install-group">
                <span className="install-lbl">RUN AGENT COCKPIT</span>
                <div className="install-os-row">
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <code>npx @agentcockpit/agent-cockpit</code>
                    <CopyButton text="npx @agentcockpit/agent-cockpit" />
                  </div>
                </div>
              </div>

              <p className="install-note">
                Opens at{" "}
                <a href="http://localhost:54321">http://localhost:54321</a>.
                Requires <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js 22+</a>.
                <br />
                <Link href="/docs">→ Full installation guide</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-sub">MISSION CONTROL</div>
            <div className="footer-brand-name">AGENT COCKPIT</div>
            <p className="footer-brand-copy">
              A real-time command center for AI agents. Run multiple coding sessions with unified approvals, timeline, and local-first visibility.
            </p>
          </div>

          <div>
            <div className="footer-col-heading">PRODUCT</div>
            <nav className="footer-links">
              <a href="#features">Features</a>
              <a href="#demo">Live Demo</a>
              <a href="#roster">Agent Roster</a>
              <a href="#install">Install</a>
            </nav>
          </div>

          <div>
            <div className="footer-col-heading">RESOURCES</div>
            <nav className="footer-links">
              <Link href="/docs">Documentation</Link>
              <a href="https://github.com/agent-cockpit/agent-cockpit" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://github.com/agent-cockpit/agent-cockpit/releases" target="_blank" rel="noopener noreferrer">Changelog</a>
              <a href="https://github.com/agent-cockpit/agent-cockpit/issues" target="_blank" rel="noopener noreferrer">Issues</a>
            </nav>
          </div>

          <div>
            <div className="footer-col-heading">PROVIDERS</div>
            <nav className="footer-links">
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude Code</a>
              <a href="https://openai.com/codex" target="_blank" rel="noopener noreferrer">OpenAI Codex</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} AGENT COCKPIT · OPEN SOURCE · MIT LICENSE
          </span>
          <span className="footer-copy">
            LOCAL-FIRST · NO TELEMETRY · NO CLOUD
          </span>
        </div>
      </footer>
    </>
  );
}
