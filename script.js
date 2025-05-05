// Add this JavaScript for mobile menu and smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
  
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  
    // Smooth scroll and close mobile menu
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          
          // Close mobile menu after click
          if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
          }
        }
      });
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        navbar.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });