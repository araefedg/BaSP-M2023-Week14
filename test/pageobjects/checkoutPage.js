class CheckoutPage {
  open(url) {
    return browser.url(url);
  }

  get inputName() {
    return $("#first-name");
  }

  get inputLastName() {
    return $("#last-name");
  }

  get inputZip() {
    return $("#postal-code");
  }

  get cancelButton() {
    return $("#cancel");
  }

  get continueButton() {
    return $("#continue");
  }

  get errorMessage() {
    return $("h3");
  }

  async cancelButtonClick() {
    await this.cancelButton.click();
  }

  async fillForm(firstName, lastName, zip) {
    await this.inputName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputZip.setValue(zip);
  }

  async continueButtonClick() {
    await this.continueButton.click();
  }
}


export default new CheckoutPage();
