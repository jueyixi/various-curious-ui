<template>
    <demo class="flex-item">
        <vc-dashboard :color="colors" :background="backgroundColor" :value="50" />
        <vc-dashboard :color="colors" :background="backgroundColor" :value="100" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "dashboard-demo3"
})

const colors = [
    {
        offset: 0.25,
        color: "rgba(255,0,0,1)"
    },
    {
        offset: 0.5,
        color: "rgba(255,255,0,1)"
    },
    {
        offset: 0.75,
        color: "rgba(0,0,255,1)"
    },
    {
        offset: 1,
        color: "rgba(0,255,0,1)"
    }
]
const backgroundColor = [
    {
        offset: 0.25,
        color: "rgba(255,0,0,0.3)"
    },
    {
        offset: 0.5,
        color: "rgba(255,255,0,0.3)"
    },
    {
        offset: 0.75,
        color: "rgba(0,0,255,0.3)"
    },
    {
        offset: 1,
        color: "rgba(0,255,0,0.3)"
    }
]
</script>