<template>
    <demo>
        <div class="flex-item" style="justify-content: space-between;flex-wrap:nowrap;height:200px;">
            <vc-grid-bar type="vertical" :value="50" show-text />
            <vc-grid-bar show-text type="vertical" :value="20">
                <template #text="{ percent }">
                    <span>{{ percent }}</span>
                </template>
            </vc-grid-bar>
            <vc-grid-bar type="vertical" :value="50" show-text textPosition="top" />
            <vc-grid-bar type="vertical" :value="70" animate :height="100" show-text />
            <vc-grid-bar type="vertical" :value="70" animate :height="100" :strokeWidth="40" />
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "gridBar-demo4"
})
</script>