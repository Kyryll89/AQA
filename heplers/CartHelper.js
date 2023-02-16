const Pages = require("../pages/Pages.js");

class CartHelper extends Pages {
  async searchProductAddCart(productName) {
    const titles = await this.dashboardPage.productsText.getAllTextContent();
    // console.log(titles);
    for (let i = 0; i < titles.length; i++) {
      if (titles[i] === productName) {
        await page
          .locator(this.dashboardPage.products.elementLocator)
          .nth(i)
          .locator(this.dashboardPage.productAddToCart.elementLocator)
          .click();
        break;
      }
    }
  }

  async addEveryProductToCart() {
    const totalNumberOfProducts =
      await this.dashboardPage.products.countElements();
    // console.log(totalNumberOfProducts);
    for (let i = 0; i < totalNumberOfProducts; i++) {
      await page
        .locator(this.dashboardPage.products.elementLocator)
        .nth(i)
        .locator(this.dashboardPage.productAddToCart.elementLocator)
        .click();
    }
  }

  async deleteAllProductsFromCart() {
    // await this.header.cartButton.clickElement(page);
    await page.waitForLoadState("networkidle");
    const numberOfProductsInCart =
      await this.cartPage.productsInCartDeleteButton.countElements();
    // console.log(numberOfProductsInCart);
    for (let i = numberOfProductsInCart - 1; i >= 0; i--) {
      await page
        .locator(this.cartPage.productsInCartDeleteButton.elementLocator)
        .nth(i)
        .click();
    }
  }
}
module.exports = CartHelper;
