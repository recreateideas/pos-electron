import { useEffect } from 'react';
import { actions, useDispatch, selectors, useSelector } from '../redux';

const { ipcRenderer } = window.require ? window.require('electron') : {};

const useServicePorts = () => {
    const dispatch = useDispatch();
    const {
        common: { getServicePorts, setIsElectron }
    } = actions;
    const { common: commonSelectors } = selectors;
    const servicePorts = useSelector(commonSelectors.servicePorts);
    const isElectron = !!ipcRenderer;
    useEffect(() => {
        dispatch(setIsElectron(isElectron));
        if (isElectron) {
            dispatch(getServicePorts());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return isElectron ? servicePorts : {};
};

export default useServicePorts;
