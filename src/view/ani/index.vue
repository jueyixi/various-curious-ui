<template>
    <div class="vc-container">
        <div class="vc-container-title">数值动画</div>
        <div class="vc-container-content">
            <div class="vc-demo">
                <span class="vc-demo-title">基础数值动画：</span>
                <vc-ani-number :value="100"></vc-ani-number>
            </div>
            <div class="vc-demo">
                <span class="vc-demo-title">定义初始值：</span>
                <vc-ani-number :value="100" :initial="50"></vc-ani-number>
            </div>
            <div class="vc-demo">
                <span class="vc-demo-title">循环动画：</span>
                <vc-ani-number :value="100" :loopAnimate="true"></vc-ani-number>
            </div>
            <div class="vc-demo">
                <span class="vc-demo-title">定义数值精度：</span>
                <vc-ani-number :value="100" precision="2"></vc-ani-number>
            </div>
            <div class="vc-demo">
                <span class="vc-demo-title">自定义步长：</span>
                <vc-ani-number :value="100" :step="5"></vc-ani-number>
            </div>
            <div class="vc-demo">
                <span class="vc-demo-title">动画间隔时间：</span>
                <vc-ani-number :value="100" :loopAnimate="true" :delay="5000"></vc-ani-number>
            </div>
            <div class="vc-demo">
                <span class="vc-demo-title">数值格式化：</span>
                <vc-ani-number :value="100" :format="(value: any) => value + '%'"></vc-ani-number>
            </div>
            <div class="vc-demo">
                <span class="vc-demo-title">手动开启动画：</span>
                <vc-ani-number :value="100" :animate="isAnimate" ref="aniNumberRef" @begin="begin" @finish="finish" @play="play"></vc-ani-number>
                <vc-button @click="handleChange">开始</vc-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
defineOptions({
    name: "ani"
})
const aniNumberRef = ref()
const isAnimate = ref(false)
const handleChange = () => {
    isAnimate.value = true
}
const begin = (aniNumRef) => {    
    console.log("begin:" , aniNumRef)
}

const finish = (aniNumRef) => {
    console.log("finish:", aniNumRef)
}

const play = ({ ref, value }) => {
    console.log("play:" , ref , value)
}
</script>

<style scoped lang="less">
.vc-container {
    &-title {
        font-size: 22px;
        font-weight: 600;
    }

    &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .vc-demo {
            line-height: 40px;

            &-title {
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
}
</style>