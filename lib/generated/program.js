// generated
import{
unwrap,wrap}
from"../wrappers";
export default class Program{constructor(gl,program){
this.gl=gl;
this.program=program;
}
attachShader(shader){
this.gl.attachShader(this.program,unwrap("shader",shader));
}
bindAttribLocation(index,name){
this.gl.bindAttribLocation(this.program,index,name);
}
delete(){
this.gl.deleteProgram(this.program);
}
detachShader(shader){
this.gl.detachShader(this.program,unwrap("shader",shader));
}
getActiveAttrib(index){
return this.gl.getActiveAttrib(this.program,index);
}
getActiveUniform(index){
return this.gl.getActiveUniform(this.program,index);
}
getAttachedShaders(){
return wrap("shader",this.gl,this.gl.getAttachedShaders(this.program));
}
getAttribLocation(name){
return this.gl.getAttribLocation(this.program,name);
}
getParameter(pname){
return this.gl.getProgramParameter(this.program,pname);
}
getInfoLog(){
return this.gl.getProgramInfoLog(this.program);
}
getUniform(location){
return this.gl.getUniform(this.program,location);
}
getUniformLocation(name){
return this.gl.getUniformLocation(this.program,name);
}
link(){
this.gl.linkProgram(this.program);
}
validate(){
this.gl.validateProgram(this.program);
}
}