var webidl = require('webidl2');
var fs = require('fs');
var path = require('path');

var idl = fs.readFileSync(path.join(__dirname, 'webgl.idl'), 'utf8');
// webidl2 chokes on these because of the or but we don't care about this info
// so just remove it
idl = idl.replace(/ *typedef [^;]* BufferDataSource;/g,'');
idl = idl.replace(/ *typedef [^;]* TexImageSource;/g,'');
idl = idl.replace('GLsizeiptr size', 'GLsizeiptr sizeOrData');
module.exports = webidl.parse(idl);
