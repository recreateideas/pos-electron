const fixPath = require('fix-path');
const path = require('path');
const { spawn } = require('child_process');
const { ipcRenderer, app, BrowserWindow } = require('electron');

fixPath();
const dataService = spawn('node', [
    path.join(__dirname, '/app/services/data-service/bin/www'),
    {
        cmd: process.cmd()
    }
]);

let mainWindow;

const debug = /--debug/.test(process.argv[2]);

const loadMainProcess = () => {
    ipcRenderer.on('stop-server', (event, data) => {
        /* we should use IPC to tell orders-service to gracefully shutdown */
        dataService.kill('SIGINT');
    });
};

const createWindow = () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        autoHideMenuBar: true,
        width: 1366,
        height: 768
    });
    mainWindow.loadFile(
        path.join(__dirname, '/app/react-app/build/index.html')
    );

    if (debug) {
        process.env.NODE_ENV = 'development';
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('close', () => {
        mainWindow.webContents.send('stop-server');
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', createWindow);
app.on('browser-window-created', (e, window) => {
    window.setMenu(null);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        loadMainProcess();
        createWindow();
    }
});
