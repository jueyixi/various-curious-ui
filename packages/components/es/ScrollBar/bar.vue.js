import { defineComponent, ref, openBlock, createElementBlock, Fragment, createVNode } from "vue";
import { barProps, barEmits } from "./bar.js";
import _sfc_main$1 from "./thumb.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: barProps,
  emits: barEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const moveX = ref(0);
    const moveY = ref(0);
    const GAP = props.gap * 2 || 4;
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };
    __expose({
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$1, {
          move: moveX.value,
          ratio: _ctx.ratioX,
          size: _ctx.width,
          always: _ctx.always,
          "bar-width": _ctx.barWidth
        }, null, 8, ["move", "ratio", "size", "always", "bar-width"]),
        createVNode(_sfc_main$1, {
          move: moveY.value,
          ratio: _ctx.ratioY,
          size: _ctx.height,
          vertical: "",
          always: _ctx.always,
          "bar-width": _ctx.barWidth
        }, null, 8, ["move", "ratio", "size", "always", "bar-width"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
