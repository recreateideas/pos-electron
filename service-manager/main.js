require('./routes');
const getPort = require('get-port');
const { spawn } = require('child_process');
const path = require('path');

const services = ['data-service'];

const _runningServices = services.map(async serviceName => {
    const port = await getPort({ port: getPort.makeRange(3066, 3100) });
    process.env[`${serviceName}-port`] = port;
    const env = {
        ...process.env,
        [`${serviceName}-port`]: port
    };
    const childProcess = await spawn(
        'node',
        [path.join(__dirname, '/../app/services/', serviceName, '/bin/www')],
        { env }
    );
    return childProcess;
});

const killAllServices = () =>
    _runningServices.forEach(async service => {
        (await service).kill('SIGINT');
    });

module.exports = {
    killAllServices
};
