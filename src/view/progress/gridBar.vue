<template>
    <div class="grid-bar">
        <div class="grid-bar-item">
            <p>基础进度条</p>
            <vc-grid-bar :value="80" />
        </div>
        <div class="grid-bar-item">
            <p>显示文字</p>
            <vc-grid-bar :value="80" show-text />
        </div>
        <div class="grid-bar-item">
            <p>渐变背景</p>
            <vc-grid-bar :value="20" :background="['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']" />
        </div>
        <div class="grid-bar-item">
            <p>渐变颜色</p>
            <vc-grid-bar :value="80" :color="['rgba(255, 0, 0, 0.1)', 'rgba(255, 255, 0, 1)']" />
        </div>
        <div class="grid-bar-item">
            <p>自定义高和间距</p>
            <vc-grid-bar :value="50" :strokeWidth="20" :partGap="10" />
        </div>
        <div class="grid-bar-item">
            <p>开启动画</p>
            <vc-grid-bar :value="50" :animate="true" />
        </div>
        <div class="grid-bar-item">
            <p>循环动画</p>
            <vc-grid-bar :value="50" :animate="true" repeatCount="indefinite" />
        </div>
        <div class="grid-bar-item">
            <p>animate原生效果</p>
            <vc-grid-bar :value="50" :animate="true" :animation="{ repeatCount: 'indefinite' }" />
        </div>
        <div class="grid-bar-item">
            <p>竖向栅格进度条</p>
            <div style="display: flex;justify-content: space-between;align-items: center;height: 100px;">
                <vc-ver-grid-bar :value="10" />
                <vc-grid-bar show-text type="vertical" :value="20">
                    <template #text="{ percent }">
                        <span>{{ percent }}</span>
                    </template>
                </vc-grid-bar>
                <vc-ver-grid-bar :value="30" :background="['red', 'black']" />
                <vc-ver-grid-bar :value="50" show-text />
                <vc-ver-grid-bar :value="50" show-text textPosition="top" />
                <vc-ver-grid-bar :value="70" :animate="true" />
                <vc-ver-grid-bar :value="100" :color="['red', 'black']" />
                <vc-ver-grid-bar :value="70" :animate="true" :contentHeight="80" />
                <vc-grid-bar type="vertical" :value="70" :animate="true" :contentHeight="80" repeatCount="indefinite" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.grid-bar {
    width: 100%;

    &-item {
        padding: 15px 10px;

        p {
            margin-bottom: 10px;
        }
    }
}
</style>