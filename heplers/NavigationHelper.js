const { URLS } = require("../constants/Constants.js");
const Pages = require("../pages/Pages.js");

class NavigationHelper extends Pages {
  async navigateToCart() {
    await allure.step("Navigate to cart", async () => {
      await this.header.cartButton.clickElementAndWaitForLoadState();
    })
  }

  async navigateToLoginPage() {
    await allure.step("Navigate to login page", async () => {
      await page.goto(URLS.loginPageLink);
    })
  }

  async navigateToLoginPageAndWaitForElement() {
    await allure.step("Navigate to login page & wait for element", async () => {
      await page.goto(URLS.loginPageLink);
      await this.dashboardPage.productsText.waitForElement();
    })
  }
}

module.exports = NavigationHelper;
