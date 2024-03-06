import { createApp } from 'vue'
import App from './app.vue'
import * as VC from 'various-curious-ui'

const app = createApp(App)
app.use(VC).mount('#app')
