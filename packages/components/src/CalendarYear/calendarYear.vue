<template>
    <div :class="[calendarNS.setBlock('year')]">
        <div :class="calendarNS.setBlockModifier('year', 'body')">
            <table>
                <colgroup>
                    <col v-for="item in props.columns" :key="item" />
                </colgroup>
                <tbody>
                    <tr v-for="(item, index) in formData.list" :key="index">
                        <td :class="[calendarNS.setBlockModifier('year', 'cell')]" v-for="v in item" :key="v"
                            :title="v.date">
                            <div @click="props.hasClick && jump(v)" class="vc-calendar-cell" :class="{
                                'vc-pointer': props.hasClick,
                                'is-active':
                                    props.multiple ? v.clickDay : v.value === selectValue,
                                'is-current': handle.isCurrentMonth(v.value),
                            }">
                                <div class="vc-calendar-cell--date">
                                    <slot name="date" :data="v">
                                        {{ v.month }}月
                                    </slot>
                                </div>
                                <div :class="contentClass" :style="contentStyle">
                                    <slot name="schedule" :data="v"></slot>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, watch, onMounted, watchEffect, toRaw } from 'vue';
import { calendarYearProps, calendarYearEmits } from "./calendarYear"
import { useNS, useCalendar } from "vc-hooks"
defineOptions({
    name: "VcCalendarYear",
    inheritAttrs: false
})

const props = defineProps({
    ...calendarYearProps
});

const emits = defineEmits(calendarYearEmits)

const contentClass = computed(() => {
    const classList = ['vc-calendar-cell--schedule']
    if (props.contentClass) {
        classList.push(props.contentClass)
    }
    return classList
})

const contentStyle = computed(() => {
    const style = props.contentStyle || {}
    if (props.minHeight) {
        style.minHeight = Number(props.minHeight) + "px"
    }
    if (props.maxHeight) {
        style.maxHeight = Number(props.maxHeight) + "px"
    }
    if (props.height) {
        style.height = Number(props.height) + "px"
    }
    return style
})

const headerData: any = inject("headerData", null)

const calendarNS = useNS('calendar');

let handle: any = useCalendar('year', props.multiple);

watch(() => props.multiple, () => {
    handle = useCalendar('year', props.multiple)
    toCurrent();
})

const formData = ref<any>({});
const selectValue = ref();

// 上一周
const prev = () => {
    const { detail, emitName } = handle.prev();
    formData.value = detail;
    emits('prev', detail, emitName);
};
// 下一周
const next = () => {
    const { detail, emitName } = handle.next();
    formData.value = detail;
    emits('next', detail, emitName);
};
// 点击回到今天
const toCurrent = () => {
    const { detail, emitName } = handle.toCurrent();
    formData.value = detail;
    emits('toCurrent', detail, emitName);
};
// 点击某一天
const jump = (item) => {
    if (!props.multiple) {
        selectValue.value = item.value;
    }
    const { detail, emitName } = handle.jump(item);
    formData.value = detail;
    emits('jump', detail, emitName);
};

const getTitle = () => {
    const { list } = toRaw(formData.value);
    if (list.length) {
        const data = []
        list?.forEach((item: any) => data.push(...item))
        const date = toRaw(data.find((item: any) => item.day === "01"))
        headerData.title = date.year + '年' || '';
    }
};

onMounted(() => {
    toCurrent();
});
watchEffect(() => {
    formData.value.list = props.dataSource.length ? props.dataSource : formData.value?.list;
    formData.value.list = handle.filter(formData.value.list, props.columns);
    headerData && getTitle()
});
defineExpose({
    prev,
    next,
    toCurrent,
    jump,
});
</script>