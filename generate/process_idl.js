var classes = {
  rendering_context: exportDefaultClass('RenderingContext', ['gl'])
};

var contantReexports = exportFrom('./generated/constants');

var modules = {
  reexports: buildModule([
    exportDefaultFrom('RenderingContext', './rendering_context'),
    contantReexports
  ]),
  constants: buildModule([]),
  rendering_context: buildModule([
    //namedImports(['wrap', 'unwrap'], '../wrappers')
    classes.rendering_context
  ])
};

var wrappers = mapWrappers([
  'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram',
  'WebGLRenderbuffer', 'WebGLShader', 'WebGLTexture'
]);

function process(nodes) {
  var node = findWebGLRenderingContextBase(nodes);
  processWebGLRenderingContextBase(node);
  return modules;
}

module.exports = process;

function processConst(node) {
  modules.constants.items.push(
    exportNamedConst(node.name, node.value.value)
  );
  contantReexports.namedExports.push(exportSpecifier(node.name));
}

function processAttribute(node) {
  classes.rendering_context.body.elements.push(glMemberGetter(node.name));
}

var seen = {};
function processOperation(node) {
  if (seen[node.name]) {
    return;
  }
  seen[node.name] = node;

  if (node.arguments.length === 0) { // not a wrapper
    processRenderingContextOperation(node);
    return;
  }
  var firstArg = node.arguments[0];
  var wrapperName = wrappers[firstArg.idlType.idlType];
  if (!wrapperName) {
    processRenderingContextOperation(node);
    return;
  }

  var wrapperClass = classes[wrapperName];
  var className = wrapperClass.body.name.name;

  if (node.name === 'useProgram' || node.name === 'is'+className) {
    processRenderingContextOperation(node);
    return;
  }

  processWrapperOperation(wrapperName, className, node);
}

function processWrapperOperation(wrapperName, className, node) {
  var argumentNodes = node.arguments.slice(1);
  var params = argumentNodes.map(mapParam);
  var args = [
    staticThisMember(wrapperName)
  ].concat(argumentNodes.map(function (arg) {
    return mapArgument(wrapperName, arg);
  }));
  var delegateName = node.name;
  var name = delegateName.replace(className, '');
  classes[wrapperName].body.elements.push(methodClassElement({
    type: 'Method',
    isGenerator: false,
    name: staticPropertyName(name),
    params: formalParameters(params),
    body: functionBody([
      returns(wrapperName, node.idlType, callExpression(
        staticMember(staticThisMember('gl'), delegateName), args
      ))
    ])
  }));
}

function processRenderingContextOperation(node) {
  var params = node.arguments.map(mapParam);
  var args = node.arguments.map(function (arg) {
    return mapArgument('rendering_context', arg);
  });
  classes.rendering_context.body.elements.push(methodClassElement({
    type: 'Method',
    isGenerator: false,
    name: staticPropertyName(node.name),
    params: formalParameters(params),
    body: functionBody([
      returns('rendering_context', node.idlType, callExpression(
        staticMember(staticThisMember('gl'), node.name), args
      ))
    ])
  }));
}

function mapArgument(moduleName, node) {
  var idlType = node.idlType;
  if (idlType.sequence) {
    idlType = idlType.idlType.idlType;
  } else {
    idlType = idlType.idlType;
  }
  var expression = identifierExpression(node.name);
  var wrapper = wrappers[idlType];
  if (wrapper) {
    return unwrapExpression(moduleName, wrapper, expression);
  }
  return expression;
}

function returns(moduleName, idlType, expression) {
  if (idlType.sequence) {
    idlType = idlType.idlType.idlType;
  } else {
    idlType = idlType.idlType;
  }
  if (idlType === 'void') {
    return expressionStatement(expression);
  }
  var wrapper = wrappers[idlType];
  if (wrapper) {
    return returnStatement(wrapExpression(moduleName, wrapper, expression));
  }
  return returnStatement(expression);
}

var hasUnwrapImport = {};
function unwrapExpression(moduleName, wrapperName, expression) {
  if (!hasUnwrapImport[moduleName]) {
    hasUnwrapImport[moduleName] = true;
    if (modules[moduleName].items[0].type === 'Import') {
      modules[moduleName].items[0].namedImports.push(importSpecifier('unwrap'));
    } else {
      modules[moduleName].items.splice(0,0, namedImports(['unwrap'], '../wrappers'));
    }
  }
  return callExpression(identifierExpression('unwrap'), [
    literalString(wrapperName), expression
  ]);
}

var hasWrapImport = {};
function wrapExpression(moduleName, wrapperName, expression) {
  if (!hasWrapImport[moduleName]) {
    hasWrapImport[moduleName] = true;
    if (modules[moduleName].items[0].type === 'Import') {
      modules[moduleName].items[0].namedImports.push(importSpecifier('wrap'));
    } else {
      modules[moduleName].items.splice(0,0, namedImports(['wrap'], '../wrappers'));
    }
  }
  return callExpression(identifierExpression('wrap'), [
    literalString(wrapperName), staticThisMember('gl'), expression
  ]);
}

function mapParam(node) {
  return node.name;
}

function processWebGLRenderingContextBase(node) {
  var members = node.members;
  var member;
  for (var i = 0; i < members.length; i++) {
    member = members[i];
    if (member.type === 'const') {
      processConst(member);
    } else if (member.type === 'attribute') {
      processAttribute(member);
    } else if (member.type === 'operation') {
      processOperation(member);
    }
  }
}

function findWebGLRenderingContextBase(nodes) {
  var node;
  for (var i = 0; i < nodes.length; i++) {
    node = nodes[i];
    if (node.type === 'interface' && node.name === 'WebGLRenderingContextBase') {
      return node;
    }
  }
}

function mapWrappers(idlTypes) {
  var wrappers = {};
  idlTypes.forEach(function (idlType) {
    var className = idlType.replace('WebGL', '');
    var name = className[0].toLowerCase() + className.slice(1);
    wrappers[idlType] = name;
    classes[name] = exportDefaultClass(className, ['gl', name]);
    modules[name] = buildModule([
      classes[name]
    ]);
  });
  return wrappers;
}

function buildModule(items) {
  return { type: 'Module', directives: [], items: items };
}

function exportDefaultClass(name, params) {
  return {
    type: 'ExportDefault',
    body: {
      type: 'ClassDeclaration',
      name: bindingIdentifier(name),
      super: null,
      elements: [constructorMethod(params)]
    }
  };
}

function constructorMethod(params) {
  return methodClassElement({
    type: 'Method',
    isGenerator: false,
    name: staticPropertyName('constructor'),
    params: formalParameters(params),
    body: functionBody(params.map(assignParamToThis))
  });
}

function glMemberGetter(property) {
  return methodClassElement({
    type: 'Getter',
    name: staticPropertyName(property),
    body: functionBody([
      returnStatement(staticMember(staticThisMember('gl'), property))
    ])
  });
}

function assignParamToThis(param) {
  return {
    type: 'ExpressionStatement',
    expression: {
      type: 'AssignmentExpression',
      binding: staticThisMember(param),
      expression: identifierExpression(param)
    }
  };
}

function expressionStatement(expression) {
  return { type: 'ExpressionStatement', expression: expression };
}

function returnStatement(expression) {
  return { type: 'ReturnStatement', expression: expression };
}

function callExpression(callee, args) {
  return { type: 'CallExpression', callee: callee, arguments: args };
}

function staticMember(obj, prop) {
  return { type: 'StaticMemberExpression', object: obj, property: prop };
}

function staticThisMember(property) {
  return staticMember({ type: 'ThisExpression' }, property);
}

function identifierExpression(name) {
  return { type: 'IdentifierExpression', name: name };
}

function bindingIdentifier(name) {
  return { type: 'BindingIdentifier', name: name };
}

function methodClassElement(method) {
  return { type: 'ClassElement', isStatic: false, method: method };
}

function functionBody(statements) {
  return { type: 'FunctionBody', directives: [], statements: statements };
}

function formalParameters(params) {
  var items = params.map(bindingIdentifier);
  return { type: 'FormalParameters', items: items, rest: null };
}

function staticPropertyName(name) {
  return { type: 'StaticPropertyName', value: name };
}

function exportNamedConst(name, value) {
  return {
    type: 'Export',
    declaration: {
      type: 'VariableDeclaration',
      kind: 'const',
      declarators: [{
        type: 'VariableDeclarator',
        binding: bindingIdentifier(name),
        init: literalNumber(value)
      }]
    }
  };
}

function exportDefaultFrom(exportedName, moduleSpecifier) {
  return {
    type: 'ExportFrom',
    namedExports: [{
      type: 'ExportSpecifier',
      name: 'default',
      exportedName: exportedName
    }],
    moduleSpecifier: moduleSpecifier
  };
}

function exportSpecifier(exportedName) {
  return {
    type: 'ExportSpecifier',
    name: null,
    exportedName: exportedName
  };
}

function exportFrom(moduleSpecifier) {
  return {
    type: 'ExportFrom',
    namedExports: [],
    moduleSpecifier: moduleSpecifier
  };
}

function namedImports(names, moduleSpecifier, defaultName) {
  return {
    type: 'Import',
    defaultBinding: defaultName ? bindingIdentifier(defaultName) : null,
    namedImports: names.map(importSpecifier),
    moduleSpecifier: moduleSpecifier
  };
}

function importSpecifier(name) {
  return {
    type: 'ImportSpecifier', name: null, binding: bindingIdentifier(name) };
}

function literalString(s) {
  return { type: 'LiteralStringExpression', value: s };
}

function literalNumber(n) {
  return { type: 'LiteralNumericExpression', value: n };
}
