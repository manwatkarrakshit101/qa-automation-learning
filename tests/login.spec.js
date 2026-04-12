const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('Login Test', async ({ page }) => {
  const login = new LoginPage(page);  // ← yeh missing tha!
  await login.navigate();
  await login.login('sahil@Visionwaves.com', 'Vision@123');

  await page.waitForTimeout(8000);

  await expect(page.getByText('Alert dashboard')).toBeVisible({ timeout: 20000 });
  await expect(page).toHaveURL(/netsingularity/);

});
