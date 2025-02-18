import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import dayjs from 'dayjs';

const mode = ['week', 'month', 'year'] as const;

export enum CurrentText {
    week = "本周",
    month = "本月",
    year = "本年"
}

export const calendarProps = {
	mode: {
		type: String as PropType<(typeof mode)[number]>,
		default: mode[1],
		required: true,
	},
	currentText: String,
	prevText: String,
	nextText: String,
	value: dayjs.Dayjs,
} as const;

export const calendarEmits = ['update:value'];

export type CalendarProps = ExtractPropTypes<typeof calendarProps>;

export type CalendarType = CalendarProps['mode'];
