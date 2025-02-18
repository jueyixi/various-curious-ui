"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useFlag = function(f = false) {
  const flag = vue.ref(f);
  const setFalse = function() {
    flag.value = false;
  };
  const setTrue = function() {
    flag.value = true;
  };
  const toggle = function() {
    if (flag.value) {
      setFalse();
    } else {
      setTrue();
    }
  };
  return {
    flag,
    setTrue,
    setFalse,
    toggle
  };
};
exports.useFlag = useFlag;
