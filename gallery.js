document.addEventListener('DOMContentLoaded', () => {

  const navbar    = document.getElementById('navbar');
  const middle = document.getElementById('middle');
  const navMenu   = document.getElementById('nav-links');

  if (navbar) navbar.classList.add('scrolled');

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
        middle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      });
    });
  }


const slides  = Array.from(document.querySelectorAll('.carousel-slide'));
const dots    = Array.from(document.querySelectorAll('.dot'));
const btnPrev = document.getElementById('arrow-prev');
const btnNext = document.getElementById('arrow-next');

const TOTAL = slides.length;
let current = 1; 


const quotes = {
  0: `Volleyball is not just a sport, but it is where passion meets discipline,<br>
      where sweat turns into strength,<br>
      where strangers become family,<br>
      and every jump feels like chasing the sky.`,
  1: `Photography is not just a hobby, but it is where light tells stories,<br>
      where fleeting moments become forever,<br>
      and where the ordinary transforms into art.`,
  2: `The gym is not just a place to train, but it is where limits are rewritten,<br>
      where sweat turns into discipline,<br>
      and every rep builds the strongest version of you.`
};

const dates = {
  0: '21/12/2025',
  1: '21/12/2025',
  2: '15/01/2026'
};

function goTo(index) {
  current = ((index % TOTAL) + TOTAL) % TOTAL;

  const prev = ((current - 1) + TOTAL) % TOTAL;
  const next = ((current + 1) + TOTAL) % TOTAL;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');

    if (i === current) {
      slide.classList.remove('hidden');
      slide.classList.add('active');
    } else if (i === prev || i === next) {
      slide.classList.remove('hidden');
      slide.classList.remove('active');
    } else {
      slide.classList.add('hidden');
    }

    const overlay = slide.querySelector('.slide-overlay');
    if (!overlay) return;

    if (i === current) {
      overlay.classList.add('active-overlay');

      const q = quotes[i];
      if (q) {
        overlay.innerHTML = `<p class="slide-quote">${q}</p>`;
      } else {
        const d = dates[i] || '';
        overlay.innerHTML = d
          ? `<span class="slide-date">${d}</span>`
          : '';
        overlay.classList.remove('active-overlay');
      }
    } else {
      overlay.classList.remove('active-overlay');

      const d = dates[i] || '';
      overlay.innerHTML = d
        ? `<span class="slide-date">${d}</span>`
        : '';
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}
goTo(current);

btnPrev.addEventListener('click', () => {
  goTo(current - 1);
});

btnNext.addEventListener('click', () => {
  goTo(current + 1);
});
  
  const touchCard = document.getElementById('touch-card');
  if (touchCard) {
    touchCard.style.opacity   = '0';
    touchCard.style.transform = 'translateY(40px)';
    touchCard.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          touchCard.style.opacity   = '1';
          touchCard.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(touchCard);
  }

});
