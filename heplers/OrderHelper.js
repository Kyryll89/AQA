const Pages = require("../pages/Pages");

class OrderHelper extends Pages {
     
    
    async selectCountry(page, country, countryFirstLetters)
    {
        await this.ordersReviewPage.countryInput.typeInputWithDelaying(page, countryFirstLetters);
        await this.ordersReviewPage.dropdownList.waitForElement(page);
        const dropdown = await this.ordersReviewPage.dropdownText.getAllTextContent(page);
        console.log(dropdown);
        for(let i = 0; i < dropdown.length; i++)
        {
            if(dropdown[i] === country)
            {
            await page.locator(this.ordersReviewPage.dropdownList.elementLocator).nth(i).click();
            break;
            }
        }
    }

    async placeTheOrder(page, country, countryFirstLetters)
    {
        await this.header.cartButton.clickElement(page);
        await this.cartPage.checkoutButton.clickElement(page);
        await this.selectCountry(page, country, countryFirstLetters);
        await this.ordersReviewPage.placeOrderButton.clickElement(page);
        await page.waitForLoadState("networkidle");
    }

    // async findOrderIdAndGoToOrderDetailsPage(orderId)
    // {
    //     await this.ordersTable.waitFor();
    //     const rows = this.ordersTableRows;
    //     for(let i = 0; i < await rows.count(); i++)
    //     {
    //         const rowOrderId = await rows.nth(i).locator("//th").textContent();
    //         if (orderId.includes(rowOrderId))
    //         {
    //             await rows.nth(i).locator("//button[contains(text(), 'View')]").click();
    //             break;
    //         }
    //     }
    // }
}

module.exports = {OrderHelper};