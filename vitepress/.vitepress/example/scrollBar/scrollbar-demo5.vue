<template>
    <demo>
        <vc-button :disabled="value >= maxHeight" @click="customScroll(100)">+100</vc-button>
        <vc-button>{{ value }}</vc-button>
        <vc-button :disabled="value < 100" @click="customScroll(-100)">-100</vc-button>
        <vc-scroll-bar ref="scrollbarRef" always height="200px" @scroll="scroll">
            <div class="scrollbar" ref="contentRef">
                <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
            </div>
        </vc-scroll-bar>
    </demo>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import { VcScrollBar } from "various-curious-ui"

defineOptions({
    name: "scrollbar-demo5"
})

const scrollbarRef = ref<InstanceType<typeof VcScrollBar>>()
const contentRef = ref<HTMLDivElement>()

const value = ref(0)
const maxHeight = ref(0)

onMounted(() => {
    maxHeight.value = contentRef.value!.clientHeight - 200
})

const scroll = ({ scrollTop }) => {
    value.value = scrollTop
}

const customScroll = (val: number) => {
    value.value += val
    if (value.value > maxHeight.value) {
        value.value = maxHeight.value
    }
    scrollbarRef.value?.setScrollTop(value.value)
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
