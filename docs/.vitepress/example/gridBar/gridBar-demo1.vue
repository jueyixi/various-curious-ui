<template>
    <demo class="flex-item-column">
        <vc-grid-bar :value="80" />
        <vc-grid-bar :value="80" show-text />
        <vc-grid-bar :value="80" :maxValue="200" showText></vc-grid-bar>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "gridBar-demo1"
})
</script>