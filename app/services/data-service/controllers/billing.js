const { billing: service } = require('../services');

const checkout = async (req, res) => {
    console.debug('Checkout [START]');
    const {
        body: { orderStatus }
    } = req;
    const error = await service.exportReceipt({ receiptBody: orderStatus });
    if (error) {
        res.status(500);
        res.send(error);
        console.debug('Checkout [ERR]');
        return;
    }
    console.debug('Checkout [END]');
    res.status(204);
    res.send();
};

module.exports = {
    checkout
};
