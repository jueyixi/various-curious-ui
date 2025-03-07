<template>
    <div class="icons-content" v-if="list?.length">
        <div class="icons-item" @click="handleClick(item.name)" v-for="(item,index) in list" :key="index">
            <component class="icons-item-icon" :is="Icons[item.name]"></component>
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,h} from "vue"
import * as Icons from '@various-curious-ui/icons';
import Message from "vitepress-theme-demoblock/dist/client/components/message" 

defineOptions({
    name:"iconsAgg"
})

const list = ref<any>([])

Object.entries(Icons).forEach(item => {
    if (item[0] !== 'default' && item[0] !== 'install') {
        list.value.push({name:item[0],component:item[1]})
    }
})

const handleClick = (target:string) => {
    navigator.clipboard.writeText(`<vc-icon name="${target}" />`);
    Message.success("复制成功！",{})
}
</script>

<style scoped lang="less">
.icons-content{
    width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
	border-left: 1px solid var(--demoblock-border);
	border-top: 1px solid var(--demoblock-border);
}

.icons-item{
	height: 100px;
	box-sizing: border-box;
	& * {
		box-sizing: inherit;
	}
	border-bottom: 1px solid var(--demoblock-border);
	border-right: 1px solid var(--demoblock-border);

	font-size: 15px;
	color: var(--vp-c-text-1);
	&-icon{
		font-size: 23px !important;
		color: var(--vp-c-text-1);
		margin-bottom: 10px;

	}

	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;

    cursor: pointer;
}
</style>