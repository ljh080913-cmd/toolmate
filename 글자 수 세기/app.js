// =============================================
// app.js - 메인 애플리케이션 로직
// =============================================

// ── DOM 참조 ──────────────────────────────────
const textarea = document.getElementById('mainTextarea');
const statsEls = {
  withSpace: document.getElementById('stat-with-space'),
  noSpace: document.getElementById('stat-no-space'),
  spaceOnly: document.getElementById('stat-space'),
  words: document.getElementById('stat-words'),
  lines: document.getElementById('stat-lines'),
  sentences: document.getElementById('stat-sentences'),
  bytes: document.getElementById('stat-bytes'),
  byteSub: document.getElementById('stat-bytes-sub'),
  manuscript: document.getElementById('stat-manuscript'),
  readTime: document.getElementById('stat-read-time'),
};
const issueList = document.getElementById('issueList');
const issueBadgeErrors = document.getElementById('badge-errors');
const issueBadgeWarnings = document.getElementById('badge-warnings');
const goalInput = document.getElementById('goalInput');
const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');
const toastEl = document.getElementById('toast');
const themeToggleBtn = document.getElementById('themeToggle');

let currentIssues = [];
let byteMode = 'utf8'; // 'utf8' | 'euckr'

// ── 바이트 계산 ────────────────────────────────
function getByteLength(text, mode) {
  if (mode === 'utf8') {
    return new TextEncoder().encode(text).length;
  }
  // EUC-KR 근사치: 한글/한자/전각 → 2바이트, 나머지 → 1바이트
  let len = 0;
  for (const ch of text) {
    const code = ch.codePointAt(0);
    if (ch === '\n') { len += 2; continue; } // 개행 2바이트 (채용 사이트 기준)
    if (
      (code >= 0xAC00 && code <= 0xD7A3) ||   // 한글 완성형
      (code >= 0x4E00 && code <= 0x9FFF) ||   // 한자
      (code >= 0xFF00 && code <= 0xFFEF) ||   // 전각
      (code >= 0x3000 && code <= 0x303F)      // 기타 CJK 기호
    ) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
}

// ── 통계 계산 ─────────────────────────────────
function calcStats(text) {
  const withSpace = text.length;
  const noSpace = text.replace(/\s/g, '').length;
  const spaceOnly = withSpace - noSpace;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).filter(Boolean).length;
  const lines = text === '' ? 0 : text.split('\n').length;
  // 문장: '.', '?', '!', '。' 뒤 (단순 근사)
  const sentences = text.trim() === '' ? 0 : (text.match(/[.?!。]+(\s|$)/g) || []).length;
  const bytes = getByteLength(text, byteMode);
  const byteLabel = byteMode === 'utf8' ? 'UTF-8 기준' : 'EUC-KR(채용사이트) 기준';
  // 원고지 200자 기준
  const manuscript = (noSpace / 200).toFixed(2);
  // 읽기 시간: 한국어 평균 300자/분(묵독), 150자/분(낭독)
  const readMinSilent = Math.ceil(noSpace / 300);
  const readMinAloud = Math.ceil(noSpace / 150);
  const readTime = noSpace < 10 ? '—' :
    (readMinSilent < 2
      ? `약 1분 미만`
      : `묵독 ${readMinSilent}분 / 낭독 ${readMinAloud}분`);

  return { withSpace, noSpace, spaceOnly, words, lines, sentences, bytes, byteLabel, manuscript, readTime };
}

// ── 통계 렌더링 ────────────────────────────────
function renderStats(s) {
  statsEls.withSpace.textContent = s.withSpace.toLocaleString();
  statsEls.noSpace.textContent = s.noSpace.toLocaleString();
  statsEls.spaceOnly.textContent = s.spaceOnly.toLocaleString();
  statsEls.words.textContent = s.words.toLocaleString();
  statsEls.lines.textContent = s.lines.toLocaleString();
  statsEls.sentences.textContent = s.sentences.toLocaleString();
  statsEls.bytes.textContent = s.bytes.toLocaleString();
  statsEls.byteSub.textContent = s.byteLabel;
  statsEls.manuscript.textContent = s.manuscript;
  statsEls.readTime.textContent = s.readTime;
}

// ── 목표 글자수 프로그레스 ──────────────────────
function renderProgress(noSpace) {
  const goal = parseInt(goalInput.value) || 0;
  if (!goal) {
    progressFill.style.width = '0%';
    progressLabel.textContent = '목표 글자 수를 입력하세요';
    return;
  }
  const pct = Math.min((noSpace / goal) * 100, 100);
  progressFill.style.width = pct + '%';
  const over = noSpace - goal;
  if (over > 0) {
    progressLabel.textContent = `목표 초과 +${over.toLocaleString()}자 (${pct.toFixed(1)}%)`;
    progressFill.style.background = 'var(--error)';
  } else {
    progressLabel.textContent = `${noSpace.toLocaleString()} / ${goal.toLocaleString()}자 (${pct.toFixed(1)}%)`;
    progressFill.style.background = '';
  }
}

// ── 이슈 렌더링 ────────────────────────────────
function applyFix(issueIdx) {
  const issue = currentIssues[issueIdx];
  if (!issue || !issue.autofix || !issue.replacement) return;
  const text = textarea.value;
  const before = text.slice(0, issue.index);
  const after = text.slice(issue.index + issue.length);
  textarea.value = before + issue.replacement + after;
  showToast(`✅ "${issue.original}" → "${issue.replacement}" 수정 완료`);
  onInput();
}

function applyAllFixes() {
  let text = textarea.value;
  let count = 0;
  // 뒤에서부터 수정해야 index 안 밀림
  const fixable = [...currentIssues]
    .filter(i => i.autofix && i.replacement)
    .sort((a, b) => b.index - a.index);

  const seen = new Set();
  for (const issue of fixable) {
    const key = `${issue.index}-${issue.length}`;
    if (seen.has(key)) continue;
    seen.add(key);
    text = text.slice(0, issue.index) + issue.replacement + text.slice(issue.index + issue.length);
    count++;
  }
  textarea.value = text;
  showToast(`✅ 총 ${count}개 항목을 자동 수정했습니다.`);
  onInput();
}

function renderIssues(issues) {
  currentIssues = issues;
  const errors = issues.filter(i => i.severity === 'error');
  const warnings = issues.filter(i => i.severity === 'warning');

  issueBadgeErrors.textContent = errors.length;
  issueBadgeErrors.className = 'issue-count-badge' + (errors.length === 0 ? ' zero' : '');
  issueBadgeWarnings.textContent = warnings.length;
  issueBadgeWarnings.className = 'issue-count-badge warning' + (warnings.length === 0 ? ' zero' : '');

  if (issues.length === 0) {
    issueList.innerHTML = `<div class="empty-state"><span class="icon">✅</span>발견된 오류가 없습니다.<br><small>검사하려면 텍스트를 입력하세요.</small></div>`;
    return;
  }

  issueList.innerHTML = '';
  issues.forEach((issue, idx) => {
    const li = document.createElement('li');
    li.className = 'issue-item' + (issue.severity === 'warning' ? ' warning' : '');

    let badge = '';
    if (issue.type === 'spelling') badge = '📝';
    else if (issue.type === 'punctuation') badge = '✏️';

    let fixPart = '';
    if (issue.autofix && issue.replacement) {
      fixPart = `
        <span class="issue-original">${escHtml(issue.original)}</span>
        <span class="issue-arrow">→</span>
        <span class="issue-replacement">${escHtml(issue.replacement)}</span>
      `;
    } else if (issue.original) {
      fixPart = `<span class="issue-original">${escHtml(issue.original)}</span>`;
    }

    li.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:6px;flex-wrap:wrap;">
        <span>${badge}</span>
        <span>${fixPart}</span>
      </div>
      <span class="issue-msg">${escHtml(issue.message)}</span>
      ${issue.autofix && issue.replacement ? `<div class="issue-actions"><button class="issue-fix-btn" data-idx="${idx}">이 항목 수정</button></div>` : ''}
    `;
    issueList.appendChild(li);
  });

  // 이벤트 위임
  issueList.querySelectorAll('[data-idx]').forEach(btn => {
    btn.addEventListener('click', () => applyFix(parseInt(btn.dataset.idx)));
  });
}

// ── HTML Escape ────────────────────────────────
function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── 텍스트 유틸리티 ────────────────────────────
function utilMultiSpaceToOne() {
  textarea.value = textarea.value.replace(/[^\S\n]+/g, ' ');
  onInput(); showToast('연속 공백을 1칸으로 정리했습니다.');
}
function utilRemoveBlankLines() {
  textarea.value = textarea.value.replace(/^\s*\n/gm, '').trim();
  onInput(); showToast('불필요한 빈 줄을 제거했습니다.');
}
function utilTrim() {
  textarea.value = textarea.value.trim();
  onInput(); showToast('앞뒤 공백을 제거했습니다.');
}
function utilToUpper() {
  textarea.value = textarea.value.toUpperCase();
  onInput(); showToast('대문자로 변환했습니다.');
}
function utilToLower() {
  textarea.value = textarea.value.toLowerCase();
  onInput(); showToast('소문자로 변환했습니다.');
}
function utilRemoveSpecial() {
  textarea.value = textarea.value.replace(/[^\w\sㄱ-힣]/g, '');
  onInput(); showToast('특수문자를 제거했습니다.');
}
function utilCopy() {
  if (!textarea.value) { showToast('복사할 텍스트가 없습니다.'); return; }
  navigator.clipboard.writeText(textarea.value).then(() => showToast('📋 클립보드에 복사되었습니다.'));
}
function utilClear() {
  if (!textarea.value) return;
  if (confirm('전체 텍스트를 지우시겠습니까?')) {
    textarea.value = '';
    onInput();
    showToast('텍스트를 지웠습니다.');
  }
}
function utilSample() {
  const sample = `안녕하세요. 오늘은 날씨가 맑네요.
이 검사기를 사용하면 글자수와 맞춤법을 동시에 확인할 수 있어요.

예를 들어, "됬다", "몇일", "역활", "금새", "어의없다" 같은 자주 틀리는 맞춤법을 자동으로 감지합니다.
가장 최고의 글쓰기를 위해 노력해보세요.

반드시 확인해야 할 사항이 있습니다. 문장부호가 틀린 경우 (예: 열린 괄호만 있거나, 중복 문장부호!! 등) 도 잡아냅니다.`;
  textarea.value = sample;
  onInput();
  showToast('예시 텍스트를 불러왔습니다.');
}

// ── Toast ──────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

// ── 테마 ───────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  themeToggleBtn.textContent = saved === 'dark' ? '☀️' : '🌙';
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
}

// ── 메인 입력 핸들러 ───────────────────────────
let debounceTimer = null;
function onInput() {
  const text = textarea.value;
  const s = calcStats(text);
  renderStats(s);
  renderProgress(s.noSpace);

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const issues = runAllChecks(text);
    renderIssues(issues);
  }, 300);
}

// ── 이벤트 바인딩 ─────────────────────────────
textarea.addEventListener('input', onInput);
goalInput.addEventListener('input', () => {
  const text = textarea.value;
  const s = calcStats(text);
  renderProgress(s.noSpace);
});
themeToggleBtn.addEventListener('click', toggleTheme);

// 바이트 모드 라디오
document.querySelectorAll('input[name="byteMode"]').forEach(radio => {
  radio.addEventListener('change', e => {
    byteMode = e.target.value;
    onInput();
  });
});

// 유틸 버튼
document.getElementById('btn-multi-space').addEventListener('click', utilMultiSpaceToOne);
document.getElementById('btn-remove-blank').addEventListener('click', utilRemoveBlankLines);
document.getElementById('btn-trim').addEventListener('click', utilTrim);
document.getElementById('btn-upper').addEventListener('click', utilToUpper);
document.getElementById('btn-lower').addEventListener('click', utilToLower);
document.getElementById('btn-remove-special').addEventListener('click', utilRemoveSpecial);
document.getElementById('btn-copy').addEventListener('click', utilCopy);
document.getElementById('btn-clear').addEventListener('click', utilClear);
document.getElementById('btn-sample').addEventListener('click', utilSample);
document.getElementById('btn-fix-all').addEventListener('click', applyAllFixes);
document.getElementById('btn-check').addEventListener('click', () => {
  const issues = runAllChecks(textarea.value);
  renderIssues(issues);
  showToast(`🔍 검사 완료 — ${issues.length}개 항목 발견`);
});

// ── 초기화 ─────────────────────────────────────
initTheme();
onInput();
