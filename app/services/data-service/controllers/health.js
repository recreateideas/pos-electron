const healthCheck = async (req, res) => {
    console.log('Health: Ok');
    res.status(200).send({
        health: 'ok'
    });
};

module.exports = {
    healthCheck
};
