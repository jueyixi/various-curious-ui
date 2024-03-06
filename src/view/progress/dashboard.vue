<template>
    <div class="dashboard">
        <div class="dashboard-item">
            <p>基础仪表盘</p>
            <vc-dashboard :value="20" />
        </div>
        <div class="dashboard-item">
            <p>多段仪表盘</p>
            <vc-dashboard :value="100" :color="colors" :backgroundColor="backgroundColor" />
        </div>
        <div class="dashboard-item">
            <p>自定义标题</p>
            <vc-dashboard :value="70" title="仪表盘" />
        </div>
        <div class="dashboard-item">
            <p>自定义最大值</p>
            <vc-dashboard :value="37.5" :maxValue="150" :color="colors" :backgroundColor="backgroundColor" />
        </div>
    </div>
</template>

<script setup lang="ts">
const colors = [
    {
        offset: 0.5,
        color: "rgba(255,0,0,0.5)"
    },
    {
        offset: 1,
        color: "rgba(255,255,0,0.5)"
    }
]
const backgroundColor = [
    {
        offset: 0.5,
        color: "rgba(255,0,0,0.1)"
    },
    {
        offset: 1,
        color: "rgba(255,255,0,0.1)"
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