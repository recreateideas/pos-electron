const { ipcMain } = require('electron');
const { node } = require('../controllers');

ipcMain.on('get-service-ports', node.getServicePorts);
