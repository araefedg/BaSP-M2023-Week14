import LoginPage from "../pageobjects/loginPage";

describe("LoginPage with locked out user ", () => {
  it("should fail to login with locked out user", async () => {
    await LoginPage.open("https://www.saucedemo.com/");
    await LoginPage.login("locked_out_user", "secret_sauce");
    expect(await LoginPage.errorMessage.getText()).toContain(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
