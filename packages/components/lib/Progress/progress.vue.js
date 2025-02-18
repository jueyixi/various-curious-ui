"use strict";
const vue = require("vue");
const progress = require("./progress.js");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
const useZIndex = require("../packages/hooks/useZIndex.js");
require("../packages/utils/IndexManager.js");
const is = require("../packages/utils/is.js");
const config = require("../packages/utils/config.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcProgress",
    inheritAttrs: false
  },
  __name: "progress",
  props: {
    ...progress.progressProps
  },
  setup(__props) {
    vue.ref();
    const props = __props;
    const progressNS = useNS.useNS("progress");
    const { getIndex, setIndex } = useZIndex.useZIndex("progress");
    const ProgressBarClass = vue.computed(() => {
      return [
        progressNS.setBlock("bar"),
        progressNS.is(props.status)
      ];
    });
    setIndex();
    const percent = Number((Number(props.value) / Number(props.maxValue) * 100).toFixed(2)) / 1;
    const progressRef = vue.ref();
    const setBgStyle = () => {
      let style = {};
      if (props.background && is.isArray(props.background)) {
        style.background = `linear-gradient(90deg,${props.background[0]} 0%,${props.background[1]} 100%)`;
      } else {
        style.background = props.background;
      }
      if (props.round) {
        style.borderRadius = "10px";
      }
      return style;
    };
    const setStyle = () => {
      let style = {};
      style.width = percent + "%";
      style.height = config.setValueByPx(props.strokeWidth);
      if (props.color && is.isArray(props.color)) {
        style.background = `linear-gradient(90deg,${props.color[0]} 0%,${props.color[1]} 100%)`;
      } else {
        style.background = props.color;
      }
      if (props.round) {
        style.borderRadius = "10px";
      }
      if (props.animate) {
        const keyframes = `@keyframes basicAnimate${getIndex()}{
          from {
            width:0;
          }
          to {
            width:${style.width}
          }
      }`;
        style.animation = `basicAnimate${getIndex()} ${props.dur} ${props.transitionName} ${props.delay} ${props.repeatCount} ${props.fill}`;
        const styleDom = document.createElement("style");
        styleDom.type = "text/css";
        styleDom.innerHTML = keyframes;
        document.head.appendChild(styleDom);
      }
      return style;
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(progressNS).namespace]),
        ref_key: "progressRef",
        ref: progressRef
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass([vue.unref(progressNS).setBlock("bg")]),
          style: vue.normalizeStyle(setBgStyle())
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(ProgressBarClass.value),
            style: vue.normalizeStyle(setStyle())
          }, null, 6)
        ], 6),
        props.showText ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass([vue.unref(progressNS).setBlock("text")])
        }, [
          vue.renderSlot(_ctx.$slots, "text", { percent }, () => [
            vue.createTextVNode(vue.toDisplayString(percent) + "% ")
          ])
        ], 2)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
