const {CREDENTIALS} = require('../constants/Constants.js');
const {HELPERS} = require('../main.js');
const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail: CREDENTIALS.username, userPassword: CREDENTIALS.password};
let token;


test.beforeAll( async()=> {
   const apiContext = await request.newContext();
   token = await HELPERS.apiHelper.getToken(apiContext, loginPayLoad);
})

test.beforeEach( async ({page}) => {
    await HELPERS.apiHelper.setToken(page, token);
    await HELPERS.navigationHelper.navigateToLoginPageAndWaitForElement(page);
})

test('Should serch for the product & add to cart', async ({page})=> {
    await HELPERS.cartHelper.searchProductAddCart(page, CREDENTIALS.productName);
    await HELPERS.navigationHelper.navigateToCart(page);
    await expect (await HELPERS.attributeHelper.returnProductsInCartLocator(page)).toContainText(CREDENTIALS.productName);
})

test('Should add every product & delete all of them from the cart', async ({page})=> {
    await HELPERS.cartHelper.addEveryProductToCart(page);
    await HELPERS.navigationHelper.navigateToCart(page);
    await expect (await HELPERS.attributeHelper.returnCheckoutLocator(page)).toBeVisible();
    await HELPERS.cartHelper.deleteAllProductsFromCart(page);
    await expect (await HELPERS.attributeHelper.returnCheckoutLocator(page)).not.toBeVisible();
})

