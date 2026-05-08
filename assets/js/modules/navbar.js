/* ================================================
   NAVBAR MODULE - Hamburger menu and responsive nav
   ================================================ */

import { querySelector, querySelectorAll, addClass, removeClass, toggleClass, hasClass, setAttribute } from '../utils/dom.js';

class NavbarModule {
  constructor() {
    this.navToggle = querySelector('#navToggle');
    this.navbar = querySelector('.navbar');
    this.navMenu = querySelector('#navMenu');
    this.navLinks = querySelectorAll('.links a');
    
    // Early return se elementos não existem
    if (!this.navToggle || !this.navbar || !this.navMenu) {
      console.warn('⚠ Navbar elements not found - navbar module disabled');
      return;
    }
    
    this.init();
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    // Toggle hamburger
    if (this.navToggle) {
      this.navToggle.addEventListener('click', (e) => this.toggleMenu(e));
    }

    // Close menu on link click
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => this.handleOutsideClick(e));

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMenu();
    });
  }

  toggleMenu(e) {
    e.stopPropagation();
    toggleClass(this.navbar, 'nav-open');
    toggleClass(this.navToggle, 'active');

    const isOpen = hasClass(this.navToggle, 'active');
    setAttribute(this.navToggle, 'aria-expanded', isOpen);
  }

  closeMenu() {
    removeClass(this.navbar, 'nav-open');
    removeClass(this.navToggle, 'active');
    setAttribute(this.navToggle, 'aria-expanded', 'false');
  }

  handleOutsideClick(e) {
    const isClickInsideNav = this.navbar.contains(e.target);
    const isMenuOpen = hasClass(this.navbar, 'nav-open');

    if (!isClickInsideNav && isMenuOpen) {
      this.closeMenu();
    }
  }
}

export default NavbarModule;
