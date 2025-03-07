<template>
    <demo class="flex-item-column">
        <vc-progress :value="75" status="primary" showText> </vc-progress>
        <vc-progress :value="75" status="success" showText> </vc-progress>
        <vc-progress :value="75" status="warning" showText> </vc-progress>
        <vc-progress :value="75" status="danger" showText> </vc-progress>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "progress-demo3"
})
</script>