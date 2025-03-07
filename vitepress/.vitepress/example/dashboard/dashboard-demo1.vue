<template>
    <demo class="flex-item">
        <vc-dashboard :value="0" />
        <vc-dashboard :value="1" />
        <vc-dashboard :value="50" />
        <vc-dashboard :value="100" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "dashboard-demo1"
})
</script>