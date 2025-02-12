# Floating 文字提示

使用浮层弹窗形式展示更多需要关注的信息。

## 基础用法

最简单的用法。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-floating content="floating text">
            <template #reference>
                <span>Floating</span>
            </template>
        </vc-floating>
        <vc-floating>
            <template #reference>
                <vc-button>Button</vc-button>
            </template>
            button-floating
        </vc-floating>
    </div>
</template>
```
:::

## 触发方式

`trigger` 属性可以决定 `floating` 的触发方式，支持的触发方式： `hover`、`click`、`focus`、`clickToOpen`、`unset`、`manual`。 若设置为 `manual` 触发方式，则可配合`visible` 属性进行手动控制。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-floating content="floating text" trigger="hover">
            <template #reference>
                <vc-button>hover</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" trigger="click">
            <template #reference>
                <vc-button>click</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" trigger="focus">
            <template #reference>
                <vc-button>focus</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" trigger="clickToOpen">
            <template #reference>
                <vc-button>clickToOpen</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" trigger="unset">
            <template #reference>
                <vc-button>unset</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" v-model:visible="visible" trigger="manual">
            <template #reference>
                <vc-button @click="handleChange">manual</vc-button>
            </template>
        </vc-floating>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const visible = ref(false)

const handleChange = () => {
    visible.value = !visible.value
}
</script>
```
:::

## 弹出位置

`placement` 属性可以决定 `floating` 的弹出位置，默认在正下方弹出，也可自行更改。弹出位置有以下几种可供选择：  `top` 、 `top-start` 、 `top-end` 、 `right` 、 `right-start` 、 `right-end` 、`bottom` 、 `bottom-start` 、 `bottom-end` 、 `left` 、 `left-start` 、 `left-end`。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-floating content="floating text" placement="top-start">
            <template #reference>
                <vc-button>top-start</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="top">
            <template #reference>
                <vc-button>top</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="top-end">
            <template #reference>
                <vc-button>top-end</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="right-start">
            <template #reference>
                <vc-button>right-start</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="right">
            <template #reference>
                <vc-button>right</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="right-end">
            <template #reference>
                <vc-button>right-end</vc-button>
            </template>
        </vc-floating>
    </div>
</template>
```
:::

## 箭头相关

`showArrow` 可以控制是否显示箭头。`arrowPadding` 可以配置箭头的间距。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-floating content="floating text" :showArrow="false">
            <template #reference>
                <span>Floating</span>
            </template>
        </vc-floating>
        <vc-floating :arrowPadding="12">
            <template #reference>
                <vc-button>Button</vc-button>
            </template>
            button-floating
        </vc-floating>
    </div>
</template>
```
:::

## 弹出控制

`autoOpen` 可以控制是否默认弹出。`teleported` 可以控制是否在body下弹出。`closeOnClickBody` 可以控制是否可以点击body关闭。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-floating content="floating text" :autoOpen="true">
            <template #reference>
                <vc-button>autoOpen</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" :autoOpen="true" :teleported="false">
            <template #reference>
                <vc-button>teleported</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" :autoOpen="true" closeOnClickBody>
            <template #reference>
                <vc-button>closeOnClickBody</vc-button>
            </template>
        </vc-floating>
    </div>
</template>
```
:::

## 自定义触发元素

`reference` 可以支持自定义触发弹窗元素的reference节点，这个功能很适合使用在触发元素和展示内容元素是分开的场景。

:::demo
```vue
<template>
    <div class="flex-item">
        <vc-button ref="domRef">domRef</vc-button>
        <vc-floating content="222" :reference="domRef"></vc-floating>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const domRef = ref(null)
</script>
```
:::

## 自定义边界元素

`boundariesRef` 可以限制floating元素弹出范围，使之只能在固定容器内弹出。

:::demo
```vue
<template>
    <div class="virtual-doms" ref="boundariesRef">
        <vc-floating content="boundariesRef text dom" :boundariesRef="boundariesRef" placement="top-end">
            <template #reference>
                <vc-button>boundariesRef</vc-button>
            </template>
        </vc-floating>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const boundariesRef = ref<HTMLElement>()
</script>

<style scoped lang="less">
.virtual-doms{
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0,0,0,0.5);
    padding:10px;
}
</style>
```
:::

## 虚拟元素

`virtualRef` 可以在只有范围，没有实际触发元素时使用。可根据鼠标位置自行判断触发点位，并弹出相关信息。

:::demo
```vue
<template>
    <div class="flex-item">
        <div class="virtual-doms" id="virtualDomRef"></div>
        <vc-floating content="通过id触发" virtualRef="#virtualDomRef" placement="right"></vc-floating>
        <div class="virtual-doms" ref="virtualDomRef"></div>
        <vc-floating content="通过ref触发" ref="virtualFloatingRef" :virtualRef="virtualEl" placement="right"></vc-floating>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { unrefElement, useEventListener, useMutationObserver } from "@vueuse/core";

const virtualDomRef = ref<HTMLElement>()
const virtualEl = ref()

const handleClick = ({ clientX, clientY }) => {        
    virtualEl.value = {
        getBoundingClientRect:()=> {
            return {
                width: 0,
                height: 0,
                x: clientX,
                y: clientY,
                top: clientY,
                left: clientX,
                right: clientX,
                bottom: clientY,
            };
        },
        contextElement: unrefElement(virtualDomRef),
    };
}

const virtualFloatingRef = ref()

onMounted(() => {
    useEventListener(virtualDomRef, 'mousemove', handleClick);
    useEventListener(virtualDomRef, 'mouseout', () => {
        virtualFloatingRef.value?.close()
    });
});
</script>

<style scoped lang="less">
.virtual-doms{
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0,0,0,0.5);
    padding:10px;
}
</style>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| arrowPadding | 箭头内间距 | `number` | -    | 5 |
| autoOpen | 是否挂载后立即渲染floating元素 | `boolean` / `null` |  `true` \\| `false`  | `null` |
| boundariesRef | 边界元素--支持dom选择器名称，ref，自定义 | `object` | -    | - |
| closeDelay | floating元素消失前的延迟时间 | `number` | -    | 0 |
| closeOnClickBody | 是否可以通过点击body来关闭floating元素 | `boolean` / `null` |  `true` \\| `false`  | `null` |
| content | 内容 | `string` | -    | - |
| disabled | 是否禁止floating元素弹出 | `boolean` / `null` |  `true` \\| `false`  | `null` |
| effect | 内置主题 | `string` | `dark`    | `light` |
| floatingClass | floating元素自定义类名 | `string` | -    | - |
| floatingOptions | floating元素配置项| `string` \\| `array` | -    | - |
| floatingStyle | floating元素行内样式 | `string` \\| `object` \\| `array` | -    | - |
| offset | floating元素相对于reference元素的偏移 | `number` | -    | 8 |
| openDelay | floating元素出现前的延迟时间 | `number` | -    | 0 |
| placement | 弹出位置 | `string` | `top` \\| `top-start` \\| `top-end` \\| `right` \\| `right-start` \\| `right-end` \\| `bottom-start` \\| `bottom-end` \\| `left` \\| `left-start` \\| `left-end`    | `bottom` |
| quickTrack | 是否开启快速跟踪, 当reference元素是可以移动的且floating元素跟不上移动时开启此项 | `boolean` / `null` |  `true` \\| `false`  | `null` |
| reference | 动态reference元素, 注意，此项优先级小于slot.reference| `object` | -    | - |
| showArrow | 是否显示箭头 | `boolean` |  `false`  | `true` |
| strategy | 定位方式 | `string` | `fixed`    | `absolute` |
| tabindex | 组件的tabIndex值 | `number` | -    | - |
| teleported | 是否将floating元素瞬移到body下对应容器中, 当floating元素z-index层级出问题时开启此项 | `boolean` |  `false`  | `true` |
| transition | floating元素出现时的过渡效果 | `string` | -   | `fade` |
| trigger | 触发方式 | `string` | `click` \\| `focus` \\| `clickToOpen` \\| `unset` \\| `manual`    | `hover` |
| virtualRef | 虚拟元素--支持dom选择器名称，ref，自定义 | `string` / `object` / `element` | -    | - |
| visible(v-model) | 手动控制显示 | `boolean` / `null` | `true` \\| `false`    | `null` |

###  Expose

| 事件名称 | 说明 | 回调参数     |
|:--:|--|--|
|close|关闭floating元素|`() => void`|
|open|打开floating元素|`() => void`|
|toggle|控制floating元素显隐|`() => void`|
|resolveVirtualDom|处理动态虚拟元素触发点位|`({clientX,clientY}) => void`|

###  Events

| 事件名称 | 说明 | 回调参数     |
|:--:|--|--|
|close|关闭floating时回调|`() => void`|
|closed|关闭动画结束时回调|`() => void`|
|open|弹出floating时回调|`() => void`|
|opened|弹出动画结束时回调|`() => void`|

###  Slots

| 插槽名称 | 说明 |类型|
|:--:|--|--|
|reference|自定义reference元素|-|
|default|floating组件内容元素|-|
