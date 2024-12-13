import { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

const Types = ['default', 'vertical'] as const;

export const gridBarProps = {
	type: {
		type: String as PropType<(typeof Types)[number]>,
		default: Types[0],
		required:true
	},
} as const;

export type GridBarProps = ExtractPropTypes<typeof gridBarProps>;
