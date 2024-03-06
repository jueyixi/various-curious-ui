<template>
    <div class="progress">
        <div class="progress-item">
            <p>基础进度条</p>
            <vc-progress :value="80" />
        </div>
        <div class="progress-item">
            <p>圆角进度条</p>
            <vc-progress :value="30" :round="true" />
        </div>
        <div class="progress-item">
            <p>显示文字</p>
            <vc-progress :value="75" :show-text="true" />
        </div>
        <div class="progress-item">
            <p>透明背景</p>
            <vc-progress :value="70" :round="true" background="transparent" />
        </div>
        <div class="progress-item">
            <p>渐变背景</p>
            <vc-progress :value="20" :background="['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.3)']" />
        </div>
        <div class="progress-item">
            <p>替换颜色</p>
            <vc-progress :round="true" :value="75" color="#3cc251" />
        </div>
        <div class="progress-item">
            <p>渐变颜色</p>
            <vc-progress :value="75" :color="['rgba(255,0,0,0.01)', 'rgba(255,0,0,0.1)']" />
        </div>
        <div class="progress-item">
            <p>替换内容</p>
            <vc-progress :value="75" :show-text="true" :round="true" color="#3cc251">
                <template #text>
                    完成
                </template>
            </vc-progress>
        </div>
        <div class="progress-item">
            <p>自定义高</p>
            <vc-progress :value="75" :height="20"> </vc-progress>
        </div>
        <div class="progress-item">
            <p>开启动画</p>
            <vc-progress :value="75" :animate="true"> </vc-progress>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.progress{
    width: 100%;
    &-item{
        padding:15px 10px;
        p{
            margin-bottom: 10px;
        }
    }
}
</style>