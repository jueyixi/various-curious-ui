import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type {OffsetColor,SubTextStyle,TextStyle,SplitStyle} from "@various-curious-ui/typings"

export const dashboardProps = {
	// id
	id: String,
	radius: {
		type: [Number, String] as PropType<number | string>,
		default: 150,
	},
	// 主标题
	title: String,
	// 副标题
	subTitle: String,
	// 主标题样式
	titleStyle: {
		type: Object as PropType<TextStyle>,
		default: () => {},
	},
	middleTitle: Boolean,
	// 副标题样式
	subTitleStyle: {
		type: Object as PropType<SubTextStyle>,
		default: () => {},
	},
	// 进度线颜色
	color: {
		type: [String, Array] as PropType<string | Array<OffsetColor>>,
		default: '#329cff',
	},
	// 进度条颜色
	background: {
		type: [String, Array] as PropType<string | Array<OffsetColor>>,
		default: 'rgba(50, 156, 255, 0.5)',
	},
	// 数值
	value: {
		type: [Number, String] as PropType<number | string>,
		default: 0,
		required: true,
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
	semicircle: {
		type: Boolean,
		default: true,
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
	// 刻度线宽度
	splitSpace: {
		type: [Number, String] as PropType<number | string>,
		default: 2,
	},
	// 刻度值样式
	splitStyle: {
		type: Object as PropType<SplitStyle>,
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
		default: 'rgba(0, 0, 0,0.7)',
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
		default: 'rgba(217, 217, 217,1)',
	},
	// 进度线宽度
	strokeWidth: {
		type: [Number, String] as PropType<number | string>,
		default: 5,
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
} as const;

export type DashboardProps = ExtractPropTypes<typeof dashboardProps>;
