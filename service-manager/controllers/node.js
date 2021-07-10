const getServicePorts = async event => {
    event.sender.send('service-ports', {
        ports: { 'data-service': process.env['data-service-port'] }
    });
    return;
};

module.exports = {
    getServicePorts
};
