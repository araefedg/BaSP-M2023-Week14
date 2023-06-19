import LoginPage from "../pageobjects/loginPage";

describe("LoginPage with performace glitch user ", () => {
  it("should login with valid credentials", async () => {
    const loginPage = new LoginPage();
    await loginPage.open("https://www.saucedemo.com/");
    await loginPage.login("performance_glitch_user", "secret_sauce");
  });
});
