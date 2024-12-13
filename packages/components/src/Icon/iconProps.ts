import { PropType } from 'vue';
import type { ExtractPropTypes, StyleValue } from 'vue';
export const IconProps = {
	/**
	 * @description 图标的名称
	 */
	name: String,
	/**
	 * @description 图标的样式
	 */
	style: [String, Object, Array] as PropType<StyleValue>,
};
