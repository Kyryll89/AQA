const Pages = require("../pages/Pages.js");

class LoginHelper extends Pages {

    async loginToSite(page, userName, password){
        await this.loginPage.userName.typeInput(page, userName);
        await this.loginPage.password.typeInput(page, password);
        await this.loginPage.signInButton.clickElement(page);
    }
    
}

module.exports = {LoginHelper};