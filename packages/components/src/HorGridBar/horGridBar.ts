import type { ExtractPropTypes,PropType } from 'vue';

const fillType = ['freeze', 'remove'] as const;

export const horGridBarProps = {
	// 进度条宽度
	strokeWidth: {
		type: [Number, String] as PropType<number | string>,
		default: 10,
	},
	value: {
		type: [Number, String] as PropType<number | string>,
		default: 0,
		required: true,
	},
	// 最大值
	maxValue: {
		type: [Number, String] as PropType<number | string>,
		default: 100,
	},
	background: [String, Array] as PropType<string | string[]>,
	color: [String, Array] as PropType<string | string[]>,
	showText: Boolean,
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

export type HorGridBarProps = ExtractPropTypes<typeof horGridBarProps>;
