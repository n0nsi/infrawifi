// INFRAWIFI - JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== HAMBURGER MENU =====
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.querySelector('.navbar');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navbar.classList.toggle('nav-open');
      navToggle.classList.toggle('active');
      
      // Atualizar aria-expanded para acessibilidade
      const isOpen = navToggle.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar menu ao clicar em um link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbar.classList.remove('nav-open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== FECHAR MENU AO CLICAR FORA =====
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navbar.contains(event.target);
    const isMenuOpen = navbar.classList.contains('nav-open');
    
    if (!isClickInsideNav && isMenuOpen) {
      navbar.classList.remove('nav-open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // ===== SMOOTH SCROLL PARA LINKS ÂNCORA =====
  const links = document.querySelectorAll('a[href^=\"#\"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // 80px de offset para navbar fixa
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== SCROLL REVEAL (Adicionar classe ao entrar em viewport) =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar cards e seções
  const elements = document.querySelectorAll('.card, .case-card, .about-item, .professional-item, .map-container, section');
  elements.forEach(el => observer.observe(el));

  // ===== NAVBAR BACKGROUND EM SCROLL =====
  const navBar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navBar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
      navBar.style.background = 'rgba(0, 0, 0, 0.85)';
    }
  });

  console.log('✓ InfraWiFi - Sistema carregado com sucesso');
});