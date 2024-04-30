//function create div
export function createDiv(className) {
  let div = document.createElement('div')
  div.classList.add(className)
  return div
}

//function create title
export function createTitle(className, text) {
  let title = document.createElement('h1')
  title.classList.add(className)
  title.textContent = text
  return title
}

//function create paragraph
export function createParagraph(className, text) {
  let paragraph = document.createElement('p')
  paragraph.classList.add(className)
  paragraph.textContent = text
  return paragraph
}

//Func create button
export function createButton(className, text) {
  let btn = document.createElement('button')
  btn.classList.add(className)
  btn.textContent = text
  return btn
}

//function create ul
export function createList(className) {
  let ul = document.createElement('ul')
  ul.classList.add(className)
  ul.classList.add('row')
  return ul
}
