const { URLS } = require("../constants/Constants.js");
const {request} = require('@playwright/test');
const Pages = require("../pages/Pages.js");

class APIHelper extends Pages
{
    async getToken(loginPayLoad, apiContext)
     {
        if (apiContext == undefined){
            apiContext = await request.newContext();
            }
        const loginResponse =  await apiContext.post(URLS.apiLoginLink,
        {
            data: loginPayLoad
         } )
        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }

    async setToken (page, token)
    {
        page.addInitScript(value => {
            window.localStorage.setItem('token', value);
        }, token);
    }


    async createOrder(loginPayLoad, orderPayLoad, apiContext)
    {
        let response = {};
        if (apiContext == undefined){
            apiContext = await request.newContext();
            }
        response.token = await this.getToken(loginPayLoad, apiContext);
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
module.exports = APIHelper;
