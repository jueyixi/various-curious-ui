<template>
    <demo class="flex-item">
        <vc-ring :value="0" />
        <vc-ring :value="1" />
        <vc-ring :value="50" />
        <vc-ring :value="100" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "ring-demo1"
})
</script>