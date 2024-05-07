import {handleActiveCards} from "./handleActiveCards.js"

//Func create the conditions of the click of card
export function conditionOfClick(card) {
  let open = true
  let success = false

  if (card.classList.contains('card-done')) {
    success = true
    open = true
    return {open, success} // if card contain class card-done, stop
  }

  card.classList.toggle('card-active')
  open = card.classList.contains('card-active')


  const activeCards = document.querySelectorAll('.card-active');

  if (activeCards.length === 2) {
    return handleActiveCards(activeCards)
  }

  return {open, success}
}
