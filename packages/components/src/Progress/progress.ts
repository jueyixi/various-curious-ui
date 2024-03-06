import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

const fillType = ['forwards', 'remove'] as const;

export const progressProps = {
	height: {
		type: [Number, String] as PropType<number | string>,
		default: 10,
	},
	value: {
		type: [Number, String] as PropType<number | string>,
		default: 0,
	},
	// 最大值
	maxValue: {
		type: [Number, String] as PropType<number | string>,
		default: 100,
	},
	background: [String, Array] as PropType<string | Array<string>>,
	color: [String, Array] as PropType<string | Array<string>>,
	round: {
		type: Boolean,
		default: false,
	},
	showText: {
		type: Boolean,
		default: false,
	},
	animate: {
		type: Boolean,
		default: false,
	},
	dur: {
		type: String,
		default: '3s',
	},
	delay: {
		type: String,
		default: '0s',
	},
	repeatCount: {
		type: String,
		default: '1',
	},
	fill: {
		type: String as PropType<(typeof fillType)[number]>,
		default: fillType[0], //  动画结束停在终止状态 // remove  动画结束回到起始状态
	},
	transitionName: {
		type: String,
		default: 'ease',
	},
} as const;

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
