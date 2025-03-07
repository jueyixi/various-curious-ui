<template>
    <demo>
        <vc-scroll-bar height="200px">
            <div class="scrollbar">
                <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
            </div>
        </vc-scroll-bar>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "scrollbar-demo1"
})
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
