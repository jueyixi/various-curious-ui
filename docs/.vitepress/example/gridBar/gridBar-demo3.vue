<template>
    <demo class="flex-item-column">
        <vc-grid-bar :value="75" :strokeWidth="20" :partGap="10"> </vc-grid-bar>
        <vc-grid-bar :value="75" animate> </vc-grid-bar>
        <vc-grid-bar :value="75" animate repeatCount="indefinite"> </vc-grid-bar>
        <vc-grid-bar :value="75" animate :animation="{ repeatCount: 'indefinite' }"> </vc-grid-bar>
        <vc-grid-bar :value="75" :show-text="true">
            <template #text="{ percent }">
                完成进度{{ percent }}%
            </template>
        </vc-grid-bar>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "gridBar-demo3"
})
</script>