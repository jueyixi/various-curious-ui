<template>
    <demo>
        <div>
            <vc-button link>link</vc-button>
            <vc-button link type="primary">primary</vc-button>
            <vc-button link type="success">success</vc-button>
            <vc-button link type="warning">warning</vc-button>
            <vc-button link danger>danger</vc-button>
        </div>
        <div>
            <vc-button disabled link>link</vc-button>
            <vc-button disabled link type="primary">primary</vc-button>
            <vc-button disabled link type="success">success</vc-button>
            <vc-button disabled link type="warning">warning</vc-button>
            <vc-button disabled link danger>danger</vc-button>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "button-demo3"
})
</script>
