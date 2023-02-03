class OrdersHistoryHelper {
    
    async findOrderIdAndGoToOrderDetailsPage(orderId)
    {
        await this.ordersTable.waitFor();
        const rows = this.ordersTableRows;
    
    
        for(let i = 0; i < await rows.count(); i++)
        {
            const rowOrderId = await rows.nth(i).locator("//th").textContent();
            if (orderId.includes(rowOrderId))
            {
                await rows.nth(i).locator("//button[contains(text(), 'View')]").click();
                break;
            }
        }
    }
}