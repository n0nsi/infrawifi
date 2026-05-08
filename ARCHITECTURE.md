# Arquitetura do Projeto InfraWiFi

## Estrutura Modular

### 📁 Diretórios

```
infrawifi/
├── assets/
│   ├── css/
│   │   ├── tokens.css              # Design tokens (cores, tipografia, espaçamento)
│   │   ├── base.css                # Reset, normalizações, elementos base
│   │   ├── style-modular.css       # Main - importa todos os componentes
│   │   └── components/
│   │       ├── navbar.css          # Navbar, hamburger menu
│   │       ├── button.css          # Botões (azul e WhatsApp verde)
│   │       ├── hero.css            # Hero section, logo
│   │       ├── card.css            # Cards, case-cards, about-items, professional-items
│   │       ├── section.css         # Seções genéricas, grid, scroll-reveal
│   │       ├── toast.css           # Notificações (toast do WhatsApp)
│   │       └── footer.css          # Footer
│   ├── js/
│   │   ├── main.js                 # Orquestra todos os módulos
│   │   ├── modules/
│   │   │   ├── navbar.js           # Hamburger menu, responsive nav
│   │   │   ├── smoothScroll.js     # Smooth scroll com progressive enhancement
│   │   │   ├── scrollReveal.js     # IntersectionObserver com fallback
│   │   │   ├── whatsappCta.js      # Botão WhatsApp com interação moderna
│   │   │   └── navbarScroll.js     # Navbar background dinâmico
│   │   └── utils/
│   │       └── dom.js              # Helpers para manipulação do DOM
│   └── img/
│       └── (imagens do projeto)
├── .eslintrc.json                  # Configuração ESLint
├── .prettierrc                      # Configuração Prettier
├── package.json                     # Scripts e dependências
├── ARCHITECTURE.md                  # Este arquivo
└── index.html                       # HTML semântico
```

## Padrões Implementados

### 1. **CSS Modular com Tokens de Design**

**Arquivo:** `assets/css/tokens.css`

Centraliza todas as variáveis de design:
- Cores (dark, acentos, texto, borders)
- Tipografia (fontes, pesos, tamanhos com `clamp()`)
- Espaçamento (responsivo com `clamp()`)
- Sombras (multi-layer)
- Transições (easing profiles)
- Z-index

**Benefícios:**
- ✓ Manutenção centralizada
- ✓ Consistência visual
- ✓ Fácil temas/variações futuras
- ✓ Responsive sem media queries excessivas

### 2. **JavaScript Modular (ES6 Modules)**

**Arquivo:** `assets/js/main.js`

Cada funcionalidade é um módulo isolado:

```javascript
// Cada módulo é uma classe com responsabilidade única
- NavbarModule: Hamburger menu e navegação responsiva
- SmoothScrollModule: Navegação suave entre seções
- ScrollRevealModule: Animações ao entrar em viewport
- WhatsAppCTAModule: Botão CTA com interação moderna
- NavbarScrollEffectModule: Background dinâmico na navbar
```

**Benefícios:**
- ✓ Código testável
- ✓ Reutilizável
- ✓ Fácil de debugar
- ✓ Sem dependências externas

### 3. **Progressive Enhancement**

Todos os módulos implementam fallbacks:

```javascript
// SmoothScrollModule
if (this.supportsNativeScroll) {
  window.scrollTo({ behavior: 'smooth' }); // Moderno
} else {
  window.scrollTo(0, offsetTop); // Fallback
}

// ScrollRevealModule
if (typeof IntersectionObserver === 'undefined') {
  this.revealAllElements(); // Fallback sem AnimationObserver
}
```

**Benefícios:**
- ✓ Funciona em navegadores antigos
- ✓ Performance em conexões lentas
- ✓ Sem JavaScript = navegação funciona (links semânticos)

### 4. **Pipeline de Qualidade**

**Ferramentas:**
- ESLint (`.eslintrc.json`) - Identifica erros e padrões
- Prettier (`.prettierrc`) - Formatação automática
- Scripts npm em `package.json`

**Scripts disponíveis:**
```bash
npm run lint          # Valida JS
npm run lint:fix      # Corrige automaticamente
npm run format        # Formata JS, CSS, HTML
npm run quality       # lint + format
```

## Animações e Transições

Todas as animações usam:
1. **CSS Tokens para easing:** `--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1)`
2. **Transições variáveis:** `--transition-md: 0.35s cubic-bezier(...)`
3. **Delays com `transition-delay`** para sequências

**Exemplos:**
- Links: Underline animado 300ms
- Cards: Hover com translateY(-4px) e sombra
- Navbar: Hamburger com X animation (45deg rotation)
- Toast: Slide up com fade in 250ms

## Acessibilidade

✓ Atributos semânticos HTML5 (role, aria-label, aria-expanded, aria-live)
✓ Focus states em todos os elementos interativos
✓ Keyboard navigation (Escape para fechar menu)
✓ Contraste de cores suficiente
✓ Labels descritivas em botões

## Performance

✓ CSS modular = carregamento otimizado
✓ JS modular = apenas o necessário
✓ Lazy loading (mapa com `loading="lazy"`)
✓ `clamp()` = sem media queries excessivas
✓ Passive event listeners (`{ passive: true }`)

## Como Usar

### Desenvolvimento

1. **Editar estilos:**
   - Adicione classe ao HTML
   - Crie arquivo em `assets/css/components/`
   - Importe em `style-modular.css`

2. **Adicionar funcionalidade:**
   - Crie módulo em `assets/js/modules/`
   - Import em `main.js`
   - Instancie na função `loadModules()`

3. **Validar código:**
   ```bash
   npm run quality  # Lint + format
   ```

### Deploy

1. Substituir `index.html` para usar `style-modular.css` (já pronto)
2. Usar `assets/js/main.js` como entry point
3. Minificar CSS e JS para produção (opcional)

## Roadmap Futuro

- [ ] Adicionar build tool (Vite/Webpack)
- [ ] Minificação automática
- [ ] Source maps para debug em produção
- [ ] Testes unitários
- [ ] Performance monitoring
- [ ] Analytics integração
