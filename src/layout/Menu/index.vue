<template>
    <div class="vc-menu">
        <div class="vc-menu-item" v-for="(item, index) in menulist" :key="item.key">
            <div class="vc-menu-item__title" v-if="item.children?.length" @click="show(item)"
                :class="{ 'is-actived__title': item.key && current.includes(item.key) }">
                {{ item.meta && item.meta.title }}
                <ArrowDown class="vc-menu-icon" v-if="!item.isShow" />
                <ArrowUp class="vc-menu-icon" v-else />
            </div>
            <div class="vc-menu-item__title" :class="{ 'is-actived': item.key && current.includes(item.key) }" v-else
                @click="selectMenu(item)">{{ item.meta && item.meta.title }}</div>
            <template v-if="item.isShow">
                <VcMenuItem :current="current" v-if="item.children" :parentKey="item.key" :menuList="item.children"
                    @changeItem="changeItem"></VcMenuItem>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouteRecordRaw, useRouter, useRoute } from 'vue-router';
import VcMenuItem from './menuItem.vue';
import { menuType } from './index';
import { ref } from 'vue';
import { ArrowDown,ArrowUp } from '@various-curious-ui/icons';
defineOptions({
    name: 'VcMenu'
})

const { options, push } = useRouter()
const { name, meta } = useRoute()
const currentKey = name || meta.title

const current = ref<Array<number | string>>([])

const menulist = ref<Array<RouteRecordRaw & menuType>>([])

menulist.value = options?.routes?.[0].children?.map((item: RouteRecordRaw, index: number): any => {
    const name:any = item.name || item.meta && item.meta.title
    if (name === currentKey) {
        current.value = [name]
    }
    if (item.children) {
        item.children = item.children?.map((v: RouteRecordRaw, i: number) => {
            const childrenName: any = v.name || v.meta && v.meta.title
            if (childrenName === currentKey) {
                current.value = [name, childrenName]
            }
            return {
                ...v,
                key: name + "/" + childrenName,
                isShow:false
            }
        })
    }
    return {
        ...item,
        key: name,
        isShow:false
    }
}) || []

const selectMenu = (item: any) => {
    current.value = [item.key]
    goToPath(item)
}

const show = (item: any) => {
    menulist.value?.forEach((v: any) => (v.key !== item.key) && (v.isShow = false))
    item.isShow = !item.isShow;
    if (item.show) {
        current.value = [item.key, item.children[0].key]
        goToPath(item.children[0])
    }
}

const changeItem = (item: any, parentKey: string) => {
    current.value = [parentKey, item.key]
    goToPath(item)
}

const goToPath = (item: any) => {
    push(item)
}
</script>

<style scoped lang="less">
.vc-menu {
    width: 100%;

    &-item {
        width: 100%;
        margin-bottom: 5px;

        &__title {
            box-sizing: border-box;
            height: 40px;
            line-height: 40px;
            padding: 0 24px;
            margin: 5px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }

        }

        .is-actived {
            background-color: #e6f4ff;
            color: #1890ff;
        }

        .is-actived__title {
            color: #1890ff;
        }
    }

    &-icon {
        font-size: 16px;
    }
}
</style>