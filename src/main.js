import {render} from "./modules/render.js"
import {startGame} from "./modules/startGame.js"

// Call render page
window.addEventListener('load', render)

// Call startGame function when user click to button
window.startGame = startGame
