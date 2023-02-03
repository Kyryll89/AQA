const { LoginHelper } = require("./LoginHelper.js");
const { APIHelper } = require("./APIHelper.js");
const { CartHelper } = require("./CartHelper.js"); 

class Helpers {
  loginHelper = new LoginHelper()
  apiHelper = new APIHelper()
  cartHelper = new CartHelper()
};

module.exports = Helpers;