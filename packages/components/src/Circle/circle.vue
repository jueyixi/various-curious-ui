<template>
    <div :class="[circleNS.namespace]">
        <svg
          :style="{ transform: props.clockWise ? 'rotateY(0deg)' : 'rotateY(180deg)' }"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          :viewBox="`0 0 ${Number(props.contentWidth)} ${Number(props.contentWidth)}`"
        >
          <!-- 定义渐变色 -->
          <defs v-if="props?.gradient?.id">
            <linearGradient
              :id="props?.gradient?.id"
              :x1="props?.gradient?.x1"
              :y1="props?.gradient?.y1"
              :x2="props?.gradient?.x2"
              :y2="props?.gradient?.y2"
            >
              <stop
                v-for="(v, i) in props?.gradient?.colorStops"
                :key="i"
                :offset="v.offset"
                :stop-color="v.color"
              />
            </linearGradient>
          </defs>
          <defs v-else-if="props?.gradients?.length">
            <linearGradient
              v-for="item in props.gradients"
              :key="item.id"
              :id="item.id"
              :x1="item.x1"
              :y1="item.y1"
              :x2="item.x2"
              :y2="item.y2"
            >
              <stop
                v-for="(v, i) in item.colorStops"
                :key="i"
                :offset="v.offset"
                :stop-color="v.color"
              />
            </linearGradient>
          </defs>
          <defs v-else-if="bgColorArray || colorArray">
            <linearGradient v-if="bgColorArray" :id="getCircle()" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" :stop-color="bgColor?.[0]" />
              <stop offset="100%" :stop-color="bgColor?.[1]" />
            </linearGradient>
            <linearGradient v-if="colorArray" :id="getCircleItem()" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" :stop-color="color?.[0]" />
              <stop offset="100%" :stop-color="color?.[1]" />
            </linearGradient>
          </defs>
          <!-- 底部背景圆环 -->
          <circle
            :cx="props.contentWidth / 2"
            :cy="props.contentWidth / 2"
            :r="radius"
            :stroke="bgStroke"
            :stroke-width="props.width"
            fill="none"
          />
          <!-- 进度条圆环 -->
          <circle
            :cx="props.contentWidth / 2"
            :cy="props.contentWidth / 2"
            :r="radius"
            :stroke-dasharray="strokeDasharray()"
            :stroke-dashoffset="strokeDashoffset()"
            :stroke="barStroke"
            :stroke-width="props.width"
            :stroke-linecap="props.lineCap"
            fill="none"
            :transform="`rotate(-90, ${props.contentWidth / 2}, ${props.contentWidth / 2})`"
          >
            <animate
              v-if="animate"
              attributeName="stroke-dashoffset"
              attributeType="XML"
              :from="setValue('form')"
              :to="setValue('to')"
              :by="setValue('to')"
              :begin="props.begin"
              :dur="props.dur"
              :repeatCount="props.repeatCount"
              :fill="props.fill"
              v-bind="{ ...props.animation }"
            ></animate>
          </circle>
          <!-- 环形分割细线 -->
          <circle
            :cx="props.contentWidth / 2"
            :cy="props.contentWidth / 2"
            :r="radius"
            :stroke="separateColor"
            fill="transparent"
            :stroke-width="props.width + 2"
            :stroke-dasharray="separateDasharray()"
            :transform="`rotate(-90, ${props.contentWidth / 2}, ${props.contentWidth / 2})`"
          ></circle>
        </svg>
        <div :class="[circleNS.setBlock('text')]" v-if="props.showText">
          <slot name="text" :percent="percent"></slot>
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { circleProps } from "./circle"
import { useNS, useZIndex } from "vc-hooks"
import { isArray} from 'vc-utils';
defineOptions({
    name: "VcCircle",
    inheritAttrs: false
})

const _ref = ref()

const props = defineProps({
    ...circleProps
});

const circleNS = useNS('circle');

const { getIndex, setIndex } = useZIndex("circle")

const VALUE = Number(props.value)
const MAX_VALUE = Number(props.maxValue)

const radius = computed(() => {
    return (props.contentWidth - props.width) / 2;
});
const percent = Number(((VALUE / MAX_VALUE) * 100).toFixed(2)) / 1;
const setValue = computed(() => {
    return (value) => {
        if (value === 'form') {
            return props.from ? Math.PI * radius.value * props.from : Math.PI * radius.value * 2;
        }
        if (value === 'to') {
            return props.to ? Math.PI * radius.value * props.to : strokeDashoffset();
        }
        if (value === 'by') {
            return props.by ? Math.PI * radius.value * props.by : undefined;
        }
    };
});
setIndex();
const getCircle = () => {
    return 'circle' + getIndex();
};
const getCircleItem = () => {
    return 'circleItem' + getIndex();
};
const bgColorArray = ref(false);
const colorArray = ref(false);
const bgColor = ref<string | string[] | undefined>("");
const color = ref<string | string[] | undefined>("");
if (isArray(props.background)) {
    bgColor.value = props.background;
    bgColorArray.value = true;
} else {
    bgColor.value = props.background || 'rgba(0,0,0,0.1)';
}
if (isArray(props.color)) {
    color.value = props.color;
    colorArray.value = true;
} else {
    color.value = props.color || '#1890ff';
}
const strokeDasharray = () => {
    let value = 0;
    if (props.lineCap === 'round') {
        value = 2 * Math.PI * radius.value + props.width;
    } else {
        value = 2 * Math.PI * radius.value;
    }
    return value;
};
const separateDasharray = () => {
    let partLength = (2 * Math.PI * radius.value) / props.part;
    return `${props.partGap} ${partLength - props.partGap}`;
};
const strokeDashoffset = () => {
    let val = 0;
    let value = VALUE / MAX_VALUE;
    if (value > 1) {
        value = 1;
    } else if (value < 0) {
        value = 0;
    }
    if (props.lineCap === 'round') {
        val = 2 * Math.PI * radius.value * (1 - value) + props.width;
    } else {
        val = 2 * Math.PI * radius.value * (1 - value);
    }
    return val;
};
const bgStroke = computed(() => {
    let value: string | undefined = ""
    if (props?.gradients?.length) {
        value = `url(#${props?.gradients?.[0]?.id})`
    } else if (bgColorArray.value) {
        value = `url(#${getCircle()})`
    } else {
        value = bgColor.value as string
    }
    return value
})
const barStroke = computed(() => {
    let value: string | undefined = ""
    if (props?.gradient?.id) {
        value = `url(#${props?.gradient?.id})`
    } else if (props?.gradients?.length) {
        value = `url(#${props?.gradients?.[1]?.id})`
    } else if (colorArray.value) {
        value = `url(#${getCircleItem()})`
    } else {
        value = color.value as string
    }
    return value
})
</script>