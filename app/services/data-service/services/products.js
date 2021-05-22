const { burgers, sides } = require('./_data');

const queryProducts = async () => {
    console.debug('Query Product [START]');
    const data = { burgers, sides };
    const queryResult = await new Promise(resolve =>
        setTimeout(() => {
            resolve(data);
        }, 1000)
    );
    console.debug('Query Product [END]');
    return queryResult;
};

module.exports = {
    queryProducts
};
