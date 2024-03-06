import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

export const calendarWeekProps = {
	columns: {
		type: Array<string>,
		default: () => ['一', '二', '三', '四', '五', '六', '日'],
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
		default: 300,
	},
	contentStyle: {
		type: Object,
		default: () => {},
	},
	contentClass: String,
} as const;

export const calendarWeekEmits = ['prev', 'next', 'toCurrent', 'jump'];

export type CalendarWeekProps = ExtractPropTypes<typeof calendarWeekProps>;