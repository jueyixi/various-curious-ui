"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const getSkin = (key, ele) => {
  var _a;
  const dom = ele ? document.querySelector(ele) : document.documentElement;
  return dom ? (_a = getComputedStyle(dom)) == null ? void 0 : _a.getPropertyValue(key) : "";
};
exports.getSkin = getSkin;
