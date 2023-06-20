import LoginPage from "../pageobjects/loginPage";
import LogoutPage from "../pageobjects/logoutPage";
import InventoryPage from "../pageobjects/inventoryPage";
import CartPage from "../pageobjects/cartPage";
import CheckoutPage from "../pageobjects/checkoutPage";
import CheckoutPage2 from "../pageobjects/checkoutPage2";
import CheckoutCompletePage from "../pageobjects/checkoutCompletePage";


describe("LoginPage with performace glitch  user", () => {
  it("should fail login with invalid password", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("performance_glitch_user", "secret_sau00");
    expect(await LoginPage.errorMessage.getText()).toContain(
      "Epic sadface: Username and password do not match any user in this service"
  )});
});

describe("LoginPage with performace glitch  user", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("performance_glitch_user", "secret_sauce");
  });
});


describe("InventoryPage with performace glitch  user", () => {
  it("should add items to cart and remove them succesfully", async () => {
    await InventoryPage.open("https://www.saucedemo.com/inventory.html");
    await InventoryPage.selectItems();
  });
});

describe("CartPage with performace glitch user", () => {
  it("should remove one item from the list and checkout", async () => {
    await CartPage.open("https://www.saucedemo.com/cart.html");
    await CartPage.buyItems();
  });
});

describe("CheckoutPage with performace glitch user", () => {
  it("should fill the inputs and continue", async () => {
    await CheckoutPage.open("https://www.saucedemo.com/checkout-step-one.html");
    await CheckoutPage.fillForm("firstName", "lastName", "0000");
  });
});

describe("CheckoutPage2 with performace glitch user", () => {
  it("should remove one item from the list and checkout", async () => {
    await CheckoutPage2.open(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    await CheckoutPage2.finishBuy();
  });
});

describe("CheckoutComplete with performace glitch user", () => {
  it("should click on back home button and return to products", async () => {
    await CheckoutCompletePage.open(
      "https://www.saucedemo.com/checkout-complete.html"
    );
    await CheckoutCompletePage.returnToProducts();
  });
});

describe("LogoutPage", () => {
  it("should logout and redirect to the main page", async () => {
    await LogoutPage.open("https://www.saucedemo.com/inventory.html");
    await LogoutPage.logout();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual("https://www.saucedemo.com/");
  });
});
