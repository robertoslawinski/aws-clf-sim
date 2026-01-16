// app.js

// ---------- helpers ----------
const $ = (id) => document.getElementById(id);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function nowISO() {
  return new Date().toISOString();
}

// ---------- views ----------
const views = {
  home: $("viewHome"),
  exam: $("viewExam"),
  result: $("viewResult"),
  review: $("viewReview"),
  history: $("viewHistory"),
};

function showView(name) {
  Object.values(views).forEach((v) => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
}

// ---------- state ----------
const state = {
  examId: null,
  mode: "exam",
  total: 20,
  minutes: 90,
  poolDomains: [],
  questions: [],
  index: 0,
  answers: {}, // { [qid]: number[] }
  flagged: new Set(),
  startedAt: null,
  finishedAt: null,
  timer: {
    enabled: true,
    secondsLeft: 0,
    intervalId: null,
  },
  results: null,
  reviewIndex: 0,
};

// ---------- history ----------
const HISTORY_KEY = "aws_clf_history_v1";

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveHistoryItem(item) {
  const list = loadHistory();
  list.unshift(item);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, 30)));
}

// ---------- question selection ----------
function getSelectedDomains() {
  return [...document.querySelectorAll(".domain")]
    .filter((x) => x.checked)
    .map((x) => x.value);
}

function buildExam() {
  const domains = getSelectedDomains();
  const total = Number($("numQuestions").value);
  const mode = $("mode").value;
  const minutes = Number($("minutes").value);

  const pool = window.QUESTION_BANK.filter((q) => domains.includes(q.domain));
  const picked = shuffle(pool).slice(0, total);

  // If pool smaller than requested, just take what exists
  const finalQuestions = picked;

  state.examId = `exam_${Date.now()}`;
  state.mode = mode;
  state.total = finalQuestions.length;
  state.minutes = minutes;
  state.poolDomains = domains;
  state.questions = finalQuestions;
  state.index = 0;
  state.answers = {};
  state.flagged = new Set();
  state.startedAt = nowISO();
  state.finishedAt = null;
  state.results = null;
  state.reviewIndex = 0;

  state.timer.enabled = (mode === "exam");
  state.timer.secondsLeft = state.timer.enabled ? minutes * 60 : 0;
}

// ---------- rendering exam ----------
function updateTop() {
  $("pillMode").innerText = `Modo: ${state.mode === "exam" ? "Exame" : "Treino"}`;
  $("examMeta").innerText = `Questão ${state.index + 1} de ${state.total}`;

  $("timer").innerText = state.timer.enabled ? formatTime(state.timer.secondsLeft) : "—";
  $("progress").innerText = `Respondidas: ${countAnswered()} / ${state.total}`;

  const isFlagged = state.flagged.has(state.questions[state.index]?.id);
  $("btnFlag").innerText = isFlagged ? "🚩 Marcada" : "🚩 Marcar";
}

function countAnswered() {
  return Object.keys(state.answers).length;
}

function getCurrentQuestion() {
  return state.questions[state.index];
}

function renderQuestion() {
  const q = getCurrentQuestion();
  if (!q) return;

  $("qDomain").innerText = q.domain;
  $("qText").innerText = q.question;

  const isMulti = q.type === "multi";
  $("qMultiHint").innerText = isMulti ? "Selecione todas as alternativas corretas." : "";

  const saved = state.answers[q.id] || [];

  const container = $("options");
  container.innerHTML = "";

  q.options.forEach((opt, i) => {
    const row = document.createElement("label");
    row.className = "option";

    const input = document.createElement("input");
    input.type = isMulti ? "checkbox" : "radio";
    input.name = "opt";
    input.value = String(i);
    input.checked = saved.includes(i);

    const span = document.createElement("div");
    span.innerText = opt;

    row.appendChild(input);
    row.appendChild(span);

    row.addEventListener("click", (e) => {
      // allow clicking anywhere
      if (e.target.tagName !== "INPUT") input.checked = !input.checked;
      onSelectOption(q, i, isMulti);
    });

    container.appendChild(row);
  });

  updateTop();
}

function onSelectOption(q, idx, isMulti) {
  const current = new Set(state.answers[q.id] || []);

  if (isMulti) {
    if (current.has(idx)) current.delete(idx);
    else current.add(idx);
    const arr = [...current].sort((a, b) => a - b);
    if (arr.length === 0) delete state.answers[q.id];
    else state.answers[q.id] = arr;
  } else {
    state.answers[q.id] = [idx];
  }

  updateTop();
}

// ---------- navigation ----------
function goPrev() {
  state.index = clamp(state.index - 1, 0, state.total - 1);
  renderQuestion();
}

function goNext() {
  state.index = clamp(state.index + 1, 0, state.total - 1);
  renderQuestion();
}

function toggleFlag() {
  const q = getCurrentQuestion();
  if (!q) return;
  if (state.flagged.has(q.id)) state.flagged.delete(q.id);
  else state.flagged.add(q.id);
  updateTop();
}

function clearAnswer() {
  const q = getCurrentQuestion();
  if (!q) return;
  delete state.answers[q.id];
  renderQuestion();
}

// ---------- timer ----------
function startTimer() {
  stopTimer();
  if (!state.timer.enabled) return;

  state.timer.intervalId = setInterval(() => {
    state.timer.secondsLeft -= 1;
    if (state.timer.secondsLeft <= 0) {
      state.timer.secondsLeft = 0;
      updateTop();
      finishExam(true);
      return;
    }
    updateTop();
  }, 1000);
}

function stopTimer() {
  if (state.timer.intervalId) clearInterval(state.timer.intervalId);
  state.timer.intervalId = null;
}

// ---------- scoring ----------
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

function computeResults() {
  let correct = 0;
  let wrong = 0;
  let blank = 0;

  const perDomain = {}; // {domain: {correct, total}}

  for (const q of state.questions) {
    perDomain[q.domain] ||= { correct: 0, total: 0 };
    perDomain[q.domain].total += 1;

    const ans = state.answers[q.id];
    if (!ans || ans.length === 0) {
      blank += 1;
      continue;
    }
    const ok = arraysEqual(ans, [...q.correct].sort((a,b)=>a-b));
    if (ok) {
      correct += 1;
      perDomain[q.domain].correct += 1;
    } else {
      wrong += 1;
    }
  }

  const total = state.total;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;

  return { score, correct, wrong, blank, total, perDomain };
}

// ---------- finish + result view ----------
function finishExam(fromTimer = false) {
  stopTimer();
  state.finishedAt = nowISO();

  const results = computeResults();
  state.results = results;

  $("scoreMain").innerText = `${results.score}%`;
  $("scoreSub").innerText = `${results.correct}/${results.total}`;
  $("statCorrect").innerText = String(results.correct);
  $("statWrong").innerText = String(results.wrong);
  $("statBlank").innerText = String(results.blank);

  // save history
  saveHistoryItem({
    id: state.examId,
    at: state.finishedAt,
    mode: state.mode,
    total: results.total,
    score: results.score,
    correct: results.correct,
    wrong: results.wrong,
    blank: results.blank,
    domains: state.poolDomains,
    finishedByTimer: Boolean(fromTimer),
  });

  showView("result");
}

// ---------- review ----------
function renderReview() {
  const i = state.reviewIndex;
  const q = state.questions[i];
  if (!q) return;

  $("reviewMeta").innerText = `Questão ${i + 1}/${state.total}`;
  $("rDomain").innerText = q.domain;
  $("rText").innerText = q.question;
  $("rExplanation").innerText = q.explanation;

  const tags = $("rTags");
  tags.innerHTML = "";
  (q.tags || []).forEach((t) => {
    const el = document.createElement("span");
    el.className = "tag";
    el.innerText = t;
    tags.appendChild(el);
  });

  const rOptions = $("rOptions");
  rOptions.innerHTML = "";

  const userAns = state.answers[q.id] || [];
  const correctSet = new Set(q.correct);

  q.options.forEach((opt, idx) => {
    const row = document.createElement("div");
    row.className = "option";

    const userPicked = userAns.includes(idx);
    const isCorrect = correctSet.has(idx);

    if (isCorrect) row.classList.add("correct");
    if (userPicked && !isCorrect) row.classList.add("wrong");
    if (!userPicked && !isCorrect) row.classList.add("muted");

    const left = document.createElement("div");
    left.innerText = (q.type === "multi") ? "☑" : "◉";
    left.style.opacity = "0.7";

    const text = document.createElement("div");
    text.innerText =
      `${opt}` +
      (isCorrect ? "  ✅" : "") +
      (userPicked && !isCorrect ? "  ❌" : "") +
      (userPicked && isCorrect ? "  (sua resposta)" : "");

    row.appendChild(left);
    row.appendChild(text);
    rOptions.appendChild(row);
  });
}

function reviewPrev() {
  state.reviewIndex = clamp(state.reviewIndex - 1, 0, state.total - 1);
  renderReview();
}

function reviewNext() {
  state.reviewIndex = clamp(state.reviewIndex + 1, 0, state.total - 1);
  renderReview();
}

// ---------- history render ----------
function renderHistory() {
  const list = loadHistory();
  const wrap = $("historyList");
  wrap.innerHTML = "";

  if (list.length === 0) {
    wrap.innerHTML = `<div class="muted">Sem histórico ainda.</div>`;
    return;
  }

  list.forEach((h) => {
    const div = document.createElement("div");
    div.className = "history-item";
    const dt = new Date(h.at);
    div.innerHTML = `
      <strong>${dt.toLocaleString()}</strong>
      <div class="muted">Modo: ${h.mode} • Score: ${h.score}% • ${h.correct}/${h.total} (blank: ${h.blank})</div>
      <div class="muted">Domínios: ${(h.domains || []).join(", ")}</div>
    `;
    wrap.appendChild(div);
  });
}

// ---------- seed/reset ----------
function seedQuestions() {
  // só garante que existe o banco (já existe). Aqui fica um botão útil pra você.
  alert(`Banco carregado: ${window.QUESTION_BANK.length} questões.\nEdite questions.js para adicionar mais.`);
}

// ---------- wire up ----------
function startFlow() {
  buildExam();

  if (state.total === 0) {
    alert("Não há questões suficientes para os domínios selecionados. Marque mais domínios ou adicione questões.");
    return;
  }

  showView("exam");
  renderQuestion();
  startTimer();
}

function goHome() {
  stopTimer();
  showView("home");
}

window.addEventListener("DOMContentLoaded", () => {
  // top buttons
  $("btnGoHome").addEventListener("click", goHome);
  $("btnViewHistory").addEventListener("click", () => {
    renderHistory();
    showView("history");
  });

  // home
  $("btnStart").addEventListener("click", startFlow);
  $("btnSeed").addEventListener("click", seedQuestions);

  // exam
  $("btnPrev").addEventListener("click", goPrev);
  $("btnNext").addEventListener("click", goNext);
  $("btnFlag").addEventListener("click", toggleFlag);
  $("btnClear").addEventListener("click", clearAnswer);
  $("btnFinish").addEventListener("click", () => finishExam(false));

  // result
  $("btnReview").addEventListener("click", () => {
    state.reviewIndex = 0;
    showView("review");
    renderReview();
  });
  $("btnNewExam").addEventListener("click", goHome);

  // review
  $("btnRPrev").addEventListener("click", reviewPrev);
  $("btnRNext").addEventListener("click", reviewNext);
  $("btnBackHome").addEventListener("click", goHome);

  // history
  $("btnHistoryBack").addEventListener("click", goHome);
  $("btnClearHistory").addEventListener("click", () => {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  });

  showView("home");
});
