const {URLS, CREDENTIALS} = require('../constants/Constants.js');
const Pages = require('../pageobjects/Pages.js');
// const { PAGES } = require("../pageobjects/Pages.js");

class CartHelper extends Pages{
    
    async searchProductAddCart(page, productName)
    {
        const titles = await this.dashboardPage.productsText.getAllTextContent(page);     
        console.log(titles);
        for(let i = 0; i < titles.length; i++)
        {
            if(titles[i] === productName)
                {
                    await page.locator(this.dashboardPage.products.elementLocator).nth(i).locator("//button[contains(text(), ' Add To Cart')]").click();
                    break;
                }
        }
    }
}
module.exports = {CartHelper}