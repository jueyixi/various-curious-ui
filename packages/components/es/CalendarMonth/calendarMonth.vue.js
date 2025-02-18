import { defineComponent, computed, inject, ref, onMounted, watch, watchEffect, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, Fragment, renderList, renderSlot, createTextVNode, toDisplayString, normalizeStyle, toRaw } from "vue";
import { calendarMonthProps, calendarMonthEmits } from "./calendarMonth.js";
import { useCalendar } from "../packages/hooks/useCalendar.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import "../packages/utils/IndexManager.js";
import { isString, isArray } from "../packages/utils/is.js";
import { setValueByPx, filterArrayTwoDimensional } from "../packages/utils/config.js";
import { calendarContextKey } from "../packages/typings/calendar.js";
const _hoisted_1 = ["title"];
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "vc-calendar-cell--date" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcCalendarMonth",
    inheritAttrs: false
  },
  __name: "calendarMonth",
  props: {
    ...calendarMonthProps
  },
  emits: calendarMonthEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const contentClass = computed(() => {
      const classList = ["vc-calendar-cell--schedule"];
      if (props.contentClass) {
        if (isString(props.contentClass)) {
          classList.push(props.contentClass);
        } else if (isArray(props.contentClass)) {
          classList.push(...props == null ? void 0 : props.contentClass);
        }
      }
      return classList;
    });
    const contentStyle = computed(() => {
      const style = {};
      if (props.minHeight) {
        style.minHeight = setValueByPx(props.minHeight);
      }
      if (props.maxHeight) {
        style.maxHeight = setValueByPx(props.maxHeight);
      }
      if (props.height) {
        style.height = props.height === "auto" ? props.height : setValueByPx(props.height);
      }
      return [style, props.contentStyle];
    });
    const columnsStyle = computed(() => {
      return { columnGap: setValueByPx(props.columnsGap) };
    });
    const calendarContext = inject(calendarContextKey, null);
    const calendarValue = computed({
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
    const calendarNS = useNS("calendar");
    let handle = useCalendar("month", props.multiple);
    const formData = ref({});
    const selectedData = ref([]);
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
    const current = ref();
    const getTitle = () => {
      const { list } = toRaw(formData.value);
      if (list.length) {
        const data = [];
        list == null ? void 0 : list.forEach((item) => data.push(...item));
        const date = toRaw(data.find((item) => item.day === "01"));
        current.value = date.month;
        calendarContext.headerContent.title = date.year + "年" + date.month + "月" || "";
      }
    };
    const isInCurrentMonth = computed(() => {
      return (date) => {
        return date.month === current.value && date.day >= 1 && date.day <= 31;
      };
    });
    const init = () => {
      calendarValue.value ? setDate() : setToday();
    };
    onMounted(() => {
      init();
    });
    watch([() => props.multiple, () => calendarContext == null ? void 0 : calendarContext.value], () => {
      handle = useCalendar("month", props.multiple);
      init();
    });
    watchEffect(() => {
      var _a;
      formData.value.list = props.dataSource.length ? props.dataSource : (_a = formData.value) == null ? void 0 : _a.list;
      formData.value.list = filterArrayTwoDimensional(formData.value.list, props.columns.length);
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(calendarNS).setBlock("month")])
      }, [
        createElementVNode("table", {
          class: normalizeClass([unref(calendarNS).setBlockModifier("month", "header")])
        }, [
          createElementVNode("thead", null, [
            createElementVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.columns, (item, index) => {
                return openBlock(), createElementBlock("th", {
                  class: normalizeClass(unref(calendarNS).setBlockModifier("month", "th")),
                  key: index
                }, [
                  renderSlot(_ctx.$slots, "columnsItem", {
                    data: item,
                    index
                  }, () => [
                    createTextVNode(toDisplayString(item), 1)
                  ])
                ], 2);
              }), 128))
            ])
          ])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(unref(calendarNS).setBlockModifier("month", "body"))
        }, [
          createElementVNode("table", null, [
            createElementVNode("colgroup", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.columns.length, (item) => {
                return openBlock(), createElementBlock("col", { key: item });
              }), 128))
            ]),
            createElementVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(formData.value.list, (item, index) => {
                return openBlock(), createElementBlock("tr", {
                  key: index,
                  style: normalizeStyle(columnsStyle.value)
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item, (v, i) => {
                    return openBlock(), createElementBlock("td", {
                      class: normalizeClass([unref(calendarNS).setBlockModifier("month", "cell")]),
                      key: v,
                      title: v.date
                    }, [
                      createElementVNode("div", {
                        onClick: ($event) => !props.disabled && change(v),
                        class: normalizeClass(["vc-calendar-cell", {
                          "vc-pointer": !props.disabled,
                          "is-notmonth": !isInCurrentMonth.value(v),
                          "is-active": v.checked,
                          "is-current": unref(handle).isCurrentDay(v.value)
                        }])
                      }, [
                        renderSlot(_ctx.$slots, "cellRender", {
                          data: v,
                          rowIndex: index,
                          columnIndex: i
                        }, () => [
                          createElementVNode("div", _hoisted_3, [
                            renderSlot(_ctx.$slots, "date", {
                              data: v,
                              rowIndex: index,
                              columnIndex: i
                            }, () => [
                              createTextVNode(toDisplayString(v.day), 1)
                            ])
                          ]),
                          createElementVNode("div", {
                            class: normalizeClass(contentClass.value),
                            style: normalizeStyle(contentStyle.value)
                          }, [
                            renderSlot(_ctx.$slots, "schedule", {
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
export {
  _sfc_main as default
};
