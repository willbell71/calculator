const { app, BrowserWindow } = require('electron');

let win;
createWindow = () => {
  win = new BrowserWindow({
    width: 256,
    height: 389 + 25,
    backgroundColor: '#000000',
    resizable: false,
    icon: `file://${__dirname}/dist/calculator-electron/assets/logo.png`
  });

  win.loadURL(`file://${__dirname}/dist/calculator-electron/index.html`);

  // uncomment below to open the DevTools.
  // win.webContents.openDevTools();

  // Event when the window is closed.
  win.on('closed', () => win = null);
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => app.quit());

app.on('activate', () => !win && createWindow());
