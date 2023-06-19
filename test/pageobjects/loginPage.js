class LoginPage {
  open(url) {
    return browser.url(url);
  }

  get inputUserName() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get buttonLogin() {
    return $("#login-button");
  }

  getErrorMessage() {
    return "Epic sadface: Sorry, this user has been locked out.";
  }

  async login(username, password) {
    await this.inputUserName.setValue(username);
    await this.inputPassword.setValue(password);
    await this.buttonLogin.click();
  }
}

export default LoginPage;
