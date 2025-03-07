# Ring 圆环进度条

圆环进度条。

## 基础用法

使用时只需要传递一个 `number` / `string` 类型的值即可。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-ring :value="0" />
        <vc-ring :value="1" />
        <vc-ring :value="50" />
        <vc-ring :value="100" />
    </div>
</template>
```
:::

## 数值格式化

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-ring :value="53.2312" :animate="true" percent="0" />
        <vc-ring :value="53.2312" :animate="true" percent="2" />
        <vc-ring :value="60" :animate="true" percent="2" />
        <vc-ring :value="60" :animate="true" percent="2" format/>
    </div>
</template>
```
:::

## 设置初始步长和步进值

:::demo
```vue
<template>
    <vc-ring :value="40" startStep="30" step="0.05" percent="2" :animate="true" format />
</template>
```
:::

## 渐变色

:::demo
```vue
<template>
    <vc-ring :value="100" :color="['#fff','#0dd7de']" :animate="true" />
</template>
```
:::

## 自定义

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-ring :value="40" lineCap="round" />
        <vc-ring :value="40" innerBackground="rgba(0,0,0,0.05)" innerRadius="6" />
        <vc-ring :value="20" strokeWidth="15" />
        <vc-ring :value="100" color="rgba(255,0,0,0.5)" innerBackground="rgba(255,0,0,0.1)" innerRadius="6" title="自定义标题" subTitle="" />
    </div>
</template>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| animate | 是否开启动画 | `boolean` | `true`    | `false` |
| background | 进度条背景色 | `string` | -    | `#d9d9d9` |
| color | 进度线颜色 | `string` / `array<string>` | -    | `#329cff` |
| format | 数值格式化（`percent`存在时，数值的`.00`是否需要去除） | `boolean` | `true`    | `false` |
| id | 唯一标识 | `string` | -    | 自动生成 |
| interBackground | 内圆背景色 | `string` | -    | - |
| innerRadius | 内圆半径 | `string` / `number` | -     | - |
| lineCap | 进度条样式 | `string` | `round`     | `square` |
| maxValue | 刻度最大值 | `string` / `number` | -     | 100 |
| percent | 数值的小数点位数 | `string` / `number` | -     | - |
| radius | 半径 | `string` / `number` | -     | 80 |
| startStep | 初始值 | `string` / `number` | -     | 0 |
| step | 步长 | `string` / `number` | -     | 1 |
| strokeWidth | 进度线宽度 | `string` / `number` | -     | 10 |
| subTitle | 副标题 | `string` | -    | `%` |
| subTitleStyle | 副标题样式 | `SubTextStyle` | -    | - |
| title | 主标题 | `string` | -    | - |
| titleStyle | 主标题样式 | `TextStyle` | -    | - |
| value | 数值 | `string` / `number` | -     | 0 |