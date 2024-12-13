<template>
    <div :class="[progressNS.namespace]" ref="progressRef">
        <div :class="[progressNS.setBlock('bg'),]" :style="setBgStyle()">
            <div :class="ProgressBarClass" :style="setStyle()"></div>
        </div>
        <div :class="[progressNS.setBlock('text'),]" v-if="props.showText">
            <slot name="text" :percent="percent">{{ percent }}% </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { StyleValue } from "vue";
import { progressProps } from "./progress"
import { useNS, useZIndex } from "vc-hooks"
import { isArray, isNumber, setValueByPx } from 'vc-utils';
defineOptions({
    name: "VcProgress",
    inheritAttrs: false
})

const _ref = ref()

const props = defineProps({
    ...progressProps
});

const progressNS = useNS('progress');

const { getIndex, setIndex } = useZIndex("progress")

const ProgressBarClass = computed(() => {
    return [
        progressNS.setBlock('bar'),
        progressNS.is(props.status),
    ]
})

setIndex();
const percent = Number(((Number(props.value) / Number(props.maxValue)) * 100).toFixed(2)) / 1;
const progressRef = ref();
const setBgStyle = () => {
    let style: StyleValue = {};
    if (props.background && isArray(props.background)) {
        style.background = `linear-gradient(90deg,${props.background[0]} 0%,${props.background[1]} 100%)`;
    } else {
        style.background = props.background as string;
    }
    if (props.round) {
        style.borderRadius = '10px';
    }
    return style;
};
const setStyle = () => {
    let style: StyleValue = {};
    style.width = percent + '%';
    style.height = setValueByPx(props.strokeWidth);
    if (props.color && isArray(props.color)) {
        style.background = `linear-gradient(90deg,${props.color[0]} 0%,${props.color[1]} 100%)`;
    } else {
        style.background = props.color as string;
    }
    if (props.round) {
        style.borderRadius = '10px';
    }
    if (props.animate) {
        const keyframes = `@keyframes basicAnimate${getIndex()}{
          from {
            width:0;
          }
          to {
            width:${style.width}
          }
      }`;
        style.animation = `basicAnimate${getIndex()} ${props.dur} ${props.transitionName} ${props.delay
            } ${props.repeatCount} ${props.fill}`;
        // 创建style标签
        const styleDom = document.createElement('style');
        // 设置style属性
        styleDom.type = 'text/css';
        // 将 keyframes样式写入style内
        styleDom.innerHTML = keyframes;
        // 将style样式存放到head标签
        document.head.appendChild(styleDom);
    }
    return style;
};

</script>