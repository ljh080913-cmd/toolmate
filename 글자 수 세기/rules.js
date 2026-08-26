// =============================================
// rules.js - 맞춤법 & 문장부호 검사 규칙
// =============================================

const SPELLING_RULES = [
  // 되/돼 계열
  { pattern: /되요\b/g, replacement: '돼요', message: '"되요" → "돼요"로 써야 합니다.', id: 'sp001' },
  { pattern: /됬/g, replacement: '됐', message: '"됬" → "됐"으로 써야 합니다.', id: 'sp002' },
  { pattern: /되었어요\b/g, replacement: '됐어요', message: '"되었어요" → "됐어요"로 줄여 쓸 수 있습니다.', id: 'sp003', warning: true },
  { pattern: /봬요/g, replacement: '뵈요', message: '"봬요" → "뵈요"로 써야 합니다.', id: 'sp004' },

  // 며칠/몇일
  { pattern: /몇일/g, replacement: '며칠', message: '"몇일" → "며칠"로 써야 합니다.', id: 'sp005' },

  // 어떻게/어떡해
  { pattern: /어떻해/g, replacement: '어떻게', message: '"어떻해" → "어떻게"로 써야 합니다.', id: 'sp006' },
  { pattern: /어떡게/g, replacement: '어떡해', message: '"어떡게" → "어떡해"로 써야 합니다.', id: 'sp007' },

  // 왠/웬
  { pattern: /왠일/g, replacement: '웬일', message: '"왠일" → "웬일"로 써야 합니다.', id: 'sp008' },
  { pattern: /웬지\b/g, replacement: '왠지', message: '"웬지" → "왠지"로 써야 합니다.', id: 'sp009' },

  // 금세/금새
  { pattern: /금새\b/g, replacement: '금세', message: '"금새" → "금세"로 써야 합니다.', id: 'sp010' },

  // 낫다/낳다
  { pattern: /병이\s*낳/g, replacement: '병이 낫', message: '"병이 낳다" → "병이 낫다"로 써야 합니다.', id: 'sp011' },
  { pattern: /빨리\s*낳/g, replacement: '빨리 낫', message: '"빨리 낳다" → "빨리 낫다"로 써야 합니다.', id: 'sp012' },

  // 맞히다/맞추다
  { pattern: /정답을\s*맞추/g, replacement: '정답을 맞히', message: '"정답을 맞추다" → "정답을 맞히다"로 써야 합니다.', id: 'sp013' },

  // 드러나다/들어나다
  { pattern: /들어나다/g, replacement: '드러나다', message: '"들어나다" → "드러나다"로 써야 합니다.', id: 'sp014' },
  { pattern: /들어났/g, replacement: '드러났', message: '"들어났" → "드러났"으로 써야 합니다.', id: 'sp015' },

  // 로서/로써
  // 띄어쓰기 오류
  { pattern: /않해/g, replacement: '안 해', message: '"않해" → "안 해"로 써야 합니다.', id: 'sp016' },
  { pattern: /안되/g, replacement: '안 돼', message: '"안되" → "안 돼"로 써야 합니다.', id: 'sp017' },
  { pattern: /할수있/g, replacement: '할 수 있', message: '"할수있" → "할 수 있"로 써야 합니다.', id: 'sp018' },
  { pattern: /할수없/g, replacement: '할 수 없', message: '"할수없" → "할 수 없"로 써야 합니다.', id: 'sp019' },

  // 이따가/있다가
  { pattern: /있다가\s*(전화|연락|보자|만나)/g, replacement: null, message: '"있다가" → 시간 표현일 경우 "이따가"로 써야 합니다.', id: 'sp020', warning: true },

  // 흐리멍텅/흐리멍덩
  { pattern: /흐리멍텅/g, replacement: '흐리멍덩', message: '"흐리멍텅" → "흐리멍덩"으로 써야 합니다.', id: 'sp021' },

  // 역활/역할
  { pattern: /역활/g, replacement: '역할', message: '"역활" → "역할"로 써야 합니다.', id: 'sp022' },

  // 제(齊)/재
  { pattern: /재미있는\s*만큼/g, replacement: null, message: null, id: 'skip001', skip: true },

  // 일찍이/일찍히
  { pattern: /일찍히/g, replacement: '일찍이', message: '"일찍히" → "일찍이"로 써야 합니다.', id: 'sp023' },

  // 깨끗히/깨끗이
  { pattern: /깨끗히/g, replacement: '깨끗이', message: '"깨끗히" → "깨끗이"로 써야 합니다.', id: 'sp024' },

  // 오랫동안/오래동안
  { pattern: /오래동안/g, replacement: '오랫동안', message: '"오래동안" → "오랫동안"으로 써야 합니다.', id: 'sp025' },

  // 웬만하면/왠만하면
  { pattern: /왠만하면/g, replacement: '웬만하면', message: '"왠만하면" → "웬만하면"으로 써야 합니다.', id: 'sp026' },

  // 어의없다/어이없다
  { pattern: /어의\s*없/g, replacement: '어이 없', message: '"어의없다" → "어이없다"로 써야 합니다.', id: 'sp027' },

  // 뒤처지다/뒤쳐지다
  { pattern: /뒤쳐지/g, replacement: '뒤처지', message: '"뒤쳐지다" → "뒤처지다"로 써야 합니다.', id: 'sp028' },

  // 설레이다/설레다
  { pattern: /설레이/g, replacement: '설레', message: '"설레이다" → "설레다"로 써야 합니다.', id: 'sp029' },

  // 반듯이/반드시
  { pattern: /반듯이\s*(해야|해야만|할)/g, replacement: null, message: '"반듯이"(바르게)와 "반드시"(꼭) 구분이 필요합니다.', id: 'sp030', warning: true },

  // 맞춤법 → 통째로
  { pattern: /통채로/g, replacement: '통째로', message: '"통채로" → "통째로"로 써야 합니다.', id: 'sp031' },

  // 게시(揭示)/계시(啓示)
  { pattern: /게시다/g, replacement: '계시다', message: '"게시다" → "계시다"로 써야 합니다.', id: 'sp032' },

  // ~로서 / ~로써 (도구/수단이면 '로써')
  // 삼가다/삼가하다
  { pattern: /삼가해/g, replacement: '삼가', message: '"삼가해" → "삼가"로 써야 합니다. (삼가하다→삼가다)', id: 'sp033' },

  // 다르다/틀리다 혼용 경보
  { pattern: /틀린\s*(말|것|부분|점)/g, replacement: null, message: '"틀린" → 사실 관계가 다를 때는 "다른"으로 쓰는 것이 정확할 수 있습니다.', id: 'sp034', warning: true },

  // 불필요한 중복 표현 
  { pattern: /미리\s*예방/g, replacement: null, message: '"미리 예방" → "예방"에 미리의 의미가 포함되어 있습니다.', id: 'sp035', warning: true },
  { pattern: /가장\s*최/g, replacement: null, message: '"가장 최~" → "최~"에 가장의 의미가 포함되어 있습니다.', id: 'sp036', warning: true },
  { pattern: /과반수\s*이상/g, replacement: null, message: '"과반수 이상" → "과반수" 또는 "절반 이상"으로 쓰세요.', id: 'sp037', warning: true },
];

const PUNCTUATION_RULES = {
  // 문장부호 쌍 정의
  pairs: [
    { open: '(', close: ')', name: '소괄호' },
    { open: '[', close: ']', name: '대괄호' },
    { open: '{', close: '}', name: '중괄호' },
    { open: '「', close: '」', name: '낫표' },
    { open: '『', close: '』', name: '이중낫표' },
    { open: '"', close: '"', name: '큰따옴표(전각)' },
    { open: '\'', close: '\'', name: '작은따옴표', symmetric: true },
    { open: '"', close: '"', name: '큰따옴표', symmetric: true },
  ],

  // 중복 문장부호 패턴
  duplicate: [
    { pattern: /\.{2,}/g, message: '마침표가 중복되었습니다.', suggestion: '…(말줄임표) 또는 단일 마침표를 사용하세요.' },
    { pattern: /[!]{2,}/g, message: '느낌표가 중복되었습니다.', suggestion: '느낌표는 하나만 사용하세요.' },
    { pattern: /[?]{2,}/g, message: '물음표가 중복되었습니다.', suggestion: '물음표는 하나만 사용하세요.' },
    { pattern: /,{2,}/g, message: '쉼표가 중복되었습니다.', suggestion: '쉼표는 하나만 사용하세요.' },
  ],

  // 문장부호 앞 공백 오류
  beforePunct: {
    pattern: /\s+([.,!?;:])/g,
    message: '문장부호 앞에 공백이 있습니다.',
  },

  // 문장부호 뒤 공백 누락 (단, 따옴표/괄호 닫기 예외)
  afterPunct: {
    pattern: /([.,!?;:])\S/g,
    exceptions: ['...', '..', '.)', '."', '",', '."'],
  }
};

// 불균형 괄호 검사 함수
function checkUnbalancedBrackets(text) {
  const issues = [];
  const stack = [];
  const pairs = PUNCTUATION_RULES.pairs.filter(p => !p.symmetric);

  const openMap = {};
  const closeMap = {};
  pairs.forEach(p => {
    openMap[p.open] = p;
    closeMap[p.close] = p;
  });

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (openMap[ch]) {
      stack.push({ char: ch, index: i, pair: openMap[ch] });
    } else if (closeMap[ch]) {
      if (stack.length === 0 || stack[stack.length - 1].char !== closeMap[ch].open) {
        issues.push({
          index: i,
          length: 1,
          message: `'${ch}' — 짝이 맞는 여는 ${closeMap[ch].name}이 없습니다.`,
          type: 'punctuation',
          severity: 'error'
        });
      } else {
        stack.pop();
      }
    }
  }

  stack.forEach(item => {
    issues.push({
      index: item.index,
      length: 1,
      message: `'${item.char}' — 짝이 맞는 닫는 ${item.pair.name}이 없습니다.`,
      type: 'punctuation',
      severity: 'error'
    });
  });

  return issues;
}

// 중복 문장부호 검사
function checkDuplicatePunct(text) {
  const issues = [];
  PUNCTUATION_RULES.duplicate.forEach(rule => {
    let match;
    const re = new RegExp(rule.pattern.source, 'g');
    while ((match = re.exec(text)) !== null) {
      issues.push({
        index: match.index,
        length: match[0].length,
        message: rule.message,
        suggestion: rule.suggestion,
        type: 'punctuation',
        severity: 'warning'
      });
    }
  });
  return issues;
}

// 문장부호 앞 공백 검사
function checkSpaceBeforePunct(text) {
  const issues = [];
  const re = /\s+([.,!?;:])/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    issues.push({
      index: match.index,
      length: match[0].length,
      original: match[0],
      replacement: match[1],
      message: `'${match[0]}' — 문장부호 앞에 공백이 있습니다.`,
      type: 'punctuation',
      severity: 'warning',
      autofix: true
    });
  }
  return issues;
}

// 맞춤법 검사
function checkSpelling(text) {
  const issues = [];
  SPELLING_RULES.forEach(rule => {
    if (rule.skip) return;
    const re = new RegExp(rule.pattern.source, rule.pattern.flags.includes('g') ? 'g' : 'g');
    let match;
    while ((match = re.exec(text)) !== null) {
      if (!rule.message) continue;
      issues.push({
        index: match.index,
        length: match[0].length,
        original: match[0],
        replacement: rule.replacement ? match[0].replace(new RegExp(rule.pattern.source), rule.replacement) : null,
        message: rule.message,
        type: 'spelling',
        severity: rule.warning ? 'warning' : 'error',
        autofix: !!rule.replacement
      });
    }
  });
  return issues;
}

// 전체 검사 실행
function runAllChecks(text) {
  const all = [
    ...checkUnbalancedBrackets(text),
    ...checkDuplicatePunct(text),
    ...checkSpaceBeforePunct(text),
    ...checkSpelling(text),
  ];
  // 중복 제거 및 정렬
  const seen = new Set();
  const unique = all.filter(i => {
    const key = `${i.index}-${i.length}-${i.message}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return unique.sort((a, b) => a.index - b.index);
}
