/* ================================================
   NAVBAR SCROLL EFFECT MODULE - Dynamic background on scroll
   ================================================ */

import { querySelector } from '../utils/dom.js';

class NavbarScrollEffectModule {
  constructor() {
    this.navbar = querySelector('.navbar');
    this.scrollThreshold = 50; // px
    
    if (!this.navbar) {
      console.warn('⚠ Navbar not found for scroll effect');
      return;
    }

    this.init();
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
  }

  handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > this.scrollThreshold) {
      this.navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
      this.navbar.style.background = 'rgba(0, 0, 0, 0.85)';
    }
  }
}

export default NavbarScrollEffectModule;
