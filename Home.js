
document.addEventListener('DOMContentLoaded', function() {
  const middle = document.getElementById('middle');
  const nav-links = document.getElementById('nav-links');

  if (middle && nav-links) {
    middle.addEventListener('click', function() {
      middle.classList.toggle('active');
      nav-links.classList.toggle('active');
    });

    const menuLinks = nav-links.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          middle.classList.remove('active');
          nav-links.classList.remove('active');
        }
      });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && 
          !nav-links.contains(e.target) && 
          !middle.contains(e.target) &&
          nav-links.classList.contains('active')) {
        middle.classList.remove('active');
        nav-links.classList.remove('active');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
