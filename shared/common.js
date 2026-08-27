// ==========================================================================
// ToolMate Common Script v6 - 대한민국 최강 35종 황금 포트폴리오
// ==========================================================================

const ALL_TOOLS = [
  // [1. 💰 금융 & 세금 (9종)]
  { name: "💰 실업급여 계산기", path: "실업급여 계산기/index.html", cat: "finance", related: ["실 수령액 계산기","4대보험료 계산기","퇴직금 계산기"] },
  { name: "💸 연봉 실수령액 계산기", path: "실 수령액 계산기/index.html", cat: "finance", related: ["실업급여 계산기","4대보험료 계산기","연말정산 계산기"] },
  { name: "💵 주휴수당 & 알바 월급", path: "주휴수당 및 알바 월급 계산기/index.html", cat: "finance", related: ["실 수령액 계산기","연차 일수 및 연차수당 계산기","4대보험료 계산기"] },
  { name: "🎁 가족 증여세 & 증여공제", path: "가족 증여세 및 증여공제 계산기/index.html", cat: "finance", related: ["부동산 복비 및 취득세 계산기","연말정산 계산기","부가세 및 원천징수 계산기"] },
  { name: "📊 4대보험료 계산기", path: "4대보험료 계산기/index.html", cat: "finance", related: ["실 수령액 계산기","실업급여 계산기","주휴수당 및 알바 월급 계산기"] },
  { name: "💼 법정 퇴직금 계산기", path: "퇴직금 계산기/index.html", cat: "finance", related: ["실업급여 계산기","연차 일수 및 연차수당 계산기","연말정산 계산기"] },
  { name: "📋 연말정산 환급금 모의", path: "연말정산 계산기/index.html", cat: "finance", related: ["실 수령액 계산기","가족 증여세 및 증여공제 계산기","부가세 및 원천징수 계산기"] },
  { name: "🧾 부가세 & 3.3% 계산기", path: "부가세 및 원천징수 계산기/index.html", cat: "finance", related: ["실 수령액 계산기","연말정산 계산기","간이 영수증 및 견적서"] },
  { name: "👵 국민연금 예상 수령액", path: "국민연금 예상 수령액 계산기/index.html", cat: "finance", related: ["퇴직금 계산기","실 수령액 계산기","4대보험료 계산기"] },

  // [2. 🏠 부동산 & 재테크 (10종)]
  { name: "🏡 주택청약 가점 계산기", path: "주택청약 가점 계산기/index.html", cat: "realestate", related: ["부동산 복비 및 취득세 계산기","대출 이자 계산기","아파트 평수 및 단위 환산기"] },
  { name: "🏦 대출 이자 & 상환표", path: "대출 이자 계산기/index.html", cat: "realestate", related: ["예적금 복리 계산기","주택청약 가점 계산기","부동산 복비 및 취득세 계산기"] },
  { name: "🏘️ 부동산 복비 & 취득세", path: "부동산 복비 및 취득세 계산기/index.html", cat: "realestate", related: ["가족 증여세 및 증여공제 계산기","대출 이자 계산기","주택청약 가점 계산기"] },
  { name: "📈 예적금 복리이자 계산기", path: "예적금 복리 계산기/index.html", cat: "realestate", related: ["청년도약계좌 만기 수령액 계산기","대출 이자 계산기","주식 물타기 평단가 계산기"] },
  { name: "🇰🇷 청년도약계좌 만기 계산기", path: "청년도약계좌 만기 수령액 계산기/index.html", cat: "realestate", related: ["장병내일준비적금 및 군인 월급 계산기","예적금 복리 계산기","실 수령액 계산기"] },
  { name: "🎖️ 군인 월급 & 장병적금", path: "장병내일준비적금 및 군인 월급 계산기/index.html", cat: "realestate", related: ["청년도약계좌 만기 수령액 계산기","예적금 복리 계산기","디데이 및 전역일 계산기"] },
  { name: "✈️ 해외직구 관세·부가세", path: "해외직구 관세 및 부가세 계산기/index.html", cat: "realestate", related: ["실시간 환율 및 환전 우대 계산기","부가세 및 원천징수 계산기","자동차세 및 차량 취득세 계산기"] },
  { name: "💱 실시간 환율 & 환전 우대", path: "실시간 환율 및 환전 우대 계산기/index.html", cat: "realestate", related: ["해외직구 관세 및 부가세 계산기","예적금 복리 계산기","주식 물타기 평단가 계산기"] },
  { name: "📉 주식 물타기 평단가", path: "주식 물타기 평단가 계산기/index.html", cat: "realestate", related: ["예적금 복리 계산기","대출 이자 계산기","실시간 환율 및 환전 우대 계산기"] },
  { name: "🚗 자동차세 & 차량 취득세", path: "자동차세 및 차량 취득세 계산기/index.html", cat: "realestate", related: ["부동산 복비 및 취득세 계산기","대출 이자 계산기","부가세 및 원천징수 계산기"] },

  // [3. 💼 직장 & 생활 & 건강 (6종)]
  { name: "👶 육아휴직 & 출산급여", path: "육아휴직 및 출산휴가 급여 계산기/index.html", cat: "life", related: ["연차 일수 및 연차수당 계산기","실 수령액 계산기","실업급여 계산기"] },
  { name: "🌴 연차 일수 & 수당 계산기", path: "연차 일수 및 연차수당 계산기/index.html", cat: "life", related: ["육아휴직 및 출산휴가 급여 계산기","퇴직금 계산기","실업급여 계산기"] },
  { name: "🎂 만 나이 계산기", path: "만 나이 계산기/index.html", cat: "life", related: ["디데이 및 전역일 계산기","기초대사량 및 칼로리 계산기","아파트 평수 및 단위 환산기"] },
  { name: "📐 아파트 평수 ↔ ㎡ 환산", path: "아파트 평수 및 단위 환산기/index.html", cat: "life", related: ["부동산 복비 및 취득세 계산기","주택청약 가점 계산기","글자 수 세기"] },
  { name: "🥗 기초대사량(BMR) & 칼로리", path: "기초대사량 및 칼로리 계산기/index.html", cat: "life", related: ["만 나이 계산기","디데이 및 전역일 계산기","아파트 평수 및 단위 환산기"] },

  // [4. 🛠️ 생산성 & 업무 (5종)]
  { name: "✍️ 글자 수 & 바이트 세기", path: "글자 수 세기/index.html", cat: "media", related: ["간이 영수증 및 견적서","QR코드 생성기","이미지 용량 줄이기"] },
  { name: "📑 PDF 병합 & 분할 툴킷", path: "PDF 도구 모음/index.html", cat: "media", related: ["이미지 용량 줄이기","QR코드 생성기","간이 영수증 및 견적서"] },
  { name: "🖼️ 이미지 압축 & WEBP 변환", path: "이미지 용량 줄이기/index.html", cat: "media", related: ["PDF 도구 모음","QR코드 생성기","글자 수 세기"] },
  { name: "📱 QR코드 & 바코드 생성기", path: "QR코드 생성기/index.html", cat: "media", related: ["이미지 용량 줄이기","PDF 도구 모음","간이 영수증 및 견적서"] },
  { name: "🧾 간이영수증 & 견적서 양식", path: "간이 영수증 및 견적서/index.html", cat: "media", related: ["부가세 및 원천징수 계산기","QR코드 생성기","PDF 도구 모음"] },

  // [5. 🎉 바이럴 & 꿀잼 SNS (5종)]
  { name: "🎱 로또 6/45 스마트 생성기", path: "로또 번호 생성기/index.html", cat: "viral", related: ["차수별 더치페이 복합 정산기","디데이 및 전역일 계산기","만 나이 계산기"] }
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
    if (isPolicy) return;
    const seoArticle = document.querySelector(".seo-article");
    if (!seoArticle || document.querySelector(".related-tools-section")) return;

    const currentPath = decodeURIComponent(window.location.pathname);
    const currentTool = ALL_TOOLS.find(t => currentPath.includes(t.path.split("/")[0]));
    const relatedNames = currentTool ? (currentTool.related || []) : [];
    const relatedTools = ALL_TOOLS.filter(t => relatedNames.some(r => t.path.includes(r.split(" 계산기")[0]) || t.name.includes(r)));
    if (relatedTools.length === 0) return;

    const brandEl = document.querySelector("a.gnb-brand");
    const prefix = (brandEl && brandEl.getAttribute("href").startsWith("../")) ? "../" : "";

    const relDiv = document.createElement("section");
    relDiv.className = "related-tools-section";
    relDiv.innerHTML = `
      <h3 class="related-tools-title">🔗 함께 자주 쓰는 도구</h3>
      <div class="related-tools-grid">
        ${relatedTools.slice(0,3).map(t => `
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
    seoArticle.before(relDiv);
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