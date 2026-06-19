/* ── Content Injection ─────────────────────────────────────────── */
function injectContent() {
  const C = window.CONTENT;
  if (!C) return;

  // Hero role tags
  const tagsEl = document.querySelector('.hero-role-tags');
  if (tagsEl && C.hero && C.hero.tags) {
    tagsEl.innerHTML = C.hero.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
  }

  // Stats numbers + labels
  const statItems = document.querySelectorAll('.stat-item');
  if (C.stats) {
    C.stats.forEach((s, i) => {
      const item  = statItems[i];
      if (!item) return;
      const numEl = item.querySelector('.stat-num');
      const lblEl = item.querySelector('.stat-label');
      if (numEl) {
        numEl.dataset.count  = s.count;
        numEl.dataset.prefix = s.prefix || '';
        numEl.dataset.suffix = s.suffix || '';
        numEl.innerHTML = (s.prefix || '') + s.count +
          (s.suffix ? `<span>${s.suffix}</span>` : '');
      }
      if (lblEl && s.label) lblEl.textContent = s.label;
    });
  }
}

/* ── Cursor Glow ───────────────────────────────────────────────── */
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  glow.style.left = '-1000px';
  glow.style.top  = '-1000px';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

/* ── Counter Animation ─────────────────────────────────────────── */
function animateCounter(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const target   = parseInt(el.dataset.count)  || 0;
  const prefix   = el.dataset.prefix || '';
  const suffix   = el.dataset.suffix || '';
  const duration = 1600;
  const start    = performance.now();

  const tick = (now) => {
    const t     = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val   = Math.round(eased * target);
    el.innerHTML = prefix + val + (suffix ? `<span>${suffix}</span>` : '');
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-count]');
  if (!nums.length) return;
  const obs = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (!e.isIntersecting) return;
      animateCounter(e.target);
      obs.unobserve(e.target);
    }),
    { threshold: 0.6 }
  );
  nums.forEach(el => obs.observe(el));
}

/* ── Fade-up ScrollReveal ──────────────────────────────────────── */
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          setTimeout(() => entry.target.classList.add('visible'), i * 120);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
  } else {
    els.forEach(el => el.classList.add('visible'));
  }
}

/* ── Nav ───────────────────────────────────────────────────────── */
function initNav() {
  const heroImg = document.querySelector('.hero-photo-wrap img');
  const navImg  = document.getElementById('nav-avatar-img');
  if (heroImg && navImg) navImg.src = heroImg.src;

  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    nav.style.padding = window.scrollY > 50 ? '12px 48px' : '20px 48px';
  });
}

/* ── Boot ──────────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  injectContent();
  initNav();
  initFadeUp();
  initCounters();
  initCursorGlow();
});
