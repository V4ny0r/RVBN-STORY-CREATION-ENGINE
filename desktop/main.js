/* Ravenbane Architect — desktop shell.
   Opens the very same index.html in its own window. The one thing it adds is
   a <webview>, which is what lets the Character.AI pane draw their chat inside
   the app instead of beside it (a browser must obey their frame rule; this
   window does not have to). Nothing about the story app itself changes. */
const { app, BrowserWindow, shell, session } = require('electron');
const path = require('path');
const fs = require('fs');

function pageFile() {
  /* packaged builds carry a copy in app/; running from the repo uses the real one */
  const packed = path.join(__dirname, 'app', 'index.html');
  return fs.existsSync(packed) ? packed : path.join(__dirname, '..', 'index.html');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1500, height: 980, minWidth: 900, minHeight: 620,
    backgroundColor: '#03050a',
    autoHideMenuBar: true,
    title: 'Ravenbane Architect',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true,          /* the Character.AI pane needs this and nothing else */
      spellcheck: true
    }
  });
  win.loadFile(pageFile());
  /* links the app opens (key pages, ElevenLabs, a "where to get one") go to the real browser */
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  /* Character.AI opens its own popups (login, etc.) — let those be real windows inside the app */
  win.webContents.on('did-attach-webview', (_e, contents) => {
    /* sign-in windows (Google, Apple, Character.AI's own) must open as real
       windows sharing the pane's session, or the login never lands */
    contents.setWindowOpenHandler(() => ({
      action: 'allow',
      overrideBrowserWindowOptions: { width: 520, height: 720, autoHideMenuBar: true, webPreferences: { partition: 'persist:characterai' } }
    }));
  });
}

app.whenReady().then(() => {
  /* their login survives closing the app — the pane uses partition "persist:characterai" */
  session.fromPartition('persist:characterai');
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
