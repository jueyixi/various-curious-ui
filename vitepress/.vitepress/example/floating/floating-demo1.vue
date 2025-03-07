<template>
    <demo class="flex-item">
        <vc-floating content="floating text">
            <template #reference>
                <span>Floating</span>
            </template>
        </vc-floating>
        <vc-floating>
            <template #reference>
                <vc-button>Button</vc-button>
            </template>
            button-floating
        </vc-floating>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "floating-demo1"
})
</script>