<template>
    <demo class="flex-item">
        <vc-dashboard :value="37.5" :maxValue="150" />
        <vc-dashboard :value="75" :maxValue="200" splitNumber="11" />
        <vc-dashboard :value="50" :maxValue="200" splitColor="rgba(255,0,0,0.5)" />
        <vc-dashboard :value="100" :maxValue="200" :splitWidth="4" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "dashboard-demo2"
})
</script>