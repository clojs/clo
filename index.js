#!/usr/bin/env node

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var home_dir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
argv.shift();

var clo_home = home_dir + '/.clo'
var module_name = argv.shift();

var module_home = clo_home + '/' + module_name;
// argv.shift();
console.log('clo_home= ' + clo_home)
console.log('module_home= ' + module_home)
console.log('tpl params=' + argv)

var clo_json = module_home + '/clo.json';

console.log('clo_json=' + clo_json)

var loadjson = require('loadjson')
var config = loadjson(clo_json)

if (!config.error){
  generate(module_name, module_home, config, argv);
}else{
  console.log(config.error);
  process.exit();
}

// console.log(home_dir);

function generate(module_name, module_home, config, arg){
  var files = config.files;
  console.log('----------------generate start----------------');
  console.log('tpl files=' + files);
  console.log('tpl arg=' + arg);
  
  files.forEach(function(file){
    generate_one(module_name, module_home, file, arg)
  })

  console.log('----------------generate end----------------');
}

function generate_one(module_name, module_home, file, arg){
  var tpl = require('tpl_apply');

  var source = module_home + '/' + file
  var dest = process.cwd() + '/' + file;

  tpl.tpl_apply(source, {
  	title: "My New Post", body: "This is my first post!"
  }, dest);
}