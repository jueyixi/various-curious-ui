<template>
    <div class="ring">
        <div class="ring-item">
            <p>基础进度条</p>
            <vc-ring type="ring" :value="20" />
        </div>
        <div class="ring-item">
            <p>动画进度条</p>
            <vc-ring type="ring" :value="70" :animate="true" />
        </div>
        <div class="ring-item">
            <p>圆角进度条</p>
            <vc-ring type="ring" :value="40" lineCap="round" />
        </div>
        <div class="ring-item">
            <p>内嵌环进度条</p>
            <vc-ring type="ring" :value="40" innerBackground="rgba(0,0,0,0.1)" innerLineWidth="6" />
        </div>
        <div class="ring-item">
            <p>加宽进度条</p>
            <vc-ring type="ring" :value="20" borderWidth="15" />
        </div>
        <div class="ring-item">
            <p>保留两位小数</p>
            <vc-ring type="ring" :value="53.2312" :animate="true" percent="2" />
        </div>
        <div class="ring-item">
            <p>设置初始步长和步进值</p>
            <vc-ring type="ring" :value="40" startStep="30" step="0.05" percent="2" :animate="true" :format="true" />
        </div>
        <div class="ring-item">
            <p>自定义标题</p>
            <vc-ring type="ring" :value="0" innerBackground="rgba(0,0,0,0.1)" innerLineWidth="6" title="自定义标题"
                subTitle="" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.ring {
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
}</style>