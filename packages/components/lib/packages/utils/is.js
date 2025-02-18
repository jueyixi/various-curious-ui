"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const isObject = (value) => {
  return value && Object.prototype.toString.call(value) === "[object Object]";
};
const isArray = (value) => {
  return value && Object.prototype.toString.call(value) === "[object Array]";
};
const isString = (value) => {
  return value && Object.prototype.toString.call(value) === "[object String]";
};
const isNumber = (value) => {
  return typeof value === "number" && !isNaN(value);
};
const toFixed = (value, num = 2) => {
  return value.toFixed(num) / 1;
};
const getType = (obj) => {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    // 布尔
    "[object Number]": "number",
    // 数字
    "[object String]": "string",
    // 字符串
    "[object Function]": "function",
    // 方法
    "[object Array]": "array",
    // 数组
    "[object Date]": "date",
    // 日期
    "[object RegExp]": "regExp",
    // 正则
    "[object Undefined]": "undefined",
    // undefined
    "[object Null]": "null",
    // null
    "[object Object]": "object"
    // 对象
  };
  if (obj instanceof HTMLElement) {
    return "element";
  }
  return map[toString.call(obj)];
};
const isChinese = (text) => {
  return /[\u4e00-\u9fa5]/.test(text);
};
const isEnglish = (text) => {
  return /^[a-zA-Z0-9 ]+$/.test(text);
};
exports.getType = getType;
exports.isArray = isArray;
exports.isChinese = isChinese;
exports.isEnglish = isEnglish;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.toFixed = toFixed;
