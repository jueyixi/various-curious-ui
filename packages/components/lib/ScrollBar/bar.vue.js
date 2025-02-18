"use strict";
const vue = require("vue");
const bar = require("./bar.js");
const thumb_vue_vue_type_script_setup_true_lang = require("./thumb.vue.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "bar",
  props: bar.barProps,
  emits: bar.barEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const moveX = vue.ref(0);
    const moveY = vue.ref(0);
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
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createVNode(thumb_vue_vue_type_script_setup_true_lang, {
          move: moveX.value,
          ratio: _ctx.ratioX,
          size: _ctx.width,
          always: _ctx.always,
          "bar-width": _ctx.barWidth
        }, null, 8, ["move", "ratio", "size", "always", "bar-width"]),
        vue.createVNode(thumb_vue_vue_type_script_setup_true_lang, {
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
module.exports = _sfc_main;
