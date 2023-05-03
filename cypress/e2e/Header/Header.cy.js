describe('Test a Header component', () => {
  it('It is should be visit by main page', () => {
    cy.visit('/')
  })
  it('It is should be search a Home link on Header', () => {
    cy.visit('/')

    cy.get('[data-test-target="nav-link-home"]').should('have.text', 'Home')
  })
  it('It is should be redirect to the Home page', () => {
    cy.visit('/')

    cy.get('[data-test-target="nav-link-home"]').click()
    cy.location().should((loc) => {
      expect(loc.host).to.eq('localhost:3000')
      expect(loc.href).to.eq('http://localhost:3000/')
    })
  })
  it('It is should be redirect to the Settings page', () => {
    cy.visit('/')

    cy.get('[data-test-target="nav-link-settings"]').click()
    cy.location().should((loc) => {
      expect(loc.host).to.eq('localhost:3000')
      expect(loc.href).to.eq('http://localhost:3000/mainpagecc')
    })
  })
  it('It is should be title of application as Calculator App', () => {
    cy.visit('/')

    cy.get('[data-test-target="nav-bar-title"]').should(
      'have.text',
      'Calculator App'
    )
  })
})
