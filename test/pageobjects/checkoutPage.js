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

  get continueButton() {
    return $("#continue");
  }

  async fillForm(firstName, lastName, zip) {
    await this.inputName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputZip.setValue(zip);
  }
}


export default new CheckoutPage();
