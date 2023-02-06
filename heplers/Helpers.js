const { LoginHelper } = require("./LoginHelper.js");
const { APIHelper } = require("./APIHelper.js");
const { CartHelper } = require("./CartHelper.js");
const { OrderHelper } = require("./OrderHelper.js");

class Helpers {
  loginHelper = new LoginHelper()
  apiHelper = new APIHelper()
  cartHelper = new CartHelper()
  orderHelper = new OrderHelper()
};

module.exports = Helpers;