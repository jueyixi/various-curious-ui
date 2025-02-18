"use strict";
const vue = require("vue");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
const buttonGroup = require("./buttonGroup.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcButtonGroup",
    inheritAttrs: true
  },
  __name: "buttonGroup",
  props: buttonGroup.buttonGroupProps,
  setup(__props) {
    const props = __props;
    const buttonNS = useNS.useNS("button");
    vue.provide(
      buttonGroup.buttonGroupContextKey,
      vue.reactive({
        size: vue.toRef(props, "size"),
        type: vue.toRef(props, "type"),
        danger: vue.toRef(props, "danger")
      })
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(buttonNS).setBlock("group"))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
module.exports = _sfc_main;
