/* ================================================
   WHATSAPP CTA MODULE - Green button with modern interaction
   ================================================ */

import { querySelector, addClass, removeClass, setAttribute, createElement } from '../utils/dom.js';

class WhatsAppCTAModule {
  constructor() {
    this.button = querySelector('.btn-whatsapp');
    this.toast = null;
    this.toastTimeout = null;
    
    if (!this.button) {
      console.warn('⚠ WhatsApp button not found');
      return;
    }

    this.init();
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.button.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e) {
    e.preventDefault();

    const href = this.button.getAttribute('href');
    if (!href) return;

    // Add launching animation
    addClass(this.button, 'is-launching');
    
    // Show toast
    this.showToast();

    // Navigate after animation
    setTimeout(() => {
      window.location.href = href;
    }, 220);

    // Remove animation class
    setTimeout(() => {
      removeClass(this.button, 'is-launching');
    }, 420);
  }

  showToast() {
    if (!this.toast) {
      this.createToast();
    }

    addClass(this.toast, 'is-visible');

    // Clear previous timeout
    if (this.toastTimeout) clearTimeout(this.toastTimeout);

    // Hide after 1.8s
    this.toastTimeout = setTimeout(() => {
      removeClass(this.toast, 'is-visible');
    }, 1800);
  }

  createToast() {
    this.toast = createElement(
      'div',
      'whatsapp-toast',
      '<span class="dot" aria-hidden="true"></span><span class="text"><strong>Abrindo WhatsApp</strong>Você será redirecionado em instantes.</span>'
    );

    setAttribute(this.toast, 'role', 'status');
    setAttribute(this.toast, 'aria-live', 'polite');

    document.body.appendChild(this.toast);
  }
}

export default WhatsAppCTAModule;
