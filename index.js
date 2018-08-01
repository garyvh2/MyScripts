#!/usr/bin/env node --harmony

const comm = require('commander');
const appCode = require('./bin/app-code');
const appShort = require('./bin/app-short');

(function () {
    'use strict';
    // Add directory to VS Code
    appCode(comm);
    /// Shortens a URL
    appShort(comm);

    comm.parse(process.argv);
})()


