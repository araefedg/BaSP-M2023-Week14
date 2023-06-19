import LoginPage from "../pageobjects/loginPage";

describe("LoginPage with locked out user ", () => {
  it("should fail to login with locked out user", async () => {
    const loginPage = new LoginPage();
    await loginPage.open("https://www.saucedemo.com/");
    await loginPage.login("locked_out_user", "secret_sauce");

    const errorMessage = await loginPage.getErrorMessage();

    expect(errorMessage).toEqual(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
