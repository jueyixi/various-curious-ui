<template>
    <div :class="[scrollbarNS.namespace]" ref="scrollbarRef" :style="{ height: height && setValueByPx(height) }">
        <div :class="wrapClass" ref="wrapRef" :style="wrapStyle" @scroll="handleScroll">
            <div :class="contentClass" :style="contentStyle" ref="contentRef">
                <slot></slot>
            </div>
        </div>
        <template v-if="!native">
            <Bar ref="barRef" :height="defaultConfig.sizeHeight" :width="defaultConfig.sizeWidth" :always="always"
                :ratio-x="defaultConfig.ratioX" :gap="gap" :bar-width="barWidth" :ratio-y="defaultConfig.ratioY" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUpdated, provide, reactive, ref, watch } from 'vue';
import type { StyleValue, CSSProperties } from 'vue';
import { useEventListener, useResizeObserver } from '@vueuse/core';
import { scrollbarProps, scrollbarEmits } from './scrollbar';
import { scrollbarContextKey } from './constants';
import type { BarInstance } from './bar';
import { useNS } from 'vc-hooks';
import { setValueByPx, isNumber, isObject } from 'vc-utils';
import Bar from './bar.vue';

defineOptions({
    name: 'VcScrollBar',
    inheritAttrs: false,
});
const props = defineProps(scrollbarProps);

const emits = defineEmits(scrollbarEmits);

const scrollbarNS = useNS('scrollbar');

let stopResizeObserver: (() => void) | undefined = undefined;
let stopResizeListener: (() => void) | undefined = undefined;

const scrollbarRef = ref<HTMLDivElement>();
const wrapRef = ref<HTMLDivElement>();
const contentRef = ref<HTMLDivElement>();

const barRef = ref<BarInstance>();

const defaultConfig = reactive({
    sizeWidth: '0',
    sizeHeight: '0',
    ratioX: 1,
    ratioY: 1,
});

const wrapClass = computed(() => {
    return [scrollbarNS.setBlock('wrap'), !props.native && 'not-scroll', props.wrapClass];
});

const wrapStyle = computed<StyleValue>(() => {
    const style: CSSProperties = {};
    if (props.position === 'outside') {
        style.width = `calc(100% - ${setValueByPx(props.barWidth || 6)} - ${setValueByPx(props.outsideGap || 0)})`;
        style.height = `calc(${props.height ? setValueByPx(props.height) : '100%'} - ${setValueByPx(props.barWidth || 6)} - ${setValueByPx(props.outsideGap || 0)})`;
    } else {
        if (props.height) style.height = setValueByPx(props.height);
    }
    if (props.maxHeight) style.maxHeight = setValueByPx(props.maxHeight);
    return [style, props.wrapStyle];
});

const contentClass = computed(() => {
    return [scrollbarNS.setBlockEle('wrap', 'content'), props.contentClass];
});

const contentStyle = computed<StyleValue>(() => {
    return props.contentStyle;
});

const handleScroll = () => {
    if (wrapRef.value) {
        barRef.value?.handleScroll(wrapRef.value);

        emits('scroll', {
            scrollTop: wrapRef.value.scrollTop,
            scrollLeft: wrapRef.value.scrollLeft,
        });
    }
};

function scrollTo(xCord: number, yCord?: number): void;
function scrollTo(options: ScrollToOptions): void;
function scrollTo(arg1: unknown, arg2?: number) {
    if (isObject(arg1)) {
        wrapRef.value!.scrollTo(arg1);
    } else if (isNumber(arg1) && isNumber(arg2)) {
        wrapRef.value!.scrollTo(arg1 as any, arg2);
    }
}

const setScrollTop = (value: number) => {
    if (!isNumber(value)) {
        return;
    }
    wrapRef.value!.scrollTop = value;
};

const setScrollLeft = (value: number) => {
    if (!isNumber(value)) {
        return;
    }
    wrapRef.value!.scrollLeft = value;
};

const GAP = props.gap * 2;

const update = () => {
    if (!wrapRef.value) return;
    const offsetHeight = wrapRef.value.offsetHeight - GAP;
    const offsetWidth = wrapRef.value.offsetWidth - GAP;

    const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight;
    const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth;
    const height = props.size ? props.size : Math.max(originalHeight, props.minSize);
    const width = props.size ? props.size : Math.max(originalWidth, props.minSize);

    defaultConfig.ratioY = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
    defaultConfig.ratioX = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));

    defaultConfig.sizeHeight = height + GAP < offsetHeight ? `${height}px` : '';
    defaultConfig.sizeWidth = width + GAP < offsetWidth ? `${width}px` : '';
};

watch(
    () => props.stopResize,
    (val) => {
        if (val) {
            stopResizeObserver?.();
            stopResizeListener?.();
        } else {
            ({ stop: stopResizeObserver } = useResizeObserver(contentRef, update));
            stopResizeListener = useEventListener('resize', update);
        }
    },
    { immediate: true },
);

watch(
    () => [props.maxHeight, props.height],
    () => {
        if (!props.native)
            nextTick(() => {
                update();
                if (wrapRef.value) {
                    barRef.value?.handleScroll(wrapRef.value);
                }
            });
    },
);

provide(
    scrollbarContextKey,
    reactive({
        scrollbarElement: scrollbarRef,
        wrapElement: wrapRef,
        gap: props.gap,
        thumb: props.thumb,
        track: props.track,
    }),
);

onMounted(() => {
    if (!props.native)
        nextTick(() => {
            update();
        });
});
onUpdated(() => update());

defineExpose({
    wrapRef,
    update,
    scrollTo,
    handleScroll,
    setScrollLeft,
    setScrollTop,
});
</script>
