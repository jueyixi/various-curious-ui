<template>
    <div :class="calendarClass" ref="_ref">
        <div :class="calendarHeaderClass">
            <slot name="header" :data="headerData">
                <span class="vc-calendar-header--title">
                    <slot name="title" :title="headerData.title">{{ headerData.title }}</slot>
                </span>
                <vc-button-group>
                    <vc-button prefixIcon="ArrowLeft" @click="prev">
                        <template v-if="headerData.prevTitle" #default>
                            {{ headerData.prevTitle }}
                        </template>
                    </vc-button>
                    <vc-button @click="toCurrent">{{ headerData.currentTitle }}</vc-button>
                    <vc-button suffixIcon="ArrowRight" @click="next">
                        <template v-if="headerData.nextTitle" #default>
                            {{ headerData.nextTitle }}
                        </template>
                    </vc-button>
                </vc-button-group>
            </slot>
        </div>
        <div :class="calendarNS.setBlock('wrapper')">
            <component :is="componentName" v-bind="$attrs" ref="componentRef">
                <template #date="{ data }">
                    <slot name="day" :data="data">{{
                        props.type !== 'year' ? data.day : data.month + '月'
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
import { ref, computed, watchEffect, markRaw, reactive,provide } from 'vue';
import { calendarProps, CurrentTitle } from "./calendar"
import VcCalendarWeek from '../CalendarWeek/calendarWeek.vue';
import VcCalendarMonth from '../CalendarMonth/calendarMonth.vue';
import VcCalendarYear from '../CalendarYear/calendarYear.vue';
import { useNS } from "vc-hooks"
import * as dayjs from "dayjs"
defineOptions({
    name: "VcCalendar",
    inheritAttrs: false
})

const _ref = ref()

const componentName = ref();
const components = {
    week: VcCalendarWeek,
    month: VcCalendarMonth,
    year: VcCalendarYear,
}

const headerData = reactive({
    title: dayjs().format("YYYY年MM月"),
    currentTitle: "",
    prevTitle: "",
    nextTitle: ""
})

watchEffect(() => {
    if (props.type) {
        componentName.value = markRaw(components[props.type]);
        headerData.currentTitle = props.currentTitle || CurrentTitle[props.type]
        headerData.prevTitle = props.prevTitle
        headerData.nextTitle = props.nextTitle
    }
});

provide("headerData", headerData)

const props = defineProps({
    ...calendarProps
});

const calendarNS = useNS('calendar');

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
    componentRef.value.prev();
};
const toCurrent = () => {
    componentRef.value.toCurrent();
};
const next = () => {
    componentRef.value.next();
}
defineExpose({
    prev,
    toCurrent,
    next,
});

</script>