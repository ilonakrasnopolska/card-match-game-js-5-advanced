import {cardBox, container, CustomElement} from "./DOM-elements.js"
import {conditionOfClick} from "../helpers/cardMatchChecker.js"
import {checkAllPairsFound} from "../helpers/handleGameResult.js"

export class Card {
  constructor(cardBox, cardNumber) {
    this._cardBox = cardBox
    this._cardNumber = cardNumber
    this._open = false
    this._success = false
  }

  createElement(){

    const cardClose =
      new CustomElement('div', 'card-close', '').createElement()
    const card =
      new CustomElement('li', 'card col-3', '').createElement()
    let number =
      new CustomElement('p', 'card__number', this.cardNumber).createElement()

    card.addEventListener('click', () => {
      this.flip(card)
    })

    card.append(cardClose, number)
    this._cardBox.append(card)
    return card
  }

  flip(card){
    if (!card.classList.contains('card-active')) {
      if (card.classList.contains('card-done')) {
        this.success = conditionOfClick(card) // call func with conditions of game
        console.log(this.success)
        console.log(this.open)
      } else {
        this.open = conditionOfClick(card) // call func with conditions of game
        console.log(this.open)
      }
    }
    checkAllPairsFound() //call func for checking all found
  }
  set cardNumber(value) {
    this._cardNumber = value
  }
  get cardNumber() {
    return this._cardNumber
  }
  set open(value) {
    this._open = value
  }
  get open() {
    return this._open
  }
  set success(value) {
    this._success = value
  }
  get success() {
    return this._success
  }
}

//Func create dom-element to card of game
// export function createCardOfGame(cardContent, userName) {
//
//   //to get empty object at local storage
//   const data = localStorage.getItem(userName)
//
//   //if array not empty to do parse
//   if (data !== "" && data !== null) {
//     cardContent = JSON.parse(data)
//   }
//
//   //div for closing card
//   const cardClose =
//     new CustomElement('div', 'card-close', '').createElement()
//
//   const card =
//     new CustomElement('li', 'card col-3', '').createElement()
//
//   card.addEventListener('click', () => {
//     if (!card.classList.contains('card-active')) {
//       conditionOfClick(card); // call func with conditions of game
//     }
//     checkAllPairsFound() //call func for checking all found
//   })
//
//   //create img
//   let image =
//     new CustomElement('img', 'card__image', '').createElement()
//   image.src = cardContent.image; // src to img
//
//   let number =
//     new CustomElement('p', 'card__number', cardContent.number).createElement()
//
//   card.append(cardClose, image, number) //add p to li
//
//   return card
// }
