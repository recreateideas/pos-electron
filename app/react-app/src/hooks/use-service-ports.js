import { useEffect } from 'react';
import { actions, useDispatch, selectors, useSelector } from '../redux';

const { ipcRenderer } = window.require ? window.require('electron') : {};

const useServicePorts = () => {
    const dispatch = useDispatch();
    const {
        common: { getServicePorts }
    } = actions;
    const { common: commonSelectors } = selectors;
    const servicePorts = useSelector(commonSelectors.servicePorts);
    useEffect(() => {
        if (ipcRenderer) {
            dispatch(getServicePorts());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return ipcRenderer ? servicePorts : true;
};

export default useServicePorts;
