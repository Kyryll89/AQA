
class Element {
  constructor(elementName, pageName, elementLocator) {
    this.elementName = elementName;
    this.pageName = pageName;
    this.elementLocator = elementLocator;
  }

  async clickElement() {
    await allure.step(`Click on "${this.elementName}" at "${this.pageName}"`, async ()=>{
      await page.locator(this.elementLocator).click();
    })
  }

  async clickElementAndWaitForLoadState() {
    await allure.step(`Click on "${this.elementName}" at "${this.pageName}" and wait for load state`, async ()=>{
      await page.locator(this.elementLocator).click();
      await page.waitForLoadState("networkidle");
    })
  }

  async fillInput(data) {
    await allure.step(`Fill "${data}" into "${this.elementName}" at "${this.pageName}"`, async ()=>{
      await page.locator(this.elementLocator).fill(data);
    })
  }

  async typeInput(data) {
    await allure.step(`Type "${data}" into "${this.elementName}" at "${this.pageName}"`, async ()=>{
      await page.locator(this.elementLocator).type(data);
    })
  }

  async getTextContent() {
    return await allure.step(`Get text from "${this.elementName}" at "${this.pageName}"`, async ()=>{
      return await page.locator(this.elementLocator).textContent();
    })
  }

  async getAllTextContent() {
    return await allure.step(`Get ALL texts from "${this.elementName}" at "${this.pageName}"`, async ()=>{
      return await page.locator(this.elementLocator).allTextContents();
    })
  }

  async waitForElement() {
    await allure.step(`Wait for "${this.elementName}" at "${this.pageName}"`, async ()=>{
      await page.locator(this.elementLocator).first().waitFor();
    })
  }

  async countElements() {
    return await allure.step(`Count all "${this.elementName}" at "${this.pageName}"`, async ()=>{
      return await page.locator(this.elementLocator).count();
    })
  }

  async typeInputWithDelaying(data) {
    await allure.step(`Type "${data}" into "${this.elementName}" at "${this.pageName}" with delaying`, async ()=>{
      await page.locator(this.elementLocator).type(data, { delay: 200 });
    })
  }

  async returnElementLocator() {
    return await allure.step(`Return locator of "${this.elementName}" at "${this.pageName}"`, async ()=>{
      await page.pause();
      const x = await page.locator(this.elementLocator).isVisible();
      console.log(x);
    })
  }

  async checkElementIsVisible() {
    return await allure.step(`Check Element "${this.elementName}" at "${this.pageName}" is visible`, async ()=> {
      await this.waitForElement();
      return await page.locator(this.elementLocator).isVisible();
    })
  }

  async checkElementIsHidden() {
    return await allure.step(`Check Element "${this.elementName}" at "${this.pageName}" is hidden`, async ()=> {
      return await page.locator(this.elementLocator).isHidden();
    })
  }

  async clickOnFirstElement() {
    await allure.step(`Click on first element "${this.elementName}" at "${this.pageName}"`, async ()=>{
      await page.locator(this.elementLocator).first().click();
    })
  }
}
module.exports = { Element };