const {test, expect} = require('@playwright/test');
const {PAGES, HELPERS} = require('../main.js');
const {URLS, CREDENTIALS, MESSAGES} = require('../constants/Constants.js');


test.describe('Login tests', () => {

    test.beforeEach(async ({ page }) => {
        await HELPERS.navigationHelper.navigateToLoginPage(page);
    });

    test('Should login with valid credentials', async ({page})=>{
        await HELPERS.userHelper.loginToSite(page, CREDENTIALS.username, CREDENTIALS.password);
        await PAGES.dashboardPage.productsText.waitForElement(page);
        await expect (page).toHaveURL(URLS.dashboardPageLink);
    });

    test('Should login with invalid credentials', async ({page})=>{
        await HELPERS.userHelper.loginToSite(page, CREDENTIALS.invalid.username, CREDENTIALS.invalid.password);
        await expect(await HELPERS.attributeHelper.returnAllertDialogLocator(page)).toContainText(MESSAGES.allertDialogMessage);
    });
    
});