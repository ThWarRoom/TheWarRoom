/* ============================================================
   WAR ROOM — Shared JS (all pages)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ---- Simple scroll reveal for elements with [data-reveal] ---- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

});
