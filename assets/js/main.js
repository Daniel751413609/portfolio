window.addEventListener('DOMContentLoaded', () => {
  const heroImg = document.querySelector('.hero-photo-wrap img');
  const navImg = document.getElementById('nav-avatar-img');

  if (heroImg && navImg) {
    navImg.src = heroImg.src;
  }

  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) {
            return;
          }

          window.setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 120);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach((el) => observer.observe(el));
  } else {
    fadeEls.forEach((el) => el.classList.add('visible'));
  }
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');

  if (!nav) {
    return;
  }

  nav.style.padding = window.scrollY > 50 ? '12px 48px' : '20px 48px';
});
