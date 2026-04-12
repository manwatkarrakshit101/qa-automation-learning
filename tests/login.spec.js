const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('Login Test', async ({ page }) => {

  await page.goto('https://demo.visionwaves.com/netsingularity/');

  await page.getByRole('textbox', { name: 'Username or email' }).fill('sahil@Visionwaves.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Vision@123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'after-login.png' });  // screenshot lega

  // ✅ Wait for dashboard / next page
  await expect(page.getByRole('heading', { name: 'Data Ops' })).toBeVisible();
  // ✅ Assertion (REAL QA)
  await expect(page).toHaveURL(/netsingularity/);

});
