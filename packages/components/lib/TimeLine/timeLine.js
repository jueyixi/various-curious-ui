"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const timeLineProps = {
  // 禁选
  disabled: Boolean,
  // 多选
  multiple: {
    type: Boolean,
    default: true
  },
  height: [Number, String],
  split: {
    type: Object,
    default: {}
  },
  // 默认配置
  defaultConfig: {
    type: Object,
    default: {}
  },
  // 数据源
  dataSource: {
    type: Array,
    default: [],
    required: true
  },
  // popper配置项
  floating: Object,
  scrollbar: {
    type: Object,
    default: {}
  }
};
const timeLineEmits = ["click", "selected"];
exports.timeLineEmits = timeLineEmits;
exports.timeLineProps = timeLineProps;
