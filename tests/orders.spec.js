const { CREDENTIALS, MESSAGES } = require("../constants/Constants.js");
const { HELPERS } = require("../main.js");
const loginPayLoad = {userEmail: CREDENTIALS.username,userPassword: CREDENTIALS.password};
const orderPayLoad = {orders: [{ country: "Cuba", productOrderedId: "6262e95ae26b7e1a10e89bf0" }]};
let response = {};


describe("Order test", () => {
  // beforeAll(async () => {
  //   response.token = await HELPERS.apiHelper.getToken(loginPayLoad);
  // });

  beforeAll( async()=> {
    response = await HELPERS.apiHelper.createOrder(loginPayLoad, orderPayLoad);
  });

  beforeEach(async () => {
    await HELPERS.apiHelper.setToken(response.token);
    await HELPERS.navigationHelper.navigateToLoginPageAndWaitForElement();
  });

  test("Should search for the product & add to cart and place the order", async () => {
    await HELPERS.cartHelper.searchProductAddCart(CREDENTIALS.productName);
    await HELPERS.orderHelper.placeOrder(CREDENTIALS.country,CREDENTIALS.countryFirstLetters);
    await expect(await HELPERS.attributeHelper.returnThankYouMessageText()).toEqual(MESSAGES.thankYouForTheOrderMessage);
  }, 30000)
})
