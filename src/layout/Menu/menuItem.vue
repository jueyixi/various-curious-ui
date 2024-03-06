<template>
    <div class="vc-submenu">
        <div class="vc-submenu-item" v-for="(item, index) in props.menuList">
            <div class="vc-submenu-item__title" @click="selectMenuItem(item)" :class="{ 'is-actived': props.current.includes(item.key) }">{{ item?.meta?.title }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router';
import { menuType } from './index';
defineOptions({
    name: 'VcMenuItem'
})
const props = defineProps({
    menuList: {
        type: Array<RouteRecordRaw & menuType>,
        default: () => []
    },
    current: {
        type: Array<any>,
        default:() => []
    },
    parentKey: {
        type: [String, Number] ,
        default:""
    }
})

const emits = defineEmits(["changeItem"])

const selectMenuItem = (item: any) => {
    emits("changeItem",item,props.parentKey)
}
</script>

<style scoped lang="less">
.vc-submenu {
    background-color: rgba(0,0,0,0.04);
    &-item {
        &__title{
            height:40px;
            line-height:40px;
            padding-left: 48px;
            padding-right: 24px;
            margin: 5px;
            border-radius: 8px;
            &:hover {
                background-color: rgba(0,0,0,0.1);
            }
        }
        .is-actived{
            background-color: #e6f4ff;
            color: #1890ff;
        }
    }
}
</style>