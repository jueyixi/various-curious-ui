<template>
    <demo class="flex-item">
        <div class="circle">
            <vc-circle :value="0" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" showText />
        </div>
        <div class="circle">
            <vc-circle :value="50" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" showText />
        </div>
        <div class="circle">
            <vc-circle :value="0" :color="['#0ae787', '#fe653c']" showText />
        </div>
        <div class="circle">
            <vc-circle :value="100" :color="['#0ae787', '#fe653c']" showText />
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "circle-demo2"
})
</script>

<style lang="less">
.circle {
    width: 150px;
}
</style>