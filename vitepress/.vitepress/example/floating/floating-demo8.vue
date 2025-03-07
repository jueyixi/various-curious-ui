<template>
    <demo>
        <div class="flex-item">
            <div class="virtual-doms" id="virtualDomRef"></div>
            <vc-floating content="通过id触发" virtualRef="#virtualDomRef" placement="right"></vc-floating>
            <div class="virtual-doms" ref="virtualDomRef"></div>
            <vc-floating content="通过ref触发" ref="virtualFloatingRef" :virtualRef="virtualEl"
                placement="right"></vc-floating>
        </div>
    </demo>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
import { unrefElement, useEventListener, useMutationObserver } from "@vueuse/core";

defineOptions({
    name: "floating-demo8"
})

const virtualDomRef = ref<HTMLElement>()
const virtualEl = ref()

const handleClick = ({ clientX, clientY }) => {
    virtualEl.value = {
        getBoundingClientRect: () => {
            return {
                width: 0,
                height: 0,
                x: clientX,
                y: clientY,
                top: clientY,
                left: clientX,
                right: clientX,
                bottom: clientY,
            };
        },
        contextElement: unrefElement(virtualDomRef),
    };
}

const virtualFloatingRef = ref()

onMounted(() => {
    useEventListener(virtualDomRef, 'mousemove', handleClick);
    useEventListener(virtualDomRef, 'mouseout', () => {
        virtualFloatingRef.value?.close()
    });
});
</script>

<style scoped lang="less">
.virtual-doms {
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 10px;
}
</style>