#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const DIRECTUS_EXTENSIONS_PATH_VAR="DIRECTUS_EXTENSIONS_PATH";
const EXTENSION_PATH="dwaring87-human-readable-id";

// Get Directus Extensions Directory from .env file 
require('dotenv').config({path: process.env.DOTENV_CONFIG_PATH});
if ( !process.env[DIRECTUS_EXTENSIONS_PATH_VAR] ) {
    console.error("ERROR: Could not read env var " + DIRECTUS_EXTENSIONS_PATH_VAR + " - make sure it is exported or set in the .env file in the extensions root directory");
    process.exit(1);
}

// Set deploy path to interfaces directory
const deploy_dir = path.resolve(process.env[DIRECTUS_EXTENSIONS_PATH_VAR], "interfaces", EXTENSION_PATH);
console.log("Deploying Interface to: " + deploy_dir);

// Make Interface Directory
if ( !fs.existsSync(deploy_dir) ){
    fs.mkdirSync(deploy_dir, { recursive: true });
}

// Copy Files
try {
    fs.copyFileSync(path.resolve('./dist/index.js'), path.resolve(deploy_dir, 'index.js'), fs.constants.COPYFILE_FICLONE);
}
catch (err) {
    console.error("ERROR: Could not copy source file to the deploy directory!");
    process.exit(1);
}