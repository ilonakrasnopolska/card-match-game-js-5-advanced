import {createNewANumbersArr} from "../helpers/pairsNumGenerator.js"
import {updateTimer} from "../helpers/timer.js"
import {container, cardBox, form, button, input} from "./DOM-elements.js"

export function createGameMenu() {

  form.id = 'gameSettings' //set id

  input.type = 'number'
  input.placeholder = 'Enter amount of cards'
  input.min = '2' // min
  input.max = '16' // max


  form.addEventListener('submit', (event) => {

    event.preventDefault(); // Предотвращение действия по умолчанию при отправке формы

    const inputValue = parseInt(input.value) // Получение значения из поля ввода

    if (inputValue >= 2 && inputValue <= 16 && inputValue % 2 === 0) { // Проверка введённых данных
      startGame(createNewANumbersArr(inputValue)); // Запуск игры с указанным количеством карточек
      updateTimer() // Обновление таймера
      cardBox.classList.add('card-box__game-start') // Добавление класса для начала игры
      input.value = ''
    } else {
      alert('Please enter an even number between 2 and 16.') // Предупреждение об ошибке ввода данных
    }

  })

  form.append(input, button)

  container.append(form)
}
