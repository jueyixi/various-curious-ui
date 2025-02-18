"use strict";
const vue = require("vue");
const dashboard = require("./dashboard.js");
require("../packages/hooks/useDayjs.js");
const useZIndex = require("../packages/hooks/useZIndex.js");
require("../packages/utils/IndexManager.js");
const is = require("../packages/utils/is.js");
const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcDashboard",
    inheritAttrs: false
  },
  __name: "dashboard",
  props: {
    ...dashboard.dashboardProps
  },
  setup(__props) {
    vue.ref();
    const props = __props;
    const { getIndex, setIndex } = useZIndex.useZIndex("dashboard");
    const MAX_VALUE = Number(props.maxValue);
    const VALUE = Number(props.value);
    const SROKEWIDTH = Number(props.strokeWidth);
    const SplitNumber = Number(props.splitNumber);
    const SplitWidth = Number(props.splitWidth);
    const INNER_RADIUS = Number(props.innerRadius);
    const OUTER_RADIUS = Number(props.outerRadius);
    const OUTER_WIDTH = Number(props.outerWidth);
    const STEP = Number(props.step);
    const RADIUS = Number(props.radius);
    const WIDTH = RADIUS * 2;
    const HEIGHT = RADIUS;
    const ANGLES = props.endAngle - props.startAngle;
    const drawCircle = (ctx, x, y, radius, startAngle2, endAngle2, Boolean, size, closePath, strokeColor, fillColor) => {
      ctx.beginPath();
      closePath && ctx.moveTo(x, y);
      ctx.lineWidth = size;
      ctx.strokeStyle = strokeColor;
      ctx.arc(x, y, radius, startAngle2, endAngle2, Boolean);
      if (fillColor) {
        if (is.isArray(fillColor)) {
          drawColor(
            ctx,
            WIDTH - INNER_RADIUS,
            HEIGHT - INNER_RADIUS,
            WIDTH + INNER_RADIUS,
            HEIGHT,
            fillColor[0],
            fillColor[1]
          );
        } else {
          ctx.fillStyle = fillColor;
        }
        ctx.fill();
      } else {
        ctx.stroke();
      }
      closePath && ctx.closePath();
    };
    const drawText = (ctx, content, x, y) => {
      let splitStyle = {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "DINPro",
        textBaseline: "Alphabetic",
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        ...props.splitStyle
      };
      ctx.font = `${splitStyle.fontWeight} ${splitStyle.fontSize}px ${splitStyle.fontFamily}`;
      ctx.fillStyle = splitStyle.color || props.color;
      ctx.textAlign = splitStyle.textAlign;
      ctx.textBaseline = splitStyle.textBaseline;
      ctx.fillText(`${content}`, x, y);
    };
    const drawColor = (ctx, x1, y1, x2, y2, color1, color2) => {
      let gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      ctx.fillStyle = gradient;
    };
    let startAngle = (props.startAngle + 180) * Math.PI / 180;
    let endAngle = (props.endAngle + 180) * Math.PI / 180;
    let angleStep = (endAngle - startAngle) / MAX_VALUE;
    let step = 0;
    const animate = (ctx) => {
      window.requestAnimationFrame(function() {
        if (step < VALUE) {
          animate(ctx);
        }
      });
      ctx.clearRect(0, 0, WIDTH, props.semicircle ? HEIGHT : HEIGHT * 2);
      if (step + 1 > VALUE && step < VALUE) {
        step = VALUE;
      } else if (VALUE !== 0) {
        step += STEP;
      }
      let stepAngle = startAngle + angleStep * step;
      drawGauge(ctx, stepAngle, step);
    };
    const drawGauge = (ctx, stepAngle, step2) => {
      if (stepAngle < endAngle) {
        drawCircle(
          ctx,
          RADIUS,
          HEIGHT,
          OUTER_RADIUS,
          stepAngle,
          endAngle,
          false,
          OUTER_WIDTH,
          false,
          props.outerBackground
        );
      }
      drawCircle(
        ctx,
        RADIUS,
        HEIGHT,
        INNER_RADIUS,
        startAngle,
        endAngle,
        false,
        0,
        true,
        "transparent",
        props.interBackground
      );
      drawScale(ctx);
      if (step2 > 0) {
        if (is.isArray(props.background)) {
          const colors = props.background;
          colors.forEach((v, i) => {
            var _a;
            let start = i === 0 ? startAngle : Number((_a = colors[i - 1]) == null ? void 0 : _a.offset) * MAX_VALUE * angleStep + startAngle;
            if (start < stepAngle) {
              drawCircle(
                ctx,
                RADIUS,
                HEIGHT,
                OUTER_RADIUS,
                start,
                stepAngle,
                false,
                OUTER_WIDTH,
                false,
                v.color
              );
            }
          });
        } else {
          drawCircle(
            ctx,
            RADIUS,
            HEIGHT,
            OUTER_RADIUS,
            startAngle,
            stepAngle,
            false,
            OUTER_WIDTH,
            false,
            props.background
          );
        }
        if (is.isArray(props.color)) {
          const colors = props.color;
          colors.forEach((v, i) => {
            var _a;
            v.startStep = i === 0 ? 0 : colors[i - 1].endStep;
            v.endStep = i === colors.length - 1 ? MAX_VALUE : Number(v.offset) * MAX_VALUE;
            let start = i === 0 ? startAngle : Number((_a = colors[i - 1]) == null ? void 0 : _a.offset) * MAX_VALUE * angleStep + startAngle;
            if (start < stepAngle) {
              drawCircle(
                ctx,
                RADIUS,
                HEIGHT,
                OUTER_RADIUS + OUTER_WIDTH / 2,
                start,
                stepAngle,
                false,
                SROKEWIDTH,
                false,
                v.color
              );
            }
          });
        } else {
          drawCircle(
            ctx,
            RADIUS,
            HEIGHT,
            OUTER_RADIUS + OUTER_WIDTH / 2,
            startAngle,
            stepAngle,
            false,
            SROKEWIDTH,
            false,
            props.color
          );
        }
        drawTitle(ctx, step2);
        drawSubTitle(ctx);
      }
    };
    const SplitSpace = Number(props.splitSpace);
    const drawScale = (ctx) => {
      let r1 = OUTER_RADIUS - OUTER_WIDTH / 2 - SplitSpace;
      let r2 = INNER_RADIUS + SplitSpace;
      let r3 = INNER_RADIUS - OUTER_WIDTH / 2 - (r1 - r2) - SplitSpace;
      let angles = ANGLES / (SplitNumber - 1);
      for (let i = 0; i < SplitNumber; i++) {
        let angle = (angles * i + props.startAngle) * Math.PI / 180;
        let startX = RADIUS - Math.cos(angle) * r1;
        let startY = HEIGHT - Math.sin(angle) * r1;
        let endX = RADIUS - Math.cos(angle) * r2;
        let endY = HEIGHT - Math.sin(angle) * r2;
        let textX = RADIUS - Math.cos(angle) * r3;
        let textY = HEIGHT - Math.sin(angle) * r3;
        ctx.beginPath();
        ctx.strokeStyle = props.splitColor;
        ctx.lineWidth = SplitWidth;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        let showText = true;
        if (ANGLES % 360 === 0 && i === 0) {
          showText = false;
        }
        showText && drawText(ctx, MAX_VALUE / (SplitNumber - 1) * i, textX, textY);
      }
    };
    const drawTitle = (ctx, step2) => {
      var _a;
      let fontStyle = {
        fontSize: 32,
        fontWeight: 500,
        fontFamily: "DINPro-Medium",
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
      ctx.font = `${fontStyle.fontWeight} ${fontStyle.fontSize}px ${fontStyle.fontFamily}`;
      let textColor = fontStyle.color;
      if (is.isArray(props.color)) {
        const colors = props.color;
        textColor = (_a = colors.find((v) => step2 && v.startStep < step2 && step2 <= v.endStep)) == null ? void 0 : _a.color;
      } else {
        textColor = fontStyle.color || props.color;
      }
      ctx.textAlign = fontStyle.textAlign;
      ctx.textBaseline = fontStyle.textBaseline;
      ctx.fillStyle = textColor;
      fontStyle.bottom = props.subTitle ? 25 : 5;
      let title = props.title;
      let postionBottom = props.middleTitle ? HEIGHT : fontStyle.top || HEIGHT - fontStyle.bottom;
      if (!props.title && step2 <= VALUE) {
        title = step2 + fontStyle.unit;
      }
      title && middleText(
        ctx,
        title,
        fontStyle.left || RADIUS - fontStyle.right,
        postionBottom
      );
    };
    const drawSubTitle = (ctx) => {
      if (props.subTitle) {
        let subFontStyle = {
          fontSize: 12,
          fontWeight: "normal",
          fontFamily: "PingFang",
          textBaseline: "Alphabetic",
          color: "rgba(255, 255, 255, 0.8)",
          textAlign: "center",
          top: 0,
          bottom: 5,
          left: 0,
          right: 0,
          ...props.subTitleStyle
        };
        ctx.font = `${subFontStyle.fontWeight} ${subFontStyle.fontSize}px ${subFontStyle.fontFamily}`;
        ctx.fillStyle = subFontStyle.color;
        ctx.textAlign = subFontStyle.textAlign;
        ctx.textBaseline = subFontStyle.textBaseline;
        let postionBottom = subFontStyle.top || HEIGHT - subFontStyle.bottom;
        ctx.fillText(
          props.subTitle,
          subFontStyle.left || RADIUS - subFontStyle.right,
          postionBottom
        );
      }
    };
    const middleText = (ctx, text, x, y) => {
      if (props.middleTitle) {
        const Descent = ctx.measureText(text).actualBoundingBoxDescent;
        const Ascent = ctx.measureText(text).actualBoundingBoxAscent;
        if (is.isEnglish(text)) {
          ctx.textBaseline = "baseline";
          const fix = Ascent - Descent;
          ctx.fillText(text, x, y + fix / 2);
        } else if (is.isChinese(text)) {
          ctx.textBaseline = "middle";
          const fix = Descent / 2;
          ctx.fillText(text, x, y + fix / 2);
        }
      } else {
        ctx.fillText(text, x, y);
      }
    };
    setIndex();
    const canvasId = vue.ref();
    canvasId.value = props.id || "dashboard" + getIndex();
    vue.onMounted(() => {
      let myCanvas = document.getElementById(canvasId.value);
      myCanvas.width = WIDTH;
      myCanvas.height = props.semicircle ? RADIUS : WIDTH;
      let ctx = myCanvas.getContext("2d");
      animate(ctx);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("canvas", { id: canvasId.value }, " Your browser does not support the canvas element. ", 8, _hoisted_1);
    };
  }
});
module.exports = _sfc_main;
