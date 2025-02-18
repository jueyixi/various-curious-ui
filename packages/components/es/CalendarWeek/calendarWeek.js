import dayjs from "../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js";
const calendarWeekProps = {
  columns: {
    type: Array,
    default: () => ["一", "二", "三", "四", "五", "六", "日"]
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
    default: 300
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
  value: dayjs.Dayjs
};
const calendarWeekEmits = ["prev", "next", "setToday", "change", "setDate", "update:value"];
export {
  calendarWeekEmits,
  calendarWeekProps
};
