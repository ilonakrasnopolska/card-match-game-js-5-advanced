//function for change button's text and status
export function updateButton (btn, text) {
  btn.textContent = text
  if (btn.textContent.includes('You have 1 minute')) {
    btn.disabled = true
  }

  else if (btn.textContent.includes('Start Game')) {
    btn.classList.remove('game-over-btn')
  }

  else {
    btn.classList.add('game-over-btn')
    btn.disabled = false
  }
}

//function for change timer text content
export function setTimerText(text) {
  const timerElement = document.getElementById('timer')
  timerElement.textContent = text
  return timerElement
}
