import types from './types';

const { ipcRenderer } = window.require ? window.require('electron') : {};

const setIsElectron = isElectron => ({
    type: types.SET_IS_ELECTRON,
    data: { isElectron }
});

const getServicePorts = () => async dispatch => {
    if (ipcRenderer) {
        dispatch({
            type: types.GET_SERVICE_PORTS_PENDING
        });
        ipcRenderer.send('get-service-ports');
        ipcRenderer.on('service-ports', (event, { ports }) => {
            dispatch({
                type: types.GET_SERVICE_PORTS_SUCCESS,
                data: { ports }
            });
        });
    }
};

export { getServicePorts, setIsElectron };
