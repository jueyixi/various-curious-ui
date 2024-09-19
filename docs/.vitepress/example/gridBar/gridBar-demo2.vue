<template>
    <demo class="flex-item-column">
        <vc-grid-bar :value="70" background="transparent" />
        <vc-grid-bar :value="20" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" />
        <vc-grid-bar :value="75" color="#3cc251" />
        <vc-grid-bar :value="75" :color="['rgba(255,0,0,0.01)', '#3cc251']" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "gridBar-demo2"
})
</script>