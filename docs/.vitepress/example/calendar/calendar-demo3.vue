<template>
    <demo>
        <div>
            <div>已选择日期：{{ selectedList?.map(item => item.date).join('、') }}</div>
            <vc-calendar multiple @change="change"></vc-calendar>
        </div>
    </demo>
</template>
<script setup lang="ts">
import { ref } from "vue"
import {SelectedCalendarItem} from "@various-curious-ui/typings"
defineOptions({
    name: "calendar-demo3"
})

const calendarRef = ref()
const selectedList = ref<SelectedCalendarItem[]>([])
// 获取选中数据
const change = (val: SelectedCalendarItem) => {
    selectedList.value = calendarRef.value.getSelectedData()
    console.log(val, "<--当前选中日期")
    console.log(calendarRef.value.getSelectedData(), "getSelectedData")
}
</script>