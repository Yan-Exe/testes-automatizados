# Testes Automatizados com Cypress e Playwright

Este repositório contém dois conjuntos de testes automatizados desenvolvidos com as ferramentas **Cypress** e **Playwright**.

## Automações

- Validação da busca no Yahoo.  
- Validação da data de atualização dos termos de segurança do UOL.

Cypress

- cypress/
  Diretório principal dos testes Cypress.

  - e2e/
    Contém os testes end-to-end escritos em Cypress.
    - `uol-validation.cy.js` - Testes para validar dados no site do UOL.
    - `yahoo-search.cy.js` - Testes para validar busca no Yahoo.

  - fixtures/
    Arquivos estáticos e dados de exemplo usados nos testes.

  - support/  
    Arquivos de configuração e comandos customizados para Cypress.

- cypress.config.js  
  Arquivo de configuração do Cypress.

---

 Playwright

- playwright/  
  Diretório destinado aos testes automatizados com Playwright.

- tests/  
  Exemplos e testes adicionais, possivelmente para aprendizado e desenvolvimento com Playwright.

- playwright.config.js 
  Arquivo de configuração do Playwright.

---
