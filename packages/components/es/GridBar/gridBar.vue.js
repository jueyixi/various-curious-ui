import { defineComponent, ref, watchEffect, markRaw, openBlock, createBlock, resolveDynamicComponent, mergeProps, createSlots, renderList, withCtx, renderSlot, normalizeProps, guardReactiveProps } from "vue";
import { gridBarProps } from "./gridBar.js";
import _sfc_main$2 from "../VerGridBar/verGridBar.vue.js";
import _sfc_main$1 from "../HorGridBar/horGridBar.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcGridBar",
    inheritAttrs: false
  },
  __name: "gridBar",
  props: {
    ...gridBarProps
  },
  setup(__props) {
    const props = __props;
    const componentName = ref();
    const components = {
      default: _sfc_main$1,
      vertical: _sfc_main$2
    };
    watchEffect(() => {
      if (props.type) {
        componentName.value = markRaw(components[props.type]);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(componentName.value), mergeProps(_ctx.$attrs, { ref: "componentRef" }), createSlots({ _: 2 }, [
        renderList(Object.keys(_ctx.$slots), (item) => {
          return {
            name: item,
            fn: withCtx((data) => [
              renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data)))
            ])
          };
        })
      ]), 1040);
    };
  }
});
export {
  _sfc_main as default
};
