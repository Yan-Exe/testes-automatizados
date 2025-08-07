describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://br.search.yahoo.com/?fr2=p:fprd,mkt:br')

    cy.get('input[name="p"').type('Pacto Soluções{enter}');

    cy.contains('Pacto Sistema para Academias').should('be.visible');
  })
})  