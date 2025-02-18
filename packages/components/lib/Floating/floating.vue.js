"use strict";
const vue = require("vue");
const floating = require("./floating.js");
const floatingUi_vue = require("../node_modules/.pnpm/@floating-ui_vue@1.0.6_vue@3.4.29/node_modules/@floating-ui/vue/dist/floating-ui.vue.js");
const index = require("../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.29/node_modules/@vueuse/core/index.js");
require("../packages/hooks/useDayjs.js");
const useFlag = require("../packages/hooks/useFlag.js");
const useNS = require("../packages/hooks/useNS.js");
const IndexManager = require("../packages/utils/IndexManager.js");
const is = require("../packages/utils/is.js");
const floatingUi_dom = require("../node_modules/.pnpm/@floating-ui_dom@1.6.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.js");
const _hoisted_1 = ["tabindex"];
const _hoisted_2 = ["data-placement"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcFloating",
    inheritAttrs: false
  },
  __name: "floating",
  props: floating.floatingProps,
  emits: [...floating.floatingEmits],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = vue.useSlots();
    const indexManager = new IndexManager.IndexManager();
    const floatingNS = useNS.useNS("floating");
    const visible = vue.computed({
      get() {
        return props.visible;
      },
      set(val) {
        emits("update:visible", val);
      }
    });
    const floatingClass = vue.computed(() => {
      const classList = [];
      if (props.floatingClass) {
        if (is.isString(props.floatingClass)) {
          classList.push(props.floatingClass);
        } else if (is.isArray(props.floatingClass)) {
          classList.push(...props == null ? void 0 : props.floatingClass);
        }
      }
      return classList;
    });
    const reference = slots.reference ? vue.ref(null) : vue.computed(() => {
      return vue.ref(index.unrefElement(props.reference)).value;
    });
    const floating2 = vue.ref(null);
    const _arrow = vue.ref(null);
    const placementRef = vue.ref("");
    const defaultOptions = vue.ref({
      placement: props.placement,
      platform: floatingUi_dom.platform,
      strategy: props.strategy,
      whileElementsMounted: floatingUi_dom.autoUpdate,
      middleware: [floatingUi_dom.offset(props.offset), floatingUi_dom.flip(), floatingUi_dom.shift(), floatingUi_vue.arrow({ element: _arrow, padding: props.arrowPadding })]
    });
    const { floatingStyles, placement, middlewareData, update } = floatingUi_vue.useFloating(reference, floating2, {
      ...defaultOptions.value,
      ...props.floatingOptions
    });
    placementRef.value = placement.value;
    const { flag, setTrue, setFalse } = useFlag.useFlag(false);
    let openTimer;
    let closeTimer;
    const open = () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      if (flag.value || props.disabled)
        return;
      openTimer = setTimeout(() => {
        setTrue();
        floating2.value.style.zIndex = indexManager.nextIndex().toString();
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
    const arrowStyle = vue.ref({
      left: void 0,
      top: void 0,
      transform: "translate3d(0,0,0)"
    });
    if (props.showArrow) {
      vue.watch(() => middlewareData.value.arrow, (val) => {
        const arrowEl = _arrow.value;
        const { x, y } = val;
        if (!arrowEl)
          return;
        arrowStyle.value.left = `${x}px`;
        arrowStyle.value.top = `${y}px`;
      });
    }
    if (props.quickTrack) {
      index.useMutationObserver(reference, () => update(), {
        attributes: true
      });
    }
    if (props.closeOnClickBody) {
      let trigger = null;
      index.useEventListener(document.body, "mousedown", (evt) => {
        if (!flag.value)
          return;
        evt.stopPropagation();
        trigger = evt.target;
      });
      index.useEventListener(document.body, "mouseup", (evt) => {
        if (!flag.value)
          return;
        evt.stopPropagation();
        const floatingEl = index.unrefElement(floating2);
        const referenceEl = index.unrefElement(reference);
        if (!(floatingEl.contains(trigger) || referenceEl.contains(trigger))) {
          close();
        }
      });
    }
    if (props.trigger === "hover") {
      index.useEventListener(reference, "mouseenter", open);
      index.useEventListener(reference, "mouseleave", close);
      index.useEventListener(floating2, "mouseenter", open);
      index.useEventListener(floating2, "mouseleave", close);
    }
    if (props.trigger === "click") {
      index.useEventListener(reference, "click", toggle);
    }
    if (props.trigger === "clickToOpen") {
      index.useEventListener(reference, "click", open);
    }
    if (props.trigger === "focus") {
      index.useEventListener(reference, "mousedown", open);
      index.useEventListener(document.body, "mouseup", close);
    }
    if (props.trigger === "manual") {
      vue.watch(visible, (newValue) => {
        if (newValue) {
          open();
        } else {
          close();
        }
      });
    }
    const updateFloating = (domRef) => {
      flag.value && floatingUi_dom.computePosition(domRef, floating2.value, {
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
    const positionStyle = vue.ref();
    vue.watch(floatingStyles, (newVal) => {
      positionStyle.value = newVal;
    });
    const _floatingStyles = vue.computed(() => {
      if (flag.value) {
        _ = [positionStyle.value, props.floatingStyle];
      }
      return _;
    });
    const setBoundary = () => {
      var _a;
      const boundariesElement = is.getType(props.boundariesRef) === "object" ? (_a = props.boundariesRef) == null ? void 0 : _a.$el : is.getType(props.boundariesRef) === "element" ? props.boundariesRef : document.querySelector(props.boundariesRef);
      Object.assign(defaultOptions.value, {
        platform: {
          ...floatingUi_dom.platform,
          getClippingRect: () => boundariesElement.getBoundingClientRect()
        }
      });
    };
    vue.watch(() => props.boundariesRef, (newVal) => {
      if (newVal) {
        setBoundary();
        floatingUi_dom.autoUpdate(index.unrefElement(reference), floating2.value, () => updateFloating(index.unrefElement(reference)), { animationFrame: true });
      }
    });
    const virtualEle = vue.ref(null);
    const virtualRef = vue.ref(null);
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
        contextElement: index.unrefElement(virtualEle)
      };
      open();
      if (virtualRef.value) {
        floatingUi_dom.autoUpdate(virtualRef.value, floating2.value, () => updateFloating(virtualRef.value), { animationFrame: true });
      }
    };
    const openVirtualFloating = (mouseWays) => {
      index.useEventListener(virtualEle, mouseWays, (evt) => {
        resolveVirtualDom(evt);
      });
    };
    const closeVirtualFloating = (mouseWays) => {
      let trigger = null;
      index.useEventListener(document.body, mouseWays, (evt) => {
        evt.stopPropagation();
        trigger = evt.target;
        const floatingEl = index.unrefElement(floating2);
        const virtualEl = index.unrefElement(virtualEle);
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
        index.useEventListener(virtualEle, "mouseout", close);
      }
    };
    vue.watch(() => props.virtualRef, (newVal) => {
      if (newVal) {
        if (is.getType(props.virtualRef) === "object") {
          open();
          floatingUi_dom.autoUpdate(props.virtualRef, floating2.value, () => updateFloating(props.virtualRef), { animationFrame: true });
        } else if (is.getType(props.virtualRef) === "element") {
          virtualEle.value = props.virtualRef;
          defaultOptions.value = {
            ...defaultOptions.value,
            getClippingRect: () => index.unrefElement(virtualEle).getBoundingClientRect()
          }, triggerByVirtual();
        } else {
          console.log("virtualRef does not match the type");
          return;
        }
      } else {
        close();
      }
    });
    vue.onMounted(() => {
      if (props.virtualRef && is.getType(props.virtualRef) === "string") {
        virtualEle.value = document.querySelector(props.virtualRef);
        defaultOptions.value = {
          ...defaultOptions.value,
          getClippingRect: () => index.unrefElement(virtualEle).getBoundingClientRect()
        }, triggerByVirtual();
      }
      Promise.resolve().then(() => require("./createContainer.js")).then(() => {
        if (props.teleported) {
          const container = document.body.querySelector(".vc-floating-container");
          container.appendChild(index.unrefElement(floating2));
        }
      }).finally(() => {
        props.autoOpen && open();
      });
    });
    vue.onBeforeUnmount(() => {
      if (props.teleported) {
        const container = document.body.querySelector(".vc-floating-container");
        container.removeChild(index.unrefElement(floating2));
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
      const _component_VcPartial = vue.resolveComponent("VcPartial");
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.unref(slots).reference ? (vue.openBlock(), vue.createBlock(_component_VcPartial, {
          key: 0,
          ref_key: "reference",
          ref: reference
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "reference")
          ]),
          _: 3
        }, 512)) : vue.createCommentVNode("", true),
        vue.createElementVNode("div", {
          ref_key: "floating",
          ref: floating2,
          style: vue.normalizeStyle(_floatingStyles.value),
          class: vue.normalizeClass(floatingClass.value),
          tabindex: props.tabindex
        }, [
          vue.createVNode(vue.Transition, {
            name: "vc-transition-" + props.transition,
            onAfterEnter: _cache[0] || (_cache[0] = ($event) => emits("opened")),
            onAfterLeave: _cache[1] || (_cache[1] = ($event) => emits("closed"))
          }, {
            default: vue.withCtx(() => [
              vue.unref(flag) ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
                key: 0,
                class: [vue.unref(floatingNS).namespace, vue.unref(floatingNS).is(props.effect)],
                "data-placement": placementRef.value
              }, _ctx.$attrs), [
                vue.renderSlot(_ctx.$slots, "default", {}, () => [
                  vue.createElementVNode("span", null, vue.toDisplayString(props.content), 1)
                ]),
                props.showArrow ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  ref_key: "_arrow",
                  ref: _arrow,
                  class: "vc-floating__arrow",
                  style: vue.normalizeStyle(arrowStyle.value)
                }, null, 4)) : vue.createCommentVNode("", true)
              ], 16, _hoisted_2)) : vue.createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 14, _hoisted_1)
      ], 64);
    };
  }
});
module.exports = _sfc_main;
