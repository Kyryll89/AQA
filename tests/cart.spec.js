const { CREDENTIALS } = require("../constants/Constants.js");
const { HELPERS } = require("../main.js");
const loginPayLoad = {userEmail: CREDENTIALS.username, userPassword: CREDENTIALS.password,};
let token;

describe("Cart tests", () => {
  beforeAll(async () => {
    token = await HELPERS.apiHelper.getToken(loginPayLoad);
  });

  beforeEach(async () => {
    await HELPERS.apiHelper.setToken(token);
    await HELPERS.navigationHelper.navigateToLoginPageAndWaitForElement();
  });

  test("Should search for the product & add to cart", async () => {
    await HELPERS.cartHelper.searchProductAddCart(CREDENTIALS.productName);
    await HELPERS.navigationHelper.navigateToCart();
    expect(await HELPERS.attributeHelper.returnProductsInCartLocator()).toEqual(CREDENTIALS.productName);
  });

  test('Should add every product & delete all of them from the cart', async ()=> {
      await HELPERS.cartHelper.addEveryProductToCart();
      await HELPERS.navigationHelper.navigateToCart();
      await expect (await HELPERS.attributeHelper.returnCheckoutLocator()).toBeVisible();
      await HELPERS.cartHelper.deleteAllProductsFromCart();
      await expect (await HELPERS.attributeHelper.returnCheckoutLocator()).not.toBeVisible();
  }, 30000)
});
