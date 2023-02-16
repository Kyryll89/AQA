class Element {
  constructor(elementName, pageName, elementLocator) {
    this.elementName = elementName;
    this.pageName = pageName;
    this.elementLocator = elementLocator;
  }

  async clickElement() {
    await page.locator(this.elementLocator).click();
  }

  async clickElementAndWaitForLoadState() {
    await page.locator(this.elementLocator).click();
    await page.waitForLoadState("networkidle");
  }

  async fillInput(data) {
    await page.locator(this.elementLocator).fill(data);
  }

  async typeInput(data) {
    await page.locator(this.elementLocator).type(data);
  }

  async getTextContent() {
    return await page.locator(this.elementLocator).textContent();
  }

  async getAllTextContent() {
    return await page.locator(this.elementLocator).allTextContents();
  }

  async waitForElement() {
    await page.locator(this.elementLocator).first().waitFor();
  }

  async countElements() {
    return await page.locator(this.elementLocator).count();
  }

  async typeInputWithDelaying(data) {
    await page.locator(this.elementLocator).type(data, { delay: 200 });
  }

  async returnElementLocator() {
    return page.locator(this.elementLocator);
  }
}
module.exports = { Element };
