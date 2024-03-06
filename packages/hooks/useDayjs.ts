import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export const useDayjs = () => {
  const getDate = (data) => {
    data = data instanceof Date ? data : new Date(data);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = formatDate(data.getDate());
    let week = data.getDay();
    const value = getValue(data);
    const date = year + '-' + month + '-' + day;
    if (week === 0) week = 7;
    return { year, month, day, week, value, date };
  };
  const setNewDate = (year, month, day, isDayjs = true) => {
    return isDayjs ? dayjs(new Date(year, month - 1, day)) : new Date(year, month - 1, day);
  };
  const formatDate = (date) => {
    date = Number(date);
    return date < 10 ? `0${date}` : date;
  };
  // 格式化
  const format = (value = new Date(), format = 'YYYY-MM-DD') => dayjs(value).format(format);
  // 时间戳
  const getValue = (value) => dayjs(value).valueOf();
  const getYearMonth = (year, month) => new Date(year, month, 0).getDate();
  // 获取/设置年份
  const handleYear = (value) => dayjs().year(value);
  // 获取/设置月份
  const handleMonth = (value) => dayjs().month(value);
  // 获取/设置日期
  const handleDate = (value) => dayjs().month(value);
  // 获取/设置星期
  const handleDay = (value) => dayjs().day(value);
  // 设置时间
  const setDate = (value, unit) => dayjs().set(unit, value);
  // 增加日期
  const addDate = (start, value, unit) => dayjs(start).add(value, unit);
  // 减少日期
  const subtractDate = (start, value, unit) => dayjs(start).subtract(value, unit);
  // 开头时间
  const startDate = (value = '', unit) => dayjs(value).startOf(unit);
  // 结束时间
  const endDate = (value = '', unit) => dayjs(value).endOf(unit);
  const englishMonthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const englishMonth = (month) => {
    let engMonth = month;

    englishMonthList.map(() => {
      engMonth = englishMonthList[month];
    });

    return engMonth;
  };
  return {
    getDate,
    setNewDate,
    format,
    getValue,
    getYearMonth,
    handleYear,
    handleMonth,
    handleDate,
    handleDay,
    setDate,
    addDate,
    subtractDate,
    startDate,
    endDate,
    englishMonth,
  };
};
