import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

export const calendarYearProps = {
	columns: {
		type: Number,
		default: 4,
	},
	hasClick: {
		type: Boolean,
		default: true,
	},
	multiple: Boolean,
	dataSource: {
		type: Array<any>,
		default: () => [],
	},
	minHeight: [Number, String] as PropType<number | string>,
	maxHeight: [Number, String] as PropType<number | string>,
	height: {
		type: [Number, String] as PropType<number | string>,
		default: 150,
	},
	contentStyle: {
		type: Object,
		default: () => {},
	},
	contentClass: String,
} as const;

export const calendarYearEmits = ['prev', 'next', 'toCurrent', 'jump'];

export type CalendarYearProps = ExtractPropTypes<typeof calendarYearProps>;