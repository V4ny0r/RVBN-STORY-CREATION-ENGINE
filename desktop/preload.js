/* The only thing the page learns from the shell: that it is inside one. */
const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('RVBN_DESKTOP', true);
