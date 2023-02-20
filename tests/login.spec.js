const { PAGES, HELPERS } = require("../main.js");
const { URLS, CREDENTIALS, MESSAGES } = require("../constants/Constants.js");

describe("Login tests", () => {
  beforeEach(async () => {
    await HELPERS.navigationHelper.navigateToLoginPage();
  });

  test("Should login with valid credentials", async () => {
    await HELPERS.userHelper.loginToSite(CREDENTIALS.username, CREDENTIALS.password);
    await PAGES.dashboardPage.productsText.waitForElement();
    await expect(page).toHaveURL(URLS.dashboardPageLink);
  });

  test("Should login with invalid credentials", async () => {
    await HELPERS.userHelper.loginToSite(CREDENTIALS.invalid.username, CREDENTIALS.invalid.password);
    await expect(await HELPERS.attributeHelper.returnAllertDialogText()).toEqual(MESSAGES.allertDialogMessage);
  });
});
