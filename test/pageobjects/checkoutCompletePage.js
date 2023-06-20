class CheckoutCompletePage {
  open(url) {
    return browser.url(url);
  }

  get backToProductsButton() {
    return $("#back-to-products");
  }

  async returnToProducts() {
    await this.backToProductsButton.click();
  }
}

export default new CheckoutCompletePage();
