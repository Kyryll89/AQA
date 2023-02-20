module.exports.URLS = {
  loginPageLink: "https://rahulshettyacademy.com/client",
  dashboardPageLink: "https://rahulshettyacademy.com/client/dashboard/dash",
  cartPageLink: "https://rahulshettyacademy.com/client/dashboard/cart",
  ordersHistoryPageLink: "https://rahulshettyacademy.com/client/dashboard/myorders",
  apiLoginLink: "https://rahulshettyacademy.com/api/ecom/auth/login",
  apiCreateOrderLink: "https://rahulshettyacademy.com/api/ecom/order/create-order",
  getAllProductsLink: "https://rahulshettyacademy.com/api/ecom/product/get-all-products"
};

module.exports.CREDENTIALS = {
  username: "kyryll.testing@gmail.com",
  password: "Qwerty@123",
  country: " Ukraine",
  countryFirstLetters: "uk",
  productName: "iphone 13 pro",
  invalid: {
    username: "1234@gmail.com",
    password: "12345",
  },
};

module.exports.MESSAGES = {
  allertDialogMessage: " Incorrect email or password. ",
  thankYouForTheOrderMessage: " Thankyou for the order. ",
};

module.exports.getAllProductsPayload = {
  "productName": "",
  "minPrice": null,
  "maxPrice": null,
  "productCategory": [],
  "productSubCategory": [],
  "productFor": []
}

module.exports.loginPayLoad = {
  userEmail: "kyryll.testing@gmail.com", 
  userPassword: "Qwerty@123",
}

module.exports.orderPayLoad = {
  orders: [{
     country: "Cuba", 
     productOrderedId: "6262e95ae26b7e1a10e89bf0" 
    }]
  }