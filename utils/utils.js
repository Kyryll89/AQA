class Utils {
    constructor(){
    }

    async waitForSec(time) {
        await allure.step(`Wait for ${time} sec`, async ()=>{
          await page.waitForTimeout(time*1000);
        })
      }

    async getPageUrl(){
      return await allure.step(`Get page URL`, async ()=>{
        return await page.url();
      })
    }
}
module.exports = Utils;