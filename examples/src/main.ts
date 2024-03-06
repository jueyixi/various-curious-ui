/*
 * @Date: 2023-10-17 11:30:47
 * @Auth: 2659946805@qq.com
 * @LastEditors: 2659946805@qq.com
 * @LastEditTime: 2023-10-17 11:34:40
 * @FilePath: \dcqc-component\examples\main.js
 */
import { createApp } from 'vue'
import App from './app.vue'
import * as VC from 'various-curious-ui'

const app = createApp(App)
app.use(VC).mount('#app')
