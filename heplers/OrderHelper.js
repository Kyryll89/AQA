const Pages = require("../pages/Pages");

class OrderHelper extends Pages {
  async selectCountry(country, countryFirstLetters) {
    await this.ordersReviewPage.countryInput.typeInputWithDelaying(countryFirstLetters);
    await this.ordersReviewPage.dropdownList.waitForElement();
    const dropdown = await this.ordersReviewPage.dropdownText.getAllTextContent();
    // console.log(dropdown);
    for (let i = 0; i < dropdown.length; i++) {
      if (dropdown[i] === country) {
        await page
          .locator(this.ordersReviewPage.dropdownList.elementLocator)
          .nth(i)
          .click();
        break;
      }
    }
  }

  async placeOrder(country, countryFirstLetters) {
    await this.header.cartButton.clickElement();
    await this.cartPage.checkoutButton.clickElement();
    await this.selectCountry(country, countryFirstLetters);
    await this.ordersReviewPage.placeOrderButton.clickElementAndWaitForLoadState();
  }

}

module.exports = OrderHelper;
