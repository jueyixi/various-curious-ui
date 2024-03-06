import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

export type OffsetColor = {
	offset: string | number;
	color: string;
	startStep?: number;
	endStep?: number;
};

export const dashboardProps = {
	// id
	id: {
		type: String,
		default: '',
	},
	// 画布宽
	contentWidth: {
		type: Number,
		default: 300,
	},
	// 画布高
	contentHeight: {
		type: Number,
		default: 150,
	},
	// 主标题
	title: {
		type: String,
		default: '',
	},
	// 副标题
	subTitle: {
		type: String,
		default: '',
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
	// 进度线颜色
	color: {
		type: [String, Array] as PropType<string | Array<OffsetColor>>,
		default: '#0dd7de',
	},
	// 进度条颜色
	background: {
		type: [String, Array] as PropType<string | Array<OffsetColor>>,
		default: 'rgba(75, 160, 174, 0.5)',
	},
	// 数值
	value: {
		type: [Number, String] as PropType<number | string>,
		default: 0,
	},
	// 开始角度--不支持修改
	startAngle: {
		type: Number,
		default: 0,
	},
	// 结束角度--不支持修改
	endAngle: {
		type: Number,
		default: 180,
	},
	// 最大值
	maxValue: {
		type: [Number, String] as PropType<number | string>,
		default: 100,
	},
	// 刻度份数
	splitNumber: {
		type: [Number, String] as PropType<number | string>,
		default: 5,
	},
	// 刻度线宽度
	splitWidth: {
		type: [Number, String] as PropType<number | string>,
		default: 2,
	},
	// 刻度值样式
	splitStyle: {
		type: Object,
		default: () => {},
	},
	// 刻度线颜色
	splitColor: {
		type: String,
		default: 'rgba(0, 0, 0, 0.5)',
	},
	// 内圆半径
	innerRadius: {
		type: [Number, String] as PropType<number | string>,
		default: 110,
	},
	// 内圆背景色
	interBackground: {
		type: [String, Array] as PropType<string | Array<string>>,
		default: 'rgba(0,0,0,0.7)',
	},
	// 外圆半径
	outerRadius: {
		type: [Number, String] as PropType<number | string>,
		default: 130,
	},
	// 外圆环直径
	outerWidth: {
		type: [Number, String] as PropType<number | string>,
		default: 20,
	},
	// 外圆环背景色
	outerBackground: {
		type: String,
		default: 'rgba(75, 160, 174, 0.1)',
	},
	// 进度线宽度
	width: {
		type: [Number, String] as PropType<number | string>,
		default: 5,
	},
	// 初始步长
	startStep: {
		type: [Number, String] as PropType<number | string>,
		default: 1,
	},
	// 数值跳动步长
	step: {
		type: [Number, String] as PropType<number | string>,
		default: 1,
	},
} as const;

export type DashboardProps = ExtractPropTypes<typeof dashboardProps>;
