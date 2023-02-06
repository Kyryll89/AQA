const {URLS, CREDENTIALS} = require('../constants/Constants.js');
const {HELPERS, PAGES} = require('../main.js');
const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail: CREDENTIALS.username, userPassword: CREDENTIALS.password};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"6262e95ae26b7e1a10e89bf0"}]};
let response;


// test.beforeAll( async()=>
// {
//    const apiContext = await request.newContext();
//    response = await HELPERS.apiHelper.createOrder(apiContext, loginPayLoad, orderPayLoad);
// })

// test.beforeEach( async ({page}) => {
//     page.addInitScript(value => {
//         window.localStorage.setItem('token', value);
//     }, response.token);
//     await page.goto(URLS.loginPageLink);
//     await PAGES.dashboardPage.productsText.waitForElement(page);
// })

test('Should add first product to cart', async ({page})=>{
    
    await expect (page).toHaveURL(URLS.dashboardPageLink);
})