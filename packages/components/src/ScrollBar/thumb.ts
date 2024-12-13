import type { ExtractPropTypes, PropType } from 'vue';
export const thumbProps = {
	// 滚动条尺寸
	size: [String, Number] as PropType<string | number>,
	barWidth: [String, Number] as PropType<string | number>,
	// 是否是垂直
	vertical: Boolean,
	move: Number,
	ratio: {
		type: Number,
		required: true,
	},
	always: Boolean,
} as const;

export const thumbEmits = [];

export type ThumbProps = ExtractPropTypes<typeof thumbProps>;
export type ThumbEmits = typeof thumbEmits;

export const BarConfig = {
	vertical: {
		offset: 'offsetHeight',
		scroll: 'scrollTop',
		scrollSize: 'scrollHeight',
		size: 'height',
		key: 'vertical',
		axis: 'Y',
		client: 'clientY',
		direction: 'top',
	},
	horizontal: {
		offset: 'offsetWidth',
		scroll: 'scrollLeft',
		scrollSize: 'scrollWidth',
		size: 'width',
		key: 'horizontal',
		axis: 'X',
		client: 'clientX',
		direction: 'left',
	},
} as const;