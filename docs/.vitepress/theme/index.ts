import DefaultTheme from 'vitepress/theme';
import * as vc from 'various-curious-ui';
import 'various-curious-ui/style/index.less';
import * as Icons from '@various-curious-ui/icons';
import * as examples from '../example';
import { createRouter, createWebHistory } from 'vue-router';
import { useComponents } from './useComponents';

import 'vitepress-theme-demoblock/dist/theme/styles/index.css';

import "../styles/index.less";

//全局注册组件
export default {
	...DefaultTheme,
	enhanceApp: async (ctx) => {
		const { app } = ctx;
		DefaultTheme.enhanceApp(ctx);
		useComponents(app);
		app.use(vc);
		for (const [key, component] of Object.entries(Icons)) {
			app.component(key, component)
		}
		examples.default.map((item: any) => {
			item.forEach((each) => {				
				app.component(`${each.name}`, each);
			});
		});

		// if (!(import.meta as any).env.SSR) {
		// 	app.use(
		// 		createRouter({
		// 			history: createWebHistory(),
		// 			routes: [],
		// 		}),
		// 	);
		// }
	},
};
