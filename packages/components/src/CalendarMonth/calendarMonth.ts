import { PropType } from 'vue';
import type { ExtractPropTypes, StyleValue } from 'vue';
import dayjs from 'dayjs';

export const calendarMonthProps = {
	columns: {
		type: Array<string>,
		default: () => ['一', '二', '三', '四', '五', '六', '日'],
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
		default: 120,
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

export const calendarMonthEmits = ['prev', 'next', 'setToday', 'change','setDate','update:value'];

export type CalendarMonthProps = ExtractPropTypes<typeof calendarMonthProps>;
