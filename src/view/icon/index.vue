<template>
    <div class="vc-container">
        <div class="vc-container-title">使用icon组件</div>
        <div class="vc-container-content">
            <div class="vc-demo">
                <vc-icon name="ArrowUp" />
                <span class="vc-demo-title">向上箭头</span>
            </div>
            <div class="vc-demo">
                <vc-icon name="ArrowDown" />
                <span class="vc-demo-title">向下箭头</span>
            </div>
            <div class="vc-demo">
                <vc-icon name="ArrowLeft" />
                <span class="vc-demo-title">向左箭头</span>
            </div>
            <div class="vc-demo">
                <vc-icon name="ArrowRight" />
                <span class="vc-demo-title">向右箭头</span>
            </div>
            <div class="vc-demo">
                <vc-icon name="Loading" />
                <span class="vc-demo-title">loading</span>
            </div>
            <div class="vc-demo">
                <vc-icon name="Close" />
                <span class="vc-demo-title">close</span>
            </div>
        </div>
        <div class="vc-container-title">icons依赖包，按需加载</div>
        <div class="vc-container-content">
            <div class="vc-demo">
                <ArrowUp />
                <span class="vc-demo-title">向上箭头</span>
            </div>
            <div class="vc-demo">
                <ArrowDown />
                <span class="vc-demo-title">向下箭头</span>
            </div>
            <div class="vc-demo">
                <ArrowLeft />
                <span class="vc-demo-title">向左箭头</span>
            </div>
            <div class="vc-demo">
                <ArrowRight />
                <span class="vc-demo-title">向右箭头</span>
            </div>
            <div class="vc-demo">
                <Loading />
                <span class="vc-demo-title">loading</span>
            </div>
            <div class="vc-demo">
                <Close />
                <span class="vc-demo-title">close</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ArrowDown, ArrowUp, ArrowLeft, ArrowRight, Loading, Close } from '@various-curious-ui/icons';
</script>

<style scoped lang="less">
.vc-container {
    &-title {
        font-size: 22px;
        font-weight: 600;
    }

    &-content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: 15px 0;

        .vc-demo {
            padding: 20px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 36px;

            // border: 1px solid rgba(0,0,0,0.1);
            .vc-icon {
                font-size: 36px;
            }

            &-title {
                font-size: 14px;
                font-weight: 500;
            }
        }
    }
}
</style>