<template>
    <demo>
        <div class="virtual-doms" ref="boundariesRef">
            <vc-floating content="boundariesRef text dom" :boundariesRef="boundariesRef" placement="top-end">
                <template #reference>
                    <vc-button>boundariesRef</vc-button>
                </template>
            </vc-floating>
        </div>
    </demo>
</template>
<script setup lang="ts">
import { ref } from "vue"

defineOptions({
    name: "floating-demo7"
})

const boundariesRef = ref<HTMLElement>()
</script>

<style scoped lang="less">
.virtual-doms {
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 10px;
}
</style>