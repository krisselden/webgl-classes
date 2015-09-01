#!/usr/bin/env node
var path = require('path');
var babel = require('babel-core');
var rollup = require('rollup');
var sorcery = require('sorcery');
var fs = require('fs');
var walkSync = require('walk-sync');
var mkdirpSync = require('mkdirp').sync;
var UglifyJS = require('uglifyjs');

var projectDir = path.resolve(__dirname, '..');
var transpiledDir = path.join(projectDir, 'transpiled');
var distDir = path.join(projectDir, 'dist');
var libDir = path.join(projectDir, 'lib');

// for sorcery
var contents = {};
var sourcemaps = {};

var usedHelpers = [];
var files = walkSync(libDir, ['**/*.js']);
files.forEach(function (file) {
  var sourceFullPath = path.join(libDir, file);
  var sourceRelative = path.join('lib', file);
  var destFullPath = path.join(transpiledDir, file);
  var destRelative = path.join('transpiled', file);

  var code = fs.readFileSync(sourceFullPath, 'utf8');
  contents[sourceFullPath] = code;

  var out = babel.transform(code, {
    sourceRoot: projectDir,
    filenameRelative: destRelative,
    loose: 'all',
    sourceMap: true,
    sourceFileName: sourceRelative,
    blacklist: ['es6.modules', 'strict'],
    externalHelpers: true
  });

  // insert line since we know it is only one source file
  // just add one empty line for the mappings
  out.map.mappings = ';' + out.map.mappings;
  out.code = "import babelHelpers from '"+buildHelpersPathFrom(file)+"';\n"+out.code;

  out.metadata.usedHelpers.forEach(function (usedHelper) {
    if (usedHelpers.indexOf(usedHelper) === -1) {
      usedHelpers.push(usedHelper);
    }
  });

  mkdirpSync(path.dirname(destFullPath));
  fs.writeFileSync(destFullPath, out.code);
  fs.writeFileSync(destFullPath + '.map', JSON.stringify(out.map));

  contents[destFullPath] = out.code;
  sourcemaps[destFullPath] = out.map;
});

var babelHelpers = babel.buildExternalHelpers(usedHelpers, 'var') + '\nexport default babelHelpers;';
var babelHelpersFile  = path.join(transpiledDir, 'babel-helpers.js');
fs.writeFileSync(babelHelpersFile, babelHelpers);

var entryFile  = path.join(transpiledDir, 'index.js');
var bundleFile = path.join(distDir, 'index.js');
var minifiedFile = path.join(distDir, 'index.min.js');

rollup.rollup({
  entry: entryFile
}).then(function (bundle) {
  var out = bundle.generate({
    sourceMap: true,
    dest: bundleFile,
    format: 'umd',
    moduleName: 'WebGL'
  });
  var code = out.code;
  code += '//# sourceMa' +
          'ppingURL=index.js.map';
  fs.writeFileSync(bundleFile, code);
  fs.writeFileSync(bundleFile + '.map', out.map.toString());
}).then(function () {
  return sorcery.load(bundleFile, {
    contents: contents,
    sourcemaps: sourcemaps
  });
}).then(function (chain) {
  return chain.write({
    includeContent: true
  });
}).then(function () {
  var result = UglifyJS.minify(bundleFile, {
    outSourceMap: 'index.min.js.map',
    sourceMapIncludeSources: true
  });
  fs.writeFileSync( minifiedFile, result.code );
  fs.writeFileSync( minifiedFile + '.map', result.map );
}).then(function () {
  return sorcery.load(minifiedFile);
}).then(function (chain) {
  return chain.write({
    includeContent: true
  });
}).catch(function (err) {
  console.error(err);
  console.error(err.stack);
  process.exit(1);
});

function buildHelpersPathFrom(file) {
  var babelHelperPath = [];
  var index = file.indexOf(path.sep);
  if (index === -1) {
    babelHelperPath.push('.');
  } else {
    do {
      babelHelperPath.push('..');
      index = file.indexOf(path.sep, index+1);
    } while (index > 0);
  }
  babelHelperPath.push('babel-helpers');
  return babelHelperPath.join(path.sep);
}
