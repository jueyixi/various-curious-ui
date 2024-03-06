<template>
    <div class="container">
        <vc-button @click="multiple = !multiple">单选/多选</vc-button>
        <div class="container-body">
            <vc-calendar-week :multiple="multiple"></vc-calendar-week>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const multiple = ref(false)
</script>

<style scoped lang="less">
.container{
    height: 100%;
    display: flex;
    flex-direction: column;
    &-body{
        flex: 1;
    }
}
</style>