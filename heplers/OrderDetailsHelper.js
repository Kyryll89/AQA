class OrderDetailsHelper {
     
    async compareOrdersId (orderId)
    {
        const orderIdDetails = await this.orderDetailsId.textContent();
        expect (await orderId.includes(orderIdDetails)).toBeTruthy();
    }
}