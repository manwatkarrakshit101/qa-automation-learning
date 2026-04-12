const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');

test('Home page test', async ({ page }) => {
  const home = new HomePage(page);
  await home.navigate();
  const title = await home.getTitle();
  console.log(title);
  await expect(page).toHaveTitle(/.*/);
});
