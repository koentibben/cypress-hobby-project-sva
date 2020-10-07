describe('Checking that the vacancies functionality is OK', () => {
  it('Check vacancies', () => {
    cy.visit('https://www.svalmelo.nl/vacatures')

    cy.get('[@id="nxs-widget-l9455768969"]/div[2]').focus()
    cy.get('[@name="Versturen"]')
  })
})