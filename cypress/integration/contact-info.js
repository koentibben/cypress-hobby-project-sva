describe('Checking that the site contains contact details', () => {
  it('Checks the contact info', () => {
    cy.visit('https://www.svalmelo.nl')

    cy.contains('Bezoekadres: Koedijk 3')
    cy.contains('E-mail: bestuur@svalmelo.nl')
    cy.contains('Telefoon: 0546-817703')
  })
})