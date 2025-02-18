<template>
    <div :class="[calendarNS.setBlock('year')]">
        <div :class="calendarNS.setBlockModifier('year', 'body')">
            <table>
                <colgroup>
                    <col v-for="item in props.columns" :key="item" />
                </colgroup>
                <tbody>
                    <tr v-for="(item, index) in formData.list" :key="index" :style="columnsStyle">
                        <td :class="[calendarNS.setBlockModifier('year', 'cell')]" v-for="(v, i) in item" :key="v"
                            :title="v.date">
                            <div @click="!props.disabled && change(v)" class="vc-calendar-cell" :class="{
                                'vc-pointer': !props.disabled,
    'is-active': v.checked,
                                'is-current': handle.isCurrentMonth(v.value),
                            }">
                                <slot name="cellRender" :data="v" :rowIndex="index" :columnIndex="i">
                                    <div class="vc-calendar-cell--date">
                                        <slot name="date" :data="v" :rowIndex="index" :columnIndex="i">
                                            {{ v.month }}月
                                        </slot>
                                    </div>
                                    <div :class="contentClass" :style="contentStyle">
                                        <slot name="schedule" :data="v" :rowIndex="index" :columnIndex="i"></slot>
                                    </div>
                                </slot>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, watch, onMounted, watchEffect, toRaw, StyleValue } from 'vue';
import { calendarYearProps, calendarYearEmits } from "./calendarYear"
import { useNS, useCalendar } from "vc-hooks"
import { filterArrayTwoDimensional, setValueByPx, isString, isArray } from "vc-utils"
import { CalendarItem, SelectedCalendarItem, HeaderContent, CalendarContext, calendarContextKey } from "@various-curious-ui/typings"
import dayjs from 'dayjs';
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
        if (isString(props.contentClass)) {
            classList.push(props.contentClass as string)
        } else if (isArray(props.contentClass)) {
            classList.push(...(props?.contentClass as string[]))
        }
    }
    return classList
})

const contentStyle = computed(() => {
    const style: StyleValue = {}
    if (props.minHeight) {
        style.minHeight = setValueByPx(props.minHeight)
    }
    if (props.maxHeight) {
        style.maxHeight = setValueByPx(props.maxHeight)
    }
    if (props.height) {
        style.height = props.height === 'auto' ? props.height : setValueByPx(props.height)
    }
    return [style, props.contentStyle]
})

const columnsStyle = computed(() => {
    return { columnGap: setValueByPx(props.columnsGap)}
})

const calendarContext: CalendarContext = inject(calendarContextKey, null)

const calendarValue = computed({
    get() {
        return calendarContext?.value || props.value
    },
    set(val) {
        if (calendarContext.value) {
            calendarContext.value = val
        }
        emits("update:value", val)
    }
})

const calendarNS = useNS('calendar');

let handle: any = useCalendar('year', props.multiple);

const formData = ref<any>({});
const selectedData = ref<SelectedCalendarItem[]>([]);

// 上一周
const prev = () => {
    const { detail, emitName } = handle.prev();
    formData.value = detail;
    emits(emitName, detail);
};
// 下一周
const next = () => {
    const { detail, emitName } = handle.next();
    formData.value = detail;
    emits(emitName, detail);
};
// 点击回到今天
const setToday = () => {
    const { detail, emitName } = handle.setToday();
    formData.value = detail;
    emits(emitName, detail);
};
// 指定日期
const setDate = (appointDate?:dayjs.Dayjs) => {
    const { detail, emitName } = handle.setDate(appointDate || calendarValue.value);
    formData.value = detail;
    emits(emitName, detail);
};
// 点击某一天
const change = (item: SelectedCalendarItem) => {
    const { detail, emitName } = handle.jump(item);
    if (props.multiple) {
        detail.activedDate.checked ? selectedData.value.push(item) : selectedData.value = selectedData.value?.filter(v => v.value !== item.value);
    }
    formData.value = detail;
    emits(emitName, detail);
};

// 多选条件下获取选中数据
const getSelectedData = () => {
    return selectedData.value
}

const getTitle = () => {
    const { list } = toRaw(formData.value);
    if (list.length) {
        const data = []
        list?.forEach((item: any) => data.push(...item))
        const date = toRaw(data.find((item: any) => item.day === "01"))
        calendarContext.headerContent.title = date.year + '年' || '';
    }
};

const init = () => {
    calendarValue.value ? setDate() : setToday();
}

onMounted(() => {
    init();
});

watch([() => props.multiple, () => calendarContext?.value], () => {
    handle = useCalendar('year', props.multiple)
    init();
})

watchEffect(() => {
    formData.value.list = props.dataSource.length ? props.dataSource : formData.value?.list;
    formData.value.list = filterArrayTwoDimensional(formData.value.list, props.columns);
    calendarContext?.headerContent && getTitle()
});
defineExpose({
    prev,
    next,
    setToday,
    change,
    setDate,
    getSelectedData
});
</script>