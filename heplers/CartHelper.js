const Pages = require("../pages/Pages.js");

class CartHelper extends Pages {

  async addFirstProductToCart(){
    await allure.step("Add first product to the cart", async () => {
      await page.waitForLoadState("networkidle");
      await this.dashboardPage.productAddToCart.clickOnFirstElement();
    })
  }

  async searchProductAddCart(productName) {
    await allure.step(`Search product - ${productName} & add to cart`, async () => {
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
    })
  }

  async addEveryProductToCart() {
    await allure.step("Add every product to cart", async () => {
      const totalNumberOfProducts = await this.dashboardPage.products.countElements();
      // console.log(totalNumberOfProducts);
      for (let i = 0; i < totalNumberOfProducts; i++) {
        await page
          .locator(this.dashboardPage.products.elementLocator)
          .nth(i)
          .locator(this.dashboardPage.productAddToCart.elementLocator)
          .click();
        }
    })
  }

  async deleteAllProductsFromCart() {
    await allure.step("Delete all products from the cart", async () => {
      await page.waitForLoadState("networkidle");
      const numberOfProductsInCart = await this.cartPage.productsInCartDeleteButton.countElements();
      // console.log(numberOfProductsInCart);
      for (let i = numberOfProductsInCart - 1; i >= 0; i--) {
        await page
          .locator(this.cartPage.productsInCartDeleteButton.elementLocator)
          .nth(i)
          .click();
      }
      await utils.waitForSec(1);
    })
  }
}
module.exports = CartHelper;
