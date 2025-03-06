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

- 安装依赖包

```sh
cd vc

pnpm i
```

- 运行项目

```sh
pnpm dev
```

- 根目录安装依赖包

```sh
pnpm install -wD xxx
pnpm uninstall -w xxx
```

- 子模块安装依赖包

```sh
# -S 安装到正式依赖(dependencies)
# -D 安装到开发依赖(devDependencies)

## 1.为指定模块安装外部依赖
pnpm --filter a install -S lodash 
pnpm --filter a install -D lodash

pnpm add axios --filter app2

## 2.指定内部模块之间的互相依赖
# 指定 a 模块依赖于 b 模块
pnpm --filter a install -S b

pnpm install dayjs --filter app2
```

<div>

```vue
<script setup>
//上线修改package.json
//"main": "lib/index.js",
//"module": "es/index.js",
//复盘任务
</script>
```

</div>
