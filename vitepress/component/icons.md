# Icon 图标

提供了一套组件库所用到的图标集合。

## 安装

### 使用包管理器

::: code-group

```shell [pnpm]
pnpm install @various-curious-ui/icons

```

```shell [npm]
npm install @various-curious-ui/icons --save
```

:::

### 注册图标

您需要从 @various-curious-ui/icons 中导入所有图标并进行全局注册

```ts
// main.ts

// 如果您正在使用CDN引入，请删除下面一行。
import * as Icons from '@various-curious-ui/icons';

const app = createApp(App)
for (const [key, component] of object.entries(Icons)) {
  app.component(key, component)
}
```
## 使用图标

+ 如果想当成图标组件一样直接使用，你需要全局注册组件。
+ 也可以搭配 `vc-icon` 组件一起使用。

## 基础用法

:::demo
```vue
<template>
    <div class="flex-item">
        <ArrowUp />
        <ArrowDown />
        <ArrowLeft />
        <ArrowRight />
        <Loading />
        <Close />
    </div>
</template>
```
:::

## 结合 vc-icon 使用

`vc-icon` 为SVG图标提供简单属性，更方便使用。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-icon name="ArrowUp" />
        <vc-icon name="ArrowDown" />
        <vc-icon name="ArrowLeft" />
        <vc-icon name="ArrowRight" />
        <vc-icon name="Loading" />
        <vc-icon name="Close" />
    </div>
</template>
```
:::

## 图标集合

<iconsAgg></iconsAgg>

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| name | 图标名称 | `string` | -| - |
| style | 图标样式 | `string` \\| `object` \\| `array` | -| - |