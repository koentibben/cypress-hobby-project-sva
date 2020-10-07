describe('Checking the site its membership functionality', () => {
  it('Checks the membership functionality', () => {
    cy.visit('https://www.svalmelo.nl/lidmaatschap')
    cy.screenshot()

    cy.get('a[href*="Aanmeldingsformulier-S-V-Almelo.pdf"]')
  })
})