<template>
    <demo class="flex-item">
        <vc-floating content="floating text" :showArrow="false">
            <template #reference>
                <span>Floating</span>
            </template>
        </vc-floating>
        <vc-floating :arrowPadding="12">
            <template #reference>
                <vc-button>Button</vc-button>
            </template>
            button-floating
        </vc-floating>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "floating-demo4"
})
</script>