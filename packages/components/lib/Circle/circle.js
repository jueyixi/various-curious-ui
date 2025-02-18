"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const lineCapType = ["butt", "round"];
const fillType = ["freeze", "remove"];
const circleProps = {
  // 值
  value: {
    type: [Number, String],
    default: 0,
    required: true
  },
  // 最大值
  maxValue: {
    type: [Number, String],
    default: 100
  },
  // 画布宽度
  width: {
    type: Number,
    default: 100
  },
  // 圆环宽度
  strokeWidth: {
    type: Number,
    default: 6
  },
  // 是否是圆角
  lineCap: {
    type: String,
    default: lineCapType[0]
  },
  // 分割多少块
  part: {
    type: Number,
    default: 1
    // 20
  },
  // 分割间距
  partGap: {
    type: Number,
    default: 0
    // 5
  },
  // 分割线颜色
  separateColor: {
    type: String,
    default: "#fff"
  },
  // 背景色
  background: [String, Array],
  // 颜色
  color: [String, Array],
  // 显示文字
  showText: Boolean,
  // 顺时针方向
  clockWise: {
    type: Boolean,
    default: true
  },
  // 自定义渐变色
  gradient: Object,
  // 自定义渐变色
  gradients: Array,
  animate: Boolean,
  from: Number,
  to: Number,
  by: Number,
  begin: {
    type: String,
    default: "0s"
  },
  dur: {
    type: String,
    default: "3s"
  },
  repeatCount: {
    type: String,
    default: "1"
  },
  fill: {
    type: String,
    default: fillType[0]
  },
  animation: {
    type: Object,
    default: () => {
    }
  }
};
exports.circleProps = circleProps;
