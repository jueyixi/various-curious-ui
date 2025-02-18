import { defineComponent, ref, reactive, computed, watch, nextTick, provide, onMounted, onUpdated, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot, createBlock, createCommentVNode } from "vue";
import { useResizeObserver, useEventListener } from "../node_modules/.pnpm/@vueuse_core@10.11.0_vue@3.4.29/node_modules/@vueuse/core/index.js";
import { scrollbarProps, scrollbarEmits } from "./scrollBar.js";
import { scrollbarContextKey } from "./constants.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import "../packages/utils/IndexManager.js";
import { isObject, isNumber } from "../packages/utils/is.js";
import { setValueByPx } from "../packages/utils/config.js";
import _sfc_main$1 from "./bar.vue.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcScrollBar",
    inheritAttrs: false
  },
  __name: "scrollBar",
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const scrollbarNS = useNS("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbarRef = ref();
    const wrapRef = ref();
    const contentRef = ref();
    const barRef = ref();
    const defaultConfig = reactive({
      sizeWidth: "0",
      sizeHeight: "0",
      ratioX: 1,
      ratioY: 1
    });
    const wrapClass = computed(() => {
      return [scrollbarNS.setBlock("wrap"), !props.native && "not-scroll", props.wrapClass];
    });
    const wrapStyle = computed(() => {
      const style = {};
      if (props.position === "outside") {
        style.width = `calc(100% - ${setValueByPx(props.barWidth || 6)} - ${setValueByPx(props.outsideGap || 0)})`;
        style.height = `calc(${props.height ? setValueByPx(props.height) : "100%"} - ${setValueByPx(props.barWidth || 6)} - ${setValueByPx(props.outsideGap || 0)})`;
      } else {
        if (props.height)
          style.height = setValueByPx(props.height);
      }
      if (props.maxHeight)
        style.maxHeight = setValueByPx(props.maxHeight);
      return [style, props.wrapStyle];
    });
    const contentClass = computed(() => {
      return [scrollbarNS.setBlockEle("wrap", "content"), props.contentClass];
    });
    const contentStyle = computed(() => {
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
      if (isObject(arg1)) {
        wrapRef.value.scrollTo(arg1);
      } else if (isNumber(arg1) && isNumber(arg2)) {
        wrapRef.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!isNumber(value)) {
        return;
      }
      wrapRef.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
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
    watch(
      () => props.stopResize,
      (val) => {
        if (val) {
          stopResizeObserver == null ? void 0 : stopResizeObserver();
          stopResizeListener == null ? void 0 : stopResizeListener();
        } else {
          ({ stop: stopResizeObserver } = useResizeObserver(contentRef, update));
          stopResizeListener = useEventListener("resize", update);
        }
      },
      { immediate: true }
    );
    watch(
      () => [props.maxHeight, props.height],
      () => {
        if (!props.native)
          nextTick(() => {
            var _a;
            update();
            if (wrapRef.value) {
              (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
            }
          });
      }
    );
    provide(
      scrollbarContextKey,
      reactive({
        scrollbarElement: scrollbarRef,
        wrapElement: wrapRef,
        gap: props.gap,
        thumb: props.thumb,
        track: props.track
      })
    );
    onMounted(() => {
      if (!props.native)
        nextTick(() => {
          update();
        });
    });
    onUpdated(() => update());
    __expose({
      wrapRef,
      update,
      scrollTo,
      handleScroll,
      setScrollLeft,
      setScrollTop
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(scrollbarNS).namespace]),
        ref_key: "scrollbarRef",
        ref: scrollbarRef,
        style: normalizeStyle({ height: _ctx.height && unref(setValueByPx)(_ctx.height) })
      }, [
        createElementVNode("div", {
          class: normalizeClass(wrapClass.value),
          ref_key: "wrapRef",
          ref: wrapRef,
          style: normalizeStyle(wrapStyle.value),
          onScroll: handleScroll
        }, [
          createElementVNode("div", {
            class: normalizeClass(contentClass.value),
            style: normalizeStyle(contentStyle.value),
            ref_key: "contentRef",
            ref: contentRef
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 6)
        ], 38),
        !_ctx.native ? (openBlock(), createBlock(_sfc_main$1, {
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
        }, null, 8, ["height", "width", "always", "ratio-x", "gap", "bar-width", "ratio-y"])) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
