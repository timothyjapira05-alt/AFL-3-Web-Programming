// ========================================
// MOBILE MENU TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('middle');
  const navbarMenu = document.getElementById('nav-links');

  if (mobileToggle && navbarMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });

    // Close menu when clicking a link (mobile)
    const menuLinks = navbarMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          mobileToggle.classList.remove('active');
          navbarMenu.classList.remove('active');
        }
      });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && 
          !navbarMenu.contains(e.target) && 
          !mobileToggle.contains(e.target) &&
          navbarMenu.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
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
