# useCountDown 倒计时


## 基础用法
`useCountDown` 提供了一个 `count` 返回值和一个 `countDown` 方法。`count` 返参可以实时读取倒计时秒数。`countDown` 接收两个参数：`second` 倒计时秒数，`ck` 倒计时结束的回调方法。

::: tip
点击按钮开始倒计时
:::

:::demo
```vue
<template>
  <div>
    <vc-button @click="handleClick"  type="primary" >{{flag ? count : '开始' }}</vc-button>
  </div>
</template>
<script setup lang="ts">
import { useCountDown } from 'vc-hooks';
import {ref } from 'vue';
const flag = ref(false)
const {count, countDown} = useCountDown()
const handleClick = () => {
  flag.value = true;
  countDown(10,() => {
    flag.value = false
  });
}
</script>
```
:::


