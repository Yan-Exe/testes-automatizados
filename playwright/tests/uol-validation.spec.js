const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.uol.com.br/');
  await expect(page).toHaveTitle('UOL - Seu universo online');

  await page.getByTitle('Segurança e privacidade').click();
  await page.waitForLoadState('networkidle');

  const dataAtualizacao = await page.locator('p', { hasText: 'Atualização:' }).innerHTML();
  await expect(dataAtualizacao).toBeVisible();

  console.log(dataAtualizacao);

  await page.waitForTimeout(3000);
});
