import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

const type = ['week', 'month', 'year'] as const;

export enum CurrentTitle {
    week = "本周",
    month = "本月",
    year = "本年"
}

export const calendarProps = {
	// type
	type: {
		type: String as PropType<(typeof type)[number]>,
		default: type[0],
    },
	currentTitle: String,
	prevTitle: String,
	nextTitle: String,
} as const;

export type CalendarProps = ExtractPropTypes<typeof calendarProps>;

export type CalendarType = CalendarProps['type'];
