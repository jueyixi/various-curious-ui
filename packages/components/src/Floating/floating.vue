<template>

	<VcPartial v-if="slots.reference" ref="reference">
		<slot name="reference">
		</slot>
	</VcPartial>


	<div ref="floating" :style="_floatingStyles" :class="[props.floatingClass]" :tabindex="props.tabindex">

		<transition :name="'vc-transition-' + props.transition" @afterEnter="emits('opened')"
			@afterLeave="emits('closed')">
			<div v-if="flag" :class="[floatingNS.namespace, floatingNS.is(props.effect)]" :data-placement="placementRef"
				v-bind="$attrs">

				<slot>
					<span>{{ props.content }}</span>
				</slot>
				<div v-if="props.showArrow" ref="_arrow" class="vc-floating__arrow" :style="arrowStyle"></div>
			</div>
		</transition>
	</div>


</template>


<script setup lang="ts">
import { FloatingProps, FloatingEmits } from "./floating";
import { useFloating, offset, platform, flip, shift, autoUpdate, arrow, computePosition, VirtualElement, type ReferenceElement } from "@floating-ui/vue";
import { computed, onMounted, watch, ref, useSlots, nextTick, onBeforeUnmount, Ref, watchEffect } from "vue";
import { unrefElement, useEventListener, useMutationObserver } from "@vueuse/core";
import { useFlag, useNS } from "vc-hooks";
import { IndexManager, getType } from "vc-utils";

defineOptions({
	name: 'VcFloating',
	inheritAttrs: false,
})

const props = defineProps({ ...FloatingProps });
const emits = defineEmits([...FloatingEmits,]);
const slots = useSlots();

// 设置popper的zIndex值
const indexManager = new IndexManager();
const floatingNS = useNS('floating');

// 手动控制项
const visible = computed({
	get() {
		return props.visible
	},
	set(val) {
		emits("update:visible", val)
	}
})



// slot.reference优先级高于props.reference
const reference: Ref<HTMLElement | null> = slots.reference ? ref(null) : computed(() => {
	return ref(unrefElement(props.reference)).value;

});

const floating = ref<HTMLElement | null>(null);
const _arrow = ref<HTMLElement | null>(null);
// 位置方向
const placementRef = ref("")

// 默认配置项
const defaultOptions: any = ref({
	placement: props.placement,
	platform: platform,
	strategy: props.strategy,
	whileElementsMounted: autoUpdate,
	middleware: [offset(props.offset), flip(), shift(), arrow({ element: _arrow, padding: props.arrowPadding })],
})

// 初始化
const { floatingStyles, placement, middlewareData, update } = useFloating(reference, floating, {
	...defaultOptions.value,
	...props.floatingOptions
});

placementRef.value = placement.value

const { flag, setTrue, setFalse } = useFlag(false);

let openTimer: NodeJS.Timeout;
let closeTimer: NodeJS.Timeout;

// 打开
const open = () => {
	clearTimeout(openTimer);
	clearTimeout(closeTimer);
	if (flag.value || props.disabled) return
	openTimer = setTimeout(() => {
		setTrue();
		floating.value!.style.zIndex = indexManager.nextIndex().toString();
		emits("open");
	}, props.openDelay)
}

// 关闭
const close = () => {
	clearTimeout(openTimer);
	clearTimeout(closeTimer);
	if (!flag.value) return
	closeTimer = setTimeout(() => {
		setFalse();
		emits("close");
	}, props.closeDelay);
}

// 切换
const toggle = () => {
	if (flag.value) close()
	else open();
}


// 箭头相关
const arrowStyle = ref<{
	left: string | undefined
	top: string | undefined
	transform: string
}>({
	left: undefined,
	top: undefined,
	transform: 'translate3d(0,0,0)'

})

if (props.showArrow) {
	watch(() => middlewareData.value.arrow, (val) => {
		const arrowEl = _arrow.value as HTMLElement;
		const { x, y } = val!;

		if (!arrowEl) return;

		arrowStyle.value.left = `${x}px`;
		arrowStyle.value.top = `${y}px`;

	})
}

// 当reference位置会发生变化且floating元素跟不上变化时，开启此项
if (props.quickTrack) {
	useMutationObserver(reference, () => update(), {
		attributes: true
	})
}

// 可以通过点击body关闭floating
if (props.closeOnClickBody) {
	let trigger: Element | null;
	useEventListener(document.body, 'mousedown', (evt: Event) => {
		if (!flag.value) return;
		evt.stopPropagation();
		trigger = evt.target as Element;
	})
	useEventListener(document.body, 'mouseup', (evt: Event) => {
		if (!flag.value) return;
		evt.stopPropagation();
		const floatingEl = unrefElement(floating) as HTMLElement;
		const referenceEl = unrefElement(reference) as HTMLElement;
		if (!(floatingEl.contains(trigger) || referenceEl.contains(trigger))) {
			close();
		}
	});
}

// trigger
if (props.trigger === 'hover') {
	useEventListener(reference, 'mouseenter', open);
	useEventListener(reference, 'mouseleave', close);

	useEventListener(floating, 'mouseenter', open);
	useEventListener(floating, 'mouseleave', close);
}

if (props.trigger === 'click') {
	useEventListener(reference, 'click', toggle);
}

if (props.trigger === 'clickToOpen') {
	useEventListener(reference, 'click', open);
}

if (props.trigger === 'focus') {
	useEventListener(reference, 'mousedown', open);
	useEventListener(document.body, 'mouseup', close);
}

// 手动控制
if (props.trigger === "manual") {
	watch(visible, (newValue) => {
		if (newValue) {
			open()
		} else {
			close()
		}
	})

}

// 更新弹窗相关信息
const updateFloating = (domRef) => {
	flag.value && computePosition(domRef, floating.value, {
		...defaultOptions.value,
		...props.floatingOptions
	}).then(
		({ x, y, middlewareData, placement, strategy }) => {
			positionStyle.value = { left: x + 'px', top: y + 'px', position: strategy };

			placementRef.value = placement

			if (props.showArrow) {
				const { x: arrowX, y: arrowY } = middlewareData.arrow;
				const arrowEl = _arrow.value as HTMLElement;
				if (!arrowEl) return;
				arrowStyle.value.left = `${arrowX}px`;
				arrowStyle.value.top = `${arrowY}px`;
			}
		}
	);
};

// 在floating不可见时， 阻止修改css样式
let _: any;

// 弹窗位置信息
const positionStyle = ref<any>()

// 当弹窗打开，且相关信息更新时
watch(floatingStyles, (newVal) => {
	positionStyle.value = newVal
})

// 最终适用的样式
const _floatingStyles = computed(() => {
	if (flag.value) {
		_ = { ...positionStyle.value, ...props.floatingStyle };
	}
	return _
})

// 设置边界元素相关
const setBoundary = () => {
	// 获取边界元素
	const boundariesElement =
		getType(props.boundariesRef) === 'object'
			? props.boundariesRef?.$el
			: getType(props.boundariesRef) === 'element'
				? props.boundariesRef
				: document.querySelector(props.boundariesRef);
	// 更改默认配置项
	Object.assign(defaultOptions.value, {
		platform: {
			...platform,
			getClippingRect: () => boundariesElement.getBoundingClientRect(),
		},
	});
};

// 当有边界元素时，监听数据变化
watch(() => props.boundariesRef, (newVal) => {
	if (newVal) {
		setBoundary()
		autoUpdate(unrefElement(reference), floating.value, () => updateFloating(unrefElement(reference)), { animationFrame: true })
	}
})

// 虚拟元素触发相关

const virtualEle = ref(null)
const virtualRef = ref(null)

// 处理动态虚拟元素触发点位
const resolveVirtualDom = ({ clientX, clientY }) => {
	virtualRef.value = {
		getBoundingClientRect: () => {
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
		contextElement: unrefElement(virtualEle),
	};
	open()
	if (virtualRef.value) {
		autoUpdate(virtualRef.value, floating.value, () => updateFloating(virtualRef.value), { animationFrame: true })
	}
}

// 打开弹窗
const openVirtualFloating = (mouseWays: string) => {
	useEventListener(virtualEle, mouseWays, (evt: any) => {
		resolveVirtualDom(evt)
	});
}

// 关闭弹窗
const closeVirtualFloating = (mouseWays: string) => {
	let trigger: Element | null;
	useEventListener(document.body, mouseWays, (evt: Event) => {
		evt.stopPropagation();
		trigger = evt.target as Element;
		const floatingEl = unrefElement(floating) as HTMLElement;
		const virtualEl = unrefElement(virtualEle) as HTMLElement;
		if (!(floatingEl.contains(trigger) || virtualEl.contains(trigger))) {
			close();
		}
	});
}

const triggerByVirtual = () => {
	if (props.trigger === 'clickToOpen' || props.trigger === 'click') {
		openVirtualFloating("click")
	}

	if (props.trigger === 'click') {
		closeVirtualFloating("click")
	}

	if (props.trigger === 'hover') {
		openVirtualFloating("mousemove")
		useEventListener(virtualEle, 'mouseout', close);
	}
}

// 当有虚拟元素触发时，监听数据变化
watch(() => props.virtualRef, (newVal) => {
	if (newVal) {
		if (getType(props.virtualRef) === 'object') {
			open()
			autoUpdate(props.virtualRef as VirtualElement, floating.value, () => updateFloating(props.virtualRef), { animationFrame: true })
		} else if (getType(props.virtualRef) === 'element') {
			virtualEle.value = props.virtualRef
			defaultOptions.value = {
				...defaultOptions.value,
				getClippingRect: () => unrefElement(virtualEle).getBoundingClientRect()
			},
				triggerByVirtual()
		} else {
			console.log("virtualRef does not match the type");
			return
		}
	} else {
		close()
	}
})

onMounted(() => {
	if (props.virtualRef && getType(props.virtualRef) === 'string') {
		virtualEle.value = document.querySelector(props.virtualRef as string)
		defaultOptions.value = {
			...defaultOptions.value,
			getClippingRect: () => unrefElement(virtualEle).getBoundingClientRect()
		},
			triggerByVirtual()
	}
	// 避免在加载文件时操作dom, ssr友好
	import("./createContainer").then(() => {
		if (props.teleported) {
			const container = document.body.querySelector('.vc-floating-container') as HTMLDivElement;
			container.appendChild(unrefElement(floating)!);
		}
	}).finally(() => {
		props.autoOpen && open()
	});
})
onBeforeUnmount(() => {
	if (props.teleported) {
		const container = document.body.querySelector('.vc-floating-container') as HTMLDivElement;
		container.removeChild(unrefElement(floating)!);
	}
})


defineExpose({
	/**
	 * @description 关闭floating元素
	 */
	close,
	/**
	 * @description 打开floating元素
	 */
	open,
	/**
	 * @description 打开/关闭floating元素轮循
	 */
	toggle,
	/**
	 * @description 虚拟元素点位触发处理方法
	 */
	resolveVirtualDom,
})


</script>
