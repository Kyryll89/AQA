const { Element } = require("../utils/Element.js");
const pageName = 'Dashboard Page';

class DashboardPage {

    products = new Element('Products list', pageName, "//div[@class='card-body']");
    productsText = new Element('Products text list', pageName, "//div/h5/b");
    productAdd

}
module.exports = {DashboardPage};