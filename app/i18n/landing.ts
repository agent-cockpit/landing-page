export type LandingLocale = "en" | "pt-BR";

type NavLabels = {
  why: string;
  features: string;
  how: string;
  install: string;
  docs: string;
  runNow: string;
  language: string;
};

type LandingMessages = {
  nav: NavLabels;
  heroEyebrow: string;
  heroTitleTop: string;
  heroTitleEmphasis: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroCtaDocs: string;
  heroMeta: [string, string, string];
  mock: {
    status: string;
    tabApprovals: string;
    tabTimeline: string;
    tabDiff: string;
    card1Kind: string;
    card1Desc: string;
    card2Kind: string;
    card2Desc: string;
    allow: string;
    deny: string;
    footLive: string;
    footWaiting: string;
    codexStatus: string;
    codexTool: string;
    codexResult: string;
  };
  trustAriaLabel: string;
  trust: {
    chips: [string, string, string];
    github: string;
  };
  problem: {
    tag: string;
    title: string;
    lead: string;
    items: Array<{ title: string; copy: string }>;
  };
  features: {
    tag: string;
    title: string;
    lead: string;
    items: Array<{ title: string; body: string }>;
  };
  how: {
    tag: string;
    title: string;
    steps: Array<{ title: string; body: string }>;
  };
  install: {
    tag: string;
    title: string;
    lead: string;
    prerequisites: string;
    run: string;
    claude: string;
    codex: string;
    macLinux: string;
    windows: string;
    allOs: string;
    notePrefix: string;
    fullGuide: string;
  };
  finalCta: {
    kicker: string;
    title: string;
    primary: string;
    secondary: string;
  };
  footer: {
    mark: string;
    docs: string;
    install: string;
    features: string;
    issues: string;
  };
};

const en: LandingMessages = {
  nav: {
    why: "WHY",
    features: "FEATURES",
    how: "HOW",
    install: "INSTALL",
    docs: "DOCS",
    runNow: "RUN NOW",
    language: "PT-BR",
  },
  heroEyebrow: "LOCAL-FIRST · OPEN SOURCE · MULTI-AGENT",
  heroTitleTop: "Running many coding agents",
  heroTitleEmphasis: "shouldn't feel like losing control.",
  heroSub:
    "Agent Cockpit turns Claude Code and Codex sessions into one live control room. Approve risky actions, inspect diffs, and keep every session visible without switching tabs.",
  heroCtaPrimary: "RUN AGENT COCKPIT",
  heroCtaSecondary: "Star on GitHub",
  heroCtaDocs: "READ DOCS",
  heroMeta: ["MIT", "TypeScript + React", "Runs local on your machine"],
  mock: {
    status: "APPROVAL NEEDED",
    tabApprovals: "Approvals",
    tabTimeline: "Timeline",
    tabDiff: "Diff",
    card1Kind: "SHELL · bash",
    card1Desc: "Run",
    card2Kind: "EDIT · patch",
    card2Desc: "Modify auth/session.ts before merge",
    allow: "ALLOW A",
    deny: "DENY D",
    footLive: "LIVE",
    footWaiting: "2 agents waiting",
    codexStatus: "RUNNING TESTS",
    codexTool: "pnpm test --filter api-gateway",
    codexResult: "21 passed · 1 pending",
  },
  trustAriaLabel: "Trust signals",
  trust: {
    chips: [
      "Open source and MIT licensed",
      "Claude Code + Codex support",
      "Local daemon + SQLite event history",
    ],
    github: "See it on GitHub",
  },
  problem: {
    tag: "WHY THIS EXISTS",
    title: "Multi-agent coding breaks down fast without one control plane.",
    lead: "The problem is not model quality. It is operational visibility.",
    items: [
      {
        title: "Approval chaos",
        copy: "Risky shell and edit requests are scattered across terminals, so approvals become slow and inconsistent.",
      },
      {
        title: "No shared timeline",
        copy: "When a run fails, you lose time reconstructing what happened across sessions and providers.",
      },
      {
        title: "Context switching tax",
        copy: "Every extra window adds friction. The more agents you run, the less control you actually have.",
      },
    ],
  },
  features: {
    tag: "WHAT CHANGES",
    title: "One cockpit for approvals, history, and execution state.",
    lead: "Keep every session visible, actionable, and auditable in one place.",
    items: [
      {
        title: "UNIFIED APPROVALS",
        body: "Approve or deny requests from Claude Code and Codex from one queue with risk context.",
      },
      {
        title: "SESSION TIMELINE",
        body: "Replay what happened in order: tool calls, file edits, approvals, and completion events.",
      },
      {
        title: "MULTI-PROVIDER VIEW",
        body: "Run Claude Code and Codex side-by-side with normalized event handling and clear provider state.",
      },
      {
        title: "LOCAL-FIRST AUDIT",
        body: "Local Node daemon + SQLite history gives you a review trail without shipping project context to external services.",
      },
    ],
  },
  how: {
    tag: "HOW IT WORKS",
    title: "Three layers. One live control room.",
    steps: [
      {
        title: "PROVIDER LAYER",
        body: "Claude Code and Codex sessions emit events and approval requests through standard hooks.",
      },
      {
        title: "DAEMON LAYER",
        body: "A local Node daemon normalizes events, stores them in SQLite, and broadcasts state over WebSocket.",
      },
      {
        title: "BROWSER UI",
        body: "The React UI updates in real time so you can approve, inspect, and steer sessions without losing context.",
      },
    ],
  },
  install: {
    tag: "QUICK START",
    title: "From zero to running in a minute.",
    lead: "Install your agent CLIs once, then launch the cockpit locally.",
    prerequisites: "0 · PREREQUISITES",
    run: "1 · RUN",
    claude: "CLAUDE CODE",
    codex: "CODEX",
    macLinux: "Mac / Linux",
    windows: "Windows",
    allOs: "All OS",
    notePrefix: "Opens at",
    fullGuide: "Full getting started guide",
  },
  finalCta: {
    kicker: "READY TO RUN MULTI-AGENT WORK WITHOUT LOSING THE PLOT?",
    title: "Install Agent Cockpit and run your sessions from one command center.",
    primary: "RUN AGENT COCKPIT",
    secondary: "Star on GitHub",
  },
  footer: {
    mark: "AGENT COCKPIT · OPEN SOURCE · 2026",
    docs: "Docs",
    install: "Install",
    features: "Features",
    issues: "Issues",
  },
};

const ptBR: LandingMessages = {
  nav: {
    why: "POR QUE",
    features: "RECURSOS",
    how: "COMO",
    install: "INSTALAR",
    docs: "DOCS",
    runNow: "EXECUTAR",
    language: "EN",
  },
  heroEyebrow: "LOCAL-FIRST · CÓDIGO ABERTO · MULTI-AGENTE",
  heroTitleTop: "Rodar vários agentes de código",
  heroTitleEmphasis: "não deveria parecer perda de controle.",
  heroSub:
    "O Agent Cockpit transforma sessões do Claude Code e do Codex em uma única central ao vivo. Aprove ações arriscadas, revise diffs e mantenha todas as sessões visíveis sem trocar de aba.",
  heroCtaPrimary: "RODAR AGENT COCKPIT",
  heroCtaSecondary: "Dar estrela no GitHub",
  heroCtaDocs: "LER DOCS",
  heroMeta: ["MIT", "TypeScript + React", "Roda local na sua máquina"],
  mock: {
    status: "APROVAÇÃO NECESSÁRIA",
    tabApprovals: "Aprovações",
    tabTimeline: "Timeline",
    tabDiff: "Diff",
    card1Kind: "SHELL · bash",
    card1Desc: "Executar",
    card2Kind: "EDIT · patch",
    card2Desc: "Modificar auth/session.ts antes do merge",
    allow: "PERMITIR A",
    deny: "NEGAR D",
    footLive: "AO VIVO",
    footWaiting: "2 agentes aguardando",
    codexStatus: "RODANDO TESTES",
    codexTool: "pnpm test --filter api-gateway",
    codexResult: "21 aprovados · 1 pendente",
  },
  trustAriaLabel: "Sinais de confiança",
  trust: {
    chips: [
      "Open source com licença MIT",
      "Suporte a Claude Code + Codex",
      "Daemon local + histórico de eventos em SQLite",
    ],
    github: "Ver no GitHub",
  },
  problem: {
    tag: "POR QUE EXISTE",
    title: "Codar com vários agentes quebra rápido sem um plano de controle único.",
    lead: "O problema não é a qualidade do modelo. É visibilidade operacional.",
    items: [
      {
        title: "Caos de aprovações",
        copy: "Pedidos de shell e edição de risco ficam espalhados em vários terminais, e as aprovações ficam lentas e inconsistentes.",
      },
      {
        title: "Sem timeline compartilhada",
        copy: "Quando algo falha, você perde tempo reconstruindo o que aconteceu em sessões e provedores diferentes.",
      },
      {
        title: "Custo de trocar contexto",
        copy: "Cada janela extra aumenta a fricção. Quanto mais agentes você roda, menos controle você realmente tem.",
      },
    ],
  },
  features: {
    tag: "O QUE MUDA",
    title: "Um cockpit para aprovações, histórico e estado de execução.",
    lead: "Mantenha cada sessão visível, acionável e auditável em um único lugar.",
    items: [
      {
        title: "APROVAÇÕES UNIFICADAS",
        body: "Permita ou negue pedidos do Claude Code e do Codex em uma fila única com contexto de risco.",
      },
      {
        title: "TIMELINE DE SESSÃO",
        body: "Reveja o que aconteceu em ordem: ferramentas, edições de arquivo, aprovações e conclusão.",
      },
      {
        title: "VISÃO MULTI-PROVEDOR",
        body: "Rode Claude Code e Codex lado a lado com eventos normalizados e estado claro por provedor.",
      },
      {
        title: "AUDITORIA LOCAL-FIRST",
        body: "Daemon Node local + histórico em SQLite geram trilha de revisão sem enviar contexto do projeto para serviços externos.",
      },
    ],
  },
  how: {
    tag: "COMO FUNCIONA",
    title: "Três camadas. Uma central de controle ao vivo.",
    steps: [
      {
        title: "CAMADA DE PROVEDORES",
        body: "Sessões do Claude Code e Codex emitem eventos e aprovações usando integrações padrão.",
      },
      {
        title: "CAMADA DO DAEMON",
        body: "Um daemon Node local normaliza eventos, salva em SQLite e transmite o estado via WebSocket.",
      },
      {
        title: "INTERFACE WEB",
        body: "A UI React atualiza em tempo real para aprovar, inspecionar e direcionar sessões sem perder contexto.",
      },
    ],
  },
  install: {
    tag: "INÍCIO RÁPIDO",
    title: "Do zero até rodar em um minuto.",
    lead: "Instale seus CLIs de agente uma vez e depois abra o cockpit localmente.",
    prerequisites: "0 · PRÉ-REQUISITOS",
    run: "1 · EXECUTAR",
    claude: "CLAUDE CODE",
    codex: "CODEX",
    macLinux: "Mac / Linux",
    windows: "Windows",
    allOs: "Todos os SOs",
    notePrefix: "Abre em",
    fullGuide: "Guia completo de início",
  },
  finalCta: {
    kicker: "PRONTO PARA RODAR MULTI-AGENTE SEM PERDER O CONTROLE?",
    title: "Instale o Agent Cockpit e rode suas sessões em um único centro de comando.",
    primary: "RODAR AGENT COCKPIT",
    secondary: "Dar estrela no GitHub",
  },
  footer: {
    mark: "AGENT COCKPIT · OPEN SOURCE · 2026",
    docs: "Docs",
    install: "Instalar",
    features: "Recursos",
    issues: "Issues",
  },
};

export function getLandingMessages(locale: LandingLocale): LandingMessages {
  if (locale === "pt-BR") return ptBR;
  return en;
}
