describe('My First Test', () => {
  it('Visits the Homepage of SVA', () => {
    cy.visit('https://www.svalmelo.nl/')

    cy.contains('Vereniging')
  })
})