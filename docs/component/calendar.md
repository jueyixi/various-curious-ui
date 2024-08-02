# Calendar 日历

按照日历形式展示数据的容器。

## 基础用法

当数据是日期或按照日期划分时可使用该组件，例如日程、课表、价格、农历等。目前支持年/月/周切换。

:::demo
```vue
<template>
    <div class="container">
        <vc-button-group>
            <vc-button @click="changeMode('week')">周历</vc-button>
            <vc-button @click="changeMode('month')">月历</vc-button>
            <vc-button @click="changeMode('year')">年历</vc-button>
        </vc-button-group>
        <div class="content">
            <vc-calendar :mode="mode"></vc-calendar>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"

const mode = ref("month")
const changeMode = (typeName: string) => {
    mode.value = typeName
}
</script>

<style scoped lang="less">
.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .content{
        width: 100%;
        flex: 1;
        overflow: auto;
    }
}
</style>
```
:::

## 指定具体日期

设置 value 来指定当前显示的具体时间。 如果 value 未指定，则显示当月。 value 支持 v-model 双向绑定。

:::demo
```vue
<template>
    <div class="container">
        <vc-button @click="change">指定日期{{date}}</vc-button>
        <div class="content">
            <vc-calendar v-model:value="date"></vc-calendar>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"

const date = ref("")
// 获取选中数据
const change = () => {
    date.value ? date.value = "" : date.value = '2023-10-15'
}
</script>
<style scoped lang="less">
.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .content{
        width: 100%;
        flex: 1;
        overflow: auto;
    }
}
</style>
```
:::

## 多选

`multiple` 属性可控制是否多选。

:::demo
```vue
<template>
    <div>
        <div>已选择日期：{{selectedList?.map(item => item.date).join('、')}}</div>
        <vc-calendar multiple ref="calendarRef" @change="change"></vc-calendar>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import {SelectedCalendarItem} from "@various-curious-ui/typings"

const calendarRef = ref()
const selectedList = ref<SelectedCalendarItem[]>([])
// 获取选中数据
const change = (val:SelectedCalendarItem) => {
    selectedList.value = calendarRef.value.getSelectedData()
    console.log(val,"<--当前选中日期")
    console.log(calendarRef.value.getSelectedData(),"getSelectedData")
}
</script>
```
:::

## 禁选

:::demo
```vue
<template>
    <div>
        <vc-calendar disabled></vc-calendar>
    </div>
</template>
```
:::

## 自定义单元格内容

:::demo
```vue
<template>
    <div>
        <vc-calendar>
            <template #columnsItem="{data}">周{{data}}</template>
            <template #date="{data}">{{data.day}}日</template>
            <template #schedule="{data}">{{data.day == '08' ? "写日记" : ""}}</template>
        </vc-calendar>
    </div>
</template>
```
:::

## Api

### Attributes

日历类组件包含 `week` 、`month` 、`year` 三种形式，以下为共有属性。

| 参数 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| mode | 日历类型 | `boolean` | `week` / `year`    | `month` |
| currentText | 右上角当天按钮文案 | `string` | -     | `'本周' \| '本月' \| '本年'` |
| prevText | 右上角上一页按钮文案 | `string` | -     | `<` |
| nextText | 右上角下一页按钮文案 | `string` | -     | `>` |
| contentStyle |日期单元格日程容器（不包含日期所在范围）自定义样式 | `object` | -     | `{}` |
| contentClass | 日期单元格日程容器（不包含日期所在范围）自定义类名 | `string` | -     | - |
| columnsGap | 日历面板列间距（px） | `number` \\| `string` | -     | 8 |
| minHeight | 日历面板单元格日程容器最小高度（单位：px，height） | `number` \\| `string` | -     | - |
| maxHeight | 日历面板单元格间距（px） | `number` \\| `string` | -     | - |
| height | 日历面板单元格日程容器最小高度（px） | `number` \\| `string` | `auto` \\| 具体数值    | `week` 时为 `300`，`month` 时为 `120`，`year` 时为 `150` |
| value(v-model) | 指定日期显示 | `Dayjs` | -     | - |
| disabled | 禁选 | `boolean` | `true`     | `false` |
| multiple | 多选 | `boolean` | `true`     | `false` |
| dataSource | 数据源 | `array` | -    | - |

#### Calendar[mode=week]
| 参数 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| columns | 面板头部星期信息列表 | `array` | -    | `['一', '二', '三', '四', '五', '六', '日']` |

#### Calendar[mode=month]
| 参数 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| columns | 面板头部星期信息列表 | `array` | -    | `['一', '二', '三', '四', '五', '六', '日']` |

#### Calendar[mode=year]
| 参数 | 说明 | 类型   | 可选值     | 默认值  |
| :----: | :---- | :------: | :----------: | :-------: |
| columns |年份显示列数 | `number` | -    | 4 |

###  Expose

| 事件名称 | 说明 | 回调参数     |
|:--:|--|--|
|getSelectedData|获取多选时选中的日期列表|`() => SelectedCalendarItem[]`|
|prev|上周/上月/上年|`() => void`|
|next|下周/下月/下年|`() => void`|
|setToday|面板显示当天所在周（月/年）|`() => void`|
|setDate|面板显示指定日期所在周（月/年）|`(appointDate?: Dayjs) => void`|

###  function

| 事件名称 | 说明 | 回调参数     |
|:--:|--|--|
|prev|上周/上月/上年回调|`(detail:CalendarDetail) => void`|
|next|下周/下月/下年回调|`(detail:CalendarDetail) => void`|
|setToday|指定显示当天日期回调|`(detail:CalendarDetail) => void`|
|setDate|显示指定日期回调|`(detail:CalendarDetail) => void`|
|change|选中日期回调|`(detail:CalendarDetail) => void`|

###  Slots

| 插槽名称 | 说明 |类型|
|:--:|--|--|
|cellRender|自定义单元格内容，会直接覆盖单元格默认内容|`{data:CalendarDetail,rowIndex:number,columnIndex:number}`|
|columnsItem|自定义周历/月历面板列头部内容|`{data:string,index:number}`|
|date|自定义单元格日期内容|<span style="color:red;">`{data:CalendarDetail,rowIndex:number,columnIndex:number}`</span>|
|schedule|自定义单元格日程列表|`{data:CalendarDetail,rowIndex:number,columnIndex:number}`|
|title|自定义日历面板标题内容|`string`|
