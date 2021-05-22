const getProducts = async (req, res) => {
    console.log('Health: Ok');
    res.status(200).send({
        products: []
    });
};

module.exports = {
    getProducts
};
