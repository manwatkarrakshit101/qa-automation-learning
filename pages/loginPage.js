class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
  }

  async navigate() {
    await this.page.goto('https://demo.visionwaves.com/netsingularity/');
  }

  async login(username, password) {
    await this.page.getByRole('textbox', { name: 'Username or email' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign in' }).click();
  }
}

module.exports = { LoginPage };
