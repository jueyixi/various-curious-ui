/*
 * @Date: 2023-10-17 11:30:47
 * @Auth: 2659946805@qq.com
 * @LastEditors: 2659946805@qq.com
 * @LastEditTime: 2023-11-01 11:04:42
 * @FilePath: \various-curious-ui\src\main.ts
 */
import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index';
import * as VC from 'various-curious-ui';
import "various-curious-ui/style/index.less"
const app = createApp(App);

app.use(VC).use(router).mount('#app');
