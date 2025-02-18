"use strict";
const vue = require("vue");
const gridBar = require("./gridBar.js");
const verGridBar_vue_vue_type_script_setup_true_lang = require("../VerGridBar/verGridBar.vue.js");
const horGridBar_vue_vue_type_script_setup_true_lang = require("../HorGridBar/horGridBar.vue.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcGridBar",
    inheritAttrs: false
  },
  __name: "gridBar",
  props: {
    ...gridBar.gridBarProps
  },
  setup(__props) {
    const props = __props;
    const componentName = vue.ref();
    const components = {
      default: horGridBar_vue_vue_type_script_setup_true_lang,
      vertical: verGridBar_vue_vue_type_script_setup_true_lang
    };
    vue.watchEffect(() => {
      if (props.type) {
        componentName.value = vue.markRaw(components[props.type]);
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(componentName.value), vue.mergeProps(_ctx.$attrs, { ref: "componentRef" }), vue.createSlots({ _: 2 }, [
        vue.renderList(Object.keys(_ctx.$slots), (item) => {
          return {
            name: item,
            fn: vue.withCtx((data) => [
              vue.renderSlot(_ctx.$slots, item, vue.normalizeProps(vue.guardReactiveProps(data)))
            ])
          };
        })
      ]), 1040);
    };
  }
});
module.exports = _sfc_main;
