// const {test, expect} = require('@playwright/test');

// test('Browser Context Playwright test', async ({browser})=>
// {
//     //chrome - plugins/ cookies
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://www.google.com.ua/");
//     console.log(await page.title());
//  });

// test('should login with invalid credentials', async ({page})=>
// {
//     await page.goto("https://stage-dashboard.lifebase.solutions/");
//     await expect(page).toHaveTitle("LifeBase Solutions");
//     await page.locator('#input_0').type("12345");
//     await page.locator('#input_1').type("12345");
//     await page.locator("//button[contains(text(),'Login')]").click();
//     await expect(page.locator('//div[@ng-messages]/p[contains(text(),"Not existing email/login or wrong password")]')).toContainText("Not existing");

// });



// test('Child windows handling', async ({browser})=>
// {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://stage.lifebase.solutions/");
//     const documentLink = page.locator("//a[contains(@class,'secondary-btn')]");
//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//         documentLink.click(),
//     ]);
//     // console.log(newPage.);
//     expect(await newPage).toHaveTitle("B2B brochure | LifeBase");


// });

// test('Child windows handling2', async ({browser})=>
// {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://rozetka.com.ua/");
//     const documentLink = page.locator('//a[@class="main-stores__button ng-star-inserted"][1]/img');
//     const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//         documentLink.click(),
//     ]);
//     await newPage.pause();
//     await expect(newPage).toHaveTitle("ROZETKA — Online marketplace - Apps on Google Play");
    
// });


//______________________________________________________________


// const {test, expect} = require('@playwright/test');

// test('Should login with invalid credentials', async ({page})=>
// {
//     await page.goto("https://rahulshettyacademy.com/client");
//     await page.locator("//div/input[@id='userEmail']").type("1234@gmail.com");
//     await page.locator("//div/input[@id='userPassword']").type("12345");
//     await page.locator("//form/input[@type='submit']").click();
//     await expect(page.locator("//div[@role='alertdialog']")).toContainText(" Incorrect email or password. ");

// });
 
    
//  test('Should log in, order an iPhone 13 and check the order info', async ({page})=>
//  {
//     const email = "kyryll.testing@gmail.com";
//     const password = "Qwerty@123";
//     const productName = 'iphone 13 pro';
//     const products = page.locator("//div[@class='card-body']");
//     await page.goto("https://rahulshettyacademy.com/client");
//     await page.waitForLoadState('networkidle');
//     await page.locator("//div/input[@id='userEmail']").fill(email);
//     await page.locator("//div/input[@id='userPassword']").type(password);
//     await page.locator("//form/input[@type='submit']").click();
//     await page.locator("//div/h5/b").first().textContent();
//     const titles = await page.locator("//div/h5/b").allTextContents();
//     console.log(titles);
//     for(let i =0; i < titles.length; i++)
//     {
//     if(titles[i] === productName)
//         {
//             await products.nth(i).locator("//button[contains(text(), ' Add To Cart')]").click();
//             break;
//         }
//     }
   
//     await page.locator("//li/button[contains(text(),' Cart')]").click();
//     await page.waitForLoadState("networkidle");
//     await page.locator("//button[contains(text(), 'Checkout')]").click();
//     await page.locator("//input[@placeholder='Select Country']").type("uk",{delay:200});
//     await page.locator("//section/button/span").first().textContent();
//     const dropdown = await page.locator("//section/button/span").allTextContents();
//     console.log(dropdown);
//     //  await page.pause();
//     for(let i =0;i< dropdown.length; ++i)
//     {
//         if(dropdown[i] === " Ukraine")
//         {
//            await page.locator("//section/button").nth(i).click();
//            break;
//         }
//     }
//     await expect(page.locator("//div/label")).toHaveText(email);
//     await page.locator("//div/a[contains(text(), 'Order')]").click();
   
//     await expect(page.locator("//td/h1")).toHaveText(" Thankyou for the order. ");
//     const orderId = await page.locator("//td/label[not(contains(text(), 'History'))]").textContent();
//     console.log(orderId);
//     await page.locator("//li/button[contains(text(), 'ORDERS')]").click();

//     await page.locator("//tbody").waitFor();
//     const rows = page.locator("//tbody/tr");


//     for(let i =0; i < await rows.count(); i++)
//     {
//         const rowOrderId = await rows.nth(i).locator("//th").textContent();
//         if (orderId.includes(rowOrderId))
//         {
//             await rows.nth(i).locator("//button[contains(text(), 'View')]").click();
//             break;
//         }
//     }
//     const orderIdDetails = await page.locator("//div[@class='col-text -main']").textContent();
//     expect (orderId.includes(orderIdDetails)).toBeTruthy();
//  });

// const {test} = require('@playwright/test');
// const {POManager} = require('../pageobjects/Pages');

// test('Should login with invalid credentials', async ({page})=>
// {
//     const invalidUsername = "1234@gmail.com";
//     const invalidPassword = "12345";
//     const poManager = new POManager(page);
//     const loginPage = poManager.getLoginPage();
//     await loginPage.goTo();
//     await loginPage.invalidLogin(invalidUsername,invalidPassword);
    
// });
 
    
//  test('Should log in, order an iPhone 13 and check the order info', async ({page})=>
//  {
//     const email = "kyryll.testing@gmail.com";
//     const password = "Qwerty@123";
//     const productName = 'iphone 13 pro';
//     const country = " Ukraine";
//     const countryFirstLetters = "uk";
//     const poManager = new POManager(page);
//     const loginPage = poManager.getLoginPage();
    
//     await loginPage.goTo();
//     await loginPage.validLogin(email,password);
//     const dashboardPage = poManager.getDashboardPage();
//     await dashboardPage.searchProductAddCart(productName);
//     await dashboardPage.navigateToCart();
//     const cartPage = poManager.getCartPage();
//     await cartPage.goToCheckout();
//     const ordersReviewPage = poManager.getOrdersReviewPage();
//     await ordersReviewPage.selectCountry(country, countryFirstLetters);
//     await ordersReviewPage.checkEmail(email);
//     await ordersReviewPage.placeOrder();
//     const thankYouPage = poManager.getThankYouPage();
//     await thankYouPage.checkThankYouPage();
//     const orderId = await thankYouPage.getOrderIdAndPrint();
//     await thankYouPage.goToOrdersHistoryPage();
//     const ordersHistoryPage = poManager.getOrdersHistoryPage();
//     await ordersHistoryPage.findOrderIdAndGoToOrderDetailsPage(orderId);
//     const orderDetailsPage = poManager.getOrderDetailsPage();
//     await orderDetailsPage.compareOrdersId(orderId);

//  });