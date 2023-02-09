const UserHelper = require("./UserHelper.js");
const APIHelper = require("./APIHelper.js");
const CartHelper = require("./CartHelper.js");
const OrderHelper = require("./OrderHelper.js");
const AttributeHelper = require("./AttributeHelper.js");
const NavigationHelper = require("./NavigationHelper.js");

class Helpers {
  userHelper = new UserHelper()
  apiHelper = new APIHelper()
  cartHelper = new CartHelper()
  orderHelper = new OrderHelper()
  attributeHelper = new AttributeHelper()
  navigationHelper = new NavigationHelper()
};

module.exports = Helpers;