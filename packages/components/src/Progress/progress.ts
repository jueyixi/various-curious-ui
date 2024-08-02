import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

const fillType = ['forwards', 'remove'] as const;
const Status = ['primary','success','warning','danger']

export const progressProps = {
	// 进度条宽度
	strokeWidth: {
		type: [Number, String] as PropType<number | string>,
		default: 10,
	},
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
	background: [String, Array] as PropType<string | Array<string>>,
	color: [String, Array] as PropType<string | Array<string>>,
	round: Boolean,
	showText: Boolean,
	animate: Boolean,
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
	status: {
		type: String as PropType<(typeof Status)[number]>,
		default: Status[0],
	}
} as const;

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
