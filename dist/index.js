(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  factory((global.WebGL = {}));
}(this, function (exports) { 'use strict';

  var babelHelpers = {};

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var Texture = (function () {
    function Texture(gl, texture) {
      babelHelpers.classCallCheck(this, Texture);

      this.gl = gl;
      this.texture = texture;
    }

    Texture.prototype["delete"] = function _delete() {
      this.gl.deleteTexture(this.texture);
    };

    return Texture;
  })();

  var _Shader = (function () {
    function Shader(gl, shader) {
      babelHelpers.classCallCheck(this, Shader);

      this.gl = gl;
      this.shader = shader;
    }

    Shader.prototype.compile = function compile() {
      this.gl.compileShader(this.shader);
    };

    Shader.prototype["delete"] = function _delete() {
      this.gl.deleteShader(this.shader);
    };

    Shader.prototype.getParameter = function getParameter(pname) {
      return this.gl.getShaderParameter(this.shader, pname);
    };

    Shader.prototype.getInfoLog = function getInfoLog() {
      return this.gl.getShaderInfoLog(this.shader);
    };

    Shader.prototype.getSource = function getSource() {
      return this.gl.getShaderSource(this.shader);
    };

    Shader.prototype.shaderSource = function shaderSource(source) {
      this.gl.shaderSource(this.shader, source);
    };

    return Shader;
  })();

  // generated
  exports.DEPTH_BUFFER_BIT = 256;
  exports.STENCIL_BUFFER_BIT = 1024;
  exports.COLOR_BUFFER_BIT = 16384;
  exports.POINTS = 0;
  exports.LINES = 1;
  exports.LINE_LOOP = 2;
  exports.LINE_STRIP = 3;
  exports.TRIANGLES = 4;
  exports.TRIANGLE_STRIP = 5;
  exports.TRIANGLE_FAN = 6;
  exports.ZERO = 0;
  exports.ONE = 1;
  exports.SRC_COLOR = 768;
  exports.ONE_MINUS_SRC_COLOR = 769;
  exports.SRC_ALPHA = 770;
  exports.ONE_MINUS_SRC_ALPHA = 771;
  exports.DST_ALPHA = 772;
  exports.ONE_MINUS_DST_ALPHA = 773;
  exports.DST_COLOR = 774;
  exports.ONE_MINUS_DST_COLOR = 775;
  exports.SRC_ALPHA_SATURATE = 776;
  exports.FUNC_ADD = 32774;
  exports.BLEND_EQUATION = 32777;
  exports.BLEND_EQUATION_RGB = 32777;
  exports.BLEND_EQUATION_ALPHA = 34877;
  exports.FUNC_SUBTRACT = 32778;
  exports.FUNC_REVERSE_SUBTRACT = 32779;
  exports.BLEND_DST_RGB = 32968;
  exports.BLEND_SRC_RGB = 32969;
  exports.BLEND_DST_ALPHA = 3297e1;
  exports.BLEND_SRC_ALPHA = 32971;
  exports.CONSTANT_COLOR = 32769;
  exports.ONE_MINUS_CONSTANT_COLOR = 3277e1;
  exports.CONSTANT_ALPHA = 32771;
  exports.ONE_MINUS_CONSTANT_ALPHA = 32772;
  exports.BLEND_COLOR = 32773;
  exports.ARRAY_BUFFER = 34962;
  exports.ELEMENT_ARRAY_BUFFER = 34963;
  exports.ARRAY_BUFFER_BINDING = 34964;
  exports.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
  exports.STREAM_DRAW = 3504e1;
  exports.STATIC_DRAW = 35044;
  exports.DYNAMIC_DRAW = 35048;
  exports.BUFFER_SIZE = 3466e1;
  exports.BUFFER_USAGE = 34661;
  exports.CURRENT_VERTEX_ATTRIB = 34342;
  exports.FRONT = 1028;
  exports.BACK = 1029;
  exports.FRONT_AND_BACK = 1032;
  exports.CULL_FACE = 2884;
  exports.BLEND = 3042;
  exports.DITHER = 3024;
  exports.STENCIL_TEST = 296e1;
  exports.DEPTH_TEST = 2929;
  exports.SCISSOR_TEST = 3089;
  exports.POLYGON_OFFSET_FILL = 32823;
  exports.SAMPLE_ALPHA_TO_COVERAGE = 32926;
  exports.SAMPLE_COVERAGE = 32928;
  exports.NO_ERROR = 0;
  exports.INVALID_ENUM = 128e1;
  exports.INVALID_VALUE = 1281;
  exports.INVALID_OPERATION = 1282;
  exports.OUT_OF_MEMORY = 1285;
  exports.CW = 2304;
  exports.CCW = 2305;
  exports.LINE_WIDTH = 2849;
  exports.ALIASED_POINT_SIZE_RANGE = 33901;
  exports.ALIASED_LINE_WIDTH_RANGE = 33902;
  exports.CULL_FACE_MODE = 2885;
  exports.FRONT_FACE = 2886;
  exports.DEPTH_RANGE = 2928;
  exports.DEPTH_WRITEMASK = 293e1;
  exports.DEPTH_CLEAR_VALUE = 2931;
  exports.DEPTH_FUNC = 2932;
  exports.STENCIL_CLEAR_VALUE = 2961;
  exports.STENCIL_FUNC = 2962;
  exports.STENCIL_FAIL = 2964;
  exports.STENCIL_PASS_DEPTH_FAIL = 2965;
  exports.STENCIL_PASS_DEPTH_PASS = 2966;
  exports.STENCIL_REF = 2967;
  exports.STENCIL_VALUE_MASK = 2963;
  exports.STENCIL_WRITEMASK = 2968;
  exports.STENCIL_BACK_FUNC = 34816;
  exports.STENCIL_BACK_FAIL = 34817;
  exports.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
  exports.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
  exports.STENCIL_BACK_REF = 36003;
  exports.STENCIL_BACK_VALUE_MASK = 36004;
  exports.STENCIL_BACK_WRITEMASK = 36005;
  exports.VIEWPORT = 2978;
  exports.SCISSOR_BOX = 3088;
  exports.COLOR_CLEAR_VALUE = 3106;
  exports.COLOR_WRITEMASK = 3107;
  exports.UNPACK_ALIGNMENT = 3317;
  exports.PACK_ALIGNMENT = 3333;
  exports.MAX_TEXTURE_SIZE = 3379;
  exports.MAX_VIEWPORT_DIMS = 3386;
  exports.SUBPIXEL_BITS = 3408;
  exports.RED_BITS = 341e1;
  exports.GREEN_BITS = 3411;
  exports.BLUE_BITS = 3412;
  exports.ALPHA_BITS = 3413;
  exports.DEPTH_BITS = 3414;
  exports.STENCIL_BITS = 3415;
  exports.POLYGON_OFFSET_UNITS = 10752;
  exports.POLYGON_OFFSET_FACTOR = 32824;
  exports.TEXTURE_BINDING_2D = 32873;
  exports.SAMPLE_BUFFERS = 32936;
  exports.SAMPLES = 32937;
  exports.SAMPLE_COVERAGE_VALUE = 32938;
  exports.SAMPLE_COVERAGE_INVERT = 32939;
  exports.COMPRESSED_TEXTURE_FORMATS = 34467;
  exports.DONT_CARE = 4352;
  exports.FASTEST = 4353;
  exports.NICEST = 4354;
  exports.GENERATE_MIPMAP_HINT = 3317e1;
  exports.BYTE = 512e1;
  exports.UNSIGNED_BYTE = 5121;
  exports.SHORT = 5122;
  exports.UNSIGNED_SHORT = 5123;
  exports.INT = 5124;
  exports.UNSIGNED_INT = 5125;
  exports.FLOAT = 5126;
  exports.DEPTH_COMPONENT = 6402;
  exports.ALPHA = 6406;
  exports.RGB = 6407;
  exports.RGBA = 6408;
  exports.LUMINANCE = 6409;
  exports.LUMINANCE_ALPHA = 641e1;
  exports.UNSIGNED_SHORT_4_4_4_4 = 32819;
  exports.UNSIGNED_SHORT_5_5_5_1 = 3282e1;
  exports.UNSIGNED_SHORT_5_6_5 = 33635;
  exports.FRAGMENT_SHADER = 35632;
  exports.VERTEX_SHADER = 35633;
  exports.MAX_VERTEX_ATTRIBS = 34921;
  exports.MAX_VERTEX_UNIFORM_VECTORS = 36347;
  exports.MAX_VARYING_VECTORS = 36348;
  exports.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
  exports.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 3566e1;
  exports.MAX_TEXTURE_IMAGE_UNITS = 3493e1;
  exports.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
  exports.SHADER_TYPE = 35663;
  exports.DELETE_STATUS = 35712;
  exports.LINK_STATUS = 35714;
  exports.VALIDATE_STATUS = 35715;
  exports.ATTACHED_SHADERS = 35717;
  exports.ACTIVE_UNIFORMS = 35718;
  exports.ACTIVE_ATTRIBUTES = 35721;
  exports.SHADING_LANGUAGE_VERSION = 35724;
  exports.CURRENT_PROGRAM = 35725;
  exports.NEVER = 512;
  exports.LESS = 513;
  exports.EQUAL = 514;
  exports.LEQUAL = 515;
  exports.GREATER = 516;
  exports.NOTEQUAL = 517;
  exports.GEQUAL = 518;
  exports.ALWAYS = 519;
  exports.KEEP = 768e1;
  exports.REPLACE = 7681;
  exports.INCR = 7682;
  exports.DECR = 7683;
  exports.INVERT = 5386;
  exports.INCR_WRAP = 34055;
  exports.DECR_WRAP = 34056;
  exports.VENDOR = 7936;
  exports.RENDERER = 7937;
  exports.VERSION = 7938;
  exports.NEAREST = 9728;
  exports.LINEAR = 9729;
  exports.NEAREST_MIPMAP_NEAREST = 9984;
  exports.LINEAR_MIPMAP_NEAREST = 9985;
  exports.NEAREST_MIPMAP_LINEAR = 9986;
  exports.LINEAR_MIPMAP_LINEAR = 9987;
  exports.TEXTURE_MAG_FILTER = 1024e1;
  exports.TEXTURE_MIN_FILTER = 10241;
  exports.TEXTURE_WRAP_S = 10242;
  exports.TEXTURE_WRAP_T = 10243;
  exports.TEXTURE_2D = 3553;
  exports.TEXTURE = 589e1;
  exports.TEXTURE_CUBE_MAP = 34067;
  exports.TEXTURE_BINDING_CUBE_MAP = 34068;
  exports.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
  exports.TEXTURE_CUBE_MAP_NEGATIVE_X = 3407e1;
  exports.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
  exports.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
  exports.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
  exports.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
  exports.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
  exports.TEXTURE0 = 33984;
  exports.TEXTURE1 = 33985;
  exports.TEXTURE2 = 33986;
  exports.TEXTURE3 = 33987;
  exports.TEXTURE4 = 33988;
  exports.TEXTURE5 = 33989;
  exports.TEXTURE6 = 3399e1;
  exports.TEXTURE7 = 33991;
  exports.TEXTURE8 = 33992;
  exports.TEXTURE9 = 33993;
  exports.TEXTURE10 = 33994;
  exports.TEXTURE11 = 33995;
  exports.TEXTURE12 = 33996;
  exports.TEXTURE13 = 33997;
  exports.TEXTURE14 = 33998;
  exports.TEXTURE15 = 33999;
  exports.TEXTURE16 = 34e3;
  exports.TEXTURE17 = 34001;
  exports.TEXTURE18 = 34002;
  exports.TEXTURE19 = 34003;
  exports.TEXTURE20 = 34004;
  exports.TEXTURE21 = 34005;
  exports.TEXTURE22 = 34006;
  exports.TEXTURE23 = 34007;
  exports.TEXTURE24 = 34008;
  exports.TEXTURE25 = 34009;
  exports.TEXTURE26 = 3401e1;
  exports.TEXTURE27 = 34011;
  exports.TEXTURE28 = 34012;
  exports.TEXTURE29 = 34013;
  exports.TEXTURE30 = 34014;
  exports.TEXTURE31 = 34015;
  exports.ACTIVE_TEXTURE = 34016;
  exports.REPEAT = 10497;
  exports.CLAMP_TO_EDGE = 33071;
  exports.MIRRORED_REPEAT = 33648;
  exports.FLOAT_VEC2 = 35664;
  exports.FLOAT_VEC3 = 35665;
  exports.FLOAT_VEC4 = 35666;
  exports.INT_VEC2 = 35667;
  exports.INT_VEC3 = 35668;
  exports.INT_VEC4 = 35669;
  exports.BOOL = 3567e1;
  exports.BOOL_VEC2 = 35671;
  exports.BOOL_VEC3 = 35672;
  exports.BOOL_VEC4 = 35673;
  exports.FLOAT_MAT2 = 35674;
  exports.FLOAT_MAT3 = 35675;
  exports.FLOAT_MAT4 = 35676;
  exports.SAMPLER_2D = 35678;
  exports.SAMPLER_CUBE = 3568e1;
  exports.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
  exports.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
  exports.VERTEX_ATTRIB_ARRAY_STRIDE = 3434e1;
  exports.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
  exports.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
  exports.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
  exports.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
  exports.IMPLEMENTATION_COLOR_READ_TYPE = 35738;
  exports.IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
  exports.COMPILE_STATUS = 35713;
  exports.LOW_FLOAT = 36336;
  exports.MEDIUM_FLOAT = 36337;
  exports.HIGH_FLOAT = 36338;
  exports.LOW_INT = 36339;
  exports.MEDIUM_INT = 3634e1;
  exports.HIGH_INT = 36341;
  exports.FRAMEBUFFER = 3616e1;
  exports.RENDERBUFFER = 36161;
  exports.RGBA4 = 32854;
  exports.RGB5_A1 = 32855;
  exports.RGB565 = 36194;
  exports.DEPTH_COMPONENT16 = 33189;
  exports.STENCIL_INDEX = 6401;
  exports.STENCIL_INDEX8 = 36168;
  exports.DEPTH_STENCIL = 34041;
  exports.RENDERBUFFER_WIDTH = 36162;
  exports.RENDERBUFFER_HEIGHT = 36163;
  exports.RENDERBUFFER_INTERNAL_FORMAT = 36164;
  exports.RENDERBUFFER_RED_SIZE = 36176;
  exports.RENDERBUFFER_GREEN_SIZE = 36177;
  exports.RENDERBUFFER_BLUE_SIZE = 36178;
  exports.RENDERBUFFER_ALPHA_SIZE = 36179;
  exports.RENDERBUFFER_DEPTH_SIZE = 3618e1;
  exports.RENDERBUFFER_STENCIL_SIZE = 36181;
  exports.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
  exports.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
  exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 3605e1;
  exports.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
  exports.COLOR_ATTACHMENT0 = 36064;
  exports.DEPTH_ATTACHMENT = 36096;
  exports.STENCIL_ATTACHMENT = 36128;
  exports.DEPTH_STENCIL_ATTACHMENT = 33306;
  exports.NONE = 0;
  exports.FRAMEBUFFER_COMPLETE = 36053;
  exports.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
  exports.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
  exports.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
  exports.FRAMEBUFFER_UNSUPPORTED = 36061;
  exports.FRAMEBUFFER_BINDING = 36006;
  exports.RENDERBUFFER_BINDING = 36007;
  exports.MAX_RENDERBUFFER_SIZE = 34024;
  exports.INVALID_FRAMEBUFFER_OPERATION = 1286;
  exports.UNPACK_FLIP_Y_WEBGL = 3744e1;
  exports.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
  exports.CONTEXT_LOST_WEBGL = 37442;
  exports.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
  exports.BROWSER_DEFAULT_WEBGL = 37444;

  var Shader = (function (_BaseShader) {
    babelHelpers.inherits(Shader, _BaseShader);

    function Shader() {
      babelHelpers.classCallCheck(this, Shader);

      _BaseShader.apply(this, arguments);
    }

    babelHelpers.createClass(Shader, [{
      key: 'isCompiled',
      get: function get() {
        return this.getParameter(exports.COMPILE_STATUS);
      }
    }]);
    return Shader;
  })(_Shader);

  var Renderbuffer = (function () {
    function Renderbuffer(gl, renderbuffer) {
      babelHelpers.classCallCheck(this, Renderbuffer);

      this.gl = gl;
      this.renderbuffer = renderbuffer;
    }

    Renderbuffer.prototype["delete"] = function _delete() {
      this.gl.deleteRenderbuffer(this.renderbuffer);
    };

    return Renderbuffer;
  })();

  var _Program = (function () {
    function Program(gl, program) {
      babelHelpers.classCallCheck(this, Program);

      this.gl = gl;
      this.program = program;
    }

    Program.prototype.attachShader = function attachShader(shader) {
      this.gl.attachShader(this.program, unwrap("shader", shader));
    };

    Program.prototype.bindAttribLocation = function bindAttribLocation(index, name) {
      this.gl.bindAttribLocation(this.program, index, name);
    };

    Program.prototype["delete"] = function _delete() {
      this.gl.deleteProgram(this.program);
    };

    Program.prototype.detachShader = function detachShader(shader) {
      this.gl.detachShader(this.program, unwrap("shader", shader));
    };

    Program.prototype.getActiveAttrib = function getActiveAttrib(index) {
      return this.gl.getActiveAttrib(this.program, index);
    };

    Program.prototype.getActiveUniform = function getActiveUniform(index) {
      return this.gl.getActiveUniform(this.program, index);
    };

    Program.prototype.getAttachedShaders = function getAttachedShaders() {
      return wrap("shader", this.gl, this.gl.getAttachedShaders(this.program));
    };

    Program.prototype.getAttribLocation = function getAttribLocation(name) {
      return this.gl.getAttribLocation(this.program, name);
    };

    Program.prototype.getParameter = function getParameter(pname) {
      return this.gl.getProgramParameter(this.program, pname);
    };

    Program.prototype.getInfoLog = function getInfoLog() {
      return this.gl.getProgramInfoLog(this.program);
    };

    Program.prototype.getUniform = function getUniform(location) {
      return this.gl.getUniform(this.program, location);
    };

    Program.prototype.getUniformLocation = function getUniformLocation(name) {
      return this.gl.getUniformLocation(this.program, name);
    };

    Program.prototype.link = function link() {
      this.gl.linkProgram(this.program);
    };

    Program.prototype.validate = function validate() {
      this.gl.validateProgram(this.program);
    };

    return Program;
  })();

  var Program = (function (_BaseProgram) {
    babelHelpers.inherits(Program, _BaseProgram);

    function Program() {
      babelHelpers.classCallCheck(this, Program);

      _BaseProgram.apply(this, arguments);
    }

    babelHelpers.createClass(Program, [{
      key: 'isLinked',
      get: function get() {
        return this.getParameter(exports.LINK_STATUS);
      }
    }, {
      key: 'isValidated',
      get: function get() {
        return this.getParameter(exports.VALIDATE_STATUS);
      }
    }]);
    return Program;
  })(_Program);

  var Framebuffer = (function () {
    function Framebuffer(gl, framebuffer) {
      babelHelpers.classCallCheck(this, Framebuffer);

      this.gl = gl;
      this.framebuffer = framebuffer;
    }

    Framebuffer.prototype["delete"] = function _delete() {
      this.gl.deleteFramebuffer(this.framebuffer);
    };

    return Framebuffer;
  })();

  var Buffer = (function () {
    function Buffer(gl, buffer) {
      babelHelpers.classCallCheck(this, Buffer);

      this.gl = gl;
      this.buffer = buffer;
    }

    Buffer.prototype["delete"] = function _delete() {
      this.gl.deleteBuffer(this.buffer);
    };

    return Buffer;
  })();

  function createWrapper(type, gl, obj) {
    switch (type) {
      case 'buffer':
        return new Buffer(gl, obj);
      case 'framebuffer':
        return new Framebuffer(gl, obj);
      case 'program':
        return new Program(gl, obj);
      case 'renderbuffer':
        return new Renderbuffer(gl, obj);
      case 'shader':
        return new Shader(gl, obj);
      case 'texture':
        return new Texture(gl, obj);
      default:
        throw new Error('unknown wrapper type ' + type);
    }
  }

  var symbols = {
    buffer: Symbol('Buffer wrapper'),
    framebuffer: Symbol('Framebuffer wrapper'),
    program: Symbol('Program wrapper'),
    renderbuffer: Symbol('Renderbuffer wrapper'),
    shader: Symbol('Shader wrapper'),
    texture: Symbol('Texture wrapper')
  };

  function wrap(type, gl, obj) {
    if (obj === null || obj === undefined || typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(function (o) {
        return wrap(type, gl, o);
      });
    }
    var symbol = symbols[type];
    var wrapper = obj[symbol];
    if (!wrapper) {
      wrapper = createWrapper(type, gl, obj);
      obj[symbol] = wrapper;
    }
    return wrapper;
  }

  function unwrap(type, obj) {
    if (obj === null || obj === undefined || typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(function (o) {
        return unwrap(type, o);
      });
    }
    return obj[type];
  }

  var _RenderingContext = (function () {
    function RenderingContext(gl) {
      babelHelpers.classCallCheck(this, RenderingContext);

      this.gl = gl;
    }

    RenderingContext.prototype.getContextAttributes = function getContextAttributes() {
      return this.gl.getContextAttributes();
    };

    RenderingContext.prototype.isContextLost = function isContextLost() {
      return this.gl.isContextLost();
    };

    RenderingContext.prototype.getSupportedExtensions = function getSupportedExtensions() {
      return this.gl.getSupportedExtensions();
    };

    RenderingContext.prototype.getExtension = function getExtension(name) {
      return this.gl.getExtension(name);
    };

    RenderingContext.prototype.activeTexture = function activeTexture(texture) {
      this.gl.activeTexture(texture);
    };

    RenderingContext.prototype.bindBuffer = function bindBuffer(target, buffer) {
      this.gl.bindBuffer(target, unwrap("buffer", buffer));
    };

    RenderingContext.prototype.bindFramebuffer = function bindFramebuffer(target, framebuffer) {
      this.gl.bindFramebuffer(target, unwrap("framebuffer", framebuffer));
    };

    RenderingContext.prototype.bindRenderbuffer = function bindRenderbuffer(target, renderbuffer) {
      this.gl.bindRenderbuffer(target, unwrap("renderbuffer", renderbuffer));
    };

    RenderingContext.prototype.bindTexture = function bindTexture(target, texture) {
      this.gl.bindTexture(target, unwrap("texture", texture));
    };

    RenderingContext.prototype.blendColor = function blendColor(red, green, blue, alpha) {
      this.gl.blendColor(red, green, blue, alpha);
    };

    RenderingContext.prototype.blendEquation = function blendEquation(mode) {
      this.gl.blendEquation(mode);
    };

    RenderingContext.prototype.blendEquationSeparate = function blendEquationSeparate(modeRGB, modeAlpha) {
      this.gl.blendEquationSeparate(modeRGB, modeAlpha);
    };

    RenderingContext.prototype.blendFunc = function blendFunc(sfactor, dfactor) {
      this.gl.blendFunc(sfactor, dfactor);
    };

    RenderingContext.prototype.blendFuncSeparate = function blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) {
      this.gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
    };

    RenderingContext.prototype.bufferData = function bufferData(target, size, usage) {
      this.gl.bufferData(target, size, usage);
    };

    RenderingContext.prototype.bufferData = function bufferData(target, data, usage) {
      this.gl.bufferData(target, data, usage);
    };

    RenderingContext.prototype.bufferSubData = function bufferSubData(target, offset, data) {
      this.gl.bufferSubData(target, offset, data);
    };

    RenderingContext.prototype.checkFramebufferStatus = function checkFramebufferStatus(target) {
      return this.gl.checkFramebufferStatus(target);
    };

    RenderingContext.prototype.clear = function clear(mask) {
      this.gl.clear(mask);
    };

    RenderingContext.prototype.clearColor = function clearColor(red, green, blue, alpha) {
      this.gl.clearColor(red, green, blue, alpha);
    };

    RenderingContext.prototype.clearDepth = function clearDepth(depth) {
      this.gl.clearDepth(depth);
    };

    RenderingContext.prototype.clearStencil = function clearStencil(s) {
      this.gl.clearStencil(s);
    };

    RenderingContext.prototype.colorMask = function colorMask(red, green, blue, alpha) {
      this.gl.colorMask(red, green, blue, alpha);
    };

    RenderingContext.prototype.compressedTexImage2D = function compressedTexImage2D(target, level, internalformat, width, height, border, data) {
      this.gl.compressedTexImage2D(target, level, internalformat, width, height, border, data);
    };

    RenderingContext.prototype.compressedTexSubImage2D = function compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data) {
      this.gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data);
    };

    RenderingContext.prototype.copyTexImage2D = function copyTexImage2D(target, level, internalformat, x, y, width, height, border) {
      this.gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
    };

    RenderingContext.prototype.copyTexSubImage2D = function copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height) {
      this.gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
    };

    RenderingContext.prototype.createBuffer = function createBuffer() {
      return wrap("buffer", this.gl, this.gl.createBuffer());
    };

    RenderingContext.prototype.createFramebuffer = function createFramebuffer() {
      return wrap("framebuffer", this.gl, this.gl.createFramebuffer());
    };

    RenderingContext.prototype.createProgram = function createProgram() {
      return wrap("program", this.gl, this.gl.createProgram());
    };

    RenderingContext.prototype.createRenderbuffer = function createRenderbuffer() {
      return wrap("renderbuffer", this.gl, this.gl.createRenderbuffer());
    };

    RenderingContext.prototype.createShader = function createShader(type) {
      return wrap("shader", this.gl, this.gl.createShader(type));
    };

    RenderingContext.prototype.createTexture = function createTexture() {
      return wrap("texture", this.gl, this.gl.createTexture());
    };

    RenderingContext.prototype.cullFace = function cullFace(mode) {
      this.gl.cullFace(mode);
    };

    RenderingContext.prototype.depthFunc = function depthFunc(func) {
      this.gl.depthFunc(func);
    };

    RenderingContext.prototype.depthMask = function depthMask(flag) {
      this.gl.depthMask(flag);
    };

    RenderingContext.prototype.depthRange = function depthRange(zNear, zFar) {
      this.gl.depthRange(zNear, zFar);
    };

    RenderingContext.prototype.disable = function disable(cap) {
      this.gl.disable(cap);
    };

    RenderingContext.prototype.disableVertexAttribArray = function disableVertexAttribArray(index) {
      this.gl.disableVertexAttribArray(index);
    };

    RenderingContext.prototype.drawArrays = function drawArrays(mode, first, count) {
      this.gl.drawArrays(mode, first, count);
    };

    RenderingContext.prototype.drawElements = function drawElements(mode, count, type, offset) {
      this.gl.drawElements(mode, count, type, offset);
    };

    RenderingContext.prototype.enable = function enable(cap) {
      this.gl.enable(cap);
    };

    RenderingContext.prototype.enableVertexAttribArray = function enableVertexAttribArray(index) {
      this.gl.enableVertexAttribArray(index);
    };

    RenderingContext.prototype.finish = function finish() {
      this.gl.finish();
    };

    RenderingContext.prototype.flush = function flush() {
      this.gl.flush();
    };

    RenderingContext.prototype.framebufferRenderbuffer = function framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
      this.gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, unwrap("renderbuffer", renderbuffer));
    };

    RenderingContext.prototype.framebufferTexture2D = function framebufferTexture2D(target, attachment, textarget, texture, level) {
      this.gl.framebufferTexture2D(target, attachment, textarget, unwrap("texture", texture), level);
    };

    RenderingContext.prototype.frontFace = function frontFace(mode) {
      this.gl.frontFace(mode);
    };

    RenderingContext.prototype.generateMipmap = function generateMipmap(target) {
      this.gl.generateMipmap(target);
    };

    RenderingContext.prototype.getBufferParameter = function getBufferParameter(target, pname) {
      return this.gl.getBufferParameter(target, pname);
    };

    RenderingContext.prototype.getParameter = function getParameter(pname) {
      return this.gl.getParameter(pname);
    };

    RenderingContext.prototype.getError = function getError() {
      return this.gl.getError();
    };

    RenderingContext.prototype.getFramebufferAttachmentParameter = function getFramebufferAttachmentParameter(target, attachment, pname) {
      return this.gl.getFramebufferAttachmentParameter(target, attachment, pname);
    };

    RenderingContext.prototype.getRenderbufferParameter = function getRenderbufferParameter(target, pname) {
      return this.gl.getRenderbufferParameter(target, pname);
    };

    RenderingContext.prototype.getShaderPrecisionFormat = function getShaderPrecisionFormat(shadertype, precisiontype) {
      return this.gl.getShaderPrecisionFormat(shadertype, precisiontype);
    };

    RenderingContext.prototype.getTexParameter = function getTexParameter(target, pname) {
      return this.gl.getTexParameter(target, pname);
    };

    RenderingContext.prototype.getVertexAttrib = function getVertexAttrib(index, pname) {
      return this.gl.getVertexAttrib(index, pname);
    };

    RenderingContext.prototype.getVertexAttribOffset = function getVertexAttribOffset(index, pname) {
      return this.gl.getVertexAttribOffset(index, pname);
    };

    RenderingContext.prototype.hint = function hint(target, mode) {
      this.gl.hint(target, mode);
    };

    RenderingContext.prototype.isBuffer = function isBuffer(buffer) {
      return this.gl.isBuffer(unwrap("buffer", buffer));
    };

    RenderingContext.prototype.isEnabled = function isEnabled(cap) {
      return this.gl.isEnabled(cap);
    };

    RenderingContext.prototype.isFramebuffer = function isFramebuffer(framebuffer) {
      return this.gl.isFramebuffer(unwrap("framebuffer", framebuffer));
    };

    RenderingContext.prototype.isProgram = function isProgram(program) {
      return this.gl.isProgram(unwrap("program", program));
    };

    RenderingContext.prototype.isRenderbuffer = function isRenderbuffer(renderbuffer) {
      return this.gl.isRenderbuffer(unwrap("renderbuffer", renderbuffer));
    };

    RenderingContext.prototype.isShader = function isShader(shader) {
      return this.gl.isShader(unwrap("shader", shader));
    };

    RenderingContext.prototype.isTexture = function isTexture(texture) {
      return this.gl.isTexture(unwrap("texture", texture));
    };

    RenderingContext.prototype.lineWidth = function lineWidth(width) {
      this.gl.lineWidth(width);
    };

    RenderingContext.prototype.pixelStorei = function pixelStorei(pname, param) {
      this.gl.pixelStorei(pname, param);
    };

    RenderingContext.prototype.polygonOffset = function polygonOffset(factor, units) {
      this.gl.polygonOffset(factor, units);
    };

    RenderingContext.prototype.readPixels = function readPixels(x, y, width, height, format, type, pixels) {
      this.gl.readPixels(x, y, width, height, format, type, pixels);
    };

    RenderingContext.prototype.renderbufferStorage = function renderbufferStorage(target, internalformat, width, height) {
      this.gl.renderbufferStorage(target, internalformat, width, height);
    };

    RenderingContext.prototype.sampleCoverage = function sampleCoverage(value, invert) {
      this.gl.sampleCoverage(value, invert);
    };

    RenderingContext.prototype.scissor = function scissor(x, y, width, height) {
      this.gl.scissor(x, y, width, height);
    };

    RenderingContext.prototype.stencilFunc = function stencilFunc(func, ref, mask) {
      this.gl.stencilFunc(func, ref, mask);
    };

    RenderingContext.prototype.stencilFuncSeparate = function stencilFuncSeparate(face, func, ref, mask) {
      this.gl.stencilFuncSeparate(face, func, ref, mask);
    };

    RenderingContext.prototype.stencilMask = function stencilMask(mask) {
      this.gl.stencilMask(mask);
    };

    RenderingContext.prototype.stencilMaskSeparate = function stencilMaskSeparate(face, mask) {
      this.gl.stencilMaskSeparate(face, mask);
    };

    RenderingContext.prototype.stencilOp = function stencilOp(fail, zfail, zpass) {
      this.gl.stencilOp(fail, zfail, zpass);
    };

    RenderingContext.prototype.stencilOpSeparate = function stencilOpSeparate(face, fail, zfail, zpass) {
      this.gl.stencilOpSeparate(face, fail, zfail, zpass);
    };

    RenderingContext.prototype.texImage2D = function texImage2D(target, level, internalformat, width, height, border, format, type, pixels) {
      this.gl.texImage2D(target, level, internalformat, width, height, border, format, type, pixels);
    };

    RenderingContext.prototype.texImage2D = function texImage2D(target, level, internalformat, format, type, source) {
      this.gl.texImage2D(target, level, internalformat, format, type, source);
    };

    RenderingContext.prototype.texParameterf = function texParameterf(target, pname, param) {
      this.gl.texParameterf(target, pname, param);
    };

    RenderingContext.prototype.texParameteri = function texParameteri(target, pname, param) {
      this.gl.texParameteri(target, pname, param);
    };

    RenderingContext.prototype.texSubImage2D = function texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
      this.gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
    };

    RenderingContext.prototype.texSubImage2D = function texSubImage2D(target, level, xoffset, yoffset, format, type, source) {
      this.gl.texSubImage2D(target, level, xoffset, yoffset, format, type, source);
    };

    RenderingContext.prototype.uniform1f = function uniform1f(location, x) {
      this.gl.uniform1f(location, x);
    };

    RenderingContext.prototype.uniform1fv = function uniform1fv(location, v) {
      this.gl.uniform1fv(location, v);
    };

    RenderingContext.prototype.uniform1fv = function uniform1fv(location, v) {
      this.gl.uniform1fv(location, v);
    };

    RenderingContext.prototype.uniform1i = function uniform1i(location, x) {
      this.gl.uniform1i(location, x);
    };

    RenderingContext.prototype.uniform1iv = function uniform1iv(location, v) {
      this.gl.uniform1iv(location, v);
    };

    RenderingContext.prototype.uniform1iv = function uniform1iv(location, v) {
      this.gl.uniform1iv(location, v);
    };

    RenderingContext.prototype.uniform2f = function uniform2f(location, x, y) {
      this.gl.uniform2f(location, x, y);
    };

    RenderingContext.prototype.uniform2fv = function uniform2fv(location, v) {
      this.gl.uniform2fv(location, v);
    };

    RenderingContext.prototype.uniform2fv = function uniform2fv(location, v) {
      this.gl.uniform2fv(location, v);
    };

    RenderingContext.prototype.uniform2i = function uniform2i(location, x, y) {
      this.gl.uniform2i(location, x, y);
    };

    RenderingContext.prototype.uniform2iv = function uniform2iv(location, v) {
      this.gl.uniform2iv(location, v);
    };

    RenderingContext.prototype.uniform2iv = function uniform2iv(location, v) {
      this.gl.uniform2iv(location, v);
    };

    RenderingContext.prototype.uniform3f = function uniform3f(location, x, y, z) {
      this.gl.uniform3f(location, x, y, z);
    };

    RenderingContext.prototype.uniform3fv = function uniform3fv(location, v) {
      this.gl.uniform3fv(location, v);
    };

    RenderingContext.prototype.uniform3fv = function uniform3fv(location, v) {
      this.gl.uniform3fv(location, v);
    };

    RenderingContext.prototype.uniform3i = function uniform3i(location, x, y, z) {
      this.gl.uniform3i(location, x, y, z);
    };

    RenderingContext.prototype.uniform3iv = function uniform3iv(location, v) {
      this.gl.uniform3iv(location, v);
    };

    RenderingContext.prototype.uniform3iv = function uniform3iv(location, v) {
      this.gl.uniform3iv(location, v);
    };

    RenderingContext.prototype.uniform4f = function uniform4f(location, x, y, z, w) {
      this.gl.uniform4f(location, x, y, z, w);
    };

    RenderingContext.prototype.uniform4fv = function uniform4fv(location, v) {
      this.gl.uniform4fv(location, v);
    };

    RenderingContext.prototype.uniform4fv = function uniform4fv(location, v) {
      this.gl.uniform4fv(location, v);
    };

    RenderingContext.prototype.uniform4i = function uniform4i(location, x, y, z, w) {
      this.gl.uniform4i(location, x, y, z, w);
    };

    RenderingContext.prototype.uniform4iv = function uniform4iv(location, v) {
      this.gl.uniform4iv(location, v);
    };

    RenderingContext.prototype.uniform4iv = function uniform4iv(location, v) {
      this.gl.uniform4iv(location, v);
    };

    RenderingContext.prototype.uniformMatrix2fv = function uniformMatrix2fv(location, transpose, value) {
      this.gl.uniformMatrix2fv(location, transpose, value);
    };

    RenderingContext.prototype.uniformMatrix2fv = function uniformMatrix2fv(location, transpose, value) {
      this.gl.uniformMatrix2fv(location, transpose, value);
    };

    RenderingContext.prototype.uniformMatrix3fv = function uniformMatrix3fv(location, transpose, value) {
      this.gl.uniformMatrix3fv(location, transpose, value);
    };

    RenderingContext.prototype.uniformMatrix3fv = function uniformMatrix3fv(location, transpose, value) {
      this.gl.uniformMatrix3fv(location, transpose, value);
    };

    RenderingContext.prototype.uniformMatrix4fv = function uniformMatrix4fv(location, transpose, value) {
      this.gl.uniformMatrix4fv(location, transpose, value);
    };

    RenderingContext.prototype.uniformMatrix4fv = function uniformMatrix4fv(location, transpose, value) {
      this.gl.uniformMatrix4fv(location, transpose, value);
    };

    RenderingContext.prototype.useProgram = function useProgram(program) {
      this.gl.useProgram(unwrap("program", program));
    };

    RenderingContext.prototype.vertexAttrib1f = function vertexAttrib1f(indx, x) {
      this.gl.vertexAttrib1f(indx, x);
    };

    RenderingContext.prototype.vertexAttrib1fv = function vertexAttrib1fv(indx, values) {
      this.gl.vertexAttrib1fv(indx, values);
    };

    RenderingContext.prototype.vertexAttrib1fv = function vertexAttrib1fv(indx, values) {
      this.gl.vertexAttrib1fv(indx, values);
    };

    RenderingContext.prototype.vertexAttrib2f = function vertexAttrib2f(indx, x, y) {
      this.gl.vertexAttrib2f(indx, x, y);
    };

    RenderingContext.prototype.vertexAttrib2fv = function vertexAttrib2fv(indx, values) {
      this.gl.vertexAttrib2fv(indx, values);
    };

    RenderingContext.prototype.vertexAttrib2fv = function vertexAttrib2fv(indx, values) {
      this.gl.vertexAttrib2fv(indx, values);
    };

    RenderingContext.prototype.vertexAttrib3f = function vertexAttrib3f(indx, x, y, z) {
      this.gl.vertexAttrib3f(indx, x, y, z);
    };

    RenderingContext.prototype.vertexAttrib3fv = function vertexAttrib3fv(indx, values) {
      this.gl.vertexAttrib3fv(indx, values);
    };

    RenderingContext.prototype.vertexAttrib3fv = function vertexAttrib3fv(indx, values) {
      this.gl.vertexAttrib3fv(indx, values);
    };

    RenderingContext.prototype.vertexAttrib4f = function vertexAttrib4f(indx, x, y, z, w) {
      this.gl.vertexAttrib4f(indx, x, y, z, w);
    };

    RenderingContext.prototype.vertexAttrib4fv = function vertexAttrib4fv(indx, values) {
      this.gl.vertexAttrib4fv(indx, values);
    };

    RenderingContext.prototype.vertexAttrib4fv = function vertexAttrib4fv(indx, values) {
      this.gl.vertexAttrib4fv(indx, values);
    };

    RenderingContext.prototype.vertexAttribPointer = function vertexAttribPointer(indx, size, type, normalized, stride, offset) {
      this.gl.vertexAttribPointer(indx, size, type, normalized, stride, offset);
    };

    RenderingContext.prototype.viewport = function viewport(x, y, width, height) {
      this.gl.viewport(x, y, width, height);
    };

    babelHelpers.createClass(RenderingContext, [{
      key: "canvas",
      get: function get() {
        return this.gl.canvas;
      }
    }, {
      key: "drawingBufferWidth",
      get: function get() {
        return this.gl.drawingBufferWidth;
      }
    }, {
      key: "drawingBufferHeight",
      get: function get() {
        return this.gl.drawingBufferHeight;
      }
    }]);
    return RenderingContext;
  })();

  exports.RenderingContext = (function (_BaseRenderingContext) {
    babelHelpers.inherits(RenderingContext, _BaseRenderingContext);

    function RenderingContext() {
      babelHelpers.classCallCheck(this, RenderingContext);

      _BaseRenderingContext.apply(this, arguments);
    }

    // high level API

    RenderingContext.prototype.compileAndLinkProgramFromIds = function compileAndLinkProgramFromIds(vertexShaderId, fragmentShaderId) {
      var vertexShaderScript = document.getElementById(vertexShaderId);
      var fragmentShaderScript = document.getElementById(fragmentShaderId);
      return this.compileAndLinkProgramFromScripts(vertexShaderScript, fragmentShaderScript);
    };

    RenderingContext.prototype.compileAndLinkProgramFromScripts = function compileAndLinkProgramFromScripts(vertexShaderScript, fragmentShaderScript) {
      return this.compileAndLinkProgram(vertexShaderScript.text, fragmentShaderScript.text);
    };

    RenderingContext.prototype.compileAndLinkProgram = function compileAndLinkProgram(vertexShaderSource, fragmentShaderSource) {
      var vertextShader = this.compileVertexShader(vertexShaderSource);
      var fragmentShader = this.compileFragmentShader(fragmentShaderSource);
      return this.linkProgram(vertextShader, fragmentShader);
    };

    RenderingContext.prototype.linkProgram = function linkProgram(vertexShader, fragmentShader) {
      var program = this.createProgram();
      program.attachShader(vertexShader);
      program.attachShader(fragmentShader);
      program.link();
      if (!program.isLinked) {
        var log = program.getInfoLog();
        throw new Error(log);
      }
      return program;
    };

    RenderingContext.prototype.compileShaderFromId = function compileShaderFromId(shaderId) {
      var script = document.getElementById(shaderId);
      if (!script) {
        throw new Error('no script element with id "' + shaderId + '" found');
      }
      return this.compileShaderFromScript(script);
    };

    RenderingContext.prototype.compileShaderFromScript = function compileShaderFromScript(script) {
      return this.compileShader(shaderTypeFromScript(script), script.text);
    };

    RenderingContext.prototype.compileVertexShader = function compileVertexShader(source) {
      return this.compileShader(exports.VERTEX_SHADER, source);
    };

    RenderingContext.prototype.compileFragmentShader = function compileFragmentShader(source) {
      return this.compileShader(exports.FRAGMENT_SHADER, source);
    };

    RenderingContext.prototype.compileShader = function compileShader(type, source) {
      var shader = this.createShader(type);
      shader.shaderSource(source);
      shader.compile();
      if (!shader.isCompiled) {
        var log = shader.getInfoLog();
        shader['delete']();
        throw new Error(log);
      }
      return shader;
    };

    RenderingContext.fromCanvas = function fromCanvas(canvas) {
      return new this(canvas.getContext('webgl'));
    };

    RenderingContext.fromId = function fromId(canvasId) {
      return this.fromCanvas(document.getElementById(canvasId));
    };

    return RenderingContext;
  })(_RenderingContext);

  function shaderTypeFromScript(script) {
    if (!script || script.nodeType !== 1 || script.tagName !== 'SCRIPT') {
      throw new Error('invalid script argument: must be a script DOM element');
    }
    switch (script.type) {
      case 'x-shader/x-vertex':
        return exports.VERTEX_SHADER;
      case 'x-shader/x-fragment':
        return exports.FRAGMENT_SHADER;
      default:
        throw new Error('script.type must be "x-shader/x-vertex" or "x-shader/x-fragment"');
    }
  }

}));
//# sourceMappingURL=index.js.map
