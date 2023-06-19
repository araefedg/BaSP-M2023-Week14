import LoginPage from "../pageobjects/loginPage";
import LogoutPage from "../pageobjects/logoutPage";

describe("LoginPage with standard user", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("standard_user", "secret_sauce");
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
