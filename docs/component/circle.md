# Circle 圆形进度条

圆形进度条。

## 基础用法

- 使用时只需要传递一个 `number` / `string` 类型的值即可。
- 使用 `showText` 可控制文案的显示。
- 使用 `maxValue` 可自由控制进度条比例尺。
- 使用 `lineCap` 可控制进度条的首尾样式。

:::demo
```vue
<template>
    <div class="flex-item">
        <div class="circle">
            <vc-circle :value="50" />
        </div>
        <div class="circle">
            <vc-circle :value="50" show-text />
        </div>
        <div class="circle">
            <vc-circle :value="80" :maxValue="200" showText></vc-circle>
        </div>
        <div class="circle">
            <vc-circle :value="80" lineCap="round" :maxValue="200" showText></vc-circle>
        </div>
    </div>
</template>

<style lang="less">
.circle{
    width:150px;
}
</style>
```
:::

## 渐变背景和渐变色

:::demo
```vue
<template>
    <div class="flex-item">
        <div class="circle">
            <vc-circle :value="0" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" showText />
        </div>
        <div class="circle">
            <vc-circle :value="50" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" showText />
        </div>
        <div class="circle">
            <vc-circle :value="0" :color="['#0ae787', '#fe653c']" showText />
        </div>
        <div class="circle">
            <vc-circle :value="100" :color="['#0ae787', '#fe653c']" showText />
        </div>
    </div>
</template>

<style lang="less">
.circle{
    width:150px;
}
</style>
```
:::

## 条形图

:::demo
```vue
<template>
    <div class="flex-item">
        <div class="circle">
            <vc-circle :part="4" :partGap="5" showText />
        </div>
            <div class="circle">
                <vc-circle :animate="true" :value="100" :part="4" :partGap="5" showText />
            </div>
        <div class="circle">
            <vc-circle color="#00bbff" :value="50" :part="40" :partGap="6" showText />
        </div>
        <div class="circle">
            <vc-circle :color="['#0ae787', '#fe653c']" :value="50" :part="20" :partGap="4" showText />
        </div>
    </div>
</template>

<style lang="less">
.circle{
    width:150px;
}
</style>
```
:::

## 自定义

:::demo
```vue
<template>
    <div class="flex-item">
        <div class="circle">
            <vc-circle :width="80" :value="50" :strokeWidth="40" />
        </div>
            <div class="circle">
                <vc-circle :gradient="gradient" :value="100" :part="10" :partGap="4" />
            </div>
        <div class="circle">
            <vc-circle :gradients="gradients2" :value="50" :part="10" :partGap="4" />
        </div>
        <div class="circle">
            <vc-circle :value="50" show-text :clockWise="false" />
        </div>
    </div>
</template>

<script setup lang="ts">
const gradient = {
    id: 'svg-linear-gradient001',
    x1: '100%',
    y1: '100%',
    x2: '0%',
    y2: '0%',
    colorStops: [
        {
            offset: '0%',
            color: '#0ae787',
        },
        {
            offset: '100%',
            color: '#fe653c',
        },
    ],
};
const gradients2 = [
    {
        id: 'svg-linear-gradient002',
        x1: '100%',
        y1: '100%',
        x2: '0%',
        y2: '0%',
        colorStops: [
            {
                offset: '0%',
                color: 'rgba(255,255,255,1)',
            },
            {
                offset: '100%',
                color: 'rgba(0,0,0,1)',
            },
        ],
    },
    {
        id: 'svg-linear-gradient003',
        x1: '100%',
        y1: '100%',
        x2: '0%',
        y2: '0%',
        colorStops: [
            {
                offset: '0%',
                color: '#0ae787',
            },
            {
                offset: '100%',
                color: '#fe653c',
            },
        ],
    },
];
</script>

<style lang="less">
.circle{
    width:150px;
}
</style>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| animate | 是否开启动画 | `boolean` | `true`    | `false` |
| animation | 动画原生属性，请参考[SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/animate) |`object` | -     | `{}` |
| background | 背景色 | `string` / `array<string>` | -    | - |
| begin | 动画开始时间 | `string` | -     | `'0s'` |
| by | 动画开始时间 | `string` | -     | `'0s'` |
| clockWise | 是否为顺时针方向| `boolean` | `false`    | `true` |
| color | 进度条颜色 | `string` / `array<string>` | -    | - |
| dur | 动画持续时间,时间为0s时不播放动画 | `string` | -     | `'3s'` |
| fill | 动画结束时的终止状态 | `string` | `remove`     | `freeze` |
| from | 动画作用属性的开始值 | `string` | -     | `'0s'` |
| gradient | 自定义渐变色（对象格式） | `Gradients` | -     | - |
| gradients | 自定义渐变色（数组格式） | `array<Gradients>` | -     | - |
| lineCap | 进度条样式 | `string` | `round`     | `butt` |
| maxValue | 进度条最大值 | `string` / `number` | -     | 100 |
| part | 分割块数 |`number` | -     | 1 |
| partGap | 栅格间隔 |`number` | -     | 5 |
| repeatCount | 动画播放次数 | `string` |  `indefinite` / 具体次数    | `'1'` |
| separateColor | 分割线颜色 |`string` | -     | `'#fff'` |
| showText | 是否显示文案| `boolean` | `true`    | `false` |
| strokeWidth | 进度条宽度 | `string` / `number` | -     | 6 |
| to | 动画作用属性的结束值 | `string` | -     | `'0s'` |
| value | 进度条数值 | `string` / `number` | -     | 0 |
| width | 画布宽度 |`number` | -     | 100 |

::: tip
from、to、by相互之间有制约关系：

1. 如果动画的起始值与元素的默认值是一样的，from参数可以省略。

2. to、by两个参数至少需要有一个出现。否则没有动画效果。to表示绝对值，by表示相对值。以位移距离为例子，如果from是100, to值为160，则表示移动到160这个位置；如果by值是160，则表示移动到100+160=260这个位置。

3. 如果to、by同时出现，则只识别to。

4. 详细信息请查看 https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/animate
:::

###  Slots

| 插槽名称 | 说明 |类型|
|:--:|--|--|
|text|自定义文案|`number`|