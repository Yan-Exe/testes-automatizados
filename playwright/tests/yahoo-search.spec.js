const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
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
