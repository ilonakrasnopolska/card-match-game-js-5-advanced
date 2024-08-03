import {container, title} from "./visualPart/DOM-elements.js";
import {createGameMenu} from "./visualPart/gameMenu.js";
import {createTimer} from "./helpers/timer.js";

export function render() {

    container.append(title); //add title to container

    createGameMenu(); //call form - game menu

    createTimer(); //create timer
}
