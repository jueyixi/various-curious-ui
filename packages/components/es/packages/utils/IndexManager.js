import { singleTon } from "./decorator/singleTon.js";
class IdxManager {
  constructor(index = 2e3) {
    this.index = index;
  }
  nextIndex() {
    return this.index++;
  }
}
const IndexManager = singleTon(IdxManager);
export {
  IndexManager
};
