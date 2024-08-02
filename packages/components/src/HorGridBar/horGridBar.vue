<template>
  <div :class="[gridBarNS.namespace]">
    <div :class="[gridBarNS.setBlock('bar')]" :style="setBgStyle">
      <svg width="100%" height="100%">
        <defs>
          <linearGradient :id="getGrid()" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" :stop-color="bgColor[0]" stop-opacity="1" />
            <stop offset="100%" :stop-color="bgColor[1]" stop-opacity="1" />
          </linearGradient>
          <linearGradient :id="getGridItem()" x1="0%" x2="100%" y1="0%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" :stop-color="color[0]" stop-opacity="1" />
            <stop offset="100%" :stop-color="color[1]" stop-opacity="1" />
          </linearGradient>
        </defs>
        <line x1="0" x2="100%" y1="0%" y2="0%" :stroke="`url(#${getGrid()})`" :stroke-dasharray="props.partGap"
          style="fill: none; stroke-width: 100%" />
        <line x1="0" :x2="percent + '%'" y1="0%" y2="0%" :stroke="`url(#${getGridItem()})`"
          :stroke-dasharray="props.partGap" style="fill: none; stroke-width: 100%">
          <animate v-if="animate" attributeName="x2" attributeType="XML" :from="props.from || '0%'"
            :to="props.to || percent + '%'" :by="props.by" :begin="props.begin" :dur="props.dur"
            :repeatCount="props.repeatCount" :fill="props.fill" v-bind="{ ...props.animation }"></animate>
        </line>
      </svg>
    </div>
    <div :class="[gridBarNS.setBlock('text')]" v-if="props.showText">
      <slot name="text" :percent="percent">{{ percent }}% </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { horGridBarProps } from "./horGridBar"
import { useNS, useZIndex } from "vc-hooks"
import { isArray, isNumber } from 'vc-utils';
defineOptions({
  name: "VcHorGridBar",
  inheritAttrs: false
})

const _ref = ref()

const props = defineProps({
  ...horGridBarProps
});

const gridBarNS = useNS('grid');

const { getIndex, setIndex } = useZIndex("grid")

const VALUE = Number(props.value)
const MAX_VALUE = Number(props.maxValue)

const setBgStyle = computed(() => {
  let style: any = {};
  if (isNumber(props.strokeWidth)) {
    style.height = props.strokeWidth + 'px';
    style.lineHeight = props.strokeWidth + 'px';
  } else {
    style.height = props.strokeWidth;
    style.lineHeight = props.strokeWidth;
  }
  return style;
});
const percent = Number(((VALUE / MAX_VALUE) * 100).toFixed(2)) / 1;
const bgColor = ref<string[]>([]);
const color = ref<string[]>([]);
if (props.background && isArray(props.background)) {
  bgColor.value = props.background as string[];
} else {
  const background = props.background as string
  bgColor.value = [background || '#d9d9d9', background || '#d9d9d9'];
}
if (props.color && isArray(props.color)) {
  color.value = props.color as string[];
} else {
  const colorValue = props.color as string
  color.value = [colorValue || '#329cff', colorValue || '#329cff'];
}
setIndex();
const getGrid = () => {
  return 'grid' + getIndex();
};
const getGridItem = () => {
  return 'gridItem' + getIndex();
};
</script>