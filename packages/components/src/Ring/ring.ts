import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type {SubTextStyle,TextStyle} from "@various-curious-ui/typings"

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
		required: true,
	},
	// 最大值
	maxValue: {
		type: [Number, String] as PropType<number | string>,
		default: 100,
	},
	// 进度条宽度
	strokeWidth: {
		type: [Number, String] as PropType<number | string>,
		default: 10,
	},
	// 进度条颜色
	color: {
		type: [String, Array] as PropType<string | Array<string>>,
		default: '#329cff',
	},
	// 背景色
	background: {
		type: String,
		default: '#d9d9d9',
	},
	// 背景色
	innerBackground: String,
	innerRadius: {
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
		type: Object as PropType<TextStyle>,
		default: () => {},
	},
	// 副标题样式
	subTitleStyle: {
		type: Object as PropType<SubTextStyle>,
		default: () => {},
	},
	// 保留小数点位数
	percent: [Number, String] as PropType<number | string>,
	// 数值格式化（percent存在时，数值的.00是否需要去除）
	format: Boolean,
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
	animate: Boolean,
} as const;

export type RingProps = ExtractPropTypes<typeof ringProps>;
