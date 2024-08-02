<template>
    <demo class="flex-item">
        <vc-dashboard :value="100" :color="colors" :background="backgroundColor" :semicircle="false" :startAngle="-45"
            :endAngle="225" :splitNumber="21" />
        <vc-dashboard radius="170" :value="60" maxValue="120" :semicircle="false" :startAngle="-270" :endAngle="90"
            :splitNumber="13" :middleTitle="true" splitWidth="1" innerRadius="100" splitSpace="5" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "dashboard-demo5"
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