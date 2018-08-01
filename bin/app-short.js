#!/usr/bin/env node --harmony
'use strict';

const shorturl = require('shorturl-2');

module.exports = function (comm) {
    comm
        .command('short [url]')
        .action(function (url, opts) {
            shorturl(url, function(url) {
                console.log(url);
            });
        });
}