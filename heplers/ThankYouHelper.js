class ThankYouHelper {

    async checkThankYouPage()
    {
        await expect(this.thankYouMessage).toHaveText(" Thankyou for the order. ");
    }

    async getOrderIdAndPrint()
    {
        const orderId = await this.orderIdSelector.textContent();
        console.log(orderId);
        return orderId;
    }

    async goToOrdersHistoryPage()
    {
        await this.ordersButton.click();
    }
    
}