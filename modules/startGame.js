//Func to start game
import {cardBox, container} from "./visualPart/DOM-elements.js"
import {timerInterval} from "./helpers/timer.js"
import {Card} from "./visualPart/createCard.js"
import {saveDataToLocalStorage} from "./helpers/localSTORAGE.js"

export function startGame(arr) {
  cardBox.innerHTML = ''
  clearInterval(timerInterval) // cleaned timer

  for (let i = 0; i < arr.length; i++) {
    let createCard = new Card(arr[i]).createElement()
    cardBox.append(createCard)
  }

  saveDataToLocalStorage('newUser', arr)
  container.append(cardBox)
}
