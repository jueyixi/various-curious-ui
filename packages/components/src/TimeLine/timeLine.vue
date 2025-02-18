<template>
    <vc-scroll-bar ref="scrollbarWrapRef" :contentStyle="timeLineWrapStyle" v-bind="scrollbar"
        :contentClass="timeLineWrapClass">
        <div :class="[timeLineNS.namespace]" ref="timeLineRef" v-if="props.dataSource?.length">
            <div :class="[timeLineNS.setBlock('item')]">
                <div :class="[timeLineNS.setBlockEle('item','line')]"
                    :style="firstStyle"></div>
            </div>
            <div :class="[timeLineNS.setBlock('item')]" v-for="(item, index) in TimeList" :key="index">
                <div :class="[timeLineNS.setBlock('divider')]" :ref="(el:any) => setRef(el,index)"
                    :style="dividerStyle[index]">
                    <div :style="dividerNameStyle" :class="[timeLineNS.setBlockModifier('divider', 'name')]">
                        <slot name="year" :data="item">
                            <span v-if="item?.format">{{ item?.format(item) }}</span>
                            <span v-else-if="split?.title?.format">{{ split?.title?.format(item) }}</span>
                            <span v-else>{{ item.year }}年</span>
                        </slot>
                    </div>
                    <div :style="dividerLineStyle" :class="[timeLineNS.setBlockModifier('divider', 'line')]">
                    </div>
                </div>
                <div :class="[timeLineNS.setBlockEle('item', 'line')]" :style="lineStyle(index)"></div>
                <div :class="[timeLineNS.setBlockEle('item', 'point')]" v-for="(v, i) in item.list" :key="i"
                    :style="pointWrapStyle(item.year, v)">
                    <div :class="[timeLineNS.setBlock('point'), v.disabled ? 'is-disabled__point' : 'vc-pointer']"
                        @click="pointClick(v)" :style="pointStyle(v)"
                        :ref="(el) => setPointRefs(el,`pointRef-${index}-${i}`)">
                        <div :class="pointInnerClass(v)">
                        </div>
                    </div>
                    <vc-floating :teleported="false" v-bind="props.floating"
                        :autoOpen="defaultConfig.showPopper && v.showPopper" trigger="manual"
                        v-model:visible="v.showPopper" :reference="() => getPointRef(`pointRef-${index}-${i}`)">
                        <slot name="popper" :data="v">
                            <span>{{ v.desc }}</span>
                        </slot>
                    </vc-floating>
                </div>
            </div>
        </div>
    </vc-scroll-bar>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed, nextTick } from 'vue';
import type { StyleValue } from "vue"
import { timeLineProps, timeLineEmits } from "./timeLine";
import { useNS } from "vc-hooks"
import { setValueByPx, isArray, isString, toFixed } from "vc-utils"
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'
import VcFloating from '../Floating/floating.vue';
import type { TimeLine, LineItem, TimeLineItem, DefaultConfig, SplitType } from "@various-curious-ui/typings"
import VcScrollBar from '../ScrollBar/scrollBar.vue';

dayjs.extend(isLeapYear)

defineOptions({
    name: "VcTimeLine",
    inheritAttrs: false,
})
const props = defineProps(timeLineProps);

const emits = defineEmits(timeLineEmits);

const timeLineNS = useNS('timeline');

const scrollbarWrapRef = ref()
const timeLineRef = ref()

const TimeList = ref<TimeLine>(props.dataSource)

const selectedItem = ref<LineItem>()

const split: SplitType = props.split || {}

// 基础配置
const defaultConfig = computed<DefaultConfig>(() => {
    return {
        beforeWidth: 60,
        lineWidth: 344,
        selected: true,
        showPopper: true,
        ...props?.defaultConfig
    }
})

const lineWidth = computed(() => {
    return defaultConfig.value.lineWidth === 'auto' ? Number(toFixed((scrollbarWrapRef.value?.wrapRef?.offsetWidth - defaultConfig.value?.beforeWidth) / TimeList.value.length)) : defaultConfig.value?.lineWidth
})

const firstStyle = computed(() => {
    const style: StyleValue = {
        width: setValueByPx(defaultConfig.value.beforeWidth)
    }
    return style
})

const timeLineWrapStyle = computed(() => {
    const style: StyleValue = {}
    if (props.height) {
        style['--vc-timeline-height'] = setValueByPx(props.height)
    }
    return [style,props.scrollbar?.contentStyle]
})

const timeLineWrapClass = computed(() => {
    const classList: string[] = [timeLineNS.setBlock('wrap'), timeLineNS.is(props.disabled, 'disabled')]
    if (props.scrollbar?.contentClass) {
        if (isString(props.scrollbar?.contentClass)) {
            classList.push(props.scrollbar?.contentClass as string)
        } else if (isArray(props.scrollbar?.contentClass)) {
            classList.push(...(props.scrollbar?.contentClass as string[]))
        }
    }
    return classList
})

// 年份分割线样式修改
const dividerLineStyle = computed(() => {
    const style: StyleValue = {}
    if (split?.line) {
        if (split?.line?.width) {
            style['--vc-timeline-divider-line-width'] = setValueByPx(split?.line?.width)
        }
        if (split?.line?.height) {
            style['--vc-timeline-divider-line-height'] = setValueByPx(split?.line?.height)
        }
        if (split?.line?.color) {
            style['--vc-timeline-divider-line-color'] = split?.line?.color
        }
    }
    return style
})

// 年份文案样式修改
const dividerNameStyle = computed(() => {
    const style: StyleValue = {}
    if (split?.title) {
        if (split?.title?.fontSize) {
            style['--vc-timeline-divider-name-fs'] = setValueByPx(split?.title?.fontSize)
        }
        if (split?.title?.color) {
            style['--vc-timeline-divider-name-color'] = split?.title?.color
        }
        if (split?.title?.lineHight) {
            style['--vc-timeline-divider-name-lh'] = setValueByPx(split?.title?.lineHight)
        }
    }
    return style
})

// 年份的位置样式列表--非暴露属性
const dividerStyle = ref<any>([])
// 年份分割线ref集合
const dividerRefs = ref([])

// 创建年份分割时生成ref
const setRef = (el:any, index:number) => {
    if (el) {
        dividerRefs.value[index] = el;
    }
};
// 生成ref后计算其相关属性并添加到dom上
const setDividerStyle = () => {
    const length = TimeList?.value?.length || 0;
    nextTick(() => {
        for (let i = 0; i < length; i++) {
            const element = dividerRefs.value?.[i];
            const style: StyleValue = {};
            if (element) {
                const elementWidth = element.offsetWidth;
                const left = (elementWidth / 2).toFixed(2);
                style.left = `-${left}px`;
            }
            if (split?.gap) {                
                style['--vc-timeline-divider-gap'] = setValueByPx(split.gap)
            }
            dividerStyle.value[i] = style
        }
    });
}

// 时间节点ref集合
const pointRefs = ref<any>({})
// 生成时间点ref
const setPointRefs = (el: any,refName:string) => {
    if (el) {
        pointRefs.value[refName] = el
    }
}
// 获取时间点ref
const getPointRef = (refName: string) => {
    return pointRefs.value[refName]
}
// 计算时间点内部元素的样式类
const pointInnerClass = computed(() => {
    return (v: LineItem) => {
        v.selected = v?.selected ?? v.showPopper
        return [timeLineNS.setBlockEle('point', 'inner'), defaultConfig.value?.selected && v.selected && timeLineNS.setBlockModifier('point', 'active')]
    }
})
// 计算时间点的样式属性
const pointStyle = computed(() => {
    return (v: LineItem) => {
        const PointStyle: StyleValue = v?.pointStyle || {}
        if ((v.pointStyle?.color || defaultConfig.value?.pointColor)) {
            PointStyle['--vc-timeline-point-color'] = v.pointStyle?.color || defaultConfig.value?.pointColor
        }
        if (v.pointStyle?.width || defaultConfig.value?.pointWidth) {
            PointStyle['--vc-timeline-point-width'] = setValueByPx(v.pointStyle?.width || defaultConfig.value?.pointWidth)
        }   
        if (v.pointStyle?.height || defaultConfig.value?.pointHeight) {
            PointStyle['--vc-timeline-point-height'] = setValueByPx(v.pointStyle?.width || defaultConfig.value?.pointHeight)
        }       
        return PointStyle
    }
})

// 时间点点击方法
const pointClick = (item: LineItem) => {
    if (!props?.disabled && !item.disabled) {
        item.selected = defaultConfig.value?.selected && !item.selected
        item.showPopper = defaultConfig.value?.showPopper && !item.showPopper
        if (!props.multiple) {
            selectedItem.value = item.selected ? item : {}
            if (item.selected) {
                emits('selected', item)
            }
            if (defaultConfig.value?.showPopper) {
                hidePopper(item)
            }
        }
        emits('click',item)
    }
}

// 获取选中的对象
const getSelectedData = () => {
    const selectedList = []
    if (props.multiple) {
        TimeList.value?.forEach((item: TimeLineItem, index:number) => {
            const list = item.list?.filter((v:LineItem) => v.selected) || []
            selectedList.push(...list)
        })
    }
    return !props.multiple ? selectedItem.value : selectedList
}

// 打开popper
const showPopper = (e?: LineItem) => {
    TimeList.value?.forEach((item: TimeLineItem) => {
        item.list?.forEach((v: LineItem) => {
            if (e?.date == v.date) {
                v.showPopper = e.showPopper
            } else {
                v.showPopper = true
            }
        })
    })
}
// 关闭popper
const hidePopper = (e?:LineItem) => {
    TimeList.value?.forEach((item: TimeLineItem) => {
        item.list?.forEach((v: LineItem) => {
            if (e?.date == v.date) {
                v.showPopper = e.showPopper
            } else {
                v.showPopper = false
            }
        })
    })
}
// 获取时间点在时间轴上的位置
const getPonitStyle = (year:string | number, item: LineItem) => {
    // 获取当前年份的2月10日，用于判断闰年
    const february = year ? dayjs(year + "-02-10") : "";

    // 判断当前年份是否为闰年
    const isLeapYear = year ? (february as dayjs.Dayjs).isLeapYear() : false;

    // 获取当年天数
    let daysInYear = 365;
    if (isLeapYear) {
        daysInYear = 366; // 闰年有366天
    }
    const daysSinceYearStart = item.date ? dayjs(item.date).diff(dayjs(item.date).startOf('year'), 'days') + 1 : 0
    const left = Number((daysSinceYearStart / daysInYear * lineWidth.value).toFixed(2)) - (defaultConfig.value?.pointWidth / 2 || 4) + 'px'
    const style = {
        left
    }
    return style
}
// 计算时间点容器的样式属性
const pointWrapStyle = computed(() => {
    return (year: string | number, item: LineItem) => {
        const style = getPonitStyle(year, item);
        return style;
    };
})
// 计算每年的时间轴宽度
const setLineStyle = (index: number): StyleValue => {
    const year = TimeList?.value?.[index].year
    // 如果该年份节点为当前年且是最后一个年份节点，则计算当前年需展示的宽度线
    if (index == TimeList?.value?.length - 1 && year == dayjs().format("YYYY") && defaultConfig.value?.lineWidth !== 'auto') {
        const lastWidth = getPonitStyle(year, { date: dayjs().format("YYYY-MM-DD") })
        return {
            width: lastWidth.left
        }
    }
    return {
        width: setValueByPx(lineWidth.value)
    }
}
// 计算每个年份节点的样式
const lineStyle = computed(() => {
    return (index:number) => {
        const style = setLineStyle(index);
        return style;
    }
})

onMounted(() => {
    setDividerStyle()
})

defineExpose({
    ref: timeLineRef,
    pointClick,
    showPopper,
    hidePopper,
    getSelectedData
});
</script>