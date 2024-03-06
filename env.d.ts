declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.png'
declare module 'xlsx'
declare module '*.vue' {
	import type { DefineComponent } from 'vue';

	const vueComponent: DefineComponent<{}, {}, any>;

	export default vueComponent;
}