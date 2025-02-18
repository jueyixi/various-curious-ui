"use strict";
const vue = require("vue");
const horGridBar = require("./horGridBar.js");
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
const _hoisted_9 = ["x2", "stroke", "stroke-dasharray"];
const _hoisted_10 = ["from", "to", "by", "begin", "dur", "repeatCount", "fill"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcHorGridBar",
    inheritAttrs: false
  },
  __name: "horGridBar",
  props: {
    ...horGridBar.horGridBarProps
  },
  setup(__props) {
    vue.ref();
    const props = __props;
    const gridBarNS = useNS.useNS("grid");
    const { getIndex, setIndex } = useZIndex.useZIndex("grid");
    const VALUE = Number(props.value);
    const MAX_VALUE = Number(props.maxValue);
    const setBgStyle = vue.computed(() => {
      let style = {};
      style.height = config.setValueByPx(props.strokeWidth);
      style.lineHeight = config.setValueByPx(props.strokeWidth);
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
        class: vue.normalizeClass([vue.unref(gridBarNS).namespace])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass([vue.unref(gridBarNS).setBlock("bar")]),
          style: vue.normalizeStyle(setBgStyle.value)
        }, [
          (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [
            vue.createElementVNode("defs", null, [
              vue.createElementVNode("linearGradient", {
                id: getGrid(),
                x1: "0%",
                y1: "0%",
                x2: "100%",
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
                x2: "100%",
                y1: "0%",
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
              x1: "0",
              x2: "100%",
              y1: "0%",
              y2: "0%",
              stroke: `url(#${getGrid()})`,
              "stroke-dasharray": props.partGap,
              style: { "fill": "none", "stroke-width": "100%" }
            }, null, 8, _hoisted_8),
            vue.createElementVNode("line", {
              x1: "0",
              x2: percent + "%",
              y1: "0%",
              y2: "0%",
              stroke: `url(#${getGridItem()})`,
              "stroke-dasharray": props.partGap,
              style: { "fill": "none", "stroke-width": "100%" }
            }, [
              _ctx.animate ? (vue.openBlock(), vue.createElementBlock("animate", vue.mergeProps({
                key: 0,
                attributeName: "x2",
                attributeType: "XML",
                from: props.from || "0%",
                to: props.to || percent + "%",
                by: props.by,
                begin: props.begin,
                dur: props.dur,
                repeatCount: props.repeatCount,
                fill: props.fill
              }, { ...props.animation }), null, 16, _hoisted_10)) : vue.createCommentVNode("", true)
            ], 8, _hoisted_9)
          ]))
        ], 6),
        props.showText ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass([vue.unref(gridBarNS).setBlock("text")])
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
