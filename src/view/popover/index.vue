<template>
    <div class="floating_container">
        <vc-floating :effect="effect" trigger="hover">
            <template #reference>
                <vc-button @click="effect = effect === 'light' ? 'dark' : 'light'">{{ effect }}</vc-button>
            </template>

            <template #default>
                <span>1111</span>
            </template>
        </vc-floating>
        <vc-floating content="1111" trigger="clickToOpen" placement="right-start">
            <template #reference>
                <vc-button>default-click</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="222" trigger="clickToOpen" :closeOnClickBody="false">
            <template #reference>
                <vc-button>clickToOpen</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="222" :disabled="true">
            <template #reference>
                <vc-button>disabled</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="222" :autoOpen="true" placement="bottom-end">
            <template #reference>
                <vc-button>body-autoOpen</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="222" :autoOpen="true" :teleported="false">
            <template #reference>
                <vc-button>autoOpen</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="222" trigger="manual" v-model:visible="visible">
            <template #reference>
                <vc-button @click="visible = !visible">manual</vc-button>
            </template>
        </vc-floating>

        <vc-button ref="domRef">domRef</vc-button>
        <vc-floating content="222" :reference="domRef"></vc-floating>

        <div class="virtual-doms" ref="boundariesRef">
            <vc-floating content="4444444444444444444" :boundariesRef="boundariesRef">
                <template #reference>
                    <vc-button>boundariesRef</vc-button>
                </template>
            </vc-floating>
        </div>
        <div class="virtual-doms" id="virtualDomRef"></div>
        <vc-floating content="333" virtualRef="#virtualDomRef" placement="right"></vc-floating>
        <div class="virtual-doms" ref="virtualDomRef"></div>
        <vc-floating content="333" ref="virtualFloatingRef" :virtualRef="virtualEl" placement="right"></vc-floating>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { unrefElement, useEventListener, useMutationObserver } from "@vueuse/core";

const effect = ref("light")

const visible = ref(false)
const domRef = ref(null)

const boundariesRef = ref<HTMLElement>()

const virtualDomRef = ref<HTMLElement>()
const virtualEl = ref()

const handleClick = ({ clientX, clientY }) => {        
    virtualEl.value = {
        getBoundingClientRect:()=> {
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
.floating_container {
    width: 100%;
    height: 100%;
    display: flex;
    .virtual-doms{
        width: 200px;
        height: 200px;
        border: 1px solid rgba(0,0,0,0.5);
        margin-right: 10px;
    }
    & > button{
        margin-right: 10px;
    }
}
</style>