/* ================================================
   MAIN - Orchestrates all modules with progressive enhancement
   ================================================ */

import NavbarModule from './modules/navbar.js';
import SmoothScrollModule from './modules/smoothScroll.js';
import ScrollRevealModule from './modules/scrollReveal.js';
import WhatsAppCTAModule from './modules/whatsappCta.js';
import NavbarScrollEffectModule from './modules/navbarScroll.js';

class InfraWiFiApp {
  constructor() {
    this.modules = [];
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.bootstrap());
    } else {
      this.bootstrap();
    }
  }

  bootstrap() {
    try {
      this.loadModules();
      console.log('✓ InfraWiFi - Sistema carregado com sucesso');
    } catch (error) {
      console.error('✗ Erro ao carregar sistema:', error);
    }
  }

  loadModules() {
    const modulesToLoad = [
      { name: 'Navbar', Module: NavbarModule },
      { name: 'Smooth Scroll', Module: SmoothScrollModule },
      { name: 'Scroll Reveal', Module: ScrollRevealModule },
      { name: 'WhatsApp CTA', Module: WhatsAppCTAModule },
      { name: 'Navbar Scroll Effect', Module: NavbarScrollEffectModule }
    ];

    modulesToLoad.forEach(({ name, Module }) => {
      try {
        const instance = new Module();
        this.modules.push(instance);
      } catch (error) {
        console.warn(`⚠ Falha ao carregar módulo "${name}":`, error.message);
        // Continue loading other modules (graceful degradation)
      }
    });
  }
}

// Initialize app when DOM is ready
new InfraWiFiApp();
