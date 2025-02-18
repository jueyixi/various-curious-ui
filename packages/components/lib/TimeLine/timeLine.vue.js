"use strict";
const vue = require("vue");
const timeLine = require("./timeLine.js");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
require("../packages/utils/IndexManager.js");
const is = require("../packages/utils/is.js");
const config = require("../packages/utils/config.js");
const dayjs_min = require("../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js");
const isLeapYear = require("../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/plugin/isLeapYear.js");
const floating_vue_vue_type_script_setup_true_lang = require("../Floating/floating.vue.js");
const scrollBar_vue_vue_type_script_setup_true_lang = require("../ScrollBar/scrollBar.vue.js");
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 2 };
const _hoisted_4 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcTimeLine",
    inheritAttrs: false
  },
  __name: "timeLine",
  props: timeLine.timeLineProps,
  emits: timeLine.timeLineEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    dayjs_min.default.extend(isLeapYear);
    const props = __props;
    const emits = __emit;
    const timeLineNS = useNS.useNS("timeline");
    const scrollbarWrapRef = vue.ref();
    const timeLineRef = vue.ref();
    const TimeList = vue.ref(props.dataSource);
    const selectedItem = vue.ref();
    const split = props.split || {};
    const defaultConfig = vue.computed(() => {
      return {
        beforeWidth: 60,
        lineWidth: 344,
        selected: true,
        showPopper: true,
        ...props == null ? void 0 : props.defaultConfig
      };
    });
    const lineWidth = vue.computed(() => {
      var _a, _b, _c, _d;
      return defaultConfig.value.lineWidth === "auto" ? Number(is.toFixed((((_b = (_a = scrollbarWrapRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _b.offsetWidth) - ((_c = defaultConfig.value) == null ? void 0 : _c.beforeWidth)) / TimeList.value.length)) : (_d = defaultConfig.value) == null ? void 0 : _d.lineWidth;
    });
    const firstStyle = vue.computed(() => {
      const style = {
        width: config.setValueByPx(defaultConfig.value.beforeWidth)
      };
      return style;
    });
    const timeLineWrapStyle = vue.computed(() => {
      var _a;
      const style = {};
      if (props.height) {
        style["--vc-timeline-height"] = config.setValueByPx(props.height);
      }
      return [style, (_a = props.scrollbar) == null ? void 0 : _a.contentStyle];
    });
    const timeLineWrapClass = vue.computed(() => {
      var _a, _b, _c, _d, _e;
      const classList = [timeLineNS.setBlock("wrap"), timeLineNS.is(props.disabled, "disabled")];
      if ((_a = props.scrollbar) == null ? void 0 : _a.contentClass) {
        if (is.isString((_b = props.scrollbar) == null ? void 0 : _b.contentClass)) {
          classList.push((_c = props.scrollbar) == null ? void 0 : _c.contentClass);
        } else if (is.isArray((_d = props.scrollbar) == null ? void 0 : _d.contentClass)) {
          classList.push(...(_e = props.scrollbar) == null ? void 0 : _e.contentClass);
        }
      }
      return classList;
    });
    const dividerLineStyle = vue.computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const style = {};
      if (split == null ? void 0 : split.line) {
        if ((_a = split == null ? void 0 : split.line) == null ? void 0 : _a.width) {
          style["--vc-timeline-divider-line-width"] = config.setValueByPx((_b = split == null ? void 0 : split.line) == null ? void 0 : _b.width);
        }
        if ((_c = split == null ? void 0 : split.line) == null ? void 0 : _c.height) {
          style["--vc-timeline-divider-line-height"] = config.setValueByPx((_d = split == null ? void 0 : split.line) == null ? void 0 : _d.height);
        }
        if ((_e = split == null ? void 0 : split.line) == null ? void 0 : _e.color) {
          style["--vc-timeline-divider-line-color"] = (_f = split == null ? void 0 : split.line) == null ? void 0 : _f.color;
        }
      }
      return style;
    });
    const dividerNameStyle = vue.computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const style = {};
      if (split == null ? void 0 : split.title) {
        if ((_a = split == null ? void 0 : split.title) == null ? void 0 : _a.fontSize) {
          style["--vc-timeline-divider-name-fs"] = config.setValueByPx((_b = split == null ? void 0 : split.title) == null ? void 0 : _b.fontSize);
        }
        if ((_c = split == null ? void 0 : split.title) == null ? void 0 : _c.color) {
          style["--vc-timeline-divider-name-color"] = (_d = split == null ? void 0 : split.title) == null ? void 0 : _d.color;
        }
        if ((_e = split == null ? void 0 : split.title) == null ? void 0 : _e.lineHight) {
          style["--vc-timeline-divider-name-lh"] = config.setValueByPx((_f = split == null ? void 0 : split.title) == null ? void 0 : _f.lineHight);
        }
      }
      return style;
    });
    const dividerStyle = vue.ref([]);
    const dividerRefs = vue.ref([]);
    const setRef = (el, index) => {
      if (el) {
        dividerRefs.value[index] = el;
      }
    };
    const setDividerStyle = () => {
      var _a;
      const length = ((_a = TimeList == null ? void 0 : TimeList.value) == null ? void 0 : _a.length) || 0;
      vue.nextTick(() => {
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
            style["--vc-timeline-divider-gap"] = config.setValueByPx(split.gap);
          }
          dividerStyle.value[i] = style;
        }
      });
    };
    const pointRefs = vue.ref({});
    const setPointRefs = (el, refName) => {
      if (el) {
        pointRefs.value[refName] = el;
      }
    };
    const getPointRef = (refName) => {
      return pointRefs.value[refName];
    };
    const pointInnerClass = vue.computed(() => {
      return (v) => {
        var _a;
        v.selected = (v == null ? void 0 : v.selected) ?? v.showPopper;
        return [timeLineNS.setBlockEle("point", "inner"), ((_a = defaultConfig.value) == null ? void 0 : _a.selected) && v.selected && timeLineNS.setBlockModifier("point", "active")];
      };
    });
    const pointStyle = vue.computed(() => {
      return (v) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        const PointStyle = (v == null ? void 0 : v.pointStyle) || {};
        if (((_a = v.pointStyle) == null ? void 0 : _a.color) || ((_b = defaultConfig.value) == null ? void 0 : _b.pointColor)) {
          PointStyle["--vc-timeline-point-color"] = ((_c = v.pointStyle) == null ? void 0 : _c.color) || ((_d = defaultConfig.value) == null ? void 0 : _d.pointColor);
        }
        if (((_e = v.pointStyle) == null ? void 0 : _e.width) || ((_f = defaultConfig.value) == null ? void 0 : _f.pointWidth)) {
          PointStyle["--vc-timeline-point-width"] = config.setValueByPx(((_g = v.pointStyle) == null ? void 0 : _g.width) || ((_h = defaultConfig.value) == null ? void 0 : _h.pointWidth));
        }
        if (((_i = v.pointStyle) == null ? void 0 : _i.height) || ((_j = defaultConfig.value) == null ? void 0 : _j.pointHeight)) {
          PointStyle["--vc-timeline-point-height"] = config.setValueByPx(((_k = v.pointStyle) == null ? void 0 : _k.width) || ((_l = defaultConfig.value) == null ? void 0 : _l.pointHeight));
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
      const february = year ? dayjs_min.default(year + "-02-10") : "";
      const isLeapYear2 = year ? february.isLeapYear() : false;
      let daysInYear = 365;
      if (isLeapYear2) {
        daysInYear = 366;
      }
      const daysSinceYearStart = item.date ? dayjs_min.default(item.date).diff(dayjs_min.default(item.date).startOf("year"), "days") + 1 : 0;
      const left = Number((daysSinceYearStart / daysInYear * lineWidth.value).toFixed(2)) - (((_a = defaultConfig.value) == null ? void 0 : _a.pointWidth) / 2 || 4) + "px";
      const style = {
        left
      };
      return style;
    };
    const pointWrapStyle = vue.computed(() => {
      return (year, item) => {
        const style = getPonitStyle(year, item);
        return style;
      };
    });
    const setLineStyle = (index) => {
      var _a, _b, _c;
      const year = (_a = TimeList == null ? void 0 : TimeList.value) == null ? void 0 : _a[index].year;
      if (index == ((_b = TimeList == null ? void 0 : TimeList.value) == null ? void 0 : _b.length) - 1 && year == dayjs_min.default().format("YYYY") && ((_c = defaultConfig.value) == null ? void 0 : _c.lineWidth) !== "auto") {
        const lastWidth = getPonitStyle(year, { date: dayjs_min.default().format("YYYY-MM-DD") });
        return {
          width: lastWidth.left
        };
      }
      return {
        width: config.setValueByPx(lineWidth.value)
      };
    };
    const lineStyle = vue.computed(() => {
      return (index) => {
        const style = setLineStyle(index);
        return style;
      };
    });
    vue.onMounted(() => {
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
      return vue.openBlock(), vue.createBlock(scrollBar_vue_vue_type_script_setup_true_lang, vue.mergeProps({
        ref_key: "scrollbarWrapRef",
        ref: scrollbarWrapRef,
        contentStyle: timeLineWrapStyle.value
      }, _ctx.scrollbar, { contentClass: timeLineWrapClass.value }), {
        default: vue.withCtx(() => {
          var _a;
          return [
            ((_a = props.dataSource) == null ? void 0 : _a.length) ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass([vue.unref(timeLineNS).namespace]),
              ref_key: "timeLineRef",
              ref: timeLineRef
            }, [
              vue.createElementVNode("div", {
                class: vue.normalizeClass([vue.unref(timeLineNS).setBlock("item")])
              }, [
                vue.createElementVNode("div", {
                  class: vue.normalizeClass([vue.unref(timeLineNS).setBlockEle("item", "line")]),
                  style: vue.normalizeStyle(firstStyle.value)
                }, null, 6)
              ], 2),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(TimeList.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: vue.normalizeClass([vue.unref(timeLineNS).setBlock("item")]),
                  key: index
                }, [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass([vue.unref(timeLineNS).setBlock("divider")]),
                    ref_for: true,
                    ref: (el) => setRef(el, index),
                    style: vue.normalizeStyle(dividerStyle.value[index])
                  }, [
                    vue.createElementVNode("div", {
                      style: vue.normalizeStyle(dividerNameStyle.value),
                      class: vue.normalizeClass([vue.unref(timeLineNS).setBlockModifier("divider", "name")])
                    }, [
                      vue.renderSlot(_ctx.$slots, "year", { data: item }, () => {
                        var _a2, _b, _c, _d;
                        return [
                          (item == null ? void 0 : item.format) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, vue.toDisplayString(item == null ? void 0 : item.format(item)), 1)) : ((_b = (_a2 = vue.unref(split)) == null ? void 0 : _a2.title) == null ? void 0 : _b.format) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString((_d = (_c = vue.unref(split)) == null ? void 0 : _c.title) == null ? void 0 : _d.format(item)), 1)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(item.year) + "年", 1))
                        ];
                      })
                    ], 6),
                    vue.createElementVNode("div", {
                      style: vue.normalizeStyle(dividerLineStyle.value),
                      class: vue.normalizeClass([vue.unref(timeLineNS).setBlockModifier("divider", "line")])
                    }, null, 6)
                  ], 6),
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass([vue.unref(timeLineNS).setBlockEle("item", "line")]),
                    style: vue.normalizeStyle(lineStyle.value(index))
                  }, null, 6),
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.list, (v, i) => {
                    return vue.openBlock(), vue.createElementBlock("div", {
                      class: vue.normalizeClass([vue.unref(timeLineNS).setBlockEle("item", "point")]),
                      key: i,
                      style: vue.normalizeStyle(pointWrapStyle.value(item.year, v))
                    }, [
                      vue.createElementVNode("div", {
                        class: vue.normalizeClass([vue.unref(timeLineNS).setBlock("point"), v.disabled ? "is-disabled__point" : "vc-pointer"]),
                        onClick: ($event) => pointClick(v),
                        style: vue.normalizeStyle(pointStyle.value(v)),
                        ref_for: true,
                        ref: (el) => setPointRefs(el, `pointRef-${index}-${i}`)
                      }, [
                        vue.createElementVNode("div", {
                          class: vue.normalizeClass(pointInnerClass.value(v))
                        }, null, 2)
                      ], 14, _hoisted_4),
                      vue.createVNode(floating_vue_vue_type_script_setup_true_lang, vue.mergeProps({
                        teleported: false,
                        ref_for: true
                      }, props.floating, {
                        autoOpen: defaultConfig.value.showPopper && v.showPopper,
                        trigger: "manual",
                        visible: v.showPopper,
                        "onUpdate:visible": ($event) => v.showPopper = $event,
                        reference: () => getPointRef(`pointRef-${index}-${i}`)
                      }), {
                        default: vue.withCtx(() => [
                          vue.renderSlot(_ctx.$slots, "popper", { data: v }, () => [
                            vue.createElementVNode("span", null, vue.toDisplayString(v.desc), 1)
                          ])
                        ]),
                        _: 2
                      }, 1040, ["autoOpen", "visible", "onUpdate:visible", "reference"])
                    ], 6);
                  }), 128))
                ], 2);
              }), 128))
            ], 2)) : vue.createCommentVNode("", true)
          ];
        }),
        _: 3
      }, 16, ["contentStyle", "contentClass"]);
    };
  }
});
module.exports = _sfc_main;
