// generated
export default class Renderbuffer{constructor(gl,renderbuffer){
this.gl=gl;
this.renderbuffer=renderbuffer;
}
delete(){
this.gl.deleteRenderbuffer(this.renderbuffer);
}
}