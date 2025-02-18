const ElementSize = ["small", "middle", "large", "mini"];
const nativeType = ["button", "submit", "reset"];
const buttonType = ["default", "primary", "success", "warinng", "dashed"];
const targetType = ["_blank", "_parent", "_self", "_top"];
const buttonProps = {
  // 前置图标
  prefixIcon: {
    type: String,
    default: ""
  },
  // 后置图标
  suffixIcon: {
    type: String,
    default: ""
  },
  // 大小
  size: {
    type: String,
    default: ElementSize[1]
  },
  // 原生type
  nativeType: {
    type: String,
    default: nativeType[0]
  },
  // 形状
  shape: String,
  // 链接类型时 原生target属性
  target: {
    type: String,
    default: targetType[2]
  },
  type: {
    type: String,
    default: buttonType[0]
  },
  href: String,
  danger: Boolean,
  disabled: Boolean,
  ghost: Boolean,
  loading: Boolean,
  link: Boolean,
  text: Boolean
};
const buttonEmits = {
  /**
   * @description 点击按钮后触发的事件
   * @param event
   */
  click: (evt) => evt instanceof MouseEvent
};
export {
  buttonEmits,
  buttonProps
};
