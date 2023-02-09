const Pages = require("../pages/Pages");

class AttributeHelper extends Pages {

    async returnCheckoutLocator (page){
        return await this.cartPage.checkoutButton.returnElementLocator(page);
    }
}
module.exports = AttributeHelper;