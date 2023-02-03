import { test, expect } from '@playwright/test';

test('wishlist', async ({ page }) => {
  await page.goto('https://www.adidas.co/');
  await page.locator('a.teaser-card-wrapper___1FO3l').nth(0).click();
  await page.locator('button.gl-modal__close').click();
  await page.locator('.glass-product-card__wishlist > div > .gl-icon__wrapper').first().click();
  await page.locator('input.gl-input__field').fill('rafaboca93@gmail.com');
  await page.locator('button[type="submit"]').click();
  await page.locator('input[type="password"]').fill('Rafa1207@');
  await page.locator('button[type="submit"]').click();
  await page.locator('div.close-icon-container___3fWSM').first().click();
  await expect(page.locator('span-testid="wishlist-active"')).toBeVisible();
});
