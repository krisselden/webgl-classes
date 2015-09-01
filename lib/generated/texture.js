// generated
export default class Texture{constructor(gl,texture){
this.gl=gl;
this.texture=texture;
}
delete(){
this.gl.deleteTexture(this.texture);
}
}