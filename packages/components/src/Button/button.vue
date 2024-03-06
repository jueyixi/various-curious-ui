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
import { ref, computed } from 'vue';
import { buttonProps, buttonEmits } from "./button"
import { useNS } from "vc-hooks"
defineOptions({
    name: "VcButton",
    inheritAttrs: true
})

const _ref = ref()

const props = defineProps({
    ...buttonProps
});

const emits = defineEmits({ ...buttonEmits })

const buttonNS = useNS('button');

const isDanger = props.danger || props.type === "danger"
const isGhost = props.ghost || props.type === "ghost"

const isUniqueType = props.type !== "default" && props.type !== "danger" && props.type !== "ghost"

const buttonClass = computed(() => {
    return [
        buttonNS.namespace,
        buttonNS.setBlock(props.size),
        isUniqueType && buttonNS.setBlock(props.type),
        isDanger && buttonNS.setBlock("danger"),
        isGhost && buttonNS.setBlock("ghost"),
        props.shape !== "default" && buttonNS.is(props.shape),
        buttonNS.is(props.disabled, 'disabled'),
        buttonNS.is(props.loading, 'loading'),
    ]
})

const handleClick = (event: MouseEvent) => {
    emits("click", event)
}

</script>./vc-button./vcButton./button./button