# Pair Matching Game

This project is an updated version of a pair-matching game, refactored from function-based to class-based programming. The goal of this update was to improve the code structure and to learn class-based programming concepts.

## Game Overview

The pair-matching game is a simple web-based game created using HTML, CSS, and JavaScript. The game allows players to choose the number of cards for the game (from 2 to 16, only even numbers are allowed) and starts a timer with a duration of 1 minute. The objective is to find all pairs of identical cards before the timer runs out.

## How to Play

1. **Select Number of Cards**: Use the form to choose the number of cards for the game (only even numbers from 2 to 16 are allowed).
2. **Start the Game**: Click the "Start Game" button to begin playing.

## Gameplay

- Click on cards to reveal them. The goal is to find pairs of identical cards.
- When two cards are selected, they will either remain open if they match or close again if they do not.
- The game ends when all pairs are found or when the timer reaches 1 minute.

## Features

- Dynamic card creation based on the selected number of cards.
- Timer functionality with a 1-minute countdown.
- Notification messages for game status (start, win, lose).
- **New**: Cypress integration for automated testing.
- **New**: Webpack for project bundling and asset management.
- **New**: ESLint for code linting a

## How to Run Locally

1. Clone this repository to your local machine.
2. Install dependencies using npm:

   ```bash
   npm install
3.Build the project using Webpack :
  npm run build
4.Start the development server with one of the following commands:
  npm run serve
  npm run dev
5.Open the index.html file in your web browser.

6.Select the number of cards and start playing the game.


## Technologies Used

- HTML, CSS, JavaScript
- Bootstrap for styling
- Class-based programming
- Webpack for bundling
-ESLint for code linting
-Babel for compatibility with older browsers
-Cypress for automated testing
-Class-based programming

## Future Improvements

- Implementing different difficulty levels.
- Adding sound effects.
- Enhancing the game's visual effects.

## Acknowledgements

This project was created as a learning exercise to improve skills in class-based programming and game development. Special thanks to the resources and tutorials that helped in the development process.
