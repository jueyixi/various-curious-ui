# AniNumber 数值动画

用于数值需要有动画效果的场景。

## 基础用法

只需要传递一个 `Number` 类型的值即可。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-ani-number :value="100"></vc-ani-number>
        <vc-ani-number :value="75"></vc-ani-number>
        <vc-ani-number :value="20"></vc-ani-number>
    </div>
</template>
```
:::

## 修改属性值

通过 `initial` 属性可修改动画初始时的值。
通过 `precision` 属性可修改数据变动的精度。
通过 `step` 属性可修改数值增加的步长。

:::demo
```vue
<template>
    <div class="flex-item">
        <span>
            定义初始值：
            <vc-ani-number :value="100" :initial="50"></vc-ani-number>
        </span>
        <span>
            定义数值精度：
            <vc-ani-number :value="100" precision="2"></vc-ani-number>
        </span>
        <span>
            自定义步长：
            <vc-ani-number :value="1000" :step="5"></vc-ani-number>
        </span>
    </div>
</template>
```
:::

## 数据格式化

通过 `format` 属性的返回值可以对数据做格式化处理。

:::demo
```vue
<template>
    <div>
        百分比：
        <vc-ani-number :value="100" :format="format"></vc-ani-number>
    </div>
</template>
<script setup lang="ts">
const format = (value) => {
    return value + '%';
}
</script>
```
:::

## 动画相关

通过 `loopAnimate` 属性可控制动画是否循环。
通过 `delay` 属性可修改两次动画的间隔时间。

:::demo
```vue
<template>
    <div class="flex-item">
        <span>
            循环动画：
            <vc-ani-number :value="100" :loopAnimate="true"></vc-ani-number>
        </span>
        <span>
            设置动画间隔时间：
            <vc-ani-number :value="100" :loopAnimate="true" :delay="5000"></vc-ani-number>
        </span>
    </div>
</template>
```
:::

## 可控动画

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-button-group>
            <vc-button @click="handleChange">开始</vc-button>
            <vc-button @click="handlePlay">播放</vc-button>
        </vc-button-group>
        <vc-ani-number :value="100" ref="aniNumberRef" :animate="isAnimate" @begin="begin" @finish="finish" @play="play"></vc-ani-number>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const aniNumberRef = ref()
const isAnimate = ref(false)

// 只控制一次动画
const handleChange = () => {
    isAnimate.value = true
}

// 重复播放
const handlePlay = () => {
    aniNumberRef.value?.begin()
}

// 开始
const begin = (aniNumRef) => {
    console.log("begin:" ,aniNumRef.value)
}

// 结束
const finish = (aniNumRef) => {
    console.log("finish:" , aniNumRef)
}

// 播放
const play = ({ref,value}) => {
    console.log("play:" , ref , value)
}
</script>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| animate | 是否开启动画 | `Boolean` | `true`    | `true` |
| delay | 上一次动画结束和下一次动画开始之间间隔时间（ms） | `Number` | -     | 1000 |
| durTime | 动画持续时间（ms） | `Number` | -     | 3000 |
| format | 文本格式化方法 | `Function` | -     | - |
| initial | 初始值 | `Number` | -     | 0 |
| value | 数值 | `Number` | -    | 0 |
| loopAnimate | 是否为循环动画 | `Boolean` |  `true`    | `false` |
| precision | 数值精度 | `String` / `Number` | -     | 0 |
| step | 步长 | `Number` | -     | 0 |

###  Expose

| 名称 | 说明 | 回调参数     |
|:--:|--|--|
|begin|开始动画|`(aniNumberRef) => void`|

###  Events

| 事件名称 | 说明 | 回调参数     |
|:--:|--|--|
|begin|开始动画|`(aniNumberRef) => void`|
|finish|结束动画|`(aniNumberRef) => void`|
|play|数值每次变动时触发|`({aniNumberRef:ref,value:Number}) => void`|