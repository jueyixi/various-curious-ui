import { buttonProps } from "../Button/button.js";
const buttonGroupContextKey = Symbol(
  "buttonGroupContextKey"
);
const buttonGroupProps = {
  /**
   * @description 控制按钮组按钮的尺寸
   */
  size: buttonProps.size,
  /**
   * @description 控制按钮组按钮的类型
   */
  type: buttonProps.type,
  /**
   * @description 控制按钮组按钮的类型
   */
  danger: buttonProps.danger
};
export {
  buttonGroupContextKey,
  buttonGroupProps
};
