const Pages = require("../pages/Pages");

class AttributeHelper extends Pages {
  async returnCheckoutLocator() {
    return await this.cartPage.checkoutButton.returnElementLocator();
  }

  async returnAllertDialogLocator() {
    return await this.loginPage.allertDialog.getTextContent();
  }

  async returnProductsInCartLocator() {
    return await this.cartPage.productsInCartText.getTextContent();
  }

  async returnThankYouMessageLocator() {
    return await this.thankYouPage.thankYouMessage.getTextContent();
  }

  async returnProductsInDashboardLocator() {
    return await this.dashboardPage.products.returnElementLocator();
  }
}
module.exports = AttributeHelper;
