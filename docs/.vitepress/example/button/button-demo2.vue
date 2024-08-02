<template>
    <demo class="flex-item-column">
        <div>
            <vc-button danger type="primary">danger</vc-button>
            <vc-button danger>danger</vc-button>
            <vc-button danger type="dashed">dashed</vc-button>
            <vc-button danger link>link</vc-button>
            <vc-button danger text>text</vc-button>
        </div>
        <div>
            <vc-button disabled danger type="primary">danger</vc-button>
            <vc-button disabled danger>danger</vc-button>
            <vc-button disabled danger type="dashed">dashed</vc-button>
            <vc-button disabled danger link>link</vc-button>
            <vc-button disabled danger text>text</vc-button>
        </div>
        <div>
            <vc-button loading danger type="primary">danger</vc-button>
            <vc-button loading danger>danger</vc-button>
            <vc-button loading danger type="dashed">dashed</vc-button>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "button-demo2"
})
</script>
