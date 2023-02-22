const Pages = require("../pages/Pages");

class AttributeHelper extends Pages {
  async checkChekoutButtontIsVisible() {
    return await this.cartPage.checkoutButton.checkElementIsVisible();
  }

  async checkChekoutButtontIsHidden() {
    return await this.cartPage.checkoutButton.checkElementIsHidden();
  }

  async returnAllertDialogText() {
    return await this.loginPage.allertDialog.getTextContent();
  }

  async returnProductsInCartText() {
    return await this.cartPage.productsInCartText.getTextContent();
  }

  async returnThankYouMessageText() {
    return await this.thankYouPage.thankYouMessage.getTextContent();
  }

  async returnProductsInDashboardLocator() {
    return await this.dashboardPage.products.returnElementLocator();
  }
}
module.exports = AttributeHelper;