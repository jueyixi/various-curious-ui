<template>
    <demo class="flex-item">
        <div class="circle">
            <vc-circle :width="80" :value="50" :strokeWidth="40" />
        </div>
        <div class="circle">
            <vc-circle :gradient="gradient" :value="100" :part="10" :partGap="4" />
        </div>
        <div class="circle">
            <vc-circle :gradients="gradients2" :value="50" :part="10" :partGap="4" />
        </div>
        <div class="circle">
            <vc-circle :value="50" show-text :clockWise="false" />
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "circle-demo4"
})

const gradient = {
    id: 'svg-linear-gradient001',
    x1: '100%',
    y1: '100%',
    x2: '0%',
    y2: '0%',
    colorStops: [
        {
            offset: '0%',
            color: '#0ae787',
        },
        {
            offset: '100%',
            color: '#fe653c',
        },
    ],
};
const gradients2 = [
    {
        id: 'svg-linear-gradient002',
        x1: '100%',
        y1: '100%',
        x2: '0%',
        y2: '0%',
        colorStops: [
            {
                offset: '0%',
                color: 'rgba(255,255,255,1)',
            },
            {
                offset: '100%',
                color: 'rgba(0,0,0,1)',
            },
        ],
    },
    {
        id: 'svg-linear-gradient003',
        x1: '100%',
        y1: '100%',
        x2: '0%',
        y2: '0%',
        colorStops: [
            {
                offset: '0%',
                color: '#0ae787',
            },
            {
                offset: '100%',
                color: '#fe653c',
            },
        ],
    },
];
</script>

<style lang="less">
.circle {
    width: 150px;
}
</style>