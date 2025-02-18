"use strict";
const vue = require("vue");
const index = require("../packages/icons/src/index.js");
const iconProps = require("./iconProps.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcIcon",
    inheritAttrs: false
  },
  __name: "icon",
  props: { ...iconProps.IconProps },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return props.name ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(index[props.name]), vue.mergeProps({
        key: 0,
        ref: "icon",
        style: props.style
      }, _ctx.$attrs), null, 16, ["style"])) : vue.createCommentVNode("", true);
    };
  }
});
module.exports = _sfc_main;
