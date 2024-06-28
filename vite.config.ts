import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'

export default defineConfig({
	base: '/various-curious-ui',
	plugins: [vue()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'packages/components/src'),
			'@style': path.resolve(__dirname, 'packages/components/style'),
		},
		// 省略文件扩展名
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
	},
	css: {
		// css预处理
		preprocessorOptions: {
			less: {
				charset: false,
				additionalData: `@import "@style/index.less";`, // 引入基础样式表
				javascriptEnabled: true, // less中开启js写法
				globalVars: {}, // 全局样式
			},
		},
	},
	server: {
		host: true,
		open: true,
		port:8090
	},
});

