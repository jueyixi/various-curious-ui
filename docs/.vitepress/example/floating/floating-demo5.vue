<template>
    <demo class="flex-item">
        <vc-floating content="floating text" :autoOpen="true">
            <template #reference>
                <vc-button>autoOpen</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" :autoOpen="true" :teleported="false">
            <template #reference>
                <vc-button>teleported</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" :autoOpen="true" closeOnClickBody>
            <template #reference>
                <vc-button>closeOnClickBody</vc-button>
            </template>
        </vc-floating>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "floating-demo5"
})
</script>