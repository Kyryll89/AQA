class Utils {
    constructor(){
    }

    async waitForSec(time) {
        await allure.step(`Wait for ${time} sec`, async ()=>{
          await page.waitForTimeout(time*1000);
        })
      }
}
module.exports = Utils;