// generated
import{
unwrap,wrap}
from"../wrappers";
export default class RenderingContext{constructor(gl){
this.gl=gl;
}
get canvas(){
return this.gl.canvas;
}
get drawingBufferWidth(){
return this.gl.drawingBufferWidth;
}
get drawingBufferHeight(){
return this.gl.drawingBufferHeight;
}
getContextAttributes(){
return this.gl.getContextAttributes();
}
isContextLost(){
return this.gl.isContextLost();
}
getSupportedExtensions(){
return this.gl.getSupportedExtensions();
}
getExtension(name){
return this.gl.getExtension(name);
}
activeTexture(texture){
this.gl.activeTexture(texture);
}
bindBuffer(target,buffer){
this.gl.bindBuffer(target,unwrap("buffer",buffer));
}
bindFramebuffer(target,framebuffer){
this.gl.bindFramebuffer(target,unwrap("framebuffer",framebuffer));
}
bindRenderbuffer(target,renderbuffer){
this.gl.bindRenderbuffer(target,unwrap("renderbuffer",renderbuffer));
}
bindTexture(target,texture){
this.gl.bindTexture(target,unwrap("texture",texture));
}
blendColor(red,green,blue,alpha){
this.gl.blendColor(red,green,blue,alpha);
}
blendEquation(mode){
this.gl.blendEquation(mode);
}
blendEquationSeparate(modeRGB,modeAlpha){
this.gl.blendEquationSeparate(modeRGB,modeAlpha);
}
blendFunc(sfactor,dfactor){
this.gl.blendFunc(sfactor,dfactor);
}
blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha){
this.gl.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);
}
bufferData(target,sizeOrData,usage){
this.gl.bufferData(target,sizeOrData,usage);
}
bufferSubData(target,offset,data){
this.gl.bufferSubData(target,offset,data);
}
checkFramebufferStatus(target){
return this.gl.checkFramebufferStatus(target);
}
clear(mask){
this.gl.clear(mask);
}
clearColor(red,green,blue,alpha){
this.gl.clearColor(red,green,blue,alpha);
}
clearDepth(depth){
this.gl.clearDepth(depth);
}
clearStencil(s){
this.gl.clearStencil(s);
}
colorMask(red,green,blue,alpha){
this.gl.colorMask(red,green,blue,alpha);
}
compressedTexImage2D(target,level,internalformat,width,height,border,data){
this.gl.compressedTexImage2D(target,level,internalformat,width,height,border,data);
}
compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,data){
this.gl.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,data);
}
copyTexImage2D(target,level,internalformat,x,y,width,height,border){
this.gl.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
}
copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height){
this.gl.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
}
createBuffer(){
return wrap("buffer",this.gl,this.gl.createBuffer());
}
createFramebuffer(){
return wrap("framebuffer",this.gl,this.gl.createFramebuffer());
}
createProgram(){
return wrap("program",this.gl,this.gl.createProgram());
}
createRenderbuffer(){
return wrap("renderbuffer",this.gl,this.gl.createRenderbuffer());
}
createShader(type){
return wrap("shader",this.gl,this.gl.createShader(type));
}
createTexture(){
return wrap("texture",this.gl,this.gl.createTexture());
}
cullFace(mode){
this.gl.cullFace(mode);
}
depthFunc(func){
this.gl.depthFunc(func);
}
depthMask(flag){
this.gl.depthMask(flag);
}
depthRange(zNear,zFar){
this.gl.depthRange(zNear,zFar);
}
disable(cap){
this.gl.disable(cap);
}
disableVertexAttribArray(index){
this.gl.disableVertexAttribArray(index);
}
drawArrays(mode,first,count){
this.gl.drawArrays(mode,first,count);
}
drawElements(mode,count,type,offset){
this.gl.drawElements(mode,count,type,offset);
}
enable(cap){
this.gl.enable(cap);
}
enableVertexAttribArray(index){
this.gl.enableVertexAttribArray(index);
}
finish(){
this.gl.finish();
}
flush(){
this.gl.flush();
}
framebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer){
this.gl.framebufferRenderbuffer(target,attachment,renderbuffertarget,unwrap("renderbuffer",renderbuffer));
}
framebufferTexture2D(target,attachment,textarget,texture,level){
this.gl.framebufferTexture2D(target,attachment,textarget,unwrap("texture",texture),level);
}
frontFace(mode){
this.gl.frontFace(mode);
}
generateMipmap(target){
this.gl.generateMipmap(target);
}
getBufferParameter(target,pname){
return this.gl.getBufferParameter(target,pname);
}
getParameter(pname){
return this.gl.getParameter(pname);
}
getError(){
return this.gl.getError();
}
getFramebufferAttachmentParameter(target,attachment,pname){
return this.gl.getFramebufferAttachmentParameter(target,attachment,pname);
}
getRenderbufferParameter(target,pname){
return this.gl.getRenderbufferParameter(target,pname);
}
getShaderPrecisionFormat(shadertype,precisiontype){
return this.gl.getShaderPrecisionFormat(shadertype,precisiontype);
}
getTexParameter(target,pname){
return this.gl.getTexParameter(target,pname);
}
getVertexAttrib(index,pname){
return this.gl.getVertexAttrib(index,pname);
}
getVertexAttribOffset(index,pname){
return this.gl.getVertexAttribOffset(index,pname);
}
hint(target,mode){
this.gl.hint(target,mode);
}
isBuffer(buffer){
return this.gl.isBuffer(unwrap("buffer",buffer));
}
isEnabled(cap){
return this.gl.isEnabled(cap);
}
isFramebuffer(framebuffer){
return this.gl.isFramebuffer(unwrap("framebuffer",framebuffer));
}
isProgram(program){
return this.gl.isProgram(unwrap("program",program));
}
isRenderbuffer(renderbuffer){
return this.gl.isRenderbuffer(unwrap("renderbuffer",renderbuffer));
}
isShader(shader){
return this.gl.isShader(unwrap("shader",shader));
}
isTexture(texture){
return this.gl.isTexture(unwrap("texture",texture));
}
lineWidth(width){
this.gl.lineWidth(width);
}
pixelStorei(pname,param){
this.gl.pixelStorei(pname,param);
}
polygonOffset(factor,units){
this.gl.polygonOffset(factor,units);
}
readPixels(x,y,width,height,format,type,pixels){
this.gl.readPixels(x,y,width,height,format,type,pixels);
}
renderbufferStorage(target,internalformat,width,height){
this.gl.renderbufferStorage(target,internalformat,width,height);
}
sampleCoverage(value,invert){
this.gl.sampleCoverage(value,invert);
}
scissor(x,y,width,height){
this.gl.scissor(x,y,width,height);
}
stencilFunc(func,ref,mask){
this.gl.stencilFunc(func,ref,mask);
}
stencilFuncSeparate(face,func,ref,mask){
this.gl.stencilFuncSeparate(face,func,ref,mask);
}
stencilMask(mask){
this.gl.stencilMask(mask);
}
stencilMaskSeparate(face,mask){
this.gl.stencilMaskSeparate(face,mask);
}
stencilOp(fail,zfail,zpass){
this.gl.stencilOp(fail,zfail,zpass);
}
stencilOpSeparate(face,fail,zfail,zpass){
this.gl.stencilOpSeparate(face,fail,zfail,zpass);
}
texImage2D(target,level,internalformat,width,height,border,format,type,pixels){
this.gl.texImage2D(target,level,internalformat,width,height,border,format,type,pixels);
}
texParameterf(target,pname,param){
this.gl.texParameterf(target,pname,param);
}
texParameteri(target,pname,param){
this.gl.texParameteri(target,pname,param);
}
texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,pixels){
this.gl.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,pixels);
}
uniform1f(location,x){
this.gl.uniform1f(location,x);
}
uniform1fv(location,v){
this.gl.uniform1fv(location,v);
}
uniform1i(location,x){
this.gl.uniform1i(location,x);
}
uniform1iv(location,v){
this.gl.uniform1iv(location,v);
}
uniform2f(location,x,y){
this.gl.uniform2f(location,x,y);
}
uniform2fv(location,v){
this.gl.uniform2fv(location,v);
}
uniform2i(location,x,y){
this.gl.uniform2i(location,x,y);
}
uniform2iv(location,v){
this.gl.uniform2iv(location,v);
}
uniform3f(location,x,y,z){
this.gl.uniform3f(location,x,y,z);
}
uniform3fv(location,v){
this.gl.uniform3fv(location,v);
}
uniform3i(location,x,y,z){
this.gl.uniform3i(location,x,y,z);
}
uniform3iv(location,v){
this.gl.uniform3iv(location,v);
}
uniform4f(location,x,y,z,w){
this.gl.uniform4f(location,x,y,z,w);
}
uniform4fv(location,v){
this.gl.uniform4fv(location,v);
}
uniform4i(location,x,y,z,w){
this.gl.uniform4i(location,x,y,z,w);
}
uniform4iv(location,v){
this.gl.uniform4iv(location,v);
}
uniformMatrix2fv(location,transpose,value){
this.gl.uniformMatrix2fv(location,transpose,value);
}
uniformMatrix3fv(location,transpose,value){
this.gl.uniformMatrix3fv(location,transpose,value);
}
uniformMatrix4fv(location,transpose,value){
this.gl.uniformMatrix4fv(location,transpose,value);
}
useProgram(program){
this.gl.useProgram(unwrap("program",program));
}
vertexAttrib1f(indx,x){
this.gl.vertexAttrib1f(indx,x);
}
vertexAttrib1fv(indx,values){
this.gl.vertexAttrib1fv(indx,values);
}
vertexAttrib2f(indx,x,y){
this.gl.vertexAttrib2f(indx,x,y);
}
vertexAttrib2fv(indx,values){
this.gl.vertexAttrib2fv(indx,values);
}
vertexAttrib3f(indx,x,y,z){
this.gl.vertexAttrib3f(indx,x,y,z);
}
vertexAttrib3fv(indx,values){
this.gl.vertexAttrib3fv(indx,values);
}
vertexAttrib4f(indx,x,y,z,w){
this.gl.vertexAttrib4f(indx,x,y,z,w);
}
vertexAttrib4fv(indx,values){
this.gl.vertexAttrib4fv(indx,values);
}
vertexAttribPointer(indx,size,type,normalized,stride,offset){
this.gl.vertexAttribPointer(indx,size,type,normalized,stride,offset);
}
viewport(x,y,width,height){
this.gl.viewport(x,y,width,height);
}
}