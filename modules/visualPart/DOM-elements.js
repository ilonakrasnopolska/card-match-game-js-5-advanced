//create CLASS for creating HTML element's , like "DIV , H1"
export class CustomElement {
  constructor(tagName = 'div', className = '', textContent = '') {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.element.textContent = textContent;
  }

  createElement() {
    return this.element;
  }
}

export const container = document.getElementById('game')

export const button =
  new CustomElement('button', 'start-game-btn', 'Start Game').createElement()

export const cardBox =
  new CustomElement('ul', 'card-box row', '').createElement()

export const title =
  new CustomElement('h1', 'title', 'Pair Game').createElement()

export const form =
  new CustomElement('form', 'form', '').createElement()

export const input =
  new CustomElement('input', 'form-input', '').createElement()

