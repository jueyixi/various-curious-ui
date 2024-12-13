<template>
    <transition :name="scrollbarNS.setBlock('fade')">
        <div ref="instanceRef" :style="trackStyle" :class="trackClass" @mousedown="handleClickTrack"
            v-show="always || visible">
            <div ref="thumbRef" :class="thumbClass" :style="thumbStyle" @mousedown="handleClickThumb"></div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, toRef, onBeforeUnmount, inject, computed } from 'vue';
import type { StyleValue } from "vue"
import { thumbProps, thumbEmits, BarConfig } from "./thumb";
import { useNS } from "vc-hooks"
import { setValueByPx } from "vc-utils"
import { useEventListener, isClient } from '@vueuse/core'
import { scrollbarContextKey } from './constants'

const props = defineProps(thumbProps);

const emits = defineEmits(thumbEmits);

const scrollbarNS = useNS('scrollbar');

const scrollbar = inject(scrollbarContextKey)

if (!scrollbar) throw new Error("Thumb 获取不到滚动条上下文");

const bar = computed(() => BarConfig[props.vertical ? 'vertical' : 'horizontal'])

const trackClass = computed(() => {
    return [scrollbarNS.setBlock('track'), props.vertical ? 'is-vertical' : 'is-horizontal']
})

const trackStyle = computed(() => {
    const style: StyleValue = {}
    if (scrollbar.gap) {
        const gap = scrollbar.gap
        if (props.vertical) {
            style['--vc-scrollbar-bar-top'] = setValueByPx(gap)
        } else {
            style['--vc-scrollbar-bar-left'] = setValueByPx(gap)
        }
    }
    if (props.barWidth) {
        if (props.vertical) {
            style['--vc-scrollbar-bar-width'] = setValueByPx(props.barWidth)
        } else {
            style['--vc-scrollbar-bar-height'] = setValueByPx(props.barWidth)
        }
    }
    if (scrollbar.track) {
        if (scrollbar.track?.color) {
            style['--vc-scrollbar-bar-color'] = scrollbar.track?.color
        }
        if (scrollbar.track?.borderRadius) {
            style['--vc-scrollbar-bar-border-radius'] = setValueByPx(scrollbar.track?.borderRadius)
        }
    }
    if (scrollbar.thumb) {
        if (scrollbar.thumb?.right) {
            style['--vc-scrollbar-bar-right'] = setValueByPx(scrollbar.thumb?.right)
        }
        if (scrollbar.thumb?.bottom) {
            style['--vc-scrollbar-bar-bottom'] = setValueByPx(scrollbar.thumb?.bottom)
        }
    }
    return style
})

const thumbClass = computed(() => {
    return [scrollbarNS.setBlock('thumb')]
})

const thumbStyle = computed(() => {
    const style: StyleValue = {
        [bar.value.size]: setValueByPx(props.size),
        transform: `translate${bar.value.axis}(${props.move}%)`,
    }
    if (scrollbar.thumb) {
        if (scrollbar.thumb?.color) {
            style['--vc-scrollbar-thumb-color'] = scrollbar.thumb?.color
        }
        if (scrollbar.thumb?.opacity) {
            style['--vc-scrollbar-thumb-opacity'] = scrollbar.thumb?.opacity
        }
        if (scrollbar.thumb?.hoverColor) {
            style['--vc-scrollbar-thumb-hover-color'] = scrollbar.thumb?.hoverColor
        }
        if (scrollbar.thumb?.hoverOpacity) {
            style['--vc-scrollbar-thumb-hover-opacity'] = scrollbar.thumb?.hoverOpacity
        }
    }
    return style
})

const offsetRatio = computed(
    () =>
        instanceRef.value![bar.value.offset] ** 2 /
        scrollbar.wrapElement![bar.value.scrollSize] /
        props.ratio /
        thumbRef.value![bar.value.offset]
)

// 外层轨道
const instanceRef = ref<HTMLDivElement>()
// 内层滑块
const thumbRef = ref<HTMLDivElement>()

const thumbState = ref<Partial<Record<'X' | 'Y', number>>>({})

const visible = ref(false)

let cursorDown = false
let cursorLeave = false
let originalOnSelectStart:| ((this: GlobalEventHandlers, ev: Event) => any) | null = isClient ? document.onselectstart : null

const mouseMoveDocumentHandler = (e: MouseEvent) => {
    if (!instanceRef.value || !thumbRef.value) return
    if (cursorDown === false) return

    const prevPage = thumbState.value[bar.value.axis]
    if (!prevPage) return

    const offset =
        (instanceRef.value.getBoundingClientRect()[bar.value.direction] -
            e[bar.value.client]) *
        -1
    const thumbClickPosition = thumbRef.value[bar.value.offset] - prevPage
    const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100 * offsetRatio.value) /
        instanceRef.value[bar.value.offset]
    scrollbar.wrapElement[bar.value.scroll] =
        (thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize]) /
        100
}

const mouseUpDocumentHandler = () => {
    cursorDown = false
    thumbState.value[bar.value.axis] = 0
    document.removeEventListener('mousemove', mouseMoveDocumentHandler)
    document.removeEventListener('mouseup', mouseUpDocumentHandler)
    restoreOnselectstart()
    if (cursorLeave) visible.value = false
}

// 开始拖动
const startDrag = (e: MouseEvent) => {
    e.stopImmediatePropagation()
    cursorDown = true
    document.addEventListener('mousemove', mouseMoveDocumentHandler)
    document.addEventListener('mouseup', mouseUpDocumentHandler)
    originalOnSelectStart = document.onselectstart
    document.onselectstart = () => false
}

// 拖动滚动条
const handleClickThumb = (e: MouseEvent) => {    
    e.stopPropagation()
    if (e.ctrlKey || [1, 2].includes(e.button)) return

    window.getSelection()?.removeAllRanges()
    startDrag(e)

    const el = e.currentTarget as HTMLDivElement
    if (!el) return
    thumbState.value[bar.value.axis] =
        el[bar.value.offset] -
        (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction])
}

// 点击轨道
const handleClickTrack = (e: MouseEvent) => {
    if (!thumbRef.value || !instanceRef.value || !scrollbar.wrapElement) return

    const offset = Math.abs(
        (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
        e[bar.value.client]
    )
    const thumbHalf = thumbRef.value[bar.value.offset] / 2
    const thumbPositionPercentage =
        ((offset - thumbHalf) * 100 * offsetRatio.value) /
        instanceRef.value[bar.value.offset]

    scrollbar.wrapElement[bar.value.scroll] =
        (thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize]) /
        100
}

const mouseMoveScrollbarHandler = () => {
    cursorLeave = false
    visible.value = !!props.size
}

const mouseLeaveScrollbarHandler = () => {
    cursorLeave = true
    visible.value = cursorDown
}

useEventListener(
    toRef(scrollbar, 'scrollbarElement'),
    'mousemove',
    mouseMoveScrollbarHandler
)
useEventListener(
    toRef(scrollbar, 'scrollbarElement'),
    'mouseleave',
    mouseLeaveScrollbarHandler
)

const restoreOnselectstart = () => {
    if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart
}

onBeforeUnmount(() => {
    restoreOnselectstart()
    document.removeEventListener('mouseup', mouseUpDocumentHandler)
})
</script>