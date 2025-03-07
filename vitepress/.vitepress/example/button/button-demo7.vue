<template>
    <demo>
        <div>
            <vc-button loading>default</vc-button>
            <vc-button loading type="primary">primary</vc-button>
            <vc-button loading type="success">success</vc-button>
            <vc-button loading type="warning">warning</vc-button>
            <vc-button loading danger>danger</vc-button>
            <vc-button loading danger type="primary">danger</vc-button>
            <vc-button loading type="dashed">dashed</vc-button>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "button-demo7"
})
</script>
