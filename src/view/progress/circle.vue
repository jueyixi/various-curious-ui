<template>
    <div class="circle">
        <div class="circle-item">
            <p>基础进度条</p>
            <vc-circle :value="50" />
        </div>
        <div class="circle-item">
            <p>圆角进度条</p>
            <vc-circle lineCap="round" :value="50" />
        </div>
        <div class="circle-item">
            <p>渐变背景</p>
            <vc-circle :value="0" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" />
        </div>
        <div class="circle-item">
            <p>渐变颜色</p>
            <vc-circle :value="100" :color="['#0ae787', '#fe653c']" />
        </div>
        <div class="circle-item">
            <p>显示文字</p>
            <vc-circle :value="50" :show-text="true" />
        </div>
        <div class="circle-item">
            <p>逆时针</p>
            <vc-circle :value="50" :show-text="true" :clockWise="false" />
        </div>
        <div class="circle-item">
            <p>加宽</p>
            <vc-circle :value="50" :show-text="true" :width="10" />
        </div>
        <div class="circle-item">
            <p>扇形图</p>
            <vc-circle :contentWidth="80" :value="50" :width="40" />
        </div>
        <div class="circle-item">
            <p>简单条形圆环</p>
            <vc-circle :value="50" :part="4" :partGap="5" />
        </div>
        <div class="circle-item">
            <p>切割条形圆环</p>
            <vc-circle color="#00bbff" :value="50" :part="40" :partGap="6" />
        </div>
        <div class="circle-item">
            <p>渐变色条形圆环</p>
            <vc-circle :color="['#0ae787', '#fe653c']" :value="50" :part="20" :partGap="4" />
        </div>
        <div class="circle-item">
            <p>自定义颜色</p>
            <vc-circle :gradient="gradient" :value="100" :part="10" :partGap="4" />
        </div>
        <div class="circle-item">
            <p>自定义背景、颜色</p>
            <vc-circle :gradients="gradients2" :value="50" :part="10" :partGap="4" />
        </div>
        <div class="circle-item">
            <p>基础动画进度条</p>
            <vc-circle :animate="true" :value="10" />
        </div>
    </div>
</template>

<script setup lang="ts">
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

<style scoped lang="less">
.circle {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &-item {
        padding: 15px 10px;

        p {
            margin-bottom: 10px;
        }
        .vc-circle{
            width: 200px;
        }
    }
}
</style>