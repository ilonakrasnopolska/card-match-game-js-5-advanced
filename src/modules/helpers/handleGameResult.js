import {button, cardBox} from "../visualPart/DOM-elements.js"
import {timerInterval} from "./timer.js"

//Func check all pairs found
export function checkAllPairsFound() {
  const totalPairs = document.querySelectorAll('.card') // get amount of cards
  const foundPairs = document.querySelectorAll('.card-done') // get amount of found cards

  if (foundPairs.length === totalPairs.length) { //if found all cards
    setTimeout(() => { //timer
      const timer = document.getElementById('timer')
      timer.textContent = '00:00'
      clearInterval(timerInterval) // cleaned timer

      alert('Congratulations! You found all pairs!')
      button.textContent = 'Congratulations!'
      button.disabled = true

      cardBox.classList.remove('card-box__game-start') //remove class name to ul with cards of game
      totalPairs.forEach(card => {
        card.classList.remove('card-done')
      })
    }, 1000)

    setTimeout(() => { //back to origin button - start game

      button.textContent = 'Start Game'
      button.disabled = false

    }, 5000)
  }
}
