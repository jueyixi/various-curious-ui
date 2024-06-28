import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

const ElementSize = ['small', 'middle', 'large', 'mini'] as const;

const nativeType = ['button', 'submit', 'reset'] as const;

const buttonType = ['default', 'primary','success','warinng', 'dashed'] as const;

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
	disabled: Boolean,
	ghost: Boolean,
	loading: Boolean,
	link: Boolean,
	text: Boolean,
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
