#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var modules = require('../generate')();
var codegen = require('../vendor/shift-codegen').default;

var projectDir = path.resolve(__dirname, '..');
var libDir = path.join(projectDir, 'lib');
var generatedDir = path.join(libDir, 'generated');

for (var moduleName in modules) {
  var ast = modules[moduleName];
  var file;
  if (moduleName === 'reexports') {
    file = path.join(libDir, 'index.js');
  } else {
    file = path.join(generatedDir, moduleName + '.js');
  }
  console.log('generating '+ file);
  //console.log(require('util').inspect(ast,{depth:30}));
  var code = '// generated\n' + codegen(ast,true);
  fs.writeFileSync(file, code);
}
