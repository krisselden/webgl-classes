// generated
export default class Buffer{constructor(gl,buffer){
this.gl=gl;
this.buffer=buffer;
}
delete(){
this.gl.deleteBuffer(this.buffer);
}
}