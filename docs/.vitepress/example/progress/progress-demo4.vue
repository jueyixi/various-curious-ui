<template>
    <demo class="flex-item-column">
        <vc-progress :value="75" :strokeWidth="20"> </vc-progress>
        <vc-progress :value="75" animate> </vc-progress>
        <vc-progress :value="75" animate repeatCount="infinite"> </vc-progress>
        <vc-progress :value="75" :show-text="true" round color="#3cc251">
            <template #text="{ percent }">
                完成进度{{ percent }}%
            </template>
        </vc-progress>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "progress-demo4"
})
</script>