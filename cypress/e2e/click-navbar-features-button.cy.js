describe('Clicking navigation bar Features button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4173'),
    cy.get('nav').siblings('button').first().then((button) => {
      if (button.is(':visible')) {
        cy.wrap(button).click() // make navbar buttons visible
      }
    }),
    cy.get('nav').contains('Features').click()
  }),
  it('clicks the button', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // handle the error
      console.error(err)
    }),
    cy.location('hash').should('include', 'features')
  })
})