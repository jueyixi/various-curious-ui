<template>
    <demo>
        <div style="display:flex;justify-content:space-between;align-items:center;">
            <vc-button-group size="mini">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
            <vc-button-group size="small" style="margin-left: 16px;">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
            <vc-button-group style="margin-left: 16px;">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
            </vc-button-group>
            <vc-button-group type="primary" style="margin-left: 16px;">
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