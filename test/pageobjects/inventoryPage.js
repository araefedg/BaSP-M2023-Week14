class InventoryPage {
  open(url) {
    return browser.url(url);
  }
// me traje el boton con el data test
  get productSortButton() {
    return $('[data-test="product_sort_container"]');
  }
//me traje todas las opciones con el option
  get optionToSelectNameAToZ() {
    return $('option[value="az"]');
  }

  get optionToSelectNameZToA() {
    return $('option[value="za"]');
  }

  get optionToSelectPriceLoHi() {
    return $('option[value="lohi"]');
  }

  get optionToSelectPriceHiLo() {
    return $('option[value="hilo"]');
  }
  // ADD TO CART BUTTONS
  get addToCartButtonBackpack() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get addToCartButtonBikeLight() {
    return $("#add-to-cart-sauce-labs-bike-light");
  }

  get addToCartButtonBoltTshirt() {
    return $("#add-to-cart-sauce-labs-bolt-t-shirt");
  }

  get addToCartButtonFleeceJacket() {
    return $("#add-to-cart-sauce-labs-fleece-jacket");
  }

  get addToCartButtonOnesie() {
    return $("#add-to-cart-sauce-labs-onesie");
  }

  get addToCartButtonAllTheTshirt() {
  return $('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
}


  // REMOVE FROM CART BUTTON
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

  get removeFromCartButtonAllTheTshirt() {
    return $('[id="remove-test.allthethings()-t-shirt-(red)"]');
  }

    // SHOPPING BUTTON
  get shoppingCartButton() {
    return $("#shopping_cart_container");
  }

  async selectSort(option) {
    await this.productSortButton.click();

    switch (option) {
      case "name-atoz":
        await this.optionToSelectNameAToZ.click();
        break;
      case "name-ztoa":
        await this.optionToSelectNameZToA.click();
        break;
      case "price-lohi":
        await this.optionToSelectPriceLoHi.click();
        break;
      case "price-hilo":
        await this.optionToSelectPriceHiLo.click();
    }
  }

  async selectAddToCart(option) {
    const button = this.addToCartButtons[option];
    await button.click();
  }


  get addToCartButtons() {
    return {
      "backpack": this.addToCartButtonBackpack,
      "bike-light": this.addToCartButtonBikeLight,
      "bolt-tshirt": this.addToCartButtonBoltTshirt,
      "fleece-jacket": this.addToCartButtonFleeceJacket,
      "onesie": this.addToCartButtonOnesie,
      "allthethings-tshirt": this.addToCartButtonAllTheTshirt
    };
  }

  async selectRemoveFromCart(option) {
    const button = this.removeFromCartButtons[option];
    await button.click();
  }

  get removeFromCartButtons() {
    return {
      "backpack": this.removeFromCartButtonBackpack,
      "bike-light": this.removeFromCartButtonBikeLight,
      "bolt-tshirt": this.removeFromCartButtonBoltTshirt,
      "fleece-jacket": this.removeFromCartButtonFleeceJacket,
      "onesie": this.removeFromCartButtonOnesie,
      "allthethings-tshirt": this.removeFromCartButtonAllTheTshirt
    };
  }

  async shoppingButtonClick() {
    await this.shoppingCartButton.click();
  }
}

export default new InventoryPage();
