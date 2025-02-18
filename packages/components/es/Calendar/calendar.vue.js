import { defineComponent, ref, reactive, watchEffect, markRaw, computed, provide, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createTextVNode, toDisplayString, createVNode, withCtx, createSlots, unref, createBlock, resolveDynamicComponent, mergeProps, renderList, normalizeProps, guardReactiveProps } from "vue";
import { calendarProps, calendarEmits, CurrentText } from "./calendar.js";
import _sfc_main$1 from "../CalendarWeek/calendarWeek.vue.js";
import _sfc_main$2 from "../CalendarMonth/calendarMonth.vue.js";
import _sfc_main$3 from "../CalendarYear/calendarYear.vue.js";
import "../packages/hooks/useDayjs.js";
import { useNS } from "../packages/hooks/useNS.js";
import dayjs from "../node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js";
import { calendarContextKey } from "../packages/typings/calendar.js";
const _hoisted_1 = { class: "vc-calendar-header--title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "VcCalendar",
    inheritAttrs: false
  },
  __name: "calendar",
  props: calendarProps,
  emits: calendarEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const calendarNS = useNS("calendar");
    const _ref = ref();
    const componentName = ref();
    const components = {
      week: _sfc_main$1,
      month: _sfc_main$2,
      year: _sfc_main$3
    };
    const headerContent = reactive({
      title: dayjs().format("YYYY年MM月"),
      currentText: "",
      prevText: "",
      nextText: ""
    });
    watchEffect(() => {
      if (props.mode) {
        componentName.value = markRaw(components[props.mode]);
        headerContent.currentText = props.currentText || CurrentText[props.mode];
        headerContent.prevText = props.prevText;
        headerContent.nextText = props.nextText;
      }
    });
    const calendarValue = computed({
      get() {
        return props.value;
      },
      set(val) {
        emits("update:value", val);
      }
    });
    provide(
      calendarContextKey,
      reactive({
        headerContent,
        value: calendarValue
      })
    );
    const calendarClass = computed(() => {
      return [
        calendarNS.namespace
      ];
    });
    const calendarHeaderClass = computed(() => {
      return [
        calendarNS.setBlock("header")
      ];
    });
    const componentRef = ref();
    const prev = () => {
      var _a;
      (_a = componentRef.value) == null ? void 0 : _a.prev();
    };
    const setToday = () => {
      var _a;
      (_a = componentRef.value) == null ? void 0 : _a.setToday();
    };
    const next = () => {
      var _a;
      (_a = componentRef.value) == null ? void 0 : _a.next();
    };
    const change = (appointDate) => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.change(appointDate);
    };
    const setDate = (appointDate) => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.setDate(appointDate);
    };
    const getSelectedData = () => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.getSelectedData();
    };
    __expose({
      prev,
      setToday,
      setDate,
      next,
      change,
      getSelectedData
    });
    return (_ctx, _cache) => {
      const _component_vc_button = resolveComponent("vc-button");
      const _component_vc_button_group = resolveComponent("vc-button-group");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(calendarClass.value),
        ref_key: "_ref",
        ref: _ref
      }, [
        createElementVNode("div", {
          class: normalizeClass(calendarHeaderClass.value)
        }, [
          renderSlot(_ctx.$slots, "header", { data: headerContent }, () => [
            createElementVNode("span", _hoisted_1, [
              renderSlot(_ctx.$slots, "title", {
                title: headerContent.title
              }, () => [
                createTextVNode(toDisplayString(headerContent.title), 1)
              ])
            ]),
            createVNode(_component_vc_button_group, null, {
              default: withCtx(() => [
                createVNode(_component_vc_button, {
                  prefixIcon: "ArrowLeft",
                  onClick: prev
                }, createSlots({ _: 2 }, [
                  headerContent.prevText ? {
                    name: "default",
                    fn: withCtx(() => [
                      createTextVNode(toDisplayString(headerContent.prevText), 1)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1024),
                createVNode(_component_vc_button, { onClick: setToday }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(headerContent.currentText), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_vc_button, {
                  suffixIcon: "ArrowRight",
                  onClick: next
                }, createSlots({ _: 2 }, [
                  headerContent.nextText ? {
                    name: "default",
                    fn: withCtx(() => [
                      createTextVNode(toDisplayString(headerContent.nextText), 1)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1024)
              ]),
              _: 1
            })
          ])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(unref(calendarNS).setBlock("wrap"))
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(componentName.value), mergeProps(_ctx.$attrs, {
            ref_key: "componentRef",
            ref: componentRef
          }), createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots), (item) => {
              return {
                name: item,
                fn: withCtx((data) => [
                  renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data)))
                ])
              };
            })
          ]), 1040))
        ], 2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
