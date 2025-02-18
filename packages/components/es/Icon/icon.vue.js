import { defineComponent, openBlock, createBlock, resolveDynamicComponent, mergeProps, createCommentVNode } from "vue";
import * as index from "../packages/icons/src/index.js";
import { IconProps } from "./iconProps.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcIcon",
    inheritAttrs: false
  },
  __name: "icon",
  props: { ...IconProps },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return props.name ? (openBlock(), createBlock(resolveDynamicComponent(index[props.name]), mergeProps({
        key: 0,
        ref: "icon",
        style: props.style
      }, _ctx.$attrs), null, 16, ["style"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
