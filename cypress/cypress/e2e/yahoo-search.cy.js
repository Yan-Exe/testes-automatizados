// Teste automatizado para validar a busca no Yahoo

// Primeiramento é efetuado ocesso o endereço do Yahoo
// Em seguida, no campo de busca e digita-se "Pacto Soluções" e apertado 'Enter'.
// Onde então é validado se houve um resultado adequado

describe('Validação de busca no Yahoo', () => {
  it('Deve exibir resultados adequados na busca', () => {
    cy.visit('https://br.search.yahoo.com/?fr2=p:fprd,mkt:br')

    cy.get('input[name="p"').type('Pacto Soluções{enter}');

    cy.contains('Pacto Sistema para Academias').should('be.visible');
    cy.log("Busca sucessida")
  })
})  