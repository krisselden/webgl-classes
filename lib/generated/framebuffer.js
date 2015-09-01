// generated
export default class Framebuffer{constructor(gl,framebuffer){
this.gl=gl;
this.framebuffer=framebuffer;
}
delete(){
this.gl.deleteFramebuffer(this.framebuffer);
}
}