describe("Example of usage", () => {
  
  test.skip("Should find Ekreative web page through google search", async () => {
    const search = 'Ekreative';
    const linkEk = 'https://www.ekreative.com/'

    //Navigate to Url
    await page.goto('https://www.google.com/');

    //Type search word and launch searching process
    await page.locator("//input[@name='q']").type(search,{delay:100});
    await page.locator("(//input[@value='Поиск в Google'])[1]").click();

    //Take text in the search field and link in first result
    let searchField = await page.locator("(//input[@name='q'])[1]");
    let link = await page.locator("(//h3/ancestor::a)[1]");

    //Checking the assertions
    expect(await searchField.getAttribute('value')).toEqual(search);
    expect(await link.getAttribute('href')).toEqual(linkEk);
    
    // await page.pause();
  });

  test("Should open Ekreative web page & send CV", async () => {
    //Selectors
    const hiringButton = page.locator(`(//span[contains(text(), 'We’re hiring')])[1]`);
    const nameInput = page.locator(`//input[@placeholder='Name']`);
    const emailInput = page.locator(`//span/input[@placeholder='Email']`);
    const vacancies = page.locator(`//select[@name='vacancies']`);
    const messageInput = page.locator(`//textarea[@placeholder='Message']`);
    const fileInput = `//input[@name='file-470']`;
    const sendButton = page.locator(`//input[@value='Send']`);

    //Actions
    await page.goto('https://www.ekreative.com/');
    await hiringButton.click();
    await nameInput.type('test',{delay:100});
    await emailInput.type('test@test.com',{delay:100});
    await vacancies.click();
    const dropdown = await vacancies;
    await dropdown.selectOption({index: 3});
    await messageInput.type('test',{delay:100});
    await page.setInputFiles(fileInput,'./public/QA_Automation_CV_Kyrylo_Perov.pdf');
    await sendButton.click();

    await page.pause();
  });
});

