const { URLS } = require("../constants/Constants.js");
const Pages = require("../pages/Pages.js");

class NavigationHelper extends Pages {

    async navigateToCart (page){
        await this.header.cartButton.clickElementAndWaitForLoadState(page);
    }

    async navigateToLoginPage (page){
        await page.goto(URLS.loginPageLink);
    }

    async navigateToLoginPageAndWaitForElement (page){
        await page.goto(URLS.loginPageLink);
        await this.dashboardPage.productsText.waitForElement(page);
    }

}

module.exports = NavigationHelper;
