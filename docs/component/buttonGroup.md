# ButtonGroup 按钮组

用于一组多个按钮存在时,属于容器组件。

## 基础用法

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-button-group size="mini">
            <vc-button>按钮1</vc-button>
            <vc-button>按钮2</vc-button>
        </vc-button-group>
        <vc-button-group size="small">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
        <vc-button-group>
            <vc-button>按钮1</vc-button>
            <vc-button>按钮2</vc-button>
        </vc-button-group>
        <vc-button-group type="primary">
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
    <div class="flex-item">
        <vc-button-group danger>
            <vc-button>按钮1</vc-button>
            <vc-button>按钮2</vc-button>
            <vc-button>按钮3</vc-button>
        </vc-button-group>
         <vc-button-group type="primary" danger>
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
| danger | 危险按钮 | `boolean` |  `true`    | `false` |
| size | 尺寸大小 | `string` | `large` \\| `small` \\| `mini`      | `middle` |
| type | 按钮类型 | `string` | `primary` \\| `success` \\| `warinng` \\| `dashed` | `default` |

###  Slots

| 插槽名称 | 说明 |
|:--:|--|
|default|自定义默认内容|