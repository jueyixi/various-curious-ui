import { defineComponent, useSlots, computed, ref, watch, onMounted, onBeforeUnmount, resolveComponent, openBlock, createElementBlock, Fragment, unref, createBlock, withCtx, renderSlot, createCommentVNode, createElementVNode, normalizeStyle, normalizeClass, createVNode, Transition, mergeProps, toDisplayString } from "vue";
import { floatingProps, floatingEmits } from "./floating.js";
import { arrow, useFloating } from "../node_modules/.pnpm/@floating-ui_vue@1.0.6_vue@3.4.29/node_modules/@floating-ui/vue/dist/floating-ui.vue.js";
import { unrefElement, useMutationObserver, useEventListener } from "../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.29/node_modules/@vueuse/core/index.js";
import "../packages/hooks/useDayjs.js";
import { useFlag } from "../packages/hooks/useFlag.js";
import { useNS } from "../packages/hooks/useNS.js";
import { IndexManager } from "../packages/utils/IndexManager.js";
import { isString, isArray, getType } from "../packages/utils/is.js";
import { platform, autoUpdate, offset, flip, shift, computePosition } from "../node_modules/.pnpm/@floating-ui_dom@1.6.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.js";
const _hoisted_1 = ["tabindex"];
const _hoisted_2 = ["data-placement"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcFloating",
    inheritAttrs: false
  },
  __name: "floating",
  props: floatingProps,
  emits: [...floatingEmits],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const indexManager = new IndexManager();
    const floatingNS = useNS("floating");
    const visible = computed({
      get() {
        return props.visible;
      },
      set(val) {
        emits("update:visible", val);
      }
    });
    const floatingClass = computed(() => {
      const classList = [];
      if (props.floatingClass) {
        if (isString(props.floatingClass)) {
          classList.push(props.floatingClass);
        } else if (isArray(props.floatingClass)) {
          classList.push(...props == null ? void 0 : props.floatingClass);
        }
      }
      return classList;
    });
    const reference = slots.reference ? ref(null) : computed(() => {
      return ref(unrefElement(props.reference)).value;
    });
    const floating = ref(null);
    const _arrow = ref(null);
    const placementRef = ref("");
    const defaultOptions = ref({
      placement: props.placement,
      platform,
      strategy: props.strategy,
      whileElementsMounted: autoUpdate,
      middleware: [offset(props.offset), flip(), shift(), arrow({ element: _arrow, padding: props.arrowPadding })]
    });
    const { floatingStyles, placement, middlewareData, update } = useFloating(reference, floating, {
      ...defaultOptions.value,
      ...props.floatingOptions
    });
    placementRef.value = placement.value;
    const { flag, setTrue, setFalse } = useFlag(false);
    let openTimer;
    let closeTimer;
    const open = () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      if (flag.value || props.disabled)
        return;
      openTimer = setTimeout(() => {
        setTrue();
        floating.value.style.zIndex = indexManager.nextIndex().toString();
        emits("open");
      }, props.openDelay);
    };
    const close = () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      if (!flag.value)
        return;
      closeTimer = setTimeout(() => {
        setFalse();
        emits("close");
      }, props.closeDelay);
    };
    const toggle = () => {
      if (flag.value)
        close();
      else
        open();
    };
    const arrowStyle = ref({
      left: void 0,
      top: void 0,
      transform: "translate3d(0,0,0)"
    });
    if (props.showArrow) {
      watch(() => middlewareData.value.arrow, (val) => {
        const arrowEl = _arrow.value;
        const { x, y } = val;
        if (!arrowEl)
          return;
        arrowStyle.value.left = `${x}px`;
        arrowStyle.value.top = `${y}px`;
      });
    }
    if (props.quickTrack) {
      useMutationObserver(reference, () => update(), {
        attributes: true
      });
    }
    if (props.closeOnClickBody) {
      let trigger = null;
      useEventListener(document.body, "mousedown", (evt) => {
        if (!flag.value)
          return;
        evt.stopPropagation();
        trigger = evt.target;
      });
      useEventListener(document.body, "mouseup", (evt) => {
        if (!flag.value)
          return;
        evt.stopPropagation();
        const floatingEl = unrefElement(floating);
        const referenceEl = unrefElement(reference);
        if (!(floatingEl.contains(trigger) || referenceEl.contains(trigger))) {
          close();
        }
      });
    }
    if (props.trigger === "hover") {
      useEventListener(reference, "mouseenter", open);
      useEventListener(reference, "mouseleave", close);
      useEventListener(floating, "mouseenter", open);
      useEventListener(floating, "mouseleave", close);
    }
    if (props.trigger === "click") {
      useEventListener(reference, "click", toggle);
    }
    if (props.trigger === "clickToOpen") {
      useEventListener(reference, "click", open);
    }
    if (props.trigger === "focus") {
      useEventListener(reference, "mousedown", open);
      useEventListener(document.body, "mouseup", close);
    }
    if (props.trigger === "manual") {
      watch(visible, (newValue) => {
        if (newValue) {
          open();
        } else {
          close();
        }
      });
    }
    const updateFloating = (domRef) => {
      flag.value && computePosition(domRef, floating.value, {
        ...defaultOptions.value,
        ...props.floatingOptions
      }).then(
        ({ x, y, middlewareData: middlewareData2, placement: placement2, strategy }) => {
          positionStyle.value = { left: x + "px", top: y + "px", position: strategy };
          placementRef.value = placement2;
          if (props.showArrow) {
            const { x: arrowX, y: arrowY } = middlewareData2.arrow;
            const arrowEl = _arrow.value;
            if (!arrowEl)
              return;
            arrowStyle.value.left = `${arrowX}px`;
            arrowStyle.value.top = `${arrowY}px`;
          }
        }
      );
    };
    let _;
    const positionStyle = ref();
    watch(floatingStyles, (newVal) => {
      positionStyle.value = newVal;
    });
    const _floatingStyles = computed(() => {
      if (flag.value) {
        _ = [positionStyle.value, props.floatingStyle];
      }
      return _;
    });
    const setBoundary = () => {
      var _a;
      const boundariesElement = getType(props.boundariesRef) === "object" ? (_a = props.boundariesRef) == null ? void 0 : _a.$el : getType(props.boundariesRef) === "element" ? props.boundariesRef : document.querySelector(props.boundariesRef);
      Object.assign(defaultOptions.value, {
        platform: {
          ...platform,
          getClippingRect: () => boundariesElement.getBoundingClientRect()
        }
      });
    };
    watch(() => props.boundariesRef, (newVal) => {
      if (newVal) {
        setBoundary();
        autoUpdate(unrefElement(reference), floating.value, () => updateFloating(unrefElement(reference)), { animationFrame: true });
      }
    });
    const virtualEle = ref(null);
    const virtualRef = ref(null);
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
            bottom: clientY
          };
        },
        contextElement: unrefElement(virtualEle)
      };
      open();
      if (virtualRef.value) {
        autoUpdate(virtualRef.value, floating.value, () => updateFloating(virtualRef.value), { animationFrame: true });
      }
    };
    const openVirtualFloating = (mouseWays) => {
      useEventListener(virtualEle, mouseWays, (evt) => {
        resolveVirtualDom(evt);
      });
    };
    const closeVirtualFloating = (mouseWays) => {
      let trigger = null;
      useEventListener(document.body, mouseWays, (evt) => {
        evt.stopPropagation();
        trigger = evt.target;
        const floatingEl = unrefElement(floating);
        const virtualEl = unrefElement(virtualEle);
        if (!(floatingEl.contains(trigger) || virtualEl.contains(trigger))) {
          close();
        }
      });
    };
    const triggerByVirtual = () => {
      if (props.trigger === "clickToOpen" || props.trigger === "click") {
        openVirtualFloating("click");
      }
      if (props.trigger === "click") {
        closeVirtualFloating("click");
      }
      if (props.trigger === "hover") {
        openVirtualFloating("mousemove");
        useEventListener(virtualEle, "mouseout", close);
      }
    };
    watch(() => props.virtualRef, (newVal) => {
      if (newVal) {
        if (getType(props.virtualRef) === "object") {
          open();
          autoUpdate(props.virtualRef, floating.value, () => updateFloating(props.virtualRef), { animationFrame: true });
        } else if (getType(props.virtualRef) === "element") {
          virtualEle.value = props.virtualRef;
          defaultOptions.value = {
            ...defaultOptions.value,
            getClippingRect: () => unrefElement(virtualEle).getBoundingClientRect()
          }, triggerByVirtual();
        } else {
          console.log("virtualRef does not match the type");
          return;
        }
      } else {
        close();
      }
    });
    onMounted(() => {
      if (props.virtualRef && getType(props.virtualRef) === "string") {
        virtualEle.value = document.querySelector(props.virtualRef);
        defaultOptions.value = {
          ...defaultOptions.value,
          getClippingRect: () => unrefElement(virtualEle).getBoundingClientRect()
        }, triggerByVirtual();
      }
      import("./createContainer.js").then(() => {
        if (props.teleported) {
          const container = document.body.querySelector(".vc-floating-container");
          container.appendChild(unrefElement(floating));
        }
      }).finally(() => {
        props.autoOpen && open();
      });
    });
    onBeforeUnmount(() => {
      if (props.teleported) {
        const container = document.body.querySelector(".vc-floating-container");
        container.removeChild(unrefElement(floating));
      }
    });
    __expose({
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
      resolveVirtualDom
    });
    return (_ctx, _cache) => {
      const _component_VcPartial = resolveComponent("VcPartial");
      return openBlock(), createElementBlock(Fragment, null, [
        unref(slots).reference ? (openBlock(), createBlock(_component_VcPartial, {
          key: 0,
          ref_key: "reference",
          ref: reference
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "reference")
          ]),
          _: 3
        }, 512)) : createCommentVNode("", true),
        createElementVNode("div", {
          ref_key: "floating",
          ref: floating,
          style: normalizeStyle(_floatingStyles.value),
          class: normalizeClass(floatingClass.value),
          tabindex: props.tabindex
        }, [
          createVNode(Transition, {
            name: "vc-transition-" + props.transition,
            onAfterEnter: _cache[0] || (_cache[0] = ($event) => emits("opened")),
            onAfterLeave: _cache[1] || (_cache[1] = ($event) => emits("closed"))
          }, {
            default: withCtx(() => [
              unref(flag) ? (openBlock(), createElementBlock("div", mergeProps({
                key: 0,
                class: [unref(floatingNS).namespace, unref(floatingNS).is(props.effect)],
                "data-placement": placementRef.value
              }, _ctx.$attrs), [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createElementVNode("span", null, toDisplayString(props.content), 1)
                ]),
                props.showArrow ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  ref_key: "_arrow",
                  ref: _arrow,
                  class: "vc-floating__arrow",
                  style: normalizeStyle(arrowStyle.value)
                }, null, 4)) : createCommentVNode("", true)
              ], 16, _hoisted_2)) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 14, _hoisted_1)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
