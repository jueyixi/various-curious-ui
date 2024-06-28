<template>
    <demo>
        百分比：
        <vc-ani-number :value="100" :format="format"></vc-ani-number>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "aniNumber-demo3"
})

const format = (value) => {
    return value + '%';
}
</script>