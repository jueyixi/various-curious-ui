<template>
    <demo>
        <vc-scroll-bar>
            <div class="scrollbar">
                <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
            </div>
        </vc-scroll-bar>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "scrollbar-demo2"
})
</script>

<style scoped lang="less">
.scrollbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &-item {
        flex: 100px 0 0;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        background: var(--vc-color-danger-fade);
        color: var(--vc-color-danger);
    }
}
</style>
