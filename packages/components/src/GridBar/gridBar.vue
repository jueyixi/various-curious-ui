<template>
    <component :is="componentName" v-bind="$attrs" ref="componentRef">
        <template #text="{ percent }">
            <slot name="text" :percent="percent">{{ percent }}% </slot>
        </template>
    </component>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, markRaw, reactive, provide } from 'vue';
import { gridBarProps } from "./gridBar"
import VcVerGridBar from '../VerGridBar/verGridBar.vue';
import VcHorGridBar from '../HorGridBar/horGridBar.vue';

defineOptions({
    name: "VcGridBar",
    inheritAttrs: false
})

const props = defineProps({
    ...gridBarProps
});

const componentName = ref();
const components = {
    default: VcHorGridBar,
    vertical: VcVerGridBar,
}

watchEffect(() => {
    if (props.type) {
        componentName.value = markRaw(components[props.type]);
    }
});
</script>