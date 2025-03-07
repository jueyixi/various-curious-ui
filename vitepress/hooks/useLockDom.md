# useLockDom 关闭滚动条


## 基础用法
`useLockDom` 提供了一个 `state` 参数，当它的值变化后，关闭显示当前页面的滚动条。

::: tip
点击按钮控制页面的滚动条显示隐藏
:::

:::demo
```vue
<template>
  <div>
    <vc-button @click="handleClick"  type="primary" >{{!flag?'关闭':'打开'}}</vc-button>
  </div>
</template>
<script setup lang="ts">
import { useLockDom } from 'vc-hooks';
import {ref } from 'vue';
const flag = ref(false)
const handleClick = () => {
  flag.value=!flag.value;
  useLockDom(flag.value);
}
</script>
```
:::

## Attributes

| 参数  | 说明 | 类型   | 可选值              | 默认值  |
| :----: | ---- | :------: | :-----------------: | :-------: |
| state | 状态 | `boolean` | `false` \\| `true`          | `false` |


