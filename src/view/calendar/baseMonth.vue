<template>
    <div class="container">
        <vc-button @click="multiple = !multiple">单选/多选</vc-button>
        <div class="container-body">
            <vc-calendar-month :multiple="multiple">
                <!-- <template #schedule="{ data }">
                    <p v-for="(item, index) in schedule" :key="index">{{ item }}</p>
                </template> -->
            </vc-calendar-month>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const multiple = ref(false)

// const schedule = ["111", "2222", "333", "111", "2222", "333", "111", "2222", "333", "111", "2222", "333", "111", "2222", "333", "111", "2222", "333", "111", "2222", "333", "111", "2222", "333", "111", "2222", "333"]
</script>

<style scoped lang="less">
.container {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-body {
        flex: 1;
        overflow: auto;
    }
}
</style>