<template>
    <demo>
        <div>
            <vc-button text>text</vc-button>
            <vc-button text type="primary">primary</vc-button>
            <vc-button text type="success">success</vc-button>
            <vc-button text type="warning">warning</vc-button>
            <vc-button text danger>danger</vc-button>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "button-demo4"
})
</script>
