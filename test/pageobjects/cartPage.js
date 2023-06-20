class CartPage {
  open(url) {
    return browser.url(url);
  }

  get removeButtonBikeLight() {
    return $("#remove-sauce-labs-bike-light");
  }

  get continueShoppingButton() {
    return $("#continue-shopping");
  }

  get checkoutButton() {
    return $("#checkout");
  }

  async continueShopping(timeout = 2000) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error(`Max response time exceeded (${timeout} ms)`));
      }, timeout)
    );

    await Promise.race([this.continueShoppingButton.click(), timeoutPromise]);
  }

  async buyItems() {
    await this.removeButtonBikeLight.click();
    await this.checkoutButton.click();
  }
}

export default new CartPage();
