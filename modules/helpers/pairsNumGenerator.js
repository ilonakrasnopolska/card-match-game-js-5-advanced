import {images} from "../imagesURLs.js"

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

export function createNewANumbersArr(count) {
  const shuffleNumbersArr = createNumbersArray(count);
  const numbersWithImages = shuffleNumbersArr.map(number => {
    return {
      number: number,
      image: images[number - 1] // Назначаем изображение по соответствующему числу (-1, так как индексация начинается с 0)
    };
  });

  return shuffleNumbers(numbersWithImages); // Перемешиваем массив с числами и изображениями
}
