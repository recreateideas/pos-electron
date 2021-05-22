const { products: service } = require('../services');

const getProducts = async (req, res) => {
    console.debug('Get Products [START]');
    const products = await service.queryProducts();
    console.debug('Get Products [END]');
    res.status(200).send({ products });
};

module.exports = {
    getProducts
};
