"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const dayjs_min = require("../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js");
const mode = ["week", "month", "year"];
var CurrentText = /* @__PURE__ */ ((CurrentText2) => {
  CurrentText2["week"] = "本周";
  CurrentText2["month"] = "本月";
  CurrentText2["year"] = "本年";
  return CurrentText2;
})(CurrentText || {});
const calendarProps = {
  mode: {
    type: String,
    default: mode[1],
    required: true
  },
  currentText: String,
  prevText: String,
  nextText: String,
  value: dayjs_min.default.Dayjs
};
const calendarEmits = ["update:value"];
exports.CurrentText = CurrentText;
exports.calendarEmits = calendarEmits;
exports.calendarProps = calendarProps;
