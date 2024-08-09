import {container, title} from "./visualPart/DOM-elements.js";
import {createGameMenu} from "./visualPart/gameMenu.js";
import {createTimer} from "./helpers/timer.js";

export function render() {
    document.body.appendChild(container)
    if (container && title) {
        container.append(title) //add title to container
        createGameMenu(); //call form - game menu
        createTimer(); //create timer
    } else {
        console.error('Element(s) not found');}
}
