WebGL ES6 Classes
=================

Instead of using objects like handles
```js
let program = ctx.createProgram();
ctx.attachShader(program, vertexShader);
ctx.attachShader(program, fragmentShader);
ctx.linkProgram(program);
if (!ctx.getProgramParameter(program, ctx.LINK_STATUS) {
  let log = ctx.getProgramInfoLog(program);
  throw new Error(log);
}
```

Use them like objects
```js
let vertexShader = ctx.createShader();
vertexShader.shaderSource(vsSrc);
vertexShader.compile();
if (!vertextShader.isCompiled) {
  let log = vertextShader.getInfoLog();
  vertextShader.delete();
  throw new Error(log);
}

let fragmentShader = ctx.createShader();
fragmentShader.shaderSource(fsSrc);
fragmentShader.compile();
if (!fragmentShader.isCompiled) {
  let log = fragmentShader.getInfoLog();
  fragmentShader.delete();
  throw new Error(log);
}

let program = ctx.createProgram();
program.attachShader(vertexShader);
program.attachShader(fragmentShader);
program.link();
if (!program.isLinked) {
  let log = program.getInfoLog();
  throw new Error(log);
}

program.validate()
program.isValid //= true
```

or

```js
let program = ctx.compileAndLinkProgram(vsSrc, fsSrc);
program.validate()
program.isValid //= true
```
