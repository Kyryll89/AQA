const Pages = require("../pages/Pages");

class OrderHelper extends Pages {
     
    async findOrderIdAndGoToOrderDetailsPage(orderId)
    {
        await this.ordersTable.waitFor();
        const rows = this.ordersTableRows;
    
    
        for(let i = 0; i < await rows.count(); i++)
        {
            const rowOrderId = await rows.nth(i).locator("//th").textContent();
            if (orderId.includes(rowOrderId))
            {
                await rows.nth(i).locator("//button[contains(text(), 'View')]").click();
                break;
            }
        }
    }


    async selectCountry(country, countryFirstLetters)
    {
            
        await this.countryInput.type(countryFirstLetters,{delay:200});
        await this.dropdownText.first().textContent();
        const dropdown = await this.dropdownText.allTextContents();
        console.log(dropdown);
        for(let i = 0; i < dropdown.length; i++)
        {
            if(dropdown[i] === country)
            {
            await this.dropdownList.nth(i).click();
            break;
            }
        }
    }

}

module.exports = {OrderHelper};