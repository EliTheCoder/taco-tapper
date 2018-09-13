const tacoimg = require('taco.png')
const {app, BrowserWindow} = require('electron')

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadFile('index.html')
  }

  app.on('ready', createWindow)

  const client = require('discord-rich-presence')('489776222017159179');

client.updatePresence({
  state: '0 TPS',
  details: '0 Tacos',
  startTimestamp: 1536867726,
  largeImageKey: 'tacoimg',
  instance: true,
});
