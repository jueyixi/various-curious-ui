import type { ExtractPropTypes, PropType,StyleValue } from 'vue';
import { ThumbType, TrackType } from '@various-curious-ui/typings';
import { isNumber } from "vc-utils"

const position = ['inside','outside']
export const scrollbarProps = {
	height: {
		type: [String, Number] as PropType<string | number>,
		default: '',
	},
	maxHeight: {
		type: [String, Number] as PropType<string | number>,
		default: '',
	},
	// 是否显示原生滚动条
	native: Boolean,
	barWidth: [String, Number] as PropType<string | number>,
	// 滚动条尺寸
	size: Number,
	/**
	 * @description always show
	 */
	always: Boolean,
	/**
	 * @description minimum size of scrollbar
	 */
	minSize: {
		type: Number,
		default: 20,
	},
	// 滚动条与内容盒子的间距（竖向：上下间距；横向：左右间距）
	gap: {
		type: Number,
		default: 2,
	},
	// 内容容器尺寸不会变动时可开启，停止监听，可提升性能
	stopResize: Boolean,
	/**
	 * @description style of wrap
	 */
	wrapStyle: {
		type: [String, Object, Array] as PropType<StyleValue>,
		default: '',
	},
	/**
	 * @description class of wrap
	 */
	wrapClass: {
		type: [String, Array] as PropType<string | string[]>,
		default: '',
	},
	/**
	 * @description class of view
	 */
	contentClass: {
		type: [String, Array] as PropType<string | string[]>,
		default: '',
	},
	/**
	 * @description style of view
	 */
	contentStyle: {
		type: [String, Object, Array] as PropType<StyleValue>,
		default: '',
	},
	thumb: {
		type: Object as PropType<ThumbType>,
		default: {},
	},
	track: {
		type: Object as PropType<TrackType>,
		default: {},
	},
	position: {
		type: String as PropType<(typeof position)[number]>,
		default: position[0],
	},
	outsideGap: [String, Number] as PropType<string | number>,
} as const;

export const scrollbarEmits = {
	scroll: ({ scrollTop, scrollLeft }: { scrollTop: number; scrollLeft: number }) =>
		[scrollTop, scrollLeft].every(isNumber),
};

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;
export type ScrollbarEmits = typeof scrollbarEmits;