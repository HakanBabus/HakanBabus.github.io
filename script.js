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
    about_title: "Mühendislik Yaklaşımım",
    about_story_badge: "Geliştirici & Sistem Tasarımcısı",
    about_story_heading: "Fikirleri kaba deneylerden alıp <span class=\"text-highlight\">kararlı ve akıcı araçlara</span> dönüştürüyorum.",
    about_story_body: "Bülent Ecevit Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Yazılım geliştirirken odağım; kullanıcıyı yormayan yerel araçlar, otonom alt ajanlarla çalışan yapay zekâ iş akışları ve yüksek performanslı sunucu altyapıları inşa etmek.",
    hl_1_t: "Local-First Mimarisi",
    hl_1_d: "Kullanıcı verisinin yerelde kaldığı, ultra hızlı masaüstü araçları.",
    hl_2_t: "Otonom Ajan Orkestrasyonu",
    hl_2_d: "Sınırlandırılmış alt ajanlar ve katı doğrulama adımlarıyla güvenilir kod üretimi.",
    pod_ai_t: "Multi-Agent & AI Orkestrasyonu",
    pod_ai_d: "LLM'leri basit birer metin üreticisi olarak değil; planlama, alt ajan yönetimi ve test odaklı doğrulama süreçlerine sahip sistemler olarak kullanıyorum.",
    pod_desktop_t: "Masaüstü & Kurgu Yazılımları",
    pod_desktop_d: "Hızlı ve hafif masaüstü video düzenleyicileri inşa ederek, video işleme yükünü yerel donanımda akıcı hale getiriyorum.",
    pod_server_t: "Sistem & Minecraft Sunucu Altyapısı",
    pod_server_d: "PocketMine-MP sunucu çekirdeği ve Bedrock protokolleri üzerinde yüksek performanslı PHP güvenlik ve otomasyon eklentileri geliştirdim.",

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
    about_title: "Engineering Approach",
    about_story_badge: "Developer & Systems Designer",
    about_story_heading: "Turning ideas from rough prototypes into <span class=\"text-highlight\">stable, fluid software</span>.",
    about_story_body: "Computer Engineering student at Bülent Ecevit University. My focus centers on zero-friction local-first tools, bounded autonomous AI workflows, and high-throughput server infrastructures.",
    hl_1_t: "Local-First Architecture",
    hl_1_d: "High-speed desktop tools keeping all user data strictly on device.",
    hl_2_t: "Autonomous Agent Workflows",
    hl_2_d: "Reliable code synthesis via bounded subagents and test-driven verification.",
    pod_ai_t: "Multi-Agent & AI Orchestration",
    pod_ai_d: "Engineering LLMs into goal-driven systems featuring strict planning, subagent execution, and verification pipelines.",
    pod_desktop_t: "Desktop & Media Tooling",
    pod_desktop_d: "Building fast, lightweight desktop video editors that offload processing cleanly onto local hardware.",
    pod_server_t: "Systems & Minecraft Infrastructure",
    pod_server_d: "Developing high-performance PHP security, moderation, and automation plugins on PocketMine-MP and Bedrock protocols.",

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

// Automatic Locale Detection (Turkish for Turkish systems, English for all others by default)
function getInitialLanguage() {
  const saved = localStorage.getItem('pref_lang');
  if (saved && (saved === 'tr' || saved === 'en')) {
    return saved;
  }
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  return browserLang.startsWith('tr') ? 'tr' : 'en';
}

let currentLang = getInitialLanguage();

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initProjectFilters();
  initClipboardActions();
  initSpotlight();
  initCardTilt();
  fetchGitHubMetrics();
});

// Global language switcher function
window.switchLanguage = function(lang) {
  if (lang !== 'tr' && lang !== 'en') return;
  currentLang = lang;
  try {
    localStorage.setItem('pref_lang', lang);
  } catch (e) {}

  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.setAttribute('lang', lang);
};

function initLanguageSwitcher() {
  window.switchLanguage(currentLang);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn) {
      e.preventDefault();
      const selected = btn.getAttribute('data-lang');
      if (selected) {
        window.switchLanguage(selected);
      }
    }
  });
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
   5. Live GitHub Repos & Stars Fetcher
   -------------------------------------------------------------------------- */
async function fetchGitHubMetrics() {
  const repoStat = document.getElementById('stat-repos');
  const starStat = document.getElementById('stat-stars');

  try {
    const res = await fetch('https://api.github.com/users/HakanBabus/repos?per_page=100');
    if (res.ok) {
      const repos = await res.json();
      if (Array.isArray(repos) && repos.length > 0) {
        // 1. Dinamik Toplam Repo Sayısı
        if (repoStat) {
          repoStat.innerText = `${repos.length}+`;
        }

        // 2. Dinamik Toplam Yıldız Sayısı ve Repo Eşleştirme
        let totalStars = 0;
        const starMap = {};

        repos.forEach(repo => {
          const stars = repo.stargazers_count || 0;
          totalStars += stars;
          starMap[repo.name.toLowerCase()] = stars;
        });

        if (starStat) {
          starStat.innerText = `⭐ ${totalStars}+`;
        }

        // 3. Her Proje Kartının Kendi Yıldızını Otomatik Güncelleme
        document.querySelectorAll('.compact-card[data-repo]').forEach(card => {
          const repoKey = card.getAttribute('data-repo').toLowerCase();
          if (Object.prototype.hasOwnProperty.call(starMap, repoKey)) {
            const starBadge = card.querySelector('.compact-star');
            if (starBadge) {
              starBadge.innerText = `⭐ ${starMap[repoKey]}`;
            }
          }
        });
      }
    }
  } catch (err) {
    console.log('GitHub API offline / rate-limited, fallback values in use.');
  }
}
