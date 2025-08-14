// Smooth scrolling for anchor links
const onLinkClick = (e) => {
  const href = e.currentTarget.getAttribute('href');
  if (!href || !href.startsWith('#')) return;
  const el = document.querySelector(href);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', onLinkClick));

// Mobile menu toggle
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

// Back to top visibility
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));