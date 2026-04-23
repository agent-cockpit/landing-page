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
        <div className="hero-bg" aria-hidden="true" />
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
              A local-first control room for multiple coding agents. Turn Claude Code and Codex sessions into something you can see, manage, approve, and review — with a pixel-art office on top and an operational control plane underneath.
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
              <div className="feat-icon">🗺</div>
              <div className="feat-title">OFFICE MODE</div>
              <div className="feat-body">Each active session appears as a character in a pixel-art office. Agent state reflects through animation and placement. Clicking an agent opens its full session view. Designed to feel like a game, not just a dashboard.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--amber)" } as React.CSSProperties}>
              <div className="feat-icon">⚑</div>
              <div className="feat-title">UNIFIED APPROVALS</div>
              <div className="feat-body">Approvals from Claude Code and Codex appear in one queue. Support for approve once, deny once, and always allow within a session. Risk context helps you make faster and safer decisions.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--green)" } as React.CSSProperties}>
              <div className="feat-icon">◷</div>
              <div className="feat-title">TIMELINE & REPLAY</div>
              <div className="feat-body">Events in chronological order. Inspect what happened during a session — approval events, tool calls, file changes, and completion events are all visible. Useful for debugging and understanding agent behavior.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--codex)" } as React.CSSProperties}>
              <div className="feat-icon">◈</div>
              <div className="feat-title">MULTI-PROVIDER</div>
              <div className="feat-body">Claude Code and Codex side-by-side. Each session carries a provider stripe so you always know which model is doing what. Normalized event handling across providers.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--claude)" } as React.CSSProperties}>
              <div className="feat-icon">⊟</div>
              <div className="feat-title">DIFF & ARTIFACT REVIEW</div>
              <div className="feat-body">See what files changed during a session. Inspect diffs per file, review session summaries, and audit agent output before you merge or accept it.</div>
            </div>
            <div className="feat" style={{ "--feat-color": "var(--cyan)" } as React.CSSProperties}>
              <div className="feat-icon">⊙</div>
              <div className="feat-title">MEMORY PANEL</div>
              <div className="feat-body">View and edit project memory. Keep persistent instructions and conventions in one place. Read and update knowledge that agents should remember across sessions.</div>
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
          <h2 style={{ fontFamily: "var(--f-sans)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>Three layers, one control room.</h2>
          <div className="how-grid">
            <div className="how-step">
              <div className="how-num">01</div>
              <div className="how-title">PROVIDER LAYER</div>
              <div className="how-body">Claude Code and Codex emit events and approvals through their native integration surfaces. No custom patches — standard tool hooks.</div>
            </div>
            <div className="how-step">
              <div className="how-num" style={{ borderColor: "color-mix(in srgb,var(--codex) 50%,transparent)", background: "color-mix(in srgb,var(--codex) 10%,var(--bg-2))", color: "var(--codex)", boxShadow: "0 0 20px color-mix(in srgb,var(--codex) 20%,transparent)" }}>02</div>
              <div className="how-title">DAEMON LAYER</div>
              <div className="how-body">A local Node daemon normalizes provider events, stores them in SQLite, and broadcasts live updates over WebSocket. Zero cloud, fully local.</div>
            </div>
            <div className="how-step">
              <div className="how-num" style={{ borderColor: "color-mix(in srgb,var(--green) 50%,transparent)", background: "color-mix(in srgb,var(--green) 10%,var(--bg-2))", color: "var(--green)", boxShadow: "0 0 20px color-mix(in srgb,var(--green) 20%,transparent)" }}>03</div>
              <div className="how-title">BROWSER UI</div>
              <div className="how-body">The React interface consumes live events and updates the office map, operational panels, and session detail views in real time. Approve, inspect, or redirect any session.</div>
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
          <h2 style={{ fontFamily: "var(--f-sans)", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-.02em", marginBottom: 6 }}>From zero to running.</h2>
          <div className="install-box">
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
                <span className="install-label">1 · CLONE</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>git clone https://github.com/agent-cockpit/agent-cockpit.git</code>
                  <CopyButton text="git clone https://github.com/agent-cockpit/agent-cockpit.git" />
                </div>
              </div>
              <div className="install-group">
                <span className="install-label">2 · INSTALL & BUILD</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>cd agent-cockpit && pnpm install && pnpm build</code>
                  <CopyButton text="cd agent-cockpit && pnpm install && pnpm build" />
                </div>
              </div>
              <div className="install-group">
                <span className="install-label">3 · START DAEMON</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>pnpm --filter @cockpit/daemon dev</code>
                  <CopyButton text="pnpm --filter @cockpit/daemon dev" />
                </div>
              </div>
              <div className="install-group">
                <span className="install-label">4 · START UI</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>pnpm --filter @cockpit/ui dev</code>
                  <CopyButton text="pnpm --filter @cockpit/ui dev" />
                </div>
              </div>
              <p className="install-note">
                UI opens at <a href="http://localhost:5173">http://localhost:5173</a>. Requires <a href="https://nodejs.org">Node 22+</a> and <a href="https://pnpm.io">pnpm</a>. Run daemon and UI in separate terminals.<br />
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
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>SHIPPED</span><span className="rm-item"><b>Office Mode:</b> pixel-art office, agent characters, session map, spatial navigation</span><span className="rm-badge done">DONE</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>SHIPPED</span><span className="rm-item"><b>Ops Mode:</b> session list, approval inbox, timeline, diff viewer, memory panel, history</span><span className="rm-badge done">DONE</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>SHIPPED</span><span className="rm-item"><b>Unified approvals</b> — approve once, deny once, always allow; risk context per request</span><span className="rm-badge done">DONE</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>IN PROGRESS</span><span className="rm-item"><b>Game polish</b> — more natural movement, state-driven NPC behavior, ambient audio</span><span className="rm-badge wip">IN PROGRESS</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>PLANNED</span><span className="rm-item"><b>Save & load</b> support, richer notifications, stronger search across session history</span><span className="rm-badge next">PLANNED</span></div>
            <div className="rm-row"><span className="rm-phase" style={{ fontFamily: "var(--f-px)", fontSize: 8 }}>PLANNED</span><span className="rm-item">Additional providers and session types beyond Claude Code and Codex</span><span className="rm-badge next">PLANNED</span></div>
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
      </footer>
    </>
  );
}
