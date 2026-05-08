/* ================================================
   DOM UTILITIES - Helper functions for DOM manipulation
   ================================================ */

/**
 * Seleciona um elemento único
 * @param {string} selector - CSS selector
 * @returns {Element|null}
 */
export function querySelector(selector) {
  return document.querySelector(selector);
}

/**
 * Seleciona múltiplos elementos
 * @param {string} selector - CSS selector
 * @returns {NodeList}
 */
export function querySelectorAll(selector) {
  return document.querySelectorAll(selector);
}

/**
 * Adiciona classe
 * @param {Element} element
 * @param {string} className
 */
export function addClass(element, className) {
  if (element) element.classList.add(className);
}

/**
 * Remove classe
 * @param {Element} element
 * @param {string} className
 */
export function removeClass(element, className) {
  if (element) element.classList.remove(className);
}

/**
 * Alterna classe
 * @param {Element} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (element) element.classList.toggle(className);
}

/**
 * Verifica se tem classe
 * @param {Element} element
 * @param {string} className
 * @returns {boolean}
 */
export function hasClass(element, className) {
  return element ? element.classList.contains(className) : false;
}

/**
 * Define atributo
 * @param {Element} element
 * @param {string} attr
 * @param {string} value
 */
export function setAttribute(element, attr, value) {
  if (element) element.setAttribute(attr, value);
}

/**
 * Get atributo
 * @param {Element} element
 * @param {string} attr
 * @returns {string|null}
 */
export function getAttribute(element, attr) {
  return element ? element.getAttribute(attr) : null;
}

/**
 * Cria e retorna um elemento
 * @param {string} tag
 * @param {string} className
 * @param {string} innerHTML
 * @returns {Element}
 */
export function createElement(tag, className = '', innerHTML = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
}

/**
 * Adiciona listener com remoção segura
 * @param {Element} element
 * @param {string} event
 * @param {Function} handler
 */
export function addEventListener(element, event, handler) {
  if (element) element.addEventListener(event, handler);
}

/**
 * Remove listener
 * @param {Element} element
 * @param {string} event
 * @param {Function} handler
 */
export function removeEventListener(element, event, handler) {
  if (element) element.removeEventListener(event, handler);
}

/**
 * Delegate event listener
 * @param {Element} parent
 * @param {string} event
 * @param {string} selector
 * @param {Function} handler
 */
export function delegate(parent, event, selector, handler) {
  if (!parent) return;
  
  parent.addEventListener(event, (e) => {
    const target = e.target.closest(selector);
    if (target) handler.call(target, e);
  });
}

/**
 * Verifica se é safe usar localStorage
 * @returns {boolean}
 */
export function isLocalStorageAvailable() {
  try {
    const test = '__test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
