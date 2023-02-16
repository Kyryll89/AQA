const { URLS } = require("../constants/Constants.js");
const Pages = require("../pages/Pages.js");

class NavigationHelper extends Pages {
  async navigateToCart() {
    await this.header.cartButton.clickElementAndWaitForLoadState();
  }

  async navigateToLoginPage() {
    await page.goto(URLS.loginPageLink);
  }

  async navigateToLoginPageAndWaitForElement() {
    await page.goto(URLS.loginPageLink);
    await this.dashboardPage.productsText.waitForElement();
  }
}

module.exports = NavigationHelper;
