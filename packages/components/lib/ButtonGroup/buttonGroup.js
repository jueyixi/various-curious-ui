"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const button = require("../Button/button.js");
const buttonGroupContextKey = Symbol(
  "buttonGroupContextKey"
);
const buttonGroupProps = {
  /**
   * @description 控制按钮组按钮的尺寸
   */
  size: button.buttonProps.size,
  /**
   * @description 控制按钮组按钮的类型
   */
  type: button.buttonProps.type,
  /**
   * @description 控制按钮组按钮的类型
   */
  danger: button.buttonProps.danger
};
exports.buttonGroupContextKey = buttonGroupContextKey;
exports.buttonGroupProps = buttonGroupProps;
