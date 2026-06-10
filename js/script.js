// Sticky nav
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');
const navClose = document.getElementById('nav-close');

function openNav() {
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  hamburger.classList.add('active');
}

function closeNav() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  hamburger.classList.remove('active');
}

hamburger.addEventListener('click', openNav);
navClose.addEventListener('click', closeNav);
navOverlay.addEventListener('click', closeNav);

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeNav);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Highlight today's hours row
const todayIdx = new Date().getDay();
const todayRow = document.querySelector(`#hours-table tr[data-day="${todayIdx}"]`);
if (todayRow) todayRow.classList.add('is-today');