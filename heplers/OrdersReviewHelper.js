class OrdersReviewHelper {
    
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

    async checkEmail(email)
    {
        await expect(this.emailInput).toHaveText(email);
    }
    
    async placeOrder()
    {
        await this.placeOrderButton.click();
        await this.page.waitForLoadState("networkidle");
    }
    
}