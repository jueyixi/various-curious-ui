# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type` 、 `shape` 等属性来定义按钮的样式。

:::demo
```vue
<template>
    <div class="flex-item-column">
        <div>
            <vc-button>default</vc-button>
            <vc-button type="primary">primary</vc-button>
            <vc-button type="success">success</vc-button>
            <vc-button type="warning">warning</vc-button>
            <vc-button type="dashed">dashed</vc-button>
        </div>
        <div >
            <vc-button shape="round">default</vc-button>
            <vc-button shape="round" type="primary">primary</vc-button>
            <vc-button shape="round" type="success">success</vc-button>
            <vc-button shape="round" type="warning">warning</vc-button>
            <vc-button shape="round" type="dashed">dashed</vc-button>
        </div>
        <div >
            <vc-button disabled>default</vc-button>
            <vc-button disabled type="primary">primary</vc-button>
            <vc-button disabled type="success">success</vc-button>
            <vc-button disabled type="warning">warning</vc-button>
            <vc-button disabled type="dashed">dashed</vc-button>
        </div>
        <div >
            <vc-button shape="circle" loading></vc-button>
            <vc-button shape="circle">
                <vc-icon name="Close"></vc-icon>
            </vc-button>
        </div>
    </div>
</template>
```
:::

## 危险按钮

`danger` 属性优先级高于 `type` 属性，如果两个属性同时存在则显示未危险按钮。

:::demo
```vue
<template>
    <div class="flex-item-column">
        <div>
            <vc-button danger type="primary">danger</vc-button>
            <vc-button danger>danger</vc-button>
            <vc-button danger type="dashed">dashed</vc-button>
            <vc-button danger link>link</vc-button>
            <vc-button danger text>text</vc-button>
        </div>
        <div >
            <vc-button disabled danger type="primary">danger</vc-button>
            <vc-button disabled danger>danger</vc-button>
            <vc-button disabled danger type="dashed">dashed</vc-button>
            <vc-button disabled danger link>link</vc-button>
            <vc-button disabled danger text>text</vc-button>
        </div>
        <div >
            <vc-button loading danger type="primary">danger</vc-button>
            <vc-button loading danger>danger</vc-button>
            <vc-button loading danger type="dashed">dashed</vc-button>
        </div>
    </div>
</template>
```
:::

## 链接按钮

:::demo
```vue
<template>
    <div class="flex-item-column">
        <div>
            <vc-button link >link</vc-button>
            <vc-button link type="primary">primary</vc-button>
            <vc-button link type="success">success</vc-button>
            <vc-button link type="warning">warning</vc-button>
            <vc-button link danger>danger</vc-button>
        </div>
        <div>
            <vc-button disabled link >link</vc-button>
            <vc-button disabled link type="primary">primary</vc-button>
            <vc-button disabled link type="success">success</vc-button>
            <vc-button disabled link type="warning">warning</vc-button>
            <vc-button disabled link danger>danger</vc-button>
        </div>
    </div>
</template>
```
:::

## 文字按钮

:::demo
```vue
<template>
    <div>
        <vc-button text >text</vc-button>
        <vc-button text type="primary">primary</vc-button>
        <vc-button text type="success">success</vc-button>
        <vc-button text type="warning">warning</vc-button>
        <vc-button text danger>danger</vc-button>
    </div>
</template>
```
:::

## 调整尺寸

提供 `mini` 、 `small` 、 `moddle` 、 `large` 四种尺寸，默认为 `middle` ，可通过 `size` 属性修改。

:::demo
```vue
<template>
    <div>
        <vc-button size="mini">按钮</vc-button>
        <vc-button size="small">按钮</vc-button>
        <vc-button size="middle">按钮</vc-button>
        <vc-button size="large">按钮</vc-button>
    </div>
</template>
```
:::

## 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

:::demo
```vue
<template>
    <div class="flex-item" style="padding:12px;background-color: rgb(190, 200, 200);">
        <div>
            <vc-button ghost>ghost</vc-button>
            <vc-button ghost disabled>disabled</vc-button>
            <vc-button ghost loading>loading</vc-button>
        </div>
        <div>
            <vc-button type="primary" ghost>primary</vc-button>
            <vc-button type="primary" ghost disabled>disabled</vc-button>
            <vc-button type="primary" ghost loading>loading</vc-button>
        </div>
        <div>
            <vc-button type="success" ghost>primary</vc-button>
            <vc-button type="success" ghost disabled>disabled</vc-button>
            <vc-button type="success" ghost loading>loading</vc-button>
        </div>
        <div>
            <vc-button danger ghost>danger</vc-button>
            <vc-button danger ghost disabled>disabled</vc-button>
            <vc-button danger ghost loading>loading</vc-button>
        </div>
        <div>
            <vc-button type="dashed" ghost>dashed</vc-button>
            <vc-button type="dashed" ghost disabled>disabled</vc-button>
            <vc-button type="dashed" ghost loading>loading</vc-button>
        </div>
        <div>
            <vc-button type="dashed" danger ghost>dashed</vc-button>
            <vc-button type="dashed" danger ghost disabled>disabled</vc-button>
            <vc-button type="dashed" danger ghost loading>loading</vc-button>
        </div>
    </div>
</template>
```
:::

## 加载按钮

添加 `loading` 属性即可让按钮处于加载状态。

:::demo
```vue
<template>
    <div>
        <vc-button loading>default</vc-button>
        <vc-button loading type="primary">primary</vc-button>
        <vc-button loading type="success">success</vc-button>
        <vc-button loading type="warning">warning</vc-button>
        <vc-button loading danger>danger</vc-button>
        <vc-button loading danger type="primary">danger</vc-button>
        <vc-button loading type="dashed">dashed</vc-button>
    </div>
</template>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| danger | 危险按钮 | `boolean` |  `true`    | `false` |
| disabled | 按钮禁用 | `boolean` | `true`     | `false` |
| ghost | 幽灵按钮 | `boolean` | `true`    | `false` |
| href | 点击跳转的地址，指定此属性`button`的行为和`a`链接一致 | `string` | -    | - |
| link | 链接按钮 | `boolean` |  `true`    | `false` |
| loading | 加载中 | `boolean` | `true` | `false` |
| nativeType | 原生type | `string` | `submit` \\| `reset`  | `button` |
| prefixIcon | 前置图标 | `string` | icon名称     | - |
| shape | 按钮形状 | `string` |  `circle` \\| `round`  | `default` |
| size | 尺寸大小 | `string` | `large` \\| `small` \\| `mini`      | `middle` |
| suffixIcon | 后置图标 | `string` | icon名称   | - |
| target | `link`类型时，原生`target`属性，`href`存在时生效 | `string` | `_blank` \\| `_parent` \\| `_top`     | `_self` |
| text | 文字按钮 | `boolean` |  `true`    | `false` |
| type | 按钮类型 | `string` | `primary` \\| `success` \\| `warinng` \\| `dashed` | `default` |

###  Events

| 事件名称 | 说明 | 回调参数     |
|:--:|--|--|
|click|点击按钮后触发的事件|`(MouseEvent) => void`|
|blur|移除焦点|-|
|focus|获取焦点|-|

###  Slots

| 插槽名称 | 说明 |
|:--:|--|
|default|自定义默认内容|
|Loading|自定义加载中组件|
|prefixIcon|自定义前置图标|
|suffixIcon|自定义后置图标|