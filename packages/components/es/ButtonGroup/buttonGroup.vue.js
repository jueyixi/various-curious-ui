import { defineComponent, provide, reactive, toRef, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import { buttonGroupProps, buttonGroupContextKey } from "./buttonGroup.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcButtonGroup",
    inheritAttrs: true
  },
  __name: "buttonGroup",
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    const buttonNS = useNS("button");
    provide(
      buttonGroupContextKey,
      reactive({
        size: toRef(props, "size"),
        type: toRef(props, "type"),
        danger: toRef(props, "danger")
      })
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(buttonNS).setBlock("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
