const { Element } = require("../utils/Element.js");
const pageName = "Order History Page";

class OrdersHistoryPage {
  ordersTable = new Element("Orders table", pageName, "//tbody");
  ordersTableRows = new Element("Orders table rows", pageName, "//tbody/tr");
}
module.exports = { OrdersHistoryPage };
