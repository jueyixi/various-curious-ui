import { defineComponent, ref, computed, onMounted, openBlock, createBlock, mergeProps, withCtx, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, Fragment, renderList, renderSlot, toDisplayString, createVNode, createCommentVNode, nextTick } from "vue";
import { timeLineProps, timeLineEmits } from "./timeLine.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import "../packages/utils/IndexManager.js";
import { toFixed, isString, isArray } from "../packages/utils/is.js";
import { setValueByPx } from "../packages/utils/config.js";
import dayjs from "../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js";
import isLeapYear from "../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/plugin/isLeapYear.js";
import _sfc_main$2 from "../Floating/floating.vue.js";
import _sfc_main$1 from "../ScrollBar/scrollBar.vue.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 2 };
const _hoisted_4 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcTimeLine",
    inheritAttrs: false
  },
  __name: "timeLine",
  props: timeLineProps,
  emits: timeLineEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    dayjs.extend(isLeapYear);
    const props = __props;
    const emits = __emit;
    const timeLineNS = useNS("timeline");
    const scrollbarWrapRef = ref();
    const timeLineRef = ref();
    const TimeList = ref(props.dataSource);
    const selectedItem = ref();
    const split = props.split || {};
    const defaultConfig = computed(() => {
      return {
        beforeWidth: 60,
        lineWidth: 344,
        selected: true,
        showPopper: true,
        ...props == null ? void 0 : props.defaultConfig
      };
    });
    const lineWidth = computed(() => {
      var _a, _b, _c, _d;
      return defaultConfig.value.lineWidth === "auto" ? Number(toFixed((((_b = (_a = scrollbarWrapRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _b.offsetWidth) - ((_c = defaultConfig.value) == null ? void 0 : _c.beforeWidth)) / TimeList.value.length)) : (_d = defaultConfig.value) == null ? void 0 : _d.lineWidth;
    });
    const firstStyle = computed(() => {
      const style = {
        width: setValueByPx(defaultConfig.value.beforeWidth)
      };
      return style;
    });
    const timeLineWrapStyle = computed(() => {
      var _a;
      const style = {};
      if (props.height) {
        style["--vc-timeline-height"] = setValueByPx(props.height);
      }
      return [style, (_a = props.scrollbar) == null ? void 0 : _a.contentStyle];
    });
    const timeLineWrapClass = computed(() => {
      var _a, _b, _c, _d, _e;
      const classList = [timeLineNS.setBlock("wrap"), timeLineNS.is(props.disabled, "disabled")];
      if ((_a = props.scrollbar) == null ? void 0 : _a.contentClass) {
        if (isString((_b = props.scrollbar) == null ? void 0 : _b.contentClass)) {
          classList.push((_c = props.scrollbar) == null ? void 0 : _c.contentClass);
        } else if (isArray((_d = props.scrollbar) == null ? void 0 : _d.contentClass)) {
          classList.push(...(_e = props.scrollbar) == null ? void 0 : _e.contentClass);
        }
      }
      return classList;
    });
    const dividerLineStyle = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const style = {};
      if (split == null ? void 0 : split.line) {
        if ((_a = split == null ? void 0 : split.line) == null ? void 0 : _a.width) {
          style["--vc-timeline-divider-line-width"] = setValueByPx((_b = split == null ? void 0 : split.line) == null ? void 0 : _b.width);
        }
        if ((_c = split == null ? void 0 : split.line) == null ? void 0 : _c.height) {
          style["--vc-timeline-divider-line-height"] = setValueByPx((_d = split == null ? void 0 : split.line) == null ? void 0 : _d.height);
        }
        if ((_e = split == null ? void 0 : split.line) == null ? void 0 : _e.color) {
          style["--vc-timeline-divider-line-color"] = (_f = split == null ? void 0 : split.line) == null ? void 0 : _f.color;
        }
      }
      return style;
    });
    const dividerNameStyle = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const style = {};
      if (split == null ? void 0 : split.title) {
        if ((_a = split == null ? void 0 : split.title) == null ? void 0 : _a.fontSize) {
          style["--vc-timeline-divider-name-fs"] = setValueByPx((_b = split == null ? void 0 : split.title) == null ? void 0 : _b.fontSize);
        }
        if ((_c = split == null ? void 0 : split.title) == null ? void 0 : _c.color) {
          style["--vc-timeline-divider-name-color"] = (_d = split == null ? void 0 : split.title) == null ? void 0 : _d.color;
        }
        if ((_e = split == null ? void 0 : split.title) == null ? void 0 : _e.lineHight) {
          style["--vc-timeline-divider-name-lh"] = setValueByPx((_f = split == null ? void 0 : split.title) == null ? void 0 : _f.lineHight);
        }
      }
      return style;
    });
    const dividerStyle = ref([]);
    const dividerRefs = ref([]);
    const setRef = (el, index) => {
      if (el) {
        dividerRefs.value[index] = el;
      }
    };
    const setDividerStyle = () => {
      var _a;
      const length = ((_a = TimeList == null ? void 0 : TimeList.value) == null ? void 0 : _a.length) || 0;
      nextTick(() => {
        var _a2;
        for (let i = 0; i < length; i++) {
          const element = (_a2 = dividerRefs.value) == null ? void 0 : _a2[i];
          const style = {};
          if (element) {
            const elementWidth = element.offsetWidth;
            const left = (elementWidth / 2).toFixed(2);
            style.left = `-${left}px`;
          }
          if (split == null ? void 0 : split.gap) {
            style["--vc-timeline-divider-gap"] = setValueByPx(split.gap);
          }
          dividerStyle.value[i] = style;
        }
      });
    };
    const pointRefs = ref({});
    const setPointRefs = (el, refName) => {
      if (el) {
        pointRefs.value[refName] = el;
      }
    };
    const getPointRef = (refName) => {
      return pointRefs.value[refName];
    };
    const pointInnerClass = computed(() => {
      return (v) => {
        var _a;
        v.selected = (v == null ? void 0 : v.selected) ?? v.showPopper;
        return [timeLineNS.setBlockEle("point", "inner"), ((_a = defaultConfig.value) == null ? void 0 : _a.selected) && v.selected && timeLineNS.setBlockModifier("point", "active")];
      };
    });
    const pointStyle = computed(() => {
      return (v) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        const PointStyle = (v == null ? void 0 : v.pointStyle) || {};
        if (((_a = v.pointStyle) == null ? void 0 : _a.color) || ((_b = defaultConfig.value) == null ? void 0 : _b.pointColor)) {
          PointStyle["--vc-timeline-point-color"] = ((_c = v.pointStyle) == null ? void 0 : _c.color) || ((_d = defaultConfig.value) == null ? void 0 : _d.pointColor);
        }
        if (((_e = v.pointStyle) == null ? void 0 : _e.width) || ((_f = defaultConfig.value) == null ? void 0 : _f.pointWidth)) {
          PointStyle["--vc-timeline-point-width"] = setValueByPx(((_g = v.pointStyle) == null ? void 0 : _g.width) || ((_h = defaultConfig.value) == null ? void 0 : _h.pointWidth));
        }
        if (((_i = v.pointStyle) == null ? void 0 : _i.height) || ((_j = defaultConfig.value) == null ? void 0 : _j.pointHeight)) {
          PointStyle["--vc-timeline-point-height"] = setValueByPx(((_k = v.pointStyle) == null ? void 0 : _k.width) || ((_l = defaultConfig.value) == null ? void 0 : _l.pointHeight));
        }
        return PointStyle;
      };
    });
    const pointClick = (item) => {
      var _a, _b, _c;
      if (!(props == null ? void 0 : props.disabled) && !item.disabled) {
        item.selected = ((_a = defaultConfig.value) == null ? void 0 : _a.selected) && !item.selected;
        item.showPopper = ((_b = defaultConfig.value) == null ? void 0 : _b.showPopper) && !item.showPopper;
        if (!props.multiple) {
          selectedItem.value = item.selected ? item : {};
          if (item.selected) {
            emits("selected", item);
          }
          if ((_c = defaultConfig.value) == null ? void 0 : _c.showPopper) {
            hidePopper(item);
          }
        }
        emits("click", item);
      }
    };
    const getSelectedData = () => {
      var _a;
      const selectedList = [];
      if (props.multiple) {
        (_a = TimeList.value) == null ? void 0 : _a.forEach((item, index) => {
          var _a2;
          const list = ((_a2 = item.list) == null ? void 0 : _a2.filter((v) => v.selected)) || [];
          selectedList.push(...list);
        });
      }
      return !props.multiple ? selectedItem.value : selectedList;
    };
    const showPopper = (e) => {
      var _a;
      (_a = TimeList.value) == null ? void 0 : _a.forEach((item) => {
        var _a2;
        (_a2 = item.list) == null ? void 0 : _a2.forEach((v) => {
          if ((e == null ? void 0 : e.date) == v.date) {
            v.showPopper = e.showPopper;
          } else {
            v.showPopper = true;
          }
        });
      });
    };
    const hidePopper = (e) => {
      var _a;
      (_a = TimeList.value) == null ? void 0 : _a.forEach((item) => {
        var _a2;
        (_a2 = item.list) == null ? void 0 : _a2.forEach((v) => {
          if ((e == null ? void 0 : e.date) == v.date) {
            v.showPopper = e.showPopper;
          } else {
            v.showPopper = false;
          }
        });
      });
    };
    const getPonitStyle = (year, item) => {
      var _a;
      const february = year ? dayjs(year + "-02-10") : "";
      const isLeapYear2 = year ? february.isLeapYear() : false;
      let daysInYear = 365;
      if (isLeapYear2) {
        daysInYear = 366;
      }
      const daysSinceYearStart = item.date ? dayjs(item.date).diff(dayjs(item.date).startOf("year"), "days") + 1 : 0;
      const left = Number((daysSinceYearStart / daysInYear * lineWidth.value).toFixed(2)) - (((_a = defaultConfig.value) == null ? void 0 : _a.pointWidth) / 2 || 4) + "px";
      const style = {
        left
      };
      return style;
    };
    const pointWrapStyle = computed(() => {
      return (year, item) => {
        const style = getPonitStyle(year, item);
        return style;
      };
    });
    const setLineStyle = (index) => {
      var _a, _b, _c;
      const year = (_a = TimeList == null ? void 0 : TimeList.value) == null ? void 0 : _a[index].year;
      if (index == ((_b = TimeList == null ? void 0 : TimeList.value) == null ? void 0 : _b.length) - 1 && year == dayjs().format("YYYY") && ((_c = defaultConfig.value) == null ? void 0 : _c.lineWidth) !== "auto") {
        const lastWidth = getPonitStyle(year, { date: dayjs().format("YYYY-MM-DD") });
        return {
          width: lastWidth.left
        };
      }
      return {
        width: setValueByPx(lineWidth.value)
      };
    };
    const lineStyle = computed(() => {
      return (index) => {
        const style = setLineStyle(index);
        return style;
      };
    });
    onMounted(() => {
      setDividerStyle();
    });
    __expose({
      ref: timeLineRef,
      pointClick,
      showPopper,
      hidePopper,
      getSelectedData
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, mergeProps({
        ref_key: "scrollbarWrapRef",
        ref: scrollbarWrapRef,
        contentStyle: timeLineWrapStyle.value
      }, _ctx.scrollbar, { contentClass: timeLineWrapClass.value }), {
        default: withCtx(() => {
          var _a;
          return [
            ((_a = props.dataSource) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([unref(timeLineNS).namespace]),
              ref_key: "timeLineRef",
              ref: timeLineRef
            }, [
              createElementVNode("div", {
                class: normalizeClass([unref(timeLineNS).setBlock("item")])
              }, [
                createElementVNode("div", {
                  class: normalizeClass([unref(timeLineNS).setBlockEle("item", "line")]),
                  style: normalizeStyle(firstStyle.value)
                }, null, 6)
              ], 2),
              (openBlock(true), createElementBlock(Fragment, null, renderList(TimeList.value, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass([unref(timeLineNS).setBlock("item")]),
                  key: index
                }, [
                  createElementVNode("div", {
                    class: normalizeClass([unref(timeLineNS).setBlock("divider")]),
                    ref_for: true,
                    ref: (el) => setRef(el, index),
                    style: normalizeStyle(dividerStyle.value[index])
                  }, [
                    createElementVNode("div", {
                      style: normalizeStyle(dividerNameStyle.value),
                      class: normalizeClass([unref(timeLineNS).setBlockModifier("divider", "name")])
                    }, [
                      renderSlot(_ctx.$slots, "year", { data: item }, () => {
                        var _a2, _b, _c, _d;
                        return [
                          (item == null ? void 0 : item.format) ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(item == null ? void 0 : item.format(item)), 1)) : ((_b = (_a2 = unref(split)) == null ? void 0 : _a2.title) == null ? void 0 : _b.format) ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString((_d = (_c = unref(split)) == null ? void 0 : _c.title) == null ? void 0 : _d.format(item)), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(item.year) + "年", 1))
                        ];
                      })
                    ], 6),
                    createElementVNode("div", {
                      style: normalizeStyle(dividerLineStyle.value),
                      class: normalizeClass([unref(timeLineNS).setBlockModifier("divider", "line")])
                    }, null, 6)
                  ], 6),
                  createElementVNode("div", {
                    class: normalizeClass([unref(timeLineNS).setBlockEle("item", "line")]),
                    style: normalizeStyle(lineStyle.value(index))
                  }, null, 6),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.list, (v, i) => {
                    return openBlock(), createElementBlock("div", {
                      class: normalizeClass([unref(timeLineNS).setBlockEle("item", "point")]),
                      key: i,
                      style: normalizeStyle(pointWrapStyle.value(item.year, v))
                    }, [
                      createElementVNode("div", {
                        class: normalizeClass([unref(timeLineNS).setBlock("point"), v.disabled ? "is-disabled__point" : "vc-pointer"]),
                        onClick: ($event) => pointClick(v),
                        style: normalizeStyle(pointStyle.value(v)),
                        ref_for: true,
                        ref: (el) => setPointRefs(el, `pointRef-${index}-${i}`)
                      }, [
                        createElementVNode("div", {
                          class: normalizeClass(pointInnerClass.value(v))
                        }, null, 2)
                      ], 14, _hoisted_4),
                      createVNode(_sfc_main$2, mergeProps({
                        teleported: false,
                        ref_for: true
                      }, props.floating, {
                        autoOpen: defaultConfig.value.showPopper && v.showPopper,
                        trigger: "manual",
                        visible: v.showPopper,
                        "onUpdate:visible": ($event) => v.showPopper = $event,
                        reference: () => getPointRef(`pointRef-${index}-${i}`)
                      }), {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "popper", { data: v }, () => [
                            createElementVNode("span", null, toDisplayString(v.desc), 1)
                          ])
                        ]),
                        _: 2
                      }, 1040, ["autoOpen", "visible", "onUpdate:visible", "reference"])
                    ], 6);
                  }), 128))
                ], 2);
              }), 128))
            ], 2)) : createCommentVNode("", true)
          ];
        }),
        _: 3
      }, 16, ["contentStyle", "contentClass"]);
    };
  }
});
export {
  _sfc_main as default
};
