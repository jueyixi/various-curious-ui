<template>
    <div class="vc-container">
        <div class="vc-container-title">按钮</div>
        <div class="vc-container-content">
            <div class="vc-demo">
                <vc-button>default</vc-button>
                <vc-button type="primary">primary</vc-button>
                <vc-button type="danger">danger</vc-button>
                <vc-button type="dashed">dashed</vc-button>
                <vc-button type="link">link</vc-button>
                <vc-button type="text">text</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button size="mini">mini</vc-button>
                <vc-button size="small">small</vc-button>
                <vc-button size="middle">middle</vc-button>
                <vc-button size="large">large</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button loading>loading</vc-button>
                <vc-button type="primary" loading>primary</vc-button>
                <vc-button type="danger" loading>danger</vc-button>
                <vc-button type="dashed" loading>dashed</vc-button>
                <vc-button shape="circle" loading></vc-button>
                <vc-button shape="round" loading></vc-button>
            </div>
            <div class="vc-demo">
                <vc-button size="mini" shape="round">mini</vc-button>
                <vc-button size="small" shape="round">small</vc-button>
                <vc-button shape="round">round</vc-button>
                <vc-button size="large" shape="round">large</vc-button>
                <vc-button shape="round" type="dashed">dashed</vc-button>
                <vc-button shape="round" type="link">link</vc-button>
                <vc-button shape="round" type="text">text</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button size="mini" shape="circle">mini</vc-button>
                <vc-button size="small" shape="circle">small</vc-button>
                <vc-button shape="circle">circle</vc-button>
                <vc-button size="large" shape="circle">large</vc-button>
                <vc-button shape="circle" type="dashed">dashed</vc-button>
                <vc-button shape="circle" type="link">link</vc-button>
                <vc-button shape="circle" type="text">text</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button size="mini" type="link">link</vc-button>
                <vc-button size="small" type="link">link</vc-button>
                <vc-button size="large" type="link">link</vc-button>
                <vc-button size="mini" type="text">text</vc-button>
                <vc-button size="small" type="text">text</vc-button>
                <vc-button size="large" type="text">text</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button type="dashed" danger>danger-dashed</vc-button>
                <vc-button type="link" danger>danger-link</vc-button>
                <vc-button type="text" danger>danger-text</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button disabled>default</vc-button>
                <vc-button type="primary" disabled>primary</vc-button>
                <vc-button type="danger" disabled>danger</vc-button>
                <vc-button type="dashed" disabled>dashed</vc-button>
                <vc-button type="link" disabled>link</vc-button>
                <vc-button type="text" disabled>text</vc-button>
            </div>
            <div class="vc-demo" style="width:100%;background-color: rgb(190, 200, 200)">
                <vc-button ghost>ghost</vc-button>
                <vc-button type="ghost">type="ghost"</vc-button>
                <vc-button type="primary" ghost>type="primary"</vc-button>
                <vc-button type="danger" ghost>type="danger"</vc-button>
                <vc-button type="dashed" ghost>type="dashed"</vc-button>
                <vc-button type="ghost" disabled>ghost-disabled</vc-button>
                <vc-button ghost loading></vc-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineOptions({
    name: "button"
})
</script>

<style scoped lang="less">
.vc-container {
    &-title {
        font-size: 22px;
        font-weight: 600;
    }

    &-content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .vc-demo {
            width: 50%;
            box-sizing: border-box;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 16px;
        }
    }
}
</style>