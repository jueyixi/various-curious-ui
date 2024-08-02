<template>
    <demo class="flex-item">
        <div class="circle">
            <vc-circle :value="50" />
        </div>
        <div class="circle">
            <vc-circle :value="50" show-text />
        </div>
        <div class="circle">
            <vc-circle :value="80" :maxValue="200" showText></vc-circle>
        </div>
        <div class="circle">
            <vc-circle :value="80" lineCap="round" :maxValue="200" showText></vc-circle>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "circle-demo1"
})
</script>

<style lang="less">
.circle {
    width: 150px;
}
</style>