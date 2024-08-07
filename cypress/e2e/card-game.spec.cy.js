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
      // Проверка наличия элемента 'ul'
      cy.get('ul').should('exist')
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
    // Проверка наличия элемента 'ul'
    cy.get('ul').should('exist')
    // Проверка наличия карточек в списке
    cy.get('ul').find('li').should('have.length', trueAmount)
    // Кликнуть на первую карточку и проверить наличие класса 'card-active'
    cy.get('ul').find('li').first().click().should('have.class', 'card-active');
  })

  // it.only('После нажатия на третью карточку две несовпадающие карточки становятся закрытыми.', () => {
  //   // Ввод значения в поле ввода
  //   cy.get('input').type(trueAmount.toString())
  //   // Клик по кнопке с текстом "Start"
  //   cy.get('button').contains('Start').click()
  //   // Проверка наличия элемента 'ul'
  //   cy.get('ul').should('exist')
  //   // Проверка наличия карточек в списке
  //   cy.get('ul').find('li').should('have.length', trueAmount)
  //   // Кликнуть на первую карточку
  //   cy.get('ul').find('li').first().click()
  //   cy.get('ul').find('li').eq(1).click()
  //   cy.get('ul').find('li').eq(2).click()
  // })
})


