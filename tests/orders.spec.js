const {URLS, CREDENTIALS, MESSAGES} = require('../constants/Constants.js');
const {HELPERS, PAGES} = require('../main.js');
const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail: CREDENTIALS.username, userPassword: CREDENTIALS.password};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"6262e95ae26b7e1a10e89bf0"}]};
let response = {};


// test.beforeAll( async()=>
// {
//    const apiContext = await request.newContext();
//    response = await HELPERS.apiHelper.createOrder(apiContext, loginPayLoad, orderPayLoad);
// })

test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   response.token = await HELPERS.apiHelper.getToken(apiContext, loginPayLoad);
})

test.beforeEach( async ({page}) => {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    await page.goto(URLS.loginPageLink);
    await PAGES.dashboardPage.productsText.waitForElement(page);
})

test('Should serch for the product & add to cart and place the order', async ({page})=>{
    await page.pause();
    await HELPERS.cartHelper.searchProductAddCart(page, CREDENTIALS.productName);
    await HELPERS.orderHelper.placeTheOrder(page, CREDENTIALS.country, CREDENTIALS.countryFirstLetters);
    await expect (page.locator(PAGES.thankYouPage.thankYouMessage.elementLocator)).toContainText(MESSAGES.thankYouForTheOrderMessage);
})