import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import {Dayjs} from 'dayjs';

export const calendarWeekProps = {
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
		default: 300,
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

export const calendarWeekEmits = ['prev', 'next', 'setToday', 'change','setDate','update:value'];

export type CalendarWeekProps = ExtractPropTypes<typeof calendarWeekProps>;