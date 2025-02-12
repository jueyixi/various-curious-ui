# ScrollBar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

:::demo
```vue
<template>
    <vc-scroll-bar height="200px">
        <div class="scrollbar">
            <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
        </div>
    </vc-scroll-bar>
</template>

<style scoped lang="less">
.scrollbar{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &-item{
        width:100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        background: var(--vc-color-primary-fade);
        color: var(--vc-color-primary);
    }
}
</style>
```
:::

## 横向滚动条

组件本身没有宽度属性，只会继承外部容器的宽度，当元素宽度大于外层宽度时,自适应生成横向滚动条。

:::demo
```vue
<template>
    <vc-scroll-bar>
        <div class="scrollbar">
            <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
        </div>
    </vc-scroll-bar>
</template>

<style scoped lang="less">
.scrollbar{
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &-item{
        flex:100px 0 0;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        background: var(--vc-color-danger-fade);
        color: var(--vc-color-danger);
    }
}
</style>
```
:::

## 最大高度

当元素高度超过最大高度，才会显示滚动条

:::demo
```vue
<template>
    <vc-button @click="add">增加一个</vc-button>
    <vc-button @click="onDelete">删除一个</vc-button>
    <vc-scroll-bar max-height="300px">
        <div class="scrollbar">
            <div v-for="item in count" :key="item" class="scrollbar-item">{{ item }}</div>
        </div>
    </vc-scroll-bar>
</template>

<script setup lang="ts">
import { ref } from "vue"

const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped lang="less">
.scrollbar{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding:12px;

    &-item{
        width:100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        background: var(--vc-color-primary-fade);
        color: var(--vc-color-primary);
    }
}
</style>
```
:::

## 滚动条在内容外

`position` 属性支持 `inside` 和 `outside` 两种模式。默认为 `inside`，滚动条会显示在内容上。如果设置为 `outside`，滚动条则会显示在内容区域外，不影响内容的显示。

:::demo
```vue
<template>
    <vc-scroll-bar height="200px" always position="outside" outsideGap="10">
        <div class="scrollbar">
            <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
        </div>
    </vc-scroll-bar>
</template>

<style scoped lang="less">
.scrollbar{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &-item{
        width:100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        background: var(--vc-color-primary-fade);
        color: var(--vc-color-primary);
    }
}
</style>
```
:::

## 手动滚动

通过使用 `setScrollTop` 与 `setScrollLeft` 方法，可以手动控制滚动条滚动。

:::demo
```vue
<template>
    <vc-button :disabled="value >= maxHeight" @click="customScroll(100)">+100</vc-button>
    <vc-button>{{value}}</vc-button>
    <vc-button :disabled="value < 100" @click="customScroll(-100)">-100</vc-button>
    <vc-scroll-bar ref="scrollbarRef" always height="200px" @scroll="scroll">
        <div class="scrollbar" ref="contentRef">
            <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
        </div>
    </vc-scroll-bar>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue"
import {VcScrollBar} from "various-curious-ui"

const scrollbarRef = ref<InstanceType<typeof VcScrollBar>>()
const contentRef = ref<HTMLDivElement>()

const value = ref(0)
const maxHeight = ref(0)

onMounted(() => {
  maxHeight.value = contentRef.value!.clientHeight - 200
})

const scroll = ({ scrollTop }) => {
  value.value = scrollTop
}

const customScroll = (val:number) => {
    value.value += val
    if(value.value > maxHeight.value){
        value.value = maxHeight.value
    }
    scrollbarRef.value?.setScrollTop(value.value)
}
</script>

<style scoped lang="less">
.scrollbar{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding:12px;

    &-item{
        width:100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        background: var(--vc-color-primary-fade);
        color: var(--vc-color-primary);
    }
}
</style>
```
:::

## 其他配置项

如果默认样式的滚动条不能满足需求，也支持特殊样式的定制。包括轨道和滑块的位置、间距、颜色、圆角等样式的自定义配置。

:::demo
```vue
<template>
    <vc-scroll-bar v-bind="otherConfig">
        <div class="scrollbar">
            <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
        </div>
    </vc-scroll-bar>
</template>

<script setup lang="ts">
const otherConfig = {
    stopResize: true,
    position: "outside",
    outsideGap: 10,
    size:50,
    gap: 0,
    always: true,
    height: "200px",
    barWidth: 10,
    track: {
        borderRadius: "10px",
        color:"rgba(0,255,180,0.1)"
    },
    thumb: {
        right: "0px",
        bottom: "0px",
        color: "rgba(0,255,120,0.6)",
        opacity:1,
        hoverColor: "rgba(0,255,90,1)",
        hoverOpacity:1,
    }
}
</script>

<style scoped lang="less">
.scrollbar{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &-item{
        width:800px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        background: var(--vc-color-danger-fade);
        color: var(--vc-color-danger);
    }
}
</style>
```
:::

## Api

### Attributes

| 属性名 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| always | 是否常显滚动条 | `boolean` | `false`    |  `true` |
| barWidth | 滚动条轨道的宽度 | `string` / `number` | -     | 6 |
| contentClass | 内容的自定义类名 | `string` / `array<string>` | -     | - |
| contentStyle | 内容的自定义样式 | `string` / `object` / `array` | -     | - |
| gap | 滚动条与内容盒子的间距（竖向：上下间距；横向：左右间距） | `number` | -     | 2 |
| height | 高度 | `string` / `number` | -     | - |
| maxHeight | 最大高度 | `string` / `number` | -     | - |
| minSize | 滚动条滑块的最小尺寸 | `number` | -     | 20 |
| native | 是否显示为原生滚动条 | `boolean` | `false`    | `true` |
| outsideGap | 外部滚动条与滚动条容器的间距（竖向：上下间距；横向：左右间距） | `number` | -     | - |
| position | 滚动条位置 | `string` | `outside`     | `inside` |
| size | 滚动条滑块的尺寸 | `number` | -     | - |
| stopResize | 内容尺寸不会变动时可开启，停止监听，可提升性能 | `boolean` | `false`    |  `true` |
| thumb | 滚动条滑块的相关配置 | `ThumbType` | -     | `{}` |
| track | 滚动条轨道的相关配置 | `TrackType` | -     | `{}` |
| wrapClass | 包裹容器的自定义类名 | `string` / `array<string>` | -     | - |
| wrapStyle | 包裹容器的自定义样式 | `string` / `object` / `array` | -     | - |

###  Expose

| 名称 | 说明 | 回调参数     |
|:--:|--|--|
|handleScroll|触发滚动事件|`() => void`|
|scrollTo|滚动到特定位置|`(options: ScrollToOptions \| number, yCoord?: number) => void`|
|setScrollLeft|设置滚动条到左边的距离|`(scrollLeft: number) => void`|
|setScrollTop|设置滚动条到顶部的距离|`(scrollTop: number) => void`|
|update|手动更新滚动条状态|`() => void`|
|wrapRef|滚动条包裹的 ref 对象|`(aniNumberRef) => void`|

###  Events

| 事件名称 | 说明 | 回调参数     |
|:--:|--|--|
|scroll|当触发滚动事件时，返回滚动的距离|`({scrollTop: number; scrollLeft: number}) => void`|

###  Slots

| 插槽名称 | 说明 |
|:--:|--|
|default|自定义默认内容|