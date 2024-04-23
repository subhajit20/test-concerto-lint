#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

function createFile(){
  const sourceFilePath = path.join(__dirname,'../','concerto-config.js');
  const destinationFilePath = path.join(process.cwd(), 'concerto-config.js');

  try {
    fs.copyFileSync(sourceFilePath,destinationFilePath);
    console.log('config.js created successfully within the package directory!');
  } catch (err) {
    console.error('Error creating config.js:', err);
  }
}

createFile();

module.exports = createFile();