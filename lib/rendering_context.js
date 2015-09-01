/* globals document */
import BaseRenderingContext from './generated/rendering_context';
import { VERTEX_SHADER, FRAGMENT_SHADER } from './generated/constants';

export default class RenderingContext extends BaseRenderingContext {
  // high level API
  compileAndLinkProgramFromIds(vertexShaderId, fragmentShaderId) {
    let vertexShaderScript = document.getElementById(vertexShaderId);
    let fragmentShaderScript = document.getElementById(fragmentShaderId);
    return this.compileAndLinkProgramFromScripts(vertexShaderScript, fragmentShaderScript);
  }

  compileAndLinkProgramFromScripts(vertexShaderScript, fragmentShaderScript) {
    return this.compileAndLinkProgram(vertexShaderScript.text, fragmentShaderScript.text);
  }

  compileAndLinkProgram(vertexShaderSource, fragmentShaderSource) {
    let vertextShader = this.compileVertexShader(vertexShaderSource);
    let fragmentShader = this.compileFragmentShader(fragmentShaderSource);
    return this.linkProgram(vertextShader, fragmentShader);
  }

  linkProgram(vertexShader, fragmentShader) {
    let program = this.createProgram();
    program.attachShader(vertexShader);
    program.attachShader(fragmentShader);
    program.link();
    if (!program.isLinked) {
      let log = program.getInfoLog();
      throw new Error(log);
    }
    return program;
  }

  compileShaderFromId(shaderId) {
    let script = document.getElementById(shaderId);
    if (!script) {
      throw new Error(`no script element with id "${shaderId}" found`);
    }
    return this.compileShaderFromScript(script);
  }

  compileShaderFromScript(script) {
    return this.compileShader(shaderTypeFromScript(script), script.text);
  }

  compileVertexShader(source) {
    return this.compileShader(VERTEX_SHADER, source);
  }

  compileFragmentShader(source) {
    return this.compileShader(FRAGMENT_SHADER, source);
  }

  compileShader(type, source) {
    let shader = this.createShader(type);
    shader.shaderSource(source);
    shader.compile();
    if (!shader.isCompiled) {
      let log = shader.getInfoLog();
      shader.delete();
      throw new Error(log);
    }
    return shader;
  }

  static fromCanvas(canvas) {
    return new this(canvas.getContext('webgl'));
  }

  static fromId(canvasId) {
    return this.fromCanvas(document.getElementById(canvasId));
  }
}

function shaderTypeFromScript(script) {
  if (!script || script.nodeType !== 1 || script.tagName !== 'SCRIPT') {
    throw new Error('invalid script argument: must be a script DOM element');
  }
  switch (script.type) {
  case 'x-shader/x-vertex':
    return VERTEX_SHADER;
  case 'x-shader/x-fragment':
    return FRAGMENT_SHADER;
  default:
    throw new Error('script.type must be "x-shader/x-vertex" or "x-shader/x-fragment"');
  }
}
