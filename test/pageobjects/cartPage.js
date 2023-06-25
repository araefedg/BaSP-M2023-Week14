class CartPage {
  open(url) {
    return browser.url(url);
  }

  get removeFromCartButtonBackpack() {
    return $("#remove-sauce-labs-backpack");
  }

  get removeFromCartButtonBikeLight() {
    return $("#remove-sauce-labs-bike-light");
  }

  get removeFromCartButtonBoltTshirt() {
    return $("#remove-sauce-labs-bolt-t-shirt");
  }

  get removeFromCartButtonFleeceJacket() {
    return $("#remove-sauce-labs-fleece-jacket");
  }

  get removeFromCartButtonOnesie() {
    return $("#remove-sauce-labs-onesie");
  }

  get removeFromCartButtons() {
    return {
      "backpack": this.removeFromCartButtonBackpack,
      "bike-light": this.removeFromCartButtonBikeLight,
      "bolt-tshirt": this.removeFromCartButtonBoltTshirt,
      "fleece-jacket": this.removeFromCartButtonFleeceJacket,
      "onesie": this.removeFromCartButtonOnesie
    };
  }
//------------------------------------------------------------
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

  async buyItems(option) {
    const button = this.removeFromCartButtons[option];
    await button.click();
  }

  async chekoutClickButton() {
    await this.checkoutButton.click();
  }
}

export default new CartPage();
