class CheckoutCompletePage {
  open(url) {
    return browser.url(url);
  }

  get backToProductsButton() {
    return $("#back-to-products");
  }

  async returnToProducts(timeout = 2000) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error(`Max response time exceeded (${timeout} ms)`));
      }, timeout)
    );

    await Promise.race([this.backToProductsButton.click(), timeoutPromise]);
  }
}

export default new CheckoutCompletePage();
