import {cardBox, container, CustomElement} from "./DOM-elements.js"
import {conditionOfClick} from "../helpers/cardMatchChecker.js"
import {checkAllPairsFound} from "../helpers/handleGameResult.js"

export class Card {
  constructor(cardBox, data) {
    this._cardBox = cardBox
    this._cardNumber = data.number
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
      if (card.classList.contains('card-done')) {
        return
      }
      this.flip(card)
      console.log(this)
    })

    card.append(cardClose, number)
    this._cardBox.append(card)
    return card
  }
  flip(card){
    const { open, success } = conditionOfClick(card)

     this.open = open
     this.success = success

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

export class AmazingCard extends Card {
  constructor(cardBox, data) {
    super(cardBox, data)
    this._img = data.image
  }

  createElement() {
    const card = super.createElement(); // Call the parent class method to create the card element
    let image = new CustomElement('img', 'card__image', '').createElement()
    image.src = this.cardImg // Set the image source
    image.onerror = () => {
      // Handle image loading errors here
      console.error('Error loading image')
    }
    card.prepend(image) // Append the image to the card before other content
    return card
  }

  set cardImg(value) {
    this._img = value
  }

  get cardImg() {
    return this._img
  }
}

