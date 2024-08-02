<template>
    <div class="dashboard">
        <div class="dashboard-item">
            <p>基础仪表盘</p>
            <vc-dashboard :value="50" />
        </div>
        <div class="dashboard-item">
            <p>多段仪表盘</p>
            <vc-dashboard :value="100" :color="colors" :background="backgroundColor" />
        </div>
        <div class="dashboard-item">
            <p>自定义标题</p>
            <vc-dashboard :value="75" title="仪表盘" />
        </div>
        <div class="dashboard-item">
            <p>自定义最大值</p>
            <vc-dashboard :value="37.5" :maxValue="150" :color="colors" :background="backgroundColor" subTitle="单位" />
        </div>
        <div class="dashboard-item">
            <p>自定义角度</p>
            <vc-dashboard :value="200" :maxValue="200" :color="colors" :background="backgroundColor" :semicircle="false"
                :startAngle="-45" :endAngle="225" :splitNumber="21" subTitle="单位" splitSpace="0" />
        </div>
    </div>
</template>

<script setup lang="ts">
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

<style scoped lang="less">
.dashboard {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &-item {
        padding: 15px 10px;

        p {
            margin-bottom: 10px;
        }
    }
}
</style>