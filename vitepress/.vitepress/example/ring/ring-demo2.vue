<template>
    <demo class="flex-item">
        <vc-ring :value="53.2312" :animate="true" percent="0" />
        <vc-ring :value="53.2312" :animate="true" percent="2" />
        <vc-ring :value="60" :animate="true" percent="2" />
        <vc-ring :value="60" :animate="true" percent="2" format />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "ring-demo2"
})
</script>