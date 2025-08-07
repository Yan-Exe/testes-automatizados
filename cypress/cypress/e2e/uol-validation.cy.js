describe('Teste UOL com cy.origin', () => {
  it('Valida texto Atualização na página externa', () => {
    cy.visit('https://www.uol.com.br/');

    cy.contains('a', 'Segurança e privacidade').click();

    cy.on('uncaught:exception', () => false);

    cy.origin('https://sobreuol.noticias.uol.com.br', () => {
      cy.contains('p', 'Atualização:').should('be.visible');
    });
  });
});
