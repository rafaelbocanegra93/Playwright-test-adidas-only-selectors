import { test, expect } from '@playwright/test';

test('wishlist', async ({ page }) => {
  await page.goto('https://www.adidas.co/');
  await page.locator('a.teaser-card-wrapper___1FO3l').nth(0).click();
  await page.getByRole('button', { name: 'Cerrar' }).click();
  await page.locator('.glass-product-card__wishlist > div > .gl-icon__wrapper').first().click();
  await page.locator('input.gl-input__field').fill('rafaboca93@gmail.com');
  await page.locator('button[type="submit"]').click();
  await page.locator('input[type="password"]').fill('rafa1207@');
  await page.locator('button[type="submit"]').click();

});
