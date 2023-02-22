const Pages = require("../pages/Pages.js");

class UserHelper extends Pages {
  async loginToSite(userName, password) {
    await allure.step("Login to site", async () => {
      await this.loginPage.userName.typeInput(userName);
        await this.loginPage.password.typeInput(password);
        await this.loginPage.signInButton.clickElement();
    });
  }
}

module.exports = UserHelper;

