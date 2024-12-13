<template>
    <div class="vc-layout">
        <div class="vc-layout-header">
            <img class="vc-logo" src="/docs/public/logo.svg" alt="">
            <span class="vc-title">Various Curious Ui</span>
        </div>
        <div class="vc-layout-body">
            <div class="vc-layout-sider">
                <VcMenu />
            </div>
            <div class="vc-layout-container">
                <div class="vc-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VcMenu from "./Menu/index.vue"
defineOptions({
    name: "VcLayout"
})
</script>

<style scoped lang="less">
.vc-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #eeeeee;
    &-header {
        display: flex;
        align-items: center;
        height: 64px;
        background: radial-gradient(circle at 10% 20%, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%);
        line-height: 64px;
        padding: 0 20px;
        .vc-logo{
            width: 24px;
            font-size: 20px;
        }
        .vc-title {
            font-size: 20px;
            font-weight: 700;
            padding: 0 4px;
            font-style: italic;
            background: -webkit-linear-gradient(left, rgba(223,0,0,0.5), #1890ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    &-body {
        width: 100%;
        flex: 1;
        display: flex;
        box-sizing: border-box;
        overflow: hidden;
    }
    &-sider {
        width: 250px;
        height: 100%;
        overflow-y: auto;
        background-color: #fff;
        box-sizing: border-box;
    }
    &-container{
        box-sizing: border-box;
        padding: 16px;
        flex: 1;
        height: 100%;
        overflow-x: hidden;
    }
    .vc-content{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background-color: #fff;
        border-radius: 16px;
        padding: 12px;
    }
}
</style>