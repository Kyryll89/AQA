const { Element } = require("../utils/Element.js");
const pageName = "Cart Page";

class CartPage {
  checkoutButton = new Element("Checkout button", pageName, "//button[contains(text(), 'Checkout')]");
  productsInCartDeleteButton = new Element("Products in cart Delete button", pageName, "//div/ul/li/div//button[@class='btn btn-danger']");
  productsInCartText = new Element("Products in cart", pageName, "//div/ul/li/div//h3");
}
module.exports = { CartPage };
