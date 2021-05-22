const { products: service } = require('../services');

const getProducts = async (req, res) => {
    const products = await service.queryProducts();
    res.status(200).send({ products });
};

module.exports = {
    getProducts
};
