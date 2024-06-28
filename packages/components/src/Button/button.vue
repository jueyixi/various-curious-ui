<template>
    <button ref="_ref" :class="buttonClass" :disabled="props.disabled" :type="props.nativeType"
        @click="handleClick($event)">
        <vc-icon name="Loading" v-if="props.loading"></vc-icon>
        <span v-if="!props.loading && ($slots.prefixIcon || props.prefixIcon)" class="vc-button-icon">
            <slot name="prefixIcon" v-if="$slots.prefixIcon">
            </slot>
            <vc-icon v-else-if="props.prefixIcon" :name="props.prefixIcon" />
        </span>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
        <span v-if="!props.loading && ($slots.suffixIcon || props.suffixIcon)" class="vc-button-icon">

            <slot name="suffixIcon" v-if="$slots.suffixIcon">
            </slot>
            <vc-icon :name="props.suffixIcon" v-else-if="props.suffixIcon" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { ref, computed,inject } from 'vue';
import { buttonProps, buttonEmits } from "./button"
import { buttonGroupContextKey } from "../ButtonGroup/buttonGroup"
import { useNS } from "vc-hooks"
defineOptions({
    name: "VcButton",
    inheritAttrs: true
})

const _ref = ref()

const props = defineProps({
    ...buttonProps,
});

const buttonGroupContext = inject(buttonGroupContextKey, undefined)

const emits = defineEmits({ ...buttonEmits })

const buttonNS = useNS('button');

const buttonClass = computed(() => {
    const _type = buttonGroupContext?.type || props.type
    const _size = buttonGroupContext?.size || props.size
    const _danger = buttonGroupContext?.danger || props.danger    
    
    return [
        buttonNS.namespace,
        buttonNS.setModifier(_size),
        buttonNS.setBlock(_type),
        buttonNS.is(props.link, 'link'),
        buttonNS.is(props.text, 'text'),
        buttonNS.is(props.shape),
        buttonNS.is(_danger, 'danger'),
        buttonNS.is(props.ghost, 'ghost'),
        buttonNS.is(props.disabled, 'disabled'),
        buttonNS.is(props.loading, 'loading'),
    ]
})

const handleClick = (event: MouseEvent) => {
    emits("click", event)
}

</script>