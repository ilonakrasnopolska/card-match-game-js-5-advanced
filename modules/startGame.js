//Func to start game
import {cardBox, container} from "./visualPart/DOM-elements.js"
import {timerInterval} from "./helpers/timer.js"
import {Card} from "./visualPart/createCard.js"
import {saveDataToLocalStorage} from "./helpers/localSTORAGE.js"

export function startGame(arr) {
  cardBox.innerHTML = ''
  clearInterval(timerInterval) // cleaned timer

  for (let i = 0; i < arr.length; i++) {
    new Card(cardBox, arr[i].number).createElement()
  }

  saveDataToLocalStorage('newUser', arr)
  container.append(cardBox)
}

//работаем над тем чтобы карта открывалась в зависимости от свойства
// let card1 = new Card(container, 1)
// card1.createElement()
// card1.open = true
// console.log(card1)
