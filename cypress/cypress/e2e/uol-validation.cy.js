// Teste automatizado para validar a data de atualização dos termos de segurança no UOL

// Primeiro é efetuado o acesso ao site do UOL
// Onde é localizado o link 'Segurança e privacidade' e clicado
// Após, é aguardado o carregamento da página externa
// Logo, é procurado o texto específico de atualização
// Onde então o parágrafo é validado e a data salva no log

describe('Valida data de atualização de termos no UOL', () => {
  it('Validado a data de atualização', () => {
    cy.visit('https://www.uol.com.br/');

    cy.contains('a', 'Segurança e privacidade').click();

    cy.on('uncaught:exception', () => false);

    cy.origin('https://sobreuol.noticias.uol.com.br', () => {
      cy.contains('p', 'Atualização:').then(data => {
          const dataAtualizacao = data.text();
          cy.log('Data de atualização: ' + dataAtualizacao);
      })
    });
  });
});
