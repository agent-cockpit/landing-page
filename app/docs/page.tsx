"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import GithubIcon from "@/app/components/GithubIcon";

const PAGES = ["getting-started", "config", "sessions", "approvals", "providers", "shortcuts", "api", "contributing", "changelog"] as const;
type PageId = typeof PAGES[number];

const NAV: { section: string; items: { id: PageId; label: string; badge?: string }[] }[] = [
  { section: "Getting Started", items: [{ id: "getting-started", label: "Installation" }, { id: "config", label: "Configuration" }] },
  { section: "Core Concepts", items: [{ id: "sessions", label: "Session management" }, { id: "approvals", label: "Approval workflow" }, { id: "providers", label: "Provider guide" }] },
  { section: "Reference", items: [{ id: "shortcuts", label: "Keyboard shortcuts", badge: "REF" }, { id: "api", label: "API / Daemon" }] },
  { section: "Project", items: [{ id: "contributing", label: "Contributing" }, { id: "changelog", label: "Changelog / Roadmap" }] },
];

function Prev({ id, label, onClick }: { id: PageId; label: string; onClick: (id: PageId) => void }) {
  return (
    <button className="doc-nav-btn" onClick={() => onClick(id)}>
      <span className="dir">← PREV</span><span className="lbl">{label}</span>
    </button>
  );
}
function Next({ id, label, onClick }: { id: PageId; label: string; onClick: (id: PageId) => void }) {
  return (
    <button className="doc-nav-btn next" onClick={() => onClick(id)}>
      <span className="dir">NEXT →</span><span className="lbl">{label}</span>
    </button>
  );
}

export default function DocsPage() {
  const [current, setCurrent] = useState<PageId>("getting-started");
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cockpit.docs.page") as PageId | null;
    if (saved && PAGES.includes(saved)) setCurrent(saved);
  }, []);

  const navigate = (id: PageId) => {
    setCurrent(id);
    localStorage.setItem("cockpit.docs.page", id);
    contentRef.current?.scrollTo({ top: 0 });
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="topbar">
        <Link className="topbar-mark" href="/">AGENT COCKPIT</Link>
        <span className="topbar-sep" />
        <span className="topbar-title">DOCS</span>
        <span className="topbar-spacer" />
        <div className="topbar-links">
          <Link href="/">Home</Link>
          <button style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--fg-2)", padding: "5px 10px", background: "transparent", border: "1px solid transparent", cursor: "pointer", letterSpacing: ".06em", textTransform: "uppercase" }} onClick={() => navigate("shortcuts")}>Shortcuts</button>
          <a href="https://github.com/agent-cockpit/agent-cockpit/issues" target="_blank" rel="noopener">Issues</a>
        </div>
        <a className="topbar-gh" href="https://github.com/agent-cockpit/agent-cockpit" target="_blank" rel="noopener">
          <GithubIcon size={13} />
          GitHub
        </a>
      </header>

      <div className="shell">
        <nav className="sidebar" aria-label="Docs navigation">
          {NAV.map(({ section, items }) => (
            <div key={section} className="sidebar-section">
              <div className="sidebar-section-title">{section}</div>
              {items.map(({ id, label, badge }) => (
                <button
                  key={id}
                  className={`sidebar-link${current === id ? " active" : ""}`}
                  onClick={() => navigate(id)}
                >
                  {label}
                  {badge && <span className="badge">{badge}</span>}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <main className="content" ref={contentRef} id="content">

          {/* GETTING STARTED */}
          <article className={`doc-page${current === "getting-started" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>Getting Started</div>
            <h1 className="doc-h1">Installation</h1>
            <p className="doc-lead">Get Agent Cockpit running locally in under 5 minutes. You&apos;ll need a working Claude Code or Codex CLI installation — the Cockpit is the UI layer on top.</p>
            <h2 className="doc-h2">Prerequisites</h2>
            <p className="doc-p">Before you start:</p>
            <ul className="doc-ul">
              <li><strong>Node 22+</strong> — <code>node --version</code> should print v22 or above</li>
              <li><strong>pnpm 8+</strong> — install via <code>npm install -g pnpm</code></li>
              <li><strong>Claude Code CLI</strong> — installed and authenticated (see below)</li>
              <li>Or: <strong>Codex CLI</strong> — installed and authenticated (see below)</li>
            </ul>
            <h3 className="doc-h3">Install Claude Code</h3>
            <div className="code-block"><span className="cb-lang">MAC / LINUX</span><span className="c"># Shell installer</span>{"\n"}<span className="p">$</span> curl -fsSL https://claude.ai/install.sh | bash{"\n\n"}<span className="c"># Authenticate</span>{"\n"}<span className="p">$</span> claude auth login</div>
            <div className="code-block"><span className="cb-lang">WINDOWS</span><span className="c"># PowerShell installer</span>{"\n"}{">"} irm https://claude.ai/install.ps1 | iex{"\n\n"}<span className="c"># Authenticate</span>{"\n"}{">"} claude auth login</div>
            <h3 className="doc-h3">Install Codex <span style={{ fontWeight: 400, fontSize: 11, color: "var(--fg-3)", textTransform: "none", letterSpacing: 0 }}>optional</span></h3>
            <div className="code-block"><span className="cb-lang">ALL OS</span><span className="p">$</span> npm install -g @openai/codex{"\n\n"}<span className="c"># Set your API key</span>{"\n"}<span className="p">$</span> export OPENAI_API_KEY=sk-...{" "}<span className="c"># Mac / Linux</span>{"\n"}{">"} {`$env:OPENAI_API_KEY = "sk-..."`}{" "}<span className="c"># Windows PowerShell</span>{"\n\n"}<span className="p">$</span> codex --version</div>
            <div className="callout note">
              <div className="callout-title">NOTE</div>
              Agent Cockpit does not manage your API keys. Claude Code and Codex must be authenticated in your shell environment before launching sessions.
            </div>
            <h2 className="doc-h2">Clone and install</h2>
            <div className="code-block"><span className="cb-lang">BASH</span><span className="c"># Clone the repository</span>{"\n"}<span className="p">$</span> git clone https://github.com/agent-cockpit/agent-cockpit.git{"\n"}<span className="p">$</span> cd agent-cockpit{"\n\n"}<span className="c"># Install all workspace dependencies</span>{"\n"}<span className="p">$</span> pnpm install</div>
            <h2 className="doc-h2">Start the development server</h2>
            <p className="doc-p">You need two terminals — one for the daemon, one for the UI.</p>
            <div className="code-block"><span className="cb-lang">TERMINAL 1 — DAEMON</span><span className="c"># Listens on port 3002 (Claude Code hooks) and 3001 (WebSocket)</span>{"\n"}<span className="p">$</span> pnpm --filter @cockpit/daemon dev</div>
            <div className="code-block"><span className="cb-lang">TERMINAL 2 — UI</span><span className="c"># Vite dev server at http://localhost:5173</span>{"\n"}<span className="p">$</span> pnpm --filter @cockpit/ui dev</div>
            <p className="doc-p">Open <code>http://localhost:5173</code> in your browser. You&apos;ll land on the office map. No agents are running yet — hit <code>+ LAUNCH</code> in the top bar to create your first session.</p>
            <div className="callout tip">
              <div className="callout-title">TIP</div>
              Press <kbd>⌘K</kbd> from anywhere in the UI to open the command palette. It&apos;s the fastest way to launch sessions, jump between agents, and trigger approvals.
            </div>
            <h2 className="doc-h2">Project structure</h2>
            <div className="code-block"><span className="cb-lang">TREE</span>{"agent-cockpit/\n├── "}<span className="p">daemon/</span>{"        "}<span className="c"># Node.js session manager + WebSocket server</span>{"\n│   ├── src/\n│   └── package.json\n├── "}<span className="p">ui/</span>{"            "}<span className="c"># React + Vite browser app</span>{"\n│   ├── src/\n│   │   ├── components/\n│   │   ├── game/      "}<span className="c"># Canvas game engine</span>{"\n│   │   ├── pages/\n│   │   └── store/\n│   └── package.json\n└── pnpm-workspace.yaml"}</div>
            <div className="doc-nav-footer">
              <div />
              <Next id="config" label="Configuration" onClick={navigate} />
            </div>
          </article>

          {/* CONFIGURATION */}
          <article className={`doc-page${current === "config" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>Configuration</div>
            <h1 className="doc-h1">Configuration</h1>
            <p className="doc-lead">Agent Cockpit uses a <code>.env</code> file in <code>ui/</code> and an optional daemon config. All settings have sensible defaults.</p>
            <h2 className="doc-h2">UI environment variables</h2>
            <p className="doc-p">Create or edit <code>ui/.env</code>:</p>
            <div className="code-block"><span className="cb-lang">ENV</span><span className="c"># URL of the local daemon. Default: http://localhost:3000</span>{"\n"}<span className="k">VITE_DAEMON_URL</span>=<span className="s">http://localhost:3000</span>{"\n\n"}<span className="c"># WebSocket URL for live session events. Default: ws://localhost:3000</span>{"\n"}<span className="k">VITE_WS_URL</span>=<span className="s">ws://localhost:3000</span></div>
            <h2 className="doc-h2">Daemon environment variables</h2>
            <p className="doc-p">Create or edit <code>daemon/.env</code>:</p>
            <div className="code-block"><span className="cb-lang">ENV</span><span className="c"># Port for HTTP + WebSocket. Default: 3000</span>{"\n"}<span className="k">PORT</span>=<span className="s">3000</span>{"\n\n"}<span className="c"># Max concurrent sessions. Default: 20</span>{"\n"}<span className="k">MAX_SESSIONS</span>=<span className="s">20</span>{"\n\n"}<span className="c"># Working directory browsing root (for the BROWSE picker)</span>{"\n"}<span className="k">BROWSE_ROOT</span>=<span className="s">/Users/you</span></div>
            <h2 className="doc-h2">All config options</h2>
            <table className="doc-table">
              <thead><tr><th>KEY</th><th>DEFAULT</th><th>DESCRIPTION</th></tr></thead>
              <tbody>
                <tr><td><code>VITE_DAEMON_URL</code></td><td><code>http://localhost:3000</code></td><td>Daemon HTTP base URL used for REST calls</td></tr>
                <tr><td><code>VITE_WS_URL</code></td><td><code>ws://localhost:3000</code></td><td>WebSocket endpoint for event streaming</td></tr>
                <tr><td><code>PORT</code></td><td><code>3000</code></td><td>Daemon listen port</td></tr>
                <tr><td><code>MAX_SESSIONS</code></td><td><code>20</code></td><td>Hard cap on simultaneous live sessions</td></tr>
                <tr><td><code>BROWSE_ROOT</code></td><td><code>~</code></td><td>Root path for the workspace file browser</td></tr>
              </tbody>
            </table>
            <div className="doc-nav-footer">
              <Prev id="getting-started" label="Installation" onClick={navigate} />
              <Next id="sessions" label="Session management" onClick={navigate} />
            </div>
          </article>

          {/* SESSIONS */}
          <article className={`doc-page${current === "sessions" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>Session management</div>
            <h1 className="doc-h1">Session management</h1>
            <p className="doc-lead">A <strong>session</strong> is a single running agent process tied to a workspace directory and a provider. You can run many simultaneously.</p>
            <h2 className="doc-h2">Launching a session</h2>
            <p className="doc-p">Click <strong>+ LAUNCH</strong> in the top bar, or press <kbd>⌘K</kbd> and type &quot;launch&quot;. The launch modal asks for:</p>
            <ul className="doc-ul">
              <li><strong>Provider</strong> — <span className="prov cl">CLAUDE</span> or <span className="prov cx">CODEX</span></li>
              <li><strong>Workspace path</strong> — the directory the agent will work in. Use the BROWSE button to navigate your filesystem.</li>
              <li><strong>Pilot</strong> — which pixel character represents this session on the map. Pure cosmetic.</li>
            </ul>
            <h2 className="doc-h2">Session lifecycle</h2>
            <table className="doc-table">
              <thead><tr><th>STATE</th><th>INDICATOR</th><th>MEANING</th></tr></thead>
              <tbody>
                <tr><td><code>active</code></td><td><span className="status ok"><span className="dot" />green LED</span></td><td>Agent process running, accepting tasks</td></tr>
                <tr><td><code>waiting</code></td><td><span className="status warn"><span className="dot" />amber LED</span></td><td>Agent paused pending approval</td></tr>
                <tr><td><code>error</code></td><td><span className="status err"><span className="dot" />red LED</span></td><td>Process crashed or rejected credentials</td></tr>
                <tr><td><code>ended</code></td><td>grey LED</td><td>Task completed or manually terminated</td></tr>
              </tbody>
            </table>
            <h2 className="doc-h2">Terminating a session</h2>
            <p className="doc-p">Open the session&apos;s instrument window and click <strong>TERMINATE</strong> in the header, or use the right-click context menu on the agent&apos;s chip in the top bar. Termination sends a <code>SIGTERM</code> to the agent process and marks the session as <code>ended</code>.</p>
            <div className="callout warn">
              <div className="callout-title">WARNING</div>
              Terminating a session that has an active file write in progress may leave files in a partial state. Check the Diff panel before terminating.
            </div>
            <h2 className="doc-h2">Session history</h2>
            <p className="doc-p">All sessions (live and ended) appear in the <strong>Session Archive</strong>. Open it via <kbd>⌘K</kbd> → &quot;archive&quot; or the HISTORY button in the top bar. From here you can:</p>
            <ul className="doc-ul">
              <li>Filter by provider, status, workspace, or date</li>
              <li>Resume a session if the process is still alive</li>
              <li>View the read-only timeline and diff for ended sessions</li>
              <li>Export session data as JSON (<kbd>⌘E</kbd>)</li>
            </ul>
            <div className="doc-nav-footer">
              <Prev id="config" label="Configuration" onClick={navigate} />
              <Next id="approvals" label="Approval workflow" onClick={navigate} />
            </div>
          </article>

          {/* APPROVALS */}
          <article className={`doc-page${current === "approvals" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>Approval workflow</div>
            <h1 className="doc-h1">Approval workflow</h1>
            <p className="doc-lead">When an agent wants to run a shell command, write a file, or make a network request, it must ask for permission. Agent Cockpit surfaces these requests as <strong>approval cards</strong> sorted by risk.</p>
            <h2 className="doc-h2">Risk levels</h2>
            <table className="doc-table">
              <thead><tr><th>LEVEL</th><th>COLOUR</th><th>EXAMPLE OPERATIONS</th></tr></thead>
              <tbody>
                <tr><td><code>HIGH</code></td><td style={{ color: "var(--red)" }}>● Red</td><td>Shell commands, <code>rm</code>, <code>chmod</code>, network writes, credential access</td></tr>
                <tr><td><code>MED</code></td><td style={{ color: "var(--amber)" }}>● Amber</td><td>File edits, dependency installs, git commits</td></tr>
                <tr><td><code>LOW</code></td><td style={{ color: "var(--green)" }}>● Green</td><td>Read operations, documentation fetches, local path lookups</td></tr>
              </tbody>
            </table>
            <h2 className="doc-h2">Reviewing an approval</h2>
            <p className="doc-p">When an agent requests approval, an amber balloon appears above its character on the map. Click the balloon or the session chip in the top bar to open the instrument window, which defaults to the <strong>Approvals</strong> tab.</p>
            <p className="doc-p">Each card shows:</p>
            <ul className="doc-ul">
              <li><strong>Risk rail</strong> — coloured left column (RED / AMBER / GREEN)</li>
              <li><strong>Tool kind</strong> — SHELL, EDIT, READ, FETCH, etc.</li>
              <li><strong>Description</strong> — what the agent wants to do, with inline code where relevant</li>
              <li><strong>Diff preview</strong> — for EDIT requests, shows the proposed change</li>
            </ul>
            <h2 className="doc-h2">Keyboard-first approvals</h2>
            <p className="doc-p">When the Approvals tab is focused you can act without touching the mouse:</p>
            <table className="kbd-table">
              <thead><tr><th>KEY</th><th>ACTION</th></tr></thead>
              <tbody>
                <tr><td><kbd>A</kbd></td><td>Allow the focused request and advance to next</td></tr>
                <tr><td><kbd>D</kbd></td><td>Deny the focused request and advance to next</td></tr>
                <tr><td><kbd>E</kbd></td><td>Open the Edit dialog to modify the request before allowing</td></tr>
                <tr><td><kbd>↓</kbd> / <kbd>↑</kbd></td><td>Navigate between pending requests</td></tr>
                <tr><td><kbd>A</kbd><kbd>A</kbd></td><td>Allow all LOW-risk items in the queue at once</td></tr>
              </tbody>
            </table>
            <div className="callout tip">
              <div className="callout-title">PRO TIP</div>
              During a long session, keep the Approvals tab open in a pinned window. The amber glow on the window header pulses when new items land — you&apos;ll catch them peripherally without interrupting your focus.
            </div>
            <div className="doc-nav-footer">
              <Prev id="sessions" label="Session management" onClick={navigate} />
              <Next id="providers" label="Provider guide" onClick={navigate} />
            </div>
          </article>

          {/* PROVIDERS */}
          <article className={`doc-page${current === "providers" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>Provider guide</div>
            <h1 className="doc-h1">Provider guide</h1>
            <p className="doc-lead">Agent Cockpit supports two providers today. Each has different strengths — you can run both simultaneously in the same session list.</p>
            <h2 className="doc-h2"><span className="prov cl">CLAUDE</span> — Claude Code</h2>
            <p className="doc-p">Anthropic&apos;s Claude Code agent. Strong for large, context-heavy tasks: multi-file refactors, understanding legacy codebases, writing architecture docs alongside code, and anything where a long conversation thread helps.</p>
            <h3 className="doc-h3">Setup</h3>
            <div className="code-block"><span className="cb-lang">MAC / LINUX</span><span className="c"># Shell installer</span>{"\n"}<span className="p">$</span> curl -fsSL https://claude.ai/install.sh | bash{"\n\n"}<span className="c"># Authenticate (opens browser)</span>{"\n"}<span className="p">$</span> claude auth login{"\n\n"}<span className="c"># Verify</span>{"\n"}<span className="p">$</span> claude --version</div>
            <div className="code-block"><span className="cb-lang">WINDOWS</span><span className="c"># PowerShell installer</span>{"\n"}{">"} irm https://claude.ai/install.ps1 | iex{"\n\n"}<span className="c"># Authenticate (opens browser)</span>{"\n"}{">"} claude auth login{"\n\n"}<span className="c"># Verify</span>{"\n"}{">"} claude --version</div>
            <p className="doc-p">Claude Code sessions show an orange left-edge stripe <span style={{ display: "inline-block", width: 8, height: 14, background: "var(--claude)", verticalAlign: "middle", margin: "0 4px" }} /> in every chip and window.</p>
            <h2 className="doc-h2"><span className="prov cx">CODEX</span> — OpenAI Codex</h2>
            <p className="doc-p">OpenAI&apos;s Codex agent. Optimised for fast, surgical edits: targeted bug fixes, test generation, docstring writing, and cases where you want a quick patch without a long planning phase.</p>
            <h3 className="doc-h3">Setup</h3>
            <div className="code-block"><span className="cb-lang">BASH</span><span className="c"># Install Codex CLI</span>{"\n"}<span className="p">$</span> npm install -g @openai/codex{"\n\n"}<span className="c"># Set your API key</span>{"\n"}<span className="p">$</span> export OPENAI_API_KEY=sk-...{"\n\n"}<span className="c"># Verify</span>{"\n"}<span className="p">$</span> codex --version</div>
            <p className="doc-p">Codex sessions show a purple left-edge stripe <span style={{ display: "inline-block", width: 8, height: 14, background: "var(--codex)", verticalAlign: "middle", margin: "0 4px" }} /> in every chip and window.</p>
            <h2 className="doc-h2">Choosing between providers</h2>
            <table className="doc-table">
              <thead><tr><th>TASK</th><th>RECOMMENDED</th></tr></thead>
              <tbody>
                <tr><td>Large multi-file refactor</td><td><span className="prov cl">CLAUDE</span></td></tr>
                <tr><td>Fix a specific failing test</td><td><span className="prov cx">CODEX</span></td></tr>
                <tr><td>Write architecture documentation</td><td><span className="prov cl">CLAUDE</span></td></tr>
                <tr><td>Generate JSDoc for a module</td><td><span className="prov cx">CODEX</span></td></tr>
                <tr><td>Explore and understand a new codebase</td><td><span className="prov cl">CLAUDE</span></td></tr>
                <tr><td>Apply a mechanical rename across files</td><td><span className="prov cx">CODEX</span></td></tr>
                <tr><td>Debug a complex race condition</td><td><span className="prov cl">CLAUDE</span></td></tr>
              </tbody>
            </table>
            <div className="doc-nav-footer">
              <Prev id="approvals" label="Approval workflow" onClick={navigate} />
              <Next id="shortcuts" label="Keyboard shortcuts" onClick={navigate} />
            </div>
          </article>

          {/* SHORTCUTS */}
          <article className={`doc-page${current === "shortcuts" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>Keyboard shortcuts</div>
            <h1 className="doc-h1">Keyboard shortcuts</h1>
            <p className="doc-lead">Agent Cockpit is designed to be keyboard-first. Every critical action has a shortcut so you can manage 10+ agents without touching the mouse.</p>
            <h2 className="doc-h2">Global</h2>
            <table className="kbd-table">
              <thead><tr><th>SHORTCUT</th><th>ACTION</th></tr></thead>
              <tbody>
                <tr><td><kbd>⌘K</kbd></td><td>Open command palette — jump to any agent, panel, or action</td></tr>
                <tr><td><kbd>Esc</kbd></td><td>Close top-most overlay. Never closes the map.</td></tr>
                <tr><td><kbd>⌥1</kbd>–<kbd>⌥9</kbd></td><td>Focus the nth open instrument window</td></tr>
                <tr><td><kbd>⌘M</kbd></td><td>Minimize focused window to taskbar</td></tr>
                <tr><td><kbd>⌘L</kbd></td><td>Open Launch Session modal</td></tr>
                <tr><td><kbd>⌘H</kbd></td><td>Open Session Archive / History</td></tr>
                <tr><td><kbd>⌘T</kbd></td><td>Toggle tacmap radar</td></tr>
              </tbody>
            </table>
            <h2 className="doc-h2">Instrument windows</h2>
            <table className="kbd-table">
              <thead><tr><th>SHORTCUT</th><th>ACTION</th></tr></thead>
              <tbody>
                <tr><td><kbd>⌥A</kbd></td><td>Switch focused window to Approvals tab</td></tr>
                <tr><td><kbd>⌥C</kbd></td><td>Switch focused window to Chat tab</td></tr>
                <tr><td><kbd>⌥T</kbd></td><td>Switch focused window to Timeline tab</td></tr>
                <tr><td><kbd>⌥D</kbd></td><td>Switch focused window to Diff tab</td></tr>
                <tr><td>Double-click header</td><td>Maximize / restore window</td></tr>
                <tr><td>Drag header</td><td>Reposition window</td></tr>
                <tr><td>Drag bottom-right corner</td><td>Resize window</td></tr>
              </tbody>
            </table>
            <h2 className="doc-h2">Approvals tab</h2>
            <table className="kbd-table">
              <thead><tr><th>SHORTCUT</th><th>ACTION</th></tr></thead>
              <tbody>
                <tr><td><kbd>A</kbd></td><td>Allow focused request, advance queue</td></tr>
                <tr><td><kbd>D</kbd></td><td>Deny focused request, advance queue</td></tr>
                <tr><td><kbd>E</kbd></td><td>Edit request before allowing</td></tr>
                <tr><td><kbd>↓</kbd> / <kbd>↑</kbd></td><td>Navigate pending requests</td></tr>
                <tr><td><kbd>A</kbd><kbd>A</kbd></td><td>Allow all LOW-risk items at once</td></tr>
              </tbody>
            </table>
            <h2 className="doc-h2">Game map</h2>
            <table className="kbd-table">
              <thead><tr><th>SHORTCUT</th><th>ACTION</th></tr></thead>
              <tbody>
                <tr><td><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / arrows</td><td>Move player character</td></tr>
                <tr><td><kbd>Shift</kbd> + move</td><td>Sprint</td></tr>
                <tr><td><kbd>E</kbd></td><td>Interact with nearest agent NPC</td></tr>
                <tr><td><kbd>Esc</kbd></td><td>Open game menu (when no overlay is open)</td></tr>
              </tbody>
            </table>
            <div className="doc-nav-footer">
              <Prev id="providers" label="Provider guide" onClick={navigate} />
              <Next id="api" label="API / Daemon" onClick={navigate} />
            </div>
          </article>

          {/* API */}
          <article className={`doc-page${current === "api" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>API / Daemon</div>
            <h1 className="doc-h1">API / Daemon reference</h1>
            <p className="doc-lead">The daemon exposes a REST API for session management and a WebSocket for real-time event streaming. All endpoints are local — nothing leaves your machine.</p>
            <h2 className="doc-h2">Base URL</h2>
            <div className="code-block"><span className="cb-lang">ENV</span>http://localhost:3000</div>
            <h2 className="doc-h2">REST endpoints</h2>
            <h3 className="doc-h3">Sessions</h3>
            <table className="doc-table">
              <thead><tr><th>METHOD</th><th>PATH</th><th>DESCRIPTION</th></tr></thead>
              <tbody>
                <tr><td><code>GET</code></td><td><code>/api/sessions</code></td><td>List all sessions (live + history)</td></tr>
                <tr><td><code>POST</code></td><td><code>/api/sessions</code></td><td>Launch a new session. Body: <code>{"{provider, workspacePath}"}</code></td></tr>
                <tr><td><code>DELETE</code></td><td><code>/api/sessions/:id</code></td><td>Terminate session by ID</td></tr>
                <tr><td><code>GET</code></td><td><code>/api/sessions/:id/events</code></td><td>Fetch event log for a session</td></tr>
              </tbody>
            </table>
            <h3 className="doc-h3">Approvals</h3>
            <table className="doc-table">
              <thead><tr><th>METHOD</th><th>PATH</th><th>DESCRIPTION</th></tr></thead>
              <tbody>
                <tr><td><code>GET</code></td><td><code>/api/approvals</code></td><td>List all pending approvals across sessions</td></tr>
                <tr><td><code>POST</code></td><td><code>/api/approvals/:id/allow</code></td><td>Allow a pending request</td></tr>
                <tr><td><code>POST</code></td><td><code>/api/approvals/:id/deny</code></td><td>Deny a pending request</td></tr>
                <tr><td><code>POST</code></td><td><code>/api/approvals/:id/edit</code></td><td>Allow with modified payload. Body: <code>{"{patch}"}</code></td></tr>
              </tbody>
            </table>
            <h3 className="doc-h3">Filesystem browser</h3>
            <table className="doc-table">
              <thead><tr><th>METHOD</th><th>PATH</th><th>DESCRIPTION</th></tr></thead>
              <tbody>
                <tr><td><code>GET</code></td><td><code>/api/browse?path=...</code></td><td>List subdirectories at path. Returns <code>{"{path, parent, entries}"}</code></td></tr>
              </tbody>
            </table>
            <h2 className="doc-h2">WebSocket events</h2>
            <p className="doc-p">Connect to <code>ws://localhost:3000</code>. The server streams JSON messages:</p>
            <div className="code-block"><span className="cb-lang">JSON</span><span className="c">{"// Session status update"}</span>{"\n"}{"{ "}<span className="s">&quot;type&quot;</span>{": "}<span className="s">&quot;session_update&quot;</span>{", "}<span className="s">&quot;sessionId&quot;</span>{": "}<span className="s">&quot;abc123&quot;</span>{", "}<span className="s">&quot;status&quot;</span>{": "}<span className="s">&quot;active&quot;</span>{" }\n\n"}<span className="c">{"// New approval request"}</span>{"\n"}{"{ "}<span className="s">&quot;type&quot;</span>{": "}<span className="s">&quot;approval_request&quot;</span>{", "}<span className="s">&quot;sessionId&quot;</span>{": "}<span className="s">&quot;abc123&quot;</span>{",\n  "}<span className="s">&quot;approvalId&quot;</span>{": "}<span className="s">&quot;req_456&quot;</span>{", "}<span className="s">&quot;risk&quot;</span>{": "}<span className="s">&quot;high&quot;</span>{", "}<span className="s">&quot;tool&quot;</span>{": "}<span className="s">&quot;bash&quot;</span>{" }"}</div>
            <div className="doc-nav-footer">
              <Prev id="shortcuts" label="Keyboard shortcuts" onClick={navigate} />
              <Next id="contributing" label="Contributing" onClick={navigate} />
            </div>
          </article>

          {/* CONTRIBUTING */}
          <article className={`doc-page${current === "contributing" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>Contributing</div>
            <h1 className="doc-h1">Contributing</h1>
            <p className="doc-lead">Agent Cockpit is MIT-licensed and welcomes contributions. Here&apos;s how to get involved without stepping on each other&apos;s toes.</p>
            <h2 className="doc-h2">Before you start</h2>
            <ul className="doc-ul">
              <li>Check the <a href="https://github.com/agent-cockpit/agent-cockpit/issues" style={{ color: "var(--cyan)" }}>open issues</a> — especially ones labelled <code>good first issue</code></li>
              <li>For significant changes, open an issue first to discuss the approach</li>
              <li>All PRs need passing tests: <code>pnpm test</code> from the repo root</li>
            </ul>
            <h2 className="doc-h2">Development workflow</h2>
            <div className="code-block"><span className="cb-lang">BASH</span><span className="c"># Fork and clone</span>{"\n"}<span className="p">$</span> git clone https://github.com/YOUR_FORK/agent-cockpit.git{"\n"}<span className="p">$</span> cd agent-cockpit && pnpm install{"\n\n"}<span className="c"># Create a branch</span>{"\n"}<span className="p">$</span> git checkout -b feat/your-feature{"\n\n"}<span className="c"># Start dev server</span>{"\n"}<span className="p">$</span> pnpm dev{"\n\n"}<span className="c"># Run tests (watch mode)</span>{"\n"}<span className="p">$</span> pnpm test --watch</div>
            <h2 className="doc-h2">Project conventions</h2>
            <ul className="doc-ul">
              <li><strong>TypeScript everywhere</strong> — no <code>any</code> unless absolutely necessary</li>
              <li><strong>Component files &lt; 300 lines</strong> — split if larger</li>
              <li><strong>Tailwind + CSS variables</strong> — use existing tokens, don&apos;t invent new colours</li>
              <li><strong>Radix UI for overlays</strong> — dialogs, dropdowns, and tooltips use Radix for accessibility</li>
              <li><strong>Redux Toolkit for state</strong> — all async side-effects go in thunks or middleware, not components</li>
              <li><strong>Canvas game engine is isolated</strong> — avoid importing game code into UI components</li>
            </ul>
            <h2 className="doc-h2">Commit style</h2>
            <div className="code-block"><span className="cb-lang">BASH</span>feat(ui): add floating instrument windows{"\n"}fix(daemon): handle SIGTERM on session terminate{"\n"}docs: add keyboard shortcuts reference{"\n"}refactor(game): extract NPC pathfinding into own module</div>
            <div className="callout tip">
              <div className="callout-title">TIP</div>
              Phases in commit messages (<code>Phase 30:</code>) are for internal tracking only. You don&apos;t need to use them in your PR.
            </div>
            <h2 className="doc-h2">Opening a PR</h2>
            <ol className="doc-ol">
              <li>Make sure <code>pnpm test</code> passes</li>
              <li>Add or update tests for new behaviour</li>
              <li>Write a clear PR description: what, why, and any screenshots for UI changes</li>
              <li>Reference any related issues with <code>Fixes #123</code></li>
            </ol>
            <div className="doc-nav-footer">
              <Prev id="api" label="API / Daemon" onClick={navigate} />
              <Next id="changelog" label="Changelog / Roadmap" onClick={navigate} />
            </div>
          </article>

          {/* CHANGELOG */}
          <article className={`doc-page${current === "changelog" ? " active" : ""}`}>
            <div className="doc-breadcrumb"><a onClick={() => navigate("getting-started")}>Docs</a><span className="sep">/</span>Changelog</div>
            <h1 className="doc-h1">Changelog / Roadmap</h1>
            <p className="doc-lead">What shipped, what&apos;s in progress, and what&apos;s coming next.</p>
            <h2 className="doc-h2">Released</h2>
            <div className="cl-entry">
              <div className="cl-version">
                <span className="cl-tag">v0.1.0-alpha</span>
                <span className="cl-date">April 2026</span>
                <span className="cl-badge ship">SHIPPED</span>
              </div>
              <ul className="doc-ul">
                <li>RPG office map with pixel-art characters (ninja, astronaut, robot, pirate, alien, ghost, hologram, caveman, monkey, medicine-woman)</li>
                <li>Game engine: tilemap renderer, NPC pathfinding + behavior, camera, collision map</li>
                <li>Daemon WebSocket bridge — real-time session events streamed to UI</li>
                <li>Session launch / terminate with Claude Code and Codex CLI</li>
                <li>Instrument panels: <strong>Approvals</strong>, <strong>Chat</strong>, <strong>Timeline</strong>, <strong>Diff</strong>, <strong>Memory</strong>, <strong>Artifacts</strong></li>
                <li>Approval risk levels (HIGH / MED / LOW) with keyboard A / D / E shortcuts</li>
                <li>Provider accent colours (Claude orange, Codex purple) on all UI surfaces</li>
                <li>Mini-map radar with live agent positions</li>
                <li>Session archive / history page with search and filters</li>
                <li>Audio system: ambient music, SFX for approvals, footsteps, UI events</li>
              </ul>
            </div>
            <h2 className="doc-h2">In progress</h2>
            <div className="cl-entry">
              <div className="cl-version">
                <span className="cl-tag">v0.2.0</span>
                <span className="cl-date">Q2 2026</span>
                <span className="cl-badge wip">IN PROGRESS</span>
              </div>
              <ul className="doc-ul">
                <li><strong>New map</strong> — larger world with biomes, workspace-specific zones, ambient NPCs</li>
                <li><strong>Web UI redesign</strong> — floating instrument windows, command palette (⌘K), dense top bar</li>
                <li>Taskbar for minimized agent windows</li>
                <li>Draggable + resizable instrument windows (multi-open)</li>
              </ul>
            </div>
            <h2 className="doc-h2">Planned</h2>
            <div className="cl-entry">
              <div className="cl-version">
                <span className="cl-tag">v0.3.0</span>
                <span className="cl-date">Q3 2026</span>
                <span className="cl-badge" style={{ color: "var(--fg-3)", border: "1px solid var(--border)" }}>PLANNED</span>
              </div>
              <ul className="doc-ul">
                <li>Multi-workspace grouping in session chips</li>
                <li>Session compare — diff two sessions&apos; output side-by-side</li>
                <li>Diff archive and export (<code>pnpm export-diffs</code>)</li>
                <li>Agent-to-agent messaging</li>
              </ul>
            </div>
            <div className="cl-entry">
              <div className="cl-version">
                <span className="cl-tag">v1.0.0</span>
                <span className="cl-date">TBD</span>
                <span className="cl-badge" style={{ color: "var(--fg-3)", border: "1px solid var(--border)" }}>FUTURE</span>
              </div>
              <ul className="doc-ul">
                <li>Remote daemon support (SSH tunnel or hosted)</li>
                <li>Team multiplayer map (multiple humans in the same office)</li>
                <li>Plugin API for custom panels and providers</li>
                <li>Gemini CLI and additional provider support</li>
              </ul>
            </div>
            <div className="doc-nav-footer">
              <Prev id="contributing" label="Contributing" onClick={navigate} />
              <div />
            </div>
          </article>

        </main>
      </div>
    </div>
  );
}
