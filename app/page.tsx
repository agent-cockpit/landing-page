import Link from "next/link";
import Image from "next/image";
import CopyButton from "@/app/components/CopyButton";
import GithubIcon from "@/app/components/GithubIcon";

export default function HomePage() {
  return (
    <>
      <nav className="site-nav">
        <a className="nav-mark" href="#">AGENT&nbsp;COCKPIT</a>
        <div className="nav-links">
          <Link href="/docs">DOCS</Link>
          <a href="#features">FEATURES</a>
          <a href="#install">INSTALL</a>
          <a href="#roadmap">ROADMAP</a>
        </div>
        <div className="nav-spacer" />
        <a className="nav-gh" href="https://github.com/agent-cockpit/agent-cockpit" target="_blank" rel="noopener">
          <GithubIcon size={14} />
          GitHub
        </a>
        <a className="nav-cta" href="#install">GET STARTED</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot" />
              OPEN SOURCE · MIT LICENSE
            </div>
            <h1 className="hero-h1">
              The control room for your<br />
              <em>coding agents.</em>
            </h1>
            <p className="hero-sub">
              Run Claude Code and Codex sessions simultaneously. Review, chat, approve — without ever losing the map.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#install">GET STARTED ▶</a>
              <a className="btn-ghost" href="https://github.com/agent-cockpit/agent-cockpit" target="_blank" rel="noopener">★ Star on GitHub</a>
              <Link className="btn-ghost" href="/docs">DOCS →</Link>
            </div>
            <div className="hero-meta">
              <span><GithubIcon size={12} style={{ opacity: 0.5 }} /> <span className="v">MIT</span></span>
              <span>TypeScript <span className="v">React</span></span>
              <span>v<span className="v">0.1.0-alpha</span></span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hw" style={{ position: "relative", zIndex: 2 }}>
              <div className="hw-head">
                <div className="hw-face">
                  <Image src="/assets/faces/ninja.png" alt="" width={22} height={22} style={{ imageRendering: "pixelated" }} />
                </div>
                <div className="hw-title">
                  <div className="hw-name">wizardly-mclaren · agent-cockpit</div>
                  <div className="hw-path">/Users/leo/projects/agent-cockpit</div>
                </div>
                <span className="hw-badge">CLAUDE</span>
                <span className="hw-status"><span className="dot" />CODING</span>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, color: "var(--fg-3)", marginLeft: 8 }}>T+18:42</span>
                <div className="hw-btns">
                  <button className="hw-btn">—</button>
                  <button className="hw-btn">▢</button>
                  <button className="hw-btn">×</button>
                </div>
              </div>
              <div className="hw-tabs">
                <button className="hw-tab active">Approvals <span className="tc">3</span></button>
                <button className="hw-tab">Chat</button>
                <button className="hw-tab">Timeline</button>
                <button className="hw-tab">Diff</button>
              </div>
              <div className="hw-body">
                <div className="acard-mini">
                  <div className="acard-risk h">⬢</div>
                  <div className="acard-body">
                    <div className="acard-kind">SHELL · bash</div>
                    <div className="acard-desc">Run <code>rm -rf ./node_modules && pnpm install</code></div>
                  </div>
                  <div className="acard-actions">
                    <button className="acard-btn ok">ALLOW A</button>
                    <button className="acard-btn no">DENY D</button>
                  </div>
                </div>
                <div className="acard-mini">
                  <div className="acard-risk m">▲</div>
                  <div className="acard-body">
                    <div className="acard-kind">EDIT · str_replace</div>
                    <div className="acard-desc">Modify <code>MapSidebar.tsx</code> — expand chip grid</div>
                  </div>
                  <div className="acard-actions">
                    <button className="acard-btn ok">ALLOW A</button>
                    <button className="acard-btn no">DENY D</button>
                  </div>
                </div>
                <div className="acard-mini">
                  <div className="acard-risk l">●</div>
                  <div className="acard-body">
                    <div className="acard-kind">READ · fetch</div>
                    <div className="acard-desc">Fetch <code>docs.anthropic.com</code> (read-only)</div>
                  </div>
                  <div className="acard-actions">
                    <button className="acard-btn ok">ALLOW A</button>
                    <button className="acard-btn no">DENY D</button>
                  </div>
                </div>
              </div>
              <div className="hw-foot">
                <span className="ok">● CONNECTED</span>
                <span className="sep" />
                <span>24ms</span>
                <span className="sep" />
                <span>CTX 42%</span>
              </div>
            </div>

            <div className="hw2">
              <div className="hw-head" style={{ padding: "7px 10px 7px 12px" }}>
                <div className="hw-face" style={{ borderColor: "color-mix(in srgb,var(--codex) 50%,transparent)" }}>
                  <Image src="/assets/faces/robot.png" alt="" width={22} height={22} style={{ imageRendering: "pixelated" }} />
                </div>
                <div className="hw-title">
                  <div className="hw-name" style={{ fontSize: 10 }}>bouncing-lovelace · game-engine</div>
                </div>
                <span className="hw-badge" style={{ color: "var(--codex)", borderColor: "color-mix(in srgb,var(--codex) 40%,transparent)", background: "color-mix(in srgb,var(--codex) 12%,transparent)" }}>CODEX</span>
                <span className="hw-status" style={{ fontSize: 9 }}>
                  <span className="dot" style={{ background: "var(--amber)", boxShadow: "0 0 5px var(--amber)" }} />TESTING
                </span>
              </div>
              <div className="hw-body" style={{ padding: "10px 12px" }}>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--fg-3)", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--cyan)" }}>▶ TOOL</span>&nbsp; running pnpm test…<br />
                  <span style={{ color: "var(--fg-3)" }}>17 passed · </span><span style={{ color: "var(--amber)" }}>2 pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="features" style={{ background: "var(--bg-2)" }}>
        <div className="inner">
          <div className="section-label">
            <span className="tag">FEATURES</span>
            <span className="line" />
          </div>
          <h2 style={{ fontFamily: "var(--f-sans)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>Built for real multi-agent sessions.</h2>
          <p style={{ fontFamily: "var(--f-mono)", fontSize: 13, color: "var(--fg-2)", maxWidth: 540 }}>Everything a solo dev needs to run 10+ agents without losing the plot.</p>
          <div className="feat-grid">
            <div className="feat" style={{ "--feat-color": "var(--cyan)" } as React.CSSProperties}>
              <div className="feat-icon">⊞</div>
              <div className="feat-title">FLOATING INSTRUMENT WINDOWS</div>
              <div className="feat-body">Each agent lives in its own draggable, resizable window. Approvals, Chat, Diff, Timeline — all panels accessible without leaving the map.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--amber)" } as React.CSSProperties}>
              <div className="feat-icon">⚑</div>
              <div className="feat-title">RISK-FIRST APPROVAL QUEUE</div>
              <div className="feat-body">Every tool call is ranked: <code>HIGH</code> → <code>MED</code> → <code>LOW</code>. Keyboard shortcuts <code>A</code> / <code>D</code> / <code>E</code> let you clear a queue in seconds without lifting your hands.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--green)" } as React.CSSProperties}>
              <div className="feat-icon">⌘</div>
              <div className="feat-title">COMMAND PALETTE</div>
              <div className="feat-body"><code>⌘K</code> to jump to any agent, open any panel, launch a session, or approve pending items — all by keyboard.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--codex)" } as React.CSSProperties}>
              <div className="feat-icon">◈</div>
              <div className="feat-title">MULTI-PROVIDER</div>
              <div className="feat-body">Claude Code and Codex side-by-side. Each session carries a provider stripe so you always know which model is doing what.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--claude)" } as React.CSSProperties}>
              <div className="feat-icon">🗺</div>
              <div className="feat-title">RPG MAP + TACMAP</div>
              <div className="feat-body">Agents walk around a pixel office. The tacmap (top-right radar) shows every agent&apos;s position and status at a glance — approval balloons float above heads needing attention.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--cyan)" } as React.CSSProperties}>
              <div className="feat-icon">⚙</div>
              <div className="feat-title">DAEMON ARCHITECTURE</div>
              <div className="feat-body">A local Node daemon manages sessions. The browser UI connects via WebSocket — zero cloud, all local. Works on any machine you can <code>pnpm install</code> on.</div>
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
          <h2 style={{ fontFamily: "var(--f-sans)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>Three steps to mission control.</h2>
          <div className="how-grid">
            <div className="how-step">
              <div className="how-num">01</div>
              <div className="how-title">INSTALL & RUN DAEMON</div>
              <div className="how-body">Clone the repo, install deps, and start the local daemon. It manages session lifecycles and exposes a WebSocket endpoint.</div>
            </div>
            <div className="how-step">
              <div className="how-num" style={{ borderColor: "color-mix(in srgb,var(--codex) 50%,transparent)", background: "color-mix(in srgb,var(--codex) 10%,var(--bg-2))", color: "var(--codex)", boxShadow: "0 0 20px color-mix(in srgb,var(--codex) 20%,transparent)" }}>02</div>
              <div className="how-title">LAUNCH SESSIONS</div>
              <div className="how-body">Open the browser UI, hit <code style={{ color: "var(--cyan-hi)", background: "oklch(0.1 0.02 250)", padding: "1px 4px", fontSize: 11, fontFamily: "var(--f-mono)" }}>+ LAUNCH</code>, pick a provider and a workspace. Your agent spawns as a character on the map.</div>
            </div>
            <div className="how-step">
              <div className="how-num" style={{ borderColor: "color-mix(in srgb,var(--green) 50%,transparent)", background: "color-mix(in srgb,var(--green) 10%,var(--bg-2))", color: "var(--green)", boxShadow: "0 0 20px color-mix(in srgb,var(--green) 20%,transparent)" }}>03</div>
              <div className="how-title">REVIEW & APPROVE</div>
              <div className="how-body">When an agent needs permission, a balloon appears above its head. Click to open the approval queue, review the risk level, and approve or deny — all from the keyboard.</div>
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
          <h2 style={{ fontFamily: "var(--f-sans)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>Up in 3 commands.</h2>
          <div className="install-box">
            <div className="install-head">
              <span className="dot" />
              TERMINAL · BASH
            </div>
            <div className="install-body">
              <div className="install-group">
                <span className="install-label">1 · CLONE</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>git clone https://github.com/agent-cockpit/agent-cockpit.git</code>
                  <CopyButton text="git clone https://github.com/agent-cockpit/agent-cockpit.git" />
                </div>
              </div>
              <div className="install-group">
                <span className="install-label">2 · INSTALL</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>cd agent-cockpit && pnpm install</code>
                  <CopyButton text="cd agent-cockpit && pnpm install" />
                </div>
              </div>
              <div className="install-group">
                <span className="install-label">3 · LAUNCH</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>pnpm dev</code>
                  <CopyButton text="pnpm dev" />
                </div>
              </div>
              <p className="install-note">
                Opens at <a href="http://localhost:5173">http://localhost:5173</a>. Requires <a href="https://nodejs.org">Node 20+</a> and <a href="https://pnpm.io">pnpm</a>. Claude Code or Codex CLI must be installed and authenticated separately.<br />
                <Link href="/docs">→ Full getting started guide</Link>
              </p>
            </div>
          </div>
          <div className="prov-grid" style={{ marginTop: 40 }}>
            <div className="prov-card" data-prov="claude">
              <span className="prov-badge">CLAUDE</span>
              <div className="prov-title">Claude Code</div>
              <div className="prov-body">Anthropic&apos;s long-context, tool-using coding agent. Best for large refactors, multi-file edits, and anything requiring deep codebase understanding.</div>
            </div>
            <div className="prov-card" data-prov="codex">
              <span className="prov-badge">CODEX</span>
              <div className="prov-title">OpenAI Codex</div>
              <div className="prov-body">Fast, patch-focused agent. Strong for targeted fixes, test generation, and quick surgical edits where speed matters over context window.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="roadmap">
        <div className="inner">
          <div className="section-label">
            <span className="tag">ROADMAP</span>
            <span className="line" />
          </div>
          <h2 style={{ fontFamily: "var(--f-sans)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>Where this is going.</h2>
          <div className="roadmap">
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>PHASE 01–10</span><span className="rm-item"><b>Core: game map, agent sprites, WebSocket daemon, session launch/terminate</b></span><span className="rm-badge done">SHIPPED</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>PHASE 11–20</span><span className="rm-item"><b>Panels:</b> Chat, Timeline, Diff, Memory, Artifacts, Approval inbox, Provider badges</span><span className="rm-badge done">SHIPPED</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>PHASE 21–29</span><span className="rm-item"><b>Polish:</b> Sidebar session chips, history page, audio system, minimap, NPC pathfinding</span><span className="rm-badge done">SHIPPED</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>PHASE 30</span><span className="rm-item"><b>New map</b> — larger world, more biomes, workspace zones, ambient NPCs</span><span className="rm-badge wip">IN PROGRESS</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>PHASE 31</span><span className="rm-item"><b>Web UI redesign</b> — floating instrument windows, command palette, dense top bar</span><span className="rm-badge wip">IN PROGRESS</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>PHASE 32</span><span className="rm-item"><b>Multi-workspace grouping,</b> session compare, diff archive, export</span><span className="rm-badge next">NEXT</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>FUTURE</span><span className="rm-item">Remote daemon, team multiplayer map, agent-to-agent messaging, plugin API</span><span className="rm-badge next">PLANNED</span></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-mark">AGENT <span>COCKPIT</span> · MIT LICENSE · 2026</div>
        <div className="footer-links">
          <a href="https://github.com/agent-cockpit/agent-cockpit" target="_blank" rel="noopener">GitHub</a>
          <Link href="/docs">Docs</Link>
          <a href="#roadmap">Roadmap</a>
          <a href="https://github.com/agent-cockpit/agent-cockpit/issues" target="_blank" rel="noopener">Issues</a>
          <a href="https://github.com/agent-cockpit/agent-cockpit/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">Contributing</a>
        </div>
        <div className="footer-right">Built with Claude 🤖</div>
      </footer>
    </>
  );
}
