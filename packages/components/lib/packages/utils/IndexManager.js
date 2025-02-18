"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const singleTon = require("./decorator/singleTon.js");
class IdxManager {
  constructor(index = 2e3) {
    this.index = index;
  }
  nextIndex() {
    return this.index++;
  }
}
const IndexManager = singleTon.singleTon(IdxManager);
exports.IndexManager = IndexManager;
