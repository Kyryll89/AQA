const { CREDENTIALS, loginPayLoad, getAllProductsPayload } = require("../constants/Constants.js");
const { HELPERS } = require("../main.js");
let token, allAvailableProducts;

describe("Cart tests", () => {
  beforeAll(async () => {
    token = await HELPERS.apiHelper.getToken(loginPayLoad);
    allAvailableProducts = await HELPERS.apiHelper.getAllProducts(loginPayLoad, getAllProductsPayload);
  });

  beforeEach(async () => {
    await HELPERS.apiHelper.setToken(token);
    await HELPERS.navigationHelper.navigateToLoginPageAndWaitForElement();
  });

  test("Should search for the product & add to cart", async () => {
    await HELPERS.cartHelper.searchProductAddCart(CREDENTIALS.productName);
    await HELPERS.navigationHelper.navigateToCart();
    expect(await HELPERS.attributeHelper.returnProductsInCartText()).toEqual(CREDENTIALS.productName);
  });

  test("Should add every product & delete all of them from the cart", async ()=> {
      await HELPERS.cartHelper.addEveryProductToCart();
      await HELPERS.navigationHelper.navigateToCart();
      await expect (await HELPERS.attributeHelper.checkChekoutButtontIsVisible()).toBe(true);
      await HELPERS.cartHelper.deleteAllProductsFromCart();
      await expect (await HELPERS.attributeHelper.checkChekoutButtontIsHidden()).toBe(true);
  })

  test("Should add first product to cart @refactor", async () => {
    await HELPERS.cartHelper.addFirstProductToCart();
    await HELPERS.navigationHelper.navigateToCart();
    expect(await HELPERS.attributeHelper.returnProductsInCartText()).toEqual(allAvailableProducts.data[0].productName);
  });
});
