import { commonComponent,animateComponent,DataComponent,hooksComponent } from './utils/component';
import path from 'path'
import { demoBlockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';

export default {
	base: '/various-curious-ui',
	 lang: 'en-ZH',
	title: "Various Curious Ui",
	titleTemplate: "使用文档",
	description: "vue3,vite,ui,svg,canvas",
	vite: {
		plugins: [demoblockVitePlugin()],
		server: {
			port: 5174,
			host: true,
			open: false,
		},
		preview: {
			port: 4174,
			host: true,
			open: false,
		},
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, '../../packages/components/src'),
				'@hooks': path.resolve(__dirname, '../../packages/components/hooks'),
				'@style': path.resolve(__dirname, '../../packages/components/style'),
				'@icons': path.resolve(__dirname, '../../packages/components/icons'),
				'@typings': path.resolve(__dirname, '../../packages/components/typings'),
				'@utils': path.resolve(__dirname, '../../packages/components/utils'),
			},
		},
		css: {
			preprocessorOptions: {
				less: {
					additionalData: `@import "@style/index.less";`,
				},
			},
		},
	},
	themeConfig: {
		siteTitle: 'Various Curious Ui',
		logo: '/logo.svg',
		outlineTitle: 'CONTENTS',
		darkMode:true,
		search: {
			provider: 'local',
			options: {
				locales: {
					root: {
						translations: {
							button: {
								buttonText: '搜索文档',
								buttonAriaLabel: '搜索文档'
							},
							modal: {
								noResultsText: '无法找到相关结果',
								resetButtonTitle: '清除查询条件',
								footer: {
									selectText: '选择',
									navigateText: '切换',
									closeText: '关闭'
								}
							}
						}
					}
				}
			}
		},
		nav: [
			{ text: '指南', link: '/guide/method' },
			{ text: '组件', link: '/component/button' },
			{ text: 'Hooks', link: '/hooks/useLockDom' },
			{ text: '技术分享', link: '/shareSkill/index' },
			{ text: 'gitee', link: 'https://gitee.com/jueyixi/various-curious-ui' },
		],
		sidebar: {
			'/component/': [
				{
					text: "通用组件",
					items:commonComponent
				},
				{
					text: "数据展示",
					items:DataComponent
				},
				{
					text: "动画组件",
					items:animateComponent
				}
			],
			'/guide/': [
				{
					text: '指南',
					items: [
						{
							text: '快速上手',
							link: '/guide/method',
							activeMatch: '/guide/method',
						},
					],
				},
			],
			'/hooks/': hooksComponent
		},
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024-present YiXi Jue',
		},
		docFooter: {
			prev: '上一页',
			next: '下一页'
		},
		// editLink: {
		// 	pattern: ({ filePath }) => {
		// 		return `https://gitee.com/jueyixi/various-curious-ui/docs/${filePath}`;
		// 	},
		// },
		demoblock: {
			'root': {
				'view-source': '查看源代码',
				'hide-source': '隐藏源代码',
				'edit-in-editor': '在 Playground 中编辑',
				'edit-on-github': '在 Github 中编辑',
				'copy-code': '复制代码',
				'copy-success': '复制成功',
				'copy-error': '复制失败',
			}
		}
	},
	markdown: {
		lineNumbers: true,
		theme: {
			light: "vitesse-light",
			dark: "vitesse-dark",
		},
		config(md) {
			md.use(demoBlockPlugin);
		},
	},
};
