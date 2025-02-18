import dayjs from "../../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js";
import "../../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/locale/zh-cn.js";
dayjs.locale("zh-cn");
const useDayjs = () => {
  const getDateData = (data) => {
    data = data instanceof Date ? data : new Date(data);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = formatDate(data.getDate());
    let week = data.getDay();
    const value = getValue(data);
    const date = format(year + "-" + month + "-" + day);
    if (week === 0)
      week = 7;
    return { year, month, day, week, value, date };
  };
  const setDateData = (year, month, day, isDayjs = true) => {
    const date = isDayjs ? dayjs(new Date(year, month - 1, day)) : new Date(year, month - 1, day);
    return getDateData(date);
  };
  const formatDate = (date) => {
    date = Number(date);
    return date < 10 ? `0${date}` : date;
  };
  const format = (value, format2 = "YYYY-MM-DD") => dayjs(value).format(format2);
  const getValue = (value) => dayjs(value).valueOf();
  const getYearMonth = (year, month) => new Date(year, month, 0).getDate();
  const addDate = (start, value, unit) => getDateData(dayjs(start).add(value, unit));
  const subtractDate = (start, value, unit) => getDateData(dayjs(start).subtract(value, unit));
  const englishMonthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  const englishMonth = (month) => {
    return englishMonthList[month];
  };
  return {
    getDateData,
    setDateData,
    format,
    getValue,
    getYearMonth,
    // handleYear,
    // handleMonth,
    // handleDate,
    // handleDay,
    // setDate,
    addDate,
    subtractDate,
    // startDate,
    // endDate,
    englishMonth
  };
};
export {
  useDayjs
};
