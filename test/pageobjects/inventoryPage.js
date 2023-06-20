class InventoryPage {
  open(url) {
    return browser.url(url);
  }

  get addToCartButtonBackpack() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get addToCartButtonBikeLight() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }

  get addToCartButtonBoltTshirt() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  get removeButtonBackpack() {
    return $("#remove-sauce-labs-backpack");
  }

  get shoppingCartButton() {
    return $("#shopping_cart_container");
  }

  async selectItems() {
    await this.addToCartButtonBackpack.click();
    await this.addToCartButtonBikeLight.click();
    await this.removeButtonBackpack.click();
    await this.addToCartButtonBackpack.waitForDisplayed();
    await this.addToCartButtonBoltTshirt.click();
    await this.shoppingCartButton.click();
  }
}

export default new InventoryPage();
