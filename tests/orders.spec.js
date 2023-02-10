const {CREDENTIALS, MESSAGES} = require('../constants/Constants.js');
const {HELPERS} = require('../main.js');
const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail: CREDENTIALS.username, userPassword: CREDENTIALS.password};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"6262e95ae26b7e1a10e89bf0"}]};
let response = {};


// test.beforeAll( async()=>
// {
//    const apiContext = await request.newContext();
//    response = await HELPERS.apiHelper.createOrder(apiContext, loginPayLoad, orderPayLoad);
// })

test.beforeAll( async()=> {
   const apiContext = await request.newContext();
   response.token = await HELPERS.apiHelper.getToken(apiContext, loginPayLoad);
})

test.beforeEach( async ({page}) => {
    await HELPERS.apiHelper.setToken(page, response.token);
    await HELPERS.navigationHelper.navigateToLoginPageAndWaitForElement(page);
})

test('Should serch for the product & add to cart and place the order', async ({page})=> {
    await HELPERS.cartHelper.searchProductAddCart(page, CREDENTIALS.productName);
    await HELPERS.orderHelper.placeOrder(page, CREDENTIALS.country, CREDENTIALS.countryFirstLetters);
    await expect (await HELPERS.attributeHelper.returnThankYouMessageLocator(page)).toContainText(MESSAGES.thankYouForTheOrderMessage);
})