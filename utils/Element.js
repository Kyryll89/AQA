class Element {
    
    constructor(elementName, pageName, elementLocator) {
        this.elementName = elementName;
        this.pageName = pageName;
        this.elementLocator = elementLocator;
    }

    async clickElement(page){
        await page.locator(this.elementLocator).click();
    }

    async clickElementAndWaitForLoadState(page){
        await page.locator(this.elementLocator).click();
        await page.waitForLoadState("networkidle");
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

    async typeInputWithDelaying (page, data){
        await page.locator(this.elementLocator).type(data, {delay:200});
    }

    async returnElementLocator (page){
        return page.locator(this.elementLocator)
    }


}
module.exports = {Element};