<template>
    <demo class="flex-item">
        <span>
            循环动画：
            <vc-ani-number :value="100" :loopAnimate="true"></vc-ani-number>
        </span>
        <span>
            设置动画间隔时间：
            <vc-ani-number :value="100" :loopAnimate="true" :delay="5000"></vc-ani-number>
        </span>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "aniNumber-demo4"
})
</script>