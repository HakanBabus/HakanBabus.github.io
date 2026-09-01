/* ==========================================================================
   HAKAN CINEVIZ PORTFOLIO — JAVASCRIPT (AUTO-LOCALE & INTERACTIONS)
   ========================================================================== */

const translations = {
  tr: {
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_stack: "Teknolojiler",
    nav_contact: "İletişim",

    hero_title_1: "Fikirleri koda,",
    hero_title_2: "akıcı araçlara ve sistemlere",
    hero_title_3: "dönüştürüyorum.",
    hero_bio: "Merhaba, ben <strong>Hakan Cineviz</strong> (<code>@HakanBabus</code>). BEUN Bilgisayar Mühendisliği öğrencisiyim. Multi-agent yapay zekâ iş akışları, masaüstü kurgu araçları ve Minecraft sunucu yazılımları geliştiriyorum.",
    hero_btn_projects: "Projelerimi İncele",
    hero_btn_contact: "İletişime Geç",
    stat_repos: "GitHub Deposu",
    stat_stars: "Proje Yıldızı",
    stat_edu: "Bilgisayar Mühendisliği",

    about_tag: "Hakkımda & Vizyon",
    about_title: "Mühendislik & İnşa Tutkusu",
    about_c1_title: "Multi-Agent & Otonom AI İş Akışları",
    about_c1_desc: "LLM'leri basit birer sohbet botu olarak değil; katı planlama, alt ajan delegasyonu ve doğrulama mekanizmalarıyla yüksek kaliteli kod üreten otonom sistemler (AgentMaxxing, LunaMaxxing) olarak tasarlıyorum.",
    about_c2_title: "Masaüstü & Yerel Kurgu Araçları",
    about_c2_desc: "Kullanıcı verisinin cihazda kaldığı, internet bağımlılığı olmayan yüksek hızlı masaüstü yazılımları inşa ediyorum. CutLoc ile React, Fastify ve FFmpeg gücünü hafif bir masaüstü kurgu deneyimine dönüştürdüm.",
    about_c3_title: "Sistem Mühendisliği & Minecraft Ekosistemi",
    about_c3_desc: "Bülent Ecevit Üniversitesi'nde aldığım mühendislik temellerini uzun yıllardır PocketMine-MP sunucu altyapısı, Bedrock protokolleri, sohbet güvenlik filtreleri (BadWord) ve sunucu otomasyonları (EasyAnnouncement) ile pratik üretime döküyorum.",

    projects_tag: "Çalışmalarım",
    projects_title: "Projeler",
    filter_all: "Tümü",

    desc_agentmaxxing: "Codex için maliyet tasarruflu, yüksek kaliteli multi-agent orkestrasyon iş akışı.",
    desc_cutloc: "Hızlı masaüstü kurgu için geliştirilmiş React ve FFmpeg tabanlı yerel video düzenleyici.",
    desc_lunamaxxing: "Sınırlandırılmış alt ajanlar ve doğrulama adımlarıyla kaliteli kod üretimi iş akışı.",
    desc_geminimaxxing: "Google Antigravity ortamında mühendislik güvenilirliğini maksimize eden orkestrasyon becerisi.",
    desc_badword: "PocketMine-MP sunucuları için yapılandırılabilir sohbet filtreleme ve küfür engelleme eklentisi.",
    desc_easyannouncement: "PocketMine-MP sunucuları için otomatik zamanlayıcılı ve komut tabanlı duyuru yönetim eklentisi.",
    desc_farmguarder: "Tarım bloklarının toprağa dönüşmesini engelleyen sunucu koruma eklentisi.",
    desc_hologramapi: "PocketMine-MP sunucuları için hologram ve yüzen metin yönetim kütüphanesi.",

    stack_tag: "Yetenekler & Cephanelik",
    stack_title: "Kullandığım Teknolojiler",
    stack_langs: "Diller",
    stack_frameworks: "Frameworkler & Kütüphaneler",
    stack_arch: "Mimariler & İş Akışları",

    contact_title: "Bana Doğrudan Ulaşın",
    contact_desc: "Staj, iş birliği, açık kaynak projeler veya fikir alışverişi için doğrudan e-posta atabilir veya LinkedIn üzerinden bağlantı kurabilirsiniz.",
    email_primary_label: "Birincil İletişim E-Postası",
    btn_copy: "Kopyala",
    footer_copy: "© 2026 Hakan Cineviz. GitHub Pages üzerinde barındırılmaktadır.",
    footer_top: "Yukarı Çık ↑",

    toast_copied: "✉️ E-posta adresi panoya kopyalandı: hakancineviz8@gmail.com"
  },

  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_stack: "Tech Stack",
    nav_contact: "Contact",

    hero_title_1: "Turning ideas into code,",
    hero_title_2: "fluid developer tools,",
    hero_title_3: "and systems.",
    hero_bio: "Hi, I'm <strong>Hakan Cineviz</strong> (<code>@HakanBabus</code>). Computer Engineering student at BEUN. I build multi-agent AI workflows, local desktop editing tools, and Minecraft server software.",
    hero_btn_projects: "Explore Projects",
    hero_btn_contact: "Get in Touch",
    stat_repos: "GitHub Repositories",
    stat_stars: "Project Stars",
    stat_edu: "Computer Engineering",

    about_tag: "About & Vision",
    about_title: "Engineering & Craftsmanship",
    about_c1_title: "Multi-Agent & Autonomous AI Workflows",
    about_c1_desc: "Transforming LLMs from basic chat interfaces into strictly planned, subagent-delegated, and verified engineering systems (AgentMaxxing, LunaMaxxing).",
    about_c2_title: "Desktop & Local-First Video Tooling",
    about_c2_desc: "Building high-performance desktop software where data stays local. CutLoc combines React, Fastify, and FFmpeg into a seamless desktop timeline trimming experience.",
    about_c3_title: "Systems Engineering & Minecraft Ecosystem",
    about_c3_desc: "Applying computer engineering principles to years of PocketMine-MP server infrastructure, Bedrock protocols, chat security filters (BadWord), and automation tools (EasyAnnouncement).",

    projects_tag: "Work",
    projects_title: "Projects",
    filter_all: "All",

    desc_agentmaxxing: "Cost-efficient, high-quality autonomous multi-agent orchestration workflow for Codex.",
    desc_cutloc: "Experimental local-first video editor built with React, Fastify, and FFmpeg for desktop workflows.",
    desc_lunamaxxing: "Quality-first Codex orchestration with bounded subagents and evidence-driven verification.",
    desc_geminimaxxing: "Engineering reliability skill for task decomposition and verification in Google Antigravity.",
    desc_badword: "Configurable chat filter and profanity blocking security plugin for PocketMine-MP.",
    desc_easyannouncement: "Automated scheduler and command announcement plugin for PocketMine-MP API 4-5.",
    desc_farmguarder: "PocketMine protection plugin preventing farmland blocks from turning into dirt.",
    desc_hologramapi: "Hologram and floating text virion library for PocketMine-MP servers.",

    stack_tag: "Skills & Arsenal",
    stack_title: "Technologies & Tooling",
    stack_langs: "Languages",
    stack_frameworks: "Frameworks & Libraries",
    stack_arch: "Architectures & Workflows",

    contact_title: "Get In Touch Directly",
    contact_desc: "For internships, project collaborations, open-source work, or questions, feel free to send an email or connect on LinkedIn.",
    email_primary_label: "Primary Contact Email",
    btn_copy: "Copy",
    footer_copy: "© 2026 Hakan Cineviz. Hosted on GitHub Pages.",
    footer_top: "Back to Top ↑",

    toast_copied: "✉️ Email copied to clipboard: hakancineviz8@gmail.com"
  }
};

// Automatic Locale Detection (detect system/browser language)
function detectUserLanguage() {
  const browserLang = (navigator.language || navigator.userLanguage || 'tr').toLowerCase();
  return browserLang.startsWith('tr') ? 'tr' : 'en';
}

const currentLang = detectUserLanguage();

document.addEventListener('DOMContentLoaded', () => {
  applyAutoLanguage(currentLang);
  initProjectFilters();
  initClipboardActions();
  initSpotlight();
  initCardTilt();
  fetchGitHubMetrics();
});

function applyAutoLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.setAttribute('lang', lang);
}

/* --------------------------------------------------------------------------
   1. Project Category Filter
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.compact-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(6px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 15);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   2. One-Click Copy Actions & Toast Notification
   -------------------------------------------------------------------------- */
function initClipboardActions() {
  const copyButtons = document.querySelectorAll('.copy-mail-btn');
  const email = "hakancineviz8@gmail.com";

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        const copyTextEl = btn.querySelector('.copy-text');
        const originalText = copyTextEl ? copyTextEl.innerText : null;

        if (copyTextEl) {
          copyTextEl.innerText = (currentLang === 'tr' ? 'Kopyalandı! ✓' : 'Copied! ✓');
          setTimeout(() => {
            if (originalText && originalText.includes('@')) {
              copyTextEl.innerText = email;
            } else {
              copyTextEl.innerText = translations[currentLang].btn_copy || 'Kopyala';
            }
          }, 2400);
        }

        showToast(translations[currentLang].toast_copied);
      });
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* --------------------------------------------------------------------------
   3. Mouse Spotlight Follower
   -------------------------------------------------------------------------- */
function initSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    spotlight.style.left = `${currentX}px`;
    spotlight.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

/* --------------------------------------------------------------------------
   4. 3D Card Tilt Micro-Interactions
   -------------------------------------------------------------------------- */
function initCardTilt() {
  const cards = document.querySelectorAll('.compact-card, .about-card, .channel-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}

/* --------------------------------------------------------------------------
   5. Live GitHub Stats Fetcher
   -------------------------------------------------------------------------- */
async function fetchGitHubMetrics() {
  const repoStat = document.getElementById('stat-repos');
  if (!repoStat) return;

  try {
    const res = await fetch('https://api.github.com/users/HakanBabus');
    if (res.ok) {
      const data = await res.json();
      if (data.public_repos) {
        repoStat.innerText = `${data.public_repos}+`;
      }
    }
  } catch (err) {
    // Offline fallback
  }
}
