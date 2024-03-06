import { useDayjs } from './useDayjs.js';
export const useCalendar = (type = 'week', multiple?: Boolean) => {	
	const dayjs = useDayjs();
	const toDay = dayjs.getDate(new Date());
	let start:any = {};
	let time:any = {};
	let end:any = {};
	let list:Array<any> = [];
	// 是否是当前年
	const isCurrentYear = (date) => {
		const { year: currentYear } = toDay;
		const { year } = dayjs.getDate(date);
		return currentYear == year;
	};
	// 是否是当前月
	const isCurrentMonth = (date) => {
		const { year: currentYear, month: currentMonth } = dayjs.getDate(dayjs.setNewDate(toDay.year, toDay.month, 1));
		const { year, month } = dayjs.getDate(date);
		return currentYear == year && currentMonth == month;
	};
	// 是否是今天
	const isCurrentDay = (date) => {
		const { year: currentYear, month: currentMonth, day: currentDay } = toDay;
		const { year, month, day } = dayjs.getDate(date);
		return currentYear == year && currentMonth == month && currentDay == day;
	};
	// 上一周
	const prev = () => {
		if (type === 'week') {
			start = dayjs.getDate(start.value - 7 * 24 * 60 * 60 * 1000);
		}
		if (type === 'month') {
			time = dayjs.getDate(dayjs.setNewDate(time.year, time.month - 1, 1));
			start = dayjs.getDate(time.value - (time.week - 1) * 24 * 60 * 60 * 1000);
		}
		if (type === 'year') {
			start = dayjs.getDate(dayjs.setNewDate(start.year - 1, 1, 1));
		}
		return getDetail(start, 'prev');
	};
	const next = () => {
		if (type === 'week') {
			start = dayjs.getDate(start.value + 7 * 24 * 60 * 60 * 1000);
		}
		if (type === 'month') {
			time = dayjs.getDate(dayjs.setNewDate(time.year, time.month + 1, 1));
			start = dayjs.getDate(time.value - (time.week - 1) * 24 * 60 * 60 * 1000);
		}
		if (type === 'year') {
			start = dayjs.getDate(dayjs.setNewDate(start.year + 1, 1, 1));
		}
		return getDetail(start, 'next');
	};
	// 点击回到今天
	const toCurrent = () => {
		if (type === 'week') {
			start = dayjs.getDate(dayjs.getValue(new Date()) - (toDay.week - 1) * 24 * 60 * 60 * 1000);
		}
		if (type === 'month') {
			time = dayjs.getDate(dayjs.setNewDate(toDay.year, toDay.month, 1));
			start = dayjs.getDate(time.value - (time.week - 1) * 24 * 60 * 60 * 1000);
		}
		if (type === 'year') {
			start = dayjs.getDate(dayjs.setNewDate(toDay.year, 1, 1));
		}
		return getDetail(start, 'handleToDay');
	};
	// 点击某一天
	const jump = (item) => {
		if (multiple) {
			item.clickDay = !item.clickDay;
		}
		const detail = {
			toDay: toDay,
			startDate: start,
			endDate: end,
			list: list,
			clickDate: item,
		};
		return { detail, emitName: 'handleClick' };
	};
	const getDetail = (start, emitName) => {
		if (type === 'week') {
			end = dayjs.getDate(dayjs.addDate(start.value, 6, 'day'));
		}
		if (type === 'month') {
			end = dayjs.getDate(dayjs.addDate(start.value, 35, 'day'));
		}
		if (type === 'year') {
			const days = dayjs.getYearMonth(start.year, 12);
			end = dayjs.getDate(start.year + '-' + 12 + '-' + days);
		}
		list = setDateList(start);
		const detail = {
			toDay: toDay,
			startDate: start,
			endDate: end,
			list: list,
		};
		return { detail, emitName };
	};
	const setDateList = (start) => {
		const calendatArr:any = [];
		let dayNum = 0;
		if (type === 'year') {
			dayNum = 12;
			for (let i = 1; i <= dayNum; i++) {
				const days = dayjs.getYearMonth(start.year, i);
				const formData:any = {
					...dayjs.getDate(start.year + '-' + i + '-' + 1),
					days,
				};
				if (multiple) {
					formData.clickDay = false;
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
				const data = start.value + i * 24 * 60 * 60 * 1000;
				const formData:any = {
					...dayjs.getDate(data),
				};
				if (multiple) {
					formData.clickDay = false;
				}
				calendatArr.push(formData);
			}
		}
		return calendatArr;
	};
	const filter = (calendatArr, cols = 7) => {
		const list:any = [];
		calendatArr?.forEach((item, index) => {
			// 方法二
			const num = Math.floor(index / cols);
			if (list[num]) {
				list[num].push(item);
			} else {
				list[num] = [item];
			}
		});
		return list;
	};
	return {
		isCurrentYear,
		isCurrentMonth,
		isCurrentDay,
		prev,
		next,
		toCurrent,
		jump,
		getDetail,
		setDateList,
		filter,
	};
};
