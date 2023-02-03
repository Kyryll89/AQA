const { Element } = require("../utils/Element.js");
const pageName = 'Cart Page';

class CartPage {
    checkoutButton = new Element('Checkout button', pageName, "//button[contains(text(), 'Checkout')]");
}
module.exports = {CartPage};
