const { URLS } = require("../constants/Constants.js");

class APIHelper
{
    async getToken(apiContext,loginPayLoad)
     {
        const loginResponse =  await apiContext.post(URLS.apiLoginLink,
        {
            data: loginPayLoad
         } )
        const loginResponseJson = await loginResponse.json();
        const token =loginResponseJson.token;
        console.log(token);
        return token;
    }


    async createOrder(apiContext, loginPayLoad, orderPayLoad)
    {
        let response = {};
        response.token = await this.getToken(apiContext, loginPayLoad);
        const orderResponse = await apiContext.post(URLS.apiCreateOrderLink,
        {
            data : orderPayLoad,
            headers:{
                        'Authorization' : response.token,
                        'Content-Type'  : 'application/json'
                    },
        })
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
        return response;
    }
}
module.exports = {APIHelper};
