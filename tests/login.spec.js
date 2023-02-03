const {test, expect} = require('@playwright/test');
const {PAGES} = require('../main.js');
const {URLS, CREDENTIALS, MESSAGES} = require('../constants/Constants.js');
const {HELPERS} = require('../main.js');

describe("smth",  () => {
    beforeEach(async ({ page }) => {
        await page.goto(URLS.loginPageLink);
    });
    
    it('Should login with valid credentials', async ({page})=>{
        await HELPERS.loginHelper.loginToSite(page, CREDENTIALS.username, CREDENTIALS.password);
        await PAGES.dashboardPage.productsText.waitForElement(page);
        await expect (page).toHaveURL(URLS.dashboardPageLink);
    })
    
    it('Should login with invalid credentials', async ({page})=>{
        await HELPERS.loginHelper.loginToSite(page, CREDENTIALS.invalid.username, CREDENTIALS.invalid.password);
        await expect(page.locator(PAGES.loginPage.allertDialog.elementLocator)).toContainText(MESSAGES.allertDialogMessage);
    })
    
})

