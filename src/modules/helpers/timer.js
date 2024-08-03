import {CustomElement, container, cardBox, button} from "../visualPart/DOM-elements.js"
import {updateButton, setTimerText} from "./helpers.js"

//timer interval
export let timerInterval = null

//Func create timer
export function createTimer() {
  const timeBox =
    new CustomElement('div', 'timer-box', '').createElement() //timer wrapper

  let time =
    new CustomElement('p', 'timer', '00:00').createElement() //timer
  time.id = 'timer' //set id

  timeBox.append(time)
  container.append(timeBox)
}

//Func update time
export function updateTimer() {
  let seconds = -1

  clearInterval(timerInterval)

  timerInterval = setInterval(() => {
    seconds++
    if (seconds <= 60) {
      const displayMinutes = String(Math.floor(seconds / 60)).padStart(2, '0')
      const displaySeconds = String(seconds % 60).padStart(2, '0')

      setTimerText(`${displayMinutes}:${displaySeconds}`)
      updateButton (button, 'You have 1 minute')

    } else {
      clearInterval(timerInterval)
      alert('Time is over!')
      setTimerText('00:00')
      cardBox.classList.remove('card-box__game-start') //remove class name to ul with cards of game

      updateButton (button, 'Game Over')

      setTimeout(() => {
        updateButton (button, 'Start Game')
      }, 2000)

    }
  }, 1000)

}
