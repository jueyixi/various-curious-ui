import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

const lineCapType = ['square', 'round'] as const;

export const ringProps = {
	// id
	id: String,
	// 圆环半径
	radius: {
		type: [Number, String] as PropType<number | string>,
		default: 80,
	},
	// 数值
	value: {
		type: [Number, String] as PropType<number | string>,
		default: 0,
	},
	// 最大值
	maxValue: {
		type: [Number, String] as PropType<number | string>,
		default: 100,
	},
	// 进度条宽度
	width: {
		type: [Number, String] as PropType<number | string>,
		default: 10,
	},
	// 进度条颜色
	color: {
		type: [String, Array] as PropType<string | Array<string>>,
		default: ['#fff', '#0dd7de'],
	},
	// 背景色
	background: {
		type: String,
		default: 'rgba(0,0,0,0.2)',
	},
	// 背景色
	innerBackground: String,
	innerWidth: {
		type: [Number, String] as PropType<number | string>,
		default: 0,
	},
	lineCap: {
		type: String as PropType<(typeof lineCapType)[number]>,
		default: lineCapType[0],
	},
	// 主标题
	title: String,
	// 副标题
	subTitle: {
		type: String,
		default: '%',
	},
	// 主标题样式
	titleStyle: {
		type: Object,
		default: () => {},
	},
	// 副标题样式
	subTitleStyle: {
		type: Object,
		default: () => {},
	},
	// 保留小数点位数
	percent: [Number, String] as PropType<number | string>,
	// 数值格式化（percent存在时，数值的.00是否需要去除）
	format: {
		type: Boolean,
		default: false,
	},
	// 初始步长
	startStep: {
		type: [Number, String] as PropType<number | string>,
		default: 0,
	},
	// 数值跳动步长
	step: {
		type: [Number, String] as PropType<number | string>,
		default: 1,
	},
	animate: {
		type: Boolean,
		default: false,
	},
} as const;

export type RingProps = ExtractPropTypes<typeof ringProps>;
