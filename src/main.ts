import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index';
import * as VC from 'various-curious-ui';
import "various-curious-ui/style/index.less"
const app = createApp(App);

app.use(VC).use(router).mount('#app');
