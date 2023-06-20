class CheckoutPage2 {
  open(url) {
    return browser.url(url);
  }

  get finishButton() {
    return $("#finish");
  }

  async finishBuy() {
    await this.finishButton.click();
  }
}

export default new CheckoutPage2();
