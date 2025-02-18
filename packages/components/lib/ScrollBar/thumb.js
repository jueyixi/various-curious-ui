"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const thumbProps = {
  // 滚动条尺寸
  size: [String, Number],
  barWidth: [String, Number],
  // 是否是垂直
  vertical: Boolean,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
};
const thumbEmits = [];
const BarConfig = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
exports.BarConfig = BarConfig;
exports.thumbEmits = thumbEmits;
exports.thumbProps = thumbProps;
