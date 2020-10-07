describe('Checking the site', () => {
  it('Checks all pages', () => {
    cy.visit('https://www.svalmelo.nl/')
    cy.screenshot()

// check that all headers are there
    cy.contains('Home')
    cy.contains('Vereniging')
    cy.contains('Historie')
    cy.contains('Teams')
    cy.contains('Sponsors')
    cy.contains('Lidmaatschap')
    cy.contains('Privacyverklaring')
    cy.contains('Webshop')
    cy.contains('Contact')
    cy.contains('Vacatures')

// check link to socials at the bottom of the page
    cy.get('a[href*="twitter"]')
    cy.get('a[href*="facebook"]')
  })
})