import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, mergeProps, createCommentVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
import { horGridBarProps } from "./horGridBar.js";
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
const _hoisted_9 = ["x2", "stroke", "stroke-dasharray"];
const _hoisted_10 = ["from", "to", "by", "begin", "dur", "repeatCount", "fill"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcHorGridBar",
    inheritAttrs: false
  },
  __name: "horGridBar",
  props: {
    ...horGridBarProps
  },
  setup(__props) {
    ref();
    const props = __props;
    const gridBarNS = useNS("grid");
    const { getIndex, setIndex } = useZIndex("grid");
    const VALUE = Number(props.value);
    const MAX_VALUE = Number(props.maxValue);
    const setBgStyle = computed(() => {
      let style = {};
      style.height = setValueByPx(props.strokeWidth);
      style.lineHeight = setValueByPx(props.strokeWidth);
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
        class: normalizeClass([unref(gridBarNS).namespace])
      }, [
        createElementVNode("div", {
          class: normalizeClass([unref(gridBarNS).setBlock("bar")]),
          style: normalizeStyle(setBgStyle.value)
        }, [
          (openBlock(), createElementBlock("svg", _hoisted_1, [
            createElementVNode("defs", null, [
              createElementVNode("linearGradient", {
                id: getGrid(),
                x1: "0%",
                y1: "0%",
                x2: "100%",
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
                x2: "100%",
                y1: "0%",
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
              x1: "0",
              x2: "100%",
              y1: "0%",
              y2: "0%",
              stroke: `url(#${getGrid()})`,
              "stroke-dasharray": props.partGap,
              style: { "fill": "none", "stroke-width": "100%" }
            }, null, 8, _hoisted_8),
            createElementVNode("line", {
              x1: "0",
              x2: percent + "%",
              y1: "0%",
              y2: "0%",
              stroke: `url(#${getGridItem()})`,
              "stroke-dasharray": props.partGap,
              style: { "fill": "none", "stroke-width": "100%" }
            }, [
              _ctx.animate ? (openBlock(), createElementBlock("animate", mergeProps({
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
              }, { ...props.animation }), null, 16, _hoisted_10)) : createCommentVNode("", true)
            ], 8, _hoisted_9)
          ]))
        ], 6),
        props.showText ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(gridBarNS).setBlock("text")])
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
