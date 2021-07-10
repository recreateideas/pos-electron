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
        if (isElectron) {
            dispatch(getServicePorts());
            dispatch(setIsElectron(isElectron));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return isElectron ? servicePorts : undefined;
};

export default useServicePorts;
