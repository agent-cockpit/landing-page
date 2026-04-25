import Link from "next/link";
import Image from "next/image";
import CopyButton from "@/app/components/CopyButton";
import GithubIcon from "@/app/components/GithubIcon";
import GsapAnimations from "@/app/components/GsapAnimations";

export default function HomePage() {
  return (
    <>
      <GsapAnimations />

      <nav className="site-nav">
        <a className="nav-mark" href="#home">AGENT&nbsp;COCKPIT</a>
        <div className="nav-links">
          <a href="#problem">WHY</a>
          <a href="#features">FEATURES</a>
          <a href="#how">HOW</a>
          <a href="#install">INSTALL</a>
          <Link href="/docs">DOCS</Link>
        </div>
        <div className="nav-spacer" />
        <a
          className="nav-gh"
          href="https://github.com/agent-cockpit/agent-cockpit"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon size={14} />
          GitHub
        </a>
        <a className="nav-cta" href="#install">RUN NOW</a>
      </nav>

      <section className="hero hero-v2" id="home">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot" />
              LOCAL-FIRST · OPEN SOURCE · MULTI-AGENT
            </div>
            <h1 className="hero-h1">
              Running many coding agents<br />
              shouldn&apos;t feel like <em>losing control.</em>
            </h1>
            <p className="hero-sub">
              Agent Cockpit turns Claude Code and Codex sessions into one live control room.
              Approve risky actions, inspect diffs, and keep every session visible without switching tabs.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#install">RUN AGENT COCKPIT ▶</a>
              <a
                className="btn-ghost"
                href="https://github.com/agent-cockpit/agent-cockpit"
                target="_blank"
                rel="noopener"
              >
                ★ Star on GitHub
              </a>
              <Link className="btn-ghost" href="/docs">READ DOCS →</Link>
            </div>
            <div className="hero-meta">
              <span><GithubIcon size={12} style={{ opacity: 0.5 }} /> MIT</span>
              <span>TypeScript + React</span>
              <span>Runs local on your machine</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hw" style={{ position: "relative", zIndex: 2 }}>
              <span className="cockpit-corner cockpit-corner-tl" aria-hidden />
              <span className="cockpit-corner cockpit-corner-tr" aria-hidden />
              <span className="cockpit-corner cockpit-corner-bl" aria-hidden />
              <span className="cockpit-corner cockpit-corner-br" aria-hidden />
              <div className="hw-head">
                <div className="hw-face">
                  <Image src="/assets/faces/ninja.png" alt="" width={22} height={22} style={{ imageRendering: "pixelated" }} />
                </div>
                <div className="hw-title">
                  <div className="hw-name">wizardly-mclaren · monorepo-platform</div>
                  <div className="hw-path">/Users/leo/projects/monorepo-platform</div>
                </div>
                <span className="hw-badge">CLAUDE</span>
                <span className="hw-status"><span className="dot" />APPROVAL NEEDED</span>
              </div>
              <div className="hw-tabs">
                <button className="hw-tab active">Approvals <span className="tc">2</span></button>
                <button className="hw-tab">Timeline</button>
                <button className="hw-tab">Diff</button>
              </div>
              <div className="hw-body">
                <div className="acard-mini">
                  <div className="acard-risk h">⬢</div>
                  <div className="acard-body">
                    <div className="acard-kind">SHELL · bash</div>
                    <div className="acard-desc">Run <code>rm -rf .next && npm run build</code></div>
                  </div>
                  <div className="acard-actions">
                    <button className="acard-btn ok">ALLOW A</button>
                    <button className="acard-btn no">DENY D</button>
                  </div>
                </div>
                <div className="acard-mini">
                  <div className="acard-risk m">▲</div>
                  <div className="acard-body">
                    <div className="acard-kind">EDIT · patch</div>
                    <div className="acard-desc">Modify <code>auth/session.ts</code> before merge</div>
                  </div>
                  <div className="acard-actions">
                    <button className="acard-btn ok">ALLOW A</button>
                    <button className="acard-btn no">DENY D</button>
                  </div>
                </div>
              </div>
              <div className="hw-foot">
                <span className="ok">● LIVE</span>
                <span className="sep" />
                <span>2 agents waiting</span>
                <span className="sep" />
                <span>24ms</span>
              </div>
            </div>

            <div className="hw2">
              <span className="cockpit-corner cockpit-corner-tl" aria-hidden />
              <span className="cockpit-corner cockpit-corner-tr" aria-hidden />
              <span className="cockpit-corner cockpit-corner-bl" aria-hidden />
              <span className="cockpit-corner cockpit-corner-br" aria-hidden />
              <div className="hw-head" style={{ padding: "7px 10px 7px 12px" }}>
                <div className="hw-face" style={{ borderColor: "color-mix(in srgb,var(--codex) 50%,transparent)" }}>
                  <Image src="/assets/faces/robot.png" alt="" width={22} height={22} style={{ imageRendering: "pixelated" }} />
                </div>
                <div className="hw-title">
                  <div className="hw-name" style={{ fontSize: 10 }}>bouncing-lovelace · api-gateway</div>
                </div>
                <span
                  className="hw-badge"
                  style={{
                    color: "var(--codex)",
                    borderColor: "color-mix(in srgb,var(--codex) 40%,transparent)",
                    background: "color-mix(in srgb,var(--codex) 12%,transparent)",
                  }}
                >
                  CODEX
                </span>
                <span className="hw-status" style={{ fontSize: 9 }}>
                  <span className="dot" style={{ background: "var(--amber)", boxShadow: "0 0 5px var(--amber)" }} />RUNNING TESTS
                </span>
              </div>
              <div className="hw-body" style={{ padding: "10px 12px" }}>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--fg-3)", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--cyan)" }}>▶ TOOL</span> pnpm test --filter api-gateway<br />
                  <span style={{ color: "var(--fg-2)" }}>21 passed · 1 pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s trust" aria-label="Trust signals">
        <div className="inner trust-row">
          <div className="trust-chip">Open source and MIT licensed</div>
          <div className="trust-chip">Claude Code + Codex support</div>
          <div className="trust-chip">Local daemon + SQLite event history</div>
          <a
            className="trust-link"
            href="https://github.com/agent-cockpit/agent-cockpit"
            target="_blank"
            rel="noopener"
          >
            <GithubIcon size={14} /> See it on GitHub
          </a>
        </div>
      </section>

      <section className="s" id="problem">
        <div className="inner">
          <div className="section-label">
            <span className="tag">WHY THIS EXISTS</span>
            <span className="line" />
          </div>
          <h2 className="lp-h2">Multi-agent coding breaks down fast without one control plane.</h2>
          <p className="lp-lead">The problem is not model quality. It is operational visibility.</p>
          <div className="pain-grid">
            <article className="pain-card">
              <span className="pain-num">01</span>
              <h3 className="pain-title">Approval chaos</h3>
              <p className="pain-copy">Risky shell and edit requests are scattered across terminals, so approvals become slow and inconsistent.</p>
            </article>
            <article className="pain-card">
              <span className="pain-num">02</span>
              <h3 className="pain-title">No shared timeline</h3>
              <p className="pain-copy">When a run fails, you lose time reconstructing what happened across sessions and providers.</p>
            </article>
            <article className="pain-card">
              <span className="pain-num">03</span>
              <h3 className="pain-title">Context switching tax</h3>
              <p className="pain-copy">Every extra window adds friction. The more agents you run, the less control you actually have.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="s" id="features" style={{ background: "var(--bg-2)" }}>
        <div className="inner">
          <div className="section-label">
            <span className="tag">WHAT CHANGES</span>
            <span className="line" />
          </div>
          <h2 className="lp-h2">One cockpit for approvals, history, and execution state.</h2>
          <p className="lp-lead">Keep every session visible, actionable, and auditable in one place.</p>
          <div className="feat-grid">
            <div className="feat" style={{ "--feat-color": "var(--amber)" } as React.CSSProperties}>
              <span className="cockpit-corner cockpit-corner-tl" aria-hidden />
              <span className="cockpit-corner cockpit-corner-br" aria-hidden />
              <div className="feat-icon">⚑</div>
              <div className="feat-title">UNIFIED APPROVALS</div>
              <div className="feat-body">Approve or deny requests from Claude Code and Codex from one queue with risk context.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--cyan)" } as React.CSSProperties}>
              <span className="cockpit-corner cockpit-corner-tl" aria-hidden />
              <span className="cockpit-corner cockpit-corner-br" aria-hidden />
              <div className="feat-icon">◷</div>
              <div className="feat-title">SESSION TIMELINE</div>
              <div className="feat-body">Replay what happened in order: tool calls, file edits, approvals, and completion events.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--codex)" } as React.CSSProperties}>
              <span className="cockpit-corner cockpit-corner-tl" aria-hidden />
              <span className="cockpit-corner cockpit-corner-br" aria-hidden />
              <div className="feat-icon">◈</div>
              <div className="feat-title">MULTI-PROVIDER VIEW</div>
              <div className="feat-body">Run Claude Code and Codex side-by-side with normalized event handling and clear provider state.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--green)" } as React.CSSProperties}>
              <span className="cockpit-corner cockpit-corner-tl" aria-hidden />
              <span className="cockpit-corner cockpit-corner-br" aria-hidden />
              <div className="feat-icon">⊟</div>
              <div className="feat-title">LOCAL-FIRST AUDIT</div>
              <div className="feat-body">Local Node daemon + SQLite history gives you a review trail without shipping project context to external services.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="how">
        <div className="inner">
          <div className="section-label">
            <span className="tag">HOW IT WORKS</span>
            <span className="line" />
          </div>
          <h2 className="lp-h2">Three layers. One live control room.</h2>
          <div className="how-grid">
            <div className="how-step">
              <div className="how-num">01</div>
              <div className="how-title">PROVIDER LAYER</div>
              <div className="how-body">Claude Code and Codex sessions emit events and approval requests through standard hooks.</div>
            </div>
            <div className="how-step">
              <div className="how-num" style={{ borderColor: "color-mix(in srgb,var(--codex) 50%,transparent)", background: "color-mix(in srgb,var(--codex) 10%,var(--bg-2))", color: "var(--codex)", boxShadow: "0 0 20px color-mix(in srgb,var(--codex) 20%,transparent)" }}>02</div>
              <div className="how-title">DAEMON LAYER</div>
              <div className="how-body">A local Node daemon normalizes events, stores them in SQLite, and broadcasts state over WebSocket.</div>
            </div>
            <div className="how-step">
              <div className="how-num" style={{ borderColor: "color-mix(in srgb,var(--green) 50%,transparent)", background: "color-mix(in srgb,var(--green) 10%,var(--bg-2))", color: "var(--green)", boxShadow: "0 0 20px color-mix(in srgb,var(--green) 20%,transparent)" }}>03</div>
              <div className="how-title">BROWSER UI</div>
              <div className="how-body">The React UI updates in real time so you can approve, inspect, and steer sessions without losing context.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="install" style={{ background: "var(--bg-2)" }}>
        <div className="inner">
          <div className="section-label">
            <span className="tag">QUICK START</span>
            <span className="line" />
          </div>
          <h2 className="lp-h2">From zero to running in a minute.</h2>
          <p className="lp-lead">Install your agent CLIs once, then launch the cockpit locally.</p>
          <div className="install-box">
            <span className="cockpit-corner cockpit-corner-tl" aria-hidden />
            <span className="cockpit-corner cockpit-corner-tr" aria-hidden />
            <span className="cockpit-corner cockpit-corner-bl" aria-hidden />
            <span className="cockpit-corner cockpit-corner-br" aria-hidden />
            <div className="install-head">
              <span className="dot" />
              TERMINAL · BASH
            </div>
            <div className="install-body">
              <div className="install-group">
                <span className="install-label">0 · PREREQUISITES</span>
                <div className="install-provider-label">CLAUDE CODE</div>
                <div className="install-os-row">
                  <span className="install-os-label">Mac / Linux</span>
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
                <div className="install-provider-label" style={{ marginTop: 12 }}>CODEX</div>
                <div className="install-os-row">
                  <span className="install-os-label">All OS</span>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <code>npm install -g @openai/codex</code>
                    <CopyButton text="npm install -g @openai/codex" />
                  </div>
                </div>
              </div>

              <div className="install-group">
                <span className="install-label">1 · RUN</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>npx @agentcockpit/agent-cockpit</code>
                  <CopyButton text="npx @agentcockpit/agent-cockpit" />
                </div>
              </div>

              <p className="install-note">
                Opens at <a href="http://localhost:54321">http://localhost:54321</a>. Requires <a href="https://nodejs.org">Node 22+</a>.
                <br />
                <Link href="/docs">→ Full getting started guide</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s final-cta" id="cta">
        <div className="inner final-cta-box">
          <div>
            <p className="final-cta-kicker">READY TO RUN MULTI-AGENT WORK WITHOUT LOSING THE PLOT?</p>
            <h2 className="final-cta-title">Install Agent Cockpit and run your sessions from one command center.</h2>
          </div>
          <div className="final-cta-actions">
            <a className="btn-primary" href="#install">RUN AGENT COCKPIT ▶</a>
            <a
              className="btn-ghost"
              href="https://github.com/agent-cockpit/agent-cockpit"
              target="_blank"
              rel="noopener"
            >
              ★ Star on GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-mark">AGENT <span>COCKPIT</span> · OPEN SOURCE · 2026</div>
        <div className="footer-links">
          <a href="https://github.com/agent-cockpit/agent-cockpit" target="_blank" rel="noopener">GitHub</a>
          <Link href="/docs">Docs</Link>
          <a href="#install">Install</a>
          <a href="#features">Features</a>
          <a href="https://github.com/agent-cockpit/agent-cockpit/issues" target="_blank" rel="noopener">Issues</a>
        </div>
      </footer>
    </>
  );
}
