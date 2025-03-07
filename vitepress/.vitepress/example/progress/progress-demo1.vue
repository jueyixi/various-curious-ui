<template>
    <demo class="flex-item-column">
        <vc-progress :value="100"></vc-progress>
        <vc-progress :value="75" round></vc-progress>
        <vc-progress :value="20" round showText></vc-progress>
        <vc-progress :value="20" :maxValue="200" round showText></vc-progress>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "progress-demo1"
})
</script>