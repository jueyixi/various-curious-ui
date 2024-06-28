# ButtonGroup 按钮组

用于一组多个按钮存在时,属于容器组件。

## 基础用法

:::demo
```vue
<template>
    <div style="display:flex;align-items:center;">
        <vc-button-group size="mini">
            <vc-button>按钮1</vc-button>
            <vc-button>按钮2</vc-button>
        </vc-button-group>
        <vc-button-group size="small" style="margin-left: 16px;">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
        <vc-button-group style="margin-left: 16px;">
            <vc-button>按钮1</vc-button>
            <vc-button>按钮2</vc-button>
        </vc-button-group>
        <vc-button-group type="primary" style="margin-left: 16px;">
            <vc-button>按钮1</vc-button>
            <vc-button>按钮2</vc-button>
        </vc-button-group>
    </div>
</template>
```
:::

## 危险按钮组

:::demo
```vue
<template>
    <div style="display:flex;">
        <vc-button-group danger>
            <vc-button>按钮1</vc-button>
            <vc-button>按钮2</vc-button>
            <vc-button>按钮3</vc-button>
        </vc-button-group>
         <vc-button-group type="primary" danger style="margin-left: 16px;">
            <vc-button>按钮1</vc-button>
            <vc-button>按钮2</vc-button>
            <vc-button>按钮3</vc-button>
        </vc-button-group>
    </div>
</template>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| danger | 危险按钮 | `Boolean` |  `true`    | `false` |
| size | 尺寸大小 | `String` | `large` / `small` / `mini`      | `middle` |
| type | 按钮类型 | `String` | `primary` / `success` / `warinng` / `dashed` | `default` |

###  Slots

| 插槽名称 | 说明 |
|:--:|--|
|default|自定义默认内容|