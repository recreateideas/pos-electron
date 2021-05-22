import axios from 'axios';
import defaults from './defaults';

const fetcher = async args => {
    const {
        url,
        data,
        method = defaults.method,
        headers = defaults.headers,
        errorHandler = defaults.errorHandler,
        responseHandler = defaults.responseHandler
    } = args;
    const params = { method, headers, data };
    let response;
    try {
        response = await axios(url, params);
        return responseHandler(response);
    } catch (err) {
        return errorHandler(err);
    }
};

export default fetcher;
