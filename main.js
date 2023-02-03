
const dotenv = require("dotenv");
const Helpers = require("./heplers/Helpers.js");
const Pages = require("./pageobjects/Pages.js");

// setupEnv();

// jest.setTimeout(3000000);
// jest.retryTimes(2)

let context
// // beforeEach(async () => {

//   // const app = await new AppManager()

  
//   allure.writeEnvironmentInfo({
//     BROWSER: process.env.BROWSER ? process.env.BROWSER : "CHROME",
//     ENVIRONMENT: process.env.ENV,
//     "BASE URL": process.env.base_url,
//   });
// });

// afterEach(async () => {

// });

// global.it = AppManager.prototype.it

function setupEnv() {
  secretEnv();
  if (process.env.ENV === "dev") {
    dotenv.config({ path: ".env.dev" });
  } else {
    dotenv.config({ path: ".env.test" });
  }
}

function secretEnv() {
  dotenv.config({ path: ".env" });
  admin = {
    login: process.env.klekt_admin,
    password: process.env.klekt_admin_pass,
  };
  defaultUser.setToken(process.env.USER_TOKEN);
  products = process.env.PRODUCTS ? process.env.PRODUCTS.split(",") : "";
}

module.exports = {
    PAGES: new Pages(),
    HELPERS: new Helpers(),
};
