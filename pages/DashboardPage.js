const { Element } = require("../utils/Element.js");
const pageName = 'Dashboard Page';

class DashboardPage {

    products = new Element('Products list', pageName, "//div[@class='card-body']");
    productsText = new Element('Products text list', pageName, "//div/h5/b");
    productAddToCart = new Element('Inner locator of Add to cart button', pageName, "//button[contains(text(), ' Add To Cart')]")

}
module.exports = {DashboardPage};