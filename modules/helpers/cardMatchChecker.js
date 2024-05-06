//Func create the conditions of the click of card
export function conditionOfClick(card) {
  let open = true
  let success = false

  if (card.classList.contains('card-done')) {
    success = true
    return success // if card contain class card-done, stop
  }

  if (!card.classList.contains('card-active')) {
    card.classList.add('card-active'); //toggle class name to cards
  } else {
    card.classList.remove('card-active');
  } //add new class name to cards

  const activeCards = document.querySelectorAll('.card-active') //get array of active cards

  if (activeCards.length === 2) {
    const activeNumbers = Array.from(activeCards).map(card =>
      Number(card.querySelector('.card__number').textContent))

    if (activeNumbers[0] === activeNumbers[1]) { //compare active cards number
      activeCards.forEach(card => {
        card.classList.remove('card-active')
        card.classList.add('card-done')
        success = true
      })
    } else {
      activeCards.forEach(card => {
        card.classList.add('card-wrong'); // Add class for wrong pairs
      })
      open = false

      setTimeout(() => { // Set timeout to remove 'card-wrong' class after 500ms
        activeCards.forEach(card => {
          card.classList.remove('card-active', 'card-wrong')
        })
        open = false
      }, 500)
    }
  }
  return open
}
