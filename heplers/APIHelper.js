const { URLS } = require("../constants/Constants.js");
const Pages = require("../pages/Pages.js");
const fetch = require("cross-fetch");

class APIHelper extends Pages {
  
  async postRequest(url, options) {
    options.method = "POST";
    if (options.headers == undefined) {
      options.headers = {};
    }
    options.headers["Content-Type"] = "application/json";
    const result = await fetch(url, options);
    return result;
  }

  async loginRequest(data) {
    let options = {};
    options.body = JSON.stringify(data);
    return await this.postRequest(URLS.apiLoginLink, options);
  }

  async getToken(loginPayLoad) {
    const loginResponse = await this.loginRequest(loginPayLoad);
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    return token;
  }

  async setToken(token) {
    page.addInitScript((value) => {
      window.localStorage.setItem("token", value);
    }, token);
  }

  async createOrderRequest(data, token) {
    let options = {};
    options.body = JSON.stringify(data);
    options.headers = {};
    options.headers["Authorization"] = token;
    return await this.postRequest(URLS.apiCreateOrderLink, options);
  }

  async createOrder (loginPayLoad, orderPayLoad){
    const token = await this.getToken(loginPayLoad);
    const orderResponse = await this.createOrderRequest(orderPayLoad, token);
    const orderResponseJson = await orderResponse.json();
    const orderId = orderResponseJson.orders[0];
    return {token: token, orderId: orderId}
  }

  async createGetAllProductsRequest(data, token) {
    let options = {};
    options.body = JSON.stringify(data);
    options.headers = {};
    options.headers["Authorization"] = token;
    return await this.postRequest(URLS.getAllProductsLink, options);
  }

  async getAllProducts (loginPayLoad, getAllProductsPayload) {
    const token = await this.getToken(loginPayLoad);
    const allProductsResponse = await this.createGetAllProductsRequest(getAllProductsPayload, token);
    const allAvailableProducts = await allProductsResponse.json();
    return allAvailableProducts
  }
  
}
module.exports = APIHelper;