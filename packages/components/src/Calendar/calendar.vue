<template>
    <div :class="calendarClass" ref="_ref">
        <div :class="calendarHeaderClass">
            <slot name="header" :data="headerContent">
                <span class="vc-calendar-header--title">
                    <slot name="title" :title="headerContent.title">{{ headerContent.title }}</slot>
                </span>
                <vc-button-group>
                    <vc-button prefixIcon="ArrowLeft" @click="prev">
                        <template v-if="headerContent.prevText" #default>
                            {{ headerContent.prevText }}
                        </template>
                    </vc-button>
                    <vc-button @click="setToday">{{ headerContent.currentText }}</vc-button>
                    <vc-button suffixIcon="ArrowRight" @click="next">
                        <template v-if="headerContent.nextText" #default>
                            {{ headerContent.nextText }}
                        </template>
                    </vc-button>
                </vc-button-group>
            </slot>
        </div>
        <div :class="calendarNS.setBlock('wrapper')">
            <component :is="componentName" v-bind="$attrs" ref="componentRef">
                <template #date="{ data }">
                    <slot name="day" :data="data">{{
        props.mode !== 'year' ? data.day : data.month + '月'
                        }}</slot>
                </template>
                <template #schedule="{ data }">
                    <slot name="schedule" :data="data"></slot>
                </template>
            </component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, markRaw, reactive, provide, toRef } from 'vue';
import { calendarProps, CurrentText, calendarEmits } from "./calendar"
import VcCalendarWeek from '../CalendarWeek/calendarWeek.vue';
import VcCalendarMonth from '../CalendarMonth/calendarMonth.vue';
import VcCalendarYear from '../CalendarYear/calendarYear.vue';
import { useNS } from "vc-hooks"
import dayjs, { Dayjs } from "dayjs"
import { SelectedCalendarItem, HeaderContent, CalendarContext, calendarContextKey } from '@various-curious-ui/typings';
defineOptions({
    name: "VcCalendar",
    inheritAttrs: false
})

const props = defineProps(calendarProps);
const emits = defineEmits(calendarEmits)

const calendarNS = useNS('calendar');

const _ref = ref()

const componentName = ref();
const components = {
    week: VcCalendarWeek,
    month: VcCalendarMonth,
    year: VcCalendarYear,
}

const headerContent = reactive<HeaderContent>({
    title: dayjs().format("YYYY年MM月"),
    currentText: "",
    prevText: "",
    nextText: ""
})

watchEffect(() => {
    if (props.mode) {
        componentName.value = markRaw(components[props.mode]);
        headerContent.currentText = props.currentText || CurrentText[props.mode]
        headerContent.prevText = props.prevText
        headerContent.nextText = props.nextText
    }
});

const calendarValue = computed({
    get() {
        return props.value
    },
    set(val) {
        emits("update:value", val)
    }
}) as any

provide(calendarContextKey,
    reactive<CalendarContext>({
        headerContent: headerContent,
        value: calendarValue,
    })
)

const calendarClass = computed(() => {
    return [
        calendarNS.namespace,
    ]
})

const calendarHeaderClass = computed(() => {
    return [
        calendarNS.setBlock("header"),
    ]
})

const componentRef = ref()

const prev = () => {
    componentRef.value?.prev();
};
const setToday = () => {
    componentRef.value?.setToday();
};
const next = () => {
    componentRef.value?.next();
}
const change = (appointDate: SelectedCalendarItem) => {
    return componentRef.value?.change(appointDate)
}

const setDate = (appointDate?: Dayjs) => {
    return componentRef.value?.setDate(appointDate)
}

const getSelectedData = (): SelectedCalendarItem[] => {
    return componentRef.value?.getSelectedData()
}


defineExpose({
    prev,
    setToday,
    setDate,
    next,
    change,
    getSelectedData
});

</script>