<template>
    <demo>
        <div class="container">
            <vc-button-group>
                <vc-button @click="change('week')">周历</vc-button>
                <vc-button @click="change('month')">月历</vc-button>
                <vc-button @click="change('year')">年历</vc-button>
            </vc-button-group>
            <div class="content">
                <vc-calendar :mode="mode"></vc-calendar>
            </div>
        </div>
    </demo>
</template>
<script setup lang="ts">
import { ref } from "vue"
defineOptions({
    name: "calendar-demo1"
})

const mode = ref("month")
const change = (typeName: string) => {
    mode.value = typeName
}
</script>

<style scoped lang="less">
.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .content{
        width: 100%;
        flex: 1;
        overflow: auto;
    }
}
</style>