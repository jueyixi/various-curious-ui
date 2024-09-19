<template>
    <demo class="flex-item">
        <vc-floating content="floating text" trigger="hover">
            <template #reference>
                <vc-button>hover</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" trigger="click">
            <template #reference>
                <vc-button>click</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" trigger="focus">
            <template #reference>
                <vc-button>focus</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" trigger="clickToOpen">
            <template #reference>
                <vc-button>clickToOpen</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" trigger="unset">
            <template #reference>
                <vc-button>unset</vc-button>
            </template>
        </vc-floating>
        <vc-floating content="floating text" v-model:visible="visible" trigger="manual">
            <template #reference>
                <vc-button @click="handleChange">manual</vc-button>
            </template>
        </vc-floating>
    </demo>
</template>
<script setup lang="ts">
import { ref } from "vue"

defineOptions({
    name: "floating-demo2"
})

const visible = ref(false)

const handleChange = () => {
    visible.value = !visible.value
}
</script>