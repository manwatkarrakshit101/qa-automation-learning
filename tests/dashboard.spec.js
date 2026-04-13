const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('Dashboard Tests', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('sahil@Visionwaves.com', 'Vision@123');
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(10000);
    const dashboard = new DashboardPage(page);
    await dashboard.navigateToDashboard();
  });

  test('Default dropdowns visible hain', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await expect(dashboard.transportDropdown).toBeVisible();
    await expect(dashboard.advaDropdown).toBeVisible();
  });

  test('Active Alerts section visible hai', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await expect(dashboard.activeAlertsHeading).toBeVisible();
  });

  test('Active Alerts labels visible hain', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await expect(dashboard.activeCount).toBeVisible();
    await expect(dashboard.deteriorationCount).toBeVisible();
    await expect(dashboard.normalCount).toBeVisible();
    await expect(dashboard.notificationCount).toBeVisible();
    await expect(dashboard.outageCount).toBeVisible();
    await expect(dashboard.criticalCount).toBeVisible();
    await expect(dashboard.majorCount).toBeVisible();
    await expect(dashboard.minorCount).toBeVisible();
    await expect(dashboard.warningCount).toBeVisible();
  });

  test('Active Alerts counts 0 ya undefined nahi hone chahiye', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    // Har count ka number lo aur verify karo
    const counts = [
      { name: 'Active',        locator: page.locator('.vw-card-description').getByText('Active', { exact: true }).first().locator('..').locator('.vw-card-metric, .count, [class*="count"], [class*="value"], [class*="number"]') },
    ];

    // Simple approach — number elements check karo
    const allNumbers = page.locator('.vw-card-metric-value, [class*="metric-value"], [class*="count-value"]');
    const count = await allNumbers.count();

    for (let i = 0; i < count; i++) {
      const text = await allNumbers.nth(i).innerText();
      const value = text.trim();
      console.log(`Count ${i}: ${value}`);
      expect(value).not.toBe('');
      expect(value).not.toBe('0');
      expect(value).not.toBe('undefined');
    }
  });

});
