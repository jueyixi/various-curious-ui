import  dayjs from 'dayjs';
import { InjectionKey } from 'vue';

export type CalendarItem =
	| {
			year: number;
			month: number;
			day: number;
			week: number;
			value: number;
			date?: String;
	  }
	| undefined;

export type SelectedCalendarItem = CalendarItem & {
	checked?: boolean;
};

export type CalendarDetail = {
	activedDate?: SelectedCalendarItem;
	currentDate: CalendarItem;
	startDate: CalendarItem;
	endDate: CalendarItem;
	list: Array<CalendarItem>;
};

export type HeaderContent = {
	title: string;
	currentText: string;
	prevText: string;
	nextText: string;
};

export interface CalendarContext {
	headerContent: HeaderContent;
	value: dayjs.Dayjs;
}

export const calendarContextKey: InjectionKey<CalendarContext> = Symbol('calendarContextKey');
