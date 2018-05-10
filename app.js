// By EliThe (totally awesome) Coder
// Have a noice lifezeedoodlez

"use strict";

// change this if you want:

const port = 80;

// no food or drink beyond this point
const express = require('express');
const path = require("path");
const app = express();
const util = require('util');

function logMessage(type, message) {
  let typeString;
  switch (type) {
    case 0:
      typeString = "INFO";
      break;
    case 1:
      typeString = "WARNING";
      break;
    case 2:
      typeString = "ERROR";
      break;
    default:
      typeString = "LOG";
  }
  let datestamp = "";
  datestamp += new Date();
  console.log(`[${typeString.toUpperCase()}] {${datestamp.toUpperCase()}} ${message.toUpperCase()}`);
}

const io = require('socket.io')(server);
