//Func to start game
import {cardBox, container} from "./visualPart/DOM-elements.js"
import {timerInterval} from "./helpers/timer.js"
import {AmazingCard, Card} from "./visualPart/createCard.js"
import {saveDataToLocalStorage} from "./helpers/localSTORAGE.js"

export function startGame(arr) {
  cardBox.innerHTML = ''
  clearInterval(timerInterval) // cleaned timer

  for (let i = 0; i < arr.length; i++) {
    new AmazingCard(cardBox, arr[i]).createElement()
  }

  saveDataToLocalStorage('newUser', arr)
  container.append(cardBox)
}

//работаем над тем чтобы карта открывалась в зависимости от свойства
// let card1 = new Card(container, 1)
// let card2 = new Card(container, 1)
// let card3 = new Card(container, 3)
// let card4 = new Card(container, 3)
// let card5 = new Card(container, 6)
// let card6 = new Card(container, 6)
//
// card1.createElement()
// card2.createElement()
// card3.createElement()
// card4.createElement()
// card5.createElement()
// card6.createElement()
// console.log(card1, card2, card3, card4, card5, card6)
