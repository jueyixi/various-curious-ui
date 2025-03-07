<template>
    <demo>
        <vc-button @click="add">增加一个</vc-button>
        <vc-button @click="onDelete">删除一个</vc-button>
        <vc-scroll-bar max-height="300px">
            <div class="scrollbar">
                <div v-for="item in count" :key="item" class="scrollbar-item">{{ item }}</div>
            </div>
        </vc-scroll-bar>
    </demo>
</template>
<script setup lang="ts">
import { ref } from "vue"
defineOptions({
    name: "scrollbar-demo3"
})

const count = ref(3)

const add = () => {
    count.value++
}
const onDelete = () => {
    if (count.value > 0) {
        count.value--
    }
}
</script>

<style scoped lang="less">
.scrollbar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 12px;

    &-item {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        background: var(--vc-color-primary-fade);
        color: var(--vc-color-primary);
    }
}
</style>
