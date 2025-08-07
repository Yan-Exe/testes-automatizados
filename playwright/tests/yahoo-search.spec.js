// Teste automatizado para validar a busca no site do Yahoo

// Acesso o site e verificando se o titulo está correto
// Então é localizado o campo de busca e escrito 'Pacto soluções'
// É apertado 'Enter' e aguardado o resultado da buscca
// Onde então é validado se houve um resultado adequado
// E aguardo 3 segundos para validação

const { test, expect } = require('@playwright/test');

test('Validação de busca no Yahoo', async ({ page }) => {
  await page.goto('https://br.yahoo.com/');
  await expect(page).toHaveTitle('Yahoo Search – Busca na Web');

  await page.fill('input[name="p"]', 'Pacto Soluções');

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    page.keyboard.press('Enter'),
  ]);

  await expect(page.locator('text=Pacto Sistema para Academias')).toBeVisible();

  await page.waitForTimeout(3000);

});
