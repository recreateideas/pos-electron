import { fetcher } from '../../../modules';
import types from './types';

const getProducts = () => async (dispatch, getState) => {
    const {
        data: { products },
        common: { servicePorts }
    } = getState();
    dispatch({
        type: types.GET_PRODUCTS_PENDING
    });
    const path = servicePorts
        ? `http://localhost:${servicePorts['data-service']}`
        : '';
    const config = {
        url: `${path}/products`,
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

const checkout = orderStatus => async (dispatch, getState) => {
    const {
        common: { servicePorts }
    } = getState();
    dispatch({
        type: types.CHECKOUT_PENDING
    });
    const path = servicePorts
        ? `http://localhost:${servicePorts['data-service']}`
        : '';
    const config = {
        url: `${path}/billing//checkout`,
        method: 'POST',
        data: { orderStatus },
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
