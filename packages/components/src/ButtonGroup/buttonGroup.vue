<template>
    <div :class="buttonNS.setBlock('group')">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useNS } from "vc-hooks"
defineOptions({
    name:"VcButtonGroup",
    inheritAttrs: false
})

const buttonNS = useNS('button');
</script>