describe('Test a Display component', () => {
  it('Simple math operation should be correct execute and displays', () => {
    cy.visit('/')
    // Test '+' operation
    cy.get('[data-test-target="keypad-element-with-keycup-3"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-+"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-4"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '3+4 = 7'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
    // Test '-' operation
    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-4"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '7-4 = 3'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
    // Test '*' operation
    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-*"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-4"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '7*4 = 28'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
    // Test '/' operation
    cy.get('[data-test-target="keypad-element-with-keycup-8"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-/"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-4"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '8/4 = 2'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
  })
  it('It is should be support real numbers', () => {
    cy.visit('/')
    cy.get('[data-test-target="keypad-element-with-keycup-8"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-."]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-1"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '8.17'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
  })
  it('It is should be support 3 symbols after execute math operation in result', () => {
    cy.visit('/')

    cy.get('[data-test-target="keypad-element-with-keycup-8"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-/"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-9"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '8/9 = 0.888'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
  })
  it('Difficult math operation should be correct execute and displays', () => {
    // Test with expression 7-(4*8)
    cy.visit('/')

    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-4"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-*"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-8"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '7-(4*8) = -25'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
    // Test with expression 7-(-9)
    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-9"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '7-(-9) = 16'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
    // Test with expression 7-(-9-(8))
    cy.get('[data-test-target="keypad-element-with-keycup-7"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-9"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-8"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-)"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="display-expression"]').should(
      'have.text',
      '7-(-9-(8)) = 24'
    )
    cy.get('[data-test-target="keypad-element-with-keycup-C"]').click()
    // Test with expression (7-(-9))
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
  })
  it('It is should be throw and displays error message if a user execute math operation "division by zero" or "Do not close all brackets"', () => {
    cy.visit('/')

    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    // Test with expression 9/0
    cy.get('[data-test-target="keypad-element-with-keycup-9"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-/"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-0"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="error-message"]').should(
      'have.text',
      'Error: You attempted div by zero'
    )
    // Test with expression (9-
    cy.get('[data-test-target="error-message-resetter"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-("]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-9"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup--"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()
    cy.get('[data-test-target="error-message"]').should(
      'have.text',
      'Parenthesis error'
    )
    cy.get('[data-test-target="error-message-resetter"]').click()
  })
})
