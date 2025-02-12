# TimeLine 时间轴

定制化呈现具体时间节点及其相关事件。

## 基础用法

只需要给 `dataSource` 属性传入数组数据，即可显示出时间轴。

::: tip
- 为了美观效果，滚动条默认隐藏，若需要常显可自行添加配置。
- 默认使用组件 `ScrollBar` 滚动条，若需要默认滚动条，可自行添加配置。
:::

:::demo
```vue
<template>
    <vc-time-line :dataSource="list" />
</template>

<script setup lang="ts">

const list = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
                showPopper: true,
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
                showPopper: true,
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
                pointStyle: {
                    color: "rgba(169, 61, 246, 1)"
                },
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
                showPopper: true,
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
                pointStyle: {
                    color: "rgba(37, 201, 64, 1)"
                },
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
                showPopper: true,
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
                pointStyle: {
                    color: "rgba(37, 201, 64, 1)"
                },
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
]
</script>
```
:::

## 禁止点击

若是给组件设置了 `disabled` 属性，则整个时间轴只作为显示容器，无法操作。

:::demo
```vue
<template>
    <vc-time-line :scrollbar="{ native: true }" :dataSource="list" :disabled="true" />
</template>

<script setup lang="ts">

const list = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
                showPopper: true,
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
                showPopper: true,
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
                pointStyle: {
                    color: "rgba(169, 61, 246, 1)"
                },
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
                showPopper: true,
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
                pointStyle: {
                    color: "rgba(37, 201, 64, 1)"
                },
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
                showPopper: true,
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
                pointStyle: {
                    color: "rgba(37, 201, 64, 1)"
                },
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
]
</script>
```
:::

## 唯一弹窗

每次只能打开一个弹窗

:::demo
```vue
<template>
    <vc-time-line :dataSource="list" :multiple="false" />
</template>

<script setup lang="ts">
const list = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
            },
        ],
    },
]
</script>
```
:::

## 定制化配置

修改属性值，自定义时间轴显示效果。

:::demo
```vue
<template>
    <vc-time-line :dataSource="list" :defaultConfig="defaultConfig" />
</template>

<script setup lang="ts">
const defaultConfig = {
    pointColor: "rgba(37, 201, 64, 1)",
    pointWidth: 12,
    pointHeight: 12,
    lineWidth:"auto",
    // selected: false,
    // showPopper: false,
}
const list = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
                selected:true
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
                pointStyle: {
                    width: 8,
                    height: 8,
                    color:"red"
                }
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
                showPopper:true
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
                disabled: true,
                showPopper:true,
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
                disabled: true
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
            },
        ],
    },
]
</script>
```
:::

## 自定义分割线和年份样式

:::demo
```vue
<template>
    <vc-time-line height="160" :dataSource="list" :multiple="false" :split="split" />
</template>

<script setup lang="ts">
const split = {
    gap:'10px',
    title: {
        color: "rgba(169, 61, 246, 0.5)",
        fontSize:"30",
        format: (val: any) => val.year
    },
    line: {
        color: "rgba(169, 61, 246, 0.3)",
        height: '18',
        width:2
    }
}

const list = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
            },
        ],
    },
]
</script>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| barWidth | 滚动条轨道的宽度 | `string` / `number` | -     | 6 |
| dataSource | 数据源 | `array<TimeLineItem>` | -     | `[]` |
| defaultConfig | 默认配置项 | `object<DefaultConfig>` | -     | `{}` |
| disabled | 禁止操作 | `boolean` | `true` / `false`   | - |
| floating | 弹窗配置项，详情可查看[floating](./floating.md)组件 | `object<Floating>` | -     | - |
| height | 高度 | `string` / `number` | -     | - |
| multiple | 显示多弹窗 | `boolean` |  `false`   | `true` |
| scrollbar | 滚动条配置项，详情可查看[scrollbar](./scrollBar.md)组件 | `object<ScrollBar>` | -     | - |
| split | 分割线和年份配置项 | `object<SplitType>` | -     | `{}` |

###  Expose

| 名称 | 说明 | 回调参数     |
|:--:|--|--|
|pointClick|点击时间点触发|`(val:LineItem) => void`|
|showPopper|打开详情弹窗|`(val:LineItem) => void`|
|hidePopper|关闭详情弹窗|`(val:LineItem) => void`|
|getSelectedData|获取时间点选中的所有数据|`(val:TimeLineItem) => void`|

###  Events

| 事件名称 | 说明 | 回调参数     |
|:--:|--|--|
|click|点击时间节点触发|`(val:LineItem) => void`|
|selected|选中节点触发|`(val:LineItem) => void`|

###  Slots

| 插槽名称 | 说明 |类型|
|:--:|--|--|
|year|自定义年份内容|`{year:string\|number,format:function}`|
|popper|弹窗内容|`LineItem`|

## DefaultConfig

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| beforeWidth | 起始年宽度 | `number` | -     | 60 |
| lineColor | 时间轴颜色 | `string` | -     | - |
| lineHeight | 时间轴高度 | `number` | -     | - |
| lineWidth | 时间轴宽度 | `number` / `auto` | `auto`     | 344 |
| pointColor | 时间点颜色 | `string` | -     | - |
| pointHeight | 时间点高度 | `number` | -     | - |
| pointWidth | 时间点宽度 | `number` | -     | - |
| selected | 可选中 | `boolean` | `false`     | `true` |
| showPopper | 显示弹窗 | `boolean` | `false`     | `true` |

## SplitType

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| gap | 分割线距离时间轴间距 | `string` / `number` | -     | - |
| line | 分割线配置项 | `SplitLine` | -     | - |
| title | 分割标题配置项 | `SplitTitle` | -     | - |

### SplitTitle

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| color | 标题颜色 | `string` | -     | - |
| fontSize | 标题文字尺寸 | `string` / `number` | -     | - |
| format | 格式化 | `function` | -     | - |
| lineHight | 标题文字尺寸 | `string` / `number` | -     | - |

### SplitLine

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| color | 分割线颜色 | `string` | -     | - |
| height | 分割线高度 | `string` / `number` | -     | - |
| width | 分割线宽度 | `string` / `number` | -     | - |