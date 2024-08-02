<template>
    <demo class="flex-item">
        <vc-ring :value="40" lineCap="round" />
        <vc-ring :value="40" innerBackground="rgba(0,0,0,0.05)" innerRadius="6" />
        <vc-ring :value="20" strokeWidth="15" />
        <vc-ring :value="100" color="rgba(255,0,0,0.5)" innerBackground="rgba(255,0,0,0.1)" innerRadius="6"
            title="自定义标题" subTitle="" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "ring-demo5"
})
</script>