# various-curios-ui

_该组件库采用 `Vue3`+ `Vite`实现！_<br/>
_持续探索更新中...！_<br/>

## Document & Online preview

[various-curios-ui](https://gitee.com/jueyixi/various-curious-ui)

## Install & Use

```bash
pnpm i various-curios-ui
# or
npm install various-curios-ui
# or
yarn add various-curios-ui
```

Import and register component

**Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VC from 'various-curios-ui'

const app = createApp(App)
app.use(VC)
```

**Local**

```vue
<script setup>
import { Button } from 'various-curios-ui'
</script>
```

## Project（workspace）

- Get the project code

```sh
git clone https://gitee.com/jueyixi/various-curious-ui.git
```

- Install dependencies

```sh
cd vc

pnpm i
```

- Run project

```sh
pnpm dev
```

- Install Root dependencies

```sh
pnpm install -wD xxx
pnpm uninstall -w xxx
```

- Install Child dependencies

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
