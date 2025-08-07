// Teste automatizado para validar a data de atualização dos termos de segurança no UOL

// Primeiro é efetuadio o acesso o site e verificando se o titulo está correto
// Então é localizado o titulo de 'Segurança e privacidade' e clicado.
// Onde após, é aguardado o carregamento
// Logo é procurado pelo texto especifico de atualizalção
// Onde então é validado e salvo o paragrafo


const { test, expect } = require('@playwright/test');

test('Valida data de atualização de termos no UOL', async ({ page }) => {
  await page.goto('https://www.uol.com.br/');
  await expect(page).toHaveTitle('UOL - Seu universo online');

  await page.getByTitle('Segurança e privacidade').click();
  await page.waitForLoadState('networkidle');

  const dataAtualizacao = await page.locator('p', { hasText: 'Atualização:' }).innerHTML();
  await expect(dataAtualizacao).toBeVisible();

  console.log(dataAtualizacao);

  await page.waitForTimeout(3000);
});
