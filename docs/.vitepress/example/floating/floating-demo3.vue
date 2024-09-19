<template>
    <demo class="flex-item">
        <vc-floating content="floating text" placement="top-start">
            <template #reference>
                <vc-button>top-start</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="top">
            <template #reference>
                <vc-button>top</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="top-end">
            <template #reference>
                <vc-button>top-end</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="right-start">
            <template #reference>
                <vc-button>right-start</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="right">
            <template #reference>
                <vc-button>right</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" placement="right-end">
            <template #reference>
                <vc-button>right-end</vc-button>
            </template>
        </vc-floating>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "floating-demo3"
})
</script>