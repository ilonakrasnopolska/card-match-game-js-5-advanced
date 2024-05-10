//Func to start game
import {cardBox, container} from "./visualPart/DOM-elements.js"
import {timerInterval} from "./helpers/timer.js"
import {AmazingCard} from "./visualPart/createCard.js"
import {saveDataToLocalStorage} from "./helpers/localSTORAGE.js"

export function startGame(arr) {
  try {
    cardBox.innerHTML = ''
    clearInterval(timerInterval) // cleaned timer

    if (!Array.isArray(arr)) {
      throw new TypeError('Input must be an array')
    }
    if (arr.length === 0) {
      console.log('Array is empty')
      return
    }

    for (let i = 0; i < arr.length; i++) {
      new AmazingCard(cardBox, arr[i]).createElement()
    }

    saveDataToLocalStorage('newUser', arr)
    container.append(cardBox)
  } catch (error) {
    console.error('An error occurred:', error.message)
    throw error
  }
}

