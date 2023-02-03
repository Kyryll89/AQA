const { PAGES } = require("../pageobjects/Pages.js");

class LoginHelper {

    async loginToSite(page, userName, password){
        await PAGES.loginPage.userName.typeInput(page, userName);
        await PAGES.loginPage.password.typeInput(page, password);
        await PAGES.loginPage.signInButton.clickElement(page);
    }
    
}

module.exports = {LoginHelper};