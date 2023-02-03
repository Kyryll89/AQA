const {URLS, CREDENTIALS} = require('../constants/Constants.js');
const { PAGES } = require("../pageobjects/Pages.js");

class CartHelper{
    
    async searchProductAddCart(page, productName)
    {
        const titles = await PAGES.dashboardPage.productsText.getAllTextContent(page);     
        console.log(titles);
        for(let i = 0; i < titles.length; i++)
        {
            if(titles[i] === productName)
                {
                    await page.locator(PAGES.dashboardPage.products.elementLocator).nth(i).locator("//button[contains(text(), ' Add To Cart')]").click();
                    break;
                }
        }
    }
    
}
module.exports = {CartHelper}