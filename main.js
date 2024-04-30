
const container = createDiv('container') //container
const title = createTitle('title', 'Pair Game') //title
const form = document.createElement('form') //form
const button = createButton('start-game-btn', 'Start Game') //button
const cardBox = createList('card-box') //ul element for cards

//array of picture
const images = [
  './img/dog1.png',
  './img/dog2.png',
  './img/dog3.png',
  './img/dog4.png',
  './img/dog5.png',
  './img/dog6.png',
  './img/dog7.png',
  './img/dog8.png',
  './img/dog9.png',
]

//timer interval 
let timerInterval = null

//func for get set info to local storage
function saveDataToLocalStorage(key, objArr) {
  localStorage.setItem(key, JSON.stringify(objArr))
}

//function create div 
function createDiv(className) {
  let div = document.createElement('div')
  div.classList.add(className)
  return div
}

//function create title
function createTitle(className, text) {
  let title = document.createElement('h1')
  title.classList.add(className)
  title.textContent = text
  return title
}

//function create paragraph 
function createParagraph(className, text) {
  let paragraph = document.createElement('p')
  paragraph.classList.add(className)
  paragraph.textContent = text
  return paragraph
}

//Func create button 
function createButton(className, text) {
  let btn = document.createElement('button')
  btn.classList.add(className)
  btn.textContent = text
  return btn
}

//function create ul
function createList(className) {
  let ul = document.createElement('ul')
  ul.classList.add(className)
  ul.classList.add('row')
  return ul
}

// 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
  const numbers = Array.from({ length: 9 }, (_, index) => index + 1); // Создаем массив чисел от 1 до 9

  const pairedNumbers = [] //array of paired numbers

  // Generate paired numbers
  for (let i = 0; i < count / 2; i++) {
    const randomNumber = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]; // Генерируем случайное число (для примера от 0 до 99)
    pairedNumbers.push(randomNumber, randomNumber); // Добавляем пару чисел в массив
  }

  return pairedNumbers

}

// 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffleNumbers(arr) {
  let currentIndex = arr.length //current index 

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
  }

  return arr
}

// 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function createNewANumbersArr(count) {
  const shuffleNumbersArr = createNumbersArray(count);
  const numbersWithImages = shuffleNumbersArr.map(number => {
    return {
      number: number,
      image: images[number - 1] // Назначаем изображение по соответствующему числу (-1, так как индексация начинается с 0)
    };
  });

  return shuffleNumbers(numbersWithImages); // Перемешиваем массив с числами и изображениями
}

//Func create the conditions of the click of card
function conditionOfClick(card) {

  if (card.classList.contains('card-done')) {
    return; // if card contain class card-done, stop
  }

  if (!card.classList.contains('card-active')) {
    card.classList.add('card-active'); //toggle class name to cards
  } else {
    card.classList.remove('card-active');
  } //add new class name to cards

  const activeCards = document.querySelectorAll('.card-active') //get array of active cards

  if (activeCards.length === 2) {
    const activeNumbers = Array.from(activeCards).map(card => Number(card.querySelector('.card__number').textContent))

    if (activeNumbers[0] === activeNumbers[1]) { //compare active cards number
      activeCards.forEach(card => {
        card.classList.remove('card-active')
        card.classList.add('card-done')
      })
    } else {
      activeCards.forEach(card => {
        card.classList.add('card-wrong'); // Add class for wrong pairs
      });

      setTimeout(() => { // Set timeout to remove 'card-wrong' class after 500ms
        activeCards.forEach(card => {
          card.classList.remove('card-active', 'card-wrong')
        });
      }, 500);
    }
  }
}

//Func check all pairs found 
function checkAllPairsFound() {
  const totalPairs = document.querySelectorAll('.card') // get amount of cards
  const foundPairs = document.querySelectorAll('.card-done') // get amount of found cards

  if (foundPairs.length === totalPairs.length) { //if found all cards
    setTimeout(() => { //timer
      alert('Congratulations! You found all pairs!')
      button.textContent = 'Congratulations!'

      clearInterval(timerInterval) // cleaned timer
      cardBox.classList.remove('card-box__game-start') //remove class name to ul with cards of game
      totalPairs.forEach(card => {
        card.classList.remove('card-done')
      });
    }, 1000)

    setTimeout(() => { //back to origin button - start game

      button.textContent = 'Start Game'
      button.disabled = false

    }, 5000)
  }
}

//Func create timer 
function createTimer() {
  const timeBox = createDiv('timer-box') //timer wrapper

  let time = createParagraph('timer') //timer
  time.id = 'timer' //set id
  time.textContent = '00:00' //add text content

  timeBox.append(time)
  container.append(timeBox)
}

//Func update time 
function updateTimer() {
  const timerElement = document.getElementById('timer');
  let seconds = -1;

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    seconds++;
    if (seconds <= 60) {
      const displayMinutes = String(Math.floor(seconds / 60)).padStart(2, '0');
      const displaySeconds = String(seconds % 60).padStart(2, '0');
      timerElement.textContent = `${displayMinutes}:${displaySeconds}`;

      button.textContent = 'You have 1 minute'
      button.disabled = true

    } else {
      clearInterval(timerInterval);
      alert('Time is over!');
      timerElement.textContent = '00:00'
      cardBox.classList.remove('card-box__game-start') //remove class name to ul with cards of game

      button.textContent = 'Game Over'
      button.classList.add('game-over-btn')
      button.disabled = false

      setTimeout(() => {
        button.textContent = 'Start Game'
        button.classList.remove('game-over-btn')
      }, 2000)

    }
  }, 1000);

}

//Func create dom-element to card of game 
function createCardOfGame(cardContent, userName) {

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

function createGameMenu() {

  form.classList.add('form') //add class name to form
  form.id = 'gameSettings' //set id

  const input = document.createElement('input') //create input
  input.type = 'number'
  input.placeholder = 'Enter amount of cards'
  input.classList.add('form-input')

  input.min = '2'; // min
  input.max = '16'; // max


  form.addEventListener('submit', (event) => {
  
    event.preventDefault(); // Предотвращение действия по умолчанию при отправке формы

    const inputValue = parseInt(input.value); // Получение значения из поля ввода

    if (inputValue >= 2 && inputValue <= 16 && inputValue % 2 === 0) { // Проверка введённых данных
      startGame(createNewANumbersArr(inputValue)); // Запуск игры с указанным количеством карточек
      updateTimer(); // Обновление таймера
      cardBox.classList.add('card-box__game-start'); // Добавление класса для начала игры
      input.value = ''
    } else {
      alert('Please enter an even number between 2 and 16.'); // Предупреждение об ошибке ввода данных
    }

  })

  form.append(input, button)

  container.append(form)
}

//Func to start game
function startGame(arr) {
  cardBox.innerHTML = ''
  clearInterval(timerInterval) // cleaned timer

  for (i = 0; i < arr.length; i++) {
    let createCard = createCardOfGame(arr[i])
    cardBox.append(createCard)
  }

  saveDataToLocalStorage('newUser', arr)
  container.append(cardBox)
}



container.append(title) //add title to container

createGameMenu() //call form - game menu

const timer = createTimer() //create timer


// startGame(createNewANumbersArr(16)) //call func start game


document.body.append(container) //add container to body

// Call startGame function when the page loads
window.startGame = startGame