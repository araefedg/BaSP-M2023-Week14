class CartPage {
  open(url) {
    return browser.url(url);
  }

  get removeButtonBikeLight() {
    return $("#remove-sauce-labs-bike-light");
  }

  get checkoutButton() {
    return $("#checkout");
  }

  async buyItems() {
    await this.removeButtonBikeLight.click();
    await this.checkoutButton.click();
  }
}

export default new CartPage();
