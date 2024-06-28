<template>
    <demo>
        <div style="display:flex;">
            <vc-button-group danger>
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
                <vc-button>按钮3</vc-button>
            </vc-button-group>
            <vc-button-group type="primary" danger style="margin-left: 16px;">
                <vc-button>按钮1</vc-button>
                <vc-button>按钮2</vc-button>
                <vc-button>按钮3</vc-button>
            </vc-button-group>
        </div>
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "buttonGroup-demo2"
})
</script>