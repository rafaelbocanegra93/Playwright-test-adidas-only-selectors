import { test, expect } from '@playwright/test';

test('wishlist', async ({ page }) => {
  await page.goto('https://www.adidas.co/');;
  await page.getByRole('link', { name: 'Content Card With Link' }).first().click();
  await page.getByRole('button', { name: 'Cerrar' }).click();
  await page.getByTestId('wishlist-inactive').click();
  await page.getByPlaceholder(' ').click();
  await page.getByPlaceholder(' ').fill('rafaboca93@gmail.com');
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByRole('button', { name: 'Continuar' }).click();

});
