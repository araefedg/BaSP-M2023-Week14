import LoginPage from "../pageobjects/loginPage";

describe("LoginPage with performace glitch user ", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("performance_glitch_user", "secret_sauce");
  });
});
