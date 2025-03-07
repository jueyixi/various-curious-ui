<template>
    <demo>
        <div class="flex-item" style="padding:12px;background-color: rgb(190, 200, 200);">
            <div>
                <vc-button ghost>ghost</vc-button>
                <vc-button ghost disabled>disabled</vc-button>
                <vc-button ghost loading>loading</vc-button>
            </div>
            <div>
                <vc-button type="primary" ghost>primary</vc-button>
                <vc-button type="primary" ghost disabled>disabled</vc-button>
                <vc-button type="primary" ghost loading>loading</vc-button>
            </div>
            <div>
                <vc-button type="success" ghost>primary</vc-button>
                <vc-button type="success" ghost disabled>disabled</vc-button>
                <vc-button type="success" ghost loading>loading</vc-button>
            </div>
            <div>
                <vc-button danger ghost>danger</vc-button>
                <vc-button danger ghost disabled>disabled</vc-button>
                <vc-button danger ghost loading>loading</vc-button>
            </div>
            <div>
                <vc-button type="dashed" ghost>dashed</vc-button>
                <vc-button type="dashed" ghost disabled>disabled</vc-button>
                <vc-button type="dashed" ghost loading>loading</vc-button>
            </div>
            <div>
                <vc-button type="dashed" danger ghost>dashed</vc-button>
                <vc-button type="dashed" danger ghost disabled>disabled</vc-button>
                <vc-button type="dashed" danger ghost loading>loading</vc-button>
            </div>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "button-demo6"
})
</script>
