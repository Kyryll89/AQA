const { Element } = require("../utils/Element.js");
const pageName = "Order Details Page";

class OrderDetailsPage {
  orderDetailsId = new Element(
    "Order details ID",
    pageName,
    "//div[@class='col-text -main']"
  );
}
module.exports = { OrderDetailsPage };
