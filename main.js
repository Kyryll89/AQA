const dotenv = require("dotenv");
const Helpers = require("./heplers/Helpers.js");
const Pages = require("./pages/Pages.js");
const { chromium, webkit, devices } = require("playwright");
const Utils = require("./utils/utils.js");

// setupEnv();
// test("", async ({page}) => {
//   page.evaluate
// })
jest.setTimeout(100*1000);
// jest.retryTimes(2)

let context;

beforeEach(async () => {
  context = await getContext();
  global.page = context.page;
  global.utils = new Utils();

  //   allure.writeEnvironmentInfo({
  //     BROWSER: process.env.BROWSER ? process.env.BROWSER : "CHROME",
  //     ENVIRONMENT: process.env.ENV,
  //     "BASE URL": process.env.base_url,
  //   });
});

afterEach(async () => {
  try {
    await close(context);
    // page = null
  } catch (err) {
    console.log(err);
  }
});

// global.it = AppManager.prototype.it

function setupEnv() {
  secretEnv();
  if (process.env.ENV === "dev") {
    dotenv.config({ path: ".env.dev" });
  } else {
    dotenv.config({ path: ".env.test" });
  }
}

async function close(context) {
  try {
    // await context.page.close();
    // await context.context.close();
    await context.browser.close();
  } catch (e) {
    console.log("Close browser error:", e);
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

async function getContext() {
  let browser;
  let context;
  const headless = !!process.env.HEADLESS ? !!process.env.HEADLESS : false;
  if (process.env.BROWSER === "safari") {
    browser = await webkit.launch({ headless: headless });
    if (process.env.ISMOBILE) {
      const phone = devices["iPhone XR"];
      context = await browser.newContext({
        ...phone,
      });
    } else {
      context = await browser.newContext();
    }
  } else {
    browser = await chromium.launch({ headless: headless });
    if (process.env.ISMOBILE) {
      const phone = devices["Pixel 5"];
      context = await browser.newContext({
        ...phone,
      });
    } else {
      context = await browser.newContext();
    }
  }

  return {
    context: await context,
    page: await context.newPage(),
    browser: await browser,
  };
}

module.exports = {
  PAGES: new Pages(),
  HELPERS: new Helpers(),
};
