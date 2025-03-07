<template>
    <demo class="flex-item">
        <div class="circle">
            <vc-circle :part="4" :partGap="5" showText />
        </div>
        <div class="circle">
            <vc-circle :animate="true" :value="100" :part="4" :partGap="5" showText />
        </div>
        <div class="circle">
            <vc-circle color="#00bbff" :value="50" :part="40" :partGap="6" showText />
        </div>
        <div class="circle">
            <vc-circle :color="['#0ae787', '#fe653c']" :value="50" :part="20" :partGap="4" showText />
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "circle-demo3"
})
</script>

<style lang="less">
.circle {
    width: 150px;
}
</style>