"use strict";
const vue = require("vue");
const calendarYear = require("./calendarYear.js");
const useCalendar = require("../packages/hooks/useCalendar.js");
require("../packages/hooks/useDayjs.js");
const useNS = require("../packages/hooks/useNS.js");
require("../packages/utils/IndexManager.js");
const is = require("../packages/utils/is.js");
const config = require("../packages/utils/config.js");
const calendar = require("../packages/typings/calendar.js");
const _hoisted_1 = ["title"];
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "vc-calendar-cell--date" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "VcCalendarYear",
    inheritAttrs: false
  },
  __name: "calendarYear",
  props: {
    ...calendarYear.calendarYearProps
  },
  emits: calendarYear.calendarYearEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const contentClass = vue.computed(() => {
      const classList = ["vc-calendar-cell--schedule"];
      if (props.contentClass) {
        if (is.isString(props.contentClass)) {
          classList.push(props.contentClass);
        } else if (is.isArray(props.contentClass)) {
          classList.push(...props == null ? void 0 : props.contentClass);
        }
      }
      return classList;
    });
    const contentStyle = vue.computed(() => {
      const style = {};
      if (props.minHeight) {
        style.minHeight = config.setValueByPx(props.minHeight);
      }
      if (props.maxHeight) {
        style.maxHeight = config.setValueByPx(props.maxHeight);
      }
      if (props.height) {
        style.height = props.height === "auto" ? props.height : config.setValueByPx(props.height);
      }
      return [style, props.contentStyle];
    });
    const columnsStyle = vue.computed(() => {
      return { columnGap: config.setValueByPx(props.columnsGap) };
    });
    const calendarContext = vue.inject(calendar.calendarContextKey, null);
    const calendarValue = vue.computed({
      get() {
        return (calendarContext == null ? void 0 : calendarContext.value) || props.value;
      },
      set(val) {
        if (calendarContext.value) {
          calendarContext.value = val;
        }
        emits("update:value", val);
      }
    });
    const calendarNS = useNS.useNS("calendar");
    let handle = useCalendar.useCalendar("year", props.multiple);
    const formData = vue.ref({});
    const selectedData = vue.ref([]);
    const prev = () => {
      const { detail, emitName } = handle.prev();
      formData.value = detail;
      emits(emitName, detail);
    };
    const next = () => {
      const { detail, emitName } = handle.next();
      formData.value = detail;
      emits(emitName, detail);
    };
    const setToday = () => {
      const { detail, emitName } = handle.setToday();
      formData.value = detail;
      emits(emitName, detail);
    };
    const setDate = (appointDate) => {
      const { detail, emitName } = handle.setDate(appointDate || calendarValue.value);
      formData.value = detail;
      emits(emitName, detail);
    };
    const change = (item) => {
      var _a;
      const { detail, emitName } = handle.jump(item);
      if (props.multiple) {
        detail.activedDate.checked ? selectedData.value.push(item) : selectedData.value = (_a = selectedData.value) == null ? void 0 : _a.filter((v) => v.value !== item.value);
      }
      formData.value = detail;
      emits(emitName, detail);
    };
    const getSelectedData = () => {
      return selectedData.value;
    };
    const getTitle = () => {
      const { list } = vue.toRaw(formData.value);
      if (list.length) {
        const data = [];
        list == null ? void 0 : list.forEach((item) => data.push(...item));
        const date = vue.toRaw(data.find((item) => item.day === "01"));
        calendarContext.headerContent.title = date.year + "年" || "";
      }
    };
    const init = () => {
      calendarValue.value ? setDate() : setToday();
    };
    vue.onMounted(() => {
      init();
    });
    vue.watch([() => props.multiple, () => calendarContext == null ? void 0 : calendarContext.value], () => {
      handle = useCalendar.useCalendar("year", props.multiple);
      init();
    });
    vue.watchEffect(() => {
      var _a;
      formData.value.list = props.dataSource.length ? props.dataSource : (_a = formData.value) == null ? void 0 : _a.list;
      formData.value.list = config.filterArrayTwoDimensional(formData.value.list, props.columns);
      (calendarContext == null ? void 0 : calendarContext.headerContent) && getTitle();
    });
    __expose({
      prev,
      next,
      setToday,
      change,
      setDate,
      getSelectedData
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(calendarNS).setBlock("year")])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(calendarNS).setBlockModifier("year", "body"))
        }, [
          vue.createElementVNode("table", null, [
            vue.createElementVNode("colgroup", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.columns, (item) => {
                return vue.openBlock(), vue.createElementBlock("col", { key: item });
              }), 128))
            ]),
            vue.createElementVNode("tbody", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(formData.value.list, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("tr", {
                  key: index,
                  style: vue.normalizeStyle(columnsStyle.value)
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (v, i) => {
                    return vue.openBlock(), vue.createElementBlock("td", {
                      class: vue.normalizeClass([vue.unref(calendarNS).setBlockModifier("year", "cell")]),
                      key: v,
                      title: v.date
                    }, [
                      vue.createElementVNode("div", {
                        onClick: ($event) => !props.disabled && change(v),
                        class: vue.normalizeClass(["vc-calendar-cell", {
                          "vc-pointer": !props.disabled,
                          "is-active": v.checked,
                          "is-current": vue.unref(handle).isCurrentMonth(v.value)
                        }])
                      }, [
                        vue.renderSlot(_ctx.$slots, "cellRender", {
                          data: v,
                          rowIndex: index,
                          columnIndex: i
                        }, () => [
                          vue.createElementVNode("div", _hoisted_3, [
                            vue.renderSlot(_ctx.$slots, "date", {
                              data: v,
                              rowIndex: index,
                              columnIndex: i
                            }, () => [
                              vue.createTextVNode(vue.toDisplayString(v.month) + "月 ", 1)
                            ])
                          ]),
                          vue.createElementVNode("div", {
                            class: vue.normalizeClass(contentClass.value),
                            style: vue.normalizeStyle(contentStyle.value)
                          }, [
                            vue.renderSlot(_ctx.$slots, "schedule", {
                              data: v,
                              rowIndex: index,
                              columnIndex: i
                            })
                          ], 6)
                        ])
                      ], 10, _hoisted_2)
                    ], 10, _hoisted_1);
                  }), 128))
                ], 4);
              }), 128))
            ])
          ])
        ], 2)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
