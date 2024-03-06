import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

const ElementSize = ['small', 'middle', 'large', 'mini'] as const;

const nativeType = ['button', 'submit', 'reset'] as const;

const buttonType = ['default', 'primary', 'danger', 'ghost', 'dashed', 'link', 'text'] as const;

const targetType = ['_blank', '_parent', '_self', '_top'] as const;

const shapeType = ['default', 'circle', 'round'] as const;

export const buttonProps = {
	// 前置图标
	prefixIcon: {
		type: String,
		default: '',
	},
	// 后置图标
	suffixIcon: {
		type: String,
		default: '',
	},
	// 不可选
	disabled: {
		type: Boolean,
		default: false,
	},
	// 大小
	size: {
		type: String as PropType<(typeof ElementSize)[number]>,
		default: ElementSize[1],
	},
	// 原生type
	nativeType: {
		type: String as PropType<(typeof nativeType)[number]>,
		default: nativeType[0],
	},
	// 加载中
	loading: {
		type: Boolean,
		default: false,
	},
	// 形状
	shape: String as PropType<(typeof shapeType)[number]>,
	// 链接类型时 原生target属性
	target: {
		type: String as PropType<(typeof targetType)[number]>,
		default: targetType[2],
	},
	type: {
		type: String as PropType<(typeof buttonType)[number]>,
		default: buttonType[0],
	},
	href: String,
	danger: Boolean,
	ghost: Boolean,
} as const;

export const buttonEmits = {
	/**
	 * @description 点击按钮后触发的事件
	 * @param event
	 */
	click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;

export type ButtonType = ButtonProps['type'];
export type ButtonNativeType = ButtonProps['nativeType'];
