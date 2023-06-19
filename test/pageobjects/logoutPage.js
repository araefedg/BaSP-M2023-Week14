class LogoutPage {
  get menuBurgerButton() {
    return $("#react-burger-menu-btn");
  }

  get logoutSidebarButton() {
    return $("#logout_sidebar_link");
  }

  open(url) {
    return browser.url(url);
  }

  async logout() {
    await this.menuBurgerButton.click();
    await this.logoutSidebarButton.click();
  }
}

export default LogoutPage;
