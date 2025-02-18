"use strict";
const vue = require("vue");
const thumb = require("./thumb.js");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
require("../packages/utils/IndexManager.js");
const config = require("../packages/utils/config.js");
const index = require("../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.29/node_modules/@vueuse/core/index.js");
const constants = require("./constants.js");
const index$1 = require("../node_modules/.pnpm/@vueuse_shared@10.11.0_vue@3.4.29/node_modules/@vueuse/shared/index.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "thumb",
  props: thumb.thumbProps,
  emits: thumb.thumbEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const scrollbarNS = useNS.useNS("scrollbar");
    const scrollbar = vue.inject(constants.scrollbarContextKey);
    if (!scrollbar)
      throw new Error("Thumb 获取不到滚动条上下文");
    const bar = vue.computed(() => thumb.BarConfig[props.vertical ? "vertical" : "horizontal"]);
    const trackClass = vue.computed(() => {
      return [scrollbarNS.setBlock("track"), props.vertical ? "is-vertical" : "is-horizontal"];
    });
    const trackStyle = vue.computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const style = {};
      if (scrollbar.gap) {
        const gap = scrollbar.gap;
        if (props.vertical) {
          style["--vc-scrollbar-bar-top"] = config.setValueByPx(gap);
        } else {
          style["--vc-scrollbar-bar-left"] = config.setValueByPx(gap);
        }
      }
      if (props.barWidth) {
        if (props.vertical) {
          style["--vc-scrollbar-bar-width"] = config.setValueByPx(props.barWidth);
        } else {
          style["--vc-scrollbar-bar-height"] = config.setValueByPx(props.barWidth);
        }
      }
      if (scrollbar.track) {
        if ((_a = scrollbar.track) == null ? void 0 : _a.color) {
          style["--vc-scrollbar-bar-color"] = (_b = scrollbar.track) == null ? void 0 : _b.color;
        }
        if ((_c = scrollbar.track) == null ? void 0 : _c.borderRadius) {
          style["--vc-scrollbar-bar-border-radius"] = config.setValueByPx((_d = scrollbar.track) == null ? void 0 : _d.borderRadius);
        }
      }
      if (scrollbar.thumb) {
        if ((_e = scrollbar.thumb) == null ? void 0 : _e.right) {
          style["--vc-scrollbar-bar-right"] = config.setValueByPx((_f = scrollbar.thumb) == null ? void 0 : _f.right);
        }
        if ((_g = scrollbar.thumb) == null ? void 0 : _g.bottom) {
          style["--vc-scrollbar-bar-bottom"] = config.setValueByPx((_h = scrollbar.thumb) == null ? void 0 : _h.bottom);
        }
      }
      return style;
    });
    const thumbClass = vue.computed(() => {
      return [scrollbarNS.setBlock("thumb")];
    });
    const thumbStyle = vue.computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const style = {
        [bar.value.size]: config.setValueByPx(props.size),
        transform: `translate${bar.value.axis}(${props.move}%)`
      };
      if (scrollbar.thumb) {
        if ((_a = scrollbar.thumb) == null ? void 0 : _a.color) {
          style["--vc-scrollbar-thumb-color"] = (_b = scrollbar.thumb) == null ? void 0 : _b.color;
        }
        if ((_c = scrollbar.thumb) == null ? void 0 : _c.opacity) {
          style["--vc-scrollbar-thumb-opacity"] = (_d = scrollbar.thumb) == null ? void 0 : _d.opacity;
        }
        if ((_e = scrollbar.thumb) == null ? void 0 : _e.hoverColor) {
          style["--vc-scrollbar-thumb-hover-color"] = (_f = scrollbar.thumb) == null ? void 0 : _f.hoverColor;
        }
        if ((_g = scrollbar.thumb) == null ? void 0 : _g.hoverOpacity) {
          style["--vc-scrollbar-thumb-hover-opacity"] = (_h = scrollbar.thumb) == null ? void 0 : _h.hoverOpacity;
        }
      }
      return style;
    });
    const offsetRatio = vue.computed(
      () => instanceRef.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumbRef.value[bar.value.offset]
    );
    const instanceRef = vue.ref();
    const thumbRef = vue.ref();
    const thumbState = vue.ref({});
    const visible = vue.ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = index$1.isClient ? document.onselectstart : null;
    const mouseMoveDocumentHandler = (e) => {
      if (!instanceRef.value || !thumbRef.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instanceRef.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumbRef.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instanceRef.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const handleClickThumb = (e) => {
      var _a;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const handleClickTrack = (e) => {
      if (!thumbRef.value || !instanceRef.value || !scrollbar.wrapElement)
        return;
      const offset = Math.abs(
        e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]
      );
      const thumbHalf = thumbRef.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instanceRef.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    index.useEventListener(
      vue.toRef(scrollbar, "scrollbarElement"),
      "mousemove",
      mouseMoveScrollbarHandler
    );
    index.useEventListener(
      vue.toRef(scrollbar, "scrollbarElement"),
      "mouseleave",
      mouseLeaveScrollbarHandler
    );
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    vue.onBeforeUnmount(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: vue.unref(scrollbarNS).setBlock("fade")
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            ref_key: "instanceRef",
            ref: instanceRef,
            style: vue.normalizeStyle(trackStyle.value),
            class: vue.normalizeClass(trackClass.value),
            onMousedown: handleClickTrack
          }, [
            vue.createElementVNode("div", {
              ref_key: "thumbRef",
              ref: thumbRef,
              class: vue.normalizeClass(thumbClass.value),
              style: vue.normalizeStyle(thumbStyle.value),
              onMousedown: handleClickThumb
            }, null, 38)
          ], 38), [
            [vue.vShow, _ctx.always || visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
module.exports = _sfc_main;
