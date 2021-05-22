import { fetcher } from '../../../modules';
import types from './types';

const getProducts = () => async (dispatch, getState) => {
    const {
        data: { products }
    } = getState();
    dispatch({
        type: types.GET_PRODUCTS_PENDING
    });
    const config = {
        url: `http://localhost:2999/products`,
        errorHandler: error => {
            dispatch({
                type: types.GET_PRODUCTS_ERROR,
                data: { message: error.message }
            });
        },
        responseHandler: response => {
            dispatch({
                type: types.GET_PRODUCTS_SUCCESS,
                data: { products: response?.data?.products }
            });
        }
    };
    if (!products) {
        await fetcher(config);
    }
};

const checkout = orderStatus => async dispatch => {
    dispatch({
        type: types.CHECKOUT_PENDING
    });
    const config = {
        url: `http://localhost:2999/billing/checkout`,
        method: 'POST',
        body: { orderStatus },
        errorHandler: error => {
            dispatch({
                type: types.CHECKOUT_ERROR,
                data: { message: error.message }
            });
        },
        responseHandler: response => {
            dispatch({
                type: types.CHECKOUT_SUCCESS,
                data: { products: response?.data?.products }
            });
        }
    };
    await fetcher(config);
};

export { getProducts, checkout };
