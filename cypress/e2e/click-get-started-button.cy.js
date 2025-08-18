describe('Clicking Get Started button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4173'),
    cy.get('#pricing-button-link').click()
  }),
  it('clicks the button', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // handle the error
      console.error(err)
    }),
    cy.location('hash').should('contain', 'pricing')
  })
})