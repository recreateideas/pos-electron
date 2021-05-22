import { fetcher } from '../../../modules';
import types from './types';

const getProducts = () => dispatch => {
    dispatch({
        type: types.GET_PRODUCTS_PENDING
    });
    const config = {
        url: `/products`,
        errorHandler: error => {
            dispatch({
                type: types.GET_PRODUCTS_ERROR,
                data: { message: error.message }
            });
        },
        responseHandler: response => {
            dispatch({
                type: types.GET_PRODUCTS_SUCCESS,
                data: { user: response?.data?.user }
            });
        }
    };
    fetcher(config);
};

export { getProducts };
