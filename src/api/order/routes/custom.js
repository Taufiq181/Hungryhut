module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/orders/pretransaction',
            handler: 'custom.pre', 
          },
    ],
};