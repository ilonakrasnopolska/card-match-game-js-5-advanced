import {createDiv,
      createParagraph} from "../htmlElements.js"
import {container, cardBox, button} from "../visualPart/DOM-elements.js"

//timer interval
export let timerInterval = null

//Func create timer
export function createTimer() {
  const timeBox = createDiv('timer-box') //timer wrapper

  let time = createParagraph('timer') //timer
  time.id = 'timer' //set id
  time.textContent = '00:00' //add text content

  timeBox.append(time)
  container.append(timeBox)
}

//Func update time
export function updateTimer() {
  const timerElement = document.getElementById('timer');
  let seconds = -1;

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    seconds++;
    if (seconds <= 60) {
      const displayMinutes = String(Math.floor(seconds / 60)).padStart(2, '0');
      const displaySeconds = String(seconds % 60).padStart(2, '0');
      timerElement.textContent = `${displayMinutes}:${displaySeconds}`;

      button.textContent = 'You have 1 minute'
      button.disabled = true

    } else {
      clearInterval(timerInterval);
      alert('Time is over!');
      timerElement.textContent = '00:00'
      cardBox.classList.remove('card-box__game-start') //remove class name to ul with cards of game

      button.textContent = 'Game Over'
      button.classList.add('game-over-btn')
      button.disabled = false

      setTimeout(() => {
        button.textContent = 'Start Game'
        button.classList.remove('game-over-btn')
      }, 2000)

    }
  }, 1000);

}
