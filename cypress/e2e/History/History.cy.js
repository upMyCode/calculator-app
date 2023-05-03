describe('Should test History component', () => {
  it('It is should be displays history item after execute math operation', () => {
    cy.visit('/')

    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-9"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '(7-(-9)) = 16'
    )
    cy.get('[data-test-target="history-item-0"]').should(
      'have.text',
      '(7-(-9))'
    )
  })
  it('It is should be displays history scrollbar after fill in history, for resolution 1920x1080 it is 10 elements of history', () => {
    cy.visit('/')

    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-9"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()

    for (let i = 0; i < 10; i++) {
      cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    }

    cy.get('[data-test-target="history-items-list"]').should(
      'have.css',
      'overflow-y',
      'scroll'
    )
  })

  it('It is should be visit to Settings page and clear all history', () => {
    cy.visit('/')

    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-9"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()

    for (let i = 0; i < 10; i++) {
      cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    }

    cy.get('[data-test-target="nav-link-settings"]').click()
    cy.get('[data-test-target="clear-all-history-button"]').click()
    cy.get('[data-test-target="nav-link-home"]').click()

    cy.get('[data-test-target="history-item-0"]').should('not.exist')
  })
})
