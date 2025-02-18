import { PropType } from 'vue';
import type { ExtractPropTypes, StyleValue } from 'vue';
import dayjs from 'dayjs';

export const calendarYearProps = {
	columns: {
		type: Number,
		default: 4,
	},
	disabled: Boolean,
	multiple: Boolean,
	dataSource: {
		type: Array<any>,
		default: () => [],
		required: true,
	},
	minHeight: [Number, String] as PropType<number | string>,
	maxHeight: [Number, String] as PropType<number | string>,
	height: {
		type: [Number, String] as PropType<number | string>,
		default: 150,
	},
	columnsGap: {
		type: [Number, String] as PropType<number | string>,
		default: 8,
	},
	contentStyle: {
		type: [String, Object, Array] as PropType<StyleValue>,
		default: '',
	},
	contentClass: [String, Array] as PropType<string | string[]>,
	value: dayjs.Dayjs,
} as const;

export const calendarYearEmits = ['prev', 'next', 'setToday', 'change','setDate','update:value'];

export type CalendarYearProps = ExtractPropTypes<typeof calendarYearProps>;