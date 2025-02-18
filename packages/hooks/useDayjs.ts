import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export const useDayjs = () => {
  const getDateData = (data:any) => {
    data = data instanceof Date ? data : new Date(data);
    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = formatDate(data.getDate());
    let week = data.getDay();
    const value = getValue(data);
    const date = format(year + '-' + month + '-' + day);
    if (week === 0) week = 7;
    return { year, month, day, week, value, date };
  };
  const setDateData = (year:number, month:number, day:number, isDayjs = true) => {
    const date = isDayjs ? dayjs(new Date(year, month - 1, day)) : new Date(year, month - 1, day);
    return getDateData(date)
  };
  const formatDate = (date:any) => {
    date = Number(date);
    return date < 10 ? `0${date}` : date;
  };
  // 格式化
  const format = (value: dayjs.Dayjs | string, format = 'YYYY-MM-DD') => dayjs(value).format(format);
  // 时间戳
  const getValue = (value: dayjs.Dayjs | Date) => dayjs(value).valueOf();
  const getYearMonth = (year:number, month:number) => new Date(year, month, 0).getDate();
  // 获取/设置年份
  const handleYear = (value:number) => dayjs().year(value);
  // 获取/设置月份
  const handleMonth = (value:number) => dayjs().month(value);
  // 获取/设置日期
  const handleDate = (value:number) => dayjs().month(value);
  // 获取/设置星期
  const handleDay = (value:number) => dayjs().day(value);
  // 设置时间
  const setDate = (value: number, unit: dayjs.UnitType) => dayjs().set(unit, value);
  // 增加日期
  const addDate = (start: dayjs.Dayjs | Date | number, value: number, unit: dayjs.ManipulateType) =>
		getDateData(dayjs(start).add(value, unit));
  // 减少日期
  const subtractDate = (start: dayjs.Dayjs | Date | number, value: number, unit: dayjs.ManipulateType) =>
		getDateData(dayjs(start).subtract(value, unit));
  // 开头时间
  const startDate = (value = '', unit: dayjs.OpUnitType) => dayjs(value).startOf(unit);
  // 结束时间
  const endDate = (value = '', unit: dayjs.OpUnitType) => dayjs(value).endOf(unit);
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

  const englishMonth = (month:number) => {

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
    englishMonth,
  };
};
