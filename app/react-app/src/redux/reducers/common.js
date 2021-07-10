import initialState from '../store/initialState';
import { types } from '../actions/common';

const common = (state = initialState.common, action) => {
    const { type, data } = action;
    switch (type) {
        case types.SET_IS_ELECTRON:
            return {
                ...state,
                isElectron: data.isElectron
            };
        case types.GET_SERVICE_PORTS_SUCCESS:
            return {
                ...state,
                servicePorts: data.ports
            };
        default:
            return state;
    }
};

export default common;
