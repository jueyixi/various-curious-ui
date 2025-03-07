<template>
    <demo>
        <div class="flex-item">
            <vc-button ref="domRef">domRef</vc-button>
            <vc-floating content="222" :reference="domRef"></vc-floating>
        </div>
    </demo>
</template>
<script setup lang="ts">
import { ref } from "vue"

defineOptions({
    name: "floating-demo6"
})

const domRef = ref(null)
</script>