<template>
    <demo class="flex-item-column">
        <vc-progress :value="70" background="transparent" />
        <vc-progress :value="20" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" />
        <vc-progress :value="75" color="#3cc251" />
        <vc-progress :value="75" :color="['rgba(255,0,0,0.01)', '#3cc251']" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "progress-demo2"
})
</script>