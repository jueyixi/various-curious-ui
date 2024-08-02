import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

const fillType = ['freeze', 'remove'] as const;
const position = ["bottom", "top"] as const;

export const verGridBarProps = {
	// 进度条宽度
	strokeWidth: {
		type: [Number, String] as PropType<number | string>,
		default: 30,
	},
	height: [Number, String] as PropType<number | string>,
	value: {
		type: [Number, String] as PropType<number | string>,
		default: 0,
		required:true
	},
	// 最大值
	maxValue: {
		type: [Number, String] as PropType<number | string>,
		default: 100,
	},
	background: [String, Array] as PropType<string | string[]>,
	color: [String, Array] as PropType<string | string[]>,
	showText: Boolean,
	textPosition: {
		type: String as PropType<(typeof position)[number]>,
		default: position[0],
	},
	partGap: {
		type: Number,
		default: 5,
	},
	animate: Boolean,
	from: String,
	to: String,
	by: String,
	begin: {
		type: String,
		default: '0s',
	},
	dur: {
		type: String,
		default: '3s',
	},
	repeatCount: {
		type: String,
		default: '1',
	},
	fill: {
		type: String as PropType<(typeof fillType)[number]>,
		default: fillType[0],
	},
	animation: {
		type: Object,
		default: () => {},
	},
} as const;

export type VerGridBarProps = ExtractPropTypes<typeof verGridBarProps>;
