const { HELPERS } = require("../main.js");
const { URLS, CREDENTIALS, MESSAGES } = require("../constants/Constants.js");

describe("Login tests", () => {
  beforeEach(async () => {
    await HELPERS.navigationHelper.navigateToLoginPage();
  });

  test("Should login with valid credentials @refactor", async () => {
    await HELPERS.userHelper.loginToSite(CREDENTIALS.username, CREDENTIALS.password);
    await HELPERS.userHelper.dashboardPage.productsText.waitForElement();
    expect(await utils.getPageUrl()).toEqual(URLS.dashboardPageLink);
  });

  test("Should login with invalid credentials", async () => {
    await HELPERS.userHelper.loginToSite(CREDENTIALS.invalid.username, CREDENTIALS.invalid.password);
    expect(await HELPERS.attributeHelper.returnAllertDialogText()).toEqual(MESSAGES.allertDialogMessage);
  });
});
