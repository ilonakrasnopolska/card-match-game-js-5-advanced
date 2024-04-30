import {createButton, createDiv, createList, createTitle} from "../htmlElements.js"

export const container = createDiv('container') //container
export const button = createButton('start-game-btn', 'Start Game') //button
export const cardBox = createList('card-box') //ul element for cards

export const title = createTitle('title', 'Pair Game') //title
export const form = document.createElement('form') //form
