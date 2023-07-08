// path: ./src/api/restaurant/controllers/restaurant.js

const { createCoreController } = require('@strapi/strapi').factories;
const https = require('https');
const PaytmChecksum = require('paytmchecksum');

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async pre(ctx) {
        let params = JSON.parse(ctx.request.body)
        params.orderid = params.orderid
        console.log(params)
        const entry = await strapi.entityService.create('api::orders.orders', {
            data: { name: params.name, email: params.email, orderid: params.orderid, product: params.cart, amount: params.amount, address: params.address, status: 'pending', },
        });

    },

}));