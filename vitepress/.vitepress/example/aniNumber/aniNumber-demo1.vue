<template>
    <demo class="flex-item">
        <vc-ani-number :value="100"></vc-ani-number>
        <vc-ani-number :value="75"></vc-ani-number>
        <vc-ani-number :value="20"></vc-ani-number>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "aniNumber-demo1"
})
</script>