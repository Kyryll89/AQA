const Pages = require("../pages/Pages");

class AttributeHelper extends Pages {

    async returnCheckoutLocator (page){
        return await this.cartPage.checkoutButton.returnElementLocator(page);
    }

    async returnAllertDialogLocator (page){
        return await this.loginPage.allertDialog.returnElementLocator(page);
    }

    async returnProductsInCartLocator(page){
        return await this.cartPage.productsInCartText.returnElementLocator(page);
    }

    async returnThankYouMessageLocator (page){
        return await this.thankYouPage.thankYouMessage.returnElementLocator(page);
    }
}
module.exports = AttributeHelper;