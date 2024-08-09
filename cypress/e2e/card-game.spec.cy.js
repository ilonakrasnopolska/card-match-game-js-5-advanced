/// <reference types="cypress" />
const trueAmount = 8
const falseAmount = 5

describe('Игра в пары', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it.only('Игра успешно запускается', () => {
    // Ввод значения в поле ввода
        cy.get('input').type(trueAmount.toString())
        // Клик по кнопке с текстом "Start"
        cy.get('button').contains('Start').click()
        // Проверка наличия элемента 'ul'
        cy.get('ul').should('exist')
        // Проверка наличия карточек в списке
        cy.get('ul').find('li').should('have.length', trueAmount)
    })

    it.only('Игра не запускается', () => {
    // Ввод значения в поле ввода
        cy.get('input').type(falseAmount.toString())
        // Клик по кнопке с текстом "Start"
        cy.get('button').contains('Start').click()
        // Проверка наличия элемента 'ul'
        cy.get('ul').should('not.exist')
    })

    it.only('Все карточки при запуске закрыты', () => {
        // Ввод значения в поле ввода
        cy.get('input').type(trueAmount.toString())
        // Клик по кнопке с текстом "Start"
        cy.get('button').contains('Start').click()
        cy.get('li').each(($el) => {
            cy.wrap($el).should('not.have.class', 'card-done')
                .and('not.have.class', 'card-active')
        })
    })

    it.only('Карточка остается открытой при нажатии', () => {
    // Ввод значения в поле ввода
        cy.get('input').type(trueAmount.toString())
        // Клик по кнопке с текстом "Start"
        cy.get('button').contains('Start').click()
        // Генерация случайного индекса
        cy.get('ul').find('li').then($cards => {
            const randomIndex = Math.floor(Math.random() * $cards.length);
            // Клик по карточке с случайным индексом и проверка наличия класса 'card-active'
            cy.wrap($cards).eq(randomIndex).click().should('have.class', 'card-active')
        })
    })

    it.only('Находит пары карточек и продолжает до тех пор, пока не найдутся непарные карточки', () => {
    // Ввод значения в поле ввода
        cy.get('input').type(trueAmount.toString())
        // Клик по кнопке с текстом "Start"
        cy.get('button').contains('Start').click()

        // Находим все карточки
        cy.get('ul').find('li').then($cards => {
            let currentCardIndex = 0

            function checkNextPair() {
                if (currentCardIndex + 1 >= $cards.length) {
                    cy.log('Достигнут конец списка карточек')
                    return
                }

                // Кликаем на текущую карточку
                cy.wrap($cards).eq(currentCardIndex).click()

                // Кликаем на следующую карточку
                cy.wrap($cards).eq(currentCardIndex + 1).click().then(() => {
                    cy.get('ul').find('li').eq(currentCardIndex).then($firstCard => {
                        if ($firstCard.hasClass('card-done')) {
                            // Если пара найдена, переходим к следующей паре
                            currentCardIndex += 2
                            checkNextPair()
                        } else {
                            cy.log('Найдены непарные карточки.')
                        }
                    })
                })
            }

            // Начинаем с первой пары
            checkNextPair()
        })
    })

    it.only('Найти и кликнуть на первую пару карточек и проверить что они остались видимы', () => {
        // Ввод значения в поле ввода
        cy.get('input').type(trueAmount.toString())
        // Клик по кнопке с текстом "Start"
        cy.get('button').contains('Start').click()
        // Находим все карточки
        cy.get('ul').find('li').then($cards => {
            let firstCardIndex = 0;

            // Функция для поиска пары
            function findPair(secondCardIndex) {
                // Кликаем на первую карточку
                cy.wrap($cards).eq(firstCardIndex).click()

                // Кликаем на текущую карточку
                cy.wrap($cards).eq(secondCardIndex).click()

                // Проверяем, являются ли карточки парой
                cy.get('ul').find('li').eq(firstCardIndex).then($firstCard => {
                    if ($firstCard.hasClass('card-done')) {
                        // Проверяем, что обе карточки остались видимыми
                        cy.wrap($firstCard).should('have.class', 'card-done')
                        cy.wrap($cards).eq(secondCardIndex).should('have.class', 'card-done')
                        cy.log('Пара найдена и осталась видимой.')
                    } else {
                        // Если пара не найдена и есть ещё карточки для проверки
                        if (secondCardIndex + 1 < $cards.length) {
                            cy.wait(1000) // Задержка для имитации переворота карточек
                            findPair(secondCardIndex + 1) // Проверка следующей карточки
                        } else {
                            cy.log('Пара не найдена.')
                        }
                    }
                })
            }

            // Начинаем поиск пары со второй карточки
            findPair(1)
        })
    })

    it.only('Карточки закрывается когда пара не найдена', () => {
    // Ввод значения в поле ввода
        cy.get('input').type(trueAmount.toString())
        // Клик по кнопке с текстом "Start"
        cy.get('button').contains('Start').click()
        // Генерация случайных индексов
        cy.get('ul').find('li').then($cards => {
            const totalCards = $cards.length
            let index1, index2

            // Выбираем два разных случайных индекса
            do {
                index1 = Math.floor(Math.random() * totalCards)
                index2 = Math.floor(Math.random() * totalCards)
            } while (index1 === index2)

            // Клик по первой карточке
            cy.wrap($cards).eq(index1).click()

            // Клик по второй карточке
            cy.wrap($cards).eq(index2).click().then(() => {
                // Проверяем, что карточки закрываются, если это не пара
                cy.wrap($cards).eq(index1).should('not.have.class', 'card-active')
                cy.wrap($cards).eq(index2).should('not.have.class', 'card-active')
                cy.log('Карточки закрыты')
            })
        })
    })

})


