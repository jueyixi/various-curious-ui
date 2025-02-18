"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dayjs_min = require("../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js");
const calendarYearProps = {
  columns: {
    type: Number,
    default: 4
  },
  disabled: Boolean,
  multiple: Boolean,
  dataSource: {
    type: Array,
    default: () => [],
    required: true
  },
  minHeight: [Number, String],
  maxHeight: [Number, String],
  height: {
    type: [Number, String],
    default: 150
  },
  columnsGap: {
    type: [Number, String],
    default: 8
  },
  contentStyle: {
    type: [String, Object, Array],
    default: ""
  },
  contentClass: [String, Array],
  value: dayjs_min.default.Dayjs
};
const calendarYearEmits = ["prev", "next", "setToday", "change", "setDate", "update:value"];
exports.calendarYearEmits = calendarYearEmits;
exports.calendarYearProps = calendarYearProps;
