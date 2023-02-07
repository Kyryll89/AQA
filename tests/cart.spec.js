const {URLS, CREDENTIALS} = require('../constants/Constants.js');
const {HELPERS, PAGES} = require('../main.js');
const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail: CREDENTIALS.username, userPassword: CREDENTIALS.password};
let token;


test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   token = await HELPERS.apiHelper.getToken(apiContext, loginPayLoad);
})

test.beforeEach( async ({page}) => {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);
    await page.goto(URLS.loginPageLink);
    await PAGES.dashboardPage.productsText.waitForElement(page);
})

test('Should serch for the product & add to cart', async ({page})=>{
    await HELPERS.cartHelper.searchProductAddCart(page, CREDENTIALS.productName);
    await PAGES.header.cartButton.clickElement(page);
    await page.waitForLoadState("networkidle");
    await page.pause();
    await expect (page.locator(PAGES.cartPage.productsInCartText.elementLocator)).toContainText(CREDENTIALS.productName);
})

test('Should add every product & delete all of them from the cart', async ({page})=>{
    await HELPERS.cartHelper.addEveryProductToCart(page);
    await PAGES.header.cartButton.clickElement(page);
    await page.waitForLoadState("networkidle");
    await expect (page.locator(PAGES.cartPage.checkoutButton.elementLocator)).toBeVisible();
    await HELPERS.cartHelper.deleteAllProductsFromCart(page);
    await expect (page.locator(PAGES.cartPage.checkoutButton.elementLocator)).not.toBeVisible();
})

