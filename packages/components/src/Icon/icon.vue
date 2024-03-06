<template>
    <component :is="icons[props.name]" ref="icon" v-if="props.name" :style="props.style"
        v-bind="$attrs"></component>
</template>

<script setup lang="ts">
import * as icons from '@various-curious-ui/icons';
import { IconProps } from "./iconProps"

defineOptions({
    name: "VcIcon",
    inheritAttrs: false,
})

const props = defineProps({ ...IconProps })

</script>