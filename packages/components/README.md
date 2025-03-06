# various-curios-ui

- TypeScript 
- Tree Shaking
- Vue3 Composition API

## 相关链接

- github：[various-curios-ui](https://github.com/jueyixi/various-curious-ui)

## 安装

```bash
pnpm i various-curios-ui
# or
npm install various-curios-ui
# or
yarn add various-curios-ui
```

注册导入组件

**全局注册**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import * as VC from 'various-curious-ui';
import "various-curious-ui/style/index.less"

const app = createApp(App)
app.use(VC)
```

**按需导入**

```vue
<script setup>
import { VcButton } from 'various-curios-ui'
</script>
```

## 相关命令

- 获取项目代码

```sh
git clone https://github.com/jueyixi/various-curious-ui.git
```