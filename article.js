document.addEventListener('DOMContentLoaded', () => {
 const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.add('scrolled');
  }

  const middle = document.getElementById('middle');
  const navMenu   = document.getElementById('nav-links');

  if (middle && navMenu) {
    middle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      middle.classList.toggle('active');
      const spans = middle.querySelectorAll('span');
      if (middle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        middle.classList.remove('active');
        const spans = middle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity   = '';
        spans[2].style.transform = '';
      });
    });
  }

  function revealOnScroll() {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  setTimeout(revealOnScroll, 150);

  const valueCards = document.querySelectorAll('.value-card');
  valueCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
  });

  const hobbyCards = document.querySelectorAll('.hobby-card');

  window.addEventListener('scroll', () => {
    hobbyCards.forEach(card => {
      const rect   = card.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const offset = (rect.top + rect.height / 2 - center) / center;
      const img    = card.querySelector('.hobby-img');
      if (img) {
        img.style.transform = `scale(1.07) translateY(${offset * 8}px)`;
      }
    });
  }, { passive: true });

  const bgText = document.querySelector('.page-hero-bg-text');
  if (bgText) {
    let tick = 0;
    const drift = () => {
      tick += 0.4;
      const x = Math.sin(tick * 0.015) * 12;
      const y = Math.cos(tick * 0.01)  * 6;
      bgText.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      requestAnimationFrame(drift);
    };
    requestAnimationFrame(drift);
  }

  document.querySelectorAll('.value-icon').forEach((icon, i) => {
    let t = i * 1.2;
    const float = () => {
      t += 0.025;
      const y = Math.sin(t) * 5;
      icon.style.transform = `translateY(${y}px)`;
      requestAnimationFrame(float);
    };
    requestAnimationFrame(float);
  });

  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s cubic-bezier(0.4,0,0.2,1)';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' });
      }
    });
  });

});
