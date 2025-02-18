"use strict";
const vue = require("vue");
const index = require("../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.29/node_modules/@vueuse/core/index.js");
const scrollBar = require("./scrollBar.js");
const constants = require("./constants.js");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
require("../packages/utils/IndexManager.js");
const is = require("../packages/utils/is.js");
const config = require("../packages/utils/config.js");
const bar_vue_vue_type_script_setup_true_lang = require("./bar.vue.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcScrollBar",
    inheritAttrs: false
  },
  __name: "scrollBar",
  props: scrollBar.scrollbarProps,
  emits: scrollBar.scrollbarEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const scrollbarNS = useNS.useNS("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbarRef = vue.ref();
    const wrapRef = vue.ref();
    const contentRef = vue.ref();
    const barRef = vue.ref();
    const defaultConfig = vue.reactive({
      sizeWidth: "0",
      sizeHeight: "0",
      ratioX: 1,
      ratioY: 1
    });
    const wrapClass = vue.computed(() => {
      return [scrollbarNS.setBlock("wrap"), !props.native && "not-scroll", props.wrapClass];
    });
    const wrapStyle = vue.computed(() => {
      const style = {};
      if (props.position === "outside") {
        style.width = `calc(100% - ${config.setValueByPx(props.barWidth || 6)} - ${config.setValueByPx(props.outsideGap || 0)})`;
        style.height = `calc(${props.height ? config.setValueByPx(props.height) : "100%"} - ${config.setValueByPx(props.barWidth || 6)} - ${config.setValueByPx(props.outsideGap || 0)})`;
      } else {
        if (props.height)
          style.height = config.setValueByPx(props.height);
      }
      if (props.maxHeight)
        style.maxHeight = config.setValueByPx(props.maxHeight);
      return [style, props.wrapStyle];
    });
    const contentClass = vue.computed(() => {
      return [scrollbarNS.setBlockEle("wrap", "content"), props.contentClass];
    });
    const contentStyle = vue.computed(() => {
      return props.contentStyle;
    });
    const handleScroll = () => {
      var _a;
      if (wrapRef.value) {
        (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
        emits("scroll", {
          scrollTop: wrapRef.value.scrollTop,
          scrollLeft: wrapRef.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if (is.isObject(arg1)) {
        wrapRef.value.scrollTo(arg1);
      } else if (is.isNumber(arg1) && is.isNumber(arg2)) {
        wrapRef.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!is.isNumber(value)) {
        return;
      }
      wrapRef.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!is.isNumber(value)) {
        return;
      }
      wrapRef.value.scrollLeft = value;
    };
    const GAP = props.gap * 2;
    const update = () => {
      if (!wrapRef.value)
        return;
      const offsetHeight = wrapRef.value.offsetHeight - GAP;
      const offsetWidth = wrapRef.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth;
      const height = props.size ? props.size : Math.max(originalHeight, props.minSize);
      const width = props.size ? props.size : Math.max(originalWidth, props.minSize);
      defaultConfig.ratioY = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      defaultConfig.ratioX = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      defaultConfig.sizeHeight = height + GAP < offsetHeight ? `${height}px` : "";
      defaultConfig.sizeWidth = width + GAP < offsetWidth ? `${width}px` : "";
    };
    vue.watch(
      () => props.stopResize,
      (val) => {
        if (val) {
          stopResizeObserver == null ? void 0 : stopResizeObserver();
          stopResizeListener == null ? void 0 : stopResizeListener();
        } else {
          ({ stop: stopResizeObserver } = index.useResizeObserver(contentRef, update));
          stopResizeListener = index.useEventListener("resize", update);
        }
      },
      { immediate: true }
    );
    vue.watch(
      () => [props.maxHeight, props.height],
      () => {
        if (!props.native)
          vue.nextTick(() => {
            var _a;
            update();
            if (wrapRef.value) {
              (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
            }
          });
      }
    );
    vue.provide(
      constants.scrollbarContextKey,
      vue.reactive({
        scrollbarElement: scrollbarRef,
        wrapElement: wrapRef,
        gap: props.gap,
        thumb: props.thumb,
        track: props.track
      })
    );
    vue.onMounted(() => {
      if (!props.native)
        vue.nextTick(() => {
          update();
        });
    });
    vue.onUpdated(() => update());
    __expose({
      wrapRef,
      update,
      scrollTo,
      handleScroll,
      setScrollLeft,
      setScrollTop
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(scrollbarNS).namespace]),
        ref_key: "scrollbarRef",
        ref: scrollbarRef,
        style: vue.normalizeStyle({ height: _ctx.height && vue.unref(config.setValueByPx)(_ctx.height) })
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(wrapClass.value),
          ref_key: "wrapRef",
          ref: wrapRef,
          style: vue.normalizeStyle(wrapStyle.value),
          onScroll: handleScroll
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(contentClass.value),
            style: vue.normalizeStyle(contentStyle.value),
            ref_key: "contentRef",
            ref: contentRef
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 6)
        ], 38),
        !_ctx.native ? (vue.openBlock(), vue.createBlock(bar_vue_vue_type_script_setup_true_lang, {
          key: 0,
          ref_key: "barRef",
          ref: barRef,
          height: defaultConfig.sizeHeight,
          width: defaultConfig.sizeWidth,
          always: _ctx.always,
          "ratio-x": defaultConfig.ratioX,
          gap: _ctx.gap,
          "bar-width": _ctx.barWidth,
          "ratio-y": defaultConfig.ratioY
        }, null, 8, ["height", "width", "always", "ratio-x", "gap", "bar-width", "ratio-y"])) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
module.exports = _sfc_main;
