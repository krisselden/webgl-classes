// generated
export default class Shader{constructor(gl,shader){
this.gl=gl;
this.shader=shader;
}
compile(){
this.gl.compileShader(this.shader);
}
delete(){
this.gl.deleteShader(this.shader);
}
getParameter(pname){
return this.gl.getShaderParameter(this.shader,pname);
}
getInfoLog(){
return this.gl.getShaderInfoLog(this.shader);
}
getSource(){
return this.gl.getShaderSource(this.shader);
}
shaderSource(source){
this.gl.shaderSource(this.shader,source);
}
}