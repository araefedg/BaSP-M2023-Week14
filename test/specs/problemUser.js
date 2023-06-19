import LoginPage from "../pageobjects/loginPage";

describe("LoginPage with problem user ", () => {
  it("should login with valid credentials", async () => {
    const loginPage = new LoginPage();
    await loginPage.open("https://www.saucedemo.com/");
    await loginPage.login("problem_user", "secret_sauce");
  });
});
