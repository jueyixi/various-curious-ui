<template>
    <demo>
        <div class="container">
            <vc-button @click="change">设置{{ date }}</vc-button>
            <div class="content">
                <vc-calendar v-model:value="date"></vc-calendar>
            </div>
        </div>
    </demo>
</template>
<script setup lang="ts">
import { ref } from "vue"
defineOptions({
    name: "calendar-demo2"
})

const date = ref("")
// 获取选中数据
const change = () => {
    date.value ? date.value = "" : date.value = '2023-10-15'
}
</script>

<style scoped lang="less">
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .content {
        width: 100%;
        flex: 1;
        overflow: auto;
    }
}
</style>