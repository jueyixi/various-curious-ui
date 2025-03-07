<template>
    <demo>
        <vc-calendar>
            <template #columnsItem="{ data }">周{{ data }}</template>
            <template #date="{ data }">{{ data.day }}日</template>
            <template #schedule="{ data }">{{ data.day == '08' ? "写日记" : "" }}</template>
        </vc-calendar>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "calendar-demo5"
})
</script>