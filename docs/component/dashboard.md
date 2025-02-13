# Dashboard 仪表盘

特殊进度条之一，可用于可视化样式需求。

## 基础用法

使用时只需要传递一个 `number` / `string` 类型的值即可。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-dashboard :value="0" />
        <vc-dashboard :value="1" />
        <vc-dashboard :value="50" />
        <vc-dashboard :value="100" />
    </div>
</template>
```
:::

## 刻度线与刻度值

自定义刻度值和刻度线。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-dashboard :value="37.5" :maxValue="150" />
        <vc-dashboard :value="75" :maxValue="200" splitNumber="11" />
        <vc-dashboard :value="50" :maxValue="200" splitColor="rgba(255,0,0,0.5)" />
        <vc-dashboard :value="100" :maxValue="200" :splitWidth="4" />
    </div>
</template>
```
:::

## 多段仪表盘

`color` 和 `background` 属性不仅支持纯色渲染，也支持多色渲染，只需要传递一个颜色数组即可。

::: tip
`color` 和 `background` 属性传递数组时，需要配置占比和对应颜色值。`offset` 为占比，取值范围为0-1。
:::

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-dashboard :color="colors" :background="backgroundColor" :value="50" />
        <vc-dashboard :color="colors" :background="backgroundColor" :value="100" />
    </div>
</template>

<script setup lang="ts">
const colors = [
    {
        offset: 0.25,
        color: "rgba(255,0,0,1)"
    },
    {
        offset: 0.5,
        color: "rgba(255,255,0,1)"
    },
    {
        offset: 0.75,
        color: "rgba(0,0,255,1)"
    },
    {
        offset: 1,
        color: "rgba(0,255,0,1)"
    }
]
const backgroundColor = [
    {
        offset: 0.25,
        color: "rgba(255,0,0,0.3)"
    },
    {
        offset: 0.5,
        color: "rgba(255,255,0,0.3)"
    },
    {
        offset: 0.75,
        color: "rgba(0,0,255,0.3)"
    },
    {
        offset: 1,
        color: "rgba(0,255,0,0.3)"
    }
]
</script>
```
:::

## 自定义标题

- 标题分为主标题和副标题，如果不配置主标题则显示进度值。
- 只存在主标题不存在副标题时，主标题默认贴近底部显示。
- 主标题和副标题同时存在时，副标题贴边，主标题在副标题上方。
- 主标题不存在，只有副标题存在时，副标题显示在进度值下方。
- 主副标题都存在相关样式配置。
- 主标题样式配置中的 `unit` 属性代表单位，副标题样式中不适用这个属性。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-dashboard :value="50" title="仪表盘" />
        <vc-dashboard :value="50" :titleStyle="{unit:'分',fontSize:28}" />
        <vc-dashboard :value="20" subTitle="（℃）" />
        <vc-dashboard :value="100" subTitle="%" :subTitleStyle="{color:'red',fontSize:'18'}" />
    </div>
</template>
```
:::

## 自定义仪表盘

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-dashboard :value="100" :color="colors" :background="backgroundColor" :semicircle="false" :startAngle="-45" :endAngle="225" :splitNumber="21"  />
        <vc-dashboard radius="170" :value="60" maxValue="120" :semicircle="false" :startAngle="-270" :endAngle="90" :splitNumber="13" :middleTitle="true" splitWidth="1" innerRadius="100" splitSpace="5"  />
    </div>
</template>

<script setup lang="ts">
const colors = [
    {
        offset: 0.25,
        color: "rgba(255,0,0,1)"
    },
    {
        offset: 0.5,
        color: "rgba(255,255,0,1)"
    },
    {
        offset: 0.75,
        color: "rgba(0,0,255,1)"
    },
    {
        offset: 1,
        color: "rgba(0,255,0,1)"
    }
]
const backgroundColor = [
    {
        offset: 0.25,
        color: "rgba(255,0,0,0.3)"
    },
    {
        offset: 0.5,
        color: "rgba(255,255,0,0.3)"
    },
    {
        offset: 0.75,
        color: "rgba(0,0,255,0.3)"
    },
    {
        offset: 1,
        color: "rgba(0,255,0,0.3)"
    }
]
</script>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| background | 进度条背景色 | `string` / `array<OffsetColor>` | -    | `rgba(50, 156, 255, 0.5)` |
| color | 进度线颜色 | `string` / `array<OffsetColor>` | -    | `#329cff` |
| endAngle | 结束角度 | `number` | -360~360     | 180 |
| id | 唯一标识 | `string` | -    | 自动生成 |
| interBackground | 内圆背景色 | `string` / `array<string>` | -    | `rgba(0, 0, 0, 0.7)` |
| innerRadius | 内圆半径 | `string` / `number` | -     | 110 |
| maxValue | 刻度最大值 | `string` / `number` | -     | 100 |
| outerBackground | 外圆进度条背景色 | `string` | -    | `rgba(217, 217, 217,1)` |
| outerRadius | 外圆半径 | `string` / `number` | -     | 130 |
| outerWidth | 外圆进度条宽度 | `string` / `number` | -     | 20 |
| radius | 半径 | `string` / `number` | -     | 150 |
| semicircle | 半圆 | `boolean` | `false`     | `true` |
| middleTitle | 主标题文字垂直居中（整圆效果时，主标题在垂直方向上居中显示） | `boolean` | `false`     | `true` |
| splitColor | 刻度线颜色 | `string` | -    | `rgba(0, 0, 0, 0.5)` |
| splitNumber | 刻度值份数（包含0刻度） | `string` / `number` | -     | 5 |
| splitSpace | 刻度线与内外圆的间距 | `string` / `number` | -     | 2 |
| splitStyle | 刻度值样式 | `SplitStyle` | -    | - |
| splitWidth | 刻度线宽度 | `string` / `number` | -     | 2 |
| startAngle | 开始角度 | `number` | -360~360     | 0 |
| startStep | 初始值 | `string` / `number` | -     | 0 |
| step | 步长 | `string` / `number` | -     | 1 |
| strokeWidth | 进度线宽度 | `string` / `number` | -     | 5 |
| subTitle | 副标题 | `string` | -    | - |
| subTitleStyle | 副标题样式 | `SubTextStyle` | -    | - |
| title | 主标题 | `string` | -    | - |
| titleStyle | 主标题样式 | `TextStyle` | -    | - |
| value | 数值 | `string` / `number` | -     | 0 |

### PropsType

```ts:no-line-numbers
// import type {OffsetColor,SubTextStyle,TextStyle,SplitStyle} from "@various-curious-ui/typings"
type OffsetColor = {
	offset: string | number;
	color: string;
	startStep?: number;
	endStep?: number;
}

type SplitStyle = {
	fontSize?:number,
	fontWeight?:number | string,
	fontFamily?:string,
	textBaseline?:string,
	color?:string,
	textAlign?:string,
}

type SubTextStyle = SplitStyle & {
	top?:number,
	bottom?:number,
	left?:number,
	right?:number,
}

type TextStyle = SubTextStyle & {
	unit?:string,
}
```