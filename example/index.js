var context = WebGL.RenderingContext.fromId('webgl-canvas');

// compile and link shader pipeline
var program = context.compileAndLinkProgramFromIds('shader-vs', 'shader-fs');

// shader input locations
var posAttrib = program.getAttribLocation('pos');
var modelViewUniform = program.getUniformLocation('modelView');
var projectionUniform = program.getUniformLocation('proj');

// camera
var modelView = mat4.create();
var projection = mat4.create();
mat4.perspective(projection, Math.PI/4, 640.0/480.0, 0.1, 100.0);
mat4.fromTranslation(modelView, vec3.fromValues(0, 0, -4));

// model
var square = context.createBuffer();
context.bindBuffer(WebGL.ARRAY_BUFFER, square);
context.bufferData(WebGL.ARRAY_BUFFER, new Float32Array([
  1.0,  1.0,  0.0,
  -1.0, 1.0,  0.0,
  1.0,  -1.0, 0.0,
  -1.0, -1.0, 0.0
]), WebGL.STATIC_DRAW);

context.useProgram(program);
function drawScene() {
  requestAnimationFrame(drawScene);

  // rotate camera around model
  mat4.rotateY(modelView, modelView, Math.PI/90);

  // draw scene
  context.clear(WebGL.COLOR_BUFFER_BIT | WebGL.DEPTH_BUFFER_BIT);
  context.enableVertexAttribArray(posAttrib);
  context.vertexAttribPointer(posAttrib, 3, WebGL.FLOAT, false, 0, 0);
  context.uniformMatrix4fv(modelViewUniform, false, modelView);
  context.uniformMatrix4fv(projectionUniform, false, projection);
  context.drawArrays(WebGL.TRIANGLE_STRIP, 0, 4);
}

drawScene();
