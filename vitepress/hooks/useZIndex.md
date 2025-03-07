# useZIndex 层级管理


## 基础用法
`useZIndex` 接收一个 `name` 参数作为属性名，同时提供了 `getIndex` 方法获取到当前最新zIndex值，`setIndex` 方法将最新的zIndex值加一。

::: tip
点击按钮开始更新zIndex值。
:::

:::demo
```vue
<template>
  <div>
    {{count}}
    <vc-button @click="handleClick()"  type="primary" >下一个</vc-button>
  </div>
</template>
<script setup lang="ts">
import { useZIndex } from 'vc-hooks';
import {ref } from 'vue';
const {getIndex, setIndex} = useZIndex("popper")
const count = ref(0)

const handleClick = () => {
  setIndex()
  count.value = getIndex()
}
</script>
```
:::

## Attributes

| 参数  | 说明 | 类型   | 可选值              | 默认值  |
| :----: | ---- | :------: | :-----------------: | :-------: |
| name | 属性名 | `string` | -         | - |


