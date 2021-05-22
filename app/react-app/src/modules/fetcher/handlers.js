const errorHandler = err => {
    return {
        status: err.response ? err.response.status : err.status,
        data: err.response ? err.response.data : err.data
    };
};

const responseHandler = (res = {}) => {
    return {
        status: res.status,
        data: res.data
    };
};

module.exports = { errorHandler, responseHandler };
