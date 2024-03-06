<template>
  <div :class="[gridBarNS.namespace, gridBarNS.is('vertical')]">
    <template v-if="props.textPosition === 'top'">
      <div :class="[gridBarNS.setBlock('text'),gridBarNS.setBlockModifier('text','top')]" v-if="props.showText">
        <slot name="text" :percent="percent">{{ percent }}% </slot>
      </div>
    </template>
    <div :class="[gridBarNS.setBlock('bar')]" :style="setBgStyle()">
      <svg width="100%" height="100%">
        <defs>
          <linearGradient :id="getGrid()" x1="0%" x2="0%" y1="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" :stop-color="bgColor[0]" stop-opacity="1" />
            <stop offset="100%" :stop-color="bgColor[1]" stop-opacity="1" />
          </linearGradient>
          <linearGradient :id="getGridItem()" x1="0%" x2="0%" y1="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" :stop-color="color[0]" stop-opacity="1" />
            <stop offset="100%" :stop-color="color[1]" stop-opacity="1" />
          </linearGradient>
        </defs>
        <line x1="0%" x2="0%" y2="0%" y1="100%" :stroke="`url(#${getGrid()})`" :stroke-dasharray="props.partGap"
          style="fill: none; stroke-width: 100%" />
        <line x1="0%" x2="0%" :y2="100 - percent + '%'" y1="100%" :stroke="`url(#${getGridItem()})`"
          :stroke-dasharray="props.partGap" style="fill: none; stroke-width: 100%">
          <animate v-if="animate" attributeName="y2" attributeType="XML" :from="props.from || '100%'"
            :to="props.to || 100 - percent + '%'" :by="props.by" :begin="props.begin" :dur="props.dur"
            :repeatCount="props.repeatCount" :fill="props.fill" v-bind="{ ...props.animation }"></animate>
        </line>
      </svg>
    </div>
    <template v-if="props.textPosition === 'bottom'">
      <div :class="[gridBarNS.setBlock('text'),gridBarNS.setBlockModifier('text','bottom')]" v-if="props.showText">
        <slot name="text" :percent="percent">{{ percent }}% </slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { verGridBarProps } from "./verGridBar"
import { useNS, useZIndex } from "vc-hooks"
import { isArray, isNumber } from 'vc-utils';
defineOptions({
  name: "VcVerGridBar",
  inheritAttrs: false
})

const _ref = ref()

const props = defineProps({
  ...verGridBarProps
});

const gridBarNS = useNS('grid');

const { getIndex, setIndex } = useZIndex("grid")

const VALUE = Number(props.value)
const MAX_VALUE = Number(props.maxValue)

const setBgStyle = () => {
  let style: any = {};
  if (isNumber(props.contentWidth)) {
    style.width = props.contentWidth + 'px';
  } else {
    style.width = props.contentWidth;
  }
  if (props.contentHeight) {
    if (isNumber(props.contentHeight)) {
      style.height = props.contentHeight + 'px';
      style.lineHeight = props.contentHeight + 'px';
    } else {
      style.height = props.contentHeight;
      style.lineHeight = props.contentHeight;
    }
  } else if (!props.showText) {
    style.height = "100%"
  }
  return style;
};
const percent = Number(((VALUE / MAX_VALUE) * 100).toFixed(2)) / 1;
const bgColor = ref<string[]>([]);
const color = ref<string[]>([]);
if (props.background && isArray(props.background)) {
  bgColor.value = props.background as string[];
} else {
  const background = props.background as string
  bgColor.value = [background || 'rgba(0,0,0,0.3)', background || 'rgba(0,0,0,0.3)'];
}
if (props.color && isArray(props.color)) {
  color.value = props.color as string[];
} else {
  const colorValue = props.color as string
  color.value = [colorValue || '#1890ff', colorValue || '#1890ff'];
}
setIndex();
const getGrid = () => {
  return 'grid' + getIndex();
};
const getGridItem = () => {
  return 'gridItem' + getIndex();
};
</script>