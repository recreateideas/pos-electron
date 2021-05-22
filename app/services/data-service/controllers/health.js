const healthCheck = async (req, res) => {
    console.debug('HEALTH');
    res.status(200).send({
        health: 'ok'
    });
};

module.exports = {
    healthCheck
};
