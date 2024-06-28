<template>
    <div :class="buttonNS.setBlock('group')">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, reactive, toRef } from 'vue';
import { useNS } from "vc-hooks"
import { buttonGroupContextKey, ButtonGroupContext, buttonGroupProps } from "./buttonGroup"
defineOptions({
    name: "VcButtonGroup",
    inheritAttrs: true
})

const props = defineProps(buttonGroupProps)

const buttonNS = useNS('button');

provide(buttonGroupContextKey,
    reactive({
        size: toRef(props, 'size'),
        type: toRef(props, 'type'),
        danger: toRef(props, 'danger'),
    })
)
</script>