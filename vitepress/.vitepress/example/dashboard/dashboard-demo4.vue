<template>
    <demo class="flex-item">
        <vc-dashboard :value="50" title="仪表盘" />
        <vc-dashboard :value="50" :titleStyle="{ unit: '分', fontSize: 28 }" />
        <vc-dashboard :value="20" subTitle="（℃）" />
        <vc-dashboard :value="100" subTitle="%" :subTitleStyle="{ color: 'red', fontSize: '18' }" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "dashboard-demo4"
})
</script>