// FORGRAPH v13
// Sistema acadêmico de análise de vínculos por grafos.
// Dados fictícios. Não usar para investigação real.

const TYPE_COLORS = {
  investigado: "#f8fafc",
  pessoa: "#8b5cf6",
  organizacao: "#38bdf8",
  financeiro: "#34d399",
  geografico: "#f59e0b",
  digital: "#ef4444",
  evento: "#f97316",
  documento: "#94a3b8",
  judicial: "#facc15"
};

const EDGE_COLORS = {
  familiar: "#a78bfa",
  profissional: "#38bdf8",
  societario: "#60a5fa",
  financeiro: "#34d399",
  geografico: "#f59e0b",
  digital: "#ef4444",
  comunicacao: "#fbbf24",
  propriedade: "#b45309",
  documental: "#94a3b8",
  judicial: "#facc15"
};

const TYPE_MULT = {
  familiar: 0.96,
  profissional: 1.00,
  societario: 1.05,
  financeiro: 1.14,
  geografico: 0.92,
  digital: 1.02,
  comunicacao: 1.04,
  propriedade: 1.00,
  documental: 0.98,
  judicial: 0.88
};

const DATA = {
  evidences: [
    { id: "EV-001", type: "cadastro", source: "Cadastro familiar simulado", collectedAt: "2026-03-02", confidence: 0.92, hash: "sha256:4f3a...sim" },
    { id: "EV-002", type: "contrato", source: "Contrato social fictício", collectedAt: "2026-03-08", confidence: 0.88, hash: "sha256:21ab...sim" },
    { id: "EV-003", type: "transacao", source: "Extrato sintético acadêmico", collectedAt: "2026-04-11", confidence: 0.84, hash: "sha256:988d...sim" },
    { id: "EV-004", type: "geocadastro", source: "Base patrimonial fictícia", collectedAt: "2026-04-14", confidence: 0.77, hash: "sha256:72aa...sim" },
    { id: "EV-005", type: "digital", source: "Cadastro digital simulado", collectedAt: "2026-04-18", confidence: 0.81, hash: "sha256:0f1e...sim" },
    { id: "EV-006", type: "judicial", source: "Registro judicial fictício", collectedAt: "2026-05-02", confidence: 0.69, hash: "sha256:455c...sim" },
    { id: "EV-007", type: "evento", source: "Evento transacional simulado", collectedAt: "2026-05-15", confidence: 0.74, hash: "sha256:ae10...sim" },
    { id: "EV-008", type: "comunicacao", source: "Metadados de comunicação simulados", collectedAt: "2026-05-22", confidence: 0.72, hash: "sha256:cd91...sim" }
  ],

  nodes: [
    { id: "INV-001", type: "investigado", label: "João Ribeiro", x: 520, y: 330, geo: [-19.478, -42.548], entityConfidence: 0.95, classification: "restrito", props: { cpf: "***.184.921-**", cidade: "Ipatinga/MG", ocupacao: "Empresário", risco: "alto", case_id: "CASO-2026-001" } },
    { id: "INV-002", type: "investigado", label: "Marcos Duarte", x: 185, y: 150, geo: [-19.463, -42.535], entityConfidence: 0.90, classification: "restrito", props: { cpf: "***.922.114-**", cidade: "Ipatinga/MG", ocupacao: "Consultor", risco: "médio", case_id: "CASO-2026-002" } },

    { id: "P-101", type: "pessoa", label: "Mariana Lopes", x: 350, y: 200, geo: [-19.480, -42.540], entityConfidence: 0.93, classification: "restrito", props: { relacao: "cônjuge", cpf: "***.552.770-**" } },
    { id: "P-102", type: "pessoa", label: "Carlos Ribeiro", x: 720, y: 180, geo: [-19.470, -42.565], entityConfidence: 0.87, classification: "restrito", props: { relacao: "irmão", cpf: "***.309.110-**" } },
    { id: "P-103", type: "pessoa", label: "Renato Farias", x: 300, y: 460, geo: [-19.487, -42.530], entityConfidence: 0.84, classification: "restrito", props: { relacao: "contador", cpf: "***.741.883-**" } },
    { id: "P-104", type: "pessoa", label: "Eduardo Pires", x: 760, y: 420, geo: [-19.492, -42.555], entityConfidence: 0.82, classification: "restrito", props: { relacao: "sócio", cpf: "***.618.210-**" } },

    { id: "O-201", type: "organizacao", label: "Orion Logística LTDA", x: 550, y: 125, geo: [-19.472, -42.538], entityConfidence: 0.91, classification: "interno", props: { cnpj: "**.184.221/0001-**", atividade: "Transporte e logística", situacao: "ativa" } },
    { id: "O-202", type: "organizacao", label: "Vale Forte Serviços ME", x: 650, y: 540, geo: [-19.496, -42.525], entityConfidence: 0.86, classification: "interno", props: { cnpj: "**.772.491/0001-**", atividade: "Prestação de serviços", situacao: "ativa" } },
    { id: "O-203", type: "organizacao", label: "Alfa Consultoria", x: 890, y: 310, geo: [-19.486, -42.575], entityConfidence: 0.76, classification: "interno", props: { cnpj: "**.302.884/0001-**", atividade: "Consultoria administrativa", situacao: "baixada" } },

    { id: "F-301", type: "financeiro", label: "Conta Banco Federal", x: 520, y: 520, geo: [-19.491, -42.548], entityConfidence: 0.88, classification: "restrito", props: { banco: "Banco Federal", agencia: "1842", conta: "****-91", natureza: "conta corrente" } },
    { id: "F-302", type: "financeiro", label: "Conta Empresarial Orion", x: 780, y: 80, geo: [-19.466, -42.545], entityConfidence: 0.86, classification: "restrito", props: { banco: "Banco União", agencia: "0921", conta: "****-37", natureza: "conta PJ" } },
    { id: "F-303", type: "financeiro", label: "Carteira Digital Fênix", x: 910, y: 500, geo: [-19.503, -42.559], entityConfidence: 0.73, classification: "restrito", props: { identificador: "wallet-***-8A2", natureza: "carteira digital" } },

    { id: "G-401", type: "geografico", label: "Apartamento Centro", x: 185, y: 350, geo: [-19.475, -42.551], entityConfidence: 0.79, classification: "interno", props: { endereco: "Rua Itatiaia, nº 184 - Centro", matricula: "50.482", uso: "residencial" } },
    { id: "G-402", type: "geografico", label: "Galpão Industrial", x: 920, y: 170, geo: [-19.469, -42.580], entityConfidence: 0.81, classification: "interno", props: { endereco: "Av. Industrial, nº 914", matricula: "72.104", uso: "comercial" } },

    { id: "D-501", type: "digital", label: "Telefone final 8842", x: 390, y: 620, geo: [-19.502, -42.541], entityConfidence: 0.78, classification: "restrito", props: { telefone: "(**) *****-8842", first_seen: "2025-11-10", last_seen: "2026-05-20" } },
    { id: "D-502", type: "digital", label: "E-mail empresarial", x: 470, y: 40, geo: [-19.462, -42.533], entityConfidence: 0.74, classification: "interno", props: { email: "contato.***@orionlog.com", first_seen: "2025-07-12", last_seen: "2026-04-28" } },
    { id: "D-503", type: "digital", label: "Dispositivo Android", x: 110, y: 530, geo: [-19.500, -42.520], entityConfidence: 0.68, classification: "restrito", props: { device: "Android fingerprint simulado", ip: "191.***.44.21" } },

    { id: "EVT-701", type: "evento", label: "Evento de pagamento", x: 655, y: 300, geo: [-19.485, -42.544], entityConfidence: 0.75, classification: "interno", props: { event_type: "pagamento", valor: "R$ 42.800,00", timestamp: "2026-04-10 14:22" } },
    { id: "DOC-801", type: "documento", label: "Contrato Social 2026", x: 610, y: 30, geo: [-19.458, -42.546], entityConfidence: 0.89, classification: "interno", props: { hash: "sha256:21ab...sim", tipo_documento: "contrato social", chain_of_custody_id: "CC-2026-010" } },
    { id: "J-601", type: "judicial", label: "Processo 8025/2026", x: 1020, y: 360, geo: [-19.490, -42.590], entityConfidence: 0.70, classification: "restrito", props: { orgao: "TJMG", status: "em análise", natureza: "ação cível simulada" } }
  ],

  edges: [
    edge("E01", "INV-001", "P-101", "familiar", false, "Vínculo de cônjuge em cadastro familiar simulado.", [8, 1, 8, 10, 9, 8, 6], ["EV-001"], "asserted", "2022-02-01", null, "2026-03-02"),
    edge("E02", "INV-001", "P-102", "familiar", false, "Vínculo de irmão.", [7, 1, 7, 10, 8, 7, 5], ["EV-001"], "asserted", "1990-01-01", null, "2026-03-02"),
    edge("E03", "INV-001", "P-103", "profissional", false, "Contador associado a movimentações empresariais simuladas.", [6, 3, 7, 7, 7, 6, 7], ["EV-002"], "asserted", "2024-02-12", null, "2026-03-09"),
    edge("E04", "INV-001", "O-201", "societario", false, "Sócio administrador da Orion Logística LTDA.", [8, 7, 9, 8, 9, 8, 9], ["EV-002", "DOC-801"], "asserted", "2023-06-18", null, "2026-03-08"),
    edge("E05", "P-104", "O-201", "societario", false, "Sócio minoritário da empresa.", [5, 5, 7, 7, 8, 5, 7], ["EV-002"], "asserted", "2023-06-18", null, "2026-03-08"),
    edge("E06", "P-103", "O-202", "profissional", false, "Responsável contábil da Vale Forte Serviços ME.", [5, 3, 6, 6, 7, 5, 5], ["EV-002"], "asserted", "2024-08-20", null, "2026-03-09"),

    edge("E07", "INV-001", "F-301", "financeiro", true, "Titularidade de conta corrente simulada.", [8, 6, 8, 8, 8, 7, 7], ["EV-003"], "asserted", "2025-01-10", null, "2026-04-11"),
    edge("E08", "F-301", "EVT-701", "financeiro", true, "Origem do evento de pagamento.", [8, 8, 10, 2, 8, 6, 7], ["EV-003", "EV-007"], "asserted", "2026-04-10", "2026-04-10", "2026-04-11"),
    edge("E09", "EVT-701", "O-201", "financeiro", true, "Destino do pagamento simulado de R$ 42.800,00.", [8, 8, 10, 2, 8, 7, 8], ["EV-003", "EV-007"], "asserted", "2026-04-10", "2026-04-10", "2026-04-11"),
    edge("E10", "O-201", "F-302", "financeiro", true, "Conta empresarial vinculada à Orion Logística.", [7, 6, 8, 8, 8, 7, 8], ["EV-003"], "asserted", "2025-05-04", null, "2026-04-12"),
    edge("E11", "F-302", "O-202", "financeiro", true, "Pagamento simulado por prestação de serviço.", [7, 7, 8, 3, 7, 6, 7], ["EV-003"], "asserted", "2026-04-18", "2026-04-18", "2026-04-19"),
    edge("E12", "O-202", "F-303", "financeiro", true, "Repasse simulado para carteira digital.", [6, 6, 8, 3, 6, 5, 6], ["EV-003"], "probable", "2026-04-20", "2026-04-20", "2026-04-21"),
    edge("E13", "F-303", "F-301", "financeiro", true, "Retorno simulado para conta corrente, formando ciclo financeiro.", [5, 5, 8, 2, 6, 5, 8], ["EV-003"], "probable", "2026-04-22", "2026-04-22", "2026-04-23"),

    edge("E14", "INV-001", "G-401", "geografico", false, "Imóvel residencial associado ao investigado.", [3, 6, 7, 8, 7, 6, 5], ["EV-004"], "asserted", "2024-11-01", null, "2026-04-14"),
    edge("E15", "O-201", "G-402", "geografico", false, "Endereço operacional da empresa.", [4, 6, 7, 7, 7, 6, 6], ["EV-004"], "asserted", "2025-02-01", null, "2026-04-14"),
    edge("E16", "INV-001", "D-501", "digital", false, "Telefone associado ao cadastro simulado.", [7, 1, 9, 7, 8, 6, 6], ["EV-005"], "asserted", "2025-11-10", null, "2026-04-18"),
    edge("E17", "O-201", "D-502", "digital", false, "E-mail institucional associado à empresa.", [5, 1, 7, 6, 7, 5, 4], ["EV-005"], "asserted", "2025-07-12", null, "2026-04-18"),
    edge("E18", "D-501", "D-503", "digital", false, "Uso recorrente de identificador digital simulado.", [6, 1, 9, 5, 6, 5, 5], ["EV-005"], "probable", "2026-03-01", null, "2026-05-01"),
    edge("E19", "INV-001", "J-601", "judicial", false, "Investigado citado em registro judicial fictício.", [2, 2, 6, 3, 6, 4, 4], ["EV-006"], "asserted", "2026-05-02", null, "2026-05-02"),
    edge("E20", "O-203", "J-601", "judicial", false, "Empresa citada no mesmo processo simulado.", [2, 2, 6, 3, 6, 4, 4], ["EV-006"], "asserted", "2026-05-02", null, "2026-05-02"),
    edge("E21", "O-203", "F-303", "financeiro", true, "Vínculo financeiro secundário simulado.", [4, 4, 5, 2, 5, 3, 5], ["EV-003"], "contested", "2026-04-27", "2026-04-27", "2026-04-28"),
    edge("E22", "P-102", "INV-002", "comunicacao", false, "Comunicação recorrente simulada entre atores.", [7, 1, 9, 4, 6, 4, 6], ["EV-008"], "probable", "2026-05-20", "2026-05-22", "2026-05-22"),
    edge("E23", "DOC-801", "O-201", "documental", true, "Documento comprova vínculo societário da empresa.", [1, 1, 7, 8, 9, 8, 5], ["EV-002"], "asserted", "2026-03-08", null, "2026-03-08"),
    edge("E24", "DOC-801", "INV-001", "documental", true, "Documento menciona o investigado como administrador.", [1, 1, 7, 8, 9, 8, 5], ["EV-002"], "asserted", "2026-03-08", null, "2026-03-08")
  ]
};

function edge(id, source, target, type, directed, description, comps, evidence, status, validFrom, validTo, recordedAt) {
  const [frequency, value, recency, duration, sourceConfidence, crossEvidence, structural] = comps;
  return { id, source, target, type, directed, description, components: { frequency, value, recency, duration, sourceConfidence, crossEvidence, structural }, evidence, status, validFrom, validTo, recordedAt };
}

let state = {
  target: "INV-001",
  view: "ego",
  selectedNode: null,
  selectedEdge: null,
  nodeFilters: new Set(Object.keys(TYPE_COLORS)),
  edgeFilters: new Set(Object.keys(EDGE_COLORS)),
  highlightedNodes: new Set(),
  highlightedEdges: new Set(),
  zoom: 1,
  pan: { x: 0, y: 0 },
  dragging: false,
  dragStart: null,
  presentation: false
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const svg = $("#graphSvg");
const nodeById = new Map(DATA.nodes.map(n => [n.id, n]));
const evidenceById = new Map(DATA.evidences.map(e => [e.id, e]));

function score(edge) {
  const c = edge.components;
  const raw =
    0.16 * c.frequency +
    0.14 * c.value +
    0.16 * c.recency +
    0.12 * c.duration +
    0.20 * c.sourceConfidence +
    0.12 * c.crossEvidence +
    0.10 * c.structural;
  const adjusted = raw * (TYPE_MULT[edge.type] || 1);
  return Math.max(1, Math.min(10, Math.round(adjusted)));
}

function cost(edge) {
  return 11 - score(edge);
}

function adjacency(nodesAllowed = null, edgesAllowed = null) {
  const adj = new Map();
  const allowed = nodesAllowed || new Set(DATA.nodes.map(n => n.id));
  for (const id of allowed) adj.set(id, []);

  for (const e of DATA.edges) {
    if (edgesAllowed && !edgesAllowed.has(e.id)) continue;
    if (!allowed.has(e.source) || !allowed.has(e.target)) continue;
    if (!state.edgeFilters.has(e.type)) continue;
    adj.get(e.source)?.push({ ...e, from: e.source, to: e.target });
    if (!e.directed) adj.get(e.target)?.push({ ...e, from: e.target, to: e.source, reverse: true });
  }
  return adj;
}

function egoNodes(center, depth = 2) {
  const seen = new Set([center]);
  const q = [{ id: center, level: 0 }];
  while (q.length) {
    const cur = q.shift();
    if (cur.level >= depth) continue;
    for (const item of adjacency().get(cur.id) || []) {
      if (!seen.has(item.to)) {
        seen.add(item.to);
        q.push({ id: item.to, level: cur.level + 1 });
      }
    }
  }
  return seen;
}

function visibleNodes() {
  let ids;
  if (state.view === "ego" || state.view === "timeline" || state.view === "matrix") {
    ids = egoNodes(state.target, 2);
  } else {
    ids = new Set(DATA.nodes.map(n => n.id));
  }

  const q = $("#searchInput").value.trim().toLowerCase();
  return DATA.nodes.filter(n => {
    if (!ids.has(n.id)) return false;
    if (!state.nodeFilters.has(n.type)) return false;
    if (!q) return true;
    const blob = `${n.id} ${n.label} ${n.type} ${Object.values(n.props || {}).join(" ")}`.toLowerCase();
    return blob.includes(q);
  });
}

function visibleEdges(nodes) {
  const ids = new Set(nodes.map(n => n.id));
  return DATA.edges.filter(e =>
    ids.has(e.source) &&
    ids.has(e.target) &&
    state.edgeFilters.has(e.type)
  );
}

function setup() {
  const targetSelect = $("#targetSelect");
  DATA.nodes
    .filter(n => n.type === "investigado")
    .forEach(n => {
      const opt = document.createElement("option");
      opt.value = n.id;
      opt.textContent = `${n.id} — ${n.label}`;
      targetSelect.appendChild(opt);
    });
  targetSelect.value = state.target;
  targetSelect.addEventListener("change", () => {
    state.target = targetSelect.value;
    clearHighlights();
    render();
    showNodeDetail(nodeById.get(state.target));
  });

  renderFilters();
  renderLegend();

  $("#searchInput").addEventListener("input", render);
  $("#btnReset").addEventListener("click", () => { state.zoom = 1; state.pan = { x: 0, y: 0 }; render(); });
  $("#zoomIn").addEventListener("click", () => { state.zoom = Math.min(1.8, state.zoom + .12); render(); });
  $("#zoomOut").addEventListener("click", () => { state.zoom = Math.max(.7, state.zoom - .12); render(); });
  $("#btnReport").addEventListener("click", generateReport);
  $("#btnPresentation").addEventListener("click", () => $("#presentationOverlay").classList.remove("hidden"));
  $("#closePresentation").addEventListener("click", () => $("#presentationOverlay").classList.add("hidden"));

  $$(".chip[data-view]").forEach(btn => btn.addEventListener("click", () => {
    $$(".chip[data-view]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.view = btn.dataset.view;
    clearHighlights();
    render();
  }));

  $$(".algo-grid button").forEach(btn => {
    btn.addEventListener("click", () => runAlgorithm(btn.dataset.algo));
  });

  setupPanZoom();
  showNodeDetail(nodeById.get(state.target));
  render();
}

function setupPanZoom() {
  svg.addEventListener("wheel", (ev) => {
    ev.preventDefault();
    const dir = ev.deltaY < 0 ? 1 : -1;
    state.zoom = Math.max(.7, Math.min(1.8, state.zoom + dir * .08));
    render();
  }, { passive: false });

  svg.addEventListener("mousedown", ev => {
    state.dragging = true;
    svg.style.cursor = "grabbing";
    state.dragStart = { x: ev.clientX - state.pan.x, y: ev.clientY - state.pan.y };
  });

  window.addEventListener("mousemove", ev => {
    if (!state.dragging) return;
    state.pan = { x: ev.clientX - state.dragStart.x, y: ev.clientY - state.dragStart.y };
    render();
  });

  window.addEventListener("mouseup", () => {
    state.dragging = false;
    svg.style.cursor = "grab";
  });
}

function renderFilters() {
  const nf = $("#nodeFilters");
  nf.innerHTML = "";
  Object.entries(TYPE_COLORS).forEach(([type, color]) => {
    const el = document.createElement("button");
    el.className = "filter";
    el.innerHTML = `<span class="dot" style="background:${color}"></span>${labelType(type)}`;
    el.addEventListener("click", () => {
      state.nodeFilters.has(type) ? state.nodeFilters.delete(type) : state.nodeFilters.add(type);
      el.classList.toggle("off", !state.nodeFilters.has(type));
      render();
    });
    nf.appendChild(el);
  });

  const ef = $("#edgeFilters");
  ef.innerHTML = "";
  Object.entries(EDGE_COLORS).forEach(([type, color]) => {
    const el = document.createElement("button");
    el.className = "filter";
    el.innerHTML = `<span class="dot" style="background:${color}"></span>${labelType(type)}`;
    el.addEventListener("click", () => {
      state.edgeFilters.has(type) ? state.edgeFilters.delete(type) : state.edgeFilters.add(type);
      el.classList.toggle("off", !state.edgeFilters.has(type));
      render();
    });
    ef.appendChild(el);
  });
}

function renderLegend() {
  $("#legend").innerHTML = Object.entries(EDGE_COLORS)
    .slice(0, 8)
    .map(([type, color]) => `<span class="legend-item"><span class="dot" style="background:${color}"></span>${labelType(type)}</span>`)
    .join("");
}

function render() {
  const nodes = visibleNodes();
  const edges = visibleEdges(nodes);

  $("#graphStage").classList.toggle("map-mode", state.view === "map");
  $("#timelineView").classList.toggle("hidden", state.view !== "timeline");
  $("#matrixView").classList.toggle("hidden", state.view !== "matrix");
  svg.classList.toggle("hidden", state.view === "timeline" || state.view === "matrix");

  const titles = {
    ego: ["Ego-net do alvo", "Nós em até 2 saltos, com vínculos e evidências"],
    timeline: ["Timeline do caso", "Arestas e eventos ordenados por data de registro"],
    matrix: ["Matriz de adjacência", "Visão tabular para subgrafo mais denso"],
    map: ["Mapa geoespacial fictício", "Distribuição espacial dos nós do caso"]
  };
  $("#viewTitle").textContent = titles[state.view][0];
  $("#viewSubtitle").textContent = titles[state.view][1];

  if (state.view === "timeline") {
    renderTimeline(nodes, edges);
    return;
  }
  if (state.view === "matrix") {
    renderMatrix(nodes, edges);
    return;
  }

  drawSvg(nodes, edges);
}

function drawSvg(nodes, edges) {
  svg.innerHTML = "";
  const w = svg.clientWidth || 900;
  const h = svg.clientHeight || 620;
  const g = createSvg("g", { transform: `translate(${state.pan.x + w/2 - 560*state.zoom}, ${state.pan.y + h/2 - 340*state.zoom}) scale(${state.zoom})` });
  svg.appendChild(g);

  const defs = createSvg("defs");
  defs.innerHTML = `
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="rgba(229,237,245,.65)"></path>
    </marker>
  `;
  svg.prepend(defs);

  const edgeGroup = createSvg("g", { class: "edges" });
  const nodeGroup = createSvg("g", { class: "nodes" });
  g.appendChild(edgeGroup);
  g.appendChild(nodeGroup);

  for (const e of edges) {
    const a = pos(nodeById.get(e.source));
    const b = pos(nodeById.get(e.target));
    const s = score(e);
    const midX = (a.x + b.x) / 2;
    const midY = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const curve = Math.max(-60, Math.min(60, (dx * 0.06) - (dy * 0.04)));
    const d = `M ${a.x} ${a.y} Q ${midX - curve} ${midY + curve} ${b.x} ${b.y}`;
    const cls = ["edge"];
    if (state.highlightedEdges.size && !state.highlightedEdges.has(e.id)) cls.push("dim");
    if (state.highlightedEdges.has(e.id)) cls.push("highlight");

    const path = createSvg("path", {
      class: cls.join(" "),
      d,
      stroke: EDGE_COLORS[e.type] || "#94a3b8",
      "stroke-width": 0.8 + s * 0.28,
      "stroke-dasharray": e.status === "probable" ? "6 6" : e.status === "contested" ? "2 6" : "",
      "marker-end": e.directed ? "url(#arrow)" : ""
    });
    path.addEventListener("click", (ev) => {
      ev.stopPropagation();
      showEdgeDetail(e);
    });
    edgeGroup.appendChild(path);

    if (state.highlightedEdges.has(e.id)) {
      const label = createSvg("text", { class: "edge-label", x: midX, y: midY - 6 });
      label.textContent = `${labelType(e.type)} · score ${s}`;
      edgeGroup.appendChild(label);
    }
  }

  for (const n of nodes) {
    const p = pos(n);
    const radius = n.type === "investigado" ? 12 : 8;
    const selected = state.selectedNode === n.id || state.highlightedNodes.has(n.id);
    const dim = state.highlightedNodes.size && !state.highlightedNodes.has(n.id);
    const group = createSvg("g", { class: `node ${dim ? "dim" : ""}`, transform: `translate(${p.x}, ${p.y})` });

    const risk = n.props?.risco === "alto" ? 21 : n.type === "investigado" ? 18 : 13;
    group.appendChild(createSvg("circle", { class: "halo", r: selected ? risk + 9 : risk, fill: TYPE_COLORS[n.type] || "#cbd5e1" }));
    group.appendChild(createSvg("circle", { class: "core", r: selected ? radius + 3 : radius, fill: TYPE_COLORS[n.type] || "#cbd5e1" }));

    const t = createSvg("text", { x: 14, y: 1 });
    t.textContent = n.id;
    group.appendChild(t);
    const sub = createSvg("text", { class: "sub", x: 14, y: 14 });
    sub.textContent = n.type === "investigado" ? n.label : labelType(n.type);
    group.appendChild(sub);

    group.addEventListener("click", (ev) => {
      ev.stopPropagation();
      state.selectedNode = n.id;
      state.selectedEdge = null;
      showNodeDetail(n);
      render();
    });

    nodeGroup.appendChild(group);
  }

  svg.onclick = () => {
    state.selectedNode = null;
    state.selectedEdge = null;
    $("#detailTitle").textContent = "Selecione um nó ou aresta";
    $("#detailBody").innerHTML = "Clique em um elemento do grafo para ver propriedades, validade temporal, score e evidências.";
    render();
  };
}

function pos(n) {
  if (state.view !== "map") return { x: n.x, y: n.y };
  const [lat, lng] = n.geo || [-19.478, -42.548];
  return {
    x: 150 + (lng + 42.600) * 8200,
    y: 80 + (-19.455 - lat) * 8200
  };
}

function renderTimeline(nodes, edges) {
  const nodeIds = new Set(nodes.map(n => n.id));
  const items = edges
    .filter(e => nodeIds.has(e.source) && nodeIds.has(e.target))
    .sort((a, b) => a.recordedAt.localeCompare(b.recordedAt));

  $("#timelineView").innerHTML = `
    <h2>Timeline temporal/evidencial</h2>
    <p class="muted">Mostra quando o sistema registrou cada fato e qual o período de validade declarado.</p>
    <br>
    ${items.map(e => `
      <div class="timeline-item">
        <strong>${e.recordedAt} · ${labelType(e.type)} · score ${score(e)}/10</strong>
        <small>${nodeById.get(e.source).label} ${e.directed ? "→" : "—"} ${nodeById.get(e.target).label}</small>
        <p>${e.description}</p>
        <span class="badge">${e.status}</span>
        <span class="badge">validade: ${e.validFrom || "?"} até ${e.validTo || "atual"}</span>
        <span class="badge">evidências: ${e.evidence.join(", ")}</span>
      </div>
    `).join("")}
  `;
}

function renderMatrix(nodes, edges) {
  const ids = nodes.map(n => n.id);
  const edgeMap = new Map();
  for (const e of edges) {
    edgeMap.set(`${e.source}|${e.target}`, score(e));
    if (!e.directed) edgeMap.set(`${e.target}|${e.source}`, score(e));
  }
  $("#matrixView").innerHTML = `
    <h2>Matriz de adjacência do subgrafo</h2>
    <p class="muted">Cada célula indica a existência de aresta entre dois vértices. O número representa o score de exibição.</p>
    <br>
    <table class="matrix-table">
      <thead><tr><th></th>${ids.map(id => `<th>${id}</th>`).join("")}</tr></thead>
      <tbody>
        ${ids.map(a => `<tr><th>${a}</th>${ids.map(b => {
          const val = edgeMap.get(`${a}|${b}`);
          return `<td class="${val ? "on" : ""}">${val || ""}</td>`;
        }).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function showNodeDetail(n) {
  state.selectedNode = n.id;
  $("#detailTitle").textContent = `${n.id} — ${n.label}`;
  const props = Object.entries(n.props || {})
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");

  $("#detailBody").innerHTML = `
    <span class="badge">${labelType(n.type)}</span>
    <span class="badge">confiança entidade: ${Math.round(n.entityConfidence * 100)}%</span>
    <span class="badge">classificação: ${n.classification}</span>
    <table class="detail-table">
      <tr><td>entity_id</td><td>${n.id}</td></tr>
      <tr><td>classe</td><td>${labelType(n.type)}</td></tr>
      ${props}
    </table>
  `;
}

function showEdgeDetail(e) {
  state.selectedEdge = e.id;
  state.selectedNode = null;
  const evs = e.evidence.map(id => evidenceById.get(id)).filter(Boolean);
  $("#detailTitle").textContent = `${e.id} — ${labelType(e.type)}`;
  $("#detailBody").innerHTML = `
    <span class="badge">${e.directed ? "direcionada" : "não direcionada"}</span>
    <span class="badge">${e.status}</span>
    <span class="badge">score: ${score(e)}/10</span>
    <p style="margin-top:10px">${e.description}</p>
    <table class="detail-table">
      <tr><td>origem</td><td>${e.source} — ${nodeById.get(e.source).label}</td></tr>
      <tr><td>destino</td><td>${e.target} — ${nodeById.get(e.target).label}</td></tr>
      <tr><td>valid_from</td><td>${e.validFrom || "não informado"}</td></tr>
      <tr><td>valid_to</td><td>${e.validTo || "atual"}</td></tr>
      <tr><td>recorded_at</td><td>${e.recordedAt}</td></tr>
      <tr><td>componentes</td><td>${Object.entries(e.components).map(([k,v]) => `<span class="badge">${k}: ${v}</span>`).join("")}</td></tr>
      <tr><td>evidências</td><td>${evs.map(ev => `${ev.id} · ${ev.source} · confiança ${Math.round(ev.confidence*100)}%`).join("<br>")}</td></tr>
    </table>
  `;
  render();
}

function runAlgorithm(name) {
  clearHighlights(false);
  const nodes = visibleNodes();
  const nodeIds = new Set(nodes.map(n => n.id));
  const edges = visibleEdges(nodes);
  const edgeIds = new Set(edges.map(e => e.id));

  const actions = {
    bfs: () => algoBfs(state.target, 2),
    dfs: () => algoDfs(state.target),
    dijkstra: () => algoDijkstra(state.target, pickDestination()),
    centrality: () => algoCentrality(nodeIds, edgeIds),
    pagerank: () => algoPageRank(nodeIds, edgeIds),
    components: () => algoComponents(nodeIds, edgeIds),
    cycles: () => algoFinancialCycles(nodeIds, edgeIds),
    mst: () => algoMst(nodeIds, edgeIds),
    adjacency: () => algoAdjacency(nodeIds, edgeIds)
  };

  const result = actions[name]();
  $("#algoOutput").innerHTML = result.html;
  state.highlightedNodes = new Set(result.highlightedNodes || []);
  state.highlightedEdges = new Set(result.highlightedEdges || []);
  render();
}

function algoBfs(origin, depth) {
  const adj = adjacency();
  const seen = new Set([origin]);
  const q = [{ id: origin, level: 0, parent: null }];
  const rows = [];
  const hEdges = new Set();

  while (q.length) {
    const cur = q.shift();
    rows.push(cur);
    if (cur.level >= depth) continue;

    for (const e of adj.get(cur.id) || []) {
      if (!seen.has(e.to)) {
        seen.add(e.to);
        q.push({ id: e.to, level: cur.level + 1, parent: cur.id });
        hEdges.add(e.id);
      }
    }
  }

  return {
    highlightedNodes: [...seen],
    highlightedEdges: [...hEdges],
    html: `<strong>BFS — conexões até ${depth} níveis</strong>
      ${rows.map(r => `<div class="result-row"><b>${r.id}</b> · nível ${r.level} · pai: ${r.parent || "origem"}<br><span class="muted">${nodeById.get(r.id).label}</span></div>`).join("")}`
  };
}

function algoDfs(origin) {
  const adj = adjacency();
  const seen = new Set();
  const order = [];
  const hEdges = new Set();

  function visit(id, depth) {
    seen.add(id);
    order.push({ id, depth });
    const next = [...(adj.get(id) || [])].sort((a,b) => score(b) - score(a));
    for (const e of next) {
      if (!seen.has(e.to)) {
        hEdges.add(e.id);
        visit(e.to, depth + 1);
      }
    }
  }
  visit(origin, 0);

  return {
    highlightedNodes: [...seen],
    highlightedEdges: [...hEdges],
    html: `<strong>DFS — exploração profunda por vínculos mais fortes</strong><pre>${order.map(o => `${"  ".repeat(o.depth)}- ${o.id} · ${nodeById.get(o.id).label}`).join("\n")}</pre>`
  };
}

function pickDestination() {
  if (state.selectedNode && state.selectedNode !== state.target) return state.selectedNode;
  return DATA.nodes.find(n => n.id !== state.target && n.type === "organizacao")?.id || "O-202";
}

function algoDijkstra(origin, dest) {
  const nodes = new Set(DATA.nodes.map(n => n.id));
  const adj = adjacency();
  const dist = new Map([...nodes].map(id => [id, Infinity]));
  const prev = new Map();
  const prevEdge = new Map();
  dist.set(origin, 0);
  const open = new Set([origin]);

  while (open.size) {
    let cur = [...open].sort((a,b) => dist.get(a) - dist.get(b))[0];
    open.delete(cur);
    if (cur === dest) break;

    for (const e of adj.get(cur) || []) {
      const nd = dist.get(cur) + cost(e);
      if (nd < dist.get(e.to)) {
        dist.set(e.to, nd);
        prev.set(e.to, cur);
        prevEdge.set(e.to, e.id);
        open.add(e.to);
      }
    }
  }

  if (!isFinite(dist.get(dest))) {
    return { html: `Não existe caminho entre ${origin} e ${dest}.`, highlightedNodes: [origin] };
  }

  const path = [];
  const hEdges = [];
  let cur = dest;
  while (cur) {
    path.push(cur);
    if (prevEdge.get(cur)) hEdges.push(prevEdge.get(cur));
    cur = prev.get(cur);
  }
  path.reverse();
  hEdges.reverse();

  return {
    highlightedNodes: path,
    highlightedEdges: hEdges,
    html: `<strong>Dijkstra — caminho mais forte</strong>
      <p>Destino usado: <b>${dest} — ${nodeById.get(dest).label}</b></p>
      <p>Como peso alto significa vínculo forte, o custo usado foi <code>11 - score</code>.</p>
      <pre>${path.map(id => `${id} (${nodeById.get(id).label})`).join(" -> ")}\nCusto total: ${dist.get(dest).toFixed(2)}</pre>`
  };
}

function algoCentrality(nodeIds, edgeIds) {
  const deg = new Map([...nodeIds].map(id => [id, { degree: 0, weighted: 0 }]));
  const unique = new Set();

  for (const e of DATA.edges) {
    if (!edgeIds.has(e.id)) continue;
    const key = e.directed ? `${e.source}->${e.target}` : [e.source, e.target].sort().join("--");
    if (unique.has(key)) continue;
    unique.add(key);

    if (deg.has(e.source)) {
      deg.get(e.source).degree += 1;
      deg.get(e.source).weighted += score(e);
    }
    if (deg.has(e.target)) {
      deg.get(e.target).degree += 1;
      deg.get(e.target).weighted += score(e);
    }
  }

  const rank = [...deg.entries()]
    .map(([id, v]) => ({ id, ...v }))
    .sort((a,b) => b.weighted - a.weighted || b.degree - a.degree)
    .slice(0, 10);

  return {
    highlightedNodes: rank.slice(0, 5).map(r => r.id),
    html: `<strong>Centralidade por grau e grau ponderado</strong>
      ${rank.map((r,i) => `<div class="result-row">${i+1}. <b>${r.id}</b> · ${nodeById.get(r.id).label}<br>grau: ${r.degree} · grau ponderado: ${r.weighted}</div>`).join("")}`
  };
}

function algoPageRank(nodeIds, edgeIds) {
  const ids = [...nodeIds];
  const n = ids.length;
  let pr = new Map(ids.map(id => [id, 1/n]));
  const adj = adjacency(nodeIds, edgeIds);
  const d = 0.85;

  for (let iter = 0; iter < 30; iter++) {
    const next = new Map(ids.map(id => [id, (1-d)/n]));
    for (const id of ids) {
      const outs = (adj.get(id) || []).filter(e => nodeIds.has(e.to));
      if (!outs.length) continue;
      const total = outs.reduce((sum,e) => sum + score(e), 0);
      for (const e of outs) {
        next.set(e.to, next.get(e.to) + d * pr.get(id) * (score(e)/total));
      }
    }
    pr = next;
  }

  const rank = [...pr.entries()].sort((a,b) => b[1] - a[1]).slice(0, 10);
  return {
    highlightedNodes: rank.slice(0, 5).map(([id]) => id),
    html: `<strong>PageRank personalizado do subgrafo</strong>
      <p class="muted">Mede importância relacional considerando conexões recebidas e força das arestas.</p>
      ${rank.map(([id, v], i) => `<div class="result-row">${i+1}. <b>${id}</b> · ${nodeById.get(id).label}<br>PageRank: ${v.toFixed(4)}</div>`).join("")}`
  };
}

function algoComponents(nodeIds, edgeIds) {
  const adj = adjacency(nodeIds, edgeIds);
  const seen = new Set();
  const comps = [];

  for (const id of nodeIds) {
    if (seen.has(id)) continue;
    const comp = [];
    const q = [id];
    seen.add(id);
    while (q.length) {
      const cur = q.shift();
      comp.push(cur);
      for (const e of adj.get(cur) || []) {
        if (!seen.has(e.to)) {
          seen.add(e.to);
          q.push(e.to);
        }
      }
    }
    comps.push(comp);
  }

  const largest = comps.sort((a,b) => b.length - a.length)[0] || [];
  return {
    highlightedNodes: largest,
    html: `<strong>Componentes conectados / comunidades simples</strong>
      ${comps.map((c,i) => `<div class="result-row">Componente ${i+1}: ${c.length} nó(s)<br>${c.join(", ")}</div>`).join("")}`
  };
}

function algoFinancialCycles(nodeIds, edgeIds) {
  const fin = DATA.edges.filter(e => edgeIds.has(e.id) && e.type === "financeiro" && e.directed);
  const adj = new Map([...nodeIds].map(id => [id, []]));
  for (const e of fin) adj.get(e.source)?.push(e);

  const cycles = [];
  const seenKeys = new Set();

  function visit(start, cur, path, usedEdges) {
    for (const e of adj.get(cur) || []) {
      if (e.target === start && path.length >= 3) {
        const cyc = [...path, start];
        const key = canonicalCycle(cyc);
        if (!seenKeys.has(key)) {
          seenKeys.add(key);
          cycles.push({ nodes: cyc, edges: [...usedEdges, e.id] });
        }
      } else if (!path.includes(e.target)) {
        visit(start, e.target, [...path, e.target], [...usedEdges, e.id]);
      }
    }
  }

  for (const id of nodeIds) visit(id, id, [id], []);
  const h = cycles.flatMap(c => c.edges);

  return {
    highlightedNodes: cycles.flatMap(c => c.nodes),
    highlightedEdges: h,
    html: `<strong>Ciclos financeiros direcionados</strong>
      ${cycles.length ? cycles.map((c,i) => `<div class="result-row">Ciclo ${i+1}:<br>${c.nodes.join(" → ")}</div>`).join("") : "<p>Nenhum ciclo financeiro encontrado.</p>"}`
  };
}

function canonicalCycle(cyc) {
  const base = cyc.slice(0, -1);
  const rotations = base.map((_, i) => base.slice(i).concat(base.slice(0, i)).join(">"));
  return rotations.sort()[0];
}

function algoMst(nodeIds, edgeIds) {
  const parent = new Map([...nodeIds].map(id => [id, id]));
  const find = x => parent.get(x) === x ? x : (parent.set(x, find(parent.get(x))), parent.get(x));
  const union = (a,b) => {
    const ra = find(a), rb = find(b);
    if (ra === rb) return false;
    parent.set(rb, ra);
    return true;
  };

  const edges = DATA.edges
    .filter(e => edgeIds.has(e.id))
    .sort((a,b) => cost(a) - cost(b));

  const chosen = [];
  for (const e of edges) {
    if (union(e.source, e.target)) chosen.push(e);
  }

  return {
    highlightedNodes: [...new Set(chosen.flatMap(e => [e.source, e.target]))],
    highlightedEdges: chosen.map(e => e.id),
    html: `<strong>Árvore Geradora Mínima — Kruskal</strong>
      <p class="muted">Considera o subgrafo como não direcionado e prioriza vínculos mais fortes usando custo = 11 - score.</p>
      ${chosen.map(e => `<div class="result-row">${e.source} — ${e.target}<br>${labelType(e.type)} · score ${score(e)} · custo ${cost(e)}</div>`).join("")}`
  };
}

function algoAdjacency(nodeIds, edgeIds) {
  const adj = adjacency(nodeIds, edgeIds);
  const obj = {};
  for (const id of nodeIds) {
    obj[id] = (adj.get(id) || []).map(e => ({
      destino: e.to,
      tipo: e.type,
      score: score(e),
      custo_dijkstra: cost(e),
      status: e.status,
      evidencias: e.evidence
    }));
  }
  return {
    highlightedNodes: [state.target],
    html: `<strong>Lista de adjacência</strong><pre>${JSON.stringify(obj, null, 2)}</pre>`
  };
}

function clearHighlights(renderNow = true) {
  state.highlightedNodes.clear();
  state.highlightedEdges.clear();
  if (renderNow) render();
}

function createSvg(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k,v]) => {
    if (v !== "") el.setAttribute(k, v);
  });
  return el;
}

function labelType(type) {
  const map = {
    investigado: "Investigado",
    pessoa: "Pessoa",
    organizacao: "Organização",
    financeiro: "Financeiro",
    geografico: "Geográfico",
    digital: "Digital",
    evento: "Evento",
    documento: "Documento",
    judicial: "Judicial",
    familiar: "Familiar",
    profissional: "Profissional",
    societario: "Societário",
    comunicacao: "Comunicação",
    propriedade: "Propriedade",
    documental: "Documental"
  };
  return map[type] || type;
}

function generateReport() {
  const target = nodeById.get(state.target);
  const ego = egoNodes(state.target, 2);
  const edges = DATA.edges.filter(e => ego.has(e.source) && ego.has(e.target));
  const central = algoCentrality(ego, new Set(edges.map(e => e.id))).html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const cycles = algoFinancialCycles(ego, new Set(edges.map(e => e.id)));

  const html = `
    <html>
    <head>
      <title>Relatório FORGRAPH</title>
      <style>
        body{font-family:Arial,sans-serif;color:#111;line-height:1.45;padding:34px}
        h1{letter-spacing:.08em}
        h2{margin-top:28px;border-bottom:1px solid #ddd;padding-bottom:6px}
        table{width:100%;border-collapse:collapse;margin-top:10px}
        td,th{border:1px solid #ddd;padding:8px;font-size:12px;text-align:left}
        code,pre{background:#f3f4f6;padding:10px;border-radius:8px;display:block;white-space:pre-wrap}
        .muted{color:#555}
      </style>
    </head>
    <body>
      <h1>FORGRAPH — Relatório de Análise de Vínculos</h1>
      <p class="muted">Relatório acadêmico gerado com dados fictícios.</p>

      <h2>1. Elemento analisado</h2>
      <p><strong>${target.id} — ${target.label}</strong></p>

      <h2>2. Modelagem do grafo</h2>
      <p>Vértices: investigados, pessoas, organizações, contas, locais, dispositivos, eventos, documentos e registros judiciais.</p>
      <p>Arestas: vínculos tipados, ponderados, temporais e associados a evidências.</p>
      <p>Estrutura de dados: lista de adjacência.</p>

      <h2>3. Score composto</h2>
      <p>O peso exibido é calculado a partir de frequência, valor, recência, duração, confiança da fonte, corroboração cruzada e relevância estrutural.</p>

      <h2>4. Vínculos do subgrafo</h2>
      <table>
        <tr><th>ID</th><th>Origem</th><th>Destino</th><th>Tipo</th><th>Score</th><th>Status</th><th>Evidências</th></tr>
        ${edges.map(e => `<tr><td>${e.id}</td><td>${e.source}</td><td>${e.target}</td><td>${labelType(e.type)}</td><td>${score(e)}</td><td>${e.status}</td><td>${e.evidence.join(", ")}</td></tr>`).join("")}
      </table>

      <h2>5. Algoritmos aplicados</h2>
      <p>BFS, DFS, Dijkstra, centralidade por grau, PageRank, componentes conectados, ciclos financeiros e MST/Kruskal.</p>
      <pre>${central}</pre>

      <h2>6. Ciclos financeiros</h2>
      <pre>${cycles.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")}</pre>

      <h2>7. Observação ética</h2>
      <p>Todos os dados são fictícios. O sistema foi construído apenas para fins acadêmicos de Teoria dos Grafos.</p>
    </body>
    </html>
  `;
  const w = window.open("", "_blank");
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 400);
}

setup();
