import type { ExtractPropTypes, PropType } from 'vue';
import type Bar from './bar.vue';

export const barProps = {
	always: {
		type: Boolean,
		default: true,
	},
	width: String,
	height: String,
	barWidth: [String, Number] as PropType<string | number>,
	ratioX: {
		type: Number,
		default: 1,
	},
	ratioY: {
		type: Number,
		default: 1,
	},
	gap: Number,
} as const;

export const barEmits = [];

export type BarProps = ExtractPropTypes<typeof barProps>;
export type BarEmits = typeof barEmits;
export type BarInstance = InstanceType<typeof Bar>;