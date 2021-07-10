const fixPath = require('fix-path');
const path = require('path');
const { spawn } = require('child_process');
const {
    default: installExtension,
    REDUX_DEVTOOLS,
    REACT_DEVELOPER_TOOLS
} = require('electron-devtools-installer');
const { ipcRenderer, app, BrowserWindow } = require('electron');

fixPath();

let mainWindow;

const services = ['data-service'];

let runningServices = services.map(serviceName =>
    spawn('node', [
        path.join(__dirname, '/app/services/', serviceName, '/bin/www')
    ])
);

const debug = /--debug/.test(process.argv[2]);

const addReactReduxDevTools = debug => {
    if (debug) {
        const options = {
            loadExtensionOptions: { allowFileAccess: true }
        };
        installExtension(REACT_DEVELOPER_TOOLS, options)
            .catch(err => console.log(`An error occurred: ${err}`))
            .then(name => console.log(`Added Extension: ${name}`));
        installExtension(REDUX_DEVTOOLS, options)
            .catch(err => console.log(`An error occurred: ${err}`))
            .then(name => console.log(`Added Extension: ${name}`));
    }
};

const loadMainProcess = () => {
    if (ipcRenderer) {
        ipcRenderer.on('stop-server', (event, data) => {
            /* we should use IPC to tell all services to gracefully shutdown */
            runningServices.forEach(service => service.kill('SIGINT'));
        });
    }
};

const createWindow = () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        autoHideMenuBar: true,
        width: 1366,
        height: 768,
        show: false
    });

    mainWindow.loadFile(
        path.join(__dirname, '/app/react-app/build/index.html')
    );

    if (debug) {
        process.env.NODE_ENV = 'development';
        mainWindow.webContents.openDevTools();
    }

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

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

app.whenReady().then(() => {
    addReactReduxDevTools(debug);
});
