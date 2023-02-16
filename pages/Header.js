const { Element } = require("../utils/Element.js");
const pageName = "Header";

class Header {
  homeButton = new Element(
    "Home button",
    pageName,
    "//li/button[contains(text(),'HOME')]"
  );
  ordersButton = new Element(
    "Orders button",
    pageName,
    "//li/button[contains(text(), 'ORDERS')]"
  );
  cartButton = new Element(
    "Cart button",
    pageName,
    "//li/button[contains(text(),' Cart')]"
  );
  signOutButton = new Element(
    "Sign out button",
    pageName,
    "//li/button[contains(text(), 'Sign Out')]"
  );
}
module.exports = { Header };
