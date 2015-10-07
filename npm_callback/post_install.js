#!/usr/bin/env node

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var home_dir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
argv.shift();

var clo_home = home_dir + '/.clo'

var mkdirp = require('mkdirp');
    
mkdirp(clo_home, function (err) {
    if (err) console.error(err)
    else console.log('pow! create dir ' + clo_home + ' sucess!')
});