<template>
    <div class="vc-container">
        <div class="vc-container-title">按钮</div>
        <div class="vc-container-content">
            <div class="vc-demo">
                <vc-button>default</vc-button>
                <vc-button type="primary">primary</vc-button>
                <vc-button type="success">success</vc-button>
                <vc-button type="warning">warning</vc-button>
                <vc-button danger>danger</vc-button>
                <vc-button type="primary" danger>danger</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button link >link</vc-button>
                <vc-button link type="primary">link</vc-button>
                <vc-button link type="success">link</vc-button>
                <vc-button link danger>link</vc-button>
                <vc-button text>text</vc-button>
                <vc-button text type="primary">text</vc-button>
                <vc-button text type="success">text</vc-button>
                <vc-button text danger>text</vc-button>
                <vc-button shape="round" text>text</vc-button>
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
                <vc-button type="success" loading>success</vc-button>
                <vc-button type="warning" loading>warning</vc-button>
                <vc-button shape="circle" loading></vc-button>
                <vc-button shape="round" loading></vc-button>
            </div>
            <div class="vc-demo">
                <vc-button size="mini" shape="round">mini</vc-button>
                <vc-button size="small" shape="round">small</vc-button>
                <vc-button shape="round">round</vc-button>
                <vc-button size="large" shape="round">large</vc-button>
                <vc-button shape="round" type="dashed">dashed</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button size="mini" shape="circle">mini</vc-button>
                <vc-button size="small" shape="circle">small</vc-button>
                <vc-button shape="circle">circle</vc-button>
                <vc-button size="large" shape="circle">large</vc-button>
                <vc-button shape="circle" type="dashed">dashed</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button type="dashed">dashed</vc-button>
                <vc-button type="dashed" disabled>dashed</vc-button>
                <vc-button type="dashed" loading>dashed</vc-button>
                <vc-button type="dashed" danger>dashed</vc-button>
                <vc-button type="dashed" danger disabled>dashed</vc-button>
                <vc-button type="dashed" danger loading>loading</vc-button>
            </div>
            <div class="vc-demo">
                <vc-button disabled>default</vc-button>
                <vc-button type="primary" disabled>primary</vc-button>
                <vc-button type="success" disabled>danger</vc-button>
                <vc-button type="warning" disabled>warning</vc-button>
                <vc-button link disabled>link</vc-button>
                <vc-button link disabled danger>link</vc-button>
                <vc-button text disabled>text</vc-button>
                <vc-button text disabled danger>text</vc-button>
            </div>
            <div class="vc-demo" style="width:100%;background-color: rgb(190, 200, 200)">
                <vc-button ghost>ghost</vc-button>
                <vc-button ghost loading>loading</vc-button>
                <vc-button ghost disabled>disabled</vc-button>
                <vc-button type="primary" ghost>primary</vc-button>
                <vc-button type="primary" ghost loading>primary-loading</vc-button>
                <vc-button type="primary" ghost disabled>primary-disabled</vc-button>
                <vc-button type="success" ghost>success</vc-button>
                <vc-button type="success" ghost loading>success-loading</vc-button>
                <vc-button type="success" ghost disabled>success-disabled</vc-button>
                <vc-button type="dashed" ghost>dashed</vc-button>
                <vc-button type="dashed" ghost loading>dashed-loading</vc-button>
                <vc-button type="dashed" ghost danger>danger</vc-button>
                <vc-button type="dashed" ghost danger loading>danger-loading</vc-button>
                <vc-button type="dashed" ghost danger disabled>danger-disabled</vc-button>
                <vc-button type="dashed" ghost disabled>dashed-disabled</vc-button>
                <vc-button danger ghost>danger</vc-button>
                <vc-button danger ghost loading>danger-loading</vc-button>
                <vc-button danger ghost disabled>danger-disabled</vc-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "buttons"
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
            align-items: center;
            padding: 16px;
            flex-wrap: wrap;
            row-gap: 12px;
        }
    }
}
</style>