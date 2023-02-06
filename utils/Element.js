class Element {
    
    constructor(elementName, pageName, elementLocator) {
        this.elementName = elementName;
        this.pageName = pageName;
        this.elementLocator = elementLocator;
    }

    async clickElement(page){
        await page.locator(this.elementLocator).click();
    }

    async fillInput(page, data){
        await page.locator(this.elementLocator).fill(data);
    }

    async typeInput(page, data){
        await page.locator(this.elementLocator).type(data);
    }

    async getTextContent(page){
        return await page.locator(this.elementLocator).textContent();
    }

    async getAllTextContent(page){
        return await page.locator(this.elementLocator).allTextContents();
    }

    async waitForElement(page){
        await page.locator(this.elementLocator).first().waitFor();
    }

    async countElements(page){
        return await page.locator(this.elementLocator).count();
    }

}
module.exports = {Element};