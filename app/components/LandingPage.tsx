import Link from "next/link";
import Image from "next/image";
import CopyButton from "@/app/components/CopyButton";
import GithubIcon from "@/app/components/GithubIcon";
import GsapAnimations from "@/app/components/GsapAnimations";
import { getLandingMessages, type LandingLocale } from "@/app/i18n/landing";

type Props = {
  locale: LandingLocale;
};

const FEATURE_ICONS = ["⚑", "◷", "◈", "⊟"];
const FEATURE_COLORS = ["var(--amber)", "var(--cyan)", "var(--codex)", "var(--green)"];

function localeHref(locale: LandingLocale): string {
  if (locale === "pt-BR") return "/pt-br?lang=pt-BR";
  return "/?lang=en";
}

export default function LandingPage({ locale }: Props) {
  const t = getLandingMessages(locale);
  const switchLocale: LandingLocale = locale === "pt-BR" ? "en" : "pt-BR";
  const currentLocaleLabel = locale === "pt-BR" ? "PT-BR" : "EN";

  return (
    <>
      <GsapAnimations />

      <nav className="site-nav">
        <a className="nav-mark" href="#home">AGENT&nbsp;COCKPIT</a>
        <div className="nav-links">
          <a href="#problem">{t.nav.why}</a>
          <a href="#features">{t.nav.features}</a>
          <a href="#how">{t.nav.how}</a>
          <a href="#install">{t.nav.install}</a>
          <Link href="/docs">{t.nav.docs}</Link>
        </div>
        <div className="nav-spacer" />
        <Link className="nav-lang" href={localeHref(switchLocale)}>
          {currentLocaleLabel}
        </Link>
        <a
          className="nav-gh"
          href="https://github.com/agent-cockpit/agent-cockpit"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon size={14} />
          GitHub
        </a>
        <a className="nav-cta" href="#install">{t.nav.runNow}</a>
      </nav>

      <section className="hero hero-v2" id="home">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot" />
              {t.heroEyebrow}
            </div>
            <h1 className="hero-h1">
              {t.heroTitleTop}
              <br />
              <em>{t.heroTitleEmphasis}</em>
            </h1>
            <p className="hero-sub">{t.heroSub}</p>
            <div className="hero-actions">
              <a className="btn-primary" href="#install">{t.heroCtaPrimary} ▶</a>
              <a
                className="btn-ghost"
                href="https://github.com/agent-cockpit/agent-cockpit"
                target="_blank"
                rel="noopener"
              >
                ★ {t.heroCtaSecondary}
              </a>
              <Link className="btn-ghost" href="/docs">{t.heroCtaDocs} →</Link>
            </div>
            <div className="hero-meta">
              <span><GithubIcon size={12} style={{ opacity: 0.5 }} /> {t.heroMeta[0]}</span>
              <span>{t.heroMeta[1]}</span>
              <span>{t.heroMeta[2]}</span>
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
                <span className="hw-status"><span className="dot" />{t.mock.status}</span>
              </div>
              <div className="hw-tabs">
                <button className="hw-tab active">{t.mock.tabApprovals} <span className="tc">2</span></button>
                <button className="hw-tab">{t.mock.tabTimeline}</button>
                <button className="hw-tab">{t.mock.tabDiff}</button>
              </div>
              <div className="hw-body">
                <div className="acard-mini">
                  <div className="acard-risk h">⬢</div>
                  <div className="acard-body">
                    <div className="acard-kind">{t.mock.card1Kind}</div>
                    <div className="acard-desc">{t.mock.card1Desc} <code>rm -rf .next && npm run build</code></div>
                  </div>
                  <div className="acard-actions">
                    <button className="acard-btn ok">{t.mock.allow}</button>
                    <button className="acard-btn no">{t.mock.deny}</button>
                  </div>
                </div>
                <div className="acard-mini">
                  <div className="acard-risk m">▲</div>
                  <div className="acard-body">
                    <div className="acard-kind">{t.mock.card2Kind}</div>
                    <div className="acard-desc">{t.mock.card2Desc}</div>
                  </div>
                  <div className="acard-actions">
                    <button className="acard-btn ok">{t.mock.allow}</button>
                    <button className="acard-btn no">{t.mock.deny}</button>
                  </div>
                </div>
              </div>
              <div className="hw-foot">
                <span className="ok">● {t.mock.footLive}</span>
                <span className="sep" />
                <span>{t.mock.footWaiting}</span>
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
                  <span className="dot" style={{ background: "var(--amber)", boxShadow: "0 0 5px var(--amber)" }} />{t.mock.codexStatus}
                </span>
              </div>
              <div className="hw-body" style={{ padding: "10px 12px" }}>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 11, color: "var(--fg-3)", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--cyan)" }}>▶ TOOL</span> {t.mock.codexTool}
                  <br />
                  <span style={{ color: "var(--fg-2)" }}>{t.mock.codexResult}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s trust" aria-label={t.trustAriaLabel}>
        <div className="inner trust-row">
          {t.trust.chips.map((chip) => (
            <div key={chip} className="trust-chip">{chip}</div>
          ))}
          <a
            className="trust-link"
            href="https://github.com/agent-cockpit/agent-cockpit"
            target="_blank"
            rel="noopener"
          >
            <GithubIcon size={14} /> {t.trust.github}
          </a>
        </div>
      </section>

      <section className="s" id="problem">
        <div className="inner">
          <div className="section-label">
            <span className="tag">{t.problem.tag}</span>
            <span className="line" />
          </div>
          <h2 className="lp-h2">{t.problem.title}</h2>
          <p className="lp-lead">{t.problem.lead}</p>
          <div className="pain-grid">
            {t.problem.items.map((item, index) => (
              <article key={item.title} className="pain-card">
                <span className="pain-num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="pain-title">{item.title}</h3>
                <p className="pain-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="s" id="features" style={{ background: "var(--bg-2)" }}>
        <div className="inner">
          <div className="section-label">
            <span className="tag">{t.features.tag}</span>
            <span className="line" />
          </div>
          <h2 className="lp-h2">{t.features.title}</h2>
          <p className="lp-lead">{t.features.lead}</p>
          <div className="feat-grid">
            {t.features.items.map((item, index) => (
              <div key={item.title} className="feat" style={{ "--feat-color": FEATURE_COLORS[index] } as React.CSSProperties}>
                <span className="cockpit-corner cockpit-corner-tl" aria-hidden />
                <span className="cockpit-corner cockpit-corner-br" aria-hidden />
                <div className="feat-icon">{FEATURE_ICONS[index]}</div>
                <div className="feat-title">{item.title}</div>
                <div className="feat-body">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s" id="how">
        <div className="inner">
          <div className="section-label">
            <span className="tag">{t.how.tag}</span>
            <span className="line" />
          </div>
          <h2 className="lp-h2">{t.how.title}</h2>
          <div className="how-grid">
            {t.how.steps.map((step, index) => (
              <div key={step.title} className="how-step">
                <div
                  className="how-num"
                  style={
                    index === 1
                      ? {
                          borderColor: "color-mix(in srgb,var(--codex) 50%,transparent)",
                          background: "color-mix(in srgb,var(--codex) 10%,var(--bg-2))",
                          color: "var(--codex)",
                          boxShadow: "0 0 20px color-mix(in srgb,var(--codex) 20%,transparent)",
                        }
                      : index === 2
                        ? {
                            borderColor: "color-mix(in srgb,var(--green) 50%,transparent)",
                            background: "color-mix(in srgb,var(--green) 10%,var(--bg-2))",
                            color: "var(--green)",
                            boxShadow: "0 0 20px color-mix(in srgb,var(--green) 20%,transparent)",
                          }
                        : undefined
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="how-title">{step.title}</div>
                <div className="how-body">{step.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s" id="install" style={{ background: "var(--bg-2)" }}>
        <div className="inner">
          <div className="section-label">
            <span className="tag">{t.install.tag}</span>
            <span className="line" />
          </div>
          <h2 className="lp-h2">{t.install.title}</h2>
          <p className="lp-lead">{t.install.lead}</p>
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
                <span className="install-label">{t.install.prerequisites}</span>
                <div className="install-provider-label">{t.install.claude}</div>
                <div className="install-os-row">
                  <span className="install-os-label">{t.install.macLinux}</span>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <code>curl -fsSL https://claude.ai/install.sh | bash</code>
                    <CopyButton text="curl -fsSL https://claude.ai/install.sh | bash" />
                  </div>
                </div>
                <div className="install-os-row">
                  <span className="install-os-label">{t.install.windows}</span>
                  <div className="code-line">
                    <span className="prompt">&gt;</span>
                    <code>irm https://claude.ai/install.ps1 | iex</code>
                    <CopyButton text="irm https://claude.ai/install.ps1 | iex" />
                  </div>
                </div>
                <div className="install-provider-label" style={{ marginTop: 12 }}>{t.install.codex}</div>
                <div className="install-os-row">
                  <span className="install-os-label">{t.install.allOs}</span>
                  <div className="code-line">
                    <span className="prompt">$</span>
                    <code>npm install -g @openai/codex</code>
                    <CopyButton text="npm install -g @openai/codex" />
                  </div>
                </div>
              </div>

              <div className="install-group">
                <span className="install-label">{t.install.run}</span>
                <div className="code-line">
                  <span className="prompt">$</span>
                  <code>npx @agentcockpit/agent-cockpit</code>
                  <CopyButton text="npx @agentcockpit/agent-cockpit" />
                </div>
              </div>

              <p className="install-note">
                {t.install.notePrefix} <a href="http://localhost:54321">http://localhost:54321</a>. Requires <a href="https://nodejs.org">Node 22+</a>.
                <br />
                <Link href="/docs">→ {t.install.fullGuide}</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s final-cta" id="cta">
        <div className="inner final-cta-box">
          <div>
            <p className="final-cta-kicker">{t.finalCta.kicker}</p>
            <h2 className="final-cta-title">{t.finalCta.title}</h2>
          </div>
          <div className="final-cta-actions">
            <a className="btn-primary" href="#install">{t.finalCta.primary} ▶</a>
            <a
              className="btn-ghost"
              href="https://github.com/agent-cockpit/agent-cockpit"
              target="_blank"
              rel="noopener"
            >
              ★ {t.finalCta.secondary}
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-mark">{t.footer.mark}</div>
        <div className="footer-links">
          <a href="https://github.com/agent-cockpit/agent-cockpit" target="_blank" rel="noopener">GitHub</a>
          <Link href="/docs">{t.footer.docs}</Link>
          <a href="#install">{t.footer.install}</a>
          <a href="#features">{t.footer.features}</a>
          <a href="https://github.com/agent-cockpit/agent-cockpit/issues" target="_blank" rel="noopener">{t.footer.issues}</a>
        </div>
      </footer>
    </>
  );
}
