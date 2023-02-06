const { Element } = require("../utils/Element.js");
const pageName = 'Login Page';

class LoginPage {

    userName = new Element('User name', pageName, "//div/input[@type='email']");
    password = new Element('Password', pageName, "//div/input[@type='password']");
    signInButton = new Element('Sign in button', pageName, "//form/input[@type='submit']");
    allertDialog = new Element('Allert dialog', pageName, "//div[@role='alertdialog']");

}
module.exports = {LoginPage};