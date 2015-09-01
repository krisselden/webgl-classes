module.exports = function generate() {
  var nodes = require('./webgl_idl_ast');
  var processIdl = require('./process_idl');
  var modules = processIdl(nodes);
  return modules;
};
