/* ================================================
   SMOOTH SCROLL MODULE - Anchor links with progressive enhancement
   ================================================ */

import { querySelectorAll } from '../utils/dom.js';

class SmoothScrollModule {
  constructor() {
    this.links = querySelectorAll('a[href^="#"]');
    this.navbarHeight = 80; // px offset
    
    // Check if browser supports smooth scroll
    this.supportsNativeScroll = 'scrollBehavior' in document.documentElement.style;
    
    this.init();
  }

  init() {
    if (this.links.length === 0) {
      console.warn('⚠ No anchor links found');
      return;
    }

    this.attachEventListeners();
  }

  attachEventListeners() {
    this.links.forEach(link => {
      link.addEventListener('click', (e) => this.handleScroll(e));
    });
  }

  handleScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    
    // Ignore external links or empty hashes
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const offsetTop = target.offsetTop - this.navbarHeight;

    if (this.supportsNativeScroll) {
      // Native smooth scroll
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      // Fallback: instant scroll
      window.scrollTo(0, offsetTop);
    }
  }
}

export default SmoothScrollModule;
