import initialState from '../store/initialState';
import { types } from '../actions/data';

const auth = (state = initialState.data, action) => {
    const { type, data } = action;
    switch (type) {
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: data.products
            };
        default:
            return state;
    }
};

export default auth;
