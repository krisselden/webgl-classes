import BaseShader from './generated/shader';
import { COMPILE_STATUS } from './generated/constants';

export default class Shader extends BaseShader {
  get isCompiled() {
    return this.getParameter(COMPILE_STATUS);
  }
}
