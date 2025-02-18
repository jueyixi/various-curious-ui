"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const singleTon = function(classType) {
  let instance;
  return new Proxy(classType, {
    construct(target, args) {
      return instance ? instance : instance = new target(...args);
    }
  });
};
exports.default = singleTon;
exports.singleTon = singleTon;
