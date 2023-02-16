const { LoginPage } = require("./LoginPage.js");
const { DashboardPage } = require("./DashboardPage.js");
const { OrdersHistoryPage } = require("./OrdersHistoryPage.js");
const { OrdersReviewPage } = require("./OrdersReviewPage.js");
const { CartPage } = require("./CartPage.js");
const { ThankYouPage } = require("./ThankYouPage.js");
const { OrderDetailsPage } = require("./OrderDetailsPage.js");
const { Header } = require("./Header.js");

class Pages {
  loginPage = new LoginPage();
  dashboardPage = new DashboardPage();
  ordersHistoryPage = new OrdersHistoryPage();
  ordersReviewPage = new OrdersReviewPage();
  thankYouPage = new ThankYouPage();
  orderDetailsPage = new OrderDetailsPage();
  cartPage = new CartPage();
  header = new Header();
}

module.exports = Pages;
