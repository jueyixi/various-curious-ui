/*
 * @Date: 2023-10-20 11:36:54
 * @Auth: 2659946805@qq.com
 * @LastEditors: 2659946805@qq.com
 * @LastEditTime: 2023-10-20 13:34:14
 * @FilePath: \various-curious-ui\.eslintrc.js
 */
/* eslint-env node */
/* eslint-disable no-new */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
		es2022: true,
	},
	extends: ['plugin:vue/vue3-essential','eslint:recommended', '@vue/eslint-config-typescript'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'vue/comment-directive': 'off',
		'no-var': 'error',
		'no-undef': 0,
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['index'],
			},
		],
	},
	globals: {
		process: true,
		__dirname: true,
	},
};
