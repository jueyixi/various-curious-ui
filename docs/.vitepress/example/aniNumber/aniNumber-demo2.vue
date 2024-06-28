<template>
    <demo class="flex-item">
        <span>
            定义初始值：
            <vc-ani-number :value="100" :initial="50"></vc-ani-number>
        </span>
        <span>
            定义数值精度：
            <vc-ani-number :value="100" precision="2"></vc-ani-number>
        </span>
        <span>
            自定义步长：
            <vc-ani-number :value="1000" :step="5"></vc-ani-number>
        </span>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "aniNumber-demo2"
})
</script>