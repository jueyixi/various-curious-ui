<template>
    <demo>
        <div class="flex-item">
            <vc-button-group size="mini">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
            <vc-button-group size="small">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
            <vc-button-group>
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
            <vc-button-group type="primary">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "buttonGroup-demo1"
})
</script>