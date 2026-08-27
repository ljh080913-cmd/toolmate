// ==========================================================================
// ToolMate Common Script v6 - 대한민국 최강 35종 황금 포트폴리오
// ==========================================================================

const ALL_TOOLS = [
  {
    "name": "💰 실업급여 계산기",
    "desc": "2026년 최신 구직급여 수급액 및 지급일수 계산",
    "path": "실업급여 계산기/index.html",
    "cat": "finance",
    "badge": "2026 최신",
    "related": [
      "실 수령액 계산기",
      "4대보험료 계산기",
      "퇴직금 계산기"
    ]
  },
  {
    "name": "💸 연봉 실수령액 계산기",
    "desc": "2026년 비과세 식대 및 4대보험 공제 후 실수령액",
    "path": "실 수령액 계산기/index.html",
    "cat": "finance",
    "badge": "인기 1위",
    "related": [
      "실업급여 계산기",
      "4대보험료 계산기",
      "퇴직금 계산기"
    ]
  },
  {
    "name": "📊 4대보험료 계산기",
    "desc": "국민연금·건강·장기요양·고용 근로자/사업주 분담금",
    "path": "4대보험료 계산기/index.html",
    "cat": "finance",
    "badge": "필수",
    "related": [
      "실 수령액 계산기",
      "실업급여 계산기",
      "주휴수당 및 알바 월급 계산기"
    ]
  },
  {
    "name": "💼 퇴직금 계산기",
    "desc": "근로기준법 3개월 평균임금 기준 세전/세후 퇴직금",
    "path": "퇴직금 계산기/index.html",
    "cat": "finance",
    "badge": "법정 기준",
    "related": [
      "실업급여 계산기",
      "실 수령액 계산기",
      "퇴사 및 백수 생존일수 계산기"
    ]
  },
  {
    "name": "📋 연말정산 환급금 계산기",
    "desc": "소득공제·세액공제 시뮬레이션 및 13월의 월급 환급액",
    "path": "연말정산 계산기/index.html",
    "cat": "finance",
    "badge": "절세 꿀팁",
    "related": [
      "실 수령액 계산기",
      "가족 증여세 및 증여공제 계산기",
      "부가세 및 원천징수 계산기"
    ]
  },
  {
    "name": "🧾 부가세 & 3.3% 원천징수",
    "desc": "프리랜서 3.3% 환급액 및 일반/간이과세자 부가세",
    "path": "부가세 및 원천징수 계산기/index.html",
    "cat": "finance",
    "badge": "프리랜서",
    "related": [
      "실 수령액 계산기",
      "간이 영수증 및 견적서",
      "연말정산 계산기"
    ]
  },
  {
    "name": "💵 주휴수당 & 알바 월급",
    "desc": "주 15시간 이상 주휴수당 및 2026 최저시급(10,320원)",
    "path": "주휴수당 및 알바 월급 계산기/index.html",
    "cat": "finance",
    "badge": "알바 필수",
    "related": [
      "실 수령액 계산기",
      "4대보험료 계산기",
      "연차 일수 및 연차수당 계산기"
    ]
  },
  {
    "name": "👵 국민연금 예상 수령액",
    "desc": "가입 기간 및 소득월액별 만 65세 예상 노령연금",
    "path": "국민연금 예상 수령액 계산기/index.html",
    "cat": "finance",
    "badge": "노후 대비",
    "related": [
      "퇴직금 계산기",
      "실 수령액 계산기",
      "4대보험료 계산기"
    ]
  },
  {
    "name": "🎁 가족 증여세 & 증여공제",
    "desc": "배우자(6억)·직계존비속(5천만) 10년 합산 공제 세액",
    "path": "가족 증여세 및 증여공제 계산기/index.html",
    "cat": "finance",
    "badge": "절세",
    "related": [
      "부동산 복비 및 취득세 계산기",
      "연말정산 계산기",
      "대출 이자 계산기"
    ]
  },
  {
    "name": "🌴 연차 일수 & 수당 계산기",
    "desc": "입사일/회계연도 기준 잔여 연차 일수 및 미사용 수당",
    "path": "연차 일수 및 연차수당 계산기/index.html",
    "cat": "finance",
    "badge": "직장인",
    "related": [
      "육아휴직 및 출산휴가 급여 계산기",
      "퇴직금 계산기",
      "실업급여 계산기"
    ]
  },
  {
    "name": "👶 육아휴직 & 출산휴가 급여",
    "desc": "통상임금 80% 고용보험 상하한액 월 지급액 계산",
    "path": "육아휴직 및 출산휴가 급여 계산기/index.html",
    "cat": "finance",
    "badge": "정부 지원",
    "related": [
      "연차 일수 및 연차수당 계산기",
      "실 수령액 계산기",
      "실업급여 계산기"
    ]
  },
  {
    "name": "🏃 퇴사 후 백수 생존일수",
    "desc": "통장 잔고 + 퇴직금으로 다음 이직까지 버틸 수 있는 기간",
    "path": "퇴사 및 백수 생존일수 계산기/index.html",
    "cat": "finance",
    "badge": "퇴사 준비",
    "related": [
      "실업급여 계산기",
      "퇴직금 계산기",
      "실 수령액 계산기"
    ]
  },
  {
    "name": "🏡 주택청약 가점 계산기",
    "desc": "무주택기간(32점)·부양가족(35점)·통장가입(17점) 84점 만점",
    "path": "주택청약 가점 계산기/index.html",
    "cat": "realestate",
    "badge": "청약 필수",
    "related": [
      "부동산 복비 및 취득세 계산기",
      "대출 이자 계산기",
      "아파트 평수 및 단위 환산기"
    ]
  },
  {
    "name": "🏦 대출 이자 & 상환 계산기",
    "desc": "원리금균등·원금균등·만기일시 총 이자 및 월 상환표",
    "path": "대출 이자 계산기/index.html",
    "cat": "realestate",
    "badge": "금융 필수",
    "related": [
      "예적금 복리 계산기",
      "주택청약 가점 계산기",
      "부동산 복비 및 취득세 계산기"
    ]
  },
  {
    "name": "🏘️ 부동산 복비 & 취득세",
    "desc": "매매·전월세 중개보수 상한요율 및 주택수별 취득세",
    "path": "부동산 복비 및 취득세 계산기/index.html",
    "cat": "realestate",
    "badge": "이사/계약",
    "related": [
      "가족 증여세 및 증여공제 계산기",
      "대출 이자 계산기",
      "주택청약 가점 계산기"
    ]
  },
  {
    "name": "📈 예적금 복리이자 계산기",
    "desc": "단리 vs 월복리 이자 차이 및 15.4% 이자과세 실지급액",
    "path": "예적금 복리 계산기/index.html",
    "cat": "realestate",
    "badge": "재테크",
    "related": [
      "청년도약계좌 만기 수령액 계산기",
      "대출 이자 계산기",
      "주식 물타기 평단가 계산기"
    ]
  },
  {
    "name": "🇰🇷 청년도약계좌 만기 계산기",
    "desc": "5년 만기 정부기여금(최대 6%) + 비과세 최종 5,000만원",
    "path": "청년도약계좌 만기 수령액 계산기/index.html",
    "cat": "realestate",
    "badge": "청년 꿀혜택",
    "related": [
      "장병내일준비적금 및 군인 월급 계산기",
      "예적금 복리 계산기",
      "실 수령액 계산기"
    ]
  },
  {
    "name": "🎖️ 군인 월급 & 장병내일적금",
    "desc": "2026년 병장 월급 + 매칭지원금 100% 전역 수령액",
    "path": "장병내일준비적금 및 군인 월급 계산기/index.html",
    "cat": "realestate",
    "badge": "군인 필수",
    "related": [
      "디데이 및 전역일 계산기",
      "청년도약계좌 만기 수령액 계산기",
      "예적금 복리 계산기"
    ]
  },
  {
    "name": "✈️ 해외직구 관세 & 부가세",
    "desc": "미국 $200 / 일반 $150 면세 한도 및 품목별 관부가세",
    "path": "해외직구 관세 및 부가세 계산기/index.html",
    "cat": "realestate",
    "badge": "직구 필수",
    "related": [
      "실시간 환율 및 환전 우대 계산기",
      "부가세 및 원천징수 계산기",
      "자동차세 및 차량 취득세 계산기"
    ]
  },
  {
    "name": "💱 실시간 환율 & 환전 우대",
    "desc": "USD, JPY, EUR, CNY 환전 수수료 우대율 계산",
    "path": "실시간 환율 및 환전 우대 계산기/index.html",
    "cat": "realestate",
    "badge": "해외여행",
    "related": [
      "해외직구 관세 및 부가세 계산기",
      "예적금 복리 계산기",
      "주식 물타기 평단가 계산기"
    ]
  },
  {
    "name": "📉 주식 물타기 평단가 계산기",
    "desc": "추가 매수 시 낮아지는 평단가 및 탈출 필요 상승률",
    "path": "주식 물타기 평단가 계산기/index.html",
    "cat": "realestate",
    "badge": "주식 투자",
    "related": [
      "예적금 복리 계산기",
      "대출 이자 계산기",
      "실시간 환율 및 환전 우대 계산기"
    ]
  },
  {
    "name": "🚗 자동차세 & 차량 취득세",
    "desc": "배기량별 연간 자동차세 및 신차/중고차 등록세 취득세",
    "path": "자동차세 및 차량 취득세 계산기/index.html",
    "cat": "realestate",
    "badge": "차량 구매",
    "related": [
      "부동산 복비 및 취득세 계산기",
      "대출 이자 계산기",
      "부가세 및 원천징수 계산기"
    ]
  },
  {
    "name": "🎂 만 나이 계산기",
    "desc": "만 나이 통일법 완벽 적용 및 세는 나이·연 나이 동시 비교",
    "path": "만 나이 계산기/index.html",
    "cat": "life",
    "badge": "법적 나이",
    "related": [
      "디데이 및 전역일 계산기",
      "기초대사량 및 칼로리 계산기",
      "수면 사이클 계산기"
    ]
  },
  {
    "name": "⏳ D-Day & 전역일 계산기",
    "desc": "시험, 기념일, 군대 전역일 복무율 퍼센트 실시간 계산",
    "path": "디데이 및 전역일 계산기/index.html",
    "cat": "life",
    "badge": "디데이",
    "related": [
      "만 나이 계산기",
      "장병내일준비적금 및 군인 월급 계산기",
      "수면 사이클 계산기"
    ]
  },
  {
    "name": "🥗 기초대사량(BMR) & 칼로리",
    "desc": "미플린 공식 기반 하루 유지 칼로리 및 다이어트 목표",
    "path": "기초대사량 및 칼로리 계산기/index.html",
    "cat": "life",
    "badge": "헬스/다이어트",
    "related": [
      "만 나이 계산기",
      "수면 사이클 계산기",
      "디데이 및 전역일 계산기"
    ]
  },
  {
    "name": "💤 수면 사이클 & 기상시간",
    "desc": "90분 렘수면 주기 기반 뇌가 개운하게 일어나는 최적 시간",
    "path": "수면 사이클 계산기/index.html",
    "cat": "life",
    "badge": "갓생 수면",
    "related": [
      "기초대사량 및 칼로리 계산기",
      "만 나이 계산기",
      "알코올 해독 및 숙취 시간 계산기"
    ]
  },
  {
    "name": "🍺 알코올 해독 & 숙취시간",
    "desc": "소주·맥주 음주량 및 체중별 숙취 해소 및 운전 가능 시간",
    "path": "알코올 해독 및 숙취 시간 계산기/index.html",
    "cat": "life",
    "badge": "음주 필수",
    "related": [
      "수면 사이클 계산기",
      "차수별 더치페이 복합 정산기",
      "기초대사량 및 칼로리 계산기"
    ]
  },
  {
    "name": "📐 아파트 평수 ↔ ㎡ 환산",
    "desc": "전용면적 59㎡, 84㎡를 국민 평형(25평, 34평)으로 즉시 변환",
    "path": "아파트 평수 및 단위 환산기/index.html",
    "cat": "life",
    "badge": "부동산",
    "related": [
      "부동산 복비 및 취득세 계산기",
      "주택청약 가점 계산기",
      "대출 이자 계산기"
    ]
  },
  {
    "name": "✍️ 글자 수 & 맞춤법 검사기",
    "desc": "공백 포함/제외 글자 수, 바이트, 자소서 글자수 실시간 체크",
    "path": "글자 수 세기/index.html",
    "cat": "media",
    "badge": "자소서 필수",
    "related": [
      "간이 영수증 및 견적서",
      "QR코드 생성기",
      "이미지 용량 줄이기"
    ]
  },
  {
    "name": "📑 PDF 병합 & 분할 툴킷",
    "desc": "여러 PDF 파일 하나로 합치기, 페이지 추출 및 분할",
    "path": "PDF 도구 모음/index.html",
    "cat": "media",
    "badge": "문서 도구",
    "related": [
      "이미지 용량 줄이기",
      "QR코드 생성기",
      "간이 영수증 및 견적서"
    ]
  },
  {
    "name": "🖼️ 이미지 압축 & WEBP 변환",
    "desc": "화질 손실 없이 이미지 용량 80% 압축 및 WebP 변환",
    "path": "이미지 용량 줄이기/index.html",
    "cat": "media",
    "badge": "용량 다이어트",
    "related": [
      "PDF 도구 모음",
      "QR코드 생성기",
      "글자 수 세기"
    ]
  },
  {
    "name": "📱 QR코드 & 바코드 생성기",
    "desc": "URL, 와이파이, 텍스트 QR코드 즉시 제작 및 고화질 다운로드",
    "path": "QR코드 생성기/index.html",
    "cat": "media",
    "badge": "QR 제작",
    "related": [
      "이미지 용량 줄이기",
      "PDF 도구 모음",
      "간이 영수증 및 견적서"
    ]
  },
  {
    "name": "🧾 간이영수증 & 견적서 양식",
    "desc": "공급가액·세액 자동 계산 영수증 작성 및 즉시 인쇄/PDF 저장",
    "path": "간이 영수증 및 견적서/index.html",
    "cat": "media",
    "badge": "사업자 양식",
    "related": [
      "부가세 및 원천징수 계산기",
      "QR코드 생성기",
      "PDF 도구 모음"
    ]
  },
  {
    "name": "⏱️ 뽀모도로 타이머 & 백색소음",
    "desc": "25분 몰입 + 5분 휴식 타이머와 집중력 향상 백색소음",
    "path": "뽀모도로 및 백색소음/index.html",
    "cat": "media",
    "badge": "공부/업무",
    "related": [
      "글자 수 세기",
      "수면 사이클 계산기",
      "디데이 및 전역일 계산기"
    ]
  },
  {
    "name": "💬 카톡 대화 호감도 분석기",
    "desc": "대화 내용 붙여넣기로 썸/그린라이트 4대 지표 즉시 진단",
    "path": "카카오톡 대화 호감도 분석기/index.html",
    "cat": "viral",
    "badge": "SNS 화제",
    "related": [
      "만 나이 계산기",
      "배달비 n빵 및 정산 계산기",
      "랜덤 룰렛 및 사다리타기"
    ]
  },
  {
    "name": "✨ 인스타 폰트 생성기",
    "desc": "인스타 프로필·스토리에 쓰는 20여 가지 특수 폰트 복사",
    "path": "인스타 폰트 생성기/index.html",
    "cat": "viral",
    "badge": "인스타 필수",
    "related": [
      "글자 수 세기",
      "QR코드 생성기",
      "카카오톡 대화 호감도 분석기"
    ]
  },
  {
    "name": "🎰 랜덤 룰렛 & 사다리타기",
    "desc": "점심 메뉴 고르기, 벌칙 정하기, 커피 내기 회전 룰렛",
    "path": "랜덤 룰렛 및 사다리타기/index.html",
    "cat": "viral",
    "badge": "내기 꿀잼",
    "related": [
      "배달비 n빵 및 정산 계산기",
      "차수별 더치페이 복합 정산기",
      "로또 번호 생성기"
    ]
  },
  {
    "name": "🍗 배달비 n빵 & 정산 계산기",
    "desc": "메뉴별 가격이 달라도 배달팁까지 공평하게 1원 단위 정산",
    "path": "배달비 n빵 및 정산 계산기/index.html",
    "cat": "viral",
    "badge": "단톡방 필수",
    "related": [
      "차수별 더치페이 복합 정산기",
      "로또 번호 생성기",
      "카카오톡 대화 호감도 분석기"
    ]
  },
  {
    "name": "🍻 차수별 더치페이 복합 정산",
    "desc": "1차/2차/3차 참석자별 맞춤 차등 정산 및 카톡 전송 문구",
    "path": "차수별 더치페이 복합 정산기/index.html",
    "cat": "viral",
    "badge": "회식 정산",
    "related": [
      "배달비 n빵 및 정산 계산기",
      "알코올 해독 및 숙취 시간 계산기",
      "랜덤 룰렛 및 사다리타기"
    ]
  },
  {
    "name": "🎱 로또 6/45 스마트 생성기",
    "desc": "역대 최다 당첨 번호 통계 분석 가중치 행운 번호 추첨",
    "path": "로또 번호 생성기/index.html",
    "cat": "viral",
    "badge": "행운 추첨",
    "related": [
      "배달비 n빵 및 정산 계산기",
      "차수별 더치페이 복합 정산기",
      "만 나이 계산기"
    ]
  }
];

const ADSENSE_CLIENT = "ca-pub-8342530091491582";
const ADSENSE_SLOTS = { top: "1111111111", mid: "2222222222", bottom: "3333333333" };

(function () {
  const savedTheme = localStorage.getItem("toolmate_theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", savedTheme);

  document.addEventListener("DOMContentLoaded", () => {
    updateThemeToggleIcon(savedTheme);
    renderDropdownMenu();
    recordRecentTool();
    renderMainQuickBar();
    initFormAutoSave();
    injectTopAd();
    injectRelatedTools();
    injectShareSection();
    injectBottomAd();

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "light";
        const next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("toolmate_theme", next);
        updateThemeToggleIcon(next);
      });
    }

    document.addEventListener("click", (e) => {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (!menu.parentElement.contains(e.target)) menu.classList.remove("show");
      });
    });
  });

  function updateThemeToggleIcon(theme) {
    const btn = document.getElementById("themeToggleBtn");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.title = theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환";
    }
  }

  function renderDropdownMenu() {
    const menu = document.getElementById("dropdownMenu");
    if (!menu) return;
    const brandEl = document.querySelector("a.gnb-brand");
    const prefix = (brandEl && brandEl.getAttribute("href").startsWith("../")) ? "../" : "";
    const cats = [
      { key: "finance", label: "💰 금융 & 세금 (9)" },
      { key: "realestate", label: "🏠 부동산 & 재테크 (10)" },
      { key: "life", label: "💼 직장 & 생활 & 건강 (6)" },
      { key: "media", label: "🛠️ 생산성 & 업무 (5)" },
      { key: "viral", label: "🎉 바이럴 & 꿀잼 (5)" },
    ];
    menu.innerHTML = `<a href="${prefix}index.html" style="border-bottom:1px solid var(--border);margin-bottom:4px;font-weight:800;color:var(--primary);">🏠 ToolMate 홈으로 (전체 35종)</a>`;
    cats.forEach(cat => {
      const filtered = ALL_TOOLS.filter(t => t.cat === cat.key);
      if (filtered.length === 0) return;
      const grp = document.createElement("div");
      grp.style.cssText = "padding:6px 12px 2px;font-size:0.72rem;font-weight:800;color:var(--text-subtle);letter-spacing:0.05em;";
      grp.textContent = cat.label;
      menu.appendChild(grp);
      filtered.forEach(tool => {
        const a = document.createElement("a");
        a.href = prefix + tool.path;
        a.textContent = tool.name;
        if (window.location.pathname.includes(decodeURIComponent(tool.path.split("/")[0]))) a.className = "active";
        menu.appendChild(a);
      });
    });
  }

  function recordRecentTool() {
    const currentPath = decodeURIComponent(window.location.pathname);
    const matched = ALL_TOOLS.find(t => currentPath.includes(t.path.split("/")[0]));
    if (!matched) return;

    let recent = JSON.parse(localStorage.getItem("toolmate_recent") || "[]");
    recent = recent.filter(r => r.path !== matched.path);
    recent.unshift({ name: matched.name, path: matched.path });
    if (recent.length > 5) recent.pop();
    localStorage.setItem("toolmate_recent", JSON.stringify(recent));
  }

  function renderMainQuickBar() {
    const bar = document.getElementById("userQuickBar");
    if (!bar) return;

    const recent = JSON.parse(localStorage.getItem("toolmate_recent") || "[]");
    const favs = JSON.parse(localStorage.getItem("toolmate_favs") || "[]");

    if (recent.length === 0 && favs.length === 0) {
      bar.style.display = "none";
      return;
    }

    bar.style.display = "block";
    let html = `<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin-bottom:16px;">`;
    
    if (favs.length > 0) {
      html += `<span style="font-size:0.78rem;font-weight:800;color:#f59e0b;">⭐ 내 즐겨찾기:</span>`;
      favs.forEach(f => {
        html += `<a href="${f.path}" class="quick-chip fav"><span>${f.name}</span></a>`;
      });
      html += `<span style="color:var(--border);margin:0 4px;">|</span>`;
    }

    if (recent.length > 0) {
      html += `<span style="font-size:0.78rem;font-weight:800;color:var(--text-subtle);">🕒 최근 사용:</span>`;
      recent.slice(0, 4).forEach(r => {
        html += `<a href="${r.path}" class="quick-chip"><span>${r.name}</span></a>`;
      });
    }
    html += `</div>`;
    bar.innerHTML = html;
  }

  function initFormAutoSave() {
    const isTool = /계산기|도구 모음|글자 수/.test(decodeURIComponent(window.location.pathname));
    if (!isTool) return;

    const pageKey = "tm_form_" + decodeURIComponent(window.location.pathname.split("/")[1] || "root");
    const inputs = document.querySelectorAll("input:not([type=file]):not([readonly]), select, textarea");
    if (inputs.length === 0) return;

    try {
      const savedData = JSON.parse(localStorage.getItem(pageKey) || "{}");
      inputs.forEach(inp => {
        if (inp.id && savedData[inp.id] !== undefined) {
          inp.value = savedData[inp.id];
        }
      });
      if (typeof calculate === "function") calculate();
      else if (typeof calcGiftTax === "function") calcGiftTax();
      else if (typeof calcParentalLeave === "function") calcParentalLeave();
      else if (typeof calcPartTime === "function") calcPartTime();
      else if (typeof calcTariff === "function") calcTariff();
      else if (typeof calcFX === "function") calcFX();
      else if (typeof calcArmy === "function") calcArmy();
      else if (typeof calcAlcohol === "function") calcAlcohol();
      else if (typeof calcSurvive === "function") calcSurvive();
      else if (typeof calcAnnual === "function") calcAnnual();
      else if (typeof calcYouth === "function") calcYouth();
      else if (typeof calcPension === "function") calcPension();
      else if (typeof calcStock === "function") calcStock();
      else if (typeof calcCar === "function") calcCar();
    } catch (e) {}

    inputs.forEach(inp => {
      inp.addEventListener("input", () => {
        const formData = {};
        inputs.forEach(i => { if (i.id) formData[i.id] = i.value; });
        localStorage.setItem(pageKey, JSON.stringify(formData));
      });
    });
  }

  function injectTopAd() {
    const isPolicy = /privacy|terms|contact|about/.test(window.location.pathname);
    if (isPolicy) return;
    const main = document.querySelector("main.container");
    if (!main) return;
    if (document.querySelector(".adsense-top")) return;
    const adDiv = document.createElement("div");
    adDiv.className = "adsense-slot adsense-top";
    adDiv.innerHTML = `
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="${ADSENSE_CLIENT}"
           data-ad-slot="${ADSENSE_SLOTS.top}"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
    `;
    main.insertBefore(adDiv, main.firstChild);
  }

  function injectRelatedTools() {
    const isPolicy = /privacy|terms|contact|about/.test(window.location.pathname);
    const isIndex = /index\.html$|\/\s*$/.test(window.location.pathname.split("/").pop() || "") && !document.querySelector(".page-header");
    if (isPolicy || isIndex) return;

    const targetEl = document.querySelector(".seo-article") || document.querySelector(".card-padded") || document.querySelector("main.container");
    if (!targetEl || document.querySelector(".related-tools-section")) return;

    const rawPath = decodeURIComponent(window.location.pathname).replace(/\\/g, "/");
    let currentTool = ALL_TOOLS.find(t => rawPath.includes(t.path.split("/")[0]));
    
    // 추천 도구 3개 선정 (지정된 related 또는 같은 카테고리 도구)
    let relatedTools = [];
    if (currentTool && currentTool.related && currentTool.related.length > 0) {
      relatedTools = ALL_TOOLS.filter(t => currentTool.related.some(r => t.name.includes(r) || t.path.includes(r)));
    }
    
    if (relatedTools.length < 3 && currentTool) {
      const sameCat = ALL_TOOLS.filter(t => t.cat === currentTool.cat && t.path !== currentTool.path);
      sameCat.forEach(sc => {
        if (relatedTools.length < 3 && !relatedTools.includes(sc)) relatedTools.push(sc);
      });
    }

    if (relatedTools.length === 0) {
      relatedTools = ALL_TOOLS.slice(0, 3);
    }

    const brandEl = document.querySelector("a.gnb-brand");
    const prefix = (brandEl && brandEl.getAttribute("href").startsWith("../")) ? "../" : "";

    const relDiv = document.createElement("section");
    relDiv.className = "related-tools-section";
    relDiv.innerHTML = `
      <h3 class="related-tools-title">🔗 함께 자주 쓰는 추천 도구</h3>
      <div class="related-tools-grid">
        ${relatedTools.slice(0, 3).map(t => `
          <a href="${prefix}${t.path}" class="related-tool-card">
            <span class="rtc-icon">${t.name.split(" ")[0]}</span>
            <span class="rtc-name">${t.name.replace(/^\S+\s/, "")}</span>
            <span class="rtc-arrow">→</span>
          </a>
        `).join("")}
      </div>
      <div class="adsense-slot adsense-mid">
        <ins class="adsbygoogle"
             style="display:block;text-align:center"
             data-ad-client="${ADSENSE_CLIENT}"
             data-ad-slot="${ADSENSE_SLOTS.mid}"
             data-ad-format="fluid"
             data-ad-layout="in-article"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
      </div>
    `;

    if (document.querySelector(".seo-article")) {
      document.querySelector(".seo-article").before(relDiv);
    } else {
      targetEl.appendChild(relDiv);
    }
  }

  function injectBottomAd() {
    const isPolicy = /privacy|terms|contact|about/.test(window.location.pathname);
    if (isPolicy) return;
    const seoArticle = document.querySelector(".seo-article");
    if (!seoArticle || document.querySelector(".adsense-bottom")) return;
    const adDiv = document.createElement("div");
    adDiv.className = "adsense-slot adsense-bottom";
    adDiv.innerHTML = `
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="${ADSENSE_CLIENT}"
           data-ad-slot="${ADSENSE_SLOTS.bottom}"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
    `;
    seoArticle.after(adDiv);
  }

  function injectShareSection() {
    if (document.querySelector(".share-section")) return;
    const isPolicy = /privacy|terms|contact|about/.test(window.location.pathname);
    if (isPolicy) return;
    const target = document.querySelector(".card-padded") || document.querySelector("main.container");
    if (!target) return;
    const shareDiv = document.createElement("div");
    shareDiv.className = "share-section";
    shareDiv.innerHTML = `
      <div class="share-title">📢 계산 결과를 친구에게 공유하거나 문서로 저장하세요!</div>
      <div class="share-buttons">
        <button type="button" class="share-btn share-btn-fav" onclick="toggleCurrentToolFavorite()">⭐ 즐겨찾기</button>
        <button type="button" class="share-btn share-btn-print" onclick="window.print()">🖨️ A4 인쇄 / PDF</button>
        <button type="button" class="share-btn share-btn-img" onclick="downloadResultImage()">🖼️ 이미지 저장</button>
        <button type="button" class="share-btn share-btn-kakao" onclick="shareToKakao()">💬 카톡 공유</button>
        <button type="button" class="share-btn share-btn-insta" onclick="shareToInstagram()">📸 인스타</button>
        <button type="button" class="share-btn share-btn-copy" onclick="copyShareUrl()">🔗 링크 복사</button>
      </div>
    `;
    const seoArticle = document.querySelector(".seo-article");
    if (seoArticle) seoArticle.before(shareDiv);
    else target.appendChild(shareDiv);
    if (!document.getElementById("shareToast")) {
      const t = document.createElement("div");
      t.id = "shareToast"; t.className = "share-toast";
      document.body.appendChild(t);
    }
  }

  function loadExternalLibraries() {
    if (!window.html2canvas) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }
  loadExternalLibraries();
})();

function toggleCurrentToolFavorite() {
  const currentPath = decodeURIComponent(window.location.pathname);
  const matched = ALL_TOOLS.find(t => currentPath.includes(t.path.split("/")[0]));
  if (!matched) return;

  let favs = JSON.parse(localStorage.getItem("toolmate_favs") || "[]");
  const exists = favs.some(f => f.path === matched.path);
  if (exists) {
    favs = favs.filter(f => f.path !== matched.path);
    showToast("⭐ 즐겨찾기에서 제거되었습니다.");
  } else {
    favs.push({ name: matched.name, path: matched.path });
    showToast("⭐ 내 즐겨찾기에 추가되었습니다! (메인 상단 확인)");
  }
  localStorage.setItem("toolmate_favs", JSON.stringify(favs));
}

function downloadResultImage() {
  const target = document.querySelector(".result-hero") ||
                 document.querySelector(".report-card") ||
                 document.querySelector(".survive-hero") ||
                 document.querySelector(".big-result") ||
                 document.querySelector(".receipt-box") ||
                 document.querySelector(".card-padded");

  if (!target) {
    showToast("저장할 결과 화면이 없습니다.");
    return;
  }

  showToast("📸 결과 이미지를 생성하고 있습니다...");

  const runCapture = () => {
    window.html2canvas(target, {
      scale: 2,
      useCORS: true,
      backgroundColor: document.documentElement.getAttribute("data-theme") === "dark" ? "#1e293b" : "#ffffff",
    }).then(canvas => {
      const link = document.createElement("a");
      const pageTitle = document.title.split("|")[0].trim().replace(/[^a-zA-Z0-9가-힣]/g, "_");
      link.download = `ToolMate_${pageTitle}_결과.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      showToast("🎉 결과 이미지가 다운로드되었습니다!");
    }).catch(err => {
      console.error(err);
      showToast("이미지 저장 중 오류가 발생했습니다.");
    });
  };

  if (window.html2canvas) {
    runCapture();
  } else {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";
    s.onload = runCapture;
    document.head.appendChild(s);
  }
}

function showToast(msg) {
  let t = document.getElementById("shareToast");
  if (!t) { t = document.createElement("div"); t.id="shareToast"; t.className="share-toast"; document.body.appendChild(t); }
  t.innerHTML = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3200);
}

function shareToKakao() {
  const title = document.title.split("|")[0].trim();
  const shareText = `[ToolMate] ${title}\n설치 없이 브라우저에서 바로 쓰는 무료 계산기!\n${window.location.href}`;
  if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    navigator.share({ title, text: shareText, url: window.location.href })
      .catch(() => copyShareUrl("💬 카카오톡 공유 문구가 복사되었습니다! 단톡방에 붙여넣으세요."));
  } else {
    copyShareUrl("💬 링크가 복사되었습니다! 카카오톡 단톡방에 Ctrl+V로 붙여넣으세요.");
  }
}

function shareToInstagram() {
  const title = document.title.split("|")[0].trim();
  if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    navigator.share({ title, text: `${title} #ToolMate #무료계산기`, url: window.location.href })
      .catch(() => copyShareUrl("📸 링크가 복사되었습니다! 인스타 스토리 링크 스티커에 붙여넣으세요."));
  } else {
    copyShareUrl("📸 링크가 복사되었습니다! 인스타그램 스토리 또는 DM에 붙여넣으세요.");
  }
}

function copyShareUrl(customMsg) {
  const url = window.location.href;
  const msg = customMsg || "🎉 링크가 복사되었습니다!";
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => showToast(msg)).catch(() => fallbackClipboard(url, msg));
  } else { fallbackClipboard(url, msg); }
}

function fallbackClipboard(text, msg) {
  const el = document.createElement("textarea");
  el.value = text; el.style.cssText = "position:fixed;left:-9999px";
  document.body.appendChild(el); el.select();
  document.execCommand("copy"); document.body.removeChild(el);
  showToast(msg || "🎉 복사되었습니다!");
}

function toggleDropdown() {
  document.getElementById("dropdownMenu")?.classList.toggle("show");
}

function toggleFaq(el) {
  const ans = el.nextElementSibling;
  if (!ans) return;
  ans.classList.toggle('open');
  const icon = el.querySelector('span');
  if (icon) {
    icon.textContent = ans.classList.contains('open') ? '▴' : '▾';
  }
}