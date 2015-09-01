import BaseProgram from './generated/program';
import { LINK_STATUS, VALIDATE_STATUS } from './generated/constants';

export default class Program extends BaseProgram {
  get isLinked() {
    return this.getParameter(LINK_STATUS);
  }

  get isValidated() {
    return this.getParameter(VALIDATE_STATUS);
  }
}
