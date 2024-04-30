import {container, cardBox, title} from "./modules/visualPart/DOM-elements.js"
import {timerInterval,
  createTimer} from "./modules/helpers/timer.js"
import {createGameMenu} from "./modules/visualPart/gameMenu.js"
import {createCardOfGame} from "./modules/visualPart/createCard.js"
import {saveDataToLocalStorage} from "./modules/localSTORAGE.js"


//Func to start game
function startGame(arr) {
  cardBox.innerHTML = ''
  clearInterval(timerInterval) // cleaned timer

  for (let i = 0; i < arr.length; i++) {
    let createCard = createCardOfGame(arr[i])
    cardBox.append(createCard)
  }

  saveDataToLocalStorage('newUser', arr)
  container.append(cardBox)
}

function render() {

  container.append(title) //add title to container

  createGameMenu() //call form - game menu

  createTimer() //create timer

  document.body.append(container) //add container to body
}


container.append(title) //add title to container

createGameMenu() //call form - game menu

createTimer() //create timer


// startGame(createNewANumbersArr(16)) //call func start game

document.body.append(container) //add container to body

// Call startGame function when the page loads
window.startGame = startGame
