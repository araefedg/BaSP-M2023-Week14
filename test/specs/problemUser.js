import LoginPage from "../pageobjects/loginPage";
import InventoryPage from "../pageobjects/inventoryPage";
import CartPage from "../pageobjects/cartPage";
import CheckoutPage from "../pageobjects/checkoutPage";


describe("LoginPage with problem user", () => {
  it("should fail login with invalid password", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("problem_user", "secret_sau00");
    expect(await LoginPage.errorMessage.getText()).toContain(
      "Epic sadface: Username and password do not match any user in this service"
  )});
});

describe("LoginPage with problem user", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("problem_user", "secret_sauce");
  });
});


describe("InventoryPage with problem user", () => {
  it("should add items to cart and remove them succesfully", async () => {
    await InventoryPage.open("https://www.saucedemo.com/inventory.html");
    await InventoryPage.selectItems();
  });
});

describe("CartPage with problem user", () => {
  it("should remove one item from the list and checkout", async () => {
    await CartPage.open("https://www.saucedemo.com/cart.html");
    await CartPage.buyItems();
  });
});

describe("CheckoutPage with problem user", () => {
  it("should fill the inputs and continue", async () => {
    await CheckoutPage.open("https://www.saucedemo.com/checkout-step-one.html");
    await CheckoutPage.fillForm("firstName", "lastName", "0000");

    // Verificar que los campos no estén vacíos antes de continuar
    expect(await CheckoutPage.inputName.getValue()).toBeTruthy();
    expect(await CheckoutPage.inputLastName.getValue()).toBeTruthy();
    expect(await CheckoutPage.inputZip.getValue()).toBeTruthy();

    await CheckoutPage.continueButton.click();
  });
});



