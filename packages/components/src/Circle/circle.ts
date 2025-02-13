import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import {Gradients} from "@various-curious-ui/typings"

const lineCapType = ['butt', 'round'] as const;
const fillType = ['freeze', 'remove'] as const;

export const circleProps = {
	// 值
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
	// 画布宽度
	width: {
		type: Number,
		default: 100,
	},
	// 圆环宽度
	strokeWidth: {
		type: Number,
		default: 6,
	},
	// 是否是圆角
	lineCap: {
		type: String as PropType<(typeof lineCapType)[number]>,
		default: lineCapType[0],
	},
	// 分割多少块
	part: {
		type: Number,
		default: 1, // 20
	},
	// 分割间距
	partGap: {
		type: Number,
		default: 0, // 5
	},
	// 分割线颜色
	separateColor: {
		type: String,
		default: '#fff',
	},
	// 背景色
	background: [String, Array] as PropType<string | Array<string>>,
	// 颜色
	color: [String, Array] as PropType<string | Array<string>>,
	// 显示文字
	showText: Boolean,
	// 顺时针方向
	clockWise: {
		type: Boolean,
		default: true,
	},
	// 自定义渐变色
	gradient: Object as PropType<Gradients>,
	// 自定义渐变色
	gradients: Array as PropType<Gradients[]>,
	animate: Boolean,
	from: Number,
	to: Number,
	by: Number,
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

export type RingProps = ExtractPropTypes<typeof circleProps>;
