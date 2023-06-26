class CheckoutPage2 {
  open(url) {
    return browser.url(url);
  }

  get cancelButton() {
    return $("#cancel");
  }

  get finishButton() {
    return $("#finish");
  }

  async cancelBuy() {
    await this.cancelButton.click();
  }

  async finishBuy() {
    await this.finishButton.click();
  }
}

export default new CheckoutPage2();
