import { toRaw, } from 'vue';
import { useDayjs } from './useDayjs.js';
import type { CalendarItem, SelectedCalendarItem,CalendarDetail } from "@various-curious-ui/typings"
import { Dayjs } from 'dayjs';

const { getDateData, setDateData, addDate,subtractDate, getYearMonth, getValue } = useDayjs();
const Day = 24 * 60 * 60 * 1000

export const useCalendar = (type = 'week', multiple?: boolean) => {
	const toDay = getDateData(new Date());
	let start: CalendarItem = undefined;
	let time: CalendarItem = undefined;
	let end: CalendarItem = undefined;
	let list: Array<any> = [];
	// 是否是当前年
	const isCurrentYear = (date: string) => {
		const { year: currentYear } = toDay;
		const { year } = getDateData(date);
		return currentYear == year;
	};
	// 是否是当前月
	const isCurrentMonth = (date: string) => {
		const { year: currentYear, month: currentMonth } = setDateData(toDay.year, toDay.month, 1);
		const { year, month } = getDateData(date);
		return currentYear == year && currentMonth == month;
	};
	// 是否是今天
	const isCurrentDay = (date: string) => {
		const { year: currentYear, month: currentMonth, day: currentDay } = toDay;
		const { year, month, day } = getDateData(date);
		return currentYear == year && currentMonth == month && currentDay == day;
	};
	// 上一周
	const prev = () => {
		if (type === 'week') {
			start = getDateData(start.value - 7 * Day);
		}
		if (type === 'month') {
			time = setDateData(time.year, time.month - 1, 1);
			start = getDateData(time.value - (time.week - 1) * Day);
		}
		if (type === 'year') {
			start = getDateData(setDateData(start.year - 1, 1, 1));
		}
		return getDetail(start, 'prev');
	};
	const next = () => {
		if (type === 'week') {
			start = getDateData(start.value + 7 * Day);
		}
		if (type === 'month') {
			time = setDateData(time.year, time.month + 1, 1);
			start = getDateData(time.value - (time.week - 1) * Day);
		}
		if (type === 'year') {
			start = setDateData(start.year + 1, 1, 1);
		}
		return getDetail(start, 'next');
	};
	// 点击回到今天
	const setToday = () => {
		if (type === 'week') {
			start = getDateData(getValue(new Date()) - (toDay.week - 1) * Day);
		}
		if (type === 'month') {
			time = setDateData(toDay.year, toDay.month, 1);
			start = getDateData(time.value - (time.week - 1) * Day);
		}
		if (type === 'year') {
			start = setDateData(toDay.year, 1, 1);
		}
		return getDetail(start, 'setToday');
	};
	// 指定某天所在的日历面板
	const setDate = (value:Dayjs) => {
		time = getDateData(value)
		if (type === 'week') {
			start = getDateData(time.value - (time.week - 1) * Day);
		}
		if (type === 'month') {
			time = setDateData(time.year, time.month, 1);
			start = getDateData(time.value - (time.week - 1) * Day);
		}
		if (type === 'year') {
			start = setDateData(time.year, 1, 1);
		}
		return getDetail(start, 'setDate');
	};
	// 点击某一天
	const jump = (item: SelectedCalendarItem) => {
		if (multiple) {
			item.checked = !item.checked;
		} else {
			item.checked = true
			list?.forEach(v => {
				v.date !== item.date && (v.checked = false);
			})
		}
		const detail:CalendarDetail = {
			currentDate: toDay,
			startDate: start,
			endDate: subtractDate(end.value,1,"day"),
			list: list,
			activedDate: toRaw(item),
		};
		return { detail, emitName: 'change' };
	};
	const getDetail = (start: CalendarItem, emitName: string) => {
		if (type === 'week') {
			end = addDate(start.value, 6, 'day');
		}
		if (type === 'month') {
			end = addDate(start.value, 35, 'day');
		}
		if (type === 'year') {
			const days = getYearMonth(start.year, 12);
			end = getDateData(start.year + '-' + 12 + '-' + days);
		}
		list = setDateList(start);
		const detail:CalendarDetail = {
			currentDate: toDay,
			startDate: start,
			endDate: subtractDate(end.value,1,"day"),
			list: list,
		};
		return { detail, emitName };
	};
	const setDateList = (start: CalendarItem) => {
		const calendatArr: any = [];
		let dayNum = 0;
		if (type === 'year') {
			dayNum = 12;
			for (let i = 1; i <= dayNum; i++) {
				const days = getYearMonth(start.year, i);
				const formData: any = {
					...getDateData(start.year + '-' + i + '-' + 1),
					days,
				};
				if (multiple) {
					formData.checked = false;
				}
				calendatArr.push(formData);
			}
		} else {
			if (type === 'week') {
				dayNum = 7;
			}
			if (type === 'month') {
				dayNum = 35;
			}
			for (let i = 0; i < dayNum; i++) {
				const data = start.value + i * Day;
				const formData: any = {
					...getDateData(data),
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
		setDateList,
	};
};
