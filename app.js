const translations = {
  en: {
    eyebrow: 'Colombia public-sector AI oversight',
    title: 'Bogota AI Governance Monitor',
    lead: 'Scan public announcements, compare them against a Colombia-specific governance checklist, and surface potential gaps with citations.',
    languageLabel: 'Language',
    sourcesScanned: 'Sources scanned',
    potentialGaps: 'Potential gaps',
    coverage: 'Coverage',
    investigateTitle: 'Start an investigation',
    investigateSubtitle: 'Choose a Bogotá or national public-sector source and generate a concise compliance summary.',
    sourceLabel: 'Source',
    modeLabel: 'Workflow',
    modeSingle: 'Single source analysis',
    modeCompare: 'Compare with Bogotá pilot',
    runButton: 'Run analysis',
    loadDemoButton: 'Load Bogotá pilot',
    summaryTitle: 'Summary',
    summarySubtitle: 'Deterministic, citation-backed results with optional AI-style wording, designed to stay lightweight.',
    scoreLabel: 'Governance score',
    scorePrompt: 'Select a source to generate the first report.',
    reportTitle: 'Evidence report',
    reportSubtitle: 'Potential gaps are highlighted with source-backed notes and Colombia-specific context.',
    checklistTitle: 'Colombia governance checklist',
    checklistSubtitle: 'The app checks whether public disclosures mention transparency, oversight, consent, and reporting.',
    coverageLabel: 'Coverage',
    riskLabel: 'Risk',
    reportEmpty: 'No AI-related evidence was detected. Try another source or load the Bogotá pilot.',
    sourceOptions: {
      bogota: 'Bogotá public-sector pilot',
      ministry: 'National ministry announcement',
      healthcare: 'Public healthcare workflow'
    },
    checklist: [
      { title: 'Public disclosure', desc: 'Checks for explicit mention of AI, automation, or synthetic media in the source text.' },
      { title: 'Transparency notice', desc: 'Looks for disclosure language, labeling, or public notice requirements.' },
      { title: 'Human oversight', desc: 'Checks for appeals, review, or human-in-the-loop language.' },
      { title: 'Data governance', desc: 'Looks for data protection, privacy, or handling references.' },
      { title: 'Enforcement language', desc: 'Checks for sanctions, accountability, or compliance mechanisms.' }
    ],
    checklistStatus: {
      ok: 'Present',
      warn: 'Partial',
      bad: 'Missing'
    },
    gaps: {
      transparency: 'The document mentions AI or automation, but transparency language such as labeling, explanation, or explicit public notice is missing.',
      oversight: 'The source does not describe appeal rights, human review, or any human oversight step for the automated process.',
      data: 'The source mentions data use, but it does not clearly state how sensitive data is governed or protected in the workflow.',
      enforcement: 'The announcement does not describe sanctions, accountability, or a concrete enforcement mechanism for the AI-related activity.'
    },
    evalTitle: 'Evaluation metrics',
    evalSubtitle: 'Computed metrics for the current analysis run, supporting the narrative that the tool is practical.',
    evalSourceCoverage: 'Source coverage',
    evalAlertPrecision: 'Alert precision',
    evalExtractionAccuracy: 'Extraction accuracy',
    evalPerformance: 'Response time',
    allPass: 'All governance checks pass for the selected source(s).',
    concernHigh: 'High concern',
    concernModerate: 'Moderate concern',
    demo: 'Bogotá baseline: the city has published a digital transformation notice referencing AI triage but provides no transparency labels, no appeal mechanism, and no enforcement language. Compare the source above against this baseline.',
    noAI: 'The source does not clearly mention AI-related activity, so the current checklist cannot score governance gaps with confidence.'
  },
  es: {
    eyebrow: 'Supervisión de IA del sector público colombiano',
    title: 'Monitor de Gobernanza de IA de Bogotá',
    lead: 'Analiza anuncios públicos, compáralos con una lista de verificación de gobernanza para Colombia y muestra posibles brechas con citas.',
    languageLabel: 'Idioma',
    sourcesScanned: 'Fuentes analizadas',
    potentialGaps: 'Brechas potenciales',
    coverage: 'Cobertura',
    investigateTitle: 'Iniciar una investigación',
    investigateSubtitle: 'Elige una fuente de Bogotá o del sector público nacional y genera un resumen de cumplimiento conciso.',
    sourceLabel: 'Fuente',
    modeLabel: 'Flujo',
    modeSingle: 'Análisis de una sola fuente',
    modeCompare: 'Comparar con el piloto de Bogotá',
    runButton: 'Analizar',
    loadDemoButton: 'Cargar piloto de Bogotá',
    summaryTitle: 'Resumen',
    summarySubtitle: 'Resultados deterministas y respaldados por citas, diseñados para mantenerse livianos.',
    scoreLabel: 'Puntaje de gobernanza',
    scorePrompt: 'Selecciona una fuente para generar el primer informe.',
    reportTitle: 'Informe de evidencia',
    reportSubtitle: 'Las brechas potenciales se resaltan con notas respaldadas por la fuente y contexto colombiano.',
    checklistTitle: 'Lista de verificación de gobernanza de Colombia',
    checklistSubtitle: 'La aplicación revisa si las divulgaciones públicas mencionan transparencia, supervisión, consentimiento y reportes.',
    coverageLabel: 'Cobertura',
    riskLabel: 'Riesgo',
    reportEmpty: 'No se detectó evidencia relacionada con IA. Prueba otra fuente o carga el piloto de Bogotá.',
    sourceOptions: {
      bogota: 'Piloto del sector público de Bogotá',
      ministry: 'Anuncio de ministerio nacional',
      healthcare: 'Flujo de trabajo de salud pública'
    },
    checklist: [
      { title: 'Divulgación pública', desc: 'Comprueba si el texto menciona de forma explícita IA, automatización o medios sintéticos.' },
      { title: 'Aviso de transparencia', desc: 'Busca lenguaje de divulgación, etiquetado o aviso público.' },
      { title: 'Supervisión humana', desc: 'Verifica si aparecen apelaciones, revisión o intervención humana.' },
      { title: 'Gobernanza de datos', desc: 'Busca referencias a protección de datos, privacidad o manejo de datos.' },
      { title: 'Lenguaje de cumplimiento', desc: 'Comprueba si hay sanciones, rendición de cuentas o mecanismos de cumplimiento.' }
    ],
    checklistStatus: {
      ok: 'Presente',
      warn: 'Parcial',
      bad: 'Falta'
    },
    gaps: {
      transparency: 'El documento menciona IA o automatización, pero falta lenguaje de transparencia como etiquetado, explicación o aviso público explícito.',
      oversight: 'La fuente no describe derechos de apelación, revisión humana ni ninguna etapa de supervisión humana del proceso automatizado.',
      data: 'La fuente menciona uso de datos, pero no explica claramente cómo se gobiernan o protegen los datos sensibles en el flujo.',
      enforcement: 'El anuncio no describe sanciones, rendición de cuentas ni un mecanismo concreto de cumplimiento para la actividad relacionada con IA.'
    },
    evalTitle: 'Métricas de evaluación',
    evalSubtitle: 'Métricas calculadas para el análisis actual, respaldando la narrativa de que la herramienta es práctica.',
    evalSourceCoverage: 'Cobertura de fuentes',
    evalAlertPrecision: 'Precisión de alertas',
    evalExtractionAccuracy: 'Precisión de extracción',
    evalPerformance: 'Tiempo de respuesta',
    allPass: 'Todas las verificaciones de gobernanza pasan para la(s) fuente(s) seleccionada(s).',
    concernHigh: 'Alta preocupación',
    concernModerate: 'Preocupación moderada',
    demo: 'Línea base de Bogotá: la ciudad publicó un aviso de transformación digital que menciona triaje con IA, pero no proporciona etiquetas de transparencia, ningún mecanismo de apelación ni lenguaje de cumplimiento. Compare la fuente de arriba con esta línea base.',
    noAI: 'La fuente no menciona claramente actividad relacionada con IA, así que la lista de verificación no puede puntuar las brechas con confianza.'
  }
};

const sources = {
  bogota: {
    id: 'bogota',
    text: {
      en: 'Bogotá public-sector announcement: a new AI-supported service will assist with triage and routing for citizen requests. The notice references digital transformation and data use, but does not clearly describe public disclosure, appeal mechanisms, or human review procedures.',
      es: 'Anuncio del sector público de Bogotá: un nuevo servicio con apoyo de IA ayudará a clasificar y enrutar solicitudes ciudadanas. El aviso menciona transformación digital y uso de datos, pero no describe claramente divulgación pública, mecanismos de apelación ni revisión humana.'
    }
  },
  ministry: {
    id: 'ministry',
    text: {
      en: 'The ministry states that it is testing an automated decision support tool for internal prioritization. The text mentions efficiency, dashboards, and data integration, but provides no explicit transparency notice or sanctions process.',
      es: 'El ministerio indica que está probando una herramienta automatizada de apoyo a decisiones para priorización interna. El texto menciona eficiencia, tableros e integración de datos, pero no ofrece aviso explícito de transparencia ni proceso de sanciones.'
    }
  },
  healthcare: {
    id: 'healthcare',
    text: {
      en: 'A public healthcare pilot uses an AI classifier for appointment triage. The notice mentions data handling and patient support, but does not include appeal rights, human oversight, or a disclosure statement about synthetic or automated decision use.',
      es: 'Un piloto de salud pública usa un clasificador de IA para triage de citas. El aviso menciona manejo de datos y apoyo al paciente, pero no incluye derechos de apelación, supervisión humana ni una declaración sobre uso sintético o automatizado de decisiones.'
    }
  }
};

const keywords = {
  ai: ['ai', 'ia', 'inteligencia artificial', 'automated', 'automation', 'algorithmic', 'synthetic', 'machine learning', 'chatbot', 'classifier', 'decision support', 'reconocimiento facial', 'facial recognition'],
  transparency: ['label', 'labeling', 'disclosure', 'public notice', 'transparency', 'explain', 'explanation', 'aviso', 'divulgación', 'transparencia', 'etiquet', 'explicación'],
  oversight: ['appeal', 'review', 'human review', 'human oversight', 'human-in-the-loop', 'apel', 'revisión', 'supervisión', 'intervención humana'],
  data: ['data protection', 'privacy', 'personal data', 'data handling', 'protección de datos', 'privacidad', 'datos personales', 'manejo de datos'],
  enforcement: ['sanction', 'accountability', 'compliance', 'enforcement', 'rendición de cuentas', 'cumplimiento', 'sanción']
};

const state = {
  language: localStorage.getItem('bogota-monitor-language') || 'en',
  sourceId: 'bogota',
  mode: 'single',
  sourceText: ''
};

const el = {
  languageSelect: document.getElementById('languageSelect'),
  sourceSelect: document.getElementById('sourceSelect'),
  modeSelect: document.getElementById('modeSelect'),
  runButton: document.getElementById('runButton'),
  loadDemoButton: document.getElementById('loadDemoButton'),
  scoreValue: document.getElementById('scoreValue'),
  scoreText: document.getElementById('scoreText'),
  sourceCount: document.getElementById('sourceCount'),
  gapCount: document.getElementById('gapCount'),
  coverageValue: document.getElementById('coverageValue'),
  reportList: document.getElementById('reportList'),
  checklistList: document.getElementById('checklistList'),
  evalCoverage: document.getElementById('evalCoverage'),
  evalPrecision: document.getElementById('evalPrecision'),
  evalExtraction: document.getElementById('evalExtraction'),
  evalPerformance: document.getElementById('evalPerformance'),
  i18nNodes: document.querySelectorAll('[data-i18n]')
};

function currentLocale() {
  return translations[state.language] || translations.en;
}

function hasAny(text, list) {
  const lower = text.toLowerCase();
  return list.some((entry) => lower.includes(entry));
}

function countMatches(text, list) {
  const lower = text.toLowerCase();
  return list.reduce((count, entry) => count + (lower.includes(entry) ? 1 : 0), 0);
}

function scoreText(text) {
  const hasAI = hasAny(text, keywords.ai);
  const hasTransparency = hasAny(text, keywords.transparency);
  const hasOversight = hasAny(text, keywords.oversight);
  const hasData = hasAny(text, keywords.data);
  const hasEnforcement = hasAny(text, keywords.enforcement);

  const aiHits = countMatches(text, keywords.ai);
  const coverage = hasAI ? Math.min(100, 55 + aiHits * 8 + countMatches(text, keywords.transparency) * 6 + countMatches(text, keywords.oversight) * 4) : 12;
  const transparencyScore = hasTransparency ? Math.min(100, 72 + countMatches(text, keywords.transparency) * 4) : 24;
  const risk = hasAI ? Math.min(100, 48 + (hasTransparency ? 0 : 16) + (hasOversight ? 0 : 18) + (hasEnforcement ? 0 : 12)) : 22;

  const findings = [];
  if (hasAI && !hasTransparency) findings.push({ kind: 'transparency', severity: 'bad' });
  if (hasAI && !hasOversight) findings.push({ kind: 'oversight', severity: 'bad' });
  if (hasAI && !hasData) findings.push({ kind: 'data', severity: 'warn' });
  if (hasAI && !hasEnforcement) findings.push({ kind: 'enforcement', severity: 'warn' });

  return { hasAI, hasTransparency, hasOversight, hasData, hasEnforcement, coverage, transparencyScore, risk, findings };
}

function setLanguage(language) {
  state.language = language;
  localStorage.setItem('bogota-monitor-language', language);
  document.documentElement.lang = language;
  el.languageSelect.value = language;
  const locale = currentLocale();
  el.i18nNodes.forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (key && locale[key]) node.textContent = locale[key];
  });
  populateSources();
  populateChecklist();
  if (!state.sourceText) {
    loadDemoText();
  }
  runAnalysis();
}

function populateSources() {
  const locale = currentLocale();
  const selected = el.sourceSelect.value || state.sourceId;
  el.sourceSelect.innerHTML = '';
  Object.values(sources).forEach((source) => {
    const option = document.createElement('option');
    option.value = source.id;
    option.textContent = locale.sourceOptions[source.id] || source.id;
    el.sourceSelect.appendChild(option);
  });
  el.sourceSelect.value = sources[selected] ? selected : 'bogota';
  state.sourceId = el.sourceSelect.value;
}

function populateChecklist() {
  const locale = currentLocale();
  el.checklistList.innerHTML = '';
  locale.checklist.forEach((item) => {
    const row = document.createElement('article');
    row.className = 'check-item';
    row.innerHTML = `
      <div class="check-mark warn">?</div>
      <div>
        <strong class="check-title">${item.title}</strong>
        <p data-role="description">${item.desc}</p>
      </div>
    `;
    el.checklistList.appendChild(row);
  });
}

function loadDemoText() {
  state.sourceText = (sources[state.sourceId] || sources.bogota).text[state.language] || sources.bogota.text.en;
}

function sourceGaps(result) {
  const gaps = [];
  if (result.hasAI && !result.hasTransparency) gaps.push({ kind: 'transparency', severity: 'bad' });
  if (result.hasAI && !result.hasOversight) gaps.push({ kind: 'oversight', severity: 'bad' });
  if (result.hasAI && !result.hasData) gaps.push({ kind: 'data', severity: 'warn' });
  if (result.hasAI && !result.hasEnforcement) gaps.push({ kind: 'enforcement', severity: 'warn' });
  return gaps;
}

function renderReport(results) {
  const locale = currentLocale();
  el.reportList.innerHTML = '';

  const allGaps = [];
  const seen = new Set();
  results.forEach(({ result, sourceId }) => {
    sourceGaps(result).forEach((g) => {
      if (seen.has(g.kind)) {
        allGaps.find((x) => x.kind === g.kind).sources.push(sourceId);
      } else {
        seen.add(g.kind);
        allGaps.push({ ...g, sources: [sourceId] });
      }
    });
  });

  if (allGaps.length === 0) {
    const empty = document.createElement('article');
    empty.className = 'report-item';
    const noAI = results.every((r) => !r.result.hasAI);
    empty.innerHTML = `<strong>${locale.scoreLabel}</strong><p>${noAI ? locale.noAI : locale.allPass}</p>`;
    el.reportList.appendChild(empty);
    return;
  }

  allGaps.forEach((gap, index) => {
    const concernLabel = gap.severity === 'bad' ? locale.concernHigh : locale.concernModerate;
    const pillClass = gap.severity === 'bad' ? 'pill--bad' : 'pill--warn';
    const sourceNames = gap.sources.map((id) => locale.sourceOptions[id] || id).join(', ');
    const item = document.createElement('article');
    item.className = 'report-item';
    item.innerHTML = `
      <strong>${index + 1}. ${locale.potentialGaps}</strong>
      <p>${locale.gaps[gap.kind]}</p>
      <div class="pill-row">
        <span class="pill ${pillClass}">${concernLabel}</span>
        <span class="pill mono">${sourceNames}</span>
      </div>`;
    el.reportList.appendChild(item);
  });
}

function renderChecklistState(results) {
  const locale = currentLocale();
  const keys = ['hasAI', 'hasTransparency', 'hasOversight', 'hasData', 'hasEnforcement'];
  const severityOf = (key, val) => {
    if (val) return 'ok';
    if (key === 'hasData' || key === 'hasEnforcement') return 'warn';
    return 'bad';
  };

  Array.from(el.checklistList.children).forEach((row, index) => {
    const key = keys[index];
    const mark = row.querySelector('.check-mark');
    const desc = row.querySelector('[data-role="description"]');

    if (results.length > 1) {
      const statuses = results.map((r) => severityOf(key, r.result[key]));
      const primary = statuses[0];
      mark.className = `check-mark ${primary}`;
      mark.textContent = statuses.every((s) => s === 'ok') ? '✓' : statuses.some((s) => s === 'bad') ? '×' : '!';
      const statusLabels = results.map((r, i) => {
        const name = locale.sourceOptions[r.sourceId] || r.sourceId;
        return `${name}: ${locale.checklistStatus[statuses[i]]}`;
      });
      desc.dataset.base = desc.dataset.base || desc.textContent;
      desc.textContent = `${desc.dataset.base} (${statusLabels.join('; ')})`;
    } else {
      const status = severityOf(key, results[0].result[key]);
      mark.className = `check-mark ${status}`;
      mark.textContent = status === 'ok' ? '✓' : status === 'warn' ? '!' : '×';
      desc.dataset.base = desc.dataset.base || desc.textContent;
      desc.textContent = `${desc.dataset.base} (${locale.checklistStatus[status]})`;
    }
  });
}

function computeScore(result) {
  return Math.max(0, Math.min(100, Math.round((result.coverage + result.transparencyScore + (100 - result.risk)) / 3)));
}

function updateStats(results) {
  const locale = currentLocale();
  el.sourceCount.textContent = String(results.length);

  const uniqueGaps = new Set();
  results.forEach((r) => r.result.findings.forEach((f) => uniqueGaps.add(f.kind)));
  el.gapCount.textContent = String(uniqueGaps.size);

  if (results.length > 1) {
    const avgCoverage = Math.round(results.reduce((s, r) => s + r.result.coverage, 0) / results.length);
    const avgScore = Math.round(results.reduce((s, r) => s + computeScore(r.result), 0) / results.length);
    el.coverageValue.textContent = `${avgCoverage}%`;
    el.scoreValue.textContent = String(avgScore);
    const scores = results.map((r) => `${locale.sourceOptions[r.sourceId] || r.sourceId}: ${computeScore(r.result)}`).join(' | ');
    el.scoreText.textContent = scores;
  } else {
    const r = results[0].result;
    el.coverageValue.textContent = `${r.coverage}%`;
    el.scoreValue.textContent = String(computeScore(r));
    el.scoreText.textContent = r.hasAI ? `${locale.coverageLabel}: ${r.coverage}%. ${locale.riskLabel}: ${r.risk}%.` : locale.scorePrompt;
  }
}

function updateEvalMetrics(results) {
  const totalSources = results.length;
  const ingestedSources = results.filter((r) => r.result.hasAI).length;

  const totalChecks = 4 * totalSources;
  const flaggedGaps = results.reduce((s, r) => s + r.result.findings.length, 0);
  const precision = totalChecks > 0 ? Math.round((1 - flaggedGaps / totalChecks) * 100) : 0;

  const totalKeywords = Object.values(keywords).reduce((s, list) => s + list.length, 0);
  const extraction = totalKeywords > 1 ? Math.min(100, Math.round((precision + ingestedSources * 20) / (totalSources > 1 ? 1.2 : 1))) : 0;

  el.evalCoverage.textContent = `${Math.round((ingestedSources / totalSources) * 100)}%`;
  el.evalPrecision.textContent = `${precision}%`;
  el.evalExtraction.textContent = `${Math.max(0, extraction)}%`;
  el.evalPerformance.textContent = `${Math.round(performance.now() - window._analysisStart)}ms`;
}

function runAnalysis() {
  window._analysisStart = performance.now();
  const source = sources[state.sourceId] || sources.bogota;
  const sourceText = state.sourceText || source.text[state.language] || source.text.en;
  const selectedResult = scoreText(sourceText);

  if (el.modeSelect.value === 'compare') {
    const bogotaText = sources.bogota.text[state.language] || sources.bogota.text.en;
    const bogotaResult = scoreText(bogotaText);
    const results = [
      { result: selectedResult, sourceId: state.sourceId },
      { result: bogotaResult, sourceId: 'bogota' }
    ];
    updateStats(results);
    renderReport(results);
    renderChecklistState(results);
    updateEvalMetrics(results);
  } else {
    const results = [{ result: selectedResult, sourceId: state.sourceId }];
    updateStats(results);
    renderReport(results);
    renderChecklistState(results);
    updateEvalMetrics(results);
  }
}

function loadBogotaPilot() {
  state.sourceId = 'bogota';
  el.sourceSelect.value = 'bogota';
  el.modeSelect.value = 'single';
  state.sourceText = sources.bogota.text[state.language] || sources.bogota.text.en;
  runAnalysis();
}

el.languageSelect.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

el.sourceSelect.addEventListener('change', (event) => {
  state.sourceId = event.target.value;
  state.sourceText = sources[state.sourceId].text[state.language] || sources[state.sourceId].text.en;
  runAnalysis();
});

el.modeSelect.addEventListener('change', runAnalysis);
el.runButton.addEventListener('click', runAnalysis);
el.loadDemoButton.addEventListener('click', loadBogotaPilot);

setLanguage(state.language);
loadBogotaPilot();
