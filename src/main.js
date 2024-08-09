import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.min.css' // Импорт Bootstrap CSS
import './css/style.scss' // Импорт scss file
import {render} from "./modules/render.js"
import {startGame} from "./modules/startGame.js"

// Call render page
window.addEventListener('load', render)

// Call startGame function when user click to button
window.startGame = startGame
