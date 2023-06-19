import LoginPage from "../pageobjects/loginPage";
import LogoutPage from "../pageobjects/logoutPage";

describe("LoginPage with standard user", () => {
  it("should login with valid credentials", async () => {
    const loginPage = new LoginPage();
    await loginPage.open("https://www.saucedemo.com/");
    await loginPage.login("standard_user", "secret_sauce");
  });
});

describe("LogoutPage", () => {
  it("should logout and redirect to the main page", async () => {
    const logoutPage = new LogoutPage();
    await logoutPage.open("https://www.saucedemo.com/inventory.html");
    await logoutPage.logout();

    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual("https://www.saucedemo.com/");
  });
});
