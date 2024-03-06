/*
 * @Date: 2023-10-17 14:04:27
 * @Auth: 2659946805@qq.com
 * @LastEditors: 2659946805@qq.com
 * @LastEditTime: 2023-11-10 17:12:43
 * @FilePath: \various-curious-ui\packages\components\vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import * as path from 'path'

export default defineConfig({
	build: {
		target: 'modules',
		outDir: 'es',
		minify: false,
		rollupOptions: {
			external: ['vue'],

			input: ['src/index.ts'],
			output: [
				{
					format: 'es',
					entryFileNames: '[name].js',
					preserveModules: true,
					dir: 'es',
					preserveModulesRoot: 'src',
				},
				{
					format: 'cjs',
					entryFileNames: '[name].js',
					preserveModules: true,
					dir: 'lib',
					preserveModulesRoot: 'src',
				},
			],
		},
		lib: {
			entry: './src/index.js',
			formats: ['es', 'cjs'],
		},
	},
	plugins: [
		vue(),
		dts({
			entryRoot: './src',
			outputDir: ['./es/src', './lib/src'],
			//指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
			tsConfigFilePath: './tsconfig.json',
		}),
	],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src'),
			'@style': path.resolve(__dirname, 'style'),
		},
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
});
