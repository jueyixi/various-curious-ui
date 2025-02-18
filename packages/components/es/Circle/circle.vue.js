import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, Fragment, renderList, createCommentVNode, mergeProps, renderSlot, createTextVNode, toDisplayString } from "vue";
import { circleProps } from "./circle.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import { useZIndex } from "../packages/hooks/useZIndex.js";
import "../packages/utils/IndexManager.js";
import { isArray } from "../packages/utils/is.js";
const _hoisted_1 = ["viewBox"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["id", "x1", "y1", "x2", "y2"];
const _hoisted_4 = ["offset", "stop-color"];
const _hoisted_5 = { key: 1 };
const _hoisted_6 = ["id", "x1", "y1", "x2", "y2"];
const _hoisted_7 = ["offset", "stop-color"];
const _hoisted_8 = { key: 2 };
const _hoisted_9 = ["id"];
const _hoisted_10 = ["stop-color"];
const _hoisted_11 = ["stop-color"];
const _hoisted_12 = ["id"];
const _hoisted_13 = ["stop-color"];
const _hoisted_14 = ["stop-color"];
const _hoisted_15 = ["cx", "cy", "r", "stroke", "stroke-width"];
const _hoisted_16 = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke", "stroke-width", "stroke-linecap", "transform"];
const _hoisted_17 = ["from", "to", "by", "begin", "dur", "repeatCount", "fill"];
const _hoisted_18 = ["cx", "cy", "r", "stroke", "stroke-width", "stroke-dasharray", "transform"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcCircle",
    inheritAttrs: false
  },
  __name: "circle",
  props: {
    ...circleProps
  },
  setup(__props) {
    ref();
    const props = __props;
    const circleNS = useNS("circle");
    const { getIndex, setIndex } = useZIndex("circle");
    const VALUE = Number(props.value);
    const MAX_VALUE = Number(props.maxValue);
    const radius = computed(() => {
      return (props.width - props.strokeWidth) / 2;
    });
    const percent = Number((VALUE / MAX_VALUE * 100).toFixed(2)) / 1;
    const setValue = computed(() => {
      return (value) => {
        if (value === "form") {
          return props.from ? Math.PI * radius.value * props.from : Math.PI * radius.value * 2;
        }
        if (value === "to") {
          return props.to ? Math.PI * radius.value * props.to : strokeDashoffset();
        }
        if (value === "by") {
          return props.by ? Math.PI * radius.value * props.by : void 0;
        }
      };
    });
    setIndex();
    const getCircle = () => {
      return "circle" + getIndex();
    };
    const getCircleItem = () => {
      return "circleItem" + getIndex();
    };
    const bgColorArray = ref(false);
    const colorArray = ref(false);
    const bgColor = ref("");
    const color = ref("");
    if (isArray(props.background)) {
      bgColor.value = props.background;
      bgColorArray.value = true;
    } else {
      bgColor.value = props.background || "#d9d9d9";
    }
    if (isArray(props.color)) {
      color.value = props.color;
      colorArray.value = true;
    } else {
      color.value = props.color || "#1890ff";
    }
    const strokeDasharray = () => {
      let value = 0;
      if (props.lineCap === "round") {
        value = 2 * Math.PI * radius.value + props.strokeWidth;
      } else {
        value = 2 * Math.PI * radius.value;
      }
      return value;
    };
    const separateDasharray = () => {
      let partLength = 2 * Math.PI * radius.value / props.part;
      return `${props.partGap} ${partLength - props.partGap}`;
    };
    const strokeDashoffset = () => {
      let val = 0;
      let value = VALUE / MAX_VALUE;
      if (value > 1) {
        value = 1;
      } else if (value < 0) {
        value = 0;
      }
      if (props.lineCap === "round") {
        val = 2 * Math.PI * radius.value * (1 - value) + props.strokeWidth;
      } else {
        val = 2 * Math.PI * radius.value * (1 - value);
      }
      return val;
    };
    const bgStroke = computed(() => {
      var _a, _b, _c;
      let value = "";
      if ((_a = props == null ? void 0 : props.gradients) == null ? void 0 : _a.length) {
        value = `url(#${(_c = (_b = props == null ? void 0 : props.gradients) == null ? void 0 : _b[0]) == null ? void 0 : _c.id})`;
      } else if (bgColorArray.value) {
        value = `url(#${getCircle()})`;
      } else {
        value = bgColor.value;
      }
      return value;
    });
    const barStroke = computed(() => {
      var _a, _b, _c, _d, _e;
      let value = "";
      if ((_a = props == null ? void 0 : props.gradient) == null ? void 0 : _a.id) {
        value = `url(#${(_b = props == null ? void 0 : props.gradient) == null ? void 0 : _b.id})`;
      } else if ((_c = props == null ? void 0 : props.gradients) == null ? void 0 : _c.length) {
        value = `url(#${(_e = (_d = props == null ? void 0 : props.gradients) == null ? void 0 : _d[1]) == null ? void 0 : _e.id})`;
      } else if (colorArray.value) {
        value = `url(#${getCircleItem()})`;
      } else {
        value = color.value;
      }
      return value;
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(circleNS).namespace])
      }, [
        (openBlock(), createElementBlock("svg", {
          style: normalizeStyle({ transform: props.clockWise ? "rotateY(0deg)" : "rotateY(180deg)" }),
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: `0 0 ${Number(props.width)} ${Number(props.width)}`
        }, [
          ((_a = props == null ? void 0 : props.gradient) == null ? void 0 : _a.id) ? (openBlock(), createElementBlock("defs", _hoisted_2, [
            createElementVNode("linearGradient", {
              id: (_b = props == null ? void 0 : props.gradient) == null ? void 0 : _b.id,
              x1: (_c = props == null ? void 0 : props.gradient) == null ? void 0 : _c.x1,
              y1: (_d = props == null ? void 0 : props.gradient) == null ? void 0 : _d.y1,
              x2: (_e = props == null ? void 0 : props.gradient) == null ? void 0 : _e.x2,
              y2: (_f = props == null ? void 0 : props.gradient) == null ? void 0 : _f.y2
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((_g = props == null ? void 0 : props.gradient) == null ? void 0 : _g.colorStops, (v, i) => {
                return openBlock(), createElementBlock("stop", {
                  key: i,
                  offset: v.offset,
                  "stop-color": v.color
                }, null, 8, _hoisted_4);
              }), 128))
            ], 8, _hoisted_3)
          ])) : ((_h = props == null ? void 0 : props.gradients) == null ? void 0 : _h.length) ? (openBlock(), createElementBlock("defs", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.gradients, (item) => {
              return openBlock(), createElementBlock("linearGradient", {
                key: item.id,
                id: item.id,
                x1: item.x1,
                y1: item.y1,
                x2: item.x2,
                y2: item.y2
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(item.colorStops, (v, i) => {
                  return openBlock(), createElementBlock("stop", {
                    key: i,
                    offset: v.offset,
                    "stop-color": v.color
                  }, null, 8, _hoisted_7);
                }), 128))
              ], 8, _hoisted_6);
            }), 128))
          ])) : bgColorArray.value || colorArray.value ? (openBlock(), createElementBlock("defs", _hoisted_8, [
            bgColorArray.value ? (openBlock(), createElementBlock("linearGradient", {
              key: 0,
              id: getCircle(),
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "100%"
            }, [
              createElementVNode("stop", {
                offset: "0%",
                "stop-color": (_i = bgColor.value) == null ? void 0 : _i[0]
              }, null, 8, _hoisted_10),
              createElementVNode("stop", {
                offset: "100%",
                "stop-color": (_j = bgColor.value) == null ? void 0 : _j[1]
              }, null, 8, _hoisted_11)
            ], 8, _hoisted_9)) : createCommentVNode("", true),
            colorArray.value ? (openBlock(), createElementBlock("linearGradient", {
              key: 1,
              id: getCircleItem(),
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "100%"
            }, [
              createElementVNode("stop", {
                offset: "0%",
                "stop-color": (_k = color.value) == null ? void 0 : _k[0]
              }, null, 8, _hoisted_13),
              createElementVNode("stop", {
                offset: "100%",
                "stop-color": (_l = color.value) == null ? void 0 : _l[1]
              }, null, 8, _hoisted_14)
            ], 8, _hoisted_12)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createElementVNode("circle", {
            cx: props.width / 2,
            cy: props.width / 2,
            r: radius.value,
            stroke: bgStroke.value,
            "stroke-width": props.strokeWidth,
            fill: "none"
          }, null, 8, _hoisted_15),
          createElementVNode("circle", {
            cx: props.width / 2,
            cy: props.width / 2,
            r: radius.value,
            "stroke-dasharray": strokeDasharray(),
            "stroke-dashoffset": strokeDashoffset(),
            stroke: barStroke.value,
            "stroke-width": props.strokeWidth,
            "stroke-linecap": props.lineCap,
            fill: "none",
            transform: `rotate(-90, ${props.width / 2}, ${props.width / 2})`
          }, [
            _ctx.animate ? (openBlock(), createElementBlock("animate", mergeProps({
              key: 0,
              attributeName: "stroke-dashoffset",
              attributeType: "XML",
              from: setValue.value("form"),
              to: setValue.value("to"),
              by: setValue.value("to"),
              begin: props.begin,
              dur: props.dur,
              repeatCount: props.repeatCount,
              fill: props.fill
            }, { ...props.animation }), null, 16, _hoisted_17)) : createCommentVNode("", true)
          ], 8, _hoisted_16),
          createElementVNode("circle", {
            cx: props.width / 2,
            cy: props.width / 2,
            r: radius.value,
            stroke: _ctx.separateColor,
            fill: "transparent",
            "stroke-width": props.strokeWidth + 2,
            "stroke-dasharray": separateDasharray(),
            transform: `rotate(-90, ${props.width / 2}, ${props.width / 2})`
          }, null, 8, _hoisted_18)
        ], 12, _hoisted_1)),
        props.showText ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(circleNS).setBlock("text")])
        }, [
          renderSlot(_ctx.$slots, "text", { percent }, () => [
            createTextVNode(toDisplayString(percent) + "%")
          ])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
