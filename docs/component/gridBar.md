# GridBar 栅格进度条

栅格化进度条。

## 基础用法

- 默认样式为横向进度条，使用时只需要传递一个 `number` / `string` 类型的值即可。
- 使用 `showText` 可控制文案的显示。
- 使用 `maxValue` 可自由控制进度条比例尺。

:::demo
```vue
<template>
    <div class="flex-item-column">
        <vc-grid-bar :value="80" />
        <vc-grid-bar :value="80" show-text />
        <vc-grid-bar :value="80" :maxValue="200" showText></vc-grid-bar>
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
        <vc-grid-bar :value="70" background="transparent" />
        <vc-grid-bar :value="20" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" />
        <vc-grid-bar :value="75" color="#3cc251" />
        <vc-grid-bar :value="75" :color="['rgba(255,0,0,0.01)', '#3cc251']" />
    </div>
</template>
```
:::

## 其他配置项

- 使用 `strokeWidth` 可修改进度条宽度，`partGap` 可修改栅格间距。
- 使用 `animate` 可开启动画效果。
- 配置 `repeatCount` 属性为 `indefinite` 即可无限循环动画。
- `animation` 为SVG动画的原生属性。

:::demo
```vue
<template>
    <div class="flex-item-column">
        <vc-grid-bar :value="75" :strokeWidth="20" :partGap="10"> </vc-grid-bar>
        <vc-grid-bar :value="75" animate> </vc-grid-bar>
        <vc-grid-bar :value="75" animate repeatCount="indefinite"> </vc-grid-bar>
        <vc-grid-bar :value="75" animate :animation="{ repeatCount: 'indefinite' }"> </vc-grid-bar>
        <vc-grid-bar :value="75" :show-text="true">
            <template #text="{ percent }">
                完成进度{{ percent }}%
            </template>
        </vc-grid-bar>
    </div>
</template>
```
:::

## 竖向栅格进度条

:::demo
```vue
<template>
    <div class="flex-item" style="justify-content: space-between;flex-wrap:nowrap;height:200px;">
        <vc-grid-bar type="vertical" :value="50" show-text />
        <vc-grid-bar show-text type="vertical" :value="20">
            <template #text="{ percent }">
                <span>{{ percent }}</span>
            </template>
        </vc-grid-bar>
        <vc-grid-bar type="vertical" :value="50" show-text textPosition="top" />
        <vc-grid-bar type="vertical" :value="70" animate :height="100" show-text />
        <vc-grid-bar type="vertical" :value="70" animate :height="100" :strokeWidth="40" />
    </div>
</template>
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
| color | 进度条颜色 | `string` / `array<string>` | -    | - |
| dur | 动画持续时间,时间为0s时不播放动画 | `string` | -     | `'3s'` |
| fill | 动画结束时的终止状态 | `string` | `remove`     | `freeze` |
| from | 动画作用属性的开始值 | `string` | -     | `'0s'` |
| maxValue | 进度条最大值 | `string` / `number` | -     | 100 |
| partGap | 栅格间隔 |`number` | -     | 5 |
| repeatCount | 动画播放次数 | `string` |  `indefinite` / 具体次数    | `'1'` |
| showText | 是否显示文案| `boolean` | `true`    | `false` |
| strokeWidth | 进度条宽度 | `string` / `number` | -     | 10 |
| to | 动画作用属性的结束值 | `string` | -     | `'0s'` |
| type | 进度条类型，分为横向和竖向 | `string` | `vertical`    | `default` |
| value | 进度条数值 | `string` / `number` | -     | 0 |

::: tip
from、to、by相互之间有制约关系：

1. 如果动画的起始值与元素的默认值是一样的，from参数可以省略。

2. to、by两个参数至少需要有一个出现。否则没有动画效果。to表示绝对值，by表示相对值。以位移距离为例子，如果from是100, to值为160，则表示移动到160这个位置；如果by值是160，则表示移动到100+160=260这个位置。

3. 如果to、by同时出现，则只识别to。

4. 详细信息请查看 https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/animate
:::

#### GridBar[type=vertical]
| 参数 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| height | 进度条高度 | `string` / `number` | -    | - |
| strokeWidth | 进度条宽度 | `string` / `number` | -     | 30 |
| textPosition | 文案位置 | `string` | `top`    | `bottom` |

###  Slots

| 插槽名称 | 说明 |类型|
|:--:|--|--|
|text|自定义文案|`number`|