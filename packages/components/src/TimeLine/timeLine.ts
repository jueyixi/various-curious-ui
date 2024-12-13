import type { ExtractPropTypes,PropType } from 'vue';
import type { TimeLineItem, DefaultConfig, SplitType } from '@various-curious-ui/typings';
import type { ScrollbarProps } from '../ScrollBar/scrollBar.ts';
import type { FloatingProps } from '../Floating/floating.ts';

export const timeLineProps = {
	// 禁选
	disabled: Boolean,
	// 多选
	multiple: {
		type: Boolean,
		default: true,
	},
	height: [Number, String] as PropType<number | string>,
	split: {
		type: Object as PropType<SplitType>,
		default: {},
	},
	// 默认配置
	defaultConfig: {
		type: Object as PropType<DefaultConfig>,
		default: {},
	},
	// 数据源
	dataSource: {
		type: Array as PropType<TimeLineItem[]>,
		default: [],
		required: true,
	},
	// popper配置项
	floating: Object as PropType<FloatingProps>,
	scrollbar: {
		type: Object as PropType<ScrollbarProps>,
		default: {},
	},
} as const;

export const timeLineEmits = ['click','selected'];

export type TimeLineProps = ExtractPropTypes<typeof timeLineProps>;
export type TimeLineEmits = typeof timeLineEmits;