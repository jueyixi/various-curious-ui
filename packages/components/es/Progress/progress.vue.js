import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { progressProps } from "./progress.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import { useZIndex } from "../packages/hooks/useZIndex.js";
import "../packages/utils/IndexManager.js";
import { isArray } from "../packages/utils/is.js";
import { setValueByPx } from "../packages/utils/config.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcProgress",
    inheritAttrs: false
  },
  __name: "progress",
  props: {
    ...progressProps
  },
  setup(__props) {
    ref();
    const props = __props;
    const progressNS = useNS("progress");
    const { getIndex, setIndex } = useZIndex("progress");
    const ProgressBarClass = computed(() => {
      return [
        progressNS.setBlock("bar"),
        progressNS.is(props.status)
      ];
    });
    setIndex();
    const percent = Number((Number(props.value) / Number(props.maxValue) * 100).toFixed(2)) / 1;
    const progressRef = ref();
    const setBgStyle = () => {
      let style = {};
      if (props.background && isArray(props.background)) {
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
      style.height = setValueByPx(props.strokeWidth);
      if (props.color && isArray(props.color)) {
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(progressNS).namespace]),
        ref_key: "progressRef",
        ref: progressRef
      }, [
        createElementVNode("div", {
          class: normalizeClass([unref(progressNS).setBlock("bg")]),
          style: normalizeStyle(setBgStyle())
        }, [
          createElementVNode("div", {
            class: normalizeClass(ProgressBarClass.value),
            style: normalizeStyle(setStyle())
          }, null, 6)
        ], 6),
        props.showText ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(progressNS).setBlock("text")])
        }, [
          renderSlot(_ctx.$slots, "text", { percent }, () => [
            createTextVNode(toDisplayString(percent) + "% ")
          ])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
