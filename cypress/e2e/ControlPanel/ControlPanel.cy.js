describe('The control panel is a panel which control appear and disappear history component. It is should test ControlPanel component', () => {
  it('It should be appear when you click to the history', () => {
    cy.visit('/')

    cy.get('[data-test-target="control-panel-button"]').should('exist').click()
    cy.get('[data-test-target="control-panel-button"]').should('not.exist')
    cy.get('[data-test-target="sidebar-button"]').should('exist')
  })
  it('It should be disappear when you click to the history', () => {
    cy.visit('/')

    cy.get('[data-test-target="control-panel-button"]').should('exist').click()
    cy.get('[data-test-target="sidebar-button"]').should('exist').click()
    cy.get('[data-test-target="sidebar-button"]').should('not.exist')
    cy.get('[data-test-target="control-panel-button"]').should('exist')
  })
})
