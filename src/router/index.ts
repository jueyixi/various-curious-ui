/*
 * @Date: 2023-10-31 16:46:45
 * @Auth: 2659946805@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-09 09:12:39
 * @FilePath: \various-curious-ui\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 2. 定义一些路由：每个路由都需要映射到一个组件。
import Layout from '../layout/index.vue';
import Home from '../view/home/index.vue';

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Layout,
		redirect: '/home',

		children: [
			{
				path: 'home',
				name: 'home',

				meta: { title: '主页' },
				component: Home,
			},
			{
				path: 'ani',
				name: 'ani',
				meta: { title: '动画' },
				component: () => import('../view/ani/index.vue'),
			},
			{
				path: 'icon',
				name: 'icon',
				meta: { title: '图标' },
				component: () => import('../view/icon/index.vue'),
			},
			{
				path: 'button',
				name: 'button',
				meta: { title: '按钮' },
				component: () => import('../view/button/index.vue'),
			},
			{
				path: 'calendar',
				name: 'calendar',
				meta: { title: '日历' },
				children: [
					{
						path: 'baseWeek',
						name: 'baseWeek',
						meta: { title: '基础周历' },
						component: () => import('../view/calendar/baseWeek.vue'),
					},
					{
						path: 'baseMonth',
						name: 'baseMonth',
						meta: { title: '基础月历' },
						component: () => import('../view/calendar/baseMonth.vue'),
					},
					{
						path: 'baseYear',
						name: 'baseYear',
						meta: { title: '基础年历' },
						component: () => import('../view/calendar/baseYear.vue'),
					},
					{
						path: 'index',
						name: 'index',
						meta: { title: '日历' },
						component: () => import('../view/calendar/index.vue'),
					},
				],
			},
			{
				path: 'progress',
				name: 'progress',
				meta: { title: '进度条' },
				children: [
					{
						path: 'base',
						name: 'base',
						meta: { title: '基础进度条' },
						component: () => import('../view/progress/index.vue'),
					},
					{
						path: 'ring',
						name: 'ring',
						meta: { title: '圆环进度条' },
						component: () => import('../view/progress/ring.vue'),
					},
					{
						path: 'circle',
						name: 'circle',
						meta: { title: '圆形进度条' },
						component: () => import('../view/progress/circle.vue'),
					},
					{
						path: 'dashboard',
						name: 'dashboard',
						meta: { title: '仪表盘' },
						component: () => import('../view/progress/dashboard.vue'),
					},
					{
						path: 'gridBar',
						name: 'gridBar',
						meta: { title: '栅格进度条' },
						component: () => import('../view/progress/gridBar.vue'),
					},
				],
			},
		],
	},
];
const router = createRouter({
  history: createWebHistory('various-curious-ui'),
  routes, // `routes: routes` 的缩写
});

export default router;
