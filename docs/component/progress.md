# Progress 标准进度条

用于展示操作进度，显示具体状态。

## 基础用法

- 默认样式为直角，不显示文案，使用时只需要传递一个 `number` / `string` 类型的值即可。
- 使用 `round` 可改为圆角样式进度条。
- 使用 `showText` 可控制文案的显示。
- 使用 `maxValue` 可自由控制进度条比例尺。

:::demo
```vue
<template>
    <div class="flex-item-column">
        <vc-progress :value="100"></vc-progress>
        <vc-progress :value="75" round></vc-progress>
        <vc-progress :value="20" round showText></vc-progress>
        <vc-progress :value="20" :maxValue="200" round showText></vc-progress>
    </div>
</template>
```
:::

## 配置颜色

- 使用 `background` 可配置背景色。
- 使用 `color` 可配置进度条颜色。

:::demo
```vue
<template>
    <div class="flex-item-column">
        <vc-progress :value="70" background="transparent" />
        <vc-progress :value="20" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" />
        <vc-progress :value="75" color="#3cc251" />
        <vc-progress :value="75" :color="['rgba(255,0,0,0.01)', '#3cc251']" />
    </div>
</template>
```
:::

## 进度条状态

状态分为 `primary` 、 `success` 、 `warning` 、 `danger` 四种风格。

:::demo
```vue
<template>
    <div class="flex-item-column">
        <vc-progress :value="75" status="primary" showText> </vc-progress>
        <vc-progress :value="75" status="success" showText> </vc-progress>
        <vc-progress :value="75" status="warning" showText> </vc-progress>
        <vc-progress :value="75" status="danger" showText> </vc-progress>
    </div>
</template>
```
:::

## 其他配置项

- 使用 `strokeWidth` 可修改进度条宽度。
- 使用 `animate` 可开启动画效果。
- 配置 `repeatCount` 属性为 `infinite` 即可无限循环动画。

:::demo
```vue
<template>
    <div class="flex-item-column">
        <vc-progress :value="75" :strokeWidth="20"> </vc-progress>
        <vc-progress :value="75" animate> </vc-progress>
        <vc-progress :value="75" animate repeatCount="infinite"> </vc-progress>
        <vc-progress :value="75" :show-text="true" round color="#3cc251">
            <template #text="{ percent }">
                完成进度{{ percent }}%
            </template>
        </vc-progress>
    </div>
</template>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| animate | 是否开启动画 | `boolean` | `true`    | `false` |
| background | 背景色 | `string` / `array<string>` | -    | - |
| color | 进度条颜色 | `string` / `array<string>` | -    | - |
| delay | 动画开始前的延迟时间 | `string` | -     | `'0s'` |
| dur | 动画持续时间,时间为0s时不播放动画 | `string` | -     | `'3s'` |
| fill | 动画结束时的终止状态 | `string` | `remove`     | `forwards` |
| maxValue | 进度条最大值 | `string` / `number` | -     | 100 |
| repeatCount | 动画播放次数 | `string` |  `infinite` / 具体次数    | `'1'` |
| round | 是否为圆角| `boolean` | `true`    | `false` |
| showText | 是否显示文案| `boolean` | `true`    | `false` |
| strokeWidth | 进度条宽度 | `string` / `number` | -     | 10 |
| transitionName | 动画类型 | `string` | `linear` \\| `ease-in` \\| `ease-out`    | `ease` |
| value | 进度条数值 | `string` / `number` | -     | 0 |

###  Slots

| 插槽名称 | 说明 |类型|
|:--:|--|--|
|text|自定义文案|`number`|