import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, Fragment, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, mergeProps } from "vue";
import { verGridBarProps } from "./verGridBar.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import { useZIndex } from "../packages/hooks/useZIndex.js";
import "../packages/utils/IndexManager.js";
import { isArray } from "../packages/utils/is.js";
import { setValueByPx } from "../packages/utils/config.js";
const _hoisted_1 = {
  width: "100%",
  height: "100%"
};
const _hoisted_2 = ["id"];
const _hoisted_3 = ["stop-color"];
const _hoisted_4 = ["stop-color"];
const _hoisted_5 = ["id"];
const _hoisted_6 = ["stop-color"];
const _hoisted_7 = ["stop-color"];
const _hoisted_8 = ["stroke", "stroke-dasharray"];
const _hoisted_9 = ["y2", "stroke", "stroke-dasharray"];
const _hoisted_10 = ["from", "to", "by", "begin", "dur", "repeatCount", "fill"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcVerGridBar",
    inheritAttrs: false
  },
  __name: "verGridBar",
  props: {
    ...verGridBarProps
  },
  setup(__props) {
    ref();
    const props = __props;
    const gridBarNS = useNS("grid");
    const { getIndex, setIndex } = useZIndex("grid");
    const VALUE = Number(props.value);
    const MAX_VALUE = Number(props.maxValue);
    const setGridStyle = computed(() => {
      let style = {};
      if (props.height) {
        style.height = setValueByPx(props.height);
        style.lineHeight = setValueByPx(props.height);
        style.overflow = "hidden";
      }
      return style;
    });
    const setBgStyle = computed(() => {
      let style = {};
      style.width = setValueByPx(props.strokeWidth);
      return style;
    });
    const percent = Number((VALUE / MAX_VALUE * 100).toFixed(2)) / 1;
    const bgColor = ref([]);
    const color = ref([]);
    if (props.background && isArray(props.background)) {
      bgColor.value = props.background;
    } else {
      const background = props.background;
      bgColor.value = [background || "#d9d9d9", background || "#d9d9d9"];
    }
    if (props.color && isArray(props.color)) {
      color.value = props.color;
    } else {
      const colorValue = props.color;
      color.value = [colorValue || "#329cff", colorValue || "#329cff"];
    }
    setIndex();
    const getGrid = () => {
      return "grid" + getIndex();
    };
    const getGridItem = () => {
      return "gridItem" + getIndex();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(gridBarNS).namespace, unref(gridBarNS).is("vertical")]),
        style: normalizeStyle(setGridStyle.value)
      }, [
        props.textPosition === "top" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          props.showText ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(gridBarNS).setBlock("text"), unref(gridBarNS).setBlockModifier("text", "top")])
          }, [
            renderSlot(_ctx.$slots, "text", { percent }, () => [
              createTextVNode(toDisplayString(percent) + "% ")
            ])
          ], 2)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass([unref(gridBarNS).setBlock("bar")]),
          style: normalizeStyle(setBgStyle.value)
        }, [
          (openBlock(), createElementBlock("svg", _hoisted_1, [
            createElementVNode("defs", null, [
              createElementVNode("linearGradient", {
                id: getGrid(),
                x1: "0%",
                x2: "0%",
                y1: "100%",
                y2: "0%",
                gradientUnits: "userSpaceOnUse"
              }, [
                createElementVNode("stop", {
                  offset: "0%",
                  "stop-color": bgColor.value[0],
                  "stop-opacity": "1"
                }, null, 8, _hoisted_3),
                createElementVNode("stop", {
                  offset: "100%",
                  "stop-color": bgColor.value[1],
                  "stop-opacity": "1"
                }, null, 8, _hoisted_4)
              ], 8, _hoisted_2),
              createElementVNode("linearGradient", {
                id: getGridItem(),
                x1: "0%",
                x2: "0%",
                y1: "100%",
                y2: "0%",
                gradientUnits: "userSpaceOnUse"
              }, [
                createElementVNode("stop", {
                  offset: "0%",
                  "stop-color": color.value[0],
                  "stop-opacity": "1"
                }, null, 8, _hoisted_6),
                createElementVNode("stop", {
                  offset: "100%",
                  "stop-color": color.value[1],
                  "stop-opacity": "1"
                }, null, 8, _hoisted_7)
              ], 8, _hoisted_5)
            ]),
            createElementVNode("line", {
              x1: "0%",
              x2: "0%",
              y2: "0%",
              y1: "100%",
              stroke: `url(#${getGrid()})`,
              "stroke-dasharray": props.partGap,
              style: { "fill": "none", "stroke-width": "100%" }
            }, null, 8, _hoisted_8),
            createElementVNode("line", {
              x1: "0%",
              x2: "0%",
              y2: 100 - percent + "%",
              y1: "100%",
              stroke: `url(#${getGridItem()})`,
              "stroke-dasharray": props.partGap,
              style: { "fill": "none", "stroke-width": "100%" }
            }, [
              _ctx.animate ? (openBlock(), createElementBlock("animate", mergeProps({
                key: 0,
                attributeName: "y2",
                attributeType: "XML",
                from: props.from || "100%",
                to: props.to || 100 - percent + "%",
                by: props.by,
                begin: props.begin,
                dur: props.dur,
                repeatCount: props.repeatCount,
                fill: props.fill
              }, { ...props.animation }), null, 16, _hoisted_10)) : createCommentVNode("", true)
            ], 8, _hoisted_9)
          ]))
        ], 6),
        props.textPosition === "bottom" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          props.showText ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(gridBarNS).setBlock("text"), unref(gridBarNS).setBlockModifier("text", "bottom")])
          }, [
            renderSlot(_ctx.$slots, "text", { percent }, () => [
              createTextVNode(toDisplayString(percent) + "% ")
            ])
          ], 2)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
