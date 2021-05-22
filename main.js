const { ipcRenderer, app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');

const dataService = spawn('node', ['./app/services/data-service/bin/www'], {
    cwd: process.cwd()
});

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
    mainWindow.loadFile('./app/react-app/build/index.html');

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
