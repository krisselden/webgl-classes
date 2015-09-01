import Buffer from './buffer';
import Framebuffer from './framebuffer';
import Program from './program';
import Renderbuffer from './renderbuffer';
import Shader from './shader';
import Texture from './texture';

function createWrapper(type, gl, obj) {
  switch (type) {
    case 'buffer': return new Buffer(gl, obj);
    case 'framebuffer': return new Framebuffer(gl, obj);
    case 'program': return new Program(gl, obj);
    case 'renderbuffer': return new Renderbuffer(gl, obj);
    case 'shader': return new Shader(gl, obj);
    case 'texture': return new Texture(gl, obj);
    default: throw new Error('unknown wrapper type '+type);
  }
}

const symbols = {
  buffer: Symbol('Buffer wrapper'),
  framebuffer: Symbol('Framebuffer wrapper'),
  program: Symbol('Program wrapper'),
  renderbuffer: Symbol('Renderbuffer wrapper'),
  shader: Symbol('Shader wrapper'),
  texture: Symbol('Texture wrapper')
};

export function wrap(type, gl, obj) {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((o) => wrap(type, gl, o));
  }
  let symbol = symbols[type];
  let wrapper = obj[symbol];
  if (!wrapper) {
    wrapper = createWrapper(type, gl, obj);
    obj[symbol] = wrapper;
  }
  return wrapper;
}

export function unwrap(type, obj) {
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((o) => unwrap(type, o));
  }
  return obj[type];
}
