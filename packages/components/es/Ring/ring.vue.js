import { defineComponent, ref, computed, onMounted, openBlock, createElementBlock, normalizeClass, unref } from "vue";
import { ringProps } from "./ring.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import { useZIndex } from "../packages/hooks/useZIndex.js";
import { getSkin } from "../packages/utils/common.js";
import "../packages/utils/IndexManager.js";
import { isArray } from "../packages/utils/is.js";
import { getColor } from "../packages/utils/transformColor.js";
const _hoisted_1 = ["id", "width", "height"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcRing",
    inheritAttrs: false
  },
  __name: "ring",
  props: {
    ...ringProps
  },
  setup(__props) {
    ref();
    const props = __props;
    const ringNS = useNS("ring");
    const { getIndex, setIndex } = useZIndex("ring");
    const MAX_VALUE = Number(props.maxValue);
    const VALUE = Number(props.value);
    const RADIUS = Number(props.radius);
    const SROKEWIDTH = Number(props.strokeWidth);
    const INNER_RADIUS = Number(props.innerRadius);
    const PERCENT = Number(props.percent || 0);
    let step = Number(props.step);
    const drawColor = (ctx, color1, color2) => {
      let gradient = ctx.createLinearGradient(
        RADIUS,
        0,
        RADIUS,
        RADIUS * 2
      );
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      ctx.strokeStyle = gradient;
    };
    const drawCircle = (ctx, x, y, radius, startAngle, endAngle, Boolean, size, closePath, strokeColor, fillColor) => {
      ctx.beginPath();
      ctx.lineCap = VALUE === MAX_VALUE ? "" : props.lineCap;
      ctx.lineWidth = size;
      ctx.strokeStyle = strokeColor;
      ctx.arc(x, y, radius, startAngle, endAngle, Boolean);
      closePath && ctx.closePath();
      if (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
      } else {
        if (isArray(strokeColor)) {
          drawColor(ctx, strokeColor[0], strokeColor[1]);
        }
        ctx.stroke();
      }
    };
    let num = Number(props.startStep);
    let colorArr = [];
    const setColor = computed(() => {
      return (value) => {
        if (isArray(props.color)) {
          return value;
        } else {
          return props.color;
        }
      };
    });
    const init = (ctx) => {
      draw(ctx);
      drawText(ctx);
      drawSubText(ctx);
    };
    const animate = (ctx) => {
      window.requestAnimationFrame(() => {
        if (num <= VALUE) {
          animate(ctx);
        }
      });
      draw(ctx, num);
      drawText(ctx);
      drawSubText(ctx);
      if (num < VALUE && num + 1 > VALUE) {
        num = VALUE;
      } else {
        num += step;
      }
    };
    const draw = (ctx, num2) => {
      ctx.clearRect(0, 0, RADIUS * 2, RADIUS * 2);
      drawCircle(
        ctx,
        RADIUS,
        RADIUS,
        RADIUS - SROKEWIDTH / 2,
        0,
        2 * Math.PI,
        false,
        SROKEWIDTH,
        true,
        props.background
      );
      if (VALUE) {
        const currentValue = num2 || VALUE;
        const value = num2 ? -Math.PI / 2 + 2 * num2 / 100 * Math.PI : Math.PI / 2;
        if (currentValue <= MAX_VALUE / 2) {
          drawCircle(
            ctx,
            RADIUS,
            RADIUS,
            RADIUS - SROKEWIDTH / 2,
            -Math.PI / 2,
            -Math.PI / 2 + 2 * currentValue / 100 * Math.PI,
            false,
            SROKEWIDTH,
            false,
            setColor.value([props.color[0], colorArr[num2 ? MAX_VALUE / 2 : VALUE]])
          );
        } else {
          drawCircle(
            ctx,
            RADIUS,
            RADIUS,
            RADIUS - SROKEWIDTH / 2,
            -Math.PI / 2,
            value,
            false,
            SROKEWIDTH,
            false,
            setColor.value([props.color[0], colorArr[MAX_VALUE / 2]])
          );
          drawCircle(
            ctx,
            RADIUS,
            RADIUS,
            RADIUS - SROKEWIDTH / 2,
            -Math.PI / 2 + 1 * Math.PI,
            -Math.PI / 2 + 2 * currentValue / 100 * Math.PI,
            false,
            SROKEWIDTH,
            false,
            setColor.value([props.color[1], colorArr[MAX_VALUE / 2]])
          );
        }
      }
      if (props.innerRadius) {
        drawCircle(
          ctx,
          RADIUS,
          RADIUS,
          RADIUS - SROKEWIDTH - INNER_RADIUS / 2,
          0,
          Math.PI * 2,
          false,
          INNER_RADIUS,
          true,
          props.innerBackground
        );
      }
    };
    const canvasId = ref("");
    setIndex();
    canvasId.value = props.id || "ring" + getIndex();
    onMounted(() => {
      let myCanvas = document.getElementById(canvasId.value);
      let ctx = myCanvas.getContext("2d");
      if (isArray(props.color)) {
        colorArr = getColor(props.color[0], props.color[1], MAX_VALUE);
      }
      props.animate ? animate(ctx) : init(ctx);
    });
    let textWidth1 = 0;
    let textWidth2 = 0;
    let textWidth3 = 0;
    const fontStyle = {
      fontSize: 24,
      fontWeight: 500,
      textBaseline: "Alphabetic",
      color: "",
      textAlign: "center",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      unit: "",
      ...props.titleStyle
    };
    const drawText = (ctx) => {
      var _a, _b, _c;
      ctx.save();
      ctx.font = `${fontStyle.fontWeight} ${fontStyle.fontSize}px ${fontStyle.fontFamily}`;
      ctx.fillStyle = fontStyle.color || getSkin("--vc-ring-text-color");
      ctx.textAlign = fontStyle.textAlign;
      ctx.textBaseline = fontStyle.textBaseline;
      let value = props.animate ? num.toFixed(PERCENT) : VALUE.toFixed(PERCENT);
      if (props.percent && props.format && value == props.value) {
        value = value / 1;
      }
      if (props.title) {
        textWidth1 = ((_a = ctx.measureText(props.title)) == null ? void 0 : _a.width) || 0;
      } else {
        if (props.animate) {
          if (num <= VALUE) {
            textWidth2 = ((_b = ctx.measureText(value + fontStyle.unit)) == null ? void 0 : _b.width) || 0;
          }
        } else {
          textWidth2 = ((_c = ctx.measureText(value + fontStyle.unit)) == null ? void 0 : _c.width) || 0;
        }
      }
      value += fontStyle.unit;
      let defaultLeft = props.animate ? RADIUS - textWidth3 / 2 : RADIUS - textWidth3 / 2 - 5;
      if (props.title) {
        defaultLeft += 5;
      }
      ctx.fillText(
        props.title || value,
        fontStyle.left || fontStyle.right && RADIUS - fontStyle.right || defaultLeft,
        fontStyle.top || fontStyle.bottom && RADIUS * 2 - fontStyle.bottom || RADIUS + subFontStyle.fontSize / 2 + 3
      );
      ctx.restore();
    };
    const subFontStyle = {
      fontSize: 12,
      fontWeight: "normal",
      textBaseline: "Alphabetic",
      color: "",
      textAlign: "center",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      ...props.subTitleStyle
    };
    const drawSubText = (ctx) => {
      var _a;
      if (props.subTitle) {
        ctx.font = `${subFontStyle.fontWeight} ${subFontStyle.fontSize}px ${subFontStyle.fontFamily}`;
        ctx.fillStyle = subFontStyle.color || getSkin("--vc-ring-text-color");
        ctx.textAlign = subFontStyle.textAlign;
        ctx.textBaseline = subFontStyle.textBaseline;
        textWidth3 = ((_a = ctx.measureText(props.subTitle)) == null ? void 0 : _a.width) || 0;
        let width = textWidth1 / 2 || textWidth2 / 2;
        ctx.fillText(
          props.subTitle,
          subFontStyle.left || subFontStyle.right && RADIUS - subFontStyle.right || RADIUS + width,
          subFontStyle.top || subFontStyle.bottom && RADIUS * 2 - subFontStyle.bottom || RADIUS + subFontStyle.fontSize / 2 + 2
        );
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("canvas", {
        class: normalizeClass([unref(ringNS).namespace]),
        id: canvasId.value,
        width: unref(RADIUS) * 2,
        height: unref(RADIUS) * 2
      }, " Your browser does not support the canvas element. ", 10, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
