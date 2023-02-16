const { Element } = require("../utils/Element.js");
const pageName = "Order Review Page";

class OrdersReviewPage {
  countryInput = new Element(
    "Country input field",
    pageName,
    "//input[@placeholder='Select Country']"
  );
  dropdownText = new Element(
    "Dropdown text",
    pageName,
    "//section/button/span"
  );
  emailInput = new Element("Email input field", pageName, "//div/label");
  placeOrderButton = new Element(
    "Placeorder button",
    pageName,
    "//div/a[contains(text(), 'Order')]"
  );
  dropdownList = new Element("Dropdown list", pageName, "//section/button");
}
module.exports = { OrdersReviewPage };
