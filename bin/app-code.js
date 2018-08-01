#!/usr/bin/env node --harmony
'use strict';

const { exec } = require('child_process');

module.exports = function (comm) {
    comm
        .command('add [directory]')
        .option('-n, --new', 'Opens the directory on a new workspace')
        .action(function (directory, opts) {
            let cmd = 'code ';
            // Add directory
            cmd += directory ? "'" + directory + "'" : '.';
            // Add params
            cmd += opts && opts.new ? "" : " --add";
            
            exec(cmd);
        });
}