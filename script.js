/* ==========================================================================
   DEEKSHITH PORTFOLIO - CLEAN & SIMPLE SCRIPT
   ========================================================================== */

// Safe storage helper supporting file:// and sandboxed environments
const storage = {
  get(key, fallback) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {}
  }
};

// Safe clipboard copying
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.style.position = 'fixed';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(el);
      if (ok) resolve();
      else reject();
    } catch (err) {
      reject(err);
    }
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (window.toastTimeout) {
    clearTimeout(window.toastTimeout);
  }

  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  const saved = storage.get('theme', 'dark');
  html.setAttribute('data-theme', saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      storage.set('theme', next);
      showToast(`Switched to ${next} theme`);
    });
  }
}

function initMobileNav() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('navLinks');

  if (!btn || !nav) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

function initCopyButtons() {
  const btns = document.querySelectorAll('[data-copy]');

  btns.forEach((b) => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      const val = b.getAttribute('data-copy');
      if (!val) return;

      copyText(val)
        .then(() => {
          showToast(`Copied "${val}" to clipboard!`);
        })
        .catch(() => {
          showToast(`Selected: ${val}`);
        });
    });
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        links.forEach((l) => {
          if (l.getAttribute('href') === `#${id}`) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
      }
    });
  });
}

function start() {
  initTheme();
  initMobileNav();
  initCopyButtons();
  initScrollSpy();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
