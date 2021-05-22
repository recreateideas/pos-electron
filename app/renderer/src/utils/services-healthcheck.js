const request = require('request');

const services = [
    {
        name: 'orders-service',
        endpoint: 'http://127.0.0.1:2999',
        maxRetries: 10
    }
    // add other services here to perform healthchecks
];
const servicesHealthcheck = async () => {
    const checks = await Promise.allSettled(
        services.map(service => {
            const { name, endpoint, maxRetries } = service;
            return new Promise((resolve, reject) => {
                let triesCount = 1;
                const check = setInterval(() => {
                    request(endpoint, (error, response, body) => {
                        console.log(response);
                        if (!error && response.statusCode === 200) {
                            console.log(response.body);
                            resolve({ [name]: { endpoint, running: true } });
                            clearInterval(check);
                        }
                        if (triesCount === maxRetries) {
                            reject({ [name]: { endpoint, running: false } });
                        }
                        triesCount++;
                    });
                }, 1000);
            });
        })
    );
    const healthy = Object.values(checks).every(c => c.status === 'fulfilled');
    return healthy;
};

export default servicesHealthcheck;
