import { useState, useEffect } from 'react';
import { servicesHealthcheck } from '../utils';

const useHealthCheck = () => {
    const [isHealthy, setIsHealthy] = useState();
    useEffect(() => {
        async function healthCheck() {
            const result = await servicesHealthcheck();
            setIsHealthy(result);
        }
        healthCheck();
    }, []);
    return isHealthy;
};

export default useHealthCheck;
