"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const useDayjs = require("./useDayjs.js");
const { getDateData, setDateData, addDate, subtractDate, getYearMonth, getValue } = useDayjs.useDayjs();
const Day = 24 * 60 * 60 * 1e3;
const useCalendar = (type = "week", multiple) => {
  const toDay = getDateData(/* @__PURE__ */ new Date());
  let start = void 0;
  let time = void 0;
  let end = void 0;
  let list = [];
  const isCurrentYear = (date) => {
    const { year: currentYear } = toDay;
    const { year } = getDateData(date);
    return currentYear == year;
  };
  const isCurrentMonth = (date) => {
    const { year: currentYear, month: currentMonth } = setDateData(toDay.year, toDay.month, 1);
    const { year, month } = getDateData(date);
    return currentYear == year && currentMonth == month;
  };
  const isCurrentDay = (date) => {
    const { year: currentYear, month: currentMonth, day: currentDay } = toDay;
    const { year, month, day } = getDateData(date);
    return currentYear == year && currentMonth == month && currentDay == day;
  };
  const prev = () => {
    if (type === "week") {
      start = getDateData(start.value - 7 * Day);
    }
    if (type === "month") {
      time = setDateData(time.year, time.month - 1, 1);
      start = getDateData(time.value - (time.week - 1) * Day);
    }
    if (type === "year") {
      start = getDateData(setDateData(start.year - 1, 1, 1));
    }
    return getDetail(start, "prev");
  };
  const next = () => {
    if (type === "week") {
      start = getDateData(start.value + 7 * Day);
    }
    if (type === "month") {
      time = setDateData(time.year, time.month + 1, 1);
      start = getDateData(time.value - (time.week - 1) * Day);
    }
    if (type === "year") {
      start = setDateData(start.year + 1, 1, 1);
    }
    return getDetail(start, "next");
  };
  const setToday = () => {
    if (type === "week") {
      start = getDateData(getValue(/* @__PURE__ */ new Date()) - (toDay.week - 1) * Day);
    }
    if (type === "month") {
      time = setDateData(toDay.year, toDay.month, 1);
      start = getDateData(time.value - (time.week - 1) * Day);
    }
    if (type === "year") {
      start = setDateData(toDay.year, 1, 1);
    }
    return getDetail(start, "setToday");
  };
  const setDate = (value) => {
    time = getDateData(value);
    if (type === "week") {
      start = getDateData(time.value - (time.week - 1) * Day);
    }
    if (type === "month") {
      time = setDateData(time.year, time.month, 1);
      start = getDateData(time.value - (time.week - 1) * Day);
    }
    if (type === "year") {
      start = setDateData(time.year, 1, 1);
    }
    return getDetail(start, "setDate");
  };
  const jump = (item) => {
    if (multiple) {
      item.checked = !item.checked;
    } else {
      item.checked = true;
      list == null ? void 0 : list.forEach((v) => {
        v.date !== item.date && (v.checked = false);
      });
    }
    const detail = {
      currentDate: toDay,
      startDate: start,
      endDate: subtractDate(end.value, 1, "day"),
      list,
      activedDate: vue.toRaw(item)
    };
    return { detail, emitName: "change" };
  };
  const getDetail = (start2, emitName) => {
    if (type === "week") {
      end = addDate(start2.value, 6, "day");
    }
    if (type === "month") {
      end = addDate(start2.value, 35, "day");
    }
    if (type === "year") {
      const days = getYearMonth(start2.year, 12);
      end = getDateData(start2.year + "-12-" + days);
    }
    list = setDateList(start2);
    const detail = {
      currentDate: toDay,
      startDate: start2,
      endDate: subtractDate(end.value, 1, "day"),
      list
    };
    return { detail, emitName };
  };
  const setDateList = (start2) => {
    const calendatArr = [];
    let dayNum = 0;
    if (type === "year") {
      dayNum = 12;
      for (let i = 1; i <= dayNum; i++) {
        const days = getYearMonth(start2.year, i);
        const formData = {
          ...getDateData(start2.year + "-" + i + "-1"),
          days
        };
        if (multiple) {
          formData.checked = false;
        }
        calendatArr.push(formData);
      }
    } else {
      if (type === "week") {
        dayNum = 7;
      }
      if (type === "month") {
        dayNum = 35;
      }
      for (let i = 0; i < dayNum; i++) {
        const data = start2.value + i * Day;
        const formData = {
          ...getDateData(data)
        };
        if (multiple) {
          formData.checked = false;
        }
        calendatArr.push(formData);
      }
    }
    return calendatArr;
  };
  return {
    isCurrentYear,
    isCurrentMonth,
    isCurrentDay,
    prev,
    next,
    setToday,
    jump,
    setDate,
    getDetail,
    setDateList
  };
};
exports.useCalendar = useCalendar;
