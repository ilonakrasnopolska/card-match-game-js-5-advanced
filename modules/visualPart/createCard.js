import {createDiv, createParagraph} from "../htmlElements.js"
import {conditionOfClick} from "../helpers/cardMatchChecker.js"
import {checkAllPairsFound} from "../helpers/handleGameResult.js"

//Func create dom-element to card of game
export function createCardOfGame(cardContent, userName) {

  //to get empty object at local storage
  const data = localStorage.getItem(userName)

  //if array not empty to do parse
  if (data !== "" && data !== null) {
    cardContent = JSON.parse(data)
  }

  const cardClose = createDiv('card-close') //create div for card close

  const card = document.createElement('li') //create li
  card.classList.add('card')
  card.classList.add('col-3')

  card.addEventListener('click', () => {
    if (!card.classList.contains('card-active')) {
      conditionOfClick(card); // call func with conditions of game
    }
    checkAllPairsFound() //call func for checking all found
  })

  let image = document.createElement('img'); // create img
  image.classList.add('card__image');
  image.src = cardContent.image; // src to img

  let number = createParagraph('card__number', cardContent.number) //create p

  card.append(cardClose, image, number) //add p to li

  return card
}
