class DashboardPage {
  constructor(page) {
    this.page = page;

    // Dropdowns
    this.transportDropdown = page.getByLabel('Transport').getByText('Transport');
    this.advaDropdown = page.getByText('ADVA', { exact: true });

    // Active Alerts heading
    this.activeAlertsHeading = page.getByText('Active alerts', { exact: true });

    // Alert type labels
    this.activeCount = page.locator('.vw-card-description').getByText('Active', { exact: true }).first();
    this.deteriorationCount = page.locator('.vw-card-description').getByText('Deterioration', { exact: true }).first();
    this.normalCount = page.locator('.vw-card-description').getByText('Normal', { exact: true }).first();
    this.notificationCount = page.locator('.vw-card-description').getByText('Notification', { exact: true }).first();
    this.outageCount = page.locator('.vw-card-description').getByText('Outage', { exact: true }).first();
    this.criticalCount = page.locator('.vw-card-description').getByText('Critical', { exact: true }).first();
    this.majorCount = page.locator('.vw-card-description').getByText('Major', { exact: true }).first();
    this.minorCount = page.locator('.vw-card-description').getByText('Minor', { exact: true }).first();
    this.warningCount = page.locator('.vw-card-description').getByText('Warning', { exact: true }).first();

    // Number counts — sibling element jo number show karta hai
    this.activeNumber = page.locator('.vw-card-metric-value').first();
    this.criticalNumber = page.locator('.vw-card-metric-label').getByText('Critical').locator('..').locator('.vw-card-metric-value');
  }

  async navigateToDashboard() {
    await this.page.goto('https://demo.visionwaves.com/netsingularity/fault-management/dashboards/fm-alert-dashboard');
    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.page.waitForTimeout(8000);
  }

  // Count value lo aur check karo 0 ya undefined nahi hai
  async getCountValue(locator) {
    const text = await locator.innerText();
    return text.trim();
  }

  async isCountValid(locator) {
    const text = await locator.innerText();
    const value = text.trim();
    return value !== '0' && value !== '' && value !== 'undefined';
  }
}

module.exports = { DashboardPage };
