"use strict";
const vue = require("vue");
const verGridBar = require("./verGridBar.js");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
const useZIndex = require("../packages/hooks/useZIndex.js");
require("../packages/utils/IndexManager.js");
const is = require("../packages/utils/is.js");
const config = require("../packages/utils/config.js");
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
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcVerGridBar",
    inheritAttrs: false
  },
  __name: "verGridBar",
  props: {
    ...verGridBar.verGridBarProps
  },
  setup(__props) {
    vue.ref();
    const props = __props;
    const gridBarNS = useNS.useNS("grid");
    const { getIndex, setIndex } = useZIndex.useZIndex("grid");
    const VALUE = Number(props.value);
    const MAX_VALUE = Number(props.maxValue);
    const setGridStyle = vue.computed(() => {
      let style = {};
      if (props.height) {
        style.height = config.setValueByPx(props.height);
        style.lineHeight = config.setValueByPx(props.height);
        style.overflow = "hidden";
      }
      return style;
    });
    const setBgStyle = vue.computed(() => {
      let style = {};
      style.width = config.setValueByPx(props.strokeWidth);
      return style;
    });
    const percent = Number((VALUE / MAX_VALUE * 100).toFixed(2)) / 1;
    const bgColor = vue.ref([]);
    const color = vue.ref([]);
    if (props.background && is.isArray(props.background)) {
      bgColor.value = props.background;
    } else {
      const background = props.background;
      bgColor.value = [background || "#d9d9d9", background || "#d9d9d9"];
    }
    if (props.color && is.isArray(props.color)) {
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
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(gridBarNS).namespace, vue.unref(gridBarNS).is("vertical")]),
        style: vue.normalizeStyle(setGridStyle.value)
      }, [
        props.textPosition === "top" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          props.showText ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass([vue.unref(gridBarNS).setBlock("text"), vue.unref(gridBarNS).setBlockModifier("text", "top")])
          }, [
            vue.renderSlot(_ctx.$slots, "text", { percent }, () => [
              vue.createTextVNode(vue.toDisplayString(percent) + "% ")
            ])
          ], 2)) : vue.createCommentVNode("", true)
        ], 64)) : vue.createCommentVNode("", true),
        vue.createElementVNode("div", {
          class: vue.normalizeClass([vue.unref(gridBarNS).setBlock("bar")]),
          style: vue.normalizeStyle(setBgStyle.value)
        }, [
          (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [
            vue.createElementVNode("defs", null, [
              vue.createElementVNode("linearGradient", {
                id: getGrid(),
                x1: "0%",
                x2: "0%",
                y1: "100%",
                y2: "0%",
                gradientUnits: "userSpaceOnUse"
              }, [
                vue.createElementVNode("stop", {
                  offset: "0%",
                  "stop-color": bgColor.value[0],
                  "stop-opacity": "1"
                }, null, 8, _hoisted_3),
                vue.createElementVNode("stop", {
                  offset: "100%",
                  "stop-color": bgColor.value[1],
                  "stop-opacity": "1"
                }, null, 8, _hoisted_4)
              ], 8, _hoisted_2),
              vue.createElementVNode("linearGradient", {
                id: getGridItem(),
                x1: "0%",
                x2: "0%",
                y1: "100%",
                y2: "0%",
                gradientUnits: "userSpaceOnUse"
              }, [
                vue.createElementVNode("stop", {
                  offset: "0%",
                  "stop-color": color.value[0],
                  "stop-opacity": "1"
                }, null, 8, _hoisted_6),
                vue.createElementVNode("stop", {
                  offset: "100%",
                  "stop-color": color.value[1],
                  "stop-opacity": "1"
                }, null, 8, _hoisted_7)
              ], 8, _hoisted_5)
            ]),
            vue.createElementVNode("line", {
              x1: "0%",
              x2: "0%",
              y2: "0%",
              y1: "100%",
              stroke: `url(#${getGrid()})`,
              "stroke-dasharray": props.partGap,
              style: { "fill": "none", "stroke-width": "100%" }
            }, null, 8, _hoisted_8),
            vue.createElementVNode("line", {
              x1: "0%",
              x2: "0%",
              y2: 100 - percent + "%",
              y1: "100%",
              stroke: `url(#${getGridItem()})`,
              "stroke-dasharray": props.partGap,
              style: { "fill": "none", "stroke-width": "100%" }
            }, [
              _ctx.animate ? (vue.openBlock(), vue.createElementBlock("animate", vue.mergeProps({
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
              }, { ...props.animation }), null, 16, _hoisted_10)) : vue.createCommentVNode("", true)
            ], 8, _hoisted_9)
          ]))
        ], 6),
        props.textPosition === "bottom" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          props.showText ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass([vue.unref(gridBarNS).setBlock("text"), vue.unref(gridBarNS).setBlockModifier("text", "bottom")])
          }, [
            vue.renderSlot(_ctx.$slots, "text", { percent }, () => [
              vue.createTextVNode(vue.toDisplayString(percent) + "% ")
            ])
          ], 2)) : vue.createCommentVNode("", true)
        ], 64)) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
module.exports = _sfc_main;
