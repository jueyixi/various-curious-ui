import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import {Dayjs} from 'dayjs';

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
	},
	minHeight: [Number, String] as PropType<number | string>,
	maxHeight: [Number, String] as PropType<number | string>,
	height: {
		type: [Number, String] as PropType<number | string>,
		default:120,
	},
	columnsGap: {
		type: [Number, String] as PropType<number | string>,
		default:8,
	},
	contentStyle: {
		type: Object,
		default: () => {},
	},
	contentClass: String,
	value:Dayjs
} as const;

export const calendarMonthEmits = ['prev', 'next', 'setToday', 'change','setDate','update:value'];

export type CalendarMonthProps = ExtractPropTypes<typeof calendarMonthProps>;
