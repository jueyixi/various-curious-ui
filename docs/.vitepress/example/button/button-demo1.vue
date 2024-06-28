<template>
    <demo>
        <div>
            <vc-button>default</vc-button>
            <vc-button type="primary">primary</vc-button>
            <vc-button type="success">success</vc-button>
            <vc-button type="warning">warning</vc-button>
        </div>
        <div style="margin-top:10px;">
            <vc-button shape="round">default</vc-button>
            <vc-button shape="round" type="primary">primary</vc-button>
            <vc-button shape="round" type="success">success</vc-button>
            <vc-button shape="round" type="warning">warning</vc-button>
        </div>
        <div style="margin-top:10px;">
            <vc-button disabled>default</vc-button>
            <vc-button disabled type="primary">primary</vc-button>
            <vc-button disabled type="success">success</vc-button>
            <vc-button disabled type="warning">warning</vc-button>
        </div>
        <div style="margin-top:10px;">
            <vc-button shape="circle" loading></vc-button>
            <vc-button shape="circle">
                <vc-icon name="Close"></vc-icon>
            </vc-button>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "button-demo1"
})
</script>
