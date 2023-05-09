import 'cypress-real-events/support'

describe('It is should be switch light theme to the dark theme into app', () => {
  it('It should be check all css style before switching to the dark theme Header component', () => {
    cy.visit('/')
    // Check Header styles
    cy.get('[data-test-target="header-main-block"]').should(
      'have.css',
      'background-color',
      'rgb(67, 67, 67)'
    )
    cy.get('[data-test-target="nav-bar-title"]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
    cy.get('[data-test-target="nav-link-home"]')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .realHover()
      .should('have.css', 'border-bottom', '2px solid rgb(255, 255, 255)')
      .should('have.css', 'text-decoration', 'none solid rgb(255, 255, 255)')
      .should('have.css', 'cursor', 'pointer')
      .should('have.css', 'margin-top', '2px')
    cy.get('[data-test-target="nav-link-settings"]')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .realHover()
      .should('have.css', 'border-bottom', '2px solid rgb(255, 255, 255)')
      .should('have.css', 'text-decoration', 'none solid rgb(255, 255, 255)')
      .should('have.css', 'cursor', 'pointer')
      .should('have.css', 'margin-top', '2px')
  })
  it('It should be check all css style after switching to the dark theme Header component', () => {
    cy.visit('/')
    // Change to the dark theme
    cy.get('[data-test-target="nav-link-settings"]').click()
    cy.get('[data-test-target="button-theme-switcher"]').click()
    cy.get('[data-test-target="button-theme-color-dark"]').click()
    cy.get('[data-test-target="nav-link-home"]').click()
    //Check Header styles after
    cy.get('[data-test-target="header-main-block"]').should(
      'have.css',
      'background-color',
      'rgb(102, 62, 193)'
    )
    cy.get('[data-test-target="nav-bar-title"]')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('[data-test-target="nav-link-home"]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
    cy.get('[data-test-target="nav-link-settings"]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
  })
  it('It should be check all css style before switching to the dark theme Keypad component', () => {
    cy.visit('/')

    //Check css styles keypad before switching to the dark theme
    const keycups = [
      'C',
      'CE',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '=',
      '+',
      '-',
      '/',
      '.',
      '(',
      ')',
      '*'
    ]

    //Keycups before theme switch
    for (let i of keycups) {
      cy.get(`[data-test-target="keypad-element-with-keycup-${i}"]`).should(
        'have.css',
        'border',
        '1px solid rgb(112, 112, 112)'
      )
      cy.get(`[data-test-target="keypad-element-with-keycup-${i}"]`).should(
        'have.css',
        'background',
        'rgb(242, 242, 242) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      cy.get(`[data-test-target="keypad-element-with-keycup-${i}"]`).should(
        'have.css',
        'color',
        'rgb(0, 0, 0)'
      )
    }
  })
  it('It should be check all css style after switching to the dark theme  Keypad component', () => {
    cy.visit('/')

    // Change to the dark theme
    cy.get('[data-test-target="nav-link-settings"]').click()
    cy.get('[data-test-target="button-theme-switcher"]').click()
    cy.get('[data-test-target="button-theme-color-dark"]').click()
    cy.get('[data-test-target="nav-link-home"]').click()

    //Check css styles keypad after switching to the dark theme
    const keycups = [
      'C',
      'CE',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '=',
      '+',
      '-',
      '/',
      '.',
      '(',
      ')',
      '*'
    ]
    //Keycups after theme switch
    for (let i of keycups) {
      cy.get(`[data-test-target="keypad-element-with-keycup-${i}"]`).should(
        'have.css',
        'border',
        '1px solid rgb(112, 112, 112)'
      )
      cy.get(`[data-test-target="keypad-element-with-keycup-${i}"]`).should(
        'have.css',
        'background',
        'rgb(45, 45, 45) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      cy.get(`[data-test-target="keypad-element-with-keycup-${i}"]`).should(
        'have.css',
        'color',
        'rgb(255, 255, 255)'
      )
    }
  })
  it('It is should be check all css style before switching to the dark theme Display component', () => {
    cy.visit('/')

    cy.get('[data-test-target="display-calculator-window"]').should(
      'have.css',
      'border-bottom',
      '2px solid rgb(112, 112, 112)'
    )
    cy.get('[data-test-target="display-expression"]').should(
      'have.css',
      'color',
      'rgb(0, 0, 0)'
    )
  })
  it('It is should be check all css style after switching to the dark theme Display component', () => {
    cy.visit('/')

    // Change to the dark theme
    cy.get('[data-test-target="nav-link-settings"]').click()
    cy.get('[data-test-target="button-theme-switcher"]').click()
    cy.get('[data-test-target="button-theme-color-dark"]').click()
    cy.get('[data-test-target="nav-link-home"]').click()

    cy.get('[data-test-target="display-calculator-window"]').should(
      'have.css',
      'border-bottom',
      '2px solid rgb(112, 112, 112)'
    )
    cy.get('[data-test-target="display-expression"]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
  })
  it('It is should be check all css style before switching to the dark theme History component', () => {
    cy.visit('/')

    // Add new expression to the history list
    cy.get('[data-test-target="keypad-element-with-keycup-1"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-+"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-2"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()

    //Check if the expression appear to the history list
    cy.get('[data-test-target="history-item-0"]')
      .should('exist')
      .should('have.text', '1+2')

    //Check style of History
    cy.get('[data-test-target="history-item-0"]').should(
      'have.css',
      'color',
      'rgb(0, 0, 0)'
    )
    cy.get('[data-test-target="control-panel-button"]').should(
      'have.css',
      'border-left',
      '2px solid rgb(112, 112, 112)'
    )
  })
  it('It is should be check all css style after switching to the dark theme History component', () => {
    cy.visit('/')

    // Change to the dark theme
    cy.get('[data-test-target="nav-link-settings"]').click()
    cy.get('[data-test-target="button-theme-switcher"]').click()
    cy.get('[data-test-target="button-theme-color-dark"]').click()
    cy.get('[data-test-target="nav-link-home"]').click()

    // Add new expression to the history list
    cy.get('[data-test-target="keypad-element-with-keycup-1"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-+"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-2"]').click()
    cy.get('[data-test-target="keypad-element-with-keycup-="]').click()

    //Check if the expression appear to the history list
    cy.get('[data-test-target="history-item-0"]')
      .should('exist')
      .should('have.text', '1+2')

    //Check style of History
    cy.get('[data-test-target="history-item-0"]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
    cy.get('[data-test-target="control-panel-button"]').should(
      'have.css',
      'border-left',
      '2px solid rgb(112, 112, 112)'
    )
  })
  it('It is should be check all css style before switching to the dark theme ControlPanel component', () => {
    cy.visit('/')

    cy.get('[data-test-target="control-panel-button"]').should(
      'have.css',
      'border-left',
      '2px solid rgb(112, 112, 112)'
    )
    cy.get('[data-test-target="control-panel-button"]')
      .realHover()
      .should('have.css', 'background-color', 'rgb(240, 240, 240)')
      .click()

    // Check style after click to the sidebar button
    cy.get('[data-test-target="sidebar-block"]').should(
      'have.css',
      'background-color',
      'rgb(112, 112, 112)'
    )
    cy.get('[data-test-target="sidebar-button"]')
      .should('have.css', 'border', '1px solid rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .realHover()
      .should('have.css', 'color', 'rgb(67, 67, 67)')
      .should('have.css', 'border-color', 'rgb(67, 67, 67)')
  })
  it('It is should be check all css style after switching to the dark theme ControlPanel component', () => {
    cy.visit('/')

    // Change to the dark theme
    cy.get('[data-test-target="nav-link-settings"]').click()
    cy.get('[data-test-target="button-theme-switcher"]').click()
    cy.get('[data-test-target="button-theme-color-dark"]').click()
    cy.get('[data-test-target="nav-link-home"]').click()

    cy.get('[data-test-target="control-panel-button"]').should(
      'have.css',
      'border-left',
      '2px solid rgb(112, 112, 112)'
    )
    cy.get('[data-test-target="control-panel-button"]')
      .realHover()
      .should('have.css', 'background-color', 'rgb(36, 36, 36)')
      .click()

    // Check style after click to the sidebar button
    cy.get('[data-test-target="sidebar-block"]').should(
      'have.css',
      'background-color',
      'rgb(102, 62, 193)'
    )
    cy.get('[data-test-target="sidebar-button"]')
      .should('have.css', 'border', '1px solid rgb(255, 255, 255)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .realHover()
      .should('have.css', 'color', 'rgb(67, 67, 67)')
      .should('have.css', 'border-color', 'rgb(67, 67, 67)')
  })
  it('It is should be check all css style before switching to the dark theme ManageSettings component', () => {
    cy.visit('/')
    // Go to the settings page
    cy.get('[data-test-target="nav-link-settings"]').click()
    // Check css styles
    cy.get('[data-test-target="manage-settings-block"]').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)'
    )
    cy.get('[data-test-target="manage-settings-title"]').should(
      'have.css',
      'color',
      'rgb(0, 0, 0)'
    )
    cy.get('[data-test-target="manage-panel-label"]').should(
      'have.css',
      'color',
      'rgb(0, 0, 0)'
    )
    cy.get('[data-test-target="button-theme-switcher"]')
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('have.css', 'border', '2px solid rgb(67, 67, 67)')
      .should(
        'have.css',
        'background',
        'rgb(255, 255, 255) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      .click()

    cy.get('[data-test-target="button-theme-color-dark"]')
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should(
        'have.css',
        'background',
        'rgb(255, 255, 255) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      .should('have.css', 'border', '2px solid rgb(112, 112, 112)')
      .realHover()
      .should(
        'have.css',
        'background',
        'rgb(233, 233, 233) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )

    cy.get('[data-test-target="button-theme-color-light"]')
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should(
        'have.css',
        'background',
        'rgb(255, 255, 255) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      .realHover()
      .should(
        'have.css',
        'background',
        'rgb(233, 233, 233) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )

    cy.get('[data-test-target="clear-all-history-button"]')
      .should('have.css', 'border', '2px solid rgb(67, 67, 67)')
      .should(
        'have.css',
        'background',
        'rgb(242, 242, 242) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      .should('have.css', 'color', 'rgb(0, 0, 0)')
  })
  it('It is should be check all css style before switching to the dark theme ManageSettings component', () => {
    cy.visit('/')

    // Change to the dark theme
    cy.get('[data-test-target="nav-link-settings"]').click()
    cy.get('[data-test-target="button-theme-switcher"]').click()
    cy.get('[data-test-target="button-theme-color-dark"]').click()
    cy.get('[data-test-target="nav-link-home"]').click()

    // Go to the settings page
    cy.get('[data-test-target="nav-link-settings"]').click()

    // Check css styles
    cy.get('[data-test-target="manage-settings-block"]').should(
      'have.css',
      'background-color',
      'rgb(22, 22, 22)'
    )
    cy.get('[data-test-target="manage-settings-title"]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
    cy.get('[data-test-target="manage-panel-label"]').should(
      'have.css',
      'color',
      'rgb(255, 255, 255)'
    )
    cy.get('[data-test-target="button-theme-switcher"]')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('have.css', 'border', '2px solid rgb(67, 67, 67)')
      .should(
        'have.css',
        'background',
        'rgb(45, 45, 45) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      .click()

    cy.get('[data-test-target="button-theme-color-dark"]')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should(
        'have.css',
        'background',
        'rgb(45, 45, 45) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      .should('have.css', 'border', '2px solid rgb(112, 112, 112)')
      .realHover()
      .should(
        'have.css',
        'background',
        'rgb(89, 89, 89) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )

    cy.get('[data-test-target="button-theme-color-light"]')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should(
        'have.css',
        'background',
        'rgb(45, 45, 45) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      .realHover()
      .should(
        'have.css',
        'background',
        'rgb(89, 89, 89) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )

    cy.get('[data-test-target="clear-all-history-button"]')
      .should('have.css', 'border', '2px solid rgb(67, 67, 67)')
      .should(
        'have.css',
        'background',
        'rgb(45, 45, 45) none no-repeat scroll 0% 0% / auto padding-box padding-box'
      )
      .should('have.css', 'color', 'rgb(255, 255, 255)')

    cy.get('[data-test-target="button-theme-color-light"]').click()
  })
})
