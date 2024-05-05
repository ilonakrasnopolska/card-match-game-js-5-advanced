import {CustomElement} from "./DOM-elements.js"
import {conditionOfClick} from "../helpers/cardMatchChecker.js"
import {checkAllPairsFound} from "../helpers/handleGameResult.js"

export class Card {
  constructor(cardContent) {
    this.data = localStorage.getItem(this.data)
    this.cardContent = cardContent
    this._cardNumber = cardContent.number
    //if array not empty to do parse
    if (this.data !== "" && this.data !== null) {
      this.cardContent = JSON.parse(this.data)
    }
  }

  createElement(){

    const cardClose =
      new CustomElement('div', 'card-close', '').createElement()
    const card =
      new CustomElement('li', 'card col-3', '').createElement()

    let number =
      new CustomElement('p', 'card__number', this.cardNumber).createElement()
    console.log(this.cardNumber)

    card.addEventListener('click', () => {
      if (!card.classList.contains('card-active')) {
        conditionOfClick(card); // call func with conditions of game
      }
      checkAllPairsFound() //call func for checking all found
    })
    card.append(cardClose, number)
    return card
  }
  set cardNumber(value) {
    this._cardNumber = value
  }
  get cardNumber() {
    return this._cardNumber
  }
  set open(value) {}
  get open() {}
  set success(value) {}
  get success() {}
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
