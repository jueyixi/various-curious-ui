<template>
    <demo>
        <vc-scroll-bar v-bind="otherConfig">
            <div class="scrollbar">
                <div v-for="item in 20" :key="item" class="scrollbar-item">{{ item }}</div>
            </div>
        </vc-scroll-bar>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "scrollbar-demo6"
})

const otherConfig = {
    stopResize: true,
    position: "outside",
    outsideGap: 10,
    size: 50,
    gap: 0,
    always: true,
    height: "200px",
    barWidth: 10,
    track: {
        borderRadius: "10px",
        color: "rgba(0,255,180,0.1)"
    },
    thumb: {
        right: "0px",
        bottom: "0px",
        color: "rgba(0,255,120,0.6)",
        opacity: 1,
        hoverColor: "rgba(0,255,90,1)",
        hoverOpacity: 1,
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

    &-item {
        width: 800px;
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
