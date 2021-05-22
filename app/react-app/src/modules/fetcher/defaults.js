const { errorHandler, responseHandler } = require('./handlers');

const defaults = {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET',
    errorHandler,
    responseHandler
};

module.exports = defaults;
