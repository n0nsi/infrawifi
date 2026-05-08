/* ================================================
   SCROLL REVEAL MODULE - Intersection Observer with progressive enhancement
   ================================================ */

import { querySelectorAll, addClass } from '../utils/dom.js';

class ScrollRevealModule {
  constructor() {
    this.elements = querySelectorAll('.card, .case-card, .about-item, .professional-item, .map-container, section');
    
    // Check browser support for IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('⚠ IntersectionObserver not supported - revealing all elements');
      this.revealAllElements();
      return;
    }

    this.init();
  }

  init() {
    if (this.elements.length === 0) {
      console.warn('⚠ No elements found for scroll reveal');
      return;
    }

    this.createObserver();
    this.observeElements();
  }

  createObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.revealElement(entry.target);
        }
      });
    }, options);
  }

  observeElements() {
    this.elements.forEach(el => {
      this.observer.observe(el);
    });
  }

  revealElement(element) {
    addClass(element, 'in-view');
    this.observer.unobserve(element);
  }

  revealAllElements() {
    this.elements.forEach(el => {
      addClass(el, 'in-view');
    });
  }
}

export default ScrollRevealModule;
