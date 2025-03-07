<template>
    <demo class="flex-item">
        <vc-ring :value="40" startStep="30" step="0.05" percent="2" :animate="true" format />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "ring-demo3"
})
</script>