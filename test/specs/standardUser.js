import LoginPage from "../pageobjects/loginPage";
import LogoutPage from "../pageobjects/logoutPage";
import InventoryPage from "../pageobjects/inventoryPage";
import CartPage from "../pageobjects/cartPage";
import CheckoutPage from "../pageobjects/checkoutPage";
import CheckoutPage2 from "../pageobjects/checkoutPage2";
import CheckoutCompletePage from "../pageobjects/checkoutCompletePage";

describe("LoginPage with standard user", () => {
  it("should fail login with empty password input", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("standard_user", "");
    expect(await LoginPage.errorMessage.getText()).toContain(
      "Epic sadface: Password is required"
  )});
});

describe("LoginPage with standard user", () => {
  it("should fail login with empty username input", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("", "secret_sauce");
    expect(await LoginPage.errorMessage.getText()).toContain(
      "Epic sadface: Username is required"
  )});
});

describe("LoginPage with standard user", () => {
  it("should fail login with invalid password", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("standard_user", "secret_sau00");
    expect(await LoginPage.errorMessage.getText()).toContain(
      "Epic sadface: Username and password do not match any user in this service"
  )});
});

describe("LoginPage with standard user", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("standard_user", "secret_sauce");
  });
});

describe("InventoryPage with standard user", () => {
  it("should order items by Name (a-z/z-a) and price (lo-hi/hi-lo)", async () => {
    await InventoryPage.open("https://www.saucedemo.com/inventory.html");
    await InventoryPage.selectSort("name-ztoa");
    await InventoryPage.selectSort("price-lohi");
    await InventoryPage.selectSort("price-hilo");
    await InventoryPage.selectSort("name-atoz");
  });
});

describe("InventoryPage with standard user", () => {
  it("should add items to cart and remove them successfully", async () => {
    await InventoryPage.open("https://www.saucedemo.com/inventory.html");
    await InventoryPage.selectAddToCart("backpack");
    await InventoryPage.selectAddToCart("bike-light");
    await InventoryPage.selectAddToCart("bolt-tshirt");
    await InventoryPage.selectRemoveFromCart("backpack");
    await InventoryPage.shoppingButtonClick();
  });
});

describe("CartPage with standard user", () => {
  it("should remove one item from the list, go back, choose another item and checkout", async () => {
    await CartPage.open("https://www.saucedemo.com/cart.html");
    await CartPage.buyItems("bike-light");
    await CartPage.continueShopping();
    await CartPage.open("https://www.saucedemo.com/inventory.html");
    await InventoryPage.selectAddToCart("backpack");
    await InventoryPage.shoppingButtonClick();
    await CartPage.chekoutClickButton();
  });
});

describe("CheckoutPage with standard user", () => {
  it("should fail to continue with empty fields", async () => {
    await CheckoutPage.open("https://www.saucedemo.com/checkout-step-one.html");
    await CheckoutPage.fillForm("", "", "");
    await CheckoutPage.continueButtonClick();
    expect(await CheckoutPage.errorMessage.getText()).toContain(
      "Error: First Name is required"
)});
});

describe("CheckoutPage with standard user", () => {
  it("should fail to continue with empty last name field", async () => {
    await CheckoutPage.open("https://www.saucedemo.com/checkout-step-one.html");
    await CheckoutPage.fillForm("firstName", "", "0000");
    await CheckoutPage.continueButtonClick();
    expect(await CheckoutPage.errorMessage.getText()).toContain(
      "Error: Last Name is required"
)});
});

describe("CheckoutPage with standard user", () => {
  it("should fail to continue with missing postal code field", async () => {
    await CheckoutPage.open("https://www.saucedemo.com/checkout-step-one.html");
    await CheckoutPage.fillForm("firstName", "lastName", "");
    await CheckoutPage.continueButtonClick();
    expect(await CheckoutPage.errorMessage.getText()).toContain(
      "Error: Postal Code is required"
)});
});

describe("CheckoutPage with standard user", () => {
  it("should cancel, return, fill the inputs and continue", async () => {
    await CheckoutPage.open("https://www.saucedemo.com/checkout-step-one.html");
    await CheckoutPage.cancelButtonClick();
    await CheckoutPage.open("https://www.saucedemo.com/cart.html");
    await CartPage.chekoutClickButton();
    await CheckoutPage.fillForm("firstName", "lastName", "0000");
    await CheckoutPage.continueButtonClick();
  });
});

describe("CheckoutPage2 with standard user", () => {
  it("should cancel the operation, return to the inventory, add a new item and finish ", async () => {
    await CheckoutPage2.open(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    await CheckoutPage2.cancelBuy();
    await InventoryPage.selectAddToCart("fleece-jacket");
    await InventoryPage.shoppingButtonClick();
    await CartPage.chekoutClickButton();
    await CheckoutPage.fillForm("firstName", "lastName", "0000");
    await CheckoutPage.continueButtonClick();
    await CheckoutPage2.finishBuy();
  });
});

describe("CheckoutComplete with standard user", () => {
  it("should finish the operation and return to inventory", async () => {
    await CheckoutCompletePage.open(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await CheckoutCompletePage.returnToProducts();
  });
});

describe("LogoutPage", () => {
  it("should logout and redirect to the login page", async () => {
    await LogoutPage.open("https://www.saucedemo.com/inventory.html");
    await LogoutPage.logout();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual("https://www.saucedemo.com/");
  });
});




