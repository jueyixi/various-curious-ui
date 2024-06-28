# 快速上手

## 安装

使用命令安装
::: code-group

```shell [pnpm]
pnpm install various-curious-ui

```

```shell [npm]
npm install various-curious-ui --save
```

:::







## 全局注册


> App.vue

```js
import { createApp } from 'vue'
import App from './app.vue'

import * as vc from 'various-curious-ui' 
import 'various-curious-ui/style/index.less' 
const app = createApp(App) 
app.use(vc).mount('#app') 
```

```vue
<template>
  <vc-button />
</template>

<script setup></script>
```

## 按需引入

> button.vue

```vue
<template>
  <vc-button>按钮</vc-button>
</template>

<script setup>
import { VcButton } from 'various-curious-ui'
</script>
```
## 报错及解决方式
::: warning



`config文件中`如果安装完成之后控制台报错`Uncaught TypeError:Cannot read properties of null (reading 'isCE')`在配置文件中
```js
 resolve: {
	  dedupe: [
	    'vue'
	  ]
},
   		

```
:::
::: warning

在`webpack`中控制台报错`Uncaught TypeError:Cannot read properties of null (reading 'isCE')`
```js
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve("./node_modules/vue"),
      },
    },
  },
  // ...
});
```
:::