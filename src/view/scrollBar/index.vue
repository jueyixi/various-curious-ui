<template>
    <div class="scrollBar">
        <div class="scrollBar-item">
            <p>基础滚动条</p>
            <vc-scroll-bar height="200px">
                <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </vc-scroll-bar>
        </div>
        <div class="scrollBar-item">
            <p>横向滚动条</p>
            <div style="width: 800px;">
                <vc-scroll-bar>
                    <div style="display: flex;gap: 20px;">
                        <div v-for="item in 20" :key="item" class="scrollbar-demo-item">
                            <div style="width: 100px;">{{ item }}</div>
                        </div>
                    </div>
                </vc-scroll-bar>
            </div>
        </div>
        <div class="scrollBar-item">
            <p>始终显示竖向滚动条</p>
            <vc-scroll-bar height="200px" always>
                <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </vc-scroll-bar>
        </div>
        <div class="scrollBar-item">
            <p>始终显示横向滚动条</p>
            <div style="width: 800px;">
                <vc-scroll-bar always>
                    <div style="display: flex;gap: 20px;">
                        <div v-for="item in 20" :key="item" class="scrollbar-demo-item">
                            <div style="width: 100px;">{{ item }}</div>
                        </div>
                    </div>
                </vc-scroll-bar>
            </div>
        </div>
        <div class="scrollBar-item">
            <p>原生滚动条</p>
            <vc-scroll-bar height="200px" native>
                <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </vc-scroll-bar>
        </div>
        <div class="scrollBar-item">
            <p>滚动条居于外部</p>
            <div style="width: 400px;">
                <vc-scroll-bar height="200" always position="outside" outsideGap="10">
                    <div style="display: flex;gap: 20px;flex-direction: column;">
                        <div style="width: 500px;" v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}
                        </div>
                    </div>
                </vc-scroll-bar>
            </div>
        </div>
        <div class="scrollBar-item">
            <p>滚动条其他配置</p>
            <div style="width: 400px;">
                <vc-scroll-bar v-bind="otherConfig">
                    <div style="display: flex;gap: 20px;flex-direction: column;">
                        <div style="width: 500px;" v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}
                        </div>
                    </div>
                </vc-scroll-bar>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const otherConfig = {
    stopResize: true,
    position: "outside",
    outsideGap: 0,
    size:50,
    gap: 0,
    always: true,
    height: "200px",
    barWidth: 10,
    track: {
        borderRadius: "10px",
        color:"rgba(0,255,180,0.1)"
    },
    thumb: {
        right: "0px",
        bottom: "0px",
        color: "rgba(0,255,120,0.6)",
        opacity:1,
        hoverColor: "rgba(0,255,90,1)",
        hoverOpacity:1,
    }
}
</script>

<style scoped lang="less">
.scrollBar{
    width: 100%;
    &-item{
        padding:15px 10px;
        p{
            margin-bottom: 10px;
        }
    }
}

.scrollbar-demo-item{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    text-align: center;
    border-radius: 4px;
    background: var(--vc-color-primary-fade);
    color: var(--vc-color-primary);
}
</style>