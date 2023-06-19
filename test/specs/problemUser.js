import LoginPage from "../pageobjects/loginPage";

describe("LoginPage with problem user ", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("problem_user", "secret_sauce");
  });
});
