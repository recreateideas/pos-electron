import { useState, useEffect } from 'react';
import { selectors, useSelector } from '../redux';
import { servicesHealthcheck } from '../utils';

const useHealthCheck = ({ servicePorts }) => {
    const [isHealthy, setIsHealthy] = useState();
    const { common: commonSelectors } = selectors;
    const isElectron = useSelector(commonSelectors.isElectron);
    useEffect(() => {
        if ((isElectron === true && servicePorts) || isElectron === false) {
            async function healthCheck() {
                const result = await servicesHealthcheck({
                    servicePorts,
                    isElectron
                });
                setIsHealthy(result);
            }
            healthCheck();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [servicePorts, isElectron]);
    return isHealthy;
};

export default useHealthCheck;
