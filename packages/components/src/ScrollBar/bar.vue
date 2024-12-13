<template>
    <Thumb :move="moveX" :ratio="ratioX" :size="width" :always="always" :bar-width="barWidth" />
    <Thumb :move="moveY" :ratio="ratioY" :size="height" vertical :always="always" :bar-width="barWidth" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { barProps, barEmits } from "./bar";
import Thumb from './thumb.vue';

const props = defineProps(barProps);

const emits = defineEmits(barEmits);

const moveX = ref(0)
const moveY = ref(0)

const GAP = props.gap * 2 || 4

const handleScroll = (wrap: HTMLDivElement) => {
    if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP
        const offsetWidth = wrap.offsetWidth - GAP

        moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY
        moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX
    }
}

defineExpose({
    handleScroll,
})
</script>