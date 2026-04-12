class HomePage {
  constructor(page) {
    this.page = page;

    this.loginBtn = 'text=Login';
  }

  async navigate() {
    await this.page.goto('https://demo.visionwaves.com/netsingularity/');
  }

  async getTitle() {
    return await this.page.title();
  }

  async clickLogin() {
    await this.page.click(this.loginBtn);
  }
}

module.exports = { HomePage };
