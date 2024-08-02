<template>
    <component :is="componentName" v-bind="$attrs" ref="componentRef">
        <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
            <slot :name="item" v-bind="data"></slot>
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