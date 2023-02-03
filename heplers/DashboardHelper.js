class DashboardHelper {
    
    
    async navigateToCart()
    {
        await this.cart.click();
        await this.page.waitForLoadState("networkidle");
    }

}
module.exports = {DashboardHelper};